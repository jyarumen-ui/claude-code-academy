import { useState, useRef, useEffect } from 'react'
import { Send, ArrowLeft, Search } from 'lucide-react'
import {
  FAQ_ITEMS, FAQ_CATEGORIES, getFaqByCategory, searchFaq,
  type FaqItem, type FaqCategory,
} from '../../data/faqData'
import { AnswerRenderer } from './AnswerRenderer'

type Screen = 'home' | 'category' | 'answer' | 'search'

interface HistoryEntry {
  screen: Screen
  category?: FaqCategory
  faq?: FaqItem
  query?: string
  results?: FaqItem[]
}

const POPULAR_FAQS = ['install-step', 'skill-where', 'earn-first', 'terminal-what', 'mcp-what']

/** 初心者に優しいチャットボット — カテゴリ選択式 */
export function ChatBot() {
  const [screen, setScreen] = useState<Screen>('home')
  const [category, setCategory] = useState<FaqCategory | null>(null)
  const [currentFaq, setCurrentFaq] = useState<FaqItem | null>(null)
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<FaqItem[]>([])
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [screen])

  const push = (entry: HistoryEntry) => {
    setHistory(h => [...h, entry])
    setScreen(entry.screen)
    if (entry.category) setCategory(entry.category)
    if (entry.faq) setCurrentFaq(entry.faq)
    if (entry.results) setSearchResults(entry.results)
  }

  const goBack = () => {
    const prev = history[history.length - 2]
    setHistory(h => h.slice(0, -1))
    if (!prev) { setScreen('home'); return }
    setScreen(prev.screen)
    if (prev.category) setCategory(prev.category)
    if (prev.faq) setCurrentFaq(prev.faq)
    if (prev.results) setSearchResults(prev.results)
  }

  const handleSearch = (q: string) => {
    if (!q.trim()) return
    const results = searchFaq(q)
    push({ screen: 'search', query: q, results })
    setQuery('')
  }

  const popularItems = POPULAR_FAQS.map(id => FAQ_ITEMS.find(f => f.id === id)).filter(Boolean) as FaqItem[]

  // ── ホーム画面 ──────────────────────────────────────
  const HomeScreen = () => (
    <div className="p-4 space-y-5" ref={topRef}>
      {/* マスコット */}
      <div className="text-center pt-2">
        <div className="text-5xl mb-2">🤖</div>
        <h2 className="text-base font-bold text-white">なんでも聞いてね！</h2>
        <p className="text-gray-400 text-xs mt-1">下のカテゴリから選ぶか、文字で入力してね</p>
      </div>

      {/* 検索バー */}
      <form onSubmit={e => { e.preventDefault(); handleSearch(query) }} className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          ref={inputRef}
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="例：SKILLってどこに入力するの？"
          className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-8 pr-10 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
        />
        <button type="submit" disabled={!query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-brand-500 disabled:bg-gray-700 flex items-center justify-center transition-colors">
          <Send size={12} className="text-white" />
        </button>
      </form>

      {/* カテゴリグリッド */}
      <div>
        <p className="text-xs text-gray-500 mb-2 font-medium">カテゴリから選ぶ</p>
        <div className="grid grid-cols-2 gap-2">
          {FAQ_CATEGORIES.map(cat => (
            <button key={cat.id}
              onClick={() => push({ screen: 'category', category: cat.id })}
              className="flex items-center gap-2.5 p-3 rounded-xl border border-gray-700 bg-gray-800/60 hover:bg-gray-700 hover:border-gray-600 transition-all text-left group"
            >
              <span className="text-2xl shrink-0">{cat.emoji}</span>
              <div className="min-w-0">
                <p className="text-white text-xs font-bold leading-tight group-hover:text-brand-300 transition-colors">{cat.label}</p>
                <p className="text-gray-500 text-xs leading-tight truncate">{cat.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* よくある質問 */}
      <div>
        <p className="text-xs text-gray-500 mb-2 font-medium">🔥 みんながよく聞くこと</p>
        <div className="space-y-1.5">
          {popularItems.map(faq => (
            <button key={faq.id}
              onClick={() => push({ screen: 'answer', faq })}
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all text-left"
            >
              <span className="text-lg shrink-0">{faq.emoji}</span>
              <span className="text-gray-200 text-xs leading-tight">{faq.question}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  // ── カテゴリ一覧 ────────────────────────────────────
  const CategoryScreen = () => {
    const catDef = FAQ_CATEGORIES.find(c => c.id === category)
    const items = category ? getFaqByCategory(category) : []
    return (
      <div className="p-4 space-y-4" ref={topRef}>
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors">
          <ArrowLeft size={14} /> 戻る
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{catDef?.emoji}</span>
          <div>
            <h3 className="font-bold text-white">{catDef?.label}</h3>
            <p className="text-gray-400 text-xs">{catDef?.desc}</p>
          </div>
        </div>
        <div className="space-y-2">
          {items.map(faq => (
            <button key={faq.id}
              onClick={() => push({ screen: 'answer', faq })}
              className="w-full flex items-start gap-3 p-3.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 hover:border-gray-600 transition-all text-left group"
            >
              <span className="text-xl shrink-0 mt-0.5">{faq.emoji}</span>
              <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors">{faq.question}</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── 回答画面 ────────────────────────────────────────
  const AnswerScreen = () => {
    if (!currentFaq) return null
    const related = FAQ_ITEMS.filter(f => f.category === currentFaq.category && f.id !== currentFaq.id).slice(0, 3)
    return (
      <div className="p-4 space-y-4" ref={topRef}>
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors">
          <ArrowLeft size={14} /> 戻る
        </button>
        {/* 質問バッジ */}
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/30">
          <span className="text-2xl shrink-0">{currentFaq.emoji}</span>
          <p className="text-white text-sm font-semibold leading-relaxed">{currentFaq.question}</p>
        </div>
        {/* 回答 */}
        <div className="rounded-xl bg-gray-900 border border-gray-800 p-4">
          <AnswerRenderer text={currentFaq.answer} />
        </div>
        {/* 関連質問 */}
        {related.length > 0 && (
          <div>
            <p className="text-xs text-gray-500 mb-2 font-medium">💡 他にもこんなことを聞いている人がいます</p>
            <div className="space-y-1.5">
              {related.map(faq => (
                <button key={faq.id}
                  onClick={() => push({ screen: 'answer', faq })}
                  className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all text-left"
                >
                  <span className="text-base shrink-0">{faq.emoji}</span>
                  <span className="text-gray-300 text-xs">{faq.question}</span>
                </button>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => { setScreen('home'); setHistory([]) }}
          className="w-full text-center text-xs text-gray-500 hover:text-gray-300 transition-colors py-2">
          🏠 最初の画面に戻る
        </button>
      </div>
    )
  }

  // ── 検索結果 ───────────────────────────────────────
  const SearchScreen = () => {
    const q = history[history.length - 1]?.query ?? ''
    return (
      <div className="p-4 space-y-4" ref={topRef}>
        <button onClick={goBack} className="flex items-center gap-1.5 text-gray-400 hover:text-white text-xs transition-colors">
          <ArrowLeft size={14} /> 戻る
        </button>
        <p className="text-sm text-white font-semibold">「{q}」の検索結果</p>
        {searchResults.length === 0 ? (
          <div className="text-center py-8 space-y-3">
            <p className="text-4xl">🤔</p>
            <p className="text-gray-400 text-sm">答えが見つかりませんでした</p>
            <p className="text-gray-500 text-xs">別の言い方で試してみてね<br/>例：「インストール」「SKILL」「エラー」</p>
            <button onClick={() => setScreen('home')}
              className="mx-auto flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 transition-colors">
              カテゴリから探す →
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {searchResults.map(faq => (
              <button key={faq.id}
                onClick={() => push({ screen: 'answer', faq })}
                className="w-full flex items-start gap-3 p-3.5 rounded-xl border border-gray-700 bg-gray-900 hover:bg-gray-800 transition-all text-left group"
              >
                <span className="text-xl shrink-0 mt-0.5">{faq.emoji}</span>
                <div>
                  <p className="text-gray-200 text-sm group-hover:text-white transition-colors">{faq.question}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {FAQ_CATEGORIES.find(c => c.id === faq.category)?.label}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto">
      {screen === 'home'     && <HomeScreen />}
      {screen === 'category' && <CategoryScreen />}
      {screen === 'answer'   && <AnswerScreen />}
      {screen === 'search'   && <SearchScreen />}
    </div>
  )
}
