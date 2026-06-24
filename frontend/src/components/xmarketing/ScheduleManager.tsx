import { useState, useCallback } from 'react'
import { CalendarDays, ListTodo, PlusCircle } from 'lucide-react'
import { loadSchedule } from '../../utils/scheduleStore'
import { ScheduleQueue } from './ScheduleQueue'
import { ScheduleCompose } from './ScheduleCompose'

type Tab = 'queue' | 'add'

interface Props { initialText?: string }

export function ScheduleManager({ initialText = '' }: Props) {
  const [tab, setTab] = useState<Tab>(initialText ? 'add' : 'queue')
  const [transferredText, setTransferredText] = useState(initialText)
  const [count, setCount] = useState(() => loadSchedule().filter(p => p.status === 'scheduled').length)

  const refresh = useCallback(() => {
    setCount(loadSchedule().filter(p => p.status === 'scheduled').length)
  }, [])

  const handleAdded = () => { refresh(); setTab('queue') }
  const handleConsumeText = () => setTransferredText('')

  const tabs = [
    { id: 'queue' as Tab, icon: ListTodo, label: `キュー`, badge: count > 0 ? count : undefined },
    { id: 'add'   as Tab, icon: PlusCircle, label: '追加' },
  ]

  return (
    <div className="space-y-4">
      {/* ヘッダー */}
      <div className="flex items-center gap-3">
        <CalendarDays size={20} className="text-sky-400" />
        <div>
          <h2 className="text-white font-bold">予約投稿管理</h2>
          <p className="text-gray-400 text-xs">X・Threads に同時予約・複数アカウント対応</p>
        </div>
      </div>

      {/* タブ */}
      <div className="flex gap-2 bg-gray-900 rounded-2xl p-1 border border-gray-800">
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-colors ${tab === t.id ? 'bg-sky-500 text-white' : 'text-gray-400 hover:text-white'}`}>
            <t.icon size={15} />
            {t.label}
            {t.badge != null && (
              <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full leading-none">{t.badge}</span>
            )}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      {tab === 'queue' && (
        <ScheduleQueue
          initialText={transferredText}
          onConsumeText={handleConsumeText}
        />
      )}
      {tab === 'add' && (
        <ScheduleCompose
          initialText={transferredText}
          onAdded={handleAdded}
        />
      )}

      {/* 使い方 */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 text-xs text-gray-500 space-y-1">
        <p className="text-gray-400 font-semibold">📌 使い方</p>
        <p>① 追加タブ → アカウント選択 → テキスト入力 → 日時選択 → 予約</p>
        <p>② 最適時刻ボタンで「朝8時・昼12時・夕18時・夜21時」を即セット</p>
        <p>③ 複数アカウント選択で同時予約（各アカウント個別に登録）</p>
        <p>④ 時刻になったら通知 → 1タップでX+Threads同時投稿</p>
      </div>
    </div>
  )
}
