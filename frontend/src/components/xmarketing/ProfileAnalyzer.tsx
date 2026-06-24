import { useState } from 'react'
import { Search, Loader2, Star, BookOpen, MessageSquare, Copy } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { buildInstructorSystemPrompt } from '../../utils/instructorStore'

interface ScoreItem { name: string; score: number; comment: string }

interface AnalysisResult {
  target: string
  materialItems: ScoreItem[]
  discordItems: ScoreItem[]
  instructorFeedback: string
  rewrite: string
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

export function ProfileAnalyzer() {
  const [url, setUrl] = useState('')
  const [profileText, setProfileText] = useState('')
  const [pinnedPost, setPinnedPost] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleAnalyze = async () => {
    if (!profileText.trim()) return
    setLoading(true); setError(''); setResult(null)
    try {
      const knowledge = knowledgeToPrompt(loadKnowledge())
      const instructorCtx = buildInstructorSystemPrompt()

      const system = `あなたはXマーケティングの専門家かつなまいきスクールの講師（なまいきくん・Yusuke＠講師）として動作します。
初心者のXプロフィールと固定ポストを教材・Discordメッセージの両面から分析・添削してください。

【なまいきスクール教材ナレッジ】
${knowledge}

【Discord講師メッセージ（実際の指導スタイル）】
${instructorCtx}

コンセプト設計（WHO・WHAT・HOW）を最重要視して分析。初期アカウントは属性を絞ること。
必ず以下のJSON形式のみで返してください:
{
  "target":"刺さるターゲット層（具体的に）",
  "materialItems":[
    {"name":"コンセプト明確度","score":1-5,"comment":"教材視点の一言"},
    {"name":"ターゲット絞り込み","score":1-5,"comment":"教材視点の一言"},
    {"name":"初見の理解しやすさ","score":1-5,"comment":"教材視点の一言"},
    {"name":"ベネフィットの明確さ","score":1-5,"comment":"教材視点の一言"},
    {"name":"差別化ポイント","score":1-5,"comment":"教材視点の一言"}
  ],
  "discordItems":[
    {"name":"フォロー動機","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"権威性・信頼性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"アルゴリズム適性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"固定ポストとの一貫性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"長期成長性","score":1-5,"comment":"Discord講師視点の一言"}
  ],
  "instructorFeedback":"講師として具体的なアドバイスを自然な日本語の文章で120字程度で",
  "rewrite":"改善したプロフィール文（書き直し例）"
}`

      const userMsg = `XプロフィールURL: ${url || '未入力'}\n\nプロフィール文:\n${profileText}${pinnedPost ? `\n\n固定ポスト文:\n${pinnedPost}` : ''}`
      const raw = await callClaude({ system, userMessage: userMsg, maxTokens: 2000 })
      const match = raw.match(/\{[\s\S]*"target"[\s\S]*\}/)
      if (!match) throw new Error('出力のパースに失敗しました。再度お試しください。')
      setResult(JSON.parse(match[0]) as AnalysisResult)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const copy = () => {
    if (!result) return
    navigator.clipboard.writeText(result.rewrite)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5">
        <BookOpen size={14} className="text-blue-400 shrink-0" />
        <p className="text-blue-300 text-xs">なまいきスクール教材 ＋ Discord講師メッセージ712件を基に分析します</p>
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">XプロフィールURL（参考用）</label>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://x.com/username" className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">プロフィール文 *</label>
          <p className="text-gray-600 text-xs mb-2">Xのプロフページでプロフィール文をコピーして貼り付けてください</p>
          <textarea value={profileText} onChange={e => setProfileText(e.target.value)} placeholder="名前・肩書き・自己紹介文をここに貼り付け" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none" />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">固定ポスト文（あれば）</label>
          <textarea value={pinnedPost} onChange={e => setPinnedPost(e.target.value)} placeholder="固定ポストのテキストをここに貼り付け" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none" />
        </div>
        <button onClick={handleAnalyze} disabled={loading || !profileText.trim()} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          {loading ? '分析中...' : '教材＋Discordで分析する'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {result && (
        <div className="space-y-4">
          {/* ターゲット */}
          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4">
            <p className="text-purple-300 text-xs font-bold mb-1">🎯 刺さるターゲット層</p>
            <p className="text-white text-sm">{result.target}</p>
          </div>

          {/* 教材ベース分析 5項目 */}
          <div className="rounded-2xl bg-gray-900 border border-sky-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-sky-400" />
              <h4 className="text-white font-bold text-sm">教材ベース分析</h4>
              <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">なまいきスクール教材</span>
            </div>
            {(result.materialItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i} item={item} color="text-sky-400" />
            ))}
          </div>

          {/* Discord講師分析 5項目 */}
          <div className="rounded-2xl bg-gray-900 border border-green-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={14} className="text-green-400" />
              <h4 className="text-white font-bold text-sm">Discord講師分析</h4>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Discord 712件</span>
            </div>
            {(result.discordItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i + 5} item={item} color="text-green-400" />
            ))}
          </div>

          {/* 講師添削 */}
          <div className="rounded-2xl bg-gray-900 border border-yellow-500/30 p-5">
            <h4 className="text-white font-bold text-sm mb-3">🎓 講師添削</h4>
            <p className="text-yellow-100 text-sm leading-relaxed">{result.instructorFeedback}</p>
          </div>

          {/* 改善案 */}
          <div className="rounded-2xl bg-gray-900 border border-brand-500/40 p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-brand-300 font-bold text-sm">✏️ 改善プロフィール（書き直し例）</h4>
              <button onClick={copy} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                <Copy size={12} />{copied ? '✓ コピー済み' : 'コピー'}
              </button>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{result.rewrite}</p>
          </div>
        </div>
      )}
    </div>
  )
}
