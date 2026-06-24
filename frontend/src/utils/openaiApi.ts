/** OpenAI DALL-E 3 画像生成ユーティリティ */

export async function generateImage(options: {
  prompt: string
  apiKey: string
  size?: '1024x1024' | '1792x1024' | '1024x1792'
}): Promise<string> {
  if (!options.apiKey) throw new Error('OpenAI APIキーが設定されていません。設定画面から入力してください。')
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${options.apiKey}` },
    body: JSON.stringify({ model: 'dall-e-3', prompt: options.prompt, n: 1, size: options.size ?? '1024x1024' }),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({})) as { error?: { message?: string } }
    throw new Error(err.error?.message ?? `画像生成エラー (${res.status})`)
  }
  const data = await res.json() as { data: { url: string }[] }
  return data.data[0]?.url ?? ''
}
