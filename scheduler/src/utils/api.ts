// バックエンドAPIのベースURL。シークレットはサーバ側に置き、ここ経由で叩く。
// 例: .env に VITE_API_BASE=https://your-backend.onrender.com
export const API_BASE = import.meta.env.VITE_API_BASE ?? 'http://localhost:3001'

export const hasBackend = !!import.meta.env.VITE_API_BASE

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error((body as { error?: string }).error ?? `${res.status} エラー`)
  }
  return res.json() as Promise<T>
}

// 投稿文のAI生成
export function generatePosts(theme: string, platform: string, count = 1): Promise<{ posts: string[] }> {
  return req('/api/social/generate', {
    method: 'POST',
    body: JSON.stringify({ theme, platform, count }),
  })
}

// Typefully予約（鍵はサーバ側）。クライアントにAPIキーを持たせない経路。
export function createDraftViaBackend(
  text: string, scheduledAt: string, platform: string,
  socialSetId?: string, threadsCategory?: string, mediaIds?: string[],
): Promise<unknown> {
  return req('/api/social/draft', {
    method: 'POST',
    body: JSON.stringify({ text, scheduledAt, platform, socialSetId, threadsCategory, mediaIds }),
  })
}

// 画像/動画をバックエンド経由でTypefullyにアップロードし media_id を得る
export function uploadMedia(fileName: string, dataBase64: string, socialSetId?: string): Promise<{ mediaId: string }> {
  return req('/api/social/media', {
    method: 'POST',
    body: JSON.stringify({ fileName, dataBase64, socialSetId }),
  })
}

export interface AnalyticsPost {
  text?: string
  published_at?: string
  platform?: string
  metrics?: { impressions?: number; likes?: number; reposts?: number; replies?: number }
}

// 直近投稿の分析データ
export function fetchAnalytics(socialSetId?: string, limit = 10): Promise<{ results?: AnalyticsPost[] }> {
  const q = new URLSearchParams()
  if (socialSetId) q.set('socialSetId', socialSetId)
  q.set('limit', String(limit))
  return req(`/api/social/analytics?${q.toString()}`)
}
