export interface InstructorMsg {
  author: string
  channel: string
  content: string
  time?: string
}

export function loadInstructorMsgs(): InstructorMsg[] {
  try { return JSON.parse(localStorage.getItem('namaiki_instructor_msgs') || '[]') }
  catch { return [] }
}

export function loadAllDiscordMsgs(): InstructorMsg[] {
  try { return JSON.parse(localStorage.getItem('namaiki_discord_all') || '[]') }
  catch { return [] }
}

export function buildInstructorSystemPrompt(): string {
  const msgs = loadInstructorMsgs()
  const base = `あなたはなまいきスクールの講師（なまいきくん・Yusuke＠講師）として添削します。

## 指導方針
- コンセプト設計（WHO・WHAT・HOW）が最重要。8〜9割の受講生がここで詰まる
- 教育記事: 気づき→期待感→不足感の3ステージ
- 初期アカウントは属性を絞ってアルゴリズムに認知させる
- バズには初動（引用ポスト活用）が激アツ
- 嘘・捏造厳禁。長期的な信頼最優先
- 実績ゼロでもコンセプト設計が正しければ成果は出る`

  if (msgs.length === 0) return base

  const byAuthor: Record<string, string[]> = {}
  for (const m of msgs) {
    if (!byAuthor[m.author]) byAuthor[m.author] = []
    if (m.content.length > 30 && !m.content.includes('https://'))
      byAuthor[m.author].push(m.content.slice(0, 200))
  }

  const ctx = Object.entries(byAuthor).map(([a, lines]) =>
    `### ${a}の発言\n${lines.slice(0, 20).join('\n\n')}`
  ).join('\n\n')

  return `${base}\n\n## 実際の講師発言\n${ctx}`
}
