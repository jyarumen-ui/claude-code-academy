import { Menu, X, Moon, Sun, BookOpen, Zap } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useUserStore } from '../../stores/userStore'
import { useProgressStore } from '../../stores/progressStore'

/** サイト上部ヘッダー */
export function Header() {
  const { theme, setTheme, toggleSidebar, sidebarOpen } = useUserStore()
  const { totalStudyMinutes, currentStreak } = useProgressStore()
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'ホーム' },
    { to: '/roadmap', label: 'ロードマップ' },
    { to: '/sns-tools', label: 'SNS活用' },
    { to: '/academy', label: 'Academy' },
    { to: '/prompts', label: 'プロンプト集' },
    { to: '/community', label: 'コミュニティ' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between h-14 px-4">
        {/* 左: ハンバーガー + ロゴ */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label={sidebarOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap size={14} className="text-white" />
            </div>
            <span className="font-bold text-white hidden sm:block">
              Claude Code <span className="text-brand-400">Academy</span>
            </span>
          </Link>
        </div>

        {/* 中央: ナビゲーション（デスクトップ） */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? 'bg-brand-500/20 text-brand-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 右: 統計 + テーマ切り替え */}
        <div className="flex items-center gap-3">
          {/* 学習統計（コンパクト） */}
          <div className="hidden md:flex items-center gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <BookOpen size={14} className="text-brand-400" />
              <span>{Math.round(totalStudyMinutes / 60)}h</span>
            </div>
            {currentStreak > 0 && (
              <div className="flex items-center gap-1">
                <span>🔥</span>
                <span>{currentStreak}日連続</span>
              </div>
            )}
          </div>

          {/* テーマ切り替え */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            aria-label="テーマ切り替え"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
