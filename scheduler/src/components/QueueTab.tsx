import { useState, useEffect, useCallback } from 'react'
import { Trash2, ExternalLink, Plus, CalendarDays, Pencil, Check, X as XIcon, Copy, Eye, RefreshCw, Send } from 'lucide-react'
import { loadScheduleAsync, deletePostAsync, updateStatusAsync, updatePostAsync, addPostAsync, type ScheduledPost } from '../utils/scheduleStore'
import { loadAccounts } from '../utils/accountStore'
import { createDraftViaBackend, hasBackend } from '../utils/api'
import { PostPreview } from './PostPreview'

// Threadsのカテゴリをトピックタグとして本文末尾に付与（Typefullyにトピック専用APIが無いため）
function withThreadsTopic(text: string, category?: string): string {
  if (!category?.trim()) return text
  const tag = '#' + category.trim().replace(/^#/, '').replace(/\s+/g, '')
  return text.includes(tag) ? text : `${text}\n${tag}`
}

const PLATFORM_COLOR: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', purple: 'bg-purple-500',
  green: 'bg-green-500', orange: 'bg-orange-500',
}

function fmt(iso: string) {
  return new Date(iso).toLocaleString('ja-JP', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
}
function fmtDate(iso: string) {
  const d = new Date(iso), t = new Date()
  const tom = new Date(t); tom.setDate(t.getDate()+1)
  if (d.toDateString() === t.toDateString()) return '今日'
  if (d.toDateString() === tom.toDateString()) return '明日'
  return `${d.getMonth()+1}/${d.getDate()}（${'日月火水木金土'[d.getDay()]}）`
}
function countdown(iso: string) {
  const diff = new Date(iso).getTime() - Date.now()
  if (diff <= 0) return 'まもなく投稿'
  const h = Math.floor(diff/3600000), m = Math.floor((diff%3600000)/60000)
  return h > 0 ? `あと${h}時間${m}分` : `あと${m}分`
}

async function postToTypefully(
  apiKey: string, socialSetId: string, text: string, scheduledAt: string,
  opts: { x: boolean; threads: boolean; category?: string; mediaIds?: string[] },
): Promise<void> {
  if (!apiKey || !socialSetId) throw new Error('Typefully APIキーまたはソーシャルセットIDが未設定です')
  if (!opts.x && !opts.threads) throw new Error('投稿先プラットフォームが指定されていません')
  const publishAt = new Date(scheduledAt) <= new Date() ? 'now' : new Date(scheduledAt).toISOString()
  // 投稿先に応じてX/Threadsを有効化（従来はthreadsのみ＝両方設定でもXに投稿されないバグ）
  // Threadsのみカテゴリをトピックタグとして付与する
  const media = opts.mediaIds?.length ? { media_ids: opts.mediaIds } : {}
  const platforms: Record<string, unknown> = {}
  if (opts.x) platforms.x = { enabled: true, posts: [{ text, ...media }] }
  if (opts.threads) platforms.threads = { enabled: true, posts: [{ text: withThreadsTopic(text, opts.category), ...media }] }
  const res = await fetch(`https://api.typefully.com/v2/social-sets/${socialSetId}/drafts`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ platforms, publish_at: publishAt }),
  })
  if (!res.ok) { const e = await res.text(); throw new Error(`${res.status}: ${e}`) }
}

function PostCard({ post, onDelete, onRefresh }: {
  post: ScheduledPost; onDelete: () => void; onRefresh: () => void
}) {
  const [tfStatus, setTfStatus] = useState<'idle'|'loading'|'ok'|'fail'>('idle')
  const [tfErr, setTfErr] = useState('')
  const [editing, setEditing] = useState(false)
  const [editText, setEditText] = useState(post.text)
  const [editCat, setEditCat] = useState(post.threadsCategory ?? '')
  const [saving, setSaving] = useState(false)
  const [showPrev, setShowPrev] = useState(false)
  const needsThreads = post.platform === 'threads' || post.platform === 'both'
  const needsX = post.platform === 'x' || post.platform === 'both'
  const isReady = new Date(post.scheduledAt).getTime() <= Date.now()
  const isDraft = post.status === 'draft'
  // バックエンド連携時は鍵不要。未連携でもアカウントにTypefully鍵があれば直叩き可。
  const acc0 = loadAccounts().find(a => a.id === post.accountId)
  const hasTypefully = hasBackend || !!acc0?.typefullyApiKey

  const submitOnce = async () => {
    const acc = loadAccounts().find(a => a.id === post.accountId)
    const setId = acc?.typefullySocialSetId ?? ''
    if (hasBackend) {
      await createDraftViaBackend(post.text, post.scheduledAt, post.platform, setId || undefined, post.threadsCategory, post.mediaIds)
    } else {
      await postToTypefully(acc?.typefullyApiKey ?? '', setId, post.text, post.scheduledAt, { x: needsX, threads: needsThreads, category: post.threadsCategory, mediaIds: post.mediaIds })
    }
  }

  const handleTypefully = async () => {
    setTfStatus('loading'); setTfErr('')
    try {
      try {
        await submitOnce()
      } catch (first) {
        // 自動リトライ1回（一時的な失敗対策）
        await new Promise(r => setTimeout(r, 1500))
        try { await submitOnce() } catch { throw first }
      }
      setTfStatus('ok')
      await updateStatusAsync(post.id, 'posted'); onRefresh()
      setTimeout(() => setTfStatus('idle'), 4000)
    } catch (e) {
      setTfStatus('fail')
      const msg = e instanceof Error ? e.message : '不明なエラー'
      setTfErr(`${msg}（自動リトライも失敗）`)
      await updateStatusAsync(post.id, 'error', msg); onRefresh()
    }
  }

  // 複製：日時を翌日に1日ずらして同内容を新規予約
  const handleDuplicate = async () => {
    const d = new Date(post.scheduledAt); d.setDate(d.getDate() + 1)
    await addPostAsync({
      text: post.text, platform: post.platform, scheduledAt: d.toISOString(), status: 'scheduled',
      accountId: post.accountId, accountName: post.accountName, accountColor: post.accountColor,
      accountAvatar: post.accountAvatar, threadsCategory: post.threadsCategory,
      mediaIds: post.mediaIds, mediaPreviews: post.mediaPreviews,
    })
    onRefresh()
  }

  // 下書き → 予約に変換
  const handlePublishDraft = async () => { await updatePostAsync(post.id, { status: 'scheduled' }); onRefresh() }

  const startEdit = () => { setEditText(post.text); setEditCat(post.threadsCategory ?? ''); setEditing(true) }
  const saveEdit = async () => {
    if (!editText.trim() || saving) return
    setSaving(true)
    try {
      await updatePostAsync(post.id, { text: editText.trim(), threadsCategory: editCat.trim() || undefined })
      setEditing(false); onRefresh()
    } finally { setSaving(false) }
  }

  const handleOpenX = () => {
    window.open(`https://x.com/intent/tweet?text=${encodeURIComponent(post.text)}`, '_blank', 'noopener')
    if (post.platform === 'x') { void updateStatusAsync(post.id, 'posted').then(onRefresh) }
  }

  return (
    <div className={`rounded-2xl border p-4 space-y-3 transition-all ${
      isReady && post.status === 'scheduled' ? 'border-sky-400 bg-sky-500/5 shadow-lg shadow-sky-500/10' :
      isDraft ? 'border-gray-700 border-dashed bg-gray-900' : 'border-gray-800 bg-gray-900'
    }`}>
      {showPrev && (
        <PostPreview text={post.text} platform={post.platform} category={post.threadsCategory}
          media={post.mediaPreviews} accountName={post.accountName} accountAvatar={post.accountAvatar}
          onClose={() => setShowPrev(false)} />
      )}
      {/* ヘッダー */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          {post.accountAvatar
            ? <img src={post.accountAvatar} alt={post.accountName} className="w-6 h-6 rounded-full object-cover shrink-0" onError={e => { (e.target as HTMLImageElement).style.display='none' }} />
            : <div className={`w-6 h-6 rounded-full ${PLATFORM_COLOR[post.accountColor] ?? 'bg-sky-500'} flex items-center justify-center text-white text-xs font-black shrink-0`}>{post.accountName?.[0] ?? '?'}</div>
          }
          {isDraft
            ? <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300 font-bold">下書き</span>
            : <>
                <span className="text-white text-sm font-bold">{fmt(post.scheduledAt)}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isReady ? 'bg-sky-500/20 text-sky-300 animate-pulse' : 'bg-gray-800 text-gray-500'}`}>
                  {countdown(post.scheduledAt)}
                </span>
              </>
          }
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400">
            {post.platform === 'both' ? '𝕏 + 🧵' : post.platform === 'x' ? '𝕏 X' : '🧵 Threads'}
          </span>
        </div>
        <div className="flex items-center shrink-0">
          <button onClick={() => setShowPrev(true)} className="text-gray-700 hover:text-sky-400 p-1.5 transition-colors" title="プレビュー">
            <Eye size={15} />
          </button>
          {!editing && (
            <button onClick={() => { void handleDuplicate() }} className="text-gray-700 hover:text-sky-400 p-1.5 transition-colors" title="複製">
              <Copy size={15} />
            </button>
          )}
          {post.status !== 'posted' && !editing && (
            <button onClick={startEdit} className="text-gray-700 hover:text-sky-400 p-1.5 transition-colors" title="本文を編集">
              <Pencil size={15} />
            </button>
          )}
          <button onClick={() => { void deletePostAsync(post.id).then(onDelete) }} className="text-gray-700 hover:text-red-400 p-1.5 transition-colors">
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* 本文（編集可） */}
      {editing ? (
        <div className="space-y-2">
          <textarea value={editText} onChange={e => setEditText(e.target.value)} rows={4}
            className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm focus:outline-none focus:border-sky-500 resize-none" />
          {needsThreads && (
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-xs font-bold shrink-0">🧵 カテゴリ</span>
              <input value={editCat} onChange={e => setEditCat(e.target.value)}
                placeholder="トピック / コミュニティ"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-purple-500" />
            </div>
          )}
          <div className="flex gap-2">
            <button onClick={saveEdit} disabled={!editText.trim() || saving}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-gray-800 disabled:text-gray-600 text-white transition-colors active:scale-95">
              <Check size={13} />{saving ? '保存中...' : '保存'}
            </button>
            <button onClick={() => setEditing(false)}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border border-gray-700 text-gray-400 hover:text-white transition-colors">
              <XIcon size={13} />キャンセル
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">{post.text}</p>
          {post.threadsCategory && (
            <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-300">🧵 #{post.threadsCategory}</span>
          )}
          {post.mediaPreviews && post.mediaPreviews.length > 0 && (
            <div className="flex gap-1.5 flex-wrap">
              {post.mediaPreviews.map((m, i) => <img key={i} src={m} alt="" className="w-14 h-14 rounded-lg object-cover" />)}
            </div>
          )}
        </>
      )}

      {/* エラー表示 */}
      {tfErr && <p className="text-red-400 text-xs bg-red-500/10 rounded-xl px-3 py-2">{tfErr}</p>}

      {/* アクションボタン */}
      <div className="flex gap-2 flex-wrap">
        {isDraft && (
          <button onClick={() => { void handlePublishDraft() }}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-colors active:scale-95">
            <Send size={12} />予約に変換
          </button>
        )}
        {post.status === 'error' && (
          <button onClick={handleTypefully} disabled={tfStatus === 'loading'}
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-orange-600 hover:bg-orange-500 text-white transition-colors active:scale-95 disabled:opacity-50">
            <RefreshCw size={12} />再試行
          </button>
        )}
        {!isDraft && hasTypefully ? (
          // Typefully接続済み：X/Threads両方を1ボタンで自動予約（Xバグ修正済み）
          <button onClick={handleTypefully} disabled={tfStatus === 'loading'}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition-all active:scale-95 disabled:opacity-50 ${
              tfStatus === 'ok' ? 'bg-green-500/20 text-green-400 border border-green-500/40' :
              tfStatus === 'fail' ? 'bg-red-500/20 text-red-400 border border-red-500/40' :
              'bg-purple-600 hover:bg-purple-500 text-white'
            }`}>
            {tfStatus === 'loading' ? '予約中...' : tfStatus === 'ok' ? '✓ 予約済' : tfStatus === 'fail' ? '✗ 失敗' :
              `🚀 ${post.platform === 'both' ? '𝕏+🧵' : post.platform === 'x' ? '𝕏' : '🧵'} 自動予約`}
          </button>
        ) : isDraft ? null : (
          // 未接続：Xは手動投稿リンクのみ。Threadsは設定が必要。
          <>
            {needsX && (
              <button onClick={handleOpenX}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white transition-colors active:scale-95">
                <ExternalLink size={12} />𝕏 に投稿
              </button>
            )}
            {needsThreads && (
              <span className="text-xs text-gray-500 px-3 py-2">⚙️ 設定でTypefully連携すると自動予約できます</span>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface Props { onCreateNew: () => void }

export function QueueTab({ onCreateNew }: Props) {
  const [posts, setPosts] = useState<ScheduledPost[]>([])
  const refresh = useCallback(() => { void loadScheduleAsync().then(setPosts) }, [])

  useEffect(() => { refresh(); const id = setInterval(refresh, 10000); return () => clearInterval(id) }, [refresh])

  const scheduled = posts.filter(p => p.status === 'scheduled' || p.status === 'error').sort((a,b) => a.scheduledAt.localeCompare(b.scheduledAt))
  const drafts = posts.filter(p => p.status === 'draft')
  const done = posts.filter(p => p.status === 'posted')

  const byDate = scheduled.reduce<Record<string, ScheduledPost[]>>((acc, p) => {
    const k = fmtDate(p.scheduledAt)
    ;(acc[k] ??= []).push(p)
    return acc
  }, {})

  return (
    <div className="px-4 py-5 space-y-5">
      {/* 統計 */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl py-4 text-center">
          <p className="text-3xl font-black text-sky-400">{scheduled.length}</p>
          <p className="text-gray-600 text-xs mt-1">投稿待ち</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl py-4 text-center">
          <p className="text-3xl font-black text-green-400">{done.length}</p>
          <p className="text-gray-600 text-xs mt-1">投稿済み</p>
        </div>
      </div>

      {/* 投稿作成ボタン */}
      <button onClick={onCreateNew}
        className="w-full flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 active:scale-[0.98] text-white font-black py-4 rounded-2xl text-base shadow-lg shadow-sky-500/20 transition-all">
        <Plus size={20} />投稿を作る
      </button>

      {/* 下書き */}
      {drafts.length > 0 && (
        <div>
          <p className="text-gray-400 text-sm font-bold mb-3">📝 下書き ({drafts.length}件)</p>
          <div className="space-y-3">
            {drafts.map(post => (
              <PostCard key={post.id} post={post} onDelete={refresh} onRefresh={refresh} />
            ))}
          </div>
        </div>
      )}

      {/* タイムライン */}
      {Object.keys(byDate).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(byDate).map(([date, datePosts]) => (
            <div key={date}>
              <div className="flex items-center gap-2 mb-3">
                <CalendarDays size={14} className="text-gray-500" />
                <p className="text-gray-400 text-sm font-bold">{date}</p>
                <span className="text-gray-700 text-xs">{datePosts.length}件</span>
              </div>
              <div className="space-y-3">
                {datePosts.map(post => (
                  <PostCard key={post.id} post={post} onDelete={refresh} onRefresh={refresh} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center space-y-3">
          <p className="text-5xl">📭</p>
          <p className="text-gray-400 font-bold">予約がありません</p>
          <p className="text-gray-600 text-sm">「投稿を作る」ボタンから追加してください</p>
        </div>
      )}

      {/* 投稿済み */}
      {done.length > 0 && (
        <div>
          <p className="text-green-500 text-xs font-bold mb-2">✅ 投稿済み ({done.length}件)</p>
          <div className="space-y-2">
            {done.slice(-3).reverse().map(p => (
              <div key={p.id} className="flex items-center gap-3 bg-green-500/5 rounded-2xl px-4 py-3 border border-green-500/30">
                <span className="text-green-400 text-lg">✓</span>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-400 text-xs">{fmt(p.scheduledAt)}</p>
                  <p className="text-gray-500 text-xs line-clamp-1">{p.text}</p>
                </div>
                <button onClick={() => { void deletePostAsync(p.id).then(refresh) }} className="text-gray-800 hover:text-red-400 shrink-0"><Trash2 size={13} /></button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
