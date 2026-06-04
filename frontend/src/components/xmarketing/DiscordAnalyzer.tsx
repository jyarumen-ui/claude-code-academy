import { useState, useMemo } from 'react'
import { Search, Sparkles, BookOpen, Loader2, Brain, MessageSquare } from 'lucide-react'
import { loadInstructorMsgs } from '../../utils/instructorStore'
import { callClaude } from '../../utils/claudeApi'
import { loadSettings } from '../../utils/settingsStore'

const INSTRUCTOR_PRINCIPLES = [
  { icon: '🎯', title: 'コンセプト設計が全て', body: 'WHO（誰に）・WHAT（何を）・HOW（どう伝えるか）。8〜9割の受講生がここで詰まる。ここを固めずにポストを書いても伸びない。' },
  { icon: '📖', title: '教育記事の3ステージ', body: '気づき → 期待感 → 不足感の順に読者を動かす。最後に「もっと知りたい」と思わせて行動を促す。' },
  { icon: '🔍', title: '初期はターゲットを絞る', body: '最初から全員に向けて書くな。属性を絞ってアルゴリズムに「このアカウントは○○専門」と認識させることで伸び始める。' },
  { icon: '🚀', title: 'バズは初動が全て', body: '投稿直後の引用ポスト・リプで初動エンゲージメントを上げる。初動が遅いとアルゴリズムに見切られる。' },
  { icon: '🛡️', title: '嘘・捏造は厳禁', body: '短期フォロワーより長期信頼。一度嘘がバレると全てが崩れる。実績ゼロでもコンセプトが正しければ成果は出る。' },
  { icon: '✏️', title: 'フックで9割決まる', body: '1行目を読まれなければ存在しないと同じ。「え？」「自分のこと？」「知りたい！」の3反応を狙え。' },
]

const TOPIC_EXAMPLES = ['プロフィールの書き方', 'フックの作り方', 'コンセプト設計', '初心者のミス', 'バズる投稿の型', 'エンゲージメント']

export function DiscordAnalyzer() {
  const [query, setQuery] = useState('')
  const [aiAnswer, setAiAnswer] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const msgs = useMemo(() => loadInstructorMsgs(), [])
  const hasKey = !!loadSettings().anthropicApiKey

  const relevant = useMemo(() => {
    if (!query.trim() || msgs.length === 0) return []
    const q = query.toLowerCase()
    return msgs
      .filter(m => m.content.toLowerCase().includes(q) && m.content.length > 40)
      .slice(0, 6)
  }, [query, msgs])

  const handleAsk = async () => {
    if (!query.trim() || !hasKey) return
    setLoading(true); setAiAnswer(''); setError('')
    try {
      const context = msgs
        .filter(m => m.content.length > 30)
        .slice(0, 80)
        .map(m => `[${m.author}] ${m.content}`)
        .join('\n')

      const system = `あなたはなまいきスクールの講師（なまいきくん・Yusuke＠講師）の代理AIです。
以下のDiscordメッセージ群を完全に把握しており、受講生の質問に対して講師の言葉・スタイル・価値観で答えます。
講師の実際の発言を引用しつつ、初心者が理解できるよう具体的・実践的に答えてください。

===講師の実際の発言===
${context}
==================`

      const answer = await callClaude({
        system,
        userMessage: `質問：「${query}」について、講師の教えをまとめてください。初心者でも実践できるよう具体例を交えて説明してください。`,
        maxTokens: 800
      })
      setAiAnswer(answer)
    } catch (e) { setError((e as Error).message) }
    finally { setLoading(false) }
  }

  return (
    <div className="space-y-5">

      {/* ステータス */}
      <div className="rounded-2xl border border-purple-500/40 bg-purple-500/5 p-4">
        <div className="flex items-center gap-3 mb-2">
          <Brain size={20} className="text-purple-400" />
          <p className="text-purple-200 font-bold text-sm">Discord講師ペルソナ — 全機能に自動反映済み</p>
        </div>
        <p className="text-purple-300/70 text-xs leading-relaxed">
          {msgs.length > 0
            ? `✅ ${msgs.length}件の講師メッセージを学習済み。ポスト生成・プロフ作成・添削など全機能でこの講師ペルソナが自動適用されます。生メッセージを見る必要はありません。`
            : '⚠ 講師メッセージがまだ読み込まれていません。inject.htmlを実行してください。'}
        </p>
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          {['ポスト生成', 'プロフ作成', '添削機能', 'テーマ提案', 'ABテスト'].map(label => (
            <span key={label} className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">✓ {label}</span>
          ))}
        </div>
      </div>

      {/* 講師の指導方針 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-sky-400" />
          <p className="text-white font-bold text-sm">講師の指導方針（AIが常に参照している内容）</p>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {INSTRUCTOR_PRINCIPLES.map((p, i) => (
            <div key={i} className="rounded-xl bg-gray-900 border border-gray-800 p-3 flex items-start gap-3">
              <span className="text-xl shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <p className="text-white font-bold text-sm">{p.title}</p>
                <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* テーマ検索 */}
      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Search size={16} className="text-sky-400" />
          <p className="text-white font-bold text-sm">講師の教えを引き出す</p>
        </div>
        <p className="text-gray-400 text-xs">知りたいテーマを入力すると、Discordの講師発言からAIが教えを要約します</p>

        <div className="flex flex-wrap gap-2">
          {TOPIC_EXAMPLES.map(t => (
            <button key={t} onClick={() => { setQuery(t); setAiAnswer('') }}
              className="text-xs border border-gray-700 hover:border-sky-500 text-gray-400 hover:text-sky-300 px-2.5 py-1 rounded-lg transition-colors">
              {t}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); setAiAnswer('') }}
            onKeyDown={e => e.key === 'Enter' && handleAsk()}
            placeholder="例：フックの作り方、コンセプト設計のコツ..."
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500"
          />
          <button onClick={handleAsk} disabled={!query.trim() || loading || !hasKey}
            className="flex items-center gap-1.5 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-colors shrink-0">
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
            AI要約
          </button>
        </div>

        {!hasKey && <p className="text-yellow-400 text-xs">⚠ APIキーを設定するとAI要約が使えます</p>}

        {aiAnswer && (
          <div className="rounded-xl bg-sky-500/5 border border-sky-500/30 p-4 space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Brain size={14} className="text-sky-400" />
              <p className="text-sky-300 font-bold text-xs">講師ペルソナからの回答</p>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{aiAnswer}</p>
          </div>
        )}
        {error && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{error}</p>}

        {relevant.length > 0 && !aiAnswer && (
          <div className="space-y-2">
            <p className="text-gray-400 text-xs font-bold">📌 キーワード一致した講師発言（{relevant.length}件）</p>
            {relevant.map((m, i) => (
              <div key={i} className="rounded-xl bg-gray-800 border border-gray-700 p-3">
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare size={11} className="text-purple-400" />
                  <span className="text-purple-300 text-xs font-bold">{m.author}</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed line-clamp-5">{m.content}</p>
              </div>
            ))}
            <button onClick={handleAsk} disabled={loading || !hasKey}
              className="w-full flex items-center justify-center gap-1.5 text-xs text-sky-400 border border-sky-500/30 hover:border-sky-400 py-2 rounded-xl transition-colors disabled:opacity-40">
              <Sparkles size={12} /> これらの発言をAIで要約する
            </button>
          </div>
        )}
      </div>

    </div>
  )
}
