import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown } from 'lucide-react'
import { ChatBot } from './ChatBot'

/**
 * 全ページ右下に表示するフローティングチャットウィジェット
 * 初心者に優しい：吹き出し案内 + 大きなボタン + かわいいロボットアイコン
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // 3秒後に吹き出しヒントを表示（初回のみ）
  useEffect(() => {
    const shown = sessionStorage.getItem('chatHintShown')
    if (!shown) {
      const t = setTimeout(() => {
        setShowHint(true)
        sessionStorage.setItem('chatHintShown', '1')
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [])

  // パネルを開いたら吹き出しを消す
  const handleOpen = () => {
    setOpen(true)
    setShowHint(false)
  }

  return (
    <>
      {/* ── チャットパネル ─────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-24 right-4 z-50 flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ width: 'min(380px, calc(100vw - 2rem))', height: 'min(600px, calc(100vh - 8rem))' }}
          >
            {/* グラデーションボーダー */}
            <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-brand-500/50 to-gray-700/50 pointer-events-none z-10" />

            {/* パネル本体 */}
            <div className="relative flex flex-col h-full rounded-2xl bg-gray-900 overflow-hidden">
              {/* ヘッダー */}
              <div className="shrink-0 flex items-center gap-3 px-4 py-3.5 bg-gradient-to-r from-brand-600/30 to-purple-600/20 border-b border-gray-800">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-xl shadow-lg">
                    🤖
                  </div>
                  {/* オンラインバッジ */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-gray-900" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-sm">なんでも聞いてね！</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-emerald-400 text-xs">いつでも答えるよ</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* チャット本体 */}
              <div className="flex-1 overflow-hidden">
                <ChatBot />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 吹き出しヒント ─────────────────────────── */}
      <AnimatePresence>
        {showHint && !open && (
          <motion.div
            initial={{ opacity: 0, x: 16, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 16, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-20 z-50"
          >
            <div className="relative bg-white text-gray-800 rounded-2xl rounded-br-sm px-4 py-3 shadow-xl max-w-[200px]">
              <button
                onClick={() => setShowHint(false)}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-gray-600 transition-colors"
              >
                <X size={10} />
              </button>
              <p className="text-xs font-bold mb-0.5">👋 こんにちは！</p>
              <p className="text-xs text-gray-600 leading-relaxed">
                わからないことは<br />
                <strong className="text-brand-600">なんでも聞いてね！</strong>
              </p>
              {/* 吹き出しの尻尾 */}
              <div className="absolute -right-2 bottom-3 w-4 h-4 overflow-hidden">
                <div className="absolute top-0 left-0 w-4 h-4 bg-white rotate-45 translate-x-2" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── フローティングボタン ──────────────────── */}
      <div className="fixed bottom-6 right-4 z-50">
        {/* 脈動リング */}
        {!open && (
          <div className="absolute inset-0 rounded-full bg-brand-500/30 animate-ping" />
        )}
        <motion.button
          onClick={open ? () => setOpen(false) : handleOpen}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-16 h-16 rounded-full shadow-2xl flex flex-col items-center justify-center gap-0.5 transition-colors"
          style={{
            background: open
              ? 'linear-gradient(135deg, #6b7280, #4b5563)'
              : 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
          }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div key="close"
                initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <X size={24} className="text-white" />
              </motion.div>
            ) : (
              <motion.div key="open" className="flex flex-col items-center gap-0.5"
                initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.15 }}>
                <span className="text-2xl leading-none">🤖</span>
                <span className="text-white text-xs font-bold leading-none" style={{ fontSize: 9 }}>質問する</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  )
}
