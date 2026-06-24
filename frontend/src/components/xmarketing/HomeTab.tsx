import { useState, useEffect } from 'react'
import { CheckCircle2, Circle, ChevronRight, Sparkles, CalendarDays, BookOpen, Zap, Clock } from 'lucide-react'
import { loadSettings } from '../../utils/settingsStore'
import { loadKnowledge } from '../../utils/knowledgeStore'
import { loadPersona } from '../../utils/personaStore'
import { getActiveAccountId } from '../../utils/accountStore'
import { loadXAccountStyle } from '../../utils/xAccountStore'
import { loadSchedule, type ScheduledPost } from '../../utils/scheduleStore'

interface Props {
  onNavigate: (tab: string) => void // AnyTab compatible via string
}

function fmtTime(iso: string) {
  return new Date(iso).toLocaleString('ja-JP', { hour: '2-digit', minute: '2-digit' })
}
function fmtDate(iso: string) {
  const d = new Date(iso)
  const now = new Date()
  const tomorrow = new Date(now); tomorrow.setDate(now.getDate() + 1)
  if (d.toDateString() === now.toDateString()) return '今日'
  if (d.toDateString() === tomorrow.toDateString()) return '明日'
  return d.toLocaleString('ja-JP', { month: 'numeric', day: 'numeric' })
}

function groupByDate(posts: ScheduledPost[]) {
  const map: Record<string, ScheduledPost[]> = {}
  for (const p of posts) {
    const key = new Date(p.scheduledAt).toDateString()
    if (!map[key]) map[key] = []
    map[key].push(p)
  }
  return Object.entries(map).slice(0, 4)
}

export function HomeTab({ onNavigate }: Props) {
  const buildSnap = () => {
    const accId = getActiveAccountId()
    const schedule = loadSchedule()
    const scheduled = schedule.filter(p => p.status === 'scheduled')
    const posted = schedule.filter(p => p.status === 'posted')
    const persona = loadPersona(accId)
    return {
      hasApi: !!loadSettings().anthropicApiKey,
      hasPersona: !!(persona.genre || persona.target),
      hasKnowledge: loadKnowledge(accId).length > 0,
      hasXAccount: !!(loadXAccountStyle()?.posts?.trim()),
      knowledgeCount: loadKnowledge(accId).length,
      scheduledCount: scheduled.length,
      postedCount: posted.length,
      nextPosts: scheduled.slice(0, 5),
      grouped: groupByDate(scheduled),
    }
  }

  const [snap, setSnap] = useState(buildSnap)

  useEffect(() => {
    const id = setInterval(() => setSnap(buildSnap()), 1000)
    return () => clearInterval(id)
  }, [])

  const setupItems = [
    { done: snap.hasApi, label: 'APIキー設定', tab: 'settings', emoji: '🔑', desc: 'Claude AIを使うために必要' },
    { done: snap.hasPersona, label: 'キャラクター設定', tab: 'persona', emoji: '👤', desc: '発信ジャンル・ターゲット・強み' },
    { done: snap.hasKnowledge, label: '教材インポート', tab: 'import', emoji: '📚', desc: 'スクール教材をAIに読み込む' },
    { done: snap.hasXAccount, label: 'X過去ポスト登録', tab: 'studio', emoji: '𝕏', desc: '文体をAIが学習して反映' },
  ]
  const setupDone = setupItems.filter(i => i.done).length
  const allReady = setupDone === setupItems.length

  return (
    <div className="space-y-5 pb-4">
      {/* メインCTA */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-blue-600 to-purple-700 p-6 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_60%)]" />
        <p className="text-sky-100 text-xs font-semibold mb-1 tracking-wide uppercase">AI × SNS自動化</p>
        <h2 className="text-white text-2xl font-black leading-tight mb-3">
          今日の投稿を<br />AIで作ろう
        </h2>
        <button
          onClick={() => onNavigate('studio')}
          className="flex items-center gap-2 bg-white text-blue-700 font-black px-5 py-3 rounded-2xl text-sm shadow-lg hover:bg-blue-50 active:scale-95 transition-all"
        >
          <Sparkles size={16} />
          投稿をAI生成する
        </button>
        <div className="absolute right-4 bottom-4 text-white/10 text-8xl font-black select-none">𝕏</div>
      </div>

      {/* クイック統計 */}
      <div className="grid grid-cols-3 gap-3">
        <button onClick={() => onNavigate('schedule')} className="rounded-2xl bg-gray-900 border border-gray-800 p-4 text-center hover:border-sky-500/40 transition-colors">
          <p className="text-2xl font-black text-sky-400">{snap.scheduledCount}</p>
          <p className="text-gray-500 text-xs mt-1">予約中</p>
        </button>
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 text-center">
          <p className="text-2xl font-black text-green-400">{snap.postedCount}</p>
          <p className="text-gray-500 text-xs mt-1">投稿済み</p>
        </div>
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 text-center">
          <p className="text-2xl font-black text-purple-400">{snap.knowledgeCount}</p>
          <p className="text-gray-500 text-xs mt-1">教材</p>
        </div>
      </div>

      {/* セットアップチェックリスト */}
      {!allReady && (
        <div className="rounded-2xl bg-gray-900 border border-amber-500/30 p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-amber-300 font-bold text-sm">🚀 初期設定</p>
            <span className="text-xs text-gray-500">{setupDone}/4 完了</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-1.5 mb-4">
            <div
              className="h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 transition-all duration-500"
              style={{ width: `${(setupDone / 4) * 100}%` }}
            />
          </div>
          <div className="space-y-2">
            {setupItems.map(item => (
              <button
                key={item.tab}
                onClick={() => !item.done && onNavigate(item.tab)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-left transition-all ${
                  item.done
                    ? 'opacity-50 cursor-default'
                    : 'bg-gray-800 hover:bg-gray-700 border border-gray-700 active:scale-[0.98]'
                }`}
              >
                {item.done
                  ? <CheckCircle2 size={18} className="text-green-400 shrink-0" />
                  : <Circle size={18} className="text-gray-600 shrink-0" />
                }
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{item.emoji} {item.label}</p>
                  <p className="text-xs text-gray-500 leading-tight">{item.desc}</p>
                </div>
                {!item.done && <ChevronRight size={14} className="text-gray-500 shrink-0" />}
                {item.done && <span className="text-xs text-green-400 shrink-0">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* タイムライン */}
      {snap.grouped.length > 0 && (
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CalendarDays size={16} className="text-sky-400" />
              <p className="text-white font-bold text-sm">投稿タイムライン</p>
            </div>
            <button onClick={() => onNavigate('schedule')} className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1">
              全て管理 <ChevronRight size={12} />
            </button>
          </div>
          <div className="space-y-4">
            {snap.grouped.map(([dateKey, posts]) => (
              <div key={dateKey}>
                <p className="text-xs font-bold text-gray-500 mb-2 flex items-center gap-1.5">
                  <Clock size={10} />{fmtDate(posts[0].scheduledAt)}・{posts.length}件
                </p>
                <div className="relative pl-4 space-y-2">
                  <div className="absolute left-1.5 top-0 bottom-0 w-px bg-gray-800" />
                  {posts.slice(0,3).map(post => (
                    <div key={post.id} className="relative flex items-start gap-2.5">
                      <div className="absolute -left-2.5 top-2 w-2 h-2 rounded-full bg-sky-500 border-2 border-gray-900 shrink-0" />
                      <div className="flex-1 min-w-0 bg-gray-800/60 rounded-xl px-3 py-2">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sky-400 text-xs font-mono font-bold">{fmtTime(post.scheduledAt)}</span>
                          {post.accountName && (
                            <span className="text-xs text-gray-500 truncate">{post.accountName}</span>
                          )}
                        </div>
                        <p className="text-gray-200 text-xs leading-snug line-clamp-2">{post.text}</p>
                      </div>
                    </div>
                  ))}
                  {posts.length > 3 && (
                    <p className="text-xs text-gray-600 pl-3">＋{posts.length - 3}件</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* クイックアクション */}
      <div>
        <p className="text-gray-500 text-xs font-semibold mb-3 px-1">クイックアクション</p>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onNavigate('studio')}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-sky-500/50 hover:bg-sky-500/5 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center shrink-0">
              <Sparkles size={18} className="text-sky-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">投稿を作る</p>
              <p className="text-gray-500 text-xs">AIで即生成</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate('schedule')}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
              <CalendarDays size={18} className="text-purple-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">予約する</p>
              <p className="text-gray-500 text-xs">時刻指定投稿</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate('import')}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-500/50 hover:bg-green-500/5 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
              <BookOpen size={18} className="text-green-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">教材を追加</p>
              <p className="text-gray-500 text-xs">AIに学習させる</p>
            </div>
          </button>
          <button
            onClick={() => onNavigate('persona')}
            className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
              <Zap size={18} className="text-orange-400" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">キャラ設定</p>
              <p className="text-gray-500 text-xs">ペルソナを変更</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
