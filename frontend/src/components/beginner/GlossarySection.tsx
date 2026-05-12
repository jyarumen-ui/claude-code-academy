import { useState } from 'react'
import { Search } from 'lucide-react'
import { GLOSSARY, type GlossaryTerm } from '../../data/glossary'
import { TermCard } from './TermCard'
import { clsx } from 'clsx'

type CategoryKey = 'all' | 'basic' | 'claudecode' | 'skill' | 'file'

const CATEGORY_LABELS: Record<CategoryKey, { label: string; emoji: string }> = {
  all:        { label: 'すべて', emoji: '📚' },
  basic:      { label: '基本用語', emoji: '🔰' },
  claudecode: { label: 'Claude Code', emoji: '⚡' },
  skill:      { label: 'SKILL', emoji: '⭐' },
  file:       { label: 'ファイル・設定', emoji: '📄' },
}

/** 用語集セクション — 検索・カテゴリ絞り込み付き */
export function GlossarySection() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<CategoryKey>('all')

  const filtered: GlossaryTerm[] = GLOSSARY.filter((g) => {
    const matchCat = category === 'all' || g.category === category
    const q = query.toLowerCase()
    const matchQ = !q || g.term.toLowerCase().includes(q) || g.reading.includes(q) || g.simple.includes(q)
    return matchCat && matchQ
  })

  return (
    <div className="space-y-5">
      {/* 検索バー */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="用語を検索…（例：ターミナル、SKILL）"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
        />
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2">
        {(Object.keys(CATEGORY_LABELS) as CategoryKey[]).map((cat) => {
          const { label, emoji } = CATEGORY_LABELS[cat]
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={clsx(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors',
                category === cat
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white',
              )}
            >
              <span>{emoji}</span>
              {label}
            </button>
          )
        })}
      </div>

      {/* 件数 */}
      <p className="text-gray-500 text-xs">{filtered.length} 件の用語</p>

      {/* 用語カードリスト */}
      <div className="space-y-2">
        {filtered.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm">「{query}」に一致する用語が見つかりませんでした</p>
          </div>
        ) : (
          filtered.map((term) => (
            <TermCard key={term.term} term={term} />
          ))
        )}
      </div>
    </div>
  )
}
