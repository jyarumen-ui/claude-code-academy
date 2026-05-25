import { useState, useRef } from 'react'
import { Trash2, Plus, BookOpen, Download, Upload, ChevronDown, ChevronUp } from 'lucide-react'
import {
  loadKnowledge, addKnowledge, deleteKnowledge,
  CATEGORY_LABELS, type Knowledge, type KnowledgeCategory,
} from '../../utils/knowledgeStore'

const CATEGORIES = Object.entries(CATEGORY_LABELS) as [KnowledgeCategory, string][]

/** サブ機能①：教材ナレッジベース管理 */
export function KnowledgeBase() {
  const [items, setItems] = useState<Knowledge[]>(loadKnowledge)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<KnowledgeCategory>('profile')
  const [content, setContent] = useState('')
  const [filter, setFilter] = useState<KnowledgeCategory | 'all'>('all')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)
  const [importMsg, setImportMsg] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleSave = () => {
    if (!title.trim() || !content.trim()) return
    addKnowledge({ title, category, content })
    setItems(loadKnowledge())
    setTitle(''); setContent(''); setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDelete = (id: string) => {
    deleteKnowledge(id)
    setItems(loadKnowledge())
  }

  const handleExport = () => {
    const data = JSON.stringify(loadKnowledge(), null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `namaiki_knowledge_${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target?.result as string) as Knowledge[]
        if (!Array.isArray(data)) throw new Error('形式エラー')
        localStorage.setItem('namaiki_knowledge', JSON.stringify(data))
        setItems(loadKnowledge())
        setImportMsg(`✅ ${data.length}件を復元しました`)
        setTimeout(() => setImportMsg(''), 4000)
      } catch { setImportMsg('❌ ファイルの形式が正しくありません') }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const filtered = filter === 'all' ? items : items.filter(k => k.category === filter)

  return (
    <div className="space-y-6">
      {/* 入力フォーム */}
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen size={18} className="text-brand-400" />
          <h3 className="text-white font-bold">教材を追加する</h3>
        </div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="タイトル（例：プロフの書き方 基本3原則）"
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value as KnowledgeCategory)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500"
        >
          {CATEGORIES.map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="教材の内容をここにコピペしてください（Discord の添削内容、講師の発言など）"
          rows={6}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none"
        />
        <button
          onClick={handleSave}
          disabled={!title.trim() || !content.trim()}
          className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors"
        >
          <Plus size={16} />
          {saved ? '✓ 保存しました！' : '保存する'}
        </button>
      </div>

      {/* エクスポート・インポート */}
      <div className="flex items-center gap-2 flex-wrap">
        <button onClick={handleExport} disabled={items.length === 0}
          className="flex items-center gap-1.5 text-xs text-gray-300 border border-gray-700 hover:border-green-500 hover:text-green-400 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-40">
          <Download size={13} />バックアップ保存（JSON）
        </button>
        <label className="flex items-center gap-1.5 text-xs text-gray-300 border border-gray-700 hover:border-sky-500 hover:text-sky-400 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
          <Upload size={13} />バックアップから復元
          <input ref={fileRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
        </label>
        {importMsg && <span className="text-xs text-green-400">{importMsg}</span>}
      </div>

      {/* フィルター */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === 'all' ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}
        >
          すべて ({items.length})
        </button>
        {CATEGORIES.map(([k, v]) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === k ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}
          >
            {v} ({items.filter(i => i.category === k).length})
          </button>
        ))}
      </div>

      {/* 一覧 */}
      {filtered.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          <BookOpen size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-sm">まだ教材がありません。上のフォームから追加してください。</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(item => {
            const isOpen = expanded === item.id
            return (
              <div key={item.id} className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
                <div
                  className="flex items-start justify-between gap-3 p-4 cursor-pointer hover:bg-gray-800/50 transition-colors"
                  onClick={() => setExpanded(isOpen ? null : item.id)}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-brand-500/20 text-brand-300 px-2 py-0.5 rounded-full shrink-0">{CATEGORY_LABELS[item.category]}</span>
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                    </div>
                    {!isOpen && (
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{item.content}</p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-gray-500">{isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}</span>
                    <button
                      onClick={e => { e.stopPropagation(); handleDelete(item.id) }}
                      className="text-gray-600 hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                {isOpen && (
                  <div className="px-4 pb-4 border-t border-gray-800">
                    <pre className="text-gray-300 text-xs leading-relaxed whitespace-pre-wrap font-sans mt-3">
                      {item.content}
                    </pre>
                    {item.sourceUrl && (
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"
                        className="text-brand-400 text-xs hover:underline mt-2 inline-block">
                        ソース →
                      </a>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
