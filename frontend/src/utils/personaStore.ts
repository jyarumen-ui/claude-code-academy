/** ペルソナ設定管理 */

export interface Persona {
  genre: string
  target: string
  tone: string
  strengths: string
  goal: string
}

const KEY = 'namaiki_persona'
const DEFAULT: Persona = {
  genre: 'AI×副業・リアル体験談',
  target: '借金・生活苦から逆転を目指す人・副業でXを0から伸ばしたい初心者',
  tone: '親しみやすい',
  strengths: '借金1500万→AI×Xに全賭け・月収80万への逆転ドキュメント・2025年12月X開始・失敗も全公開のリアル発信',
  goal: 'フォロワー獲得',
}

function personaKey(accountId?: string): string {
  return accountId ? `namaiki_persona_${accountId}` : KEY
}

export function loadPersona(accountId?: string): Persona {
  try {
    const k = personaKey(accountId)
    const stored = JSON.parse(localStorage.getItem(k) ?? '{}') as Partial<Persona>
    // アカウント固有データがなければグローバルにフォールバック
    if (accountId && Object.keys(stored).length === 0) {
      return { ...DEFAULT, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') } as Persona
    }
    return { ...DEFAULT, ...stored }
  } catch { return DEFAULT }
}

export function savePersona(p: Persona, accountId?: string): void {
  localStorage.setItem(personaKey(accountId), JSON.stringify(p))
}

export function personaToPrompt(p: Persona): string {
  if (!p.genre) return ''
  return `【発信者ペルソナ】\n発信ジャンル: ${p.genre}\nターゲット層: ${p.target}\n口調・トーン: ${p.tone}\n実績・強み: ${p.strengths}\n目標: ${p.goal}`
}
