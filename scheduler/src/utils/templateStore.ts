// 投稿テンプレート（定型文）。組み込み＋ユーザー保存をまとめて扱う。
export interface Template {
  id: string
  title: string
  text: string
  builtin?: boolean
}

const KEY = 'toukokun_templates'

// 組み込みテンプレ（フック→本文→CTAの型）
const BUILTIN: Template[] = [
  { id: 'b1', title: '問いかけ型', builtin: true, text: 'ねえ、{テーマ}で悩んでない？\n\n実は{結論}。\n\n理由は3つ：\n①\n②\n③\n\nあなたはどう思う？' },
  { id: 'b2', title: '実体験シェア', builtin: true, text: '{期間}やってわかった、{テーマ}の本音。\n\n正直、最初は{失敗}。\nでも{気づき}に変えたら一気に楽になった。\n\n同じ人いる？' },
  { id: 'b3', title: 'リスト型', builtin: true, text: '{テーマ}で得した小ワザ5選👇\n\n1.\n2.\n3.\n4.\n5.\n\n保存して後で見返してね。' },
  { id: 'b4', title: '逆張り主張', builtin: true, text: '{テーマ}、みんな勘違いしてる。\n\n本当に大事なのは{主張}。\n\nここを外すと一生伸びない。' },
]

export function loadTemplates(): Template[] {
  try {
    const user = JSON.parse(localStorage.getItem(KEY) ?? '[]') as Template[]
    return [...BUILTIN, ...user]
  } catch { return [...BUILTIN] }
}

export function saveTemplate(title: string, text: string): void {
  try {
    const user = JSON.parse(localStorage.getItem(KEY) ?? '[]') as Template[]
    user.push({ id: Date.now().toString(), title, text })
    localStorage.setItem(KEY, JSON.stringify(user))
  } catch { /* noop */ }
}

export function deleteTemplate(id: string): void {
  try {
    const user = (JSON.parse(localStorage.getItem(KEY) ?? '[]') as Template[]).filter(t => t.id !== id)
    localStorage.setItem(KEY, JSON.stringify(user))
  } catch { /* noop */ }
}
