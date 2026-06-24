import { useState } from 'react'
import { Save, Settings, ExternalLink, ChevronDown, ChevronUp, Zap, Copy, Check, Database, RefreshCw } from 'lucide-react'
import { loadSettings, saveSettings } from '../../utils/settingsStore'
import { syncPostToSupabase, loadSchedule } from '../../utils/scheduleStore'

interface TypefullySocialSet { id: string; name: string }

const N8N_WORKFLOW = JSON.stringify({
  "name": "なまいきスクール 自動投稿",
  "nodes": [
    { "name": "Webhook", "type": "n8n-nodes-base.webhook", "position": [250, 300],
      "parameters": { "httpMethod": "POST", "path": "namaiki-post", "responseMode": "onReceived" } },
    { "name": "X(Twitter)投稿", "type": "n8n-nodes-base.twitter", "position": [500, 200],
      "parameters": { "text": "={{ $json.text }}", "additionalFields": {} } },
    { "name": "HTTP Request (Threads)", "type": "n8n-nodes-base.httpRequest", "position": [500, 400],
      "parameters": {
        "method": "POST",
        "url": "https://graph.threads.net/me/threads",
        "sendBody": true,
        "bodyParameters": { "parameters": [
          { "name": "media_type", "value": "TEXT" },
          { "name": "text", "value": "={{ $json.text }}" },
          { "name": "access_token", "value": "YOUR_THREADS_ACCESS_TOKEN" }
        ]}
      }
    }
  ]
}, null, 2)

/** API設定画面 */
export function AppSettings() {
  const [form, setForm] = useState(loadSettings)
  const [saved, setSaved] = useState(false)
  const [showApiGuide, setShowApiGuide] = useState(false)
  const [showN8nGuide, setShowN8nGuide] = useState(false)
  const [testStatus, setTestStatus] = useState<'idle'|'testing'|'ok'|'fail'>('idle')
  const [copiedWorkflow, setCopiedWorkflow] = useState(false)
  const [sbSyncStatus, setSbSyncStatus] = useState<'idle'|'syncing'|'ok'|'fail'>('idle')
  const [tfSets, setTfSets] = useState<TypefullySocialSet[]>([])
  const [tfFetchStatus, setTfFetchStatus] = useState<'idle'|'loading'|'ok'|'fail'>('idle')

  const handleSave = () => { saveSettings(form); setSaved(true); setTimeout(() => setSaved(false), 2000) }

  const handleSbSync = async () => {
    if (!form.supabaseUrl || !form.supabaseKey) return
    saveSettings(form)
    setSbSyncStatus('syncing')
    try {
      const posts = loadSchedule().filter(p => p.status === 'scheduled')
      await Promise.all(posts.map(p => syncPostToSupabase(p)))
      setSbSyncStatus('ok')
    } catch { setSbSyncStatus('fail') }
    setTimeout(() => setSbSyncStatus('idle'), 3000)
  }

  const handleTestWebhook = async () => {
    if (!form.webhookUrl) return
    setTestStatus('testing')
    try {
      const res = await fetch(form.webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform: 'test', text: 'なまいきスクール Webhook テスト送信', scheduledAt: new Date().toISOString() }),
      })
      setTestStatus(res.ok ? 'ok' : 'fail')
    } catch { setTestStatus('fail') }
    setTimeout(() => setTestStatus('idle'), 4000)
  }

  const handleFetchTfSets = async () => {
    if (!form.typefullyApiKey) return
    saveSettings(form)
    setTfFetchStatus('loading')
    try {
      const res = await fetch('https://api.typefully.com/v2/social-sets', {
        headers: { 'Authorization': `Bearer ${form.typefullyApiKey}` }
      })
      if (!res.ok) throw new Error(`${res.status}`)
      const data = await res.json() as { results: TypefullySocialSet[] }
      setTfSets(data.results ?? [])
      setTfFetchStatus('ok')
    } catch { setTfFetchStatus('fail') }
  }

  const handleCopyWorkflow = () => {
    navigator.clipboard.writeText(N8N_WORKFLOW)
    setCopiedWorkflow(true)
    setTimeout(() => setCopiedWorkflow(false), 2000)
  }

  const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 font-mono'

  return (
    <div className="space-y-6">

      {/* Anthropic APIキー取得ガイド */}
      <div className="rounded-2xl border border-orange-500/40 bg-orange-500/5 p-4 space-y-3">
        <button
          onClick={() => setShowApiGuide(v => !v)}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <p className="text-orange-200 font-bold text-sm">📖 APIキーとは？取得方法はこちら</p>
            <p className="text-orange-300/70 text-xs mt-0.5">初めての方はここを読んでから設定してください</p>
          </div>
          {showApiGuide ? <ChevronUp size={16} className="text-orange-400 shrink-0" /> : <ChevronDown size={16} className="text-orange-400 shrink-0" />}
        </button>

        {showApiGuide && (
          <div className="space-y-4 pt-1 border-t border-orange-500/20">
            <div>
              <p className="text-white font-bold text-sm mb-2">🤖 Anthropic APIキー（Claude AI）</p>
              <p className="text-gray-300 text-xs mb-2">このアプリのAI機能（ポスト生成・プロフィール作成など）に使います。月$5〜から使えます。</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP1</span><span className="text-gray-300"><a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer" className="text-sky-400 underline">console.anthropic.com/settings/keys</a> を開く</span></div>
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP2</span><span className="text-gray-300">アカウント未作成なら「Sign Up」→メール認証</span></div>
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP3</span><span className="text-gray-300">「Create Key」ボタンを押してキーをコピー</span></div>
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP4</span><span className="text-gray-300">下の入力欄に貼り付けて「保存」ボタンを押す</span></div>
              </div>
              <a href="https://console.anthropic.com/settings/keys" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-2 text-xs text-sky-400 hover:text-sky-300 border border-sky-500/30 rounded-lg px-3 py-1.5 transition-colors">
                <ExternalLink size={12} /> APIキーを取得する（Anthropic公式）
              </a>
            </div>

            <div className="border-t border-orange-500/20 pt-3">
              <p className="text-white font-bold text-sm mb-2">🖼️ OpenAI APIキー（画像生成のみ）</p>
              <p className="text-gray-300 text-xs mb-2">画像生成機能を使う場合のみ必要です。使わない場合は空欄でOK。</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP1</span><span className="text-gray-300"><a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer" className="text-sky-400 underline">platform.openai.com/api-keys</a> を開く</span></div>
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP2</span><span className="text-gray-300">「Create new secret key」でキーを発行してコピー</span></div>
                <div className="flex gap-2 items-start"><span className="text-orange-400 font-bold shrink-0">STEP3</span><span className="text-gray-300">下の「OpenAI APIキー」欄に貼り付けて保存</span></div>
              </div>
            </div>

            <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/30 p-3">
              <p className="text-yellow-300 text-xs font-bold mb-1">⚠️ セキュリティについて</p>
              <p className="text-yellow-300/80 text-xs">APIキーはあなたのブラウザのローカルストレージに保存されます。このアプリのサーバーや外部には一切送信されません。他人のパソコンでは使わないでください。</p>
            </div>
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Settings size={18} className="text-brand-400" />
          <h3 className="text-white font-bold">API・Webhook 設定</h3>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Anthropic APIキー（AI生成機能に必要）</label>
          <input type="password" value={form.anthropicApiKey} onChange={e => setForm(f => ({ ...f, anthropicApiKey: e.target.value }))} placeholder="sk-ant-..." className={inputCls} />
          <p className="text-gray-600 text-xs mt-1">ポスト生成・分析・プロフィール生成などで使用します</p>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">OpenAI APIキー（画像生成に必要）</label>
          <input type="password" value={form.openaiApiKey} onChange={e => setForm(f => ({ ...f, openaiApiKey: e.target.value }))} placeholder="sk-..." className={inputCls} />
          <p className="text-gray-600 text-xs mt-1">DALL-E 3による画像生成機能で使用します</p>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">
            <Zap size={11} className="inline mr-1 text-green-400" />
            n8n Webhook URL（完全自動投稿に必要）
          </label>
          <div className="flex gap-2">
            <input value={form.webhookUrl} onChange={e => setForm(f => ({ ...f, webhookUrl: e.target.value }))}
              placeholder="https://your-n8n.example.com/webhook/namaiki-post" className={`${inputCls} flex-1`} />
            <button onClick={handleTestWebhook} disabled={!form.webhookUrl || testStatus === 'testing'}
              className={`shrink-0 px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                testStatus === 'ok' ? 'bg-green-500 text-white' :
                testStatus === 'fail' ? 'bg-red-500 text-white' :
                'bg-gray-700 hover:bg-gray-600 text-gray-300 disabled:opacity-40'
              }`}>
              {testStatus === 'testing' ? '送信中...' : testStatus === 'ok' ? '✓ 成功' : testStatus === 'fail' ? '✗ 失敗' : 'テスト'}
            </button>
          </div>
          <p className="text-gray-600 text-xs mt-1">設定するとスケジュール時刻に自動でn8nへ送信 → X/Threadsに自動投稿</p>
        </div>

        <button onClick={handleSave} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          <Save size={16} />
          {saved ? '✓ 保存しました！' : '設定を保存する'}
        </button>
      </div>

      {/* Supabase 設定（X完全自動投稿） */}
      <div className="rounded-2xl bg-gray-900 border border-green-500/30 p-5 space-y-4">
        <div className="flex items-center gap-2">
          <Database size={16} className="text-green-400" />
          <h3 className="text-white font-bold">X 完全自動投稿（PC閉じていてもOK）</h3>
        </div>
        <div className="rounded-xl bg-green-500/5 border border-green-500/20 px-4 py-3 text-xs text-green-300 space-y-1">
          <p className="font-bold">📋 セットアップ手順</p>
          <p>① <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-sky-400 underline">supabase.com</a> → GitHubでログイン → New project（名前: xmarketing）</p>
          <p>② Settings → API → Project URL と anon public キーをコピーして下に貼る</p>
          <p>③ SQL Editor で<span className="text-yellow-300">「SQLを実行」</span>ボタンのSQLを実行</p>
          <p>④ GitHub の Settings → Secrets に X API キー 4つ + Supabase URL/KEY を登録</p>
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Supabase Project URL</label>
          <input value={form.supabaseUrl} onChange={e => setForm(f => ({ ...f, supabaseUrl: e.target.value }))}
            placeholder="https://xxxxxxxxxxxx.supabase.co"
            className={inputCls} />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">Supabase anon public キー</label>
          <input type="password" value={form.supabaseKey} onChange={e => setForm(f => ({ ...f, supabaseKey: e.target.value }))}
            placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
            className={inputCls} />
        </div>
        <div className="flex gap-2 flex-wrap">
          <button onClick={handleSave} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            <Save size={14} />{saved ? '✓ 保存済み' : '保存'}
          </button>
          <button onClick={handleSbSync} disabled={!form.supabaseUrl || !form.supabaseKey || sbSyncStatus === 'syncing'}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-colors disabled:opacity-40 ${
              sbSyncStatus === 'ok' ? 'bg-green-500 text-white' :
              sbSyncStatus === 'fail' ? 'bg-red-500 text-white' :
              'bg-gray-700 hover:bg-gray-600 text-white'
            }`}>
            <Database size={14} />
            {sbSyncStatus === 'syncing' ? '同期中...' : sbSyncStatus === 'ok' ? '✓ 同期完了' : sbSyncStatus === 'fail' ? '✗ 失敗' : '既存予約をSupabaseに同期'}
          </button>
        </div>

        {/* SQLコピーセクション */}
        <div className="border-t border-gray-800 pt-4">
          <p className="text-xs text-gray-400 font-bold mb-2">📋 Supabase SQL Editor に実行するSQL</p>
          <pre className="text-xs text-green-300 bg-gray-950 rounded-xl p-3 overflow-x-auto select-all">{`CREATE TABLE IF NOT EXISTS scheduled_posts (
  id TEXT PRIMARY KEY,
  text TEXT NOT NULL,
  platform TEXT NOT NULL DEFAULT 'both',
  scheduled_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled',
  account_id TEXT,
  account_name TEXT,
  account_color TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  posted_at TIMESTAMPTZ,
  tweet_id TEXT,
  error_message TEXT
);
ALTER TABLE scheduled_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "allow_all" ON scheduled_posts FOR ALL USING (true) WITH CHECK (true);`}</pre>
        </div>

        {/* GitHub Secrets 一覧 */}
        <div className="border-t border-gray-800 pt-4">
          <p className="text-xs text-gray-400 font-bold mb-2">🔑 GitHub Secrets に登録する値（Settings → Secrets → Actions）</p>
          <div className="space-y-1 text-xs font-mono">
            {[
              ['SUPABASE_URL', 'SupabaseのProject URL'],
              ['SUPABASE_KEY', 'Supabaseのanon publicキー'],
              ['X_API_KEY', 'X DeveloperポータルのAPI Key'],
              ['X_API_SECRET', 'X DeveloperポータルのAPI Key Secret'],
              ['X_ACCESS_TOKEN', 'X DeveloperポータルのAccess Token'],
              ['X_ACCESS_TOKEN_SECRET', 'X DeveloperポータルのAccess Token Secret'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2 bg-gray-800 rounded-lg px-3 py-1.5">
                <span className="text-yellow-400 shrink-0">{k}</span>
                <span className="text-gray-400 truncate">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Typefully — Threads 完全自動投稿 */}
      <div className="rounded-2xl bg-gray-900 border border-purple-500/30 p-5 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🧵</span>
          <div>
            <h3 className="text-white font-bold">Threads 完全自動投稿（Typefully連携）</h3>
            <p className="text-gray-500 text-xs">Typefullyを経由してThreadsに完全自動投稿できます</p>
          </div>
        </div>

        <div className="rounded-xl bg-purple-500/5 border border-purple-500/20 px-4 py-3 text-xs text-purple-300 space-y-1">
          <p className="font-bold">📋 セットアップ手順</p>
          <p>① <a href="https://typefully.com" target="_blank" rel="noreferrer" className="text-sky-400 underline">typefully.com</a> にサインアップ（無料プランあり）</p>
          <p>② Typefully で Threads アカウントを連携</p>
          <p>③ Settings → API → APIキーを発行してコピー</p>
          <p>④ 下のAPIキー欄に貼り付け → 「ソーシャルセット取得」ボタンをクリック</p>
          <p>⑤ Threads が含まれるソーシャルセットを選択して保存</p>
        </div>

        <div>
          <label className="text-xs text-gray-400 mb-1 block">Typefully API キー</label>
          <div className="flex gap-2">
            <input
              type="password"
              value={form.typefullyApiKey}
              onChange={e => setForm(f => ({ ...f, typefullyApiKey: e.target.value }))}
              placeholder="tf_..."
              className={`${inputCls} flex-1`}
            />
            <button
              onClick={handleFetchTfSets}
              disabled={!form.typefullyApiKey || tfFetchStatus === 'loading'}
              className={`shrink-0 flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold transition-colors disabled:opacity-40 ${
                tfFetchStatus === 'ok' ? 'bg-green-500 text-white' :
                tfFetchStatus === 'fail' ? 'bg-red-500 text-white' :
                'bg-purple-600 hover:bg-purple-500 text-white'
              }`}
            >
              <RefreshCw size={12} className={tfFetchStatus === 'loading' ? 'animate-spin' : ''} />
              {tfFetchStatus === 'loading' ? '取得中...' : tfFetchStatus === 'ok' ? '✓ 取得済み' : tfFetchStatus === 'fail' ? '✗ 失敗' : 'ソーシャルセット取得'}
            </button>
          </div>
        </div>

        {tfSets.length > 0 && (
          <div>
            <label className="text-xs text-gray-400 mb-1 block">ソーシャルセット（Threadsが含まれるものを選択）</label>
            <select
              value={form.typefullySocialSetId}
              onChange={e => setForm(f => ({ ...f, typefullySocialSetId: e.target.value }))}
              className={inputCls}
            >
              <option value="">-- 選択してください --</option>
              {tfSets.map(s => (
                <option key={s.id} value={s.id}>{s.name} ({s.id.slice(0, 8)}...)</option>
              ))}
            </select>
          </div>
        )}

        {form.typefullySocialSetId && (
          <div className="rounded-xl bg-green-500/10 border border-green-500/30 px-3 py-2 text-xs text-green-300">
            ✅ Typefully連携済み — 予約投稿タブの「Typefully予約」ボタンでThreadsに直接スケジュールできます
          </div>
        )}

        <div className="flex gap-2 flex-wrap">
          <button onClick={handleSave} className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            <Save size={14} />{saved ? '✓ 保存済み' : '保存'}
          </button>
        </div>

        {/* GitHub Secrets */}
        {form.typefullyApiKey && form.typefullySocialSetId && (
          <div className="border-t border-gray-800 pt-4">
            <p className="text-xs text-gray-400 font-bold mb-2">🔑 GitHub Actions 完全自動化 — 追加するSecrets</p>
            <div className="space-y-1 text-xs font-mono">
              {[
                ['TYPEFULLY_API_KEY', form.typefullyApiKey.slice(0, 8) + '...'],
                ['TYPEFULLY_SOCIAL_SET_ID', form.typefullySocialSetId],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2 bg-gray-800 rounded-lg px-3 py-1.5">
                  <span className="text-yellow-400 shrink-0">{k}</span>
                  <span className="text-gray-400 truncate">{v}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-2">GitHub → Settings → Secrets → Actions → New repository secret</p>
          </div>
        )}
      </div>

      {/* n8n セットアップガイド */}
      <div className="rounded-2xl bg-gray-900 border border-green-500/30 overflow-hidden">
        <button onClick={() => setShowN8nGuide(v => !v)}
          className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-800 transition-colors text-left">
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-green-400" />
            <div>
              <p className="text-green-200 font-bold text-sm">n8n 自動投稿 完全セットアップガイド</p>
              <p className="text-gray-500 text-xs">ここを読めば10分で完全自動化できます</p>
            </div>
          </div>
          {showN8nGuide ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
        </button>

        {showN8nGuide && (
          <div className="px-5 pb-5 space-y-4 border-t border-gray-800 pt-4">
            <div className="space-y-3 text-xs">
              <div className="bg-gray-800 rounded-xl p-3">
                <p className="text-white font-bold mb-2">📋 送信されるデータ形式</p>
                <pre className="text-green-400 text-xs overflow-x-auto">{`{
  "platform": "x" | "threads" | "both",
  "text": "投稿内容",
  "scheduledAt": "2025-01-01T09:00:00.000Z",
  "accountName": "アカウント名"
}`}</pre>
              </div>

              <div>
                <p className="text-white font-bold mb-2">🔧 n8n ワークフロー設定手順</p>
                <div className="space-y-2">
                  {[
                    ['STEP 1', 'n8nを開いて「新規ワークフロー」を作成'],
                    ['STEP 2', '「Webhook」ノードを追加 → HTTP Method: POST → Path: namaiki-post'],
                    ['STEP 3', 'Webhook URL（Test URL）をコピーして上の入力欄に貼り付けて保存'],
                    ['STEP 4', '「Twitter」ノードを追加 → Xアカウントを認証 → Tweet Text: {{ $json.text }}'],
                    ['STEP 5', 'ThreadsはHTTP Requestノードで graph.threads.net/me/threads にPOST'],
                    ['STEP 6', 'ワークフローを有効化（Activate）→ 完了！'],
                  ].map(([step, desc]) => (
                    <div key={step} className="flex gap-2">
                      <span className="text-green-400 font-bold shrink-0 w-14">{step}</span>
                      <span className="text-gray-300">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-bold">📦 ワークフローJSON（n8nにインポート可能）</p>
                  <button onClick={handleCopyWorkflow}
                    className="flex items-center gap-1 text-xs text-sky-400 border border-sky-500/30 rounded-lg px-2 py-1 hover:bg-sky-500/10 transition-colors">
                    {copiedWorkflow ? <><Check size={11} />コピー済み</> : <><Copy size={11} />コピー</>}
                  </button>
                </div>
                <pre className="text-gray-500 text-xs bg-gray-800 rounded-xl p-3 overflow-x-auto max-h-32">{N8N_WORKFLOW.slice(0, 300)}...</pre>
                <p className="text-gray-600 text-xs mt-1">n8n → ワークフロー → 右上メニュー → Import → 上のJSONを貼り付け</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-3">
                <p className="text-blue-300 text-xs font-bold mb-1">💡 Threads 自動投稿について</p>
                <p className="text-blue-300/70 text-xs">Threads APIには Facebook Developer アカウントとアプリ審査が必要です。設定が難しい場合はXだけ自動化し、Threadsは手動投稿でも◎</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
