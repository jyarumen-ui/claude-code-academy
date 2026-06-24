import { useState } from 'react'
import { Save, Trash2, Plus, Check, RefreshCw, ChevronDown, ChevronUp, Eye, EyeOff, UserCircle2 } from 'lucide-react'
import { loadSettings, saveSettings } from '../utils/settingsStore'
import { loadAccounts, addAccount, updateAccount, deleteAccount, setActive, getActiveId, COLORS, type Account } from '../utils/accountStore'
import { useAccounts } from '../hooks/useAccounts'

const PLATFORM_COLOR: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', purple: 'bg-purple-500',
  green: 'bg-green-500', orange: 'bg-orange-500',
}
const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500 transition-colors'
const inputMonoCls = inputCls + ' font-mono'

interface TfPlatform { username: string; name: string; profile_image_url: string }
interface TfSet {
  id: number; username: string; name: string; profile_image_url: string
  platforms: { x?: TfPlatform | null; threads?: TfPlatform | null }
  publishing_quota?: { used: number; remaining: number }
}

// アカウントカード（名前・画像・API設定まで編集可能）
function AccountCard({ acc, isActive, onActivate, onDelete, onSave }: {
  acc: Account; isActive: boolean
  onActivate: () => void; onDelete: () => void; onSave: (patch: Partial<Account>) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [draft, setDraft] = useState({
    name: acc.name,
    profileImageUrl: acc.profileImageUrl,
    handleThreads: acc.handleThreads,
    handle: acc.handle,
    typefullyApiKey: acc.typefullyApiKey,
    typefullySocialSetId: acc.typefullySocialSetId,
    xApiKey: acc.xApiKey, xApiSecret: acc.xApiSecret,
    xAccessToken: acc.xAccessToken, xAccessTokenSecret: acc.xAccessTokenSecret,
  })
  const [saved, setSaved] = useState(false)
  const [showX, setShowX] = useState(false)
  const [showTf, setShowTf] = useState(false)

  const hasTf = !!(acc.typefullyApiKey && acc.typefullySocialSetId)
  const hasX = !!(acc.xApiKey && acc.xApiSecret && acc.xAccessToken && acc.xAccessTokenSecret)

  const handleSave = () => { onSave(draft); setSaved(true); setTimeout(() => setSaved(false), 2000) }

  return (
    <div className={`rounded-2xl border transition-all ${isActive ? 'border-sky-500 bg-sky-500/5' : 'border-gray-800 bg-gray-900'}`}>
      <div className="flex items-center gap-3 p-4">
        {acc.profileImageUrl
          ? <img src={acc.profileImageUrl} alt={acc.name} className="w-12 h-12 rounded-full object-cover shrink-0" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} />
          : <div className={`w-12 h-12 rounded-full ${PLATFORM_COLOR[acc.color] ?? 'bg-sky-500'} flex items-center justify-center text-white font-black text-xl shrink-0`}>{acc.name[0]}</div>
        }
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-white font-bold">{acc.name}</p>
            {isActive && <span className="text-xs text-sky-400 bg-sky-500/15 px-2 py-0.5 rounded-full">使用中</span>}
          </div>
          <p className="text-gray-500 text-xs mt-0.5">
            {acc.handle ? `𝕏 @${acc.handle}` : ''}{acc.handle && acc.handleThreads ? '  ·  ' : ''}{acc.handleThreads ? `🧵 @${acc.handleThreads}` : ''}
            {!acc.handle && !acc.handleThreads ? 'ハンドル未設定' : ''}
          </p>
          <div className="flex gap-1.5 mt-1 flex-wrap">
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${hasTf ? 'text-purple-400 bg-purple-500/15' : 'text-gray-600 bg-gray-800'}`}>{hasTf ? '🧵 連携済' : '🧵 未設定'}</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${hasX ? 'text-sky-400 bg-sky-500/15' : 'text-gray-600 bg-gray-800'}`}>{hasX ? '𝕏 連携済' : '𝕏 未設定'}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {!isActive && <button onClick={onActivate} className="text-xs text-sky-400 border border-sky-500/40 px-3 py-1.5 rounded-xl hover:border-sky-400 transition-colors">切替</button>}
          <button onClick={() => setExpanded(v => !v)} className="text-gray-500 hover:text-white p-1.5 transition-colors">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button onClick={onDelete} className="text-gray-700 hover:text-red-400 p-1.5 transition-colors"><Trash2 size={14} /></button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-800 p-4 space-y-4">
          {/* 基本情報 */}
          <div className="space-y-2">
            <p className="text-gray-400 text-xs font-bold">👤 基本情報</p>
            <input value={draft.name} onChange={e => setDraft(d => ({ ...d, name: e.target.value }))} placeholder="アカウント名" className={inputCls} />
            <div className="grid grid-cols-2 gap-2">
              <input value={draft.handle} onChange={e => setDraft(d => ({ ...d, handle: e.target.value.replace('@','') }))} placeholder="𝕏 ハンドル（@なし）" className={inputCls} />
              <input value={draft.handleThreads} onChange={e => setDraft(d => ({ ...d, handleThreads: e.target.value.replace('@','') }))} placeholder="🧵 Threadsハンドル" className={inputCls} />
            </div>
            <div className="flex gap-2">
              <input value={draft.profileImageUrl} onChange={e => setDraft(d => ({ ...d, profileImageUrl: e.target.value }))} placeholder="プロフィール画像URL（省略可）" className={`${inputCls} flex-1`} />
              {draft.profileImageUrl && <img src={draft.profileImageUrl} className="w-10 h-10 rounded-full object-cover shrink-0" onError={e => { (e.target as HTMLImageElement).style.opacity='0.3' }} />}
            </div>
          </div>

          {/* Typefully */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-purple-300 text-xs font-bold">🧵 Typefully（Threads自動投稿）</p>
              <button onClick={() => setShowTf(v => !v)} className="text-gray-600 hover:text-gray-400">{showTf ? <EyeOff size={13} /> : <Eye size={13} />}</button>
            </div>
            <input type={showTf ? 'text' : 'password'} value={draft.typefullyApiKey} onChange={e => setDraft(d => ({ ...d, typefullyApiKey: e.target.value }))} placeholder="Typefully APIキー" className={inputMonoCls} />
            <input type={showTf ? 'text' : 'password'} value={draft.typefullySocialSetId} onChange={e => setDraft(d => ({ ...d, typefullySocialSetId: e.target.value }))} placeholder="ソーシャルセットID（例: 310432）" className={inputMonoCls} />
          </div>

          {/* X API */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sky-300 text-xs font-bold">𝕏 X API（X自動投稿）</p>
              <button onClick={() => setShowX(v => !v)} className="text-gray-600 hover:text-gray-400">{showX ? <EyeOff size={13} /> : <Eye size={13} />}</button>
            </div>
            {(['xApiKey','xApiSecret','xAccessToken','xAccessTokenSecret'] as const).map((key, i) => (
              <input key={key} type={showX ? 'text' : 'password'} value={draft[key]}
                onChange={e => setDraft(d => ({ ...d, [key]: e.target.value }))}
                placeholder={['API Key','API Secret','Access Token','Access Token Secret'][i]} className={inputMonoCls} />
            ))}
          </div>

          <button onClick={handleSave} className={`w-full py-3 rounded-xl font-bold text-sm transition-colors ${saved ? 'bg-green-500 text-white' : 'bg-sky-500 hover:bg-sky-400 text-white'}`}>
            {saved ? '✅ 保存しました' : <span className="flex items-center justify-center gap-2"><Save size={14} />このアカウントの設定を保存</span>}
          </button>
        </div>
      )}
    </div>
  )
}

async function syncAccountsToSupabase(accounts: Account[]): Promise<{ ok: boolean; msg: string }> {
  const s = loadSettings()
  if (!s.supabaseUrl || !s.supabaseKey) return { ok: false, msg: 'Supabase未設定' }
  try {
    for (const acc of accounts) {
      const res = await fetch(`${s.supabaseUrl}/rest/v1/accounts`, {
        method: 'POST',
        headers: { 'apikey': s.supabaseKey, 'Authorization': `Bearer ${s.supabaseKey}`, 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates' },
        body: JSON.stringify({
          id: acc.id, name: acc.name, handle: acc.handle, handle_threads: acc.handleThreads, platform: acc.platform,
          typefully_api_key: acc.typefullyApiKey, typefully_social_set_id: acc.typefullySocialSetId,
          x_api_key: acc.xApiKey, x_api_secret: acc.xApiSecret, x_access_token: acc.xAccessToken, x_access_token_secret: acc.xAccessTokenSecret,
        }),
      })
      if (!res.ok) return { ok: false, msg: `Supabase error: ${res.status}` }
    }
    return { ok: true, msg: `✅ ${accounts.length}件同期完了` }
  } catch (e) { return { ok: false, msg: `エラー: ${e instanceof Error ? e.message : '不明'}` } }
}

export function SettingsTab() {
  const { accounts } = useAccounts()
  const activeId = getActiveId()
  const [form, setForm] = useState(loadSettings)
  const [tfSets, setTfSets] = useState<TfSet[]>([])
  const [tfMsg, setTfMsg] = useState('')
  const [tfLoading, setTfLoading] = useState(false)
  const [syncMsg, setSyncMsg] = useState('')
  const [syncing, setSyncing] = useState(false)
  const [globalSaved, setGlobalSaved] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)
  // 新規手動追加フォーム
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAcc, setNewAcc] = useState({ name: '', handle: '', handleThreads: '', profileImageUrl: '' })

  const handleFetchTf = async (apiKey: string) => {
    if (!apiKey) { setTfMsg('APIキーを入力してください'); return }
    setTfLoading(true); setTfMsg(''); setTfSets([])
    try {
      const controller = new AbortController()
      const timer = setTimeout(() => controller.abort(), 8000)
      const res = await fetch('https://api.typefully.com/v2/social-sets', { headers: { 'Authorization': `Bearer ${apiKey}` }, signal: controller.signal })
      clearTimeout(timer)
      if (!res.ok) { setTfMsg(`エラー: HTTP ${res.status}`); return }
      const data = await res.json() as { results?: TfSet[] }
      const results = data.results ?? []
      setTfSets(results.length > 0 ? results : [])
      if (results.length === 0) setTfMsg('アカウントが見つかりませんでした')
    } catch (e) {
      setTfMsg(e instanceof Error && e.name === 'AbortError' ? 'タイムアウト。下の手動追加をお使いください。' : 'CORSエラー。下の手動追加をお使いください。')
    } finally { setTfLoading(false) }
  }

  const handleImportTfSet = (s: TfSet) => {
    const exists = loadAccounts().some(a => a.typefullySocialSetId === String(s.id))
    if (exists) { setTfMsg('このアカウントはすでに追加済みです'); return }
    const hasX = !!s.platforms?.x; const hasThreads = !!s.platforms?.threads
    const avatar = s.platforms?.threads?.profile_image_url ?? s.platforms?.x?.profile_image_url ?? s.profile_image_url
    addAccount({
      name: s.name,
      handle: s.platforms?.x?.username ?? '',
      handleThreads: s.platforms?.threads?.username ?? '',
      platform: hasX && hasThreads ? 'both' : hasX ? 'x' : 'threads',
      color: COLORS[loadAccounts().length % COLORS.length],
      profileImageUrl: avatar,
      typefullyApiKey: form.typefullyApiKey,
      typefullySocialSetId: String(s.id),
      xApiKey: '', xApiSecret: '', xAccessToken: '', xAccessTokenSecret: '',
    })
    setTfSets([]); setTfMsg('✅ 追加しました！')
  }

  const handleAddManual = () => {
    if (!newAcc.name.trim()) return
    addAccount({
      name: newAcc.name.trim(),
      handle: newAcc.handle,
      handleThreads: newAcc.handleThreads,
      platform: newAcc.handle && newAcc.handleThreads ? 'both' : newAcc.handle ? 'x' : 'threads',
      color: COLORS[loadAccounts().length % COLORS.length],
      profileImageUrl: newAcc.profileImageUrl,
      typefullyApiKey: '', typefullySocialSetId: '',
      xApiKey: '', xApiSecret: '', xAccessToken: '', xAccessTokenSecret: '',
    })
    setNewAcc({ name: '', handle: '', handleThreads: '', profileImageUrl: '' })
    setShowAddForm(false)
  }

  const handleSync = async () => {
    setSyncing(true); setSyncMsg('')
    const result = await syncAccountsToSupabase(loadAccounts())
    setSyncMsg(result.msg); setSyncing(false)
    setTimeout(() => setSyncMsg(''), 5000)
  }

  return (
    <div className="px-4 py-5 space-y-6">

      {/* アカウント一覧 */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-black text-xl">アカウント</h2>
          <span className="text-gray-500 text-sm">{accounts.length}件</span>
        </div>

        {accounts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-700 py-10 text-center">
            <UserCircle2 size={40} className="text-gray-700 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">アカウントが未登録です</p>
            <p className="text-gray-600 text-xs mt-1">下からアカウントを追加してください</p>
          </div>
        ) : (
          <div className="space-y-3">
            {accounts.map((acc: Account) => (
              <AccountCard key={acc.id} acc={acc} isActive={acc.id === activeId}
                onActivate={() => setActive(acc.id)}
                onDelete={() => deleteAccount(acc.id)}
                onSave={patch => updateAccount(acc.id, patch)}
              />
            ))}
          </div>
        )}

        {/* アカウント追加ボタン群 */}
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => setShowAddForm(v => !v)}
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-dashed border-gray-600 hover:border-sky-500 text-gray-400 hover:text-sky-400 text-sm font-semibold transition-colors">
            <Plus size={16} />手動で追加
          </button>
          <button onClick={() => handleFetchTf(form.typefullyApiKey)} disabled={tfLoading}
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-dashed border-purple-500/40 hover:border-purple-500 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors disabled:opacity-50">
            <RefreshCw size={16} className={tfLoading ? 'animate-spin' : ''} />Typefullyから取得
          </button>
        </div>

        {/* 手動追加フォーム */}
        {showAddForm && (
          <div className="rounded-2xl bg-gray-900 border border-sky-500/30 p-4 space-y-3">
            <p className="text-white font-bold text-sm">✨ アカウントを追加</p>
            <input value={newAcc.name} onChange={e => setNewAcc(d => ({ ...d, name: e.target.value }))} placeholder="アカウント名 *" className={inputCls} />
            <div className="grid grid-cols-2 gap-2">
              <input value={newAcc.handle} onChange={e => setNewAcc(d => ({ ...d, handle: e.target.value.replace('@','') }))} placeholder="𝕏 Xハンドル" className={inputCls} />
              <input value={newAcc.handleThreads} onChange={e => setNewAcc(d => ({ ...d, handleThreads: e.target.value.replace('@','') }))} placeholder="🧵 Threadsハンドル" className={inputCls} />
            </div>
            <input value={newAcc.profileImageUrl} onChange={e => setNewAcc(d => ({ ...d, profileImageUrl: e.target.value }))} placeholder="プロフィール画像URL（省略可）" className={inputCls} />
            <div className="flex gap-2">
              <button onClick={handleAddManual} disabled={!newAcc.name.trim()}
                className="flex-1 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white font-bold py-3 rounded-xl text-sm transition-colors">追加する</button>
              <button onClick={() => setShowAddForm(false)} className="px-4 border border-gray-700 text-gray-400 hover:text-white rounded-xl text-sm transition-colors">キャンセル</button>
            </div>
          </div>
        )}

        {/* Typefully取得結果 */}
        {tfSets.length > 0 && (
          <div className="space-y-2">
            {tfSets.map(s => {
              const alreadyAdded = loadAccounts().some(a => a.typefullySocialSetId === String(s.id))
              const platforms = [s.platforms?.x && '𝕏', s.platforms?.threads && '🧵'].filter(Boolean).join(' · ')
              return (
                <div key={s.id} className="flex items-center gap-3 bg-gray-900 rounded-2xl p-3 border border-purple-500/20">
                  <img src={s.profile_image_url} alt={s.name} className="w-11 h-11 rounded-full object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm truncate">{s.name}</p>
                    <p className="text-gray-500 text-xs">@{s.username} · {platforms || '?'}</p>
                    {s.publishing_quota && <p className="text-gray-600 text-xs">今月残り {s.publishing_quota.remaining}件</p>}
                  </div>
                  <button onClick={() => handleImportTfSet(s)} disabled={alreadyAdded}
                    className={`shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-2 rounded-xl transition-colors ${alreadyAdded ? 'bg-green-500/15 text-green-400 border border-green-500/30' : 'bg-purple-600 hover:bg-purple-500 text-white'}`}>
                    {alreadyAdded ? <><Check size={12} />追加済み</> : <><Plus size={12} />追加</>}
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {tfMsg && (
          <p className={`text-xs text-center px-3 py-2 rounded-xl ${tfMsg.startsWith('✅') ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-300'}`}>{tfMsg}</p>
        )}

        {/* Supabase同期 */}
        {accounts.length > 0 && (
          <div className="space-y-1.5">
            <button onClick={handleSync} disabled={syncing}
              className="w-full py-3.5 rounded-2xl border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-300 font-bold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50">
              <RefreshCw size={14} className={syncing ? 'animate-spin' : ''} />
              {syncing ? '同期中...' : '🗄️ GitHub Actions 用にSupabaseへ同期'}
            </button>
            {syncMsg && <p className={`text-xs text-center ${syncMsg.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>{syncMsg}</p>}
            <p className="text-gray-700 text-xs text-center">同期するとPC閉じていても自動投稿されます</p>
          </div>
        )}
      </section>

      {/* Typefully APIキー設定（上級者向け・折りたたみ） */}
      <section className="space-y-3">
        <button onClick={() => setShowAdvanced(v => !v)}
          className="w-full flex items-center justify-between rounded-2xl bg-gray-900 border border-gray-800 px-4 py-3.5 hover:border-gray-700 transition-colors">
          <div className="text-left">
            <h2 className="text-white font-bold text-base flex items-center gap-2">⚙️ 上級者向け設定</h2>
            <p className="text-gray-600 text-xs mt-0.5">APIキー・データベース連携（通常は触らなくてOK）</p>
          </div>
          {showAdvanced ? <ChevronUp size={18} className="text-gray-500" /> : <ChevronDown size={18} className="text-gray-500" />}
        </button>
        {showAdvanced && (
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 space-y-3">
          <p className="text-yellow-300/80 text-xs bg-yellow-500/10 rounded-xl px-3 py-2">⚠️ ここはアプリの心臓部です。値を変えると自動投稿が止まることがあります。初期設定のままで動きます。</p>
          <div>
            <label className="text-gray-400 text-xs font-semibold mb-1.5 block">Typefully APIキー（デフォルト）</label>
            <input type="password" value={form.typefullyApiKey} onChange={e => setForm(f => ({ ...f, typefullyApiKey: e.target.value }))} placeholder="ZR0Z..." className={inputMonoCls} />
            <p className="text-gray-700 text-xs mt-1">typefully.com → 設定 → API</p>
          </div>
          <div>
            <label className="text-gray-400 text-xs font-semibold mb-1.5 block">Supabase Project URL</label>
            <input value={form.supabaseUrl ?? ''} onChange={e => setForm(f => ({ ...f, supabaseUrl: e.target.value }))} placeholder="https://xxx.supabase.co" className={inputCls} />
          </div>
          <div>
            <label className="text-gray-400 text-xs font-semibold mb-1.5 block">Supabase anon key</label>
            <input type="password" value={form.supabaseKey ?? ''} onChange={e => setForm(f => ({ ...f, supabaseKey: e.target.value }))} placeholder="eyJ..." className={inputMonoCls} />
          </div>
          <button onClick={() => { saveSettings(form); setGlobalSaved(true); setTimeout(() => setGlobalSaved(false), 2000) }}
            className={`w-full py-3.5 rounded-2xl font-black text-sm transition-all ${globalSaved ? 'bg-green-500 text-white' : 'bg-sky-500 hover:bg-sky-400 text-white'}`}>
            <span className="flex items-center justify-center gap-2"><Save size={16} />{globalSaved ? '✅ 保存しました！' : '設定を保存する'}</span>
          </button>
        </div>
        )}
      </section>
    </div>
  )
}
