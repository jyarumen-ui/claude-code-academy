import { useState } from 'react'
import { Copy, Check, Heart, Search, Filter } from 'lucide-react'
import { motion } from 'framer-motion'
import { PROMPTS, PROMPT_CATEGORIES, type PromptCategory } from '../../data/prompts'
import { useUserStore } from '../../stores/userStore'
import { clsx } from 'clsx'

/** プロンプトライブラリコンポーネント */
export function PromptLibrary() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<PromptCategory | 'all'>('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const { promptLibraryFavorites, togglePromptFavorite } = useUserStore()

  const filtered = PROMPTS.filter((p) => {
    const matchesSearch =
      p.title.includes(search) ||
      p.description.includes(search) ||
      p.tags.some((t) => t.includes(search))
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory
    return matchesSearch && matchesCategory
  })

  const handleCopy = async (id: string, content: string) => {
    await navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="space-y-5">
      {/* 検索・フィルター */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="プロンプトを検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500"
          />
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Filter size={13} />
          <span>{filtered.length}件</span>
        </div>
      </div>

      {/* カテゴリフィルター */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={clsx(
            'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
            activeCategory === 'all'
              ? 'bg-brand-500/20 text-brand-400 border border-brand-500/50'
              : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700',
          )}
        >
          すべて
        </button>
        {PROMPT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={clsx(
              'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1',
              activeCategory === cat.id
                ? 'bg-brand-500/20 text-brand-400 border border-brand-500/50'
                : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700',
            )}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* プロンプトカード一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((prompt, i) => {
          const isFav = promptLibraryFavorites.includes(prompt.id)
          const isCopied = copiedId === prompt.id
          const cat = PROMPT_CATEGORIES.find((c) => c.id === prompt.category)

          return (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="card flex flex-col gap-3 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{cat?.emoji}</span>
                    <span className="text-xs text-gray-500">{cat?.label}</span>
                    <span className={clsx(
                      'badge text-xs',
                      prompt.difficulty === 'beginner' ? 'bg-emerald-500/10 text-emerald-400' :
                      prompt.difficulty === 'intermediate' ? 'bg-blue-500/10 text-blue-400' :
                      'bg-purple-500/10 text-purple-400',
                    )}>
                      {prompt.difficulty === 'beginner' ? '初級' :
                       prompt.difficulty === 'intermediate' ? '中級' : '上級'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-sm">{prompt.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{prompt.description}</p>
                </div>
                <button
                  onClick={() => togglePromptFavorite(prompt.id)}
                  className={clsx(
                    'p-1.5 rounded-lg transition-colors shrink-0',
                    isFav ? 'text-rose-400 hover:text-rose-300' : 'text-gray-600 hover:text-gray-400',
                  )}
                >
                  <Heart size={15} fill={isFav ? 'currentColor' : 'none'} />
                </button>
              </div>

              {/* タグ */}
              <div className="flex flex-wrap gap-1">
                {prompt.tags.slice(0, 4).map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>

              {/* プレビュー */}
              <div className="bg-gray-950 rounded-lg p-3 text-xs text-gray-400 font-mono leading-relaxed line-clamp-3">
                {prompt.content.slice(0, 120)}...
              </div>

              {/* アクション */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>❤️ {prompt.likes}</span>
                  <span>📋 {prompt.useCount.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => handleCopy(prompt.id, prompt.content)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-brand-500/20 hover:bg-brand-500/30 text-brand-400 rounded-lg text-xs font-medium transition-colors"
                >
                  {isCopied ? <Check size={13} /> : <Copy size={13} />}
                  {isCopied ? 'コピー済み' : 'コピー'}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-4xl mb-3">🔍</p>
          <p>「{search}」に一致するプロンプトが見つかりません</p>
        </div>
      )}
    </div>
  )
}
