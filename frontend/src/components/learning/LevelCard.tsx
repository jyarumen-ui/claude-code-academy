import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, CheckCircle2, ChevronRight, Clock } from 'lucide-react'
import { type Level } from '../../data/curriculum'
import { useProgressStore } from '../../stores/progressStore'
import { clsx } from 'clsx'

interface LevelCardProps {
  level: Level
  index: number
}

/** ロードマップページのレベルカード */
export function LevelCard({ level, index }: LevelCardProps) {
  const { levels } = useProgressStore()
  const progress = levels[level.id]
  const isUnlocked = progress?.unlocked ?? level.id === 0

  const completedLessons = Object.values(progress?.lessonsProgress ?? {}).filter(
    (l) => l.completed,
  ).length
  const totalLessons = level.lessons.length
  const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  const isCompleted = pct === 100 && totalLessons > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.35 }}
    >
      <Link
        to={isUnlocked ? `/level/${level.id}` : '#'}
        className={clsx(
          'block rounded-xl border p-5 transition-all duration-300',
          isUnlocked
            ? 'border-gray-800 bg-gray-900 hover:border-opacity-50 hover:shadow-lg cursor-pointer'
            : 'border-gray-800 bg-gray-900/50 opacity-50 cursor-not-allowed pointer-events-none',
        )}
        style={
          isUnlocked
            ? { '--hover-color': level.color } as React.CSSProperties
            : undefined
        }
      >
        {/* ヘッダー */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: `${level.color}20` }}
            >
              {level.emoji}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-mono">Level {level.id}</p>
              <h3 className="font-bold text-white text-sm">{level.name}</h3>
            </div>
          </div>

          {!isUnlocked ? (
            <Lock size={16} className="text-gray-600 mt-1" />
          ) : isCompleted ? (
            <CheckCircle2 size={18} className="text-emerald-400 mt-1" />
          ) : (
            <ChevronRight size={18} className="text-gray-500 mt-1" />
          )}
        </div>

        {/* 説明 */}
        <p className="text-xs text-gray-400 leading-relaxed mb-3">{level.description}</p>

        {/* スキルタグ */}
        <div className="flex flex-wrap gap-1 mb-3">
          {level.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-400"
            >
              {skill}
            </span>
          ))}
          {level.skills.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500">
              +{level.skills.length - 3}
            </span>
          )}
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} />
            <span>約{level.estimatedHours}時間</span>
            <span className="mx-1">·</span>
            <span>{totalLessons}レッスン</span>
          </div>
          {isUnlocked && (
            <span className="text-xs font-medium" style={{ color: level.color }}>
              {pct}%
            </span>
          )}
        </div>

        {/* プログレスバー */}
        {isUnlocked && (
          <div className="mt-2 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: level.color }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.6, ease: 'easeOut' }}
            />
          </div>
        )}
      </Link>
    </motion.div>
  )
}
