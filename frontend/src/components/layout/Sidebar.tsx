import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, Map, Smartphone, GraduationCap,
  BookMarked, Users, ChevronRight, Lock, CheckCircle2, Baby, Scale, Zap, Twitter,
} from 'lucide-react'
import { useUserStore } from '../../stores/userStore'
import { useProgressStore } from '../../stores/progressStore'
import { CURRICULUM } from '../../data/curriculum'
import { clsx } from 'clsx'

/** サイドバーナビゲーション */
export function Sidebar() {
  const { sidebarOpen } = useUserStore()
  const { levels } = useProgressStore()

  const mainNav = [
    { to: '/', icon: Home, label: 'ホーム' },
    { to: '/guide', icon: Baby, label: '🔰 初心者ガイド', highlight: true },
    { to: '/x-marketing', icon: Twitter, label: '🐦 X支援', highlight: false },
    { to: '/skills', icon: Zap, label: '⚡ SKILLライブラリ', highlight: false },
    { to: '/tools', icon: Scale, label: '⚖️ ツール比較', highlight: false },
    { to: '/roadmap', icon: Map, label: 'ロードマップ' },
    { to: '/sns-tools', icon: Smartphone, label: 'SNS活用' },
    { to: '/academy', icon: GraduationCap, label: 'Academy' },
    { to: '/prompts', icon: BookMarked, label: 'プロンプト集' },
    { to: '/community', icon: Users, label: 'コミュニティ' },
  ]

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 260, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="hidden md:flex flex-col bg-gray-900 border-r border-gray-800 overflow-hidden shrink-0"
        >
          <div className="flex-1 overflow-y-auto py-4 space-y-6">
            {/* メインナビ */}
            <nav className="px-3 space-y-1">
              {mainNav.map(({ to, icon: Icon, label, highlight }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-brand-500/20 text-brand-400'
                        : highlight
                          ? 'text-yellow-300 hover:text-yellow-100 hover:bg-yellow-500/10 border border-yellow-500/30'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800',
                    )
                  }
                >
                  <Icon size={18} />
                  <span>{label}</span>
                </NavLink>
              ))}
            </nav>

            {/* レベル一覧 */}
            <div className="px-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
                学習レベル
              </p>
              <div className="space-y-1">
                {CURRICULUM.map((level) => {
                  const progress = levels[level.id]
                  const isUnlocked = progress?.unlocked ?? level.id === 0
                  const completedLessons = Object.values(
                    progress?.lessonsProgress ?? {},
                  ).filter((l) => l.completed).length
                  const totalLessons = level.lessons.length
                  const pct = totalLessons > 0
                    ? Math.round((completedLessons / totalLessons) * 100)
                    : 0

                  return (
                    <NavLink
                      key={level.id}
                      to={isUnlocked ? `/level/${level.id}` : '#'}
                      className={({ isActive }) =>
                        clsx(
                          'flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors group',
                          !isUnlocked && 'opacity-40 cursor-not-allowed pointer-events-none',
                          isActive && isUnlocked
                            ? 'bg-gray-800 text-white'
                            : isUnlocked
                              ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                              : 'text-gray-600',
                        )
                      }
                    >
                      <span className="text-base">{level.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="truncate text-xs">Lv{level.id}: {level.name}</span>
                          {!isUnlocked ? (
                            <Lock size={12} className="text-gray-600 shrink-0" />
                          ) : pct === 100 ? (
                            <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                          ) : (
                            <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 shrink-0 transition-opacity" />
                          )}
                        </div>
                        {/* プログレスバー */}
                        {isUnlocked && pct > 0 && (
                          <div className="mt-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{
                                width: `${pct}%`,
                                backgroundColor: level.color,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </NavLink>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
