import { useState, useEffect, useCallback } from 'react'
import { Trash2, ExternalLink, Pencil, CheckCheck, CheckCircle2, Bell, Zap, AlertTriangle } from 'lucide-react'
import { loadSchedule, deleteSchedule, updateScheduleStatus, updateScheduleText, clearScheduled, clearAll, type ScheduledPost } from '../../utils/scheduleStore'
import { loadSettings, type Settings } from '../../utils/settingsStore'

async function postToTypefully(settings: Settings, text: string, scheduledAt: string): Promise<void> {
  const { typefullyApiKey: key, typefullySocialSetId: setId } = settings
  if (!key || !setId) throw new Error('Typefully未設定')
  const publishAt = new Date(scheduledAt) <= new Date() ? 'now' : new Date(scheduledAt).toISOString()
  const res = await fetch(`https://api.typefully.com/v2/social-sets/${setId}/drafts`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      platforms: { threads: { enabled: true, posts: [{ text }] } },
      publish_at: publishAt,
    }),
  })
  if (!res.ok) { const e = await res.text(); throw new Error(`${res.status}: ${e}`) }
}

function openXPost(text: string) {
  window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}
function openThreadsPost(text: string) {
  window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}

function fmt(iso: string) {
  return new Date(iso).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}
function dateLabel(iso: string) {
  const d = new Date(iso)
  const today = new Date(); today.setHours(0,0,0,0)
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate()+1)
  if (d < new Date()) return '期限切れ'
  if (d.toDateString() === today.toDateString()) return '今日'
  if (d.toDateString() === tomorrow.toDateString()) return '明日'
  return `${d.getMonth()+1}/${d.getDate()}（${['日','月','火','水','木','金','土'][d.getDay()]}）`
}
function countdown(iso: string) {
  const diff = new Date(iso).getTime() - Date.now()
  if (diff <= 0) return '今すぐ！'
  const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000)
  return h > 0 ? `あと${h}時間${m}分` : `あと${m}分`
}

const COLOR_MAP: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', green: 'bg-green-500',
  purple: 'bg-purple-500', orange: 'bg-orange-500',
}

const THREADS_SENT_KEY = 'namaiki_threads_sent'
function loadThreadsSent(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(THREADS_SENT_KEY) ?? '[]') as string[]) }
  catch { return new Set() }
}
function saveThreadsSent(ids: Set<string>) {
  localStorage.setItem(THREADS_SENT_KEY, JSON.stringify([...ids]))
}

// n8n/Make/Zapierへ自動送信
async function sendToWebhook(webhookUrl: string, post: ScheduledPost): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        platform: post.platform,
        text: post.text,
        scheduledAt: post.scheduledAt,
        accountId: post.accountId ?? '',
        accountName: post.accountName ?? '',
        postedAt: new Date().toISOString(),
      }),
    })
    return res.ok
  } catch { return false }
}

interface Props { initialText?: string; onConsumeText?: () => void }

export function ScheduleQueue({ initialText, onConsumeText }: Props) {
  const [items, setItems] = useState<ScheduledPost[]>(loadSchedule)
  const [readyIds, setReadyIds] = useState<Set<string>>(new Set())
  const [sendingIds, setSendingIds] = useState<Set<string>>(new Set())
  const [failedIds, setFailedIds] = useState<Set<string>>(new Set())
  const [editingId, setEditingId] = useState<string|null>(null)
  const [editDraft, setEditDraft] = useState('')
  const [notifGranted, setNotifGranted] = useState(Notification.permission === 'granted')
  const [showClearConfirm, setShowClearConfirm] = useState(false)
  const [threadsSent, setThreadsSent] = useState<Set<string>>(loadThreadsSent)
  const [threadsQueueMode, setThreadsQueueMode] = useState(false)
  const [threadsQueueIdx, setThreadsQueueIdx] = useState(0)
  const [threadsCopied, setThreadsCopied] = useState<string|null>(null)

  const settings = loadSettings()
  const webhookUrl = settings.webhookUrl
  const hasWebhook = !!webhookUrl
  const hasTypefully = !!(settings.typefullyApiKey && settings.typefullySocialSetId)
  const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent)
  const [tfStatus, setTfStatus] = useState<Record<string, 'idle'|'loading'|'ok'|'fail'>>({})

  const refresh = useCallback(() => setItems(loadSchedule()), [])

  useEffect(() => {
    const check = async () => {
      const now = Date.now()
      const pending = loadSchedule().filter(p => p.status === 'scheduled' && new Date(p.scheduledAt).getTime() <= now)
      if (!pending.length) return

      for (const p of pending) {
        if (readyIds.has(p.id) || sendingIds.has(p.id)) continue

        if (hasWebhook) {
          setSendingIds(prev => new Set([...prev, p.id]))
          const ok = await sendToWebhook(webhookUrl, p)
          setSendingIds(prev => { const n = new Set(prev); n.delete(p.id); return n })

          if (ok) {
            updateScheduleStatus(p.id, 'posted')
            if (Notification.permission === 'granted')
              new Notification('✅ 自動投稿しました！', { body: p.text.slice(0, 60) })
          } else {
            setFailedIds(prev => new Set([...prev, p.id]))
            setReadyIds(prev => new Set([...prev, p.id]))
            if (Notification.permission === 'granted')
              new Notification('⚠️ 投稿に失敗しました', { body: '手動で投稿してください' })
          }
        } else {
          setReadyIds(prev => new Set([...prev, p.id]))
          if (Notification.permission === 'granted')
            new Notification('📣 投稿時刻です！', { body: p.text.slice(0, 60) + (p.text.length > 60 ? '…' : '') })
        }
      }
      refresh()
    }

    check()
    const id = setInterval(check, 30000)
    return () => clearInterval(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWebhook, webhookUrl])

  const handlePost = (post: ScheduledPost) => {
    if (post.platform === 'x' || post.platform === 'both') openXPost(post.text)
    if (post.platform === 'threads' || post.platform === 'both') openThreadsPost(post.text)
    updateScheduleStatus(post.id, 'posted')
    setReadyIds(prev => { const n = new Set(prev); n.delete(post.id); return n })
    setFailedIds(prev => { const n = new Set(prev); n.delete(post.id); return n })
    refresh()
  }

  const handleDelete = (id: string) => { deleteSchedule(id); refresh() }

  const handleEditSave = (id: string) => {
    if (editDraft.trim()) { updateScheduleText(id, editDraft.trim()); refresh() }
    setEditingId(null)
  }

  const handleClearScheduled = () => { clearScheduled(); setShowClearConfirm(false); refresh() }
  const handleClearAll = () => { clearAll(); setShowClearConfirm(false); refresh() }

  const readyPosts = items.filter(p => readyIds.has(p.id))
  const scheduled = items.filter(p => p.status === 'scheduled' && !readyIds.has(p.id))
  const done = items.filter(p => p.status === 'posted')

  const threadsPosts = scheduled.filter(p => p.platform === 'threads' || p.platform === 'both')
  const threadsPending = threadsPosts.filter(p => !threadsSent.has(p.id))

  const handleTypefullySchedule = async (post: ScheduledPost) => {
    setTfStatus(s => ({ ...s, [post.id]: 'loading' }))
    try {
      await postToTypefully(settings, post.text, post.scheduledAt)
      setTfStatus(s => ({ ...s, [post.id]: 'ok' }))
      const next = new Set([...threadsSent, post.id])
      setThreadsSent(next); saveThreadsSent(next)
      setTimeout(() => setTfStatus(s => ({ ...s, [post.id]: 'idle' })), 4000)
    } catch (e) {
      console.error(e)
      setTfStatus(s => ({ ...s, [post.id]: 'fail' }))
      setTimeout(() => setTfStatus(s => ({ ...s, [post.id]: 'idle' })), 4000)
    }
  }

  const handleThreadsSend = async (post: ScheduledPost) => {
    if (isMobile && navigator.share) {
      try { await navigator.share({ text: post.text }) } catch { /* キャンセル */ }
    } else {
      await navigator.clipboard.writeText(post.text).catch(() => {})
      openThreadsPost(post.text)
      setThreadsCopied(post.id)
      setTimeout(() => setThreadsCopied(cur => cur === post.id ? null : cur), 3000)
    }
    const next = new Set([...threadsSent, post.id])
    setThreadsSent(next)
    saveThreadsSent(next)
  }

  const handleBatchNext = async () => {
    if (threadsQueueIdx < threadsPending.length) {
      await handleThreadsSend(threadsPending[threadsQueueIdx])
      if (threadsQueueIdx + 1 >= threadsPending.length) {
        setThreadsQueueMode(false); setThreadsQueueIdx(0)
      } else {
        setThreadsQueueIdx(i => i + 1)
      }
    } else {
      setThreadsQueueMode(false); setThreadsQueueIdx(0)
    }
  }

  const byDate = scheduled.reduce<Record<string, ScheduledPost[]>>((acc, p) => {
    const label = dateLabel(p.scheduledAt)
    if (!acc[label]) acc[label] = []
    acc[label].push(p)
    return acc
  }, {})

  const noAccountPosts = scheduled.filter(p => !p.accountId)

  return (
    <div className="space-y-4">

      {/* 自動投稿ステータス */}
      <div className={`rounded-2xl border p-3 flex items-center justify-between gap-3 ${
        hasWebhook ? 'border-green-500/40 bg-green-500/5' : 'border-gray-700 bg-gray-900'
      }`}>
        <div className="flex items-center gap-2">
          <Zap size={14} className={hasWebhook ? 'text-green-400' : 'text-gray-600'} />
          <div>
            <p className={`text-xs font-bold ${hasWebhook ? 'text-green-300' : 'text-gray-500'}`}>
              {hasWebhook ? '✅ 自動投稿 ON（Webhook連携済み）' : '⚪ 手動投稿モード（Webhook未設定）'}
            </p>
            <p className="text-gray-600 text-xs">
              {hasWebhook ? '時刻になったらn8n/Makeへ自動送信します' : '設定 → Webhook URLを登録すると完全自動化できます'}
            </p>
          </div>
        </div>
      </div>

      {/* 通知バナー */}
      {!notifGranted && (
        <div className="rounded-2xl border border-yellow-500/40 bg-yellow-500/5 p-3 flex items-center justify-between gap-3">
          <p className="text-yellow-200 text-sm">🔔 通知をONにすると投稿時刻をお知らせします</p>
          <button onClick={async () => {
            const r = await Notification.requestPermission()
            setNotifGranted(r === 'granted')
          }} className="shrink-0 text-xs bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-3 py-1.5 rounded-xl flex items-center gap-1">
            <Bell size={12} />許可
          </button>
        </div>
      )}

      {/* アカウント未設定警告 */}
      {noAccountPosts.length > 0 && (
        <div className="rounded-2xl border border-orange-500/40 bg-orange-500/5 p-3 flex items-start gap-2">
          <AlertTriangle size={14} className="text-orange-400 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-orange-200 text-xs font-bold">アカウント未設定の予約が{noAccountPosts.length}件あります</p>
            <p className="text-orange-300/70 text-xs">アカウントを登録してから予約すると、アカウントごとに管理できます</p>
          </div>
          <button onClick={() => { handleClearScheduled() }} className="text-orange-400 text-xs hover:text-orange-300 shrink-0">削除</button>
        </div>
      )}

      {/* 転送テキストバナー */}
      {initialText && (
        <div className="rounded-2xl border border-sky-500/40 bg-sky-500/5 p-3 flex items-center justify-between gap-3">
          <p className="text-sky-200 text-xs">📋 「追加」タブからテキストを予約してください</p>
          <button onClick={onConsumeText} className="text-xs text-gray-400 hover:text-white shrink-0">✕</button>
        </div>
      )}

      {/* 🧵 Threads半自動投稿パネル */}
      {threadsPosts.length > 0 && (
        <div className="rounded-2xl border border-purple-500/40 bg-purple-500/5 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🧵</span>
              <div>
                <p className="text-purple-200 font-bold text-sm">Threads半自動投稿</p>
                <p className="text-purple-300/60 text-xs">
                  {threadsPending.length > 0 ? `${threadsPending.length}件 未送信` : '全件送り済み ✓'}
                  {isMobile ? '  · アプリで共有' : '  · テキスト自動コピー＋タブを開く'}
                </p>
              </div>
            </div>
            {!threadsQueueMode && threadsPending.length > 1 && (
              <button onClick={() => { setThreadsQueueMode(true); setThreadsQueueIdx(0) }}
                className="text-xs bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded-xl transition-colors">
                順番に送る
              </button>
            )}
          </div>

          {threadsQueueMode ? (
            <div className="space-y-3">
              <p className="text-xs text-purple-300/70">
                {threadsQueueIdx + 1} / {threadsPending.length} 件目
              </p>
              <p className="text-white text-sm leading-relaxed bg-gray-900 rounded-xl p-3">
                {threadsPending[threadsQueueIdx]?.text}
              </p>
              <div className="flex gap-2">
                <button onClick={handleBatchNext}
                  className="flex-1 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                  <ExternalLink size={14} />
                  {isMobile ? 'アプリで共有して次へ' : 'コピーして開く → 次へ'}
                </button>
                <button onClick={() => { setThreadsQueueMode(false); setThreadsQueueIdx(0) }}
                  className="text-xs text-gray-500 hover:text-gray-300 px-3 transition-colors">
                  中断
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {threadsPosts.map(post => (
                <div key={post.id} className={`rounded-xl p-3 flex items-center gap-3 transition-opacity ${
                  threadsSent.has(post.id) ? 'bg-gray-900/50 opacity-50' : 'bg-gray-900'
                }`}>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-300 text-xs line-clamp-2">{post.text}</p>
                    <p className="text-gray-600 text-xs mt-0.5">{fmt(post.scheduledAt)}</p>
                  </div>
                  {threadsSent.has(post.id) ? (
                    <span className="text-xs text-purple-400/60 shrink-0">送り済み ✓</span>
                  ) : (
                    <div className="flex gap-1.5 shrink-0">
                      {hasTypefully && (
                        <button onClick={() => handleTypefullySchedule(post)}
                          disabled={tfStatus[post.id] === 'loading'}
                          className={`text-xs font-bold py-1.5 px-2.5 rounded-xl transition-all disabled:opacity-50 ${
                            tfStatus[post.id] === 'ok' ? 'bg-green-500/20 text-green-400 border border-green-500/40' :
                            tfStatus[post.id] === 'fail' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
                            'bg-purple-900 hover:bg-purple-800 text-purple-300 border border-purple-500/40'
                          }`}>
                          {tfStatus[post.id] === 'loading' ? '予約中...' :
                           tfStatus[post.id] === 'ok' ? '✓ 予約済' :
                           tfStatus[post.id] === 'fail' ? '✗ 失敗' : '✨ 自動予約'}
                        </button>
                      )}
                      <button onClick={() => handleThreadsSend(post)}
                        className={`text-xs font-bold py-1.5 px-2.5 rounded-xl transition-all ${
                          threadsCopied === post.id
                            ? 'bg-green-500/20 text-green-400 border border-green-500/40'
                            : 'bg-purple-600 hover:bg-purple-500 text-white'
                        }`}>
                        {threadsCopied === post.id ? '✓ 開いた' : isMobile ? '共有' : '🧵 手動'}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 投稿時刻アラート（手動 or webhook失敗時） */}
      {readyPosts.map(p => (
        <div key={p.id} className="rounded-2xl border-2 border-sky-400 bg-sky-500/10 p-4 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sky-200 font-bold text-sm animate-pulse">
              {failedIds.has(p.id) ? '⚠️ 自動送信失敗 — 手動で投稿してください' : '📣 投稿時刻です！'}
            </p>
          </div>
          {p.accountName && (
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${COLOR_MAP[p.accountColor ?? 'sky']}`} />
              <span className="text-xs text-gray-300">{p.accountName}</span>
            </div>
          )}
          <p className="text-white text-sm leading-relaxed">{p.text}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {(p.platform === 'x' || p.platform === 'both') && (
              <button onClick={() => { openXPost(p.text); updateScheduleStatus(p.id, 'posted'); setReadyIds(prev => { const n=new Set(prev); n.delete(p.id); return n }); refresh() }}
                className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl text-sm transition-all">
                <ExternalLink size={16} />X（Twitter）に投稿
              </button>
            )}
            {(p.platform === 'threads' || p.platform === 'both') && (
              <button onClick={() => { openThreadsPost(p.text); updateScheduleStatus(p.id, 'posted'); setReadyIds(prev => { const n=new Set(prev); n.delete(p.id); return n }); refresh() }}
                className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 rounded-xl text-sm transition-all">
                <ExternalLink size={16} />Threadsに投稿
              </button>
            )}
          </div>
        </div>
      ))}

      {/* 予約リスト */}
      {Object.entries(byDate).length === 0 && readyPosts.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          <p className="text-sm">予約がありません</p>
          <p className="text-xs mt-1">「追加」タブから投稿を予約してください</p>
        </div>
      ) : (
        <>
          {scheduled.length > 0 && (
            <div className="flex items-center justify-between px-1">
              <p className="text-gray-400 text-xs font-semibold">{scheduled.length}件の予約</p>
              <div className="relative">
                <button onClick={() => setShowClearConfirm(v => !v)} className="text-xs text-gray-600 hover:text-red-400 transition-colors">
                  全削除
                </button>
                {showClearConfirm && (
                  <div className="absolute right-0 top-full mt-1 z-10 bg-gray-900 border border-gray-700 rounded-xl p-3 w-52 shadow-xl">
                    <p className="text-white text-xs font-bold mb-2">どれを削除しますか？</p>
                    <div className="space-y-1">
                      <button onClick={handleClearScheduled} className="w-full text-left text-xs text-orange-300 hover:text-orange-200 py-1.5 px-2 rounded-lg hover:bg-orange-500/10 transition-colors">
                        予約中のみ削除（投稿済みは残す）
                      </button>
                      <button onClick={handleClearAll} className="w-full text-left text-xs text-red-400 hover:text-red-300 py-1.5 px-2 rounded-lg hover:bg-red-500/10 transition-colors">
                        全て削除（投稿済みも含む）
                      </button>
                      <button onClick={() => setShowClearConfirm(false)} className="w-full text-left text-xs text-gray-500 hover:text-gray-300 py-1.5 px-2 rounded-lg transition-colors">
                        キャンセル
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {Object.entries(byDate).map(([label, posts]) => (
            <div key={label}>
              <p className="text-xs font-bold text-gray-400 px-1 mb-2">{label} ({posts.length}件)</p>
              <div className="space-y-2">
                {posts.map(post => {
                  const isEditing = editingId === post.id
                  const isSending = sendingIds.has(post.id)
                  return (
                    <div key={post.id} className="rounded-xl border border-gray-700 bg-gray-900 p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          {post.accountColor && (
                            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${COLOR_MAP[post.accountColor]}`} />
                          )}
                          <span className="text-white font-bold text-sm">{fmt(post.scheduledAt)}</span>
                          <span className="text-xs text-gray-500">{countdown(post.scheduledAt)}</span>
                          <span className="text-xs text-gray-600 border border-gray-700 px-1.5 py-0.5 rounded">
                            {post.platform === 'both' ? 'X+Threads' : post.platform === 'threads' ? 'Threads' : 'X'}
                          </span>
                          {post.accountName
                            ? <span className="text-xs text-gray-500">{post.accountName}</span>
                            : <span className="text-xs text-orange-500/60 border border-orange-500/30 px-1.5 py-0.5 rounded">アカウント未設定</span>
                          }
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          {isSending ? (
                            <span className="text-xs text-sky-400 animate-pulse">送信中...</span>
                          ) : isEditing ? (
                            <button onClick={() => handleEditSave(post.id)}
                              className="flex items-center gap-1 text-xs text-green-400 border border-green-500/40 rounded-lg px-2 py-1 hover:bg-green-500/10">
                              <CheckCheck size={11} />保存
                            </button>
                          ) : (
                            <button onClick={() => { setEditingId(post.id); setEditDraft(post.text) }}
                              className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-2 py-1">
                              <Pencil size={11} />編集
                            </button>
                          )}
                          <button onClick={() => handleDelete(post.id)} className="text-gray-600 hover:text-red-400 p-1">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      {isEditing ? (
                        <>
                          <textarea value={editDraft} onChange={e => setEditDraft(e.target.value)}
                            rows={3} className="w-full bg-gray-800 border border-sky-500/60 rounded-xl px-3 py-2 text-gray-200 text-sm focus:outline-none resize-none" />
                          <p className={`text-xs ${editDraft.length > 140 ? 'text-red-400' : 'text-gray-500'}`}>{editDraft.length}/140</p>
                        </>
                      ) : (
                        <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{post.text}</p>
                      )}
                      {!isEditing && !isSending && (
                        <button onClick={() => handlePost(post)}
                          className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 border border-sky-500/30 rounded-lg px-3 py-1.5 transition-colors">
                          <ExternalLink size={11} /> 今すぐ手動投稿
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </>
      )}

      {/* 投稿済み */}
      {done.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-600 px-1 mb-2">投稿済み ({done.length}件)</p>
          <div className="space-y-2 opacity-50">
            {done.slice(-3).map(post => (
              <div key={post.id} className="rounded-xl border border-gray-800 bg-gray-900 p-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 size={14} className="text-green-400 shrink-0" />
                  <span className="text-gray-400 text-xs">{fmt(post.scheduledAt)}</span>
                  <p className="text-gray-500 text-xs line-clamp-1">{post.text}</p>
                </div>
                <button onClick={() => handleDelete(post.id)} className="text-gray-700 hover:text-red-400 shrink-0">
                  <Trash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
