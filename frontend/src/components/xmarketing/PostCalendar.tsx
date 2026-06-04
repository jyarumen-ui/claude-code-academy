import { useState } from 'react'
import { Sparkles, Loader2, CalendarDays } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { getActiveAccountId } from '../../utils/accountStore'
import { addSchedule } from '../../utils/scheduleStore'

type Slot = 'morning' | 'noon' | 'night'
const SLOT_LABEL: Record<Slot, string> = { morning: '朝 7時', noon: '昼 12時', night: '夜 21時' }
const SLOT_HOUR: Record<Slot, number> = { morning: 7, noon: 12, night: 21 }

interface DayPlan { date: string; morning: string; noon: string; night: string }

interface Props { onNavigateToSchedule?: () => void }

/** サブ機能⑩：発信カレンダー */
export function PostCalendar({ onNavigateToSchedule }: Props) {
  const [plans, setPlans] = useState<DayPlan[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [scheduled, setScheduled] = useState<string[]>([])

  const getWeekDates = () => Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i); return d.toISOString().split('T')[0]
  })

  const handleGenerate = async () => {
    setLoading(true); setError(''); setPlans([])
    try {
      const persona = personaToPrompt(loadPersona(getActiveAccountId()))
      const dates = getWeekDates()
      const system = `あなたはXマーケティングの専門家です。${persona ? `\n${persona}` : ''}\n\n7日間の発信テーマ計画を作成してください。朝・昼・夜の3投稿を各日提案。\n必ず以下のJSON配列で返してください:\n[{"date":"YYYY-MM-DD","morning":"テーマ","noon":"テーマ","night":"テーマ"}]`
      const raw = await callClaude({ system, userMessage: `${dates[0]}〜${dates[6]}の7日間の発信テーマを計画してください。バリエーションを持たせて、認知→興味→行動の流れを意識して。`, maxTokens: 2000 })
      const match = raw.match(/\[[\s\S]*\]/)
      if (!match) throw new Error('生成に失敗しました')
      const result = JSON.parse(match[0]) as DayPlan[]
      setPlans(result.map((p, i) => ({ ...p, date: dates[i] ?? p.date })))
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleSchedule = (plan: DayPlan, slot: Slot) => {
    const key = `${plan.date}-${slot}`
    if (scheduled.includes(key)) return
    const d = new Date(`${plan.date}T${String(SLOT_HOUR[slot]).padStart(2, '0')}:00:00+09:00`)
    addSchedule({ text: plan[slot], platform: 'x', scheduledAt: d.toISOString() })
    setScheduled(s => [...s, key])
  }

  const dayLabel = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', weekday: 'short' })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays size={20} className="text-brand-400" />
          <h3 className="text-white font-bold">今週の発信カレンダー</h3>
        </div>
        <button onClick={handleGenerate} disabled={loading} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
          {loading ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
          {loading ? 'AI生成中...' : 'AIに7日分提案してもらう'}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}

      {plans.length === 0 && !loading && (
        <div className="text-center py-12 text-gray-600">
          <CalendarDays size={40} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">「AIに7日分提案してもらう」ボタンを押すと発信計画が生成されます</p>
        </div>
      )}

      {plans.length > 0 && (
        <>
          <div className="space-y-3">
            {plans.map(plan => (
              <div key={plan.date} className="rounded-2xl bg-gray-900 border border-gray-800 p-4">
                <p className="text-white font-bold text-sm mb-3">{dayLabel(plan.date)}</p>
                <div className="space-y-2">
                  {(['morning', 'noon', 'night'] as Slot[]).map(slot => {
                    const key = `${plan.date}-${slot}`
                    const done = scheduled.includes(key)
                    return (
                      <div key={slot} className="flex items-start gap-3 bg-gray-800 rounded-xl p-3">
                        <span className="text-gray-500 text-xs w-14 shrink-0 pt-0.5">{SLOT_LABEL[slot]}</span>
                        <p className="text-gray-200 text-sm flex-1 leading-relaxed">{plan[slot]}</p>
                        <button
                          onClick={() => handleSchedule(plan, slot)}
                          disabled={done}
                          className={`text-xs rounded-lg px-3 py-1 shrink-0 border transition-colors ${done ? 'text-green-400 border-green-500/40 cursor-default' : 'text-brand-400 border-brand-500/40 hover:border-brand-400'}`}
                        >
                          {done ? '✓予約済' : '予約'}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          {onNavigateToSchedule && (
            <button onClick={onNavigateToSchedule} className="w-full py-3 rounded-xl border border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white text-sm transition-colors">
              予約管理画面を開く →
            </button>
          )}
        </>
      )}
    </div>
  )
}
