import { CheckCircle2 } from 'lucide-react'
import { clsx } from 'clsx'

export interface Step {
  number?: number
  title: string
  description: string
  emoji?: string
  code?: string       // ターミナルに入力するコマンド
  image?: string      // 画像URLがあれば
  tip?: string        // ポイント・注意事項
  done?: boolean      // 完了済みフラグ
}

interface StepGuideProps {
  steps: Step[]
  title?: string
}

/** ビジュアル・ステップガイド — 番号付きで手順をわかりやすく表示 */
export function StepGuide({ steps, title }: StepGuideProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          📋 {title}
        </h3>
      )}

      {steps.map((step, i) => (
        <div
          key={i}
          className={clsx(
            'flex gap-4 p-4 rounded-xl border transition-colors',
            step.done
              ? 'border-emerald-500/40 bg-emerald-500/5'
              : 'border-gray-700 bg-gray-900',
          )}
        >
          {/* ステップ番号サークル */}
          <div className="shrink-0 mt-0.5">
            {step.done ? (
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 size={18} className="text-emerald-400" />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center">
                <span className="text-brand-400 font-bold text-sm">{step.number ?? i + 1}</span>
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* タイトル */}
            <div className="flex items-center gap-2 mb-1">
              {step.emoji && <span className="text-lg">{step.emoji}</span>}
              <h4 className="font-bold text-white">{step.title}</h4>
            </div>

            {/* 説明 */}
            <p className="text-gray-300 text-sm leading-relaxed mb-2">{step.description}</p>

            {/* コマンドボックス */}
            {step.code && (
              <div className="mt-2 mb-2">
                <div className="text-xs text-gray-500 mb-1">⌨️ ターミナルに入力：</div>
                <div className="bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 font-mono text-sm text-green-300 flex items-center gap-2">
                  <span className="text-gray-600 select-none">$</span>
                  <span>{step.code}</span>
                </div>
              </div>
            )}

            {/* Tip */}
            {step.tip && (
              <div className="mt-2 flex gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-2">
                <span className="text-yellow-400 shrink-0">💡</span>
                <p className="text-yellow-200 text-xs leading-relaxed">{step.tip}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
