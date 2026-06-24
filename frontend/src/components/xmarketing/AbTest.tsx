import { useState } from 'react'
import { Sparkles, Loader2, Star } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { getActiveAccountId } from '../../utils/accountStore'
import { addHistory } from '../../utils/historyStore'

interface Pattern { post: string; hookScore: number; target: string }
interface Output { patterns: Pattern[] }

function Stars({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={i <= score ? '#f59e0b' : 'none'} className={i <= score ? 'text-yellow-400' : 'text-gray-600'} />)}
    </div>
  )
}

interface Props { onUsePost?: (text: string) => void }

/** サブ機能⑧：ABテスト生成 */
export function AbTest({ onUsePost }: Props) {
  const [theme, setTheme] = useState('')
  const [purpose, setPurpose] = useState('認知拡大')
  const [count, setCount] = useState(3)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState<Output | null>(null)
  const [error, setError] = useState('')

  const handleGenerate = async () => {
    if (!theme) return
    setLoading(true); setError(''); setOutput(null)
    try {
      const accId = getActiveAccountId()
      const persona = personaToPrompt(loadPersona(accId))
      const knowledge = knowledgeToPrompt(loadKnowledge(accId))
      const system = `あなたはXマーケティングの専門家です。\n${persona}\n\n===教材ナレッジ===\n${knowledge}\n\n同じテーマで${count}パターンのポスト文を生成し、各パターンを分析してください。\n必ず以下のJSON形式で返してください:\n{"patterns":[{"post":"ポスト文","hookScore":1-5,"target":"ターゲット層"}]}`
      const raw = await callClaude({ system, userMessage: `テーマ: ${theme}\n目的: ${purpose}\n${count}パターン生成してください。各パターンはアプローチを変えてください。`, maxTokens: 3000 })
      const match = raw.match(/\{[\s\S]*"patterns"[\s\S]*\}/)
      if (!match) throw new Error('出力のパースに失敗しました')
      const result = JSON.parse(match[0]) as Output
      result.patterns.forEach(p => addHistory({ text: p.post, theme, purpose }))
      setOutput(result)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500'

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">ポストテーマ *</label>
          <input value={theme} onChange={e => setTheme(e.target.value)} placeholder="例：AIツールで作業を3倍速にする方法" className={`w-full ${inputCls}`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">目的</label>
            <select value={purpose} onChange={e => setPurpose(e.target.value)} className={`w-full ${inputCls}`}>
              {['認知拡大', 'フォロワー増', '商品訴求', '教育'].map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">パターン数</label>
            <select value={count} onChange={e => setCount(Number(e.target.value))} className={`w-full ${inputCls}`}>
              {[2, 3].map(n => <option key={n} value={n}>{n}パターン</option>)}
            </select>
          </div>
        </div>
        <button onClick={handleGenerate} disabled={loading || !theme} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? `${count}パターン生成中...` : `${count}パターン同時生成`}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {output && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {output.patterns.map((p, i) => (
            <div key={i} className="rounded-2xl bg-gray-900 border border-gray-700 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold text-sm">パターン {String.fromCharCode(65 + i)}</span>
                <Stars score={p.hookScore} />
              </div>
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{p.post}</p>
              <p className="text-gray-500 text-xs">👥 {p.target}</p>
              {onUsePost && (
                <button onClick={() => onUsePost(p.post)} className="w-full text-xs text-brand-400 border border-brand-500/40 rounded-lg px-3 py-2 hover:border-brand-400 transition-colors">
                  このパターンを使う →
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
