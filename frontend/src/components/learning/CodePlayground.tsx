import { useState, useEffect, useRef } from 'react'
import { Copy, Check, ChevronLeft, ChevronRight, Code2 } from 'lucide-react'
import { type CodeExample } from '../../data/curriculum'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'
import { clsx } from 'clsx'

interface CodePlaygroundProps {
  examples: CodeExample[]
}

/** コードプレイグラウンド — 複数例をタブ切り替えで表示 */
export function CodePlayground({ examples }: CodePlaygroundProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const codeRef = useRef<HTMLElement>(null)

  const current = examples[activeIndex]

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current)
    }
  }, [activeIndex, current?.code])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(current.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!examples.length) return null

  return (
    <div className="rounded-xl border border-gray-800 overflow-hidden bg-gray-950">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-800 bg-gray-900">
        <div className="flex items-center gap-2">
          <Code2 size={14} className="text-brand-400" />
          {/* タブ */}
          <div className="flex gap-1">
            {examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={clsx(
                  'px-3 py-1 rounded text-xs font-medium transition-colors',
                  i === activeIndex
                    ? 'bg-brand-500/20 text-brand-400'
                    : 'text-gray-500 hover:text-gray-300',
                )}
              >
                {ex.title.length > 20 ? ex.title.slice(0, 20) + '…' : ex.title}
              </button>
            ))}
          </div>
        </div>

        {/* ナビ + コピー */}
        <div className="flex items-center gap-2">
          {examples.length > 1 && (
            <>
              <button
                onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                disabled={activeIndex === 0}
                className="p-1 rounded hover:bg-gray-700 disabled:opacity-30 text-gray-400"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => setActiveIndex((i) => Math.min(examples.length - 1, i + 1))}
                disabled={activeIndex === examples.length - 1}
                className="p-1 rounded hover:bg-gray-700 disabled:opacity-30 text-gray-400"
              >
                <ChevronRight size={14} />
              </button>
            </>
          )}
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            {copied ? 'コピー済み' : 'コピー'}
          </button>
        </div>
      </div>

      {/* コードブロック */}
      <div className="relative overflow-auto max-h-96">
        <pre className="p-4 text-sm leading-relaxed">
          <code
            ref={codeRef}
            className={`language-${current.language}`}
          >
            {current.code}
          </code>
        </pre>
      </div>

      {/* 解説 */}
      {current.explanation && (
        <div className="px-4 py-3 border-t border-gray-800 bg-gray-900/50">
          <p className="text-xs text-gray-400 leading-relaxed">
            💡 {current.explanation}
          </p>
        </div>
      )}
    </div>
  )
}
