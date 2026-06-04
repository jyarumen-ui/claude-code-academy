import { Router } from 'express'

// SNS連携ルーター。
// ⚠️ 設計方針：Typefully / OpenAI のシークレットは「サーバ環境変数」だけに置く。
//   ブラウザには一切渡さない（localStorage平文・ソースハードコードを廃止する受け皿）。
//   必要な環境変数:
//     OPENAI_API_KEY        … 投稿文のAI生成に使用
//     TYPEFULLY_API_KEY     … Typefully予約・分析に使用
//     TYPEFULLY_SOCIAL_SET  … 既定のソーシャルセットID（任意・リクエストで上書き可）
export const socialRouter = Router()

const TYPEFULLY = 'https://api.typefully.com/v2'

function tfHeaders() {
  const key = process.env.TYPEFULLY_API_KEY
  if (!key) throw Object.assign(new Error('TYPEFULLY_API_KEY が未設定です'), { status: 503 })
  return { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }
}

// ── 投稿文のAI生成 ───────────────────────────────
// POST /api/social/generate  { theme, platform?, count?, tone? }
socialRouter.post('/generate', async (req, res, next) => {
  try {
    const key = process.env.OPENAI_API_KEY
    if (!key) return res.status(503).json({ error: 'OPENAI_API_KEY が未設定です' })
    const { theme, platform = 'both', count = 1, tone = 'カジュアルで親しみやすい' } = req.body ?? {}
    if (!theme || typeof theme !== 'string') return res.status(400).json({ error: 'theme は必須です' })

    const limit = platform === 'threads' ? 500 : 280
    const n = Math.min(Math.max(Number(count) || 1, 1), 5)
    const prompt = `あなたは日本語のSNS運用のプロです。テーマ「${theme}」で${platform === 'x' ? 'X(旧Twitter)' : platform === 'threads' ? 'Threads' : 'X/Threads共通'}向けの投稿文を${n}本作成してください。
条件:
- 各${limit}文字以内（厳守）
- トーン: ${tone}
- フック→本文→問いかけ/CTA の構成
- ハッシュタグは付けすぎない（0〜2個）
- 出力はJSON配列のみ: ["本文1","本文2"] の形式で、説明文は一切付けない`

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.9,
      }),
    })
    if (!r.ok) return res.status(502).json({ error: `OpenAI: ${r.status} ${await r.text()}` })
    const data = await r.json() as { choices?: { message?: { content?: string } }[] }
    const raw = data.choices?.[0]?.message?.content ?? '[]'
    let posts: string[]
    try {
      const m = raw.match(/\[[\s\S]*\]/)
      posts = JSON.parse(m ? m[0] : raw)
    } catch { posts = [raw.trim()] }
    res.json({ posts: posts.filter(p => typeof p === 'string' && p.trim()).slice(0, n) })
  } catch (e) { next(e) }
})

// ── Typefully 予約（鍵をクライアントに出さないプロキシ）──────────
// POST /api/social/draft  { text, scheduledAt, platform, socialSetId? }
socialRouter.post('/draft', async (req, res, next) => {
  try {
    const { text, scheduledAt, platform = 'both', socialSetId, threadsCategory, mediaIds } = req.body ?? {}
    if (!text) return res.status(400).json({ error: 'text は必須です' })
    const setId = socialSetId || process.env.TYPEFULLY_SOCIAL_SET
    if (!setId) return res.status(400).json({ error: 'socialSetId が未指定です' })

    // Threadsはカテゴリ（トピック/コミュニティ）をトピックタグとして本文末尾に付与
    const threadsText = (() => {
      if (!threadsCategory || typeof threadsCategory !== 'string' || !threadsCategory.trim()) return text
      const tag = '#' + threadsCategory.trim().replace(/^#/, '').replace(/\s+/g, '')
      return String(text).includes(tag) ? text : `${text}\n${tag}`
    })()

    const media = Array.isArray(mediaIds) && mediaIds.length ? { media_ids: mediaIds } : {}
    const wantX = platform === 'x' || platform === 'both'
    const wantThreads = platform === 'threads' || platform === 'both'
    const platforms: Record<string, unknown> = {}
    if (wantX) platforms.x = { enabled: true, posts: [{ text, ...media }] }
    if (wantThreads) platforms.threads = { enabled: true, posts: [{ text: threadsText, ...media }] }
    const publishAt = !scheduledAt || new Date(scheduledAt) <= new Date() ? 'now' : new Date(scheduledAt).toISOString()

    const r = await fetch(`${TYPEFULLY}/social-sets/${setId}/drafts`, {
      method: 'POST', headers: tfHeaders(),
      body: JSON.stringify({ platforms, publish_at: publishAt }),
    })
    if (!r.ok) return res.status(502).json({ error: `Typefully: ${r.status} ${await r.text()}` })
    res.json(await r.json())
  } catch (e) { next(e) }
})

// ── メディアアップロード（鍵をクライアントに出さない）──────────
// POST /api/social/media  { fileName, dataBase64, socialSetId? }
//   1) Typefullyで presigned URL を発行 → 2) 生バイトをPUT → 3) media_id を返す
socialRouter.post('/media', async (req, res, next) => {
  try {
    const { fileName, dataBase64, socialSetId } = req.body ?? {}
    if (!fileName || !dataBase64) return res.status(400).json({ error: 'fileName と dataBase64 は必須です' })
    const setId = socialSetId || process.env.TYPEFULLY_SOCIAL_SET
    if (!setId) return res.status(400).json({ error: 'socialSetId が未指定です' })

    // 1) presigned URL 発行
    const up = await fetch(`${TYPEFULLY}/social-sets/${setId}/media`, {
      method: 'POST', headers: tfHeaders(),
      body: JSON.stringify({ file_name: fileName }),
    })
    if (!up.ok) return res.status(502).json({ error: `Typefully(media): ${up.status} ${await up.text()}` })
    const meta = await up.json() as Record<string, string>
    const mediaId = meta.media_id ?? meta.id
    const uploadUrl = meta.upload_url ?? meta.url ?? meta.presigned_url
    if (!mediaId || !uploadUrl) return res.status(502).json({ error: 'presigned URL の取得に失敗しました' })

    // 2) 生バイトをPUT（ヘッダ無し・rawボディ）
    const bytes = Buffer.from(String(dataBase64).replace(/^data:[^;]+;base64,/, ''), 'base64')
    const put = await fetch(uploadUrl, { method: 'PUT', body: bytes })
    if (!put.ok) return res.status(502).json({ error: `アップロード失敗: ${put.status}` })

    res.json({ mediaId })
  } catch (e) { next(e) }
})

// ── 分析（直近投稿のインプレ/いいね等）プロキシ ─────────────
// GET /api/social/analytics?socialSetId=&limit=
socialRouter.get('/analytics', async (req, res, next) => {
  try {
    const setId = (req.query.socialSetId as string) || process.env.TYPEFULLY_SOCIAL_SET
    if (!setId) return res.status(400).json({ error: 'socialSetId が未指定です' })
    const limit = Math.min(Number(req.query.limit) || 10, 50)
    const r = await fetch(`${TYPEFULLY}/social-sets/${setId}/analytics/posts?limit=${limit}`, {
      headers: tfHeaders(),
    })
    if (!r.ok) return res.status(502).json({ error: `Typefully: ${r.status} ${await r.text()}` })
    res.json(await r.json())
  } catch (e) { next(e) }
})
