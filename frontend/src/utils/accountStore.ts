/** 複数X/Threadsアカウント管理 */

export type AccountPlatform = 'x' | 'threads' | 'both'

export interface XAccount {
  id: string
  name: string              // 表示名
  handle: string            // @xxxxxx (X)
  handleThreads?: string    // @xxxxxx (Threads)
  genre: string             // 発信ジャンル
  concept: string           // アカウントコンセプト
  platform: AccountPlatform // 投稿先プラットフォーム
  color: string             // UI識別カラー
  createdAt: string
  xPostsUrl?: string        // XプロフィールURL
  xPostsContent?: string    // 過去ポスト（文体学習用）
  profileImageUrl?: string        // プロフィール画像URL
  typefullySocialSetId?: string   // Typefullyソーシャルセットと紐付け
}

const KEY = 'namaiki_accounts'
const ACTIVE_KEY = 'namaiki_active_account'
export const ACCOUNTS_CHANGED_EVENT = 'namaiki_accounts_changed'

function notify() {
  window.dispatchEvent(new CustomEvent(ACCOUNTS_CHANGED_EVENT))
}

export function loadAccounts(): XAccount[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') as XAccount[] }
  catch { return [] }
}

export function saveAccounts(accounts: XAccount[]): void {
  localStorage.setItem(KEY, JSON.stringify(accounts))
}

export function getAccountKnowledgeKey(accountId: string) { return `namaiki_knowledge_${accountId}` }
export function getAccountPersonaKey(accountId: string) { return `namaiki_persona_${accountId}` }

export function addAccount(item: Omit<XAccount, 'id' | 'createdAt'>): XAccount {
  const accounts = loadAccounts()
  const newItem: XAccount = { ...item, id: Date.now().toString(), createdAt: new Date().toISOString() }
  saveAccounts([...accounts, newItem])
  if (accounts.length === 0) setActiveAccount(newItem.id)
  else notify()
  return newItem
}

export function updateAccount(id: string, patch: Partial<Omit<XAccount, 'id' | 'createdAt'>>): void {
  saveAccounts(loadAccounts().map(a => a.id === id ? { ...a, ...patch } : a))
  notify()
}

export function deleteAccount(id: string): void {
  const remaining = loadAccounts().filter(a => a.id !== id)
  saveAccounts(remaining)
  if (getActiveAccountId() === id) setActiveAccount(remaining[0]?.id ?? '')
  else notify()
}

export function getActiveAccountId(): string {
  return localStorage.getItem(ACTIVE_KEY) ?? ''
}

export function setActiveAccount(id: string): void {
  localStorage.setItem(ACTIVE_KEY, id)
  notify()
}

export function getActiveAccount(): XAccount | null {
  const id = getActiveAccountId()
  return loadAccounts().find(a => a.id === id) ?? null
}

export const COLORS = [
  { id: 'sky', label: 'スカイ', cls: 'bg-sky-500' },
  { id: 'pink', label: 'ピンク', cls: 'bg-pink-500' },
  { id: 'green', label: 'グリーン', cls: 'bg-green-500' },
  { id: 'purple', label: 'パープル', cls: 'bg-purple-500' },
  { id: 'orange', label: 'オレンジ', cls: 'bg-orange-500' },
]
