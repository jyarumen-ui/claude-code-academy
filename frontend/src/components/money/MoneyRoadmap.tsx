import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { MONEY_PHASES } from '../../data/snsMoneyData'
import { clsx } from 'clsx'

/** 稼ぐまでのロードマップ — フェーズ別に収益化の道筋を可視化 */
export function MoneyRoadmap() {
  const [expanded, setExpanded] = useState<number>(0)

  return (
    <div className="space-y-4">
      {/* 全体の流れ サマリー */}
      <div className="grid grid-cols-5 gap-1 mb-6 overflow-x-auto">
        {MONEY_PHASES.map((phase, i) => (
          <button
            key={phase.phase}
            onClick={() => setExpanded(i)}
            className={clsx(
              'flex flex-col items-center gap-1 py-3 px-2 rounded-xl border transition-all text-center',
              expanded === i ? 'border-opacity-100 scale-105' : 'border-gray-700 bg-gray-900 opacity-70 hover:opacity-100',
            )}
            style={expanded === i ? { borderColor: phase.color, background: phase.color + '15' } : {}}
          >
            <span className="text-2xl">{phase.emoji}</span>
            <span className="text-xs font-bold text-white leading-tight">{phase.period}</span>
            <span className="text-xs font-bold" style={{ color: phase.color }}>{phase.income}</span>
          </button>
        ))}
      </div>

      {/* 接続線 */}
      <div className="relative -mt-8 mb-2 flex justify-between px-[10%] pointer-events-none">
        {[0,1,2,3].map(i => (
          <div key={i} className="h-px flex-1 bg-gradient-to-r from-gray-600 to-gray-600 mx-2 mt-4" />
        ))}
      </div>

      {/* 選択中フェーズの詳細 */}
      {MONEY_PHASES.map((phase, i) => (
        <div
          key={phase.phase}
          className={clsx('rounded-2xl border overflow-hidden transition-all', expanded === i ? 'border-opacity-100' : 'hidden')}
          style={{ borderColor: phase.color + '60' }}
        >
          {/* ヘッダー */}
          <div className="p-5" style={{ background: `linear-gradient(135deg, ${phase.color}20, ${phase.color}08)` }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{phase.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ background: phase.color + '30', color: phase.color }}>
                      Phase {phase.phase}
                    </span>
                    <span className="text-gray-400 text-xs">{phase.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">目標：{phase.goal}</p>
                </div>
              </div>
              {/* 収益バッジ */}
              <div className="shrink-0 text-center rounded-xl border p-3" style={{ borderColor: phase.color + '50', background: phase.color + '15' }}>
                <div className="text-xs text-gray-400 mb-0.5">想定月収</div>
                <div className="text-lg font-bold" style={{ color: phase.color }}>{phase.income}</div>
              </div>
            </div>
          </div>

          {/* タスクリスト */}
          <div className="p-5 space-y-3">
            <h4 className="font-bold text-white text-sm mb-3">📋 やること：</h4>
            {phase.tasks.map((task, j) => (
              <div key={j} className="flex items-start gap-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5"
                  style={{ background: phase.color + '25', color: phase.color }}>{j + 1}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-200 leading-relaxed">{task.text}</p>
                  {task.tip && (
                    <p className="text-xs text-yellow-300/80 mt-1 flex items-start gap-1">
                      <span className="shrink-0">💡</span>{task.tip}
                    </p>
                  )}
                </div>
                {task.url && (
                  <a href={task.url} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors"
                    style={{ color: phase.color, background: phase.color + '15' }}
                  >
                    <ExternalLink size={11} />開く
                  </a>
                )}
              </div>
            ))}

            {/* マイルストーン */}
            <div className="mt-4 p-3 rounded-xl" style={{ background: phase.color + '15', borderLeft: `3px solid ${phase.color}` }}>
              <p className="text-sm font-semibold" style={{ color: phase.color }}>
                🏁 このフェーズの達成ゴール
              </p>
              <p className="text-gray-300 text-sm mt-0.5">{phase.milestone}</p>
            </div>
          </div>

          {/* ナビ */}
          <div className="flex justify-between px-5 pb-4 gap-3">
            {i > 0 && (
              <button onClick={() => setExpanded(i - 1)} className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                ← 前のフェーズ
              </button>
            )}
            <div className="flex-1" />
            {i < MONEY_PHASES.length - 1 && (
              <button onClick={() => setExpanded(i + 1)}
                className="text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                style={{ background: phase.color + '25', color: phase.color }}>
                次のフェーズへ →
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
