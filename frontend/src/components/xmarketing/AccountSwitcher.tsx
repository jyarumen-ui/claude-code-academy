import { useState } from 'react'
import { Plus, ChevronDown, Check } from 'lucide-react'
import { setActiveAccount, COLORS, type XAccount } from '../../utils/accountStore'
import { useAccounts } from '../../hooks/useAccounts'

const COLOR_CLS: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', green: 'bg-green-500',
  purple: 'bg-purple-500', orange: 'bg-orange-500',
}

interface Props {
  onSwitch: () => void        // アカウント切替後に呼ぶ（refreshKey更新）
  onAddNew: () => void        // アカウント追加画面へ遷移
}

export function AccountSwitcher({ onSwitch, onAddNew }: Props) {
  const [open, setOpen] = useState(false)
  const { accounts, activeId } = useAccounts()
  const active = accounts.find(a => a.id === activeId) ?? accounts[0]

  const handleSelect = (acc: XAccount) => {
    setActiveAccount(acc.id)
    setOpen(false)
    onSwitch()
  }

  const colorCls = (color: string) => COLOR_CLS[color] ?? 'bg-sky-500'

  if (accounts.length === 0) {
    return (
      <button
        onClick={onAddNew}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-dashed border-gray-600 hover:border-sky-500 text-gray-400 hover:text-sky-400 text-xs font-semibold transition-colors"
      >
        <Plus size={14} />
        アカウントを追加
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-700 hover:border-gray-500 transition-colors"
      >
        {active ? (
          <>
            {active.profileImageUrl
              ? <img src={active.profileImageUrl} alt={active.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
              : <div className={`w-5 h-5 rounded-full ${colorCls(active.color)} flex items-center justify-center text-white text-xs font-black shrink-0`}>{active.name.slice(0, 1)}</div>
            }
            <span className="text-white text-xs font-semibold max-w-[80px] truncate">{active.name}</span>
          </>
        ) : (
          <span className="text-gray-400 text-xs">アカウント未選択</span>
        )}
        <ChevronDown size={12} className={`text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          {/* バックドロップ */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          {/* ドロップダウン */}
          <div className="absolute left-0 top-full mt-2 z-50 w-56 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            <p className="text-gray-500 text-xs font-semibold px-3 pt-3 pb-1">アカウント切替</p>
            <div className="max-h-60 overflow-y-auto">
              {accounts.map(acc => (
                <button
                  key={acc.id}
                  onClick={() => handleSelect(acc)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-gray-800 transition-colors text-left"
                >
                  {acc.profileImageUrl
                    ? <img src={acc.profileImageUrl} alt={acc.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                    : <div className={`w-8 h-8 rounded-full ${colorCls(acc.color)} flex items-center justify-center text-white text-sm font-black shrink-0`}>{acc.name.slice(0, 1)}</div>
                  }
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-bold truncate">{acc.name}</p>
                    <p className="text-gray-500 text-xs truncate">
                      {acc.handle ? `@${acc.handle}` : acc.handleThreads ? `@${acc.handleThreads}` : ''}
                    </p>
                  </div>
                  {acc.id === activeId && <Check size={14} className="text-sky-400 shrink-0" />}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-800 p-2">
              <button
                onClick={() => { setOpen(false); onAddNew() }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-gray-800 text-sky-400 text-xs font-semibold transition-colors"
              >
                <Plus size={14} />
                アカウントを追加
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// アカウントカラークラス取得ユーティリティ
export function getColorCls(color: string): string {
  return COLORS.find(c => c.id === color)?.cls ?? 'bg-sky-500'
}
