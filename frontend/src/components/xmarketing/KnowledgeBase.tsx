import { useState, useRef } from 'react'
import { Trash2, Plus, BookOpen, Download, Upload, ChevronDown, ChevronUp } from 'lucide-react'
import {
  loadKnowledge, addKnowledge, deleteKnowledge,
  CATEGORY_LABELS, type Knowledge, type KnowledgeCategory,
} from '../../utils/knowledgeStore'
import { getActiveAccountId } from '../../utils/accountStore'

const CATEGORIES = Object.entries(CATEGORY_LABELS) as [KnowledgeCategory, string][]

function renderContent(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let listBuffer: string[] = []

  const flushList = (key: string) => {
    if (listBuffer.length === 0) return
    elements.push(
      <ul key={key} className="space-y-1 pl-1">
        {listBuffer.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 text-xs leading-relaxed">
            <span className="text-brand-400 mt-0.5 shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
    listBuffer = []
  }

  lines.forEach((line, i) => {
    if (line.startsWith('## ')) {
      flushList(`list-${i}`)
      const text = line.slice(3)
      const isGood = text.includes('✅') || text.includes('正解')
      const isBad  = text.includes('❌') || text.includes('NG')
      const isTemp = text.includes('テンプレ') || text.includes('チェック')
      const isQuote = text.includes('Discord') || text.includes('講師')
      elements.push(
        <div key={i} className={`flex items-center gap-2 pt-2 pb-1 border-b ${
          isGood ? 'border-green-500/30' : isBad ? 'border-red-500/30' : isTemp ? 'border-yellow-500/30' : isQuote ? 'border-purple-500/30' : 'border-sky-500/30'
        }`}>
          <span className={`text-xs font-bold ${
            isGood ? 'text-green-400' : isBad ? 'text-red-400' : isTemp ? 'text-yellow-400' : isQuote ? 'text-purple-400' : 'text-sky-400'
          }`}>{text}</span>
        </div>
      )
    } else if (line.startsWith('### ')) {
      flushList(`list-${i}`)
      elements.push(<p key={i} className="text-gray-300 text-xs font-bold mt-1">{line.slice(4)}</p>)
    } else if (line.startsWith('- ') || line.startsWith('・')) {
      listBuffer.push(line.replace(/^[-・]\s?/, ''))
    } else if (line.startsWith('✅') || line.startsWith('❌') || line.startsWith('⚠') || line.startsWith('📌')) {
      flushList(`list-${i}`)
      const isGood = line.startsWith('✅')
      elements.push(
        <p key={i} className={`text-xs leading-relaxed px-3 py-2 rounded-lg ${
          isGood ? 'bg-green-500/10 text-green-300' : 'bg-red-500/10 text-red-300'
        }`}>{line}</p>
      )
    } else if (line.trim() === '') {
      flushList(`list-${i}`)
      elements.push(<div key={i} className="h-1" />)
    } else if (line.trim()) {
      flushList(`list-${i}`)
      elements.push(<p key={i} className="text-gray-300 text-xs leading-relaxed">{line}</p>)
    }
  })
  flushList('final')
  return elements
}

/** 教材ナレッジベース */
export function KnowledgeBase() {
  const accId = getActiveAccountId()
  const [items, setItems] = useState<Knowledge[]>(() => loadKnowledge(accId))
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
    addKnowledge({ title, category, content }, accId)
    setItems(loadKnowledge(accId))
    setTitle(''); setContent(''); setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleDelete = (id: string) => {
    deleteKnowledge(id, accId)
    setItems(loadKnowledge(accId))
  }

  const handleExport = () => {
    const data = JSON.stringify(loadKnowledge(accId), null, 2)
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

      {/* AI反映バナー */}
      <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-3 flex items-start gap-3">
        <BookOpen size={16} className="text-brand-400 shrink-0 mt-0.5" />
        <p className="text-brand-300 text-xs leading-relaxed">
          この教材はポスト生成・プロフ作成・添削など全機能でAIが自動参照します。教材の質が投稿品質に直結します。
        </p>
      </div>

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
          placeholder="教材の内容をここにコピペしてください"
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
          <Download size={13} />バックアップ保存
        </button>
        <label className="flex items-center gap-1.5 text-xs text-gray-300 border border-gray-700 hover:border-sky-500 hover:text-sky-400 px-3 py-1.5 rounded-lg transition-colors cursor-pointer">
          <Upload size={13} />バックアップから復元
          <input ref={fileRef} type="file" accept=".json" onChange={handleImport} className="hidden" />
        </label>
        {importMsg && <span className="text-xs text-green-400">{importMsg}</span>}
      </div>

      {/* フィルター */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === 'all' ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}>
          すべて ({items.length})
        </button>
        {CATEGORIES.map(([k, v]) => (
          <button key={k} onClick={() => setFilter(k)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${filter === k ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}>
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
                      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
                        {item.content.replace(/#+\s/g, '').slice(0, 120)}…
                      </p>
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
                  <div className="px-4 pb-5 border-t border-gray-800">
                    <div className="mt-4 space-y-2">
                      {renderContent(item.content)}
                    </div>
                    {item.sourceUrl && (
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer"
                        className="text-brand-400 text-xs hover:underline mt-3 inline-block">
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
