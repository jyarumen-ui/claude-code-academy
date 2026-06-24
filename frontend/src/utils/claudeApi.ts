/** Claude API への直接呼び出しユーティリティ */

import { loadSettings } from './settingsStore'

const MODEL = 'claude-3-5-sonnet-20241022'

export async function callClaude(options: {
  system?: string
  userMessage: string
  maxTokens?: number
}): Promise<string> {
  const apiKey = loadSettings().anthropicApiKey
  if (!apiKey) throw new Error('Anthropic APIキーが設定されていません。「API設定」タブで入力してください。')

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: options.maxTokens ?? 2000,
      system: options.system,
      messages: [{ role: 'user', content: options.userMessage }],
    }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error((err as { error?: { message?: string } }).error?.message ?? `API エラー (${res.status})`)
  }

  const data = await res.json() as { content: { text: string }[] }
  return data.content[0]?.text ?? ''
}
