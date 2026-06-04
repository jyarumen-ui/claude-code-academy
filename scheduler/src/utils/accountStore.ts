export type Platform = 'x' | 'threads' | 'both'

export interface Account {
  id: string
  name: string
  handle: string          // X ハンドル
  handleThreads: string   // Threads ハンドル
  platform: Platform
  color: string
  profileImageUrl: string
  createdAt: string
  // Typefully 認証情報（Threads自動投稿）
  typefullyApiKey: string
  typefullySocialSetId: string
  // X API 認証情報（X自動投稿）
  xApiKey: string
  xApiSecret: string
  xAccessToken: string
  xAccessTokenSecret: string
}

const KEY = 'toukokun_accounts'
const ACTIVE_KEY = 'toukokun_active'
export const ACCOUNTS_CHANGED = 'toukokun_accounts_changed'

const COLORS = ['sky', 'pink', 'purple', 'green', 'orange']
const COLOR_MAP: Record<string, string> = {
  sky: '#0ea5e9', pink: '#ec4899', purple: '#a855f7', green: '#22c55e', orange: '#f97316',
}
export { COLORS, COLOR_MAP }

function notify() { window.dispatchEvent(new CustomEvent(ACCOUNTS_CHANGED)) }

export function loadAccounts(): Account[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]') as Account[] }
  catch { return [] }
}

export function saveAccounts(list: Account[]): void {
  localStorage.setItem(KEY, JSON.stringify(list))
}

const EMPTY_CREDS = {
  typefullyApiKey: '', typefullySocialSetId: '',
  xApiKey: '', xApiSecret: '', xAccessToken: '', xAccessTokenSecret: '',
}

export function addAccount(data: Omit<Account, 'id' | 'createdAt'>): Account {
  const accounts = loadAccounts()
  const acc: Account = { ...EMPTY_CREDS, ...data, id: Date.now().toString(), createdAt: new Date().toISOString() }
  saveAccounts([...accounts, acc])
  if (accounts.length === 0) setActive(acc.id)
  else notify()
  return acc
}

export function updateAccount(id: string, patch: Partial<Account>): void {
  saveAccounts(loadAccounts().map(a => a.id === id ? { ...a, ...patch } : a))
  notify()
}

export function deleteAccount(id: string): void {
  const remaining = loadAccounts().filter(a => a.id !== id)
  saveAccounts(remaining)
  if (getActiveId() === id) setActive(remaining[0]?.id ?? '')
  else notify()
}

export function getActiveId(): string { return localStorage.getItem(ACTIVE_KEY) ?? '' }
export function setActive(id: string): void { localStorage.setItem(ACTIVE_KEY, id); notify() }
export function getActive(): Account | null {
  const id = getActiveId()
  return loadAccounts().find(a => a.id === id) ?? null
}
