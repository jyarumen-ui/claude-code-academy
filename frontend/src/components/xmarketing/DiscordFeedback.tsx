import { useState } from 'react'
import { Search, Loader2, Star, BookOpen, MessageSquare, Copy } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { buildInstructorSystemPrompt } from '../../utils/instructorStore'

interface ScoreItem { name: string; score: number; comment: string }

interface AnalysisResult {
  targetLayer: string
  styleFeatures: string
  materialItems: ScoreItem[]
  discordItems: ScoreItem[]
  advice: string
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

export function DiscordFeedback() {
  const [postText, setPostText] = useState('')
  const [mode, setMode] = useState<'own' | 'other'>('own')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const handleAnalyze = async () => {
    if (!postText.trim()) return
    setLoading(true); setError(''); setResult(null)
    try {
      const knowledge = knowledgeToPrompt(loadKnowledge())
      const instructorCtx = buildInstructorSystemPrompt()

      const system = `あなたはXマーケティングの専門家かつなまいきスクールの講師です。
貼り付けられたポストを教材・Discord講師メッセージの両面から深く分析してください。

【なまいきスクール教材ナレッジ】
${knowledge}

【Discord講師メッセージ】
${instructorCtx}

必ず以下のJSON形式のみで返してください:
{
  "targetLayer":"このポストが狙っているターゲット層（具体的に）",
  "styleFeatures":"語尾・絵文字・文体の特徴（箇条書きで簡潔に）",
  "materialItems":[
    {"name":"フックの強さ","score":1-5,"comment":"一言"},
    {"name":"期待感の演出","score":1-5,"comment":"一言"},
    {"name":"不足感の演出","score":1-5,"comment":"一言"},
    {"name":"ターゲット絞り込み","score":1-5,"comment":"一言"},
    {"name":"アルゴリズム適性","score":1-5,"comment":"一言"}
  ],
  "discordItems":[
    {"name":"WHO・WHAT・HOWの明確さ","score":1-5,"comment":"一言"},
    {"name":"初動バズ可能性","score":1-5,"comment":"一言"},
    {"name":"エンゲージメント誘発力","score":1-5,"comment":"一言"},
    {"name":"信頼性・誠実さ","score":1-5,"comment":"一言"},
    {"name":"行動誘発力（CTA）","score":1-5,"comment":"一言"}
  ],
  "advice":"120字程度の具体的なアドバイス",
  "rewrite":"改善版ポスト文"
}`

      const modeLabel = mode === 'own' ? '自分のポスト' : '他の人のポスト（参考リサーチ）'
      const raw = await callClaude({ system, userMessage: `【${modeLabel}】\n\n${postText}`, maxTokens: 2000 })
      const match = raw.match(/\{[\s\S]*"targetLayer"[\s\S]*\}/)
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
    <div className="space-y-5">
      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5">
        <BookOpen size={14} className="text-blue-400 shrink-0" />
        <p className="text-blue-300 text-xs">教材 ＋ Discord712件をベースにポストを分析・添削します</p>
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-2 block">ポストの種類</label>
          <div className="flex gap-2">
            {([['own', '✍️ 自分のポスト'], ['other', '🔍 他の人のポスト（リサーチ）']] as const).map(([v, label]) => (
              <button
                key={v}
                onClick={() => setMode(v)}
                className={`flex-1 px-3 py-2 rounded-xl text-sm font-semibold border transition-colors ${mode === v ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            {mode === 'own' ? '添削したいポスト文 *' : 'リサーチするポスト文 *'}
          </label>
          <textarea
            value={postText}
            onChange={e => setPostText(e.target.value)}
            placeholder={mode === 'own' ? '自分で書いたポスト文を貼り付けてください' : '分析したい他の人のポスト文を貼り付けてください'}
            rows={6}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={loading || !postText.trim()}
          className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Search size={16} />}
          {loading ? '分析中...' : mode === 'own' ? '教材・Discordで添削する' : 'どの層を狙っているか分析する'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {result && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4">
            <p className="text-purple-300 text-xs font-bold mb-1">🎯 狙っているターゲット層</p>
            <p className="text-white text-sm">{result.targetLayer}</p>
          </div>

          <div className="rounded-2xl bg-gray-800 border border-gray-700 p-4">
            <p className="text-gray-300 text-xs font-bold mb-2">✍️ 語尾・絵文字・文体の特徴</p>
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{result.styleFeatures}</p>
          </div>

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

          <div className="rounded-2xl bg-gray-900 border border-yellow-500/30 p-4">
            <p className="text-yellow-300 text-xs font-bold mb-2">🎓 講師アドバイス</p>
            <p className="text-yellow-100 text-sm leading-relaxed">{result.advice}</p>
          </div>

          <div className="rounded-2xl bg-gray-900 border border-brand-500/40 p-5">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-brand-300 font-bold text-sm">✏️ 改善版ポスト</h4>
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
