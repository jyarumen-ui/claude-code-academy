import { useState } from 'react'
import { Trash2, RefreshCw, Clock, Search } from 'lucide-react'
import { loadHistory, deleteHistory, type PostHistory as HistoryItem } from '../../utils/historyStore'

const STATUS_LABEL = { draft: '下書き', scheduled: '予約済', posted: '投稿済' }
const STATUS_COLOR = { draft: 'text-gray-400 bg-gray-800', scheduled: 'text-blue-300 bg-blue-500/20', posted: 'text-green-300 bg-green-500/20' }

interface Props { onUsePost?: (text: string) => void }

/** サブ機能⑬：ポスト履歴管理 */
export function PostHistory({ onUsePost }: Props) {
  const [items, setItems] = useState<HistoryItem[]>(loadHistory)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<HistoryItem['status'] | 'all'>('all')

  const refresh = () => setItems(loadHistory())

  const filtered = items.filter(h => {
    if (filter !== 'all' && h.status !== filter) return false
    if (query && !h.text.includes(query) && !h.theme.includes(query)) return false
    return true
  })

  const handleDelete = (id: string) => { deleteHistory(id); refresh() }

  const fmt = (iso: string) => new Date(iso).toLocaleString('ja-JP', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

  return (
    <div className="space-y-4">
      {/* 検索・フィルター */}
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="キーワード検索..." className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-9 pr-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
        </div>
        <div className="flex gap-1">
          {(['all', 'draft', 'scheduled', 'posted'] as const).map(s => (
            <button key={s} onClick={() => setFilter(s)} className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${filter === s ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}>
              {s === 'all' ? `全て(${items.length})` : STATUS_LABEL[s]}
            </button>
          ))}
          <button onClick={refresh} className="px-3 py-2 rounded-xl text-xs border border-gray-700 text-gray-400 hover:border-gray-600">
            <RefreshCw size={12} />
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          <Clock size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">{items.length === 0 ? 'まだ履歴がありません。ポスト生成すると自動保存されます。' : '該当する履歴がありません。'}</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(h => (
            <div key={h.id} className="rounded-xl bg-gray-900 border border-gray-800 p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${STATUS_COLOR[h.status]}`}>{STATUS_LABEL[h.status]}</span>
                  <span className="text-gray-500 text-xs">{h.theme}</span>
                  <span className="text-gray-600 text-xs">{fmt(h.createdAt)}</span>
                </div>
                <button onClick={() => handleDelete(h.id)} className="text-gray-600 hover:text-red-400 transition-colors shrink-0">
                  <Trash2 size={14} />
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{h.text}</p>
              {onUsePost && (
                <button onClick={() => onUsePost(h.text)} className="mt-2 text-xs text-brand-400 hover:text-brand-300 border border-brand-500/40 rounded-lg px-3 py-1 transition-colors">
                  このポストを再利用
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
