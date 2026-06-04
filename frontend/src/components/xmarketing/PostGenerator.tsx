import { useState } from 'react'
import { Copy, Sparkles, Loader2, Star, BookOpen, MessageSquare } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { getActiveAccountId } from '../../utils/accountStore'
import { addHistory } from '../../utils/historyStore'
import { buildInstructorSystemPrompt } from '../../utils/instructorStore'
import { loadXAccountStyle, buildStyleContext } from '../../utils/xAccountStore'
import { XAccountLoader } from './XAccountLoader'

const TARGETS = [
  '副業を始めたい会社員',
  '副業で月5万を目指している人',
  '副業で月30万を目指している人',
  'フリーランスを目指している人',
  '在宅ワークをしたい主婦・主夫',
  '20代の社会人',
  '30代の会社員',
  '40〜50代の会社員',
  '大学生・学生',
  '専業主婦・主夫',
  'シングルマザー・シングルファザー',
  '定年後の60代',
  'AIツールに興味がある人',
  'プログラミング未経験者',
  'ブログ初心者',
  'SNS初心者',
  '物販初心者',
  '投資初心者',
  '英語学習者',
  'ダイエット中の人',
  '転職を考えている人',
  '起業を考えているサラリーマン',
  '収入を増やしたい人',
  '時間の自由がほしい人',
  'スキルアップしたい社会人',
  '地方在住で仕事に悩む人',
  '育児中で働き方を変えたい人',
  'X（Twitter）を伸ばしたい人',
]

const POST_TYPES = [
  '教育型（気づき→期待感→不足感）',
  'ストーリー型（体験談・失敗談から学び）',
  'リスト型（〇〇な人の特徴◯選）',
  '問いかけ型（読者に問いかけて引き込む）',
  '共感型（悩みに共感して解決策を提示）',
  '実績報告型（具体的な成果を発信）',
  'ノウハウ解説型（方法・手順を解説）',
  '警告型（〇〇してると損する）',
  '比較型（AよりBが良い理由）',
  '引用バズ狙い型（トレンドに乗る）',
  '自己紹介型（新規フォロワー向け）',
  '問題提起型（業界・常識への疑問）',
]

const CHAR_COUNTS: number[] = []
for (let v = 80; v <= 1000; v += 50) CHAR_COUNTS.push(v)

interface ScoreItem { name: string; score: number; comment: string }

interface Analysis {
  post: string
  target: string
  materialItems: ScoreItem[]
  discordItems: ScoreItem[]
}

function Stars({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={13} fill={i <= score ? '#f59e0b' : 'none'} className={i <= score ? 'text-yellow-400' : 'text-gray-600'} />
      ))}
    </div>
  )
}

function ScoreRow({ index, item, color }: { index: number; item: ScoreItem; color: string }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-800 last:border-0">
      <span className={`text-xs font-bold w-5 shrink-0 mt-0.5 ${color}`}>#{index + 1}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-white text-xs font-medium">{item.name}</span>
          <Stars score={item.score} />
        </div>
        <p className="text-gray-400 text-xs">{item.comment}</p>
      </div>
    </div>
  )
}

interface PostGeneratorProps { initialTheme?: string }

export function PostGenerator({ initialTheme = '' }: PostGeneratorProps) {
  const [theme, setTheme] = useState(initialTheme)
  const [targetLayer, setTargetLayer] = useState('')
  const [postType, setPostType] = useState('')
  const [charCount, setCharCount] = useState(140)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState<Analysis | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleGenerate = async () => {
    if (!theme) return
    setLoading(true); setError(''); setOutput(null)
    try {
      const accId = getActiveAccountId()
      const persona = personaToPrompt(loadPersona(accId))
      const knowledge = knowledgeToPrompt(loadKnowledge(accId))
      const instructorCtx = buildInstructorSystemPrompt()
      const styleCtx = buildStyleContext(loadXAccountStyle())

      const system = `あなたはXマーケティングの専門家かつなまいきスクールの講師として動作します。
${styleCtx ? styleCtx + '\n\n' : ''}${persona ? `【ユーザーのキャラ設定】\n${persona}\n\n` : ''}【なまいきスクール教材ナレッジ】
${knowledge}

【Discord講師メッセージ（指導スタイル）】
${instructorCtx}

【文字数制約 — 厳守】
"post"フィールドは必ず${charCount}文字前後（±20文字以内）で生成すること。

必ず以下のJSON形式のみで返してください（余分なテキスト不可）:
{
  "post":"ポスト文（文体スタイル命令・文字数制約を厳守）",
  "target":"このポストが刺さる具体的なターゲット層",
  "materialItems":[
    {"name":"フックの強さ","score":3,"comment":"一言"},
    {"name":"期待感の演出","score":3,"comment":"一言"},
    {"name":"不足感の演出","score":3,"comment":"一言"},
    {"name":"ターゲット絞り込み","score":3,"comment":"一言"},
    {"name":"アルゴリズム適性","score":3,"comment":"一言"}
  ],
  "discordItems":[
    {"name":"WHO・WHAT・HOWの明確さ","score":3,"comment":"一言"},
    {"name":"初動バズ可能性","score":3,"comment":"一言"},
    {"name":"エンゲージメント誘発力","score":3,"comment":"一言"},
    {"name":"信頼性・誠実さ","score":3,"comment":"一言"},
    {"name":"行動誘発力（CTA）","score":3,"comment":"一言"}
  ]
}`

      const userMsg = [
        `ポストテーマ: ${theme}`,
        targetLayer ? `対象ターゲット: ${targetLayer}` : '',
        postType ? `ポストの型: ${postType}` : '',
        `文字数: ${charCount}文字前後`,
      ].filter(Boolean).join('\n')

      const raw = await callClaude({ system, userMessage: userMsg, maxTokens: 2000 })
      const match = raw.match(/\{[\s\S]*"post"[\s\S]*\}/)
      if (!match) throw new Error('出力のパースに失敗しました。再度お試しください。')
      const result = JSON.parse(match[0]) as Analysis
      setOutput(result)
      addHistory({ text: result.post, theme, purpose: postType || '指定なし' })
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const copy = () => {
    if (!output) return
    navigator.clipboard.writeText(output.post)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-5">
      {/* Xアカウント登録 */}
      <XAccountLoader />

      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5">
        <BookOpen size={14} className="text-blue-400 shrink-0" />
        <p className="text-blue-300 text-xs">教材・Discord712件のアドバイスを最初から反映して生成します</p>
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">対象ターゲット</label>
            <select value={targetLayer} onChange={e => setTargetLayer(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500">
              <option value="">指定しない</option>
              {TARGETS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">ポストの型</label>
            <select value={postType} onChange={e => setPostType(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500">
              <option value="">指定しない</option>
              {POST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">文字数</label>
            <select value={charCount} onChange={e => setCharCount(Number(e.target.value))} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500">
              {CHAR_COUNTS.map(c => <option key={c} value={c}>{c}文字</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">ポストテーマ *</label>
          <input
            value={theme}
            onChange={e => setTheme(e.target.value)}
            placeholder="例：AIツールで時間を3倍にした方法"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading || !theme}
          className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? '生成・分析中...' : '生成する'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {output && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h4 className="text-white font-bold text-sm">🐦 生成されたポスト</h4>
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{output.post.length}文字</span>
              </div>
              <button onClick={copy} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                <Copy size={12} />{copied ? '✓ コピー済み' : 'コピー'}
              </button>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{output.post}</p>
          </div>

          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4">
            <p className="text-purple-300 text-xs font-bold mb-1">🎯 刺さるターゲット層</p>
            <p className="text-white text-sm">{output.target}</p>
          </div>

          <div className="rounded-2xl bg-gray-900 border border-sky-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-sky-400" />
              <h4 className="text-white font-bold text-sm">教材ベース分析</h4>
              <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">なまいきスクール教材</span>
            </div>
            {(output.materialItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i} item={item} color="text-sky-400" />
            ))}
          </div>

          <div className="rounded-2xl bg-gray-900 border border-green-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={14} className="text-green-400" />
              <h4 className="text-white font-bold text-sm">Discord講師分析</h4>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Discord 712件</span>
            </div>
            {(output.discordItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i + 5} item={item} color="text-green-400" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
