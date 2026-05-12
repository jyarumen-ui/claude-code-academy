import { motion } from 'framer-motion'
import { Trophy, Flame, Clock, BookOpen, Star } from 'lucide-react'
import { useProgressStore } from '../../stores/progressStore'
import { CURRICULUM } from '../../data/curriculum'

/** 学習進捗ダッシュボード */
export function ProgressTracker() {
  const { levels, badges, totalStudyMinutes, currentStreak } = useProgressStore()

  const totalLessons = CURRICULUM.reduce((acc, lv) => acc + lv.lessons.length, 0)
  const completedLessons = Object.values(levels).reduce(
    (acc, lv) =>
      acc + Object.values(lv.lessonsProgress).filter((l) => l.completed).length,
    0,
  )
  const overallPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  const stats = [
    {
      icon: BookOpen,
      label: '完了レッスン',
      value: `${completedLessons} / ${totalLessons}`,
      color: '#0ea5e9',
    },
    {
      icon: Clock,
      label: '学習時間',
      value: `${Math.round(totalStudyMinutes / 60)}h ${totalStudyMinutes % 60}m`,
      color: '#8b5cf6',
    },
    {
      icon: Flame,
      label: '連続学習',
      value: `${currentStreak}日`,
      color: '#f59e0b',
    },
    {
      icon: Star,
      label: 'バッジ獲得',
      value: `${badges.length}個`,
      color: '#10b981',
    },
  ]

  return (
    <div className="space-y-6">
      {/* 全体進捗 */}
      <div className="card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-white">全体進捗</h3>
          <span className="text-2xl font-bold text-brand-400">{overallPct}%</span>
        </div>
        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-500 to-purple-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallPct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          {completedLessons}レッスン完了 / 全{totalLessons}レッスン
        </p>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="card flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: `${color}20` }}
            >
              <Icon size={18} style={{ color }} />
            </div>
            <div>
              <p className="text-xs text-gray-500">{label}</p>
              <p className="font-bold text-white text-sm">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* レベル別進捗 */}
      <div className="card">
        <h3 className="font-bold text-white mb-4">レベル別進捗</h3>
        <div className="space-y-3">
          {CURRICULUM.map((level) => {
            const lv = levels[level.id]
            const isUnlocked = lv?.unlocked ?? level.id === 0
            const done = Object.values(lv?.lessonsProgress ?? {}).filter(
              (l) => l.completed,
            ).length
            const total = level.lessons.length
            const pct = total > 0 ? Math.round((done / total) * 100) : 0

            return (
              <div key={level.id} className="flex items-center gap-3">
                <span className="text-base w-6 text-center shrink-0">{level.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`truncate ${isUnlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                      Lv{level.id}: {level.name}
                    </span>
                    <span className={isUnlocked ? 'text-gray-400 ml-2 shrink-0' : 'text-gray-700 ml-2 shrink-0'}>
                      {isUnlocked ? `${done}/${total}` : '🔒'}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    {isUnlocked && (
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: level.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* バッジ */}
      {badges.length > 0 && (
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Trophy size={18} className="text-yellow-400" />
            <h3 className="font-bold text-white">獲得バッジ</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="flex flex-col items-center gap-1 p-3 rounded-lg bg-gray-800 border border-gray-700 hover:border-yellow-500/50 transition-colors"
                title={badge.description}
              >
                <span className="text-2xl">{badge.emoji}</span>
                <span className="text-xs text-gray-300 font-medium">{badge.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
