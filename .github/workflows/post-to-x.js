const { TwitterApi } = require('twitter-api-v2')
const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  { auth: { persistSession: false } }
)

const twitter = new TwitterApi({
  appKey: process.env.X_API_KEY,
  appSecret: process.env.X_API_SECRET,
  accessToken: process.env.X_ACCESS_TOKEN,
  accessSecret: process.env.X_ACCESS_TOKEN_SECRET,
})

async function main() {
  const now = new Date().toISOString()

  // 投稿時刻を過ぎた予約済み投稿を取得
  const { data: posts, error } = await supabase
    .from('scheduled_posts')
    .select('*')
    .eq('status', 'scheduled')
    .lte('scheduled_at', now)
    .in('platform', ['x', 'both'])
    .order('scheduled_at', { ascending: true })
    .limit(10)

  if (error) { console.error('Supabase error:', error); process.exit(1) }
  if (!posts || posts.length === 0) { console.log('投稿なし'); return }

  console.log(`${posts.length}件を投稿します`)

  for (const post of posts) {
    try {
      const tweet = await twitter.v2.tweet(post.text)
      console.log(`✅ 投稿成功: ${post.id} tweet_id=${tweet.data.id}`)

      await supabase
        .from('scheduled_posts')
        .update({ status: 'posted', posted_at: new Date().toISOString(), tweet_id: tweet.data.id })
        .eq('id', post.id)

    } catch (e) {
      console.error(`❌ 投稿失敗: ${post.id}`, e.message)
      await supabase
        .from('scheduled_posts')
        .update({ status: 'error', error_message: e.message })
        .eq('id', post.id)
    }

    // API レート制限対策で1秒待つ
    await new Promise(r => setTimeout(r, 1000))
  }
}

main().catch(e => { console.error(e); process.exit(1) })
