const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  { auth: { persistSession: false } }
)

// Supabaseからアカウント認証情報を取得（Typefullyキーをアカウント単位で持てる）
async function loadAccounts() {
  const { data, error } = await supabase.from('accounts').select('*')
  if (error) { console.warn('accounts table read error:', error.message); return [] }
  return data ?? []
}

// アカウントIDから Typefully 認証情報を解決（Supabase優先 → 環境変数フォールバック）
function resolveTypefully(accountId, accounts) {
  const acc = accounts.find(a => a.id === accountId)
  // アカウント固有のソーシャルセットを優先し、APIキーは環境変数で補完（複数アカウントが各自の投稿先へ出るように）
  const apiKey = (acc && acc.typefully_api_key) || process.env.TYPEFULLY_API_KEY
  const socialSetId = (acc && acc.typefully_social_set_id) || process.env.TYPEFULLY_SOCIAL_SET_ID
  return { apiKey, socialSetId }
}

// Typefully 経由で X / Threads に即時投稿（X APIは使わない）
async function publishViaTypefully(apiKey, socialSetId, text, { needsX, needsThreads }) {
  if (!apiKey || !socialSetId) throw new Error('Typefully未設定（apiKey / socialSetId）')

  const platforms = {}
  if (needsX) platforms.x = { enabled: true, posts: [{ text }] }
  if (needsThreads) platforms.threads = { enabled: true, posts: [{ text }] }
  if (Object.keys(platforms).length === 0) throw new Error('投稿先プラットフォームが未指定')

  const res = await fetch(`https://api.typefully.com/v2/social-sets/${socialSetId}/drafts`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ platforms, publish_at: 'now' }),
  })
  if (!res.ok) { const e = await res.text(); throw new Error(`Typefully ${res.status}: ${e}`) }
  return await res.json()
}

async function main() {
  const now = new Date().toISOString()
  const accounts = await loadAccounts()
  console.log(`アカウント数: ${accounts.length}件`)

  const { data: posts, error } = await supabase
    .from('scheduled_posts').select('*')
    .eq('status', 'scheduled').lte('scheduled_at', now)
    .order('scheduled_at', { ascending: true }).limit(20)

  if (error) { console.error('Supabase error:', error); process.exit(1) }
  if (!posts || posts.length === 0) { console.log('投稿なし'); return }
  console.log(`${posts.length}件を処理します`)

  for (const post of posts) {
    const needsX = post.platform === 'x' || post.platform === 'both'
    const needsThreads = post.platform === 'threads' || post.platform === 'both'

    try {
      const { apiKey, socialSetId } = resolveTypefully(post.account_id, accounts)
      await publishViaTypefully(apiKey, socialSetId, post.text, { needsX, needsThreads })
      console.log(`✅ 投稿成功: ${post.id} (${post.platform}) account=${post.account_id}`)
      await supabase.from('scheduled_posts')
        .update({ status: 'posted', posted_at: new Date().toISOString() })
        .eq('id', post.id)
    } catch (e) {
      console.error(`❌ 投稿失敗: ${post.id}`, e.message)
      await supabase.from('scheduled_posts')
        .update({ status: 'error', error_message: String(e.message) })
        .eq('id', post.id)
    }

    await new Promise(r => setTimeout(r, 1000))
  }
}

main().catch(e => { console.error(e); process.exit(1) })
