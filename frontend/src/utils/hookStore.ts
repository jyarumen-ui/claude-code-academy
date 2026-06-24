/** フック文言バンク管理 */

export type HookCategory = 'fear' | 'curiosity' | 'empathy' | 'achievement' | 'paradox'

export const HOOK_CATEGORY_LABELS: Record<HookCategory, string> = {
  fear: '恐怖・危機感',
  curiosity: '好奇心',
  empathy: '共感',
  achievement: '実績・証拠',
  paradox: '逆説',
}

export interface Hook {
  id: string
  text: string
  category: HookCategory
  createdAt: string
}

const KEY = 'namaiki_hooks'

const DEFAULT_HOOKS: Omit<Hook, 'id' | 'createdAt'>[] = [
  { text: 'これを知らないと〇〇で損します', category: 'fear' },
  { text: '99%の人が知らない〇〇の真実', category: 'curiosity' },
  { text: '私も同じように悩んでいました', category: 'empathy' },
  { text: '月〇万円を達成した具体的な方法', category: 'achievement' },
  { text: '〇〇するほど逆に〇〇が増える理由', category: 'paradox' },
]

export function loadHooks(): Hook[] {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Hook[] | null
    if (!stored) {
      const defaults = DEFAULT_HOOKS.map((h, i) => ({ ...h, id: `default-${i}`, createdAt: new Date().toISOString() }))
      localStorage.setItem(KEY, JSON.stringify(defaults))
      return defaults
    }
    return stored
  } catch { return [] }
}

export function addHook(item: Omit<Hook, 'id' | 'createdAt'>): Hook {
  const items = loadHooks()
  const newItem: Hook = { ...item, id: Date.now().toString(), createdAt: new Date().toISOString() }
  localStorage.setItem(KEY, JSON.stringify([...items, newItem]))
  return newItem
}

export function deleteHook(id: string): void {
  localStorage.setItem(KEY, JSON.stringify(loadHooks().filter(h => h.id !== id)))
}
