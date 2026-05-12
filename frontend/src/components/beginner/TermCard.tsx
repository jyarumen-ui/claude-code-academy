import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { type GlossaryTerm } from '../../data/glossary'

interface TermCardProps {
  term: GlossaryTerm
  compact?: boolean
}

/** 用語カード — 初心者向けに専門用語をわかりやすく説明 */
export function TermCard({ term, compact = false }: TermCardProps) {
  const [expanded, setExpanded] = useState(false)

  if (compact) {
    return (
      <div className="flex items-start gap-2 p-2 rounded-lg bg-gray-800/60 border border-gray-700/50">
        <span className="text-xl shrink-0">{term.emoji}</span>
        <div className="min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-bold text-white text-xs">{term.term}</span>
            <span className="text-gray-500 text-xs">（{term.reading}）</span>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed">{term.simple}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-800/50 transition-colors"
      >
        <span className="text-3xl shrink-0">{term.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap mb-1">
            <span className="font-bold text-white">{term.term}</span>
            <span className="text-gray-500 text-sm">（{term.reading}）</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">{term.simple}</p>
        </div>
        <div className="shrink-0 text-gray-500">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {expanded && term.detail && (
        <div className="px-4 pb-4 ml-12 border-t border-gray-800 pt-3">
          <p className="text-xs text-gray-400 leading-relaxed">
            📌 <span className="font-medium text-gray-300">もう少し詳しく：</span>
            {' '}{term.detail}
          </p>
        </div>
      )}
    </div>
  )
}
