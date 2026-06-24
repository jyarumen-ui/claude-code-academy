import { useState, useEffect, useCallback } from 'react'
import { BarChart3, RefreshCw, Heart, Repeat2, MessageCircle, Eye } from 'lucide-react'
import { fetchAnalytics, hasBackend, type AnalyticsPost } from '../utils/api'
import { useAccounts } from '../hooks/useAccounts'

function num(n?: number) {
  if (n == null) return '—'
  return n >= 10000 ? `${(n / 10000).toFixed(1)}万` : n.toLocaleString('ja-JP')
}

// 投稿時間帯ごとの平均インプレから「伸びやすい時間」を提案
function suggestBestTime(posts: AnalyticsPost[]): string | null {
  const buckets: Record<number, { sum: number; n: number }> = {}
  for (const p of posts) {
    if (!p.published_at || p.metrics?.impressions == null) continue
    const h = new Date(p.published_at).getHours()
    ;(buckets[h] ??= { sum: 0, n: 0 })
    buckets[h].sum += p.metrics.impressions; buckets[h].n++
  }
  const ranked = Object.entries(buckets)
    .map(([h, b]) => ({ h: Number(h), avg: b.sum / b.n }))
    .sort((a, b) => b.avg - a.avg)
  if (ranked.length === 0) return null
  return ranked.slice(0, 2).map(r => `${r.h}時台`).join(' / ')
}

export function AnalyticsTab() {
  const { active } = useAccounts()
  const [posts, setPosts] = useState<AnalyticsPost[]>([])
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const load = useCallback(async () => {
    setLoading(true); setErr('')
    try {
      const { results } = await fetchAnalytics(active?.typefullySocialSetId || undefined, 20)
      setPosts(results ?? [])
    } catch (e) {
      setErr(e instanceof Error ? e.message : '取得に失敗しました')
    } finally { setLoading(false) }
  }, [active?.typefullySocialSetId])

  useEffect(() => { if (hasBackend) void load() }, [load])

  if (!hasBackend) {
    return (
      <div className="px-4 py-16 text-center space-y-3">
        <p className="text-5xl">📊</p>
        <p className="text-gray-400 font-bold">分析にはバックエンド連携が必要です</p>
        <p className="text-gray-600 text-sm leading-relaxed">
          環境変数 <span className="text-sky-400 font-mono">VITE_API_BASE</span> にバックエンドURLを設定すると、
          インプレ・いいね等を表示できます。
        </p>
      </div>
    )
  }

  const best = suggestBestTime(posts)
  const totalImp = posts.reduce((s, p) => s + (p.metrics?.impressions ?? 0), 0)
  const totalLike = posts.reduce((s, p) => s + (p.metrics?.likes ?? 0), 0)

  return (
    <div className="px-4 py-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 size={18} className="text-sky-400" />
          <h2 className="text-white font-black">分析</h2>
        </div>
        <button onClick={() => void load()} disabled={loading}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white px-3 py-1.5 rounded-xl border border-gray-700 transition-colors">
          <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />更新
        </button>
      </div>

      {err && <p className="text-red-400 text-xs bg-red-500/10 rounded-xl px-3 py-2">{err}</p>}

      {/* サマリー */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl py-4 text-center">
          <p className="text-2xl font-black text-sky-400">{num(totalImp)}</p>
          <p className="text-gray-600 text-xs mt-1">合計インプレ</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl py-4 text-center">
          <p className="text-2xl font-black text-pink-400">{num(totalLike)}</p>
          <p className="text-gray-600 text-xs mt-1">合計いいね</p>
        </div>
      </div>

      {/* 最適投稿時間の提案 */}
      {best && (
        <div className="bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-sky-500/30 rounded-2xl px-4 py-3">
          <p className="text-sky-300 text-sm font-bold">⏰ 伸びやすい時間帯: {best}</p>
          <p className="text-gray-500 text-xs mt-1">過去投稿の平均インプレッションから算出</p>
        </div>
      )}

      {/* 投稿別 */}
      {loading && posts.length === 0 ? (
        <p className="text-gray-600 text-sm text-center py-8">読み込み中...</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-600 text-sm text-center py-8">データがありません</p>
      ) : (
        <div className="space-y-3">
          {posts.map((p, i) => (
            <div key={i} className="bg-gray-900 border border-gray-800 rounded-2xl p-4 space-y-2">
              <p className="text-gray-200 text-sm line-clamp-2">{p.text ?? '(本文なし)'}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><Eye size={12} />{num(p.metrics?.impressions)}</span>
                <span className="flex items-center gap-1"><Heart size={12} />{num(p.metrics?.likes)}</span>
                <span className="flex items-center gap-1"><Repeat2 size={12} />{num(p.metrics?.reposts)}</span>
                <span className="flex items-center gap-1"><MessageCircle size={12} />{num(p.metrics?.replies)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
