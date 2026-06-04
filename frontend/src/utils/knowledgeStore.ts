/** Xマーケティング ナレッジベース の localStorage 管理 */

export type KnowledgeCategory = 'profile' | 'post-structure' | 'hook' | 'feedback' | 'material' | 'discord' | 'instructor' | 'other'

export const CATEGORY_LABELS: Record<KnowledgeCategory, string> = {
  profile: 'プロフ設計',
  'post-structure': 'ポスト構成',
  hook: 'フック理論',
  feedback: '添削事例',
  material: '教材',
  discord: 'Discord投稿',
  instructor: '講師メッセージ',
  other: 'その他',
}

export interface Knowledge {
  id: string
  title: string
  category: KnowledgeCategory
  content: string
  sourceUrl?: string
  createdAt: string
}

const STORAGE_KEY = 'namaiki_knowledge'

function knowledgeKey(accountId?: string): string {
  return accountId ? `namaiki_knowledge_${accountId}` : STORAGE_KEY
}

function migrate(): void {
  const old = localStorage.getItem('x-marketing-knowledge')
  if (old && !localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, old)
  }
}

export function loadKnowledge(accountId?: string): Knowledge[] {
  migrate()
  const k = knowledgeKey(accountId)
  try {
    const stored = JSON.parse(localStorage.getItem(k) ?? '[]') as Knowledge[]
    // アカウント固有がなければグローバルにフォールバック
    if (accountId && stored.length === 0) {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as Knowledge[]
    }
    return stored
  } catch { return [] }
}

export function addKnowledge(item: Omit<Knowledge, 'id' | 'createdAt'>, accountId?: string): Knowledge {
  const items = loadKnowledge(accountId)
  const newItem: Knowledge = { ...item, id: Date.now().toString() + Math.random().toString(36).slice(2), createdAt: new Date().toISOString() }
  localStorage.setItem(knowledgeKey(accountId), JSON.stringify([...items, newItem]))
  return newItem
}

export function deleteKnowledge(id: string, accountId?: string): void {
  const k = knowledgeKey(accountId)
  localStorage.setItem(k, JSON.stringify(loadKnowledge(accountId).filter(kk => kk.id !== id)))
}

export function clearKnowledge(accountId?: string): void {
  localStorage.removeItem(knowledgeKey(accountId))
}

/** Discord History TrackerのJSONをパースしてナレッジに変換 */
export interface DhtMessage { u?: string; a?: string; t?: number; m?: string; content?: string; author?: { bot?: boolean } }

export function importDiscordJson(raw: unknown): { imported: number; skipped: number } {
  const existing = loadKnowledge()
  const existingContents = new Set(existing.map(k => k.content.trim().slice(0, 100)))

  let messages: DhtMessage[] = []
  if (Array.isArray(raw)) messages = raw as DhtMessage[]
  else if (raw && typeof raw === 'object' && 'messages' in (raw as object)) {
    messages = ((raw as { messages: DhtMessage[] }).messages) ?? []
  }

  let imported = 0; let skipped = 0
  const newItems: Knowledge[] = []

  for (const msg of messages) {
    const text = (msg.m ?? msg.content ?? '').trim()
    if (!text || text.length < 10) { skipped++; continue }
    if (msg.a === 'bot' || msg.author?.bot) { skipped++; continue }
    if (existingContents.has(text.slice(0, 100))) { skipped++; continue }
    existingContents.add(text.slice(0, 100))
    newItems.push({ id: `dsc-${Date.now()}-${imported}`, title: text.slice(0, 40) + (text.length > 40 ? '...' : ''), category: 'discord', content: text, createdAt: new Date().toISOString() })
    imported++
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, ...newItems]))
  return { imported, skipped }
}

/** スクレイパー生成JSONをインポート */
interface ScraperItem { title: string; category?: string; content: string; source_url?: string; created_at?: string }

export function importScraperJson(raw: unknown): { imported: number; skipped: number } {
  const existing = loadKnowledge()
  const existingUrls = new Set(existing.map(k => k.sourceUrl).filter(Boolean))

  if (!Array.isArray(raw)) throw new Error('JSONの形式が正しくありません。配列形式を期待しています。')

  let imported = 0; let skipped = 0
  const newItems: Knowledge[] = []

  for (const item of raw as ScraperItem[]) {
    if (!item.content || !item.title) { skipped++; continue }
    if (item.source_url && existingUrls.has(item.source_url)) { skipped++; continue }
    if (item.source_url) existingUrls.add(item.source_url)
    newItems.push({ id: `scr-${Date.now()}-${imported}`, title: item.title, category: 'material', content: item.content, sourceUrl: item.source_url, createdAt: item.created_at ?? new Date().toISOString() })
    imported++
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, ...newItems]))
  return { imported, skipped }
}

/** システムプロンプト用にナレッジを文字列化 */
export function knowledgeToPrompt(items: Knowledge[], limit = 60): string {
  if (items.length === 0) return '（ナレッジベースに教材が登録されていません。STEP3で教材を取り込んでください）'
  // 優先順: 教材 > フック > 添削事例 > ポスト構成 > Discord > 講師 > その他
  const order: KnowledgeCategory[] = ['material', 'hook', 'feedback', 'post-structure', 'discord', 'instructor', 'profile', 'other']
  const sorted = order.flatMap(cat => items.filter(k => k.category === cat))
  return sorted.slice(0, limit).map(k => `【${CATEGORY_LABELS[k.category]}】${k.content.slice(0, 500)}`).join('\n---\n')
}
