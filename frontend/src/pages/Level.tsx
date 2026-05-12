import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Lock, CheckCircle2, Clock, BookOpen } from 'lucide-react'
import { CURRICULUM } from '../data/curriculum'
import { useProgressStore } from '../stores/progressStore'
import { clsx } from 'clsx'
// useNavigate は現在未使用（将来拡張用）

/** レベル詳細ページ — レッスン一覧を表示 */
export function Level() {
  const { id } = useParams<{ id: string }>()
  const levelId = Number(id)
  const { levels } = useProgressStore()

  const level = CURRICULUM.find((lv) => lv.id === levelId)
  const progress = levels[levelId]
  const isUnlocked = progress?.unlocked ?? levelId === 0

  if (!level) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <h1 className="text-2xl font-bold text-white mb-2">レベルが見つかりません</h1>
        <Link to="/roadmap" className="btn-primary mt-4 inline-flex">ロードマップへ</Link>
      </div>
    )
  }

  if (!isUnlocked) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <Lock size={40} className="mx-auto mb-4 text-gray-600" />
        <h1 className="text-2xl font-bold text-white mb-2">このレベルはロック中です</h1>
        <p className="text-gray-400 mb-6">前のレベルのレッスンを完了するとアンロックされます</p>
        <Link to="/roadmap" className="btn-primary inline-flex">ロードマップへ</Link>
      </div>
    )
  }

  const prevLevel = CURRICULUM.find((lv) => lv.id === levelId - 1)
  const nextLevel = CURRICULUM.find((lv) => lv.id === levelId + 1)

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ナビ */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/roadmap" className="hover:text-white transition-colors">ロードマップ</Link>
        <ChevronRight size={14} />
        <span className="text-white">Level {levelId}: {level.name}</span>
      </div>

      {/* レベルヘッダー */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-gray-800 p-6 mb-6 overflow-hidden relative"
        style={{ background: `linear-gradient(135deg, ${level.bgGradient.replace('from-', '').replace(' to-', ', ')})` }}
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl">{level.emoji}</div>
          <div className="flex-1">
            <p className="text-sm text-gray-400 font-mono mb-1">Level {level.id}</p>
            <h1 className="text-2xl font-bold text-white mb-2">{level.name}</h1>
            <p className="text-gray-400 text-sm mb-4">{level.description}</p>
            <div className="flex flex-wrap gap-2">
              {level.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge bg-black/20 text-gray-300 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="text-right text-sm text-gray-400 shrink-0">
            <div className="flex items-center gap-1 mb-1">
              <Clock size={13} />
              <span>約{level.estimatedHours}時間</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen size={13} />
              <span>{level.lessons.length}レッスン</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* レッスン一覧 */}
      <div className="space-y-3 mb-8">
        <h2 className="font-bold text-white text-lg mb-4">📚 レッスン一覧</h2>
        {level.lessons.map((lesson, i) => {
          const isCompleted = progress?.lessonsProgress[lesson.id]?.completed ?? false
          const diffMap = {
            beginner: { label: '初級', color: 'text-emerald-400' },
            intermediate: { label: '中級', color: 'text-blue-400' },
            advanced: { label: '上級', color: 'text-purple-400' },
            expert: { label: '最上級', color: 'text-rose-400' },
          }

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={`/level/${levelId}/lesson/${lesson.id}`}
                className={clsx(
                  'flex items-center gap-4 p-4 rounded-xl border transition-all group',
                  isCompleted
                    ? 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50'
                    : 'border-gray-800 bg-gray-900 hover:border-gray-600',
                )}
              >
                {/* 番号 / チェック */}
                <div className={clsx(
                  'w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold',
                  isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-800 text-gray-400',
                )}>
                  {isCompleted ? <CheckCircle2 size={18} className="text-emerald-400" /> : i + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className={`text-xs font-medium ${diffMap[lesson.difficulty].color}`}>
                      {diffMap[lesson.difficulty].label}
                    </span>
                    <span className="text-xs text-gray-600">·</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={11} />{lesson.duration}分
                    </span>
                    {lesson.quiz && (
                      <>
                        <span className="text-xs text-gray-600">·</span>
                        <span className="text-xs text-purple-400">クイズあり</span>
                      </>
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-gray-400 truncate">{lesson.description}</p>
                </div>

                <ChevronRight size={16} className="text-gray-600 group-hover:text-brand-400 shrink-0 transition-colors" />
              </Link>
            </motion.div>
          )
        })}
      </div>

      {/* 前後レベルナビ */}
      <div className="flex justify-between gap-4">
        {prevLevel ? (
          <Link to={`/level/${prevLevel.id}`} className="btn-secondary flex items-center gap-2">
            <ChevronLeft size={16} />
            {prevLevel.emoji} Level {prevLevel.id}
          </Link>
        ) : <div />}
        {nextLevel && (levels[nextLevel.id]?.unlocked) ? (
          <Link to={`/level/${nextLevel.id}`} className="btn-primary flex items-center gap-2">
            Level {nextLevel.id} {nextLevel.emoji}
            <ChevronRight size={16} />
          </Link>
        ) : null}
      </div>
    </div>
  )
}
