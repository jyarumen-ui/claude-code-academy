import { createClient } from '@supabase/supabase-js'
import { loadSettings } from './settingsStore'
import type { Platform } from './accountStore'

export type PostStatus = 'draft' | 'scheduled' | 'posted' | 'error'

export interface ScheduledPost {
  id: string
  text: string
  platform: Platform
  scheduledAt: string
  status: PostStatus
  accountId: string
  accountName: string
  accountColor: string
  accountAvatar: string
  createdAt: string
  errorMessage?: string
  // Threadsのカテゴリ（トピック/コミュニティ）。投稿時にトピックタグとして付与する
  threadsCategory?: string
  // 添付メディア（TypefullyのmediaId）と表示用プレビュー（dataURL）
  mediaIds?: string[]
  mediaPreviews?: string[]
  // 自動リトライ回数
  retryCount?: number
  // Supabaseへの保存が未完了（オフライン/列未整備など）。同期で消さないための目印。localStorage専用。
  pendingSync?: boolean
}

const LOCAL_KEY = 'toukokun_schedule'

function getSupabase() {
  const { supabaseUrl, supabaseKey } = loadSettings()
  if (!supabaseUrl || !supabaseKey) return null
  return createClient(supabaseUrl, supabaseKey)
}

// Supabase行 → ScheduledPost
function fromRow(row: Record<string, unknown>): ScheduledPost {
  return {
    id: String(row.id),
    text: String(row.text ?? ''),
    platform: (row.platform as Platform) ?? 'x',
    scheduledAt: String(row.scheduled_at ?? ''),
    status: (row.status as PostStatus) ?? 'scheduled',
    accountId: String(row.account_id ?? ''),
    accountName: String(row.account_name ?? ''),
    accountColor: String(row.account_color ?? ''),
    accountAvatar: String(row.account_avatar ?? ''),
    createdAt: String(row.created_at ?? ''),
    errorMessage: row.error_message ? String(row.error_message) : undefined,
    threadsCategory: row.threads_category ? String(row.threads_category) : undefined,
    mediaIds: Array.isArray(row.media_ids) ? (row.media_ids as string[]) : undefined,
  }
}

// ScheduledPost → Supabase行（account_avatar/created_atはテーブルに存在しない）
function toRow(post: ScheduledPost) {
  return {
    id: post.id,
    text: post.text,
    platform: post.platform,
    scheduled_at: post.scheduledAt,
    status: post.status,
    account_id: post.accountId,
    account_name: post.accountName,
    account_color: post.accountColor,
    error_message: post.errorMessage ?? null,
    threads_category: post.threadsCategory ?? null,
    media_ids: post.mediaIds && post.mediaIds.length ? post.mediaIds : null,
  }
}

// --- localStorage フォールバック ---
function localLoad(): ScheduledPost[] {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '[]') as ScheduledPost[] }
  catch { return [] }
}
function localSave(posts: ScheduledPost[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(posts))
}

export async function loadScheduleAsync(): Promise<ScheduledPost[]> {
  const sb = getSupabase()
  if (!sb) return localLoad()
  const { data, error } = await sb.from('scheduled_posts').select('*').order('scheduled_at')
  if (error) { console.warn('Supabase load error:', error.message); return localLoad() }
  const server = (data ?? []).map(r => fromRow(r as Record<string, unknown>))
  const serverIds = new Set(server.map(p => p.id))

  // サーバー未保存のローカル投稿（pendingSync）は消さずに保持し、再送信を試みる
  const pending = localLoad().filter(p => p.pendingSync && !serverIds.has(p.id))
  for (const p of pending) {
    const { error: e } = await sb.from('scheduled_posts').insert(toRow(p))
    if (!e) { p.pendingSync = false; serverIds.add(p.id) }
  }
  const merged = [...server, ...pending].sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt))
  localSave(merged)
  return merged
}

export async function addPostAsync(post: Omit<ScheduledPost, 'id' | 'createdAt'>): Promise<ScheduledPost> {
  const newPost: ScheduledPost = {
    ...post,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  }
  const sb = getSupabase()
  if (sb) {
    const { error } = await sb.from('scheduled_posts').insert(toRow(newPost))
    // 失敗時はローカルに残し、次回同期で再送信する（同期による消失を防ぐ）
    if (error) { console.warn('Supabase insert error:', error.message); newPost.pendingSync = true }
  } else {
    newPost.pendingSync = true
  }
  // localStorageにも保存
  const posts = localLoad()
  localSave([...posts, newPost].sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt)))
  return newPost
}

export async function deletePostAsync(id: string): Promise<void> {
  const sb = getSupabase()
  if (sb) {
    const { error } = await sb.from('scheduled_posts').delete().eq('id', id)
    if (error) console.warn('Supabase delete error:', error.message)
  }
  localSave(localLoad().filter(p => p.id !== id))
}

export async function updateStatusAsync(id: string, status: PostStatus, errorMessage?: string): Promise<void> {
  const sb = getSupabase()
  if (sb) {
    const patch: Record<string, unknown> = { status }
    if (errorMessage) patch.error_message = errorMessage
    const { error } = await sb.from('scheduled_posts').update(patch).eq('id', id)
    if (error) console.warn('Supabase update error:', error.message)
  }
  localSave(localLoad().map(p => p.id === id ? { ...p, status, ...(errorMessage ? { errorMessage } : {}) } : p))
}

// 予約済み投稿の本文・カテゴリ等を後から編集する
export async function updatePostAsync(
  id: string,
  patch: Partial<Pick<ScheduledPost, 'text' | 'threadsCategory' | 'scheduledAt' | 'platform' | 'status' | 'mediaIds'>>,
): Promise<void> {
  const sb = getSupabase()
  if (sb) {
    const row: Record<string, unknown> = {}
    if (patch.text !== undefined) row.text = patch.text
    if (patch.platform !== undefined) row.platform = patch.platform
    if (patch.scheduledAt !== undefined) row.scheduled_at = patch.scheduledAt
    if (patch.status !== undefined) row.status = patch.status
    if (patch.threadsCategory !== undefined) row.threads_category = patch.threadsCategory || null
    if (patch.mediaIds !== undefined) row.media_ids = patch.mediaIds?.length ? patch.mediaIds : null
    const { error } = await sb.from('scheduled_posts').update(row).eq('id', id)
    if (error) console.warn('Supabase update error:', error.message)
  }
  localSave(localLoad().map(p => p.id === id ? { ...p, ...patch } : p))
}

// 同期版（後方互換）
export function loadSchedule(): ScheduledPost[] { return localLoad() }
export function saveSchedule(posts: ScheduledPost[]): void { localSave(posts) }
export function addPost(post: Omit<ScheduledPost, 'id' | 'createdAt'>): ScheduledPost {
  const posts = localLoad()
  const newPost: ScheduledPost = { ...post, id: Date.now().toString(), createdAt: new Date().toISOString() }
  localSave([...posts, newPost].sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt)))
  return newPost
}
export function deletePost(id: string): void { localSave(localLoad().filter(p => p.id !== id)) }
export function updateStatus(id: string, status: PostStatus, errorMessage?: string): void {
  localSave(localLoad().map(p => p.id === id ? { ...p, status, ...(errorMessage ? { errorMessage } : {}) } : p))
}
