import { useState } from 'react'
import { Plus, Trash2, CheckCircle2, ChevronDown, ChevronUp, Save, Pencil, RefreshCw, Link } from 'lucide-react'
import {
  addAccount, updateAccount, deleteAccount,
  setActiveAccount,
  COLORS, type XAccount, type AccountPlatform
} from '../../utils/accountStore'
import { useAccounts } from '../../hooks/useAccounts'
import { loadPersona, savePersona } from '../../utils/personaStore'
import { loadKnowledge } from '../../utils/knowledgeStore'
import { loadSettings } from '../../utils/settingsStore'

const PLATFORM_LABELS: Record<AccountPlatform, string> = {
  x: 'X（Twitter）のみ',
  threads: 'Threadsのみ',
  both: 'X + Threads 両方',
}

const COLOR_CLS: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', green: 'bg-green-500',
  purple: 'bg-purple-500', orange: 'bg-orange-500',
}

const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500'

interface TfPlatformInfo { username: string; name: string; profile_image_url: string; profile_url: string }
interface TfSocialSet {
  id: number; username: string; name: string; profile_image_url: string
  platforms: { x: TfPlatformInfo | null; threads: TfPlatformInfo | null; linkedin: TfPlatformInfo | null; bluesky: TfPlatformInfo | null; mastodon: TfPlatformInfo | null }
  publishing_quota?: { used: number; remaining: number; resets_at: string }
}

type EditSection = 'basic' | 'xposts' | 'persona'

function Avatar({ acc, size = 'md' }: { acc: XAccount; size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-8 h-8 text-base' : 'w-10 h-10 text-lg'
  if (acc.profileImageUrl) {
    return <img src={acc.profileImageUrl} alt={acc.name} className={`${cls} rounded-full object-cover shrink-0`} />
  }
  return (
    <div className={`${cls} rounded-full ${COLOR_CLS[acc.color] ?? 'bg-sky-500'} flex items-center justify-center text-white font-black shrink-0`}>
      {acc.name.slice(0, 1)}
    </div>
  )
}

function AccountCard({ acc, isActive, onActivate, onDelete, onUpdate }: {
  acc: XAccount; isActive: boolean
  onActivate: () => void; onDelete: () => void; onUpdate: (patch: Partial<XAccount>) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [section, setSection] = useState<EditSection>('basic')
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState({
    name: acc.name, handle: acc.handle, handleThreads: acc.handleThreads ?? '',
    genre: acc.genre, concept: acc.concept, platform: acc.platform as AccountPlatform, color: acc.color,
    xPostsUrl: acc.xPostsUrl ?? '', xPostsContent: acc.xPostsContent ?? '',
  })
  const persona = loadPersona(acc.id)
  const [personaDraft, setPersonaDraft] = useState(persona)
  const knowledgeCount = loadKnowledge(acc.id).length

  const handleSaveBasic = () => { onUpdate({ ...draft }); setEditing(false) }
  const handleSavePersona = () => { savePersona(personaDraft, acc.id) }

  const hasXPosts = !!(acc.xPostsContent?.trim())
  const hasPersona = !!(persona.genre || persona.target)

  return (
    <div className={`rounded-2xl border transition-all ${isActive ? 'border-sky-400 bg-sky-500/5' : 'border-gray-700 bg-gray-900'}`}>
      <div className="flex items-center gap-3 p-4">
        <Avatar acc={acc} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-white font-bold text-sm">{acc.name}</p>
            {isActive && <span className="text-xs text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-full flex items-center gap-1"><CheckCircle2 size={10} />使用中</span>}
            {acc.typefullySocialSetId && <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full">🧵 Typefully連携</span>}
          </div>
          <p className="text-gray-400 text-xs mt-0.5">
            {acc.handle ? `@${acc.handle}` : ''}{acc.handleThreads ? `${acc.handle ? ' · ' : ''}@${acc.handleThreads}(Threads)` : ''}
          </p>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${hasXPosts ? 'text-green-400 bg-green-500/10' : 'text-gray-600 bg-gray-800'}`}>
              {hasXPosts ? '✓ 文体登録済' : '文体未登録'}
            </span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${hasPersona ? 'text-blue-400 bg-blue-500/10' : 'text-gray-600 bg-gray-800'}`}>
              {hasPersona ? '✓ ペルソナ設定済' : 'ペルソナ未設定'}
            </span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${knowledgeCount > 0 ? 'text-purple-400 bg-purple-500/10' : 'text-gray-600 bg-gray-800'}`}>
              {knowledgeCount > 0 ? `✓ 教材${knowledgeCount}件` : '教材なし'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {!isActive && (
            <button onClick={onActivate} className="text-xs text-sky-400 border border-sky-500/40 hover:border-sky-400 px-3 py-1.5 rounded-lg transition-colors">
              切替
            </button>
          )}
          <button onClick={() => setExpanded(v => !v)} className="text-gray-500 hover:text-white p-1.5 transition-colors">
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button onClick={onDelete} className="text-gray-600 hover:text-red-400 p-1.5 transition-colors">
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-800 p-4 space-y-4">
          <div className="flex gap-1 bg-gray-800 rounded-xl p-1">
            {([['basic', '基本情報'], ['xposts', 'X文体'], ['persona', 'ペルソナ']] as [EditSection, string][]).map(([s, label]) => (
              <button key={s} onClick={() => setSection(s)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${section === s ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>

          {section === 'basic' && (
            <div className="space-y-3">
              {editing ? (
                <>
                  <div><label className="text-xs text-gray-400 mb-1 block">表示名</label>
                    <input value={draft.name} onChange={e => setDraft(d => ({ ...d, name: e.target.value }))} className={inputCls} /></div>
                  <div><label className="text-xs text-gray-400 mb-1 block">投稿先</label>
                    <div className="flex gap-2">
                      {(Object.entries(PLATFORM_LABELS) as [AccountPlatform, string][]).map(([k, v]) => (
                        <button key={k} onClick={() => setDraft(d => ({ ...d, platform: k }))}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${draft.platform === k ? 'border-sky-500 bg-sky-500/20 text-white' : 'border-gray-700 text-gray-400'}`}>
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs text-gray-400 mb-1 block">Xハンドル</label>
                      <input value={draft.handle} onChange={e => setDraft(d => ({ ...d, handle: e.target.value.replace('@', '') }))} placeholder="x_handle" className={inputCls} /></div>
                    <div><label className="text-xs text-gray-400 mb-1 block">Threadsハンドル</label>
                      <input value={draft.handleThreads} onChange={e => setDraft(d => ({ ...d, handleThreads: e.target.value.replace('@', '') }))} placeholder="threads_handle" className={inputCls} /></div>
                  </div>
                  <div><label className="text-xs text-gray-400 mb-1 block">発信ジャンル</label>
                    <input value={draft.genre} onChange={e => setDraft(d => ({ ...d, genre: e.target.value }))} className={inputCls} /></div>
                  <div><label className="text-xs text-gray-400 mb-1 block">アカウントコンセプト</label>
                    <textarea value={draft.concept} onChange={e => setDraft(d => ({ ...d, concept: e.target.value }))} rows={2} className={`${inputCls} resize-none`} /></div>
                  <div><label className="text-xs text-gray-400 mb-1 block">カラー</label>
                    <div className="flex gap-2">
                      {COLORS.map(c => (
                        <button key={c.id} onClick={() => setDraft(d => ({ ...d, color: c.id }))}
                          className={`w-8 h-8 rounded-full ${c.cls} transition-transform ${draft.color === c.id ? 'ring-2 ring-white scale-110' : ''}`} />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={handleSaveBasic} className="flex items-center gap-1 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                      <Save size={14} /> 保存
                    </button>
                    <button onClick={() => setEditing(false)} className="px-4 py-2 border border-gray-700 text-gray-400 hover:text-white rounded-xl text-sm transition-colors">キャンセル</button>
                  </div>
                </>
              ) : (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div><span className="text-gray-500">ジャンル: </span><span className="text-gray-300">{acc.genre || '未設定'}</span></div>
                    <div><span className="text-gray-500">投稿先: </span><span className="text-gray-300">{PLATFORM_LABELS[acc.platform ?? 'both']}</span></div>
                  </div>
                  {acc.concept && <p className="text-gray-400 text-xs">💡 {acc.concept}</p>}
                  <button onClick={() => setEditing(true)} className="flex items-center gap-1 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                    <Pencil size={11} /> 編集
                  </button>
                </div>
              )}
            </div>
          )}

          {section === 'xposts' && (
            <div className="space-y-3">
              <p className="text-gray-400 text-xs">過去のXポストを貼り付けると、AIがその文体・絵文字・テンションを学習して投稿に反映します。</p>
              <div><label className="text-xs text-gray-400 mb-1 block">XプロフィールURL</label>
                <input value={draft.xPostsUrl} onChange={e => setDraft(d => ({ ...d, xPostsUrl: e.target.value }))} placeholder="https://x.com/your_handle" className={inputCls} /></div>
              <div><label className="text-xs text-gray-400 mb-1 block">過去のポスト（「---」で区切って複数貼る）</label>
                <textarea value={draft.xPostsContent} onChange={e => setDraft(d => ({ ...d, xPostsContent: e.target.value }))}
                  placeholder={"AIで作業を自動化したら月10時間浮きました✨\n---\n副業で稼ぎたいなら、まずこれを読んで👇"} rows={8} className={`${inputCls} resize-none`} /></div>
              <button onClick={() => onUpdate({ xPostsUrl: draft.xPostsUrl, xPostsContent: draft.xPostsContent })}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                <Save size={14} /> 文体を保存
              </button>
            </div>
          )}

          {section === 'persona' && (
            <div className="space-y-3">
              <p className="text-gray-400 text-xs">このアカウント専用のペルソナ設定。AI生成ポストに反映されます。</p>
              <div><label className="text-xs text-gray-400 mb-1 block">発信ジャンル *</label>
                <input value={personaDraft.genre} onChange={e => setPersonaDraft(p => ({ ...p, genre: e.target.value }))} placeholder="例：iPhone副業、AI自動化" className={inputCls} /></div>
              <div><label className="text-xs text-gray-400 mb-1 block">メインターゲット *</label>
                <input value={personaDraft.target} onChange={e => setPersonaDraft(p => ({ ...p, target: e.target.value }))} placeholder="例：副業初心者の会社員（30〜40代）" className={inputCls} /></div>
              <div><label className="text-xs text-gray-400 mb-1 block">自分の実績・強み *</label>
                <textarea value={personaDraft.strengths} onChange={e => setPersonaDraft(p => ({ ...p, strengths: e.target.value }))}
                  rows={3} placeholder="例：AI活用で月5万副業達成" className={`${inputCls} resize-none`} /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs text-gray-400 mb-1 block">口調・トーン</label>
                  <select value={personaDraft.tone} onChange={e => setPersonaDraft(p => ({ ...p, tone: e.target.value }))} className={inputCls}>
                    {['親しみやすい', '権威的・専門的', 'ストーリー型', 'カジュアル', 'フラット'].map(t => <option key={t}>{t}</option>)}
                  </select></div>
                <div><label className="text-xs text-gray-400 mb-1 block">目標</label>
                  <select value={personaDraft.goal} onChange={e => setPersonaDraft(p => ({ ...p, goal: e.target.value }))} className={inputCls}>
                    {['フォロワー獲得', '商品販売', 'LINE誘導', 'ブランディング', 'コミュニティ形成'].map(g => <option key={g}>{g}</option>)}
                  </select></div>
              </div>
              <button onClick={handleSavePersona} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
                <Save size={14} /> ペルソナを保存
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/** Typefully ソーシャルセット連携パネル */
function TypefullyImport({ onImported }: { onImported: () => void }) {
  const [sets, setSets] = useState<TfSocialSet[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'fail'>('idle')

  const handleFetch = async () => {
    const { typefullyApiKey } = loadSettings()
    if (!typefullyApiKey) return
    setStatus('loading')
    try {
      const res = await fetch('https://api.typefully.com/v2/social-sets', {
        headers: { 'Authorization': `Bearer ${typefullyApiKey}` }
      })
      if (!res.ok) throw new Error(`${res.status}`)
      const data = await res.json() as { results: TfSocialSet[] }
      setSets(data.results ?? [])
      setStatus('ok')
    } catch { setStatus('fail') }
  }

  const handleImport = (s: TfSocialSet) => {
    const hasX = !!s.platforms.x
    const hasThreads = !!s.platforms.threads
    const platform: AccountPlatform = hasX && hasThreads ? 'both' : hasX ? 'x' : 'threads'
    const profileImg = s.platforms.threads?.profile_image_url ?? s.platforms.x?.profile_image_url ?? s.profile_image_url
    addAccount({
      name: s.name,
      handle: s.platforms.x?.username ?? '',
      handleThreads: s.platforms.threads?.username ?? '',
      genre: '',
      concept: '',
      platform,
      color: 'sky',
      profileImageUrl: profileImg,
      typefullySocialSetId: String(s.id),
    })
    onImported()
  }

  const platformBadge = (s: TfSocialSet) => {
    const p = []
    if (s.platforms.x) p.push('X')
    if (s.platforms.threads) p.push('Threads')
    if (s.platforms.linkedin) p.push('LinkedIn')
    if (s.platforms.bluesky) p.push('Bluesky')
    return p.join(' · ') || '未連携'
  }

  return (
    <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link size={14} className="text-purple-400" />
          <p className="text-purple-200 font-bold text-sm">Typefully からアカウントを連携</p>
        </div>
        <button onClick={handleFetch} disabled={status === 'loading'}
          className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl transition-colors disabled:opacity-50 ${
            status === 'fail' ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-purple-600 hover:bg-purple-500 text-white'
          }`}>
          <RefreshCw size={12} className={status === 'loading' ? 'animate-spin' : ''} />
          {status === 'loading' ? '取得中...' : status === 'fail' ? '失敗・再試行' : 'アカウントを取得'}
        </button>
      </div>

      {sets.length > 0 && (
        <div className="space-y-2">
          {sets.map(s => (
            <div key={s.id} className="flex items-center gap-3 bg-gray-900 rounded-xl p-3">
              <img src={s.profile_image_url} alt={s.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-bold truncate">{s.name}</p>
                <p className="text-gray-500 text-xs">@{s.username}</p>
                <p className="text-purple-400/70 text-xs mt-0.5">{platformBadge(s)}</p>
                {s.publishing_quota && (
                  <p className="text-gray-600 text-xs">今月残り {s.publishing_quota.remaining} 件</p>
                )}
              </div>
              <button onClick={() => handleImport(s)}
                className="shrink-0 text-xs bg-sky-500 hover:bg-sky-400 text-white font-bold px-3 py-1.5 rounded-xl transition-colors">
                追加
              </button>
            </div>
          ))}
        </div>
      )}

      {status === 'idle' && sets.length === 0 && (
        <p className="text-gray-600 text-xs">「アカウントを取得」でTypefullyに連携済みのアカウントを一覧表示します</p>
      )}
    </div>
  )
}

/** 複数アカウント管理 */
export function AccountManager() {
  const { accounts, activeId } = useAccounts()
  const [adding, setAdding] = useState(false)
  const [form, setForm] = useState({
    name: '', handle: '', handleThreads: '', genre: '', concept: '',
    platform: 'both' as AccountPlatform, color: 'sky',
    xPostsUrl: '', xPostsContent: '',
  })

  const handleAdd = () => {
    if (!form.name.trim()) return
    addAccount({ ...form })
    setForm({ name: '', handle: '', handleThreads: '', genre: '', concept: '', platform: 'both', color: 'sky', xPostsUrl: '', xPostsContent: '' })
    setAdding(false)
  }

  const handleActivate = (id: string) => { setActiveAccount(id) }
  const handleDelete = (id: string) => { deleteAccount(id) }
  const handleUpdate = (id: string, patch: Partial<XAccount>) => { updateAccount(id, patch) }

  return (
    <div className="space-y-4 pb-4">
      <div className="rounded-2xl bg-sky-500/10 border border-sky-500/30 p-4">
        <p className="text-sky-200 font-bold text-sm mb-1">👥 複数アカウント管理</p>
        <p className="text-sky-300/70 text-xs">アカウントごとに文体・ペルソナ・教材を個別設定できます。「切替」で使用するアカウントを変更してください。</p>
      </div>

      {/* Typefully連携パネル */}
      <TypefullyImport onImported={() => {}} />

      {/* アカウント一覧 */}
      <div className="space-y-3">
        {accounts.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gray-700 p-8 text-center">
            <p className="text-gray-500 text-sm mb-2">アカウントが登録されていません</p>
            <p className="text-gray-600 text-xs">上の「Typefullyからアカウントを取得」か「アカウントを追加」から登録してください</p>
          </div>
        ) : accounts.map(acc => (
          <AccountCard key={acc.id} acc={acc} isActive={activeId === acc.id}
            onActivate={() => handleActivate(acc.id)}
            onDelete={() => handleDelete(acc.id)}
            onUpdate={(patch) => handleUpdate(acc.id, patch)}
          />
        ))}
      </div>

      {/* 手動追加フォーム */}
      {!adding ? (
        <button onClick={() => setAdding(true)}
          className="w-full flex items-center justify-center gap-2 border border-dashed border-gray-600 hover:border-sky-500 text-gray-400 hover:text-sky-400 py-3.5 rounded-2xl transition-colors text-sm font-semibold">
          <Plus size={16} /> アカウントを手動で追加
        </button>
      ) : (
        <div className="rounded-2xl bg-gray-900 border border-sky-500/30 p-5 space-y-4">
          <p className="text-white font-bold text-sm">✨ 新しいアカウントを追加</p>
          <div><label className="text-xs text-gray-400 mb-1 block">表示名 *</label>
            <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="メインアカウント" className={inputCls} /></div>
          <div><label className="text-xs text-gray-400 mb-2 block">投稿先プラットフォーム</label>
            <div className="flex gap-2">
              {(Object.entries(PLATFORM_LABELS) as [AccountPlatform, string][]).map(([k, v]) => (
                <button key={k} onClick={() => setForm(f => ({ ...f, platform: k }))}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${form.platform === k ? 'border-sky-500 bg-sky-500/20 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600'}`}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="text-xs text-gray-400 mb-1 block">Xハンドル（@なし）</label>
              <input value={form.handle} onChange={e => setForm(f => ({ ...f, handle: e.target.value.replace('@', '') }))} placeholder="x_handle" className={inputCls} /></div>
            <div><label className="text-xs text-gray-400 mb-1 block">Threadsハンドル（@なし）</label>
              <input value={form.handleThreads} onChange={e => setForm(f => ({ ...f, handleThreads: e.target.value.replace('@', '') }))} placeholder="threads_handle" className={inputCls} /></div>
          </div>
          <div><label className="text-xs text-gray-400 mb-1 block">発信ジャンル</label>
            <input value={form.genre} onChange={e => setForm(f => ({ ...f, genre: e.target.value }))} placeholder="副業・AI・Webライターなど" className={inputCls} /></div>
          <div><label className="text-xs text-gray-400 mb-1 block">カラー</label>
            <div className="flex gap-2">
              {COLORS.map(c => (
                <button key={c.id} onClick={() => setForm(f => ({ ...f, color: c.id }))}
                  className={`w-9 h-9 rounded-full ${c.cls} transition-transform ${form.color === c.id ? 'ring-2 ring-white scale-110' : ''}`} />
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={handleAdd} disabled={!form.name.trim()}
              className="flex-1 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white font-bold py-3 rounded-xl text-sm transition-colors">
              追加する
            </button>
            <button onClick={() => setAdding(false)} className="px-5 border border-gray-700 text-gray-400 hover:text-white rounded-xl text-sm transition-colors">
              キャンセル
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
