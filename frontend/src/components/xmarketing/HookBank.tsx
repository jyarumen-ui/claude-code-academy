import { useState } from 'react'
import { Trash2, Plus, Loader2, Zap } from 'lucide-react'
import { loadHooks, addHook, deleteHook, HOOK_CATEGORY_LABELS, type Hook, type HookCategory } from '../../utils/hookStore'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'

const CATEGORIES = Object.entries(HOOK_CATEGORY_LABELS) as [HookCategory, string][]

interface Props { onUseHook?: (text: string) => void }

/** サブ機能⑫：フック文言バンク */
export function HookBank({ onUseHook }: Props) {
  const [items, setItems] = useState<Hook[]>(loadHooks)
  const [text, setText] = useState('')
  const [category, setCategory] = useState<HookCategory>('curiosity')
  const [filter, setFilter] = useState<HookCategory | 'all'>('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const refresh = () => setItems(loadHooks())

  const handleAdd = () => {
    if (!text.trim()) return
    addHook({ text, category })
    setText(''); refresh()
  }

  const handleDelete = (id: string) => { deleteHook(id); refresh() }

  const handleExtract = async () => {
    setLoading(true); setError('')
    try {
      const allKnowledge = loadKnowledge()
      // 教材を最大60件使って大量抽出
      const knowledge = knowledgeToPrompt(allKnowledge, 60)
      const existingTexts = new Set(items.map(h => h.text.slice(0, 30)))

      const raw = await callClaude({
        system: `教材ナレッジからXポストのフック（冒頭の引き込む一文）に使える表現を大量に抽出してください。
フックの種類:
- fear: 恐怖・損失（「〇〇してると損する」「〇〇な人は注意」）
- curiosity: 好奇心（「99%の人が知らない」「実は〇〇だった」）
- empathy: 共感（「〇〇で悩んでいる人へ」「わかる、私も昔は〇〇だった」）
- achievement: 実績（「〇〇で月〇万円達成」「〇〇日で〇〇できた」）
- paradox: 逆説（「〇〇するな」「〇〇は間違い」）

必ず以下のJSON配列形式のみで返してください（余分なテキスト不可）:
[{"text":"フック表現（テンプレート形式で〇〇を活用）","category":"fear|curiosity|empathy|achievement|paradox"}]

===教材ナレッジ===
${knowledge}`,
        userMessage: 'フックに使える表現を50個以上抽出してください。テンプレート形式（〇〇を使って汎用的に）で出力してください。',
        maxTokens: 4000,
      })
      const match = raw.match(/\[[\s\S]*\]/)
      if (!match) throw new Error('抽出に失敗しました')
      const extracted = JSON.parse(match[0]) as { text: string; category: HookCategory }[]
      let added = 0
      for (const h of extracted) {
        if (!existingTexts.has(h.text.slice(0, 30))) {
          addHook({ text: h.text, category: h.category ?? 'curiosity' })
          added++
        }
      }
      refresh()
      if (added === 0) setError('既存と重複するフックのみでした。再度お試しください。')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const filtered = filter === 'all' ? items : items.filter(h => h.category === filter)

  return (
    <div className="space-y-5">
      {/* 追加フォーム */}
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-4 space-y-3">
        <div className="flex gap-2">
          <input value={text} onChange={e => setText(e.target.value)} placeholder="フック表現を入力（例：99%の人が知らない〇〇の真実）" className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
          <select value={category} onChange={e => setCategory(e.target.value as HookCategory)} className="bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-500">
            {CATEGORIES.map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <button onClick={handleAdd} disabled={!text.trim()} className="flex items-center gap-1 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            <Plus size={14} /> 追加
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-xs">または</p>
          <button onClick={handleExtract} disabled={loading} className="flex items-center gap-1.5 text-xs text-purple-300 border border-purple-500/40 rounded-lg px-3 py-1.5 hover:border-purple-400 transition-colors disabled:opacity-40">
            {loading ? <Loader2 size={12} className="animate-spin" /> : <Zap size={12} />}
            教材から自動抽出
          </button>
        </div>
        {error && <p className="text-red-400 text-xs">{error}</p>}
      </div>

      {/* フィルター */}
      <div className="flex flex-wrap gap-1.5">
        <button onClick={() => setFilter('all')} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === 'all' ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400'}`}>すべて({items.length})</button>
        {CATEGORIES.map(([k, v]) => (
          <button key={k} onClick={() => setFilter(k)} className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === k ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400'}`}>
            {v}({items.filter(h => h.category === k).length})
          </button>
        ))}
      </div>

      {/* 一覧 */}
      <div className="space-y-2">
        {filtered.map(h => (
          <div key={h.id} className="flex items-center gap-3 rounded-xl bg-gray-900 border border-gray-800 px-4 py-3">
            <span className="text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full shrink-0">{HOOK_CATEGORY_LABELS[h.category]}</span>
            <span className="text-gray-200 text-sm flex-1">{h.text}</span>
            <div className="flex gap-2 shrink-0">
              {onUseHook && (
                <button onClick={() => onUseHook(h.text)} className="text-xs text-brand-400 border border-brand-500/40 rounded-lg px-2 py-1">使う</button>
              )}
              <button onClick={() => handleDelete(h.id)} className="text-gray-600 hover:text-red-400 transition-colors">
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
