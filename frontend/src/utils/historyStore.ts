/** ポスト履歴管理 */

export interface PostHistory {
  id: string
  text: string
  theme: string
  purpose: string
  createdAt: string
  status: 'draft' | 'scheduled' | 'posted'
}

const KEY = 'namaiki_history'

export function loadHistory(): PostHistory[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') as PostHistory[] }
  catch { return [] }
}

export function addHistory(item: Omit<PostHistory, 'id' | 'createdAt' | 'status'>): PostHistory {
  const items = loadHistory()
  const newItem: PostHistory = { ...item, id: Date.now().toString(), createdAt: new Date().toISOString(), status: 'draft' }
  localStorage.setItem(KEY, JSON.stringify([newItem, ...items].slice(0, 200)))
  return newItem
}

export function deleteHistory(id: string): void {
  localStorage.setItem(KEY, JSON.stringify(loadHistory().filter(h => h.id !== id)))
}

export function updateHistoryStatus(id: string, status: PostHistory['status']): void {
  localStorage.setItem(KEY, JSON.stringify(loadHistory().map(h => h.id === id ? { ...h, status } : h)))
}
