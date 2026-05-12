import { useState, useMemo } from 'react'
import { Search, X, Sparkles, Terminal, BookOpen } from 'lucide-react'
import { SKILLS, SKILL_CATEGORIES, type SkillCategory } from '../data/skillsData'
import { SkillCard } from '../components/skills/SkillCard'
import { SkillDetail } from '../components/skills/SkillDetail'
import { type Skill } from '../data/skillsData'

type DifficultyFilter = 'all' | 'かんたん' | 'ふつう' | 'むずかしい'
type TypeFilter = 'all' | 'slash' | 'prompt'

/** SKILL ライブラリページ */
export function SkillLibrary() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'all'>('all')
  const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all')
  const [selected, setSelected] = useState<Skill | null>(null)

  const filtered = useMemo(() => {
    let result = SKILLS
    if (selectedCategory !== 'all') {
      result = result.filter(s => s.category === selectedCategory)
    }
    if (difficulty !== 'all') {
      result = result.filter(s => s.difficulty === difficulty)
    }
    if (typeFilter !== 'all') {
      result = result.filter(s => s.type === typeFilter)
    }
    if (query.trim()) {
      const q = query.toLowerCase()
      result = result.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.prompt.toLowerCase().includes(q) ||
        s.tags.some(t => t.includes(q))
      )
    }
    return result
  }, [query, selectedCategory, difficulty, typeFilter])

  const clearFilters = () => {
    setQuery('')
    setSelectedCategory('all')
    setDifficulty('all')
    setTypeFilter('all')
  }

  const hasFilter = query || selectedCategory !== 'all' || difficulty !== 'all' || typeFilter !== 'all'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* ページヘッダー */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 text-brand-400 text-sm font-medium">
          <Sparkles size={14} />
          SKILLライブラリ
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          使えるSKILL <span className="text-brand-400">{SKILLS.length}個</span> 全部見せます！
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
          カテゴリから選ぶか、検索して使いたいSKILLを見つけよう。<br />
          コピーボタンを押してClaudeに貼り付けるだけ！
        </p>

        {/* ターミナルの説明 */}
        <div className="inline-flex items-center gap-3 bg-gray-800/60 border border-gray-700 rounded-xl px-5 py-3 text-left mt-2">
          <Terminal size={20} className="text-brand-400 shrink-0" />
          <div>
            <p className="text-white text-sm font-bold">SKILLってどこに入力するの？</p>
            <p className="text-gray-400 text-xs mt-0.5">ターミナル（黒い画面）でClaudeが起動している場所に入力するよ。カードをタップすると詳しく説明するね！</p>
          </div>
        </div>
      </div>

      {/* 検索バー */}
      <div className="relative max-w-xl mx-auto">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="名前・説明・タグで検索… 例：「コード」「エラー」「SNS」"
          className="w-full bg-gray-800 border border-gray-700 rounded-2xl pl-10 pr-10 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
        />
        {query && (
          <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300">
            <X size={16} />
          </button>
        )}
      </div>

      {/* カテゴリフィルター */}
      <div className="space-y-3">
        <p className="text-xs text-gray-500 font-medium">📂 カテゴリで絞り込む</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
              selectedCategory === 'all'
                ? 'bg-brand-500/20 border-brand-500/50 text-brand-300'
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
            }`}
          >
            🗂️ すべて（{SKILLS.length}）
          </button>
          {SKILL_CATEGORIES.map(cat => {
            const count = SKILLS.filter(s => s.category === cat.id).length
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${
                  selectedCategory === cat.id
                    ? 'text-white border-transparent'
                    : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white'
                }`}
                style={selectedCategory === cat.id ? { background: `${cat.color}33`, borderColor: cat.color } : {}}
              >
                {cat.emoji} {cat.label}
                <span className="text-xs opacity-60">({count})</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* サブフィルター */}
      <div className="flex flex-wrap items-center gap-4">
        {/* 難易度 */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">難易度：</span>
          {(['all', 'かんたん', 'ふつう', 'むずかしい'] as DifficultyFilter[]).map(d => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                difficulty === d
                  ? 'bg-brand-500/20 border-brand-500/50 text-brand-300'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {d === 'all' ? 'すべて' : d}
            </button>
          ))}
        </div>

        {/* タイプ */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">種類：</span>
          {([
            { v: 'all', label: 'すべて' },
            { v: 'slash', label: '/コマンド' },
            { v: 'prompt', label: 'プロンプト' },
          ] as { v: TypeFilter; label: string }[]).map(({ v, label }) => (
            <button
              key={v}
              onClick={() => setTypeFilter(v)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-colors ${
                typeFilter === v
                  ? 'bg-brand-500/20 border-brand-500/50 text-brand-300'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* クリアボタン */}
        {hasFilter && (
          <button
            onClick={clearFilters}
            className="text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1 transition-colors"
          >
            <X size={12} /> フィルターをリセット
          </button>
        )}
      </div>

      {/* 件数表示 */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          <span className="text-white font-bold">{filtered.length}</span> / {SKILLS.length} スキルを表示中
        </p>
        {selectedCategory !== 'all' && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">カテゴリ：</span>
            <span className="text-white font-medium">
              {SKILL_CATEGORIES.find(c => c.id === selectedCategory)?.emoji}{' '}
              {SKILL_CATEGORIES.find(c => c.id === selectedCategory)?.label}
            </span>
          </div>
        )}
      </div>

      {/* スキルグリッド */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <p className="text-5xl">🤔</p>
          <p className="text-gray-400 font-medium">スキルが見つかりませんでした</p>
          <p className="text-gray-600 text-sm">別のキーワードやカテゴリで試してみてね</p>
          <button onClick={clearFilters} className="text-brand-400 hover:text-brand-300 text-sm transition-colors">
            → フィルターをリセットする
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(skill => (
            <SkillCard key={skill.id} skill={skill} onClick={() => setSelected(skill)} />
          ))}
        </div>
      )}

      {/* 一番下のガイド */}
      <div className="rounded-2xl bg-gray-800/40 border border-gray-700 p-6 text-center space-y-3">
        <BookOpen size={28} className="text-brand-400 mx-auto" />
        <h3 className="text-white font-bold text-lg">SKILLのつかいかたがわからない？</h3>
        <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
          初心者ガイドでClaude Codeの起動方法から丁寧に説明しているよ。<br />
          スキルカードをタップすると詳しい入力方法も見られるよ！
        </p>
        <a
          href="/guide"
          className="inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors"
        >
          🔰 初心者ガイドを見る
        </a>
      </div>

      {/* 詳細モーダル */}
      {selected && (
        <SkillDetail skill={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
