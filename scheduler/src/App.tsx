import { useState, useEffect, useRef } from 'react'
import { PenLine, CalendarDays, Settings2, BarChart3, ChevronDown, Check, Plus } from 'lucide-react'
import { CreateTab } from './components/CreateTab'
import { QueueTab } from './components/QueueTab'
import { SettingsTab } from './components/SettingsTab'
import { AnalyticsTab } from './components/AnalyticsTab'
import { Onboarding, hasOnboarded } from './components/Onboarding'
import { useAccounts } from './hooks/useAccounts'
import { loadAccounts, saveAccounts, setActive, type Account, ACCOUNTS_CHANGED } from './utils/accountStore'
import { loadScheduleAsync } from './utils/scheduleStore'

// 既存アカウントに不足している情報を自動補完
function patchKnownAccounts() {
  const accounts = loadAccounts()
  if (accounts.length === 0) return
  let changed = false
  const patched = accounts.map(acc => {
    // 令和の大殺界 → Typefully 310432（X+Threads両方 @reiwa_daisakkai）
    // ⚠️ APIキー等のシークレットはソースに書かない。鍵は「設定」タブから各自入力し、
    //    localStorage（将来的にはbackend経由）にのみ保持する。ここでは非機密のメタ情報だけ補完。
    if (acc.name === '令和の大殺界' || acc.typefullySocialSetId === '310432') {
      const patch = {
        ...acc,
        name: '令和の大殺界',
        handle: acc.handle || 'reiwa_daisakkai',
        handleThreads: acc.handleThreads || 'reiwa_daisakkai',
        platform: 'both' as const,
        profileImageUrl: acc.profileImageUrl || 'https://typefully-user-avatars.s3.amazonaws.com/_generic/account/310432/threads.jpeg',
        typefullySocialSetId: acc.typefullySocialSetId || '310432',
      }
      if (JSON.stringify(patch) !== JSON.stringify(acc)) changed = true
      return patch
    }
    // 佐々木 りむ（Typefully未接続・X/Threads別管理）
    if (acc.name === '佐々木 りむ') {
      const patch = { ...acc, typefullySocialSetId: '', typefullyApiKey: '' }
      if (JSON.stringify(patch) !== JSON.stringify(acc)) changed = true
      return patch
    }
    return acc
  })
  if (changed) {
    saveAccounts(patched)
    window.dispatchEvent(new CustomEvent(ACCOUNTS_CHANGED))
  }
}

type Tab = 'queue' | 'create' | 'analytics' | 'settings'

const PLATFORM_COLOR: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', purple: 'bg-purple-500',
  green: 'bg-green-500', orange: 'bg-orange-500',
}

function AccountMenu({ onAddNew }: { onAddNew: () => void }) {
  const { accounts, activeId, active } = useAccounts()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleSelect = (acc: Account) => { setActive(acc.id); setOpen(false) }

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 bg-gray-900 border border-gray-700 rounded-2xl px-3 py-2 hover:border-gray-500 transition-colors">
        {active ? (
          <>
            {active.profileImageUrl
              ? <img src={active.profileImageUrl} alt={active.name} className="w-7 h-7 rounded-full object-cover" />
              : <div className={`w-7 h-7 rounded-full ${PLATFORM_COLOR[active.color] ?? 'bg-sky-500'} flex items-center justify-center text-white text-xs font-black`}>{active.name[0]}</div>
            }
            <span className="text-white text-sm font-semibold max-w-[90px] truncate hidden sm:block">{active.name}</span>
          </>
        ) : (
          <span className="text-gray-400 text-sm">アカウント未設定</span>
        )}
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 z-50 w-60 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
          {accounts.length > 0 && (
            <div className="p-2 space-y-1">
              {accounts.map(acc => (
                <button key={acc.id} onClick={() => handleSelect(acc)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-800 transition-colors text-left">
                  {acc.profileImageUrl
                    ? <img src={acc.profileImageUrl} alt={acc.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                    : <div className={`w-9 h-9 rounded-full ${PLATFORM_COLOR[acc.color] ?? 'bg-sky-500'} flex items-center justify-center text-white font-black shrink-0`}>{acc.name[0]}</div>
                  }
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold truncate">{acc.name}</p>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      {acc.handle && (
                        <span className="text-sky-400 text-xs">𝕏 @{acc.handle}</span>
                      )}
                      {acc.handleThreads && (
                        <span className="text-purple-400 text-xs">🧵 @{acc.handleThreads}</span>
                      )}
                      {!acc.handle && !acc.handleThreads && (
                        <span className="text-gray-600 text-xs">ハンドル未設定</span>
                      )}
                    </div>
                  </div>
                  {acc.id === activeId && <Check size={16} className="text-sky-400 shrink-0" />}
                </button>
              ))}
            </div>
          )}
          <div className={`${accounts.length > 0 ? 'border-t border-gray-800' : ''} p-2`}>
            <button onClick={() => { setOpen(false); onAddNew() }}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-800 text-sky-400 text-sm font-semibold transition-colors">
              <Plus size={16} /> アカウントを追加
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export function App() {
  const [tab, setTab] = useState<Tab>('queue')
  const [scheduledCount, setScheduledCount] = useState(0)
  const [showOnboarding, setShowOnboarding] = useState(!hasOnboarded())

  useEffect(() => {
    patchKnownAccounts() // 起動時に既存アカウントの不足データを自動補完
    const update = () => { void loadScheduleAsync().then(posts => setScheduledCount(posts.filter(p => p.status === 'scheduled').length)) }
    update()
    const id = setInterval(update, 5000)
    return () => clearInterval(id)
  }, [])

  const goToSettings = () => setTab('settings')

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {showOnboarding && <Onboarding onDone={() => { setShowOnboarding(false); setTab('settings') }} />}
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-white font-black text-xl leading-none tracking-tight">投稿くん</h1>
            <p className="text-gray-500 text-xs mt-0.5">X · Threads 自動投稿</p>
          </div>
          <AccountMenu onAddNew={goToSettings} />
        </div>
      </header>

      {/* コンテンツ */}
      <main className="flex-1 pt-[72px] pb-20 max-w-xl mx-auto w-full">
        {tab === 'queue'     && <QueueTab onCreateNew={() => setTab('create')} />}
        {tab === 'create'    && <CreateTab onDone={() => setTab('queue')} />}
        {tab === 'analytics' && <AnalyticsTab />}
        {tab === 'settings'  && <SettingsTab />}
      </main>

      {/* ボトムナビ */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 safe-area-bottom">
        <div className="max-w-xl mx-auto flex">
          {([
            { id: 'queue',     icon: CalendarDays, label: '予約一覧', badge: scheduledCount },
            { id: 'create',    icon: PenLine,      label: '投稿を作る', badge: 0 },
            { id: 'analytics', icon: BarChart3,    label: '分析',      badge: 0 },
            { id: 'settings',  icon: Settings2,    label: '設定',      badge: 0 },
          ] as { id: Tab; icon: typeof CalendarDays; label: string; badge: number }[]).map(({ id, icon: Icon, label, badge }) => (
            <button key={id} onClick={() => setTab(id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 relative transition-colors ${tab === id ? 'text-sky-400' : 'text-gray-600 hover:text-gray-400'}`}>
              <div className="relative">
                <Icon size={24} strokeWidth={tab === id ? 2.5 : 1.8} />
                {badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-sky-500 text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center">
                    {badge > 9 ? '9+' : badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
