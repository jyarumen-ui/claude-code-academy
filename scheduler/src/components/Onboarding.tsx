import { useState } from 'react'
import { ChevronRight, Check } from 'lucide-react'

const SEEN_KEY = 'toukokun_onboarded'

export function hasOnboarded(): boolean {
  return localStorage.getItem(SEEN_KEY) === '1'
}
export function markOnboarded(): void {
  localStorage.setItem(SEEN_KEY, '1')
}

const STEPS = [
  { emoji: '👋', title: 'ようこそ', body: 'X と Threads の投稿を、まとめて予約・自動投稿できるアプリです。スマホだけで運用できます。' },
  { emoji: '🔑', title: 'アカウントを接続', body: '「設定」タブで Typefully と連携すると、X/Threads に自動予約できます。鍵は端末内に保存されます。' },
  { emoji: '✍️', title: '投稿を作る', body: '「投稿を作る」でテーマを入れAI生成→日時を選んで予約。下書き保存や複製もできます。' },
]

export function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0)
  const last = step === STEPS.length - 1
  const s = STEPS[step]

  const finish = () => { markOnboarded(); onDone() }

  return (
    <div className="fixed inset-0 z-[70] bg-gray-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-sm w-full space-y-6">
        <div className="text-6xl">{s.emoji}</div>
        <h2 className="text-white text-2xl font-black">{s.title}</h2>
        <p className="text-gray-400 leading-relaxed">{s.body}</p>

        <div className="flex justify-center gap-2 pt-2">
          {STEPS.map((_, i) => (
            <span key={i} className={`h-2 rounded-full transition-all ${i === step ? 'w-6 bg-sky-400' : 'w-2 bg-gray-700'}`} />
          ))}
        </div>

        <div className="space-y-2 pt-2">
          <button onClick={() => last ? finish() : setStep(step + 1)}
            className="w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-black flex items-center justify-center gap-2 transition-colors">
            {last ? <><Check size={18} />はじめる</> : <>次へ<ChevronRight size={18} /></>}
          </button>
          {!last && (
            <button onClick={finish} className="w-full py-2 text-gray-500 hover:text-white text-sm font-semibold transition-colors">
              スキップ
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
