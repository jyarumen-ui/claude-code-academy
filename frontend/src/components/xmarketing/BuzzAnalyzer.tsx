import { useState } from 'react'
import { TrendingUp, Loader2, ArrowRight } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { getActiveAccountId } from '../../utils/accountStore'

interface BuzzResult {
  hook: string
  triggers: string[]
  target: string
  template: string
}

interface Props { onUseTemplate?: (text: string) => void }

/** サブ機能⑨：バズり分析 */
export function BuzzAnalyzer({ onUseTemplate }: Props) {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<BuzzResult | null>(null)
  const [error, setError] = useState('')

  const handleAnalyze = async () => {
    if (!input.trim()) return
    setLoading(true); setError(''); setResult(null)
    try {
      const persona = personaToPrompt(loadPersona(getActiveAccountId()))
      const system = `あなたはXマーケティングのバズ分析専門家です。${persona ? `\n${persona}` : ''}\n\nバズったポストを構造分析して、自分のジャンルに応用できるテンプレートを作成してください。\n必ず以下のJSON形式で返してください:\n{"hook":"フック構造の分析","triggers":["心理トリガー1","心理トリガー2","心理トリガー3"],"target":"刺さっているターゲット層の推定","template":"穴埋め形式の応用テンプレート（〇〇で表記）"}`
      const raw = await callClaude({ system, userMessage: `以下のバズポストを分析してください:\n\n${input}`, maxTokens: 1500 })
      const match = raw.match(/\{[\s\S]*"hook"[\s\S]*\}/)
      if (!match) throw new Error('分析に失敗しました。再度お試しください。')
      setResult(JSON.parse(match[0]) as BuzzResult)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">バズったポストのURLまたはテキスト *</label>
          <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="バズったポストのテキストをここに貼り付けてください（URLは参考情報として記載可）" rows={5} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none" />
        </div>
        <button onClick={handleAnalyze} disabled={loading || !input.trim()} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <TrendingUp size={16} />}
          {loading ? '分析中...' : '構造を分析する'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {result && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
            <div>
              <h4 className="text-white font-bold text-sm mb-2">🎣 フック構造の分析</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{result.hook}</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-2">🧠 使われている心理トリガー</h4>
              <div className="flex flex-wrap gap-2">
                {result.triggers.map((t, i) => (
                  <span key={i} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-2">👥 刺さっているターゲット層</h4>
              <p className="text-gray-300 text-sm">{result.target}</p>
            </div>
          </div>

          <div className="rounded-2xl bg-brand-500/10 border border-brand-500/30 p-5">
            <h4 className="text-brand-300 font-bold text-sm mb-3">📝 あなたのジャンルへの応用テンプレート（穴埋め形式）</h4>
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap font-mono">{result.template}</p>
            {onUseTemplate && (
              <button onClick={() => onUseTemplate(result.template)} className="mt-4 flex items-center gap-2 text-sm text-brand-400 border border-brand-500/40 rounded-xl px-4 py-2 hover:border-brand-400 transition-colors">
                このテンプレでポスト生成 <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
