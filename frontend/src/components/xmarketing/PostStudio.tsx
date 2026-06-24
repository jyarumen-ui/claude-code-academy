import { useState, useRef, useMemo } from 'react'
import {
  Sparkles, Loader2, ChevronRight, RefreshCw,
  Copy, AtSign, Check, ChevronDown, ChevronUp,
  Trophy, Send, Calendar, Pencil, CheckCheck, BookOpen, MessageSquare,
  Eye, CalendarDays
} from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { addHistory } from '../../utils/historyStore'
import { buildInstructorSystemPrompt, loadInstructorMsgs } from '../../utils/instructorStore'
import { loadXAccountStyle, saveXAccountStyle } from '../../utils/xAccountStore'
import { getActiveAccount, updateAccount } from '../../utils/accountStore'
import { addSchedule } from '../../utils/scheduleStore'

function KnowledgeBadge() {
  const kCount = loadKnowledge().length
  const dCount = loadInstructorMsgs().length
  if (kCount === 0 && dCount === 0) return null
  return (
    <div className="flex items-center gap-2 mt-2 flex-wrap">
      {kCount > 0 && (
        <span className="flex items-center gap-1 text-xs text-brand-300 bg-brand-500/10 border border-brand-500/20 px-2 py-0.5 rounded-full">
          <BookOpen size={10} />教材{kCount}件 反映中
        </span>
      )}
      {dCount > 0 && (
        <span className="flex items-center gap-1 text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
          <MessageSquare size={10} />Discord講師 反映中
        </span>
      )}
    </div>
  )
}

// ─── 定数 ─────────────────────────────────────────────────────────────────────

const TARGETS = [
  '副業を始めたい会社員','副業で月5万を目指している人','副業で月30万を目指している人',
  'フリーランスを目指している人','在宅ワークをしたい主婦・主夫','20代の社会人',
  '30代の会社員','40〜50代の会社員','大学生・学生','専業主婦・主夫',
  'シングルマザー・シングルファザー','定年後の60代','AIツールに興味がある人',
  'プログラミング未経験者','ブログ初心者','SNS初心者','物販初心者','投資初心者',
  '英語学習者','ダイエット中の人','転職を考えている人','起業を考えているサラリーマン',
  '収入を増やしたい人','時間の自由がほしい人','スキルアップしたい社会人',
  '地方在住で仕事に悩む人','育児中で働き方を変えたい人','X（AtSign）を伸ばしたい人',
]

const POST_TYPES = [
  '教育型（気づき→期待感→不足感）','ストーリー型（体験談・失敗談から学び）',
  'リスト型（〇〇な人の特徴◯選）','問いかけ型（読者に問いかけて引き込む）',
  '共感型（悩みに共感して解決策を提示）','実績報告型（具体的な成果を発信）',
  'ノウハウ解説型（方法・手順を解説）','警告型（〇〇してると損する）',
  '比較型（AよりBが良い理由）','引用バズ狙い型（トレンドに乗る）',
  '自己紹介型（新規フォロワー向け）','問題提起型（業界・常識への疑問）',
]

const CHAR_COUNTS: number[] = []
for (let v = 80; v <= 1000; v += 50) CHAR_COUNTS.push(v)

const TYPE_COLOR: Record<string, string> = {
  '教育': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  '共感': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  '実績': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'ストーリー': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
}

// 10項目スコアのラベル（固定順）
const MATERIAL_LABELS = ['フックの強さ','期待感の演出','不足感の演出','ターゲット絞り込み','アルゴリズム適性']
const DISCORD_LABELS  = ['WHO・WHAT・HOWの明確さ','初動バズ可能性','エンゲージメント誘発力','信頼性・誠実さ','行動誘発力（CTA）']

// ─── 型 ───────────────────────────────────────────────────────────────────────

interface ThemeItem { theme: string; reason: string; type: string }

interface PostVariant {
  post: string
  pattern: string
  target: string
  recommended: boolean
  totalScore: number
  instructorComment: string
  // 10項目スコア: [教材5, Discord5]
  scores: number[]
}

// ─── 文体分析 ─────────────────────────────────────────────────────────────────

interface StyleGuide {
  samples: string[]
  topEmojis: string[]
  endings: string[]
  firstPerson: string | null
  avgNewlines: number
  hasKuten: boolean
  hasTen: boolean
}

function buildStyleGuide(posts: string): StyleGuide | null {
  if (!posts.trim()) return null
  const samples = posts.split(/---+/).map(s => s.trim()).filter(Boolean)
  const emojiMap: Record<string, number> = {}
  for (const m of posts.matchAll(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu))
    emojiMap[m[0]] = (emojiMap[m[0]] ?? 0) + 1
  const topEmojis = Object.entries(emojiMap).sort((a, b) => b[1] - a[1]).slice(0, 12).map(([e]) => e)
  const endings = samples.map(s => s.split('\n').filter(Boolean).pop()?.slice(-8) ?? '').filter(Boolean)
  const firstPerson = posts.match(/僕|私|俺|自分|わたし|ぼく/)
    ? (posts.match(/僕/g) ? '僕' : posts.match(/俺/g) ? '俺' : '私') : null
  const avgNewlines = samples.reduce((s, p) => s + (p.match(/\n/g)?.length ?? 0), 0) / (samples.length || 1)
  const hasKuten = posts.includes('。')
  const hasTen = posts.includes('、')
  return { samples, topEmojis, endings, firstPerson, avgNewlines, hasKuten, hasTen }
}

// ─── JSONパース ───────────────────────────────────────────────────────────────

function extractJson(raw: string): string {
  const s = raw.replace(/```json\s*/gi, '').replace(/```/g, '').trim()
  const start = s.indexOf('{')
  const end = s.lastIndexOf('}')
  if (start === -1 || end === -1) return ''
  return s.slice(start, end + 1)
}

// ─── サブコンポーネント ────────────────────────────────────────────────────────

function StarRow({ label, score }: { label: string; score: number }) {
  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-800 last:border-0">
      <span className="text-gray-400 text-xs">{label}</span>
      <div className="flex gap-0.5">
        {[1,2,3,4,5].map(i => (
          <span key={i} className={`text-xs ${i <= score ? 'text-yellow-400' : 'text-gray-700'}`}>★</span>
        ))}
      </div>
    </div>
  )
}

function ScoreBadge({ score }: { score: number }) {
  const color = score >= 4 ? 'text-green-400 bg-green-500/10 border-green-500/30'
    : score >= 3 ? 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30'
    : 'text-red-400 bg-red-500/10 border-red-500/30'
  return <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${color}`}>{score.toFixed(1)}点</span>
}

function PostCard({ variant, index, selected, copiedId, onSelect, onCopy, onEdit }: {
  variant: PostVariant & { editedPost?: string }
  index: number; selected: boolean
  copiedId: number | null
  onSelect: (i: number) => void
  onCopy: (i: number, text: string) => void
  onEdit: (i: number, text: string) => void
}) {
  const [showScores, setShowScores] = useState(false)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(variant.editedPost ?? variant.post)

  const displayPost = variant.editedPost ?? variant.post
  const scores = variant.scores ?? []
  const materialScores = scores.slice(0, 5)
  const discordScores  = scores.slice(5, 10)

  const handleEditSave = () => {
    onEdit(index, draft)
    setEditing(false)
  }

  return (
    <div onClick={() => !editing && onSelect(index)}
      className={`rounded-2xl border p-4 space-y-3 transition-all ${editing ? 'cursor-default' : 'cursor-pointer'} ${
        selected
          ? 'border-brand-500 bg-brand-500/10 ring-2 ring-brand-500/30'
          : variant.recommended
          ? 'border-yellow-500/60 bg-yellow-500/5 hover:border-yellow-400'
          : 'border-gray-700 bg-gray-900 hover:border-gray-500'
      }`}>

      {/* ヘッダー */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-gray-400">#{index + 1}</span>
          <span className="text-xs font-semibold text-white bg-gray-800 px-2 py-0.5 rounded-full border border-gray-700">{variant.pattern}</span>
          {variant.recommended && (
            <span className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/15 border border-yellow-500/40 px-2 py-0.5 rounded-full">
              <Trophy size={10} />おすすめ
            </span>
          )}
          {selected && !editing && <span className="text-xs font-bold text-brand-400 bg-brand-500/15 border border-brand-500/40 px-2 py-0.5 rounded-full">✓ 選択中</span>}
          <ScoreBadge score={variant.totalScore} />
        </div>
        <div className="flex gap-1.5 shrink-0" onClick={e => e.stopPropagation()}>
          {editing ? (
            <button onClick={handleEditSave}
              className="flex items-center gap-1 text-xs text-green-400 border border-green-500/40 rounded-lg px-2 py-1 hover:bg-green-500/10 transition-colors">
              <CheckCheck size={11} />保存
            </button>
          ) : (
            <button onClick={() => { setDraft(displayPost); setEditing(true) }}
              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-1 transition-colors">
              <Pencil size={11} />編集
            </button>
          )}
          <button onClick={() => onCopy(index, displayPost)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-1 transition-colors">
            <Copy size={11} />{copiedId === index ? '✓' : 'コピー'}
          </button>
        </div>
      </div>

      {/* ポスト本文 or 編集エリア */}
      {editing ? (
        <textarea
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onClick={e => e.stopPropagation()}
          rows={6}
          className="w-full bg-gray-800 border border-brand-500/60 rounded-xl px-3 py-2.5 text-gray-200 text-sm leading-relaxed focus:outline-none resize-none"
        />
      ) : (
        <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{displayPost}</p>
      )}
      <p className="text-gray-500 text-xs">{displayPost.length}文字 ／ 🎯 {variant.target}</p>

      {/* 講師コメント */}
      <div className="bg-gray-800/60 border border-gray-700 rounded-xl px-3 py-2.5" onClick={e => e.stopPropagation()}>
        <p className="text-xs text-purple-300 font-bold mb-1">👨‍🏫 講師コメント</p>
        <p className="text-gray-300 text-xs leading-relaxed">{variant.instructorComment}</p>
      </div>

      {/* スコア詳細（展開） */}
      {scores.length === 10 && (
        <div onClick={e => e.stopPropagation()}>
          <button onClick={() => setShowScores(v => !v)}
            className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors">
            {showScores ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            詳細スコアを{showScores ? '閉じる' : '見る'}
          </button>
          {showScores && (
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="rounded-xl bg-gray-900/80 border border-sky-500/20 p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <BookOpen size={11} className="text-sky-400" />
                  <span className="text-xs font-bold text-sky-300">教材ベース</span>
                </div>
                {MATERIAL_LABELS.map((label, i) => (
                  <StarRow key={label} label={label} score={materialScores[i] ?? 0} />
                ))}
              </div>
              <div className="rounded-xl bg-gray-900/80 border border-green-500/20 p-3">
                <div className="flex items-center gap-1.5 mb-2">
                  <MessageSquare size={11} className="text-green-400" />
                  <span className="text-xs font-bold text-green-300">Discord講師</span>
                </div>
                {DISCORD_LABELS.map((label, i) => (
                  <StarRow key={label} label={label} score={discordScores[i] ?? 0} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ─── メインコンポーネント ─────────────────────────────────────────────────────

interface Props { onSchedule?: (text: string) => void }

export function PostStudio({ onSchedule }: Props) {
  const [xOpen, setXOpen] = useState(false)
  const [xUrl, setXUrl] = useState(() => loadXAccountStyle()?.url ?? '')
  const [xPosts, setXPosts] = useState(() => loadXAccountStyle()?.posts ?? '')
  const [xSaved, setXSaved] = useState(false)

  const [themes, setThemes] = useState<ThemeItem[]>([])
  const [themeLoading, setThemeLoading] = useState(false)
  const [themeError, setThemeError] = useState('')

  const [theme, setTheme] = useState('')
  const [targetLayer, setTargetLayer] = useState('')
  const [postType, setPostType] = useState('')
  const [charCount, setCharCount] = useState(140)
  const [loading, setLoading] = useState(false)
  const [variants, setVariants] = useState<(PostVariant & { editedPost?: string })[]>([])
  const [postError, setPostError] = useState('')
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  const [bulkScheduled, setBulkScheduled] = useState(false)

  const postRef  = useRef<HTMLDivElement>(null)
  const step7Ref = useRef<HTMLDivElement>(null)
  const isXReady = xPosts.trim().length > 0

  const styleGuide = useMemo(() => buildStyleGuide(xPosts), [xPosts])

  const saveX = (url: string, posts: string) => {
    saveXAccountStyle({ url, posts, savedAt: new Date().toISOString() })
    // アクティブアカウントがあればそちらにも保存
    const acc = getActiveAccount()
    if (acc) updateAccount(acc.id, { xPostsUrl: url, xPostsContent: posts })
  }
  const handleXUrl   = (v: string) => { setXUrl(v);   saveX(v, xPosts) }
  const handleXPosts = (v: string) => { setXPosts(v); saveX(xUrl, v) }
  const handleXSave  = () => { saveX(xUrl, xPosts); setXSaved(true); setXOpen(false); setTimeout(() => setXSaved(false), 2000) }

  // テーマ提案
  const handleThemeAnalyze = async () => {
    setThemeLoading(true); setThemeError(''); setThemes([])
    try {
      const activeAcc = getActiveAccount()
      const accId = activeAcc?.id
      const persona   = personaToPrompt(loadPersona(accId))
      const knowledge = knowledgeToPrompt(loadKnowledge(accId))
      const xInfo = [xUrl ? `URL: ${xUrl}` : '', xPosts ? `過去ポスト:\n${xPosts}` : ''].filter(Boolean).join('\n')
      const system = `あなたはなまいきスクールのAI講師。以下の教材を読み込み、その内容に基づいてテーマを提案すること。
${persona ? `【発信者】${persona}\n` : ''}
【教材】
${knowledge}

【ルール】
- typeは必ず「教育」「共感」「実績」「ストーリー」の4種のみ使用
- 4種それぞれ均等に（各2〜3件）、同じtypeが3件以上にならないこと
- 教材のノウハウ・具体数字・体験談に直結したテーマのみ提案
- 抽象的なテーマ禁止（「AIの可能性」「副業の重要性」など）

JSON形式のみ返す: {"themes":[{"theme":"","reason":"","type":"教育"}]}`
      const raw = await callClaude({ system, userMessage: `${xInfo}\n\n今すぐ投稿できるテーマを10個提案（教育3・共感2〜3・実績2〜3・ストーリー2〜3の配分で）`, maxTokens: 2000 })
      const parsed = JSON.parse(extractJson(raw)) as { themes: ThemeItem[] }
      setThemes(parsed.themes)
    } catch (e) { setThemeError((e as Error).message) }
    finally { setThemeLoading(false) }
  }

  const handleSelectTheme = (t: string) => {
    setTheme(t)
    setTimeout(() => postRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  // 4パターン生成
  const handleGenerate = async () => {
    if (!theme) return
    setLoading(true); setPostError(''); setVariants([]); setSelectedIdx(null)
    try {
      const activeAcc = getActiveAccount()
      const accId = activeAcc?.id
      const persona       = personaToPrompt(loadPersona(accId))
      const knowledge     = knowledgeToPrompt(loadKnowledge(accId))
      const instructorCtx = buildInstructorSystemPrompt()
      // アカウント固有のXポストを優先、なければグローバルにフォールバック
      const xStyle = activeAcc?.xPostsContent
        ? { url: activeAcc.xPostsUrl ?? '', posts: activeAcc.xPostsContent }
        : loadXAccountStyle()

      const rawPosts = xStyle?.posts?.trim() ?? ''

      const guide = buildStyleGuide(rawPosts)

      const styleBlock = guide ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【あなたはこのXアカウントの本人として投稿を書く — 最優先ルール】
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

あなた自身の過去の投稿がここにあります。これがあなたの書き方です：

${guide.samples.slice(0, 6).map((s, i) => `--- 投稿${i + 1} ---\n${s}`).join('\n\n')}

【あなたの文体特徴（必ず全部守る）】
✅ よく使う絵文字: ${guide.topEmojis.length ? guide.topEmojis.join(' ') : 'なし（絵文字を使わないスタイル）'}
✅ 文末パターン: ${guide.endings.slice(0, 4).join(' ／ ')}
✅ 一人称: ${guide.firstPerson ?? '指定なし'}
✅ 改行スタイル: ${guide.avgNewlines > 3 ? '短文ごとに改行（1〜2文で改行）' : '比較的まとめて書く'}
✅ 句読点: ${guide.hasKuten ? '「。」を使う' : '「。」は使わない'} ／ ${guide.hasTen ? '「、」を使う' : '「、」はあまり使わない'}

【絶対禁止 — AIっぽい文章パターン】
❌「〜でしょう」「〜かと思います」「〜といえます」「〜ではないでしょうか」
❌「まずは」「次に」「最後に」などの箇条書き説明調
❌ 上の投稿にない絵文字を勝手に追加する
❌ 上の投稿より丁寧な語尾にする（例: 「〜しました」→「〜した」に合わせる）
❌ 一人称を変える
❌ 改行リズムを変える

生成後に必ず見直し: 上の過去投稿を読んだ人が「同じ人が書いた」と感じるか確認してから出力すること。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
` : ''

      const patterns = postType
        ? `4パターン全て「${postType}」でフック・構成・切り口を変えて作成`
        : `パターン1:教育型 / パターン2:ストーリー型 / パターン3:共感型 / パターン4:実績型`

      const scoreLabels = '[フック強さ,期待感,不足感,ターゲット,アルゴリズム,WHO明確さ,バズ可能性,エンゲージメント,信頼性,CTA]'

      const system = `${styleBlock}
あなたはなまいきスクールのAI講師。教材とDiscord講師発言を読み込み、上記の文体でポストを生成する。

${persona ? `【発信者キャラ】\n${persona}\n` : ''}
【===教材・ナレッジベース===】
${knowledge}
【===ここまで===】

【===Discord講師発言===】
${instructorCtx}
【===ここまで===】

【生成ルール】
- 教材のフック・構成・ノウハウを具体的に使うこと
- ${patterns}
- 各postは${charCount}文字前後（±20文字）
- 文体は上記スタイルに100%従う。AI文体は絶対禁止
- 最もバズりやすい1つのみrecommended:true
- totalScoreは5点満点（小数第1位）
- instructorCommentは教材を具体的に引用して添削。120文字以内
- scoresは${scoreLabels}の順で10個の1〜5整数配列

【出力形式 — JSONのみ、前後の説明文・マークダウン禁止】
{"posts":[{"post":"","pattern":"","target":"","recommended":false,"totalScore":0.0,"instructorComment":"","scores":[3,3,3,3,3,3,3,3,3,3]}]}`

      // ユーザーメッセージにも文体サンプルを再掲（最後の指示を優先するClaudeの性質を活用）
      const userMsg = [
        rawPosts ? `【文体確認】以下が自分の過去ポストです。この書き方を完全コピーすること：\n${guide?.samples.slice(0,3).join('\n---\n')}\n\n` : '',
        `テーマ: ${theme}`,
        targetLayer ? `ターゲット: ${targetLayer}` : '',
        `文字数: ${charCount}文字前後`,
        `4パターン生成してください。`,
      ].filter(Boolean).join('\n')

      const raw = await callClaude({ system, userMessage: userMsg, maxTokens: 4000 })
      const jsonStr = extractJson(raw)
      if (!jsonStr) throw new Error(`JSONが取得できませんでした。再試行してください。\n[先頭200文字] ${raw.slice(0, 200)}`)
      const parsed = JSON.parse(jsonStr) as { posts: PostVariant[] }
      if (!parsed.posts?.length) throw new Error('ポストの生成に失敗しました。再度お試しください。')

      setVariants(parsed.posts)
      parsed.posts.forEach(v => addHistory({ text: v.post, theme, purpose: v.pattern }))
      const recIdx = parsed.posts.findIndex(v => v.recommended)
      setSelectedIdx(recIdx >= 0 ? recIdx : 0)
      setTimeout(() => step7Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 400)
    } catch (e) { setPostError((e as Error).message) }
    finally { setLoading(false) }
  }

  const handleCopy = (i: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(i); setTimeout(() => setCopiedId(null), 2000)
  }

  const handleEdit = (i: number, text: string) => {
    setVariants(vs => vs.map((v, idx) => idx === i ? { ...v, editedPost: text } : v))
  }

  const handlePostNow = () => {
    if (selectedIdx === null) return
    const v = variants[selectedIdx]
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(v.editedPost ?? v.post)}`, '_blank')
  }

  const handlePostThreads = () => {
    if (selectedIdx === null) return
    const v = variants[selectedIdx]
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(v.editedPost ?? v.post)}`, '_blank')
  }

  const handleSchedule = () => {
    if (selectedIdx === null || !onSchedule) return
    const v = variants[selectedIdx]
    onSchedule(v.editedPost ?? v.post)
  }

  const handleBulkSchedule = () => {
    if (variants.length === 0) return
    const pad = (n: number) => String(n).padStart(2, '0')
    const toLocal = (d: Date) =>
      `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`

    const base = new Date()
    base.setDate(base.getDate() + 1)
    base.setHours(9, 0, 0, 0)
    const intervalMs = 6 * 60 * 60 * 1000

    variants.forEach((v, i) => {
      const t = new Date(base.getTime() + intervalMs * i)
      addSchedule({ text: v.editedPost ?? v.post, platform: 'both', scheduledAt: toLocal(t) })
    })
    setBulkScheduled(true)
    setTimeout(() => setBulkScheduled(false), 3000)
  }

  const recommendedIdx = variants.findIndex(v => v.recommended)

  return (
    <div className="space-y-4">

      {/* STEP 4: Xアカウント */}
      <div className="rounded-2xl bg-gray-900 border border-gray-700 overflow-hidden">
        <button onClick={() => setXOpen(o => !o)}
          className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors">
          <div className="flex items-center gap-2 flex-wrap">
            <AtSign size={15} className="text-sky-400" />
            <span className="text-white text-sm font-bold">STEP 4｜Xアカウント登録</span>
            {xUrl && <span className="text-sky-300 text-xs">{xUrl.replace('https://x.com/', '@')}</span>}
            {isXReady
              ? <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">✅ スタイル学習済み</span>
              : <span className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-full">⚠ 過去ポストを貼ってください</span>}
          </div>
          {xOpen ? <ChevronUp size={15} className="text-gray-400 shrink-0" /> : <ChevronDown size={15} className="text-gray-400 shrink-0" />}
        </button>
        {xOpen && (
          <div className="px-5 pb-5 space-y-3 border-t border-gray-800 pt-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">XプロフィールURL</label>
              <input value={xUrl} onChange={e => handleXUrl(e.target.value)}
                placeholder="https://x.com/username"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">過去のポスト（5〜10件）— 「---」で区切って複数貼るとスタイルを学習</label>
              <textarea value={xPosts} onChange={e => handleXPosts(e.target.value)}
                placeholder={"AIで作業を自動化したら月10時間浮きました✨\n---\n副業で稼ぎたいなら、まずこれを読んで👇\n---\n正直に言います。最初は全然稼げなかった…"}
                rows={7}
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none" />
            </div>
            <button onClick={handleXSave}
              className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
              <Check size={14} />{xSaved ? '保存しました！' : '閉じる・保存'}
            </button>
          </div>
        )}
      </div>

      {/* 文体プレビュー */}
      {styleGuide && (
        <div className="rounded-2xl border border-sky-500/30 bg-sky-500/5 p-4 space-y-3">
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-sky-400" />
            <p className="text-sky-200 font-bold text-sm">AIが学習する文体プレビュー</p>
            <span className="text-xs text-sky-400/60 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-full">{styleGuide.samples.length}件のポストを学習中</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            <div className="bg-gray-900 rounded-xl border border-gray-800 px-3 py-2">
              <p className="text-gray-500 mb-1">絵文字（頻度順）</p>
              <p className="text-white text-base leading-none">{styleGuide.topEmojis.length ? styleGuide.topEmojis.slice(0,8).join(' ') : '─ なし'}</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 px-3 py-2">
              <p className="text-gray-500 mb-1">文末パターン</p>
              <p className="text-gray-200 leading-snug">{styleGuide.endings.slice(0,3).join(' / ') || '─'}</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 px-3 py-2">
              <p className="text-gray-500 mb-1">一人称</p>
              <p className="text-gray-200">{styleGuide.firstPerson ?? '─ 未検出'}</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 px-3 py-2">
              <p className="text-gray-500 mb-1">改行スタイル</p>
              <p className="text-gray-200">{styleGuide.avgNewlines > 3 ? '短文ごと改行' : 'まとめて書く'}</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 px-3 py-2">
              <p className="text-gray-500 mb-1">句読点</p>
              <p className="text-gray-200">{[styleGuide.hasKuten ? '「。」あり' : '「。」なし', styleGuide.hasTen ? '「、」あり' : '「、」なし'].join(' ／ ')}</p>
            </div>
          </div>
        </div>
      )}

      {/* STEP 5 & 6: 2カラム */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* STEP 5: テーマ提案 */}
        <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4 self-start">
          <div>
            <p className="text-white font-bold text-sm mb-0.5">STEP 5｜💡 テーマ提案</p>
            <p className="text-gray-400 text-xs mb-2">登録済みデータをもとにAIが10個のテーマを提案。クリックでSTEP6に反映。</p>
            <div className="flex flex-wrap gap-1.5">
              {xUrl && <span className="text-xs bg-sky-500/10 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-full">{xUrl.replace('https://x.com/', '@')}</span>}
              {isXReady && <span className="text-xs bg-green-500/10 text-green-300 border border-green-500/30 px-2 py-0.5 rounded-full">✅ 文体学習済み</span>}
              <span className="text-xs bg-gray-700/50 text-gray-400 border border-gray-700 px-2 py-0.5 rounded-full">キャラ設定</span>
              <span className="text-xs bg-gray-700/50 text-gray-400 border border-gray-700 px-2 py-0.5 rounded-full">教材</span>
            </div>
          </div>
          <button onClick={handleThemeAnalyze} disabled={themeLoading}
            className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors">
            {themeLoading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
            {themeLoading ? 'AIが分析中...' : 'テーマを10個提案してもらう'}
          </button>
          {themeError && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-xl px-3 py-2">{themeError}</p>}
          {themes.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-white text-xs font-bold">📋 提案テーマ</p>
                <button onClick={handleThemeAnalyze} className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-1 transition-colors">
                  <RefreshCw size={11} /> 再提案
                </button>
              </div>
              <div className="space-y-1.5">
                {themes.map((item, i) => (
                  <button key={i} onClick={() => handleSelectTheme(item.theme)}
                    className={`w-full flex items-start gap-2 p-2.5 rounded-xl border text-left transition-all group ${theme === item.theme ? 'border-sky-500 bg-sky-500/15' : 'border-gray-700 bg-gray-800 hover:border-sky-500/60 hover:bg-sky-500/10'}`}>
                    <span className="text-gray-500 text-xs font-bold mt-0.5 shrink-0 w-4">{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold leading-snug">{item.theme}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">{item.reason}</p>
                      <span className={`inline-block mt-1 text-xs px-1.5 py-0.5 rounded-full border ${TYPE_COLOR[item.type] ?? 'bg-gray-700 text-gray-300 border-gray-600'}`}>{item.type}</span>
                    </div>
                    <ChevronRight size={14} className={`shrink-0 mt-0.5 transition-colors ${theme === item.theme ? 'text-sky-400' : 'text-gray-600 group-hover:text-sky-400'}`} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* STEP 6: ポスト生成フォーム */}
        <div ref={postRef} className="space-y-4 self-start">
          <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
            <div>
              <p className="text-white font-bold text-sm mb-0.5">STEP 6｜🐦 ポスト生成（4パターン）</p>
              <p className="text-gray-400 text-xs">教材・Discord・登録済み文体を反映した4パターンを一括生成</p>
              <KnowledgeBadge />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="text-xs text-gray-400 mb-1 block">ターゲット</label>
                <select value={targetLayer} onChange={e => setTargetLayer(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-500">
                  <option value="">指定しない</option>
                  {TARGETS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">型を固定（任意）</label>
                <select value={postType} onChange={e => setPostType(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-500">
                  <option value="">自動（4種バラバラ）</option>
                  {POST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-1 block">文字数</label>
                <select value={charCount} onChange={e => setCharCount(Number(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-500">
                  {CHAR_COUNTS.map(c => <option key={c} value={c}>{c}文字</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">ポストテーマ *</label>
              <input value={theme} onChange={e => setTheme(e.target.value)}
                placeholder="例：AIで時間を3倍にした方法（←左のテーマをクリックで自動入力）"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
            </div>
            <button onClick={handleGenerate} disabled={loading || !theme}
              className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
              {loading ? '4パターン生成中...' : '4パターン生成する'}
            </button>
            {postError && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2 whitespace-pre-wrap">{postError}</p>}
          </div>
        </div>
      </div>

      {/* 生成結果 */}
      {variants.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="text-white font-bold">生成結果 — {variants.length}パターン</h3>
            {recommendedIdx >= 0 && (
              <span className="flex items-center gap-1 text-xs font-bold text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 px-2.5 py-1 rounded-full">
                <Trophy size={12} />#{recommendedIdx + 1} がおすすめ
              </span>
            )}
            <span className="text-xs text-gray-500">カードをクリックして選択 ／ 編集ボタンで文章を修正できます</span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {variants.map((v, i) => (
              <PostCard key={i} variant={v} index={i} selected={selectedIdx === i}
                copiedId={copiedId} onSelect={setSelectedIdx} onCopy={handleCopy} onEdit={handleEdit} />
            ))}
          </div>

          {/* STEP 7: 投稿 */}
          <div ref={step7Ref} className="rounded-2xl border border-brand-500/50 bg-brand-500/5 p-5 space-y-4">
            <div>
              <p className="text-white font-bold text-base mb-0.5">STEP 7｜📤 投稿する</p>
              <p className="text-gray-400 text-xs">カードをクリックしてポストを選択し、投稿方法を選んでください</p>
            </div>
            {selectedIdx !== null ? (
              <div className="space-y-3">
                <div className="rounded-xl bg-gray-900 border border-gray-700 px-4 py-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-brand-400">選択中 #{selectedIdx + 1} — {variants[selectedIdx].pattern}</span>
                    <ScoreBadge score={variants[selectedIdx].totalScore} />
                    {variants[selectedIdx].editedPost && <span className="text-xs text-orange-400 bg-orange-500/10 border border-orange-500/30 px-2 py-0.5 rounded-full">✏ 編集済み</span>}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap line-clamp-5">
                    {variants[selectedIdx].editedPost ?? variants[selectedIdx].post}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button onClick={handlePostNow}
                    className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors">
                    <Send size={16} />今すぐXに投稿
                  </button>
                  <button onClick={handlePostThreads}
                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors">
                    <MessageSquare size={16} />今すぐThreadsに投稿
                  </button>
                  <button onClick={handleSchedule} disabled={!onSchedule}
                    className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-white px-5 py-3 rounded-xl text-sm font-bold transition-colors">
                    <Calendar size={16} />この1件を予約
                  </button>
                </div>
                <div className="border-t border-gray-800 pt-3">
                  <button onClick={handleBulkSchedule}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-colors ${
                      bulkScheduled ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white'
                    }`}>
                    <CalendarDays size={16} />
                    {bulkScheduled ? `✓ 全${variants.length}件を予約リストに追加しました！` : `全${variants.length}件を一括予約（明日9時〜6時間間隔）`}
                  </button>
                  <p className="text-gray-600 text-xs text-center mt-1">予約管理タブで日時を個別に編集できます</p>
                </div>
              </div>
            ) : (
              <p className="text-gray-500 text-sm text-center py-3">↑ 上のカードをクリックしてポストを選んでください</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
