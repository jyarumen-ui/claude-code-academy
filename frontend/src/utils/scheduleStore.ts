/** 投稿予約管理 */
import { loadSettings } from './settingsStore'

export type Platform = 'x' | 'threads' | 'both'
export type ScheduleStatus = 'scheduled' | 'posted' | 'error'

export interface ScheduledPost {
  id: string
  text: string
  platform: Platform
  scheduledAt: string
  accountId?: string
  accountName?: string
  accountColor?: string
  imageUrl?: string
  status: ScheduleStatus
  createdAt: string
}

const KEY = 'namaiki_schedule'

export function loadSchedule(): ScheduledPost[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') as ScheduledPost[] }
  catch { return [] }
}

export function addSchedule(item: Omit<ScheduledPost, 'id' | 'createdAt' | 'status'>): ScheduledPost {
  const items = loadSchedule()
  const newItem: ScheduledPost = { ...item, id: `${Date.now()}-${Math.random().toString(36).slice(2,6)}`, createdAt: new Date().toISOString(), status: 'scheduled' }
  localStorage.setItem(KEY, JSON.stringify([...items, newItem].sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt))))
  syncPostToSupabase(newItem).catch(() => {})
  return newItem
}

export function deleteSchedule(id: string): void {
  localStorage.setItem(KEY, JSON.stringify(loadSchedule().filter(s => s.id !== id)))
  syncDeleteToSupabase(id).catch(() => {})
}

export function updateScheduleStatus(id: string, status: ScheduleStatus): void {
  localStorage.setItem(KEY, JSON.stringify(loadSchedule().map(s => s.id === id ? { ...s, status } : s)))
  syncStatusToSupabase(id, status).catch(() => {})
}

export function updateScheduleText(id: string, text: string): void {
  localStorage.setItem(KEY, JSON.stringify(loadSchedule().map(s => s.id === id ? { ...s, text } : s)))
}

export function clearScheduled(): void {
  localStorage.setItem(KEY, JSON.stringify(loadSchedule().filter(s => s.status !== 'scheduled')))
}

export function clearAll(): void {
  localStorage.removeItem(KEY)
}

// ─── Supabase 同期 ────────────────────────────────────────────────────────────

function sbHeaders() {
  const { supabaseKey } = loadSettings()
  return {
    'apikey': supabaseKey,
    'Authorization': `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
    'Prefer': 'resolution=merge-duplicates',
  }
}

export async function syncPostToSupabase(post: ScheduledPost): Promise<void> {
  const { supabaseUrl, supabaseKey } = loadSettings()
  if (!supabaseUrl || !supabaseKey) return
  await fetch(`${supabaseUrl}/rest/v1/scheduled_posts`, {
    method: 'POST',
    headers: sbHeaders(),
    body: JSON.stringify({
      id: post.id,
      text: post.text,
      platform: post.platform,
      scheduled_at: post.scheduledAt,
      status: post.status,
      account_id: post.accountId ?? null,
      account_name: post.accountName ?? null,
      account_color: post.accountColor ?? null,
      created_at: post.createdAt,
    }),
  }).catch(() => {})
}

export async function syncStatusToSupabase(id: string, status: ScheduleStatus): Promise<void> {
  const { supabaseUrl, supabaseKey } = loadSettings()
  if (!supabaseUrl || !supabaseKey) return
  await fetch(`${supabaseUrl}/rest/v1/scheduled_posts?id=eq.${id}`, {
    method: 'PATCH',
    headers: sbHeaders(),
    body: JSON.stringify({ status }),
  }).catch(() => {})
}

export async function syncDeleteToSupabase(id: string): Promise<void> {
  const { supabaseUrl, supabaseKey } = loadSettings()
  if (!supabaseUrl || !supabaseKey) return
  await fetch(`${supabaseUrl}/rest/v1/scheduled_posts?id=eq.${id}`, {
    method: 'DELETE',
    headers: sbHeaders(),
  }).catch(() => {})
}
