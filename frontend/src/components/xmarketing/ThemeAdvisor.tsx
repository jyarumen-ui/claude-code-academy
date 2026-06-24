import { useState } from 'react'
import { Sparkles, Loader2, ChevronRight, RefreshCw } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { getActiveAccountId } from '../../utils/accountStore'

interface Props {
  onSelectTheme: (theme: string) => void
}

interface ThemeItem {
  theme: string
  reason: string
  type: string
}

/** アカウント分析→テーマ自動提案 */
export function ThemeAdvisor({ onSelectTheme }: Props) {
  const [accountUrl, setAccountUrl] = useState('')
  const [accountBio, setAccountBio] = useState('')
  const [loading, setLoading] = useState(false)
  const [themes, setThemes] = useState<ThemeItem[]>([])
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    setLoading(true); setError(''); setThemes([])
    try {
      const accId = getActiveAccountId()
      const persona = personaToPrompt(loadPersona(accId))
      const knowledge = knowledgeToPrompt(loadKnowledge(accId))
      const input = accountUrl
        ? `Xアカウント: ${accountUrl}\nプロフィール情報: ${accountBio || '（未入力）'}`
        : `プロフィール情報: ${accountBio}`

      const system = `あなたはXマーケティングの専門家です。${persona ? `\n${persona}` : ''}\n\n===教材ナレッジ===\n${knowledge}\n\n必ず以下のJSON形式のみ返してください：\n{"themes":[{"theme":"ポストテーマ","reason":"なぜこのテーマが刺さるか","type":"教育/共感/実績/ストーリー/お役立ち"}]}`

      const userMsg = `${input}\n\nこのアカウントに合った今すぐ投稿できるポストテーマを10個提案してください。\n初心者でも書けるテーマ、フォロワーが増えそうなテーマを優先してください。`

      const raw = await callClaude({ system, userMessage: userMsg, maxTokens: 2000 })
      const match = raw.match(/\{[\s\S]*"themes"[\s\S]*\}/)
      if (!match) throw new Error('テーマの取得に失敗しました。再度お試しください。')
      const result = JSON.parse(match[0]) as { themes: ThemeItem[] }
      setThemes(result.themes)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const typeColor: Record<string, string> = {
    '教育': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    '共感': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    '実績': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    'ストーリー': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    'お役立ち': 'bg-green-500/20 text-green-300 border-green-500/30',
  }

  return (
    <div className="space-y-5">
      {/* 説明 */}
      <div className="rounded-2xl bg-sky-500/10 border border-sky-500/30 p-4">
        <p className="text-sky-200 font-bold text-sm mb-1">💡 何を投稿すればいいかわからない人向け</p>
        <p className="text-sky-300/80 text-xs">あなたのXアカウント情報を入力するだけで、今すぐ投稿できるテーマをAIが10個提案します。テーマを選んだら自動でポスト生成画面に移動します。</p>
      </div>

      {/* 入力 */}
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">XアカウントのURL（例：https://x.com/xxxxxxx）</label>
          <input
            value={accountUrl}
            onChange={e => setAccountUrl(e.target.value)}
            placeholder="https://x.com/あなたのID"
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
          <p className="text-gray-600 text-xs mt-1">URLがわからない場合は下のプロフィール欄だけでもOKです</p>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">プロフィール文・発信ジャンル（任意）</label>
          <textarea
            value={accountBio}
            onChange={e => setAccountBio(e.target.value)}
            placeholder="例：副業でWebライターをしています。月5万円稼ぐための情報を発信中。フォロワー300人。"
            rows={3}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500 resize-none"
          />
        </div>
        <button
          onClick={handleAnalyze}
          disabled={loading || (!accountUrl && !accountBio)}
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
        >
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? 'AIが分析中...' : 'テーマを10個提案してもらう'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {/* 結果 */}
      {themes.length > 0 && (
        <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-white font-bold text-sm">📋 提案テーマ一覧</p>
            <button onClick={handleAnalyze} className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-3 py-1.5 transition-colors">
              <RefreshCw size={12} /> 再提案
            </button>
          </div>
          <p className="text-gray-400 text-xs">テーマをクリック → そのままポスト生成に進めます</p>
          <div className="space-y-2">
            {themes.map((item, i) => (
              <button
                key={i}
                onClick={() => onSelectTheme(item.theme)}
                className="w-full flex items-start gap-3 p-3 rounded-xl border border-gray-700 bg-gray-800 hover:border-sky-500 hover:bg-sky-500/10 text-left transition-all group"
              >
                <span className="text-gray-500 text-xs font-bold mt-0.5 shrink-0 w-5">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold leading-tight">{item.theme}</p>
                  <p className="text-gray-400 text-xs mt-1">{item.reason}</p>
                  <span className={`inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full border ${typeColor[item.type] ?? 'bg-gray-700 text-gray-300 border-gray-600'}`}>
                    {item.type}
                  </span>
                </div>
                <ChevronRight size={16} className="text-gray-600 group-hover:text-sky-400 shrink-0 mt-1 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
