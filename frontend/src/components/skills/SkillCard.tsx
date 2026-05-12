import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import { type Skill, SKILL_CATEGORIES } from '../../data/skillsData'

interface SkillCardProps {
  skill: Skill
  onClick?: () => void
}

const DIFFICULTY_COLOR: Record<string, string> = {
  'かんたん': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'ふつう':   'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'むずかしい': 'bg-red-500/20 text-red-400 border-red-500/30',
}

const DIFFICULTY_DOT: Record<string, string> = {
  'かんたん': '●○○',
  'ふつう':   '●●○',
  'むずかしい': '●●●',
}

export function SkillCard({ skill, onClick }: SkillCardProps) {
  const [copied, setCopied] = useState(false)
  const catDef = SKILL_CATEGORIES.find(c => c.id === skill.category)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(skill.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <div
      onClick={onClick}
      className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-600 hover:bg-gray-800/80 transition-all cursor-pointer overflow-hidden"
    >
      {/* カードヘッダー */}
      <div
        className="flex items-start gap-3 p-4"
        style={{ borderBottom: `2px solid ${catDef?.color}22` }}
      >
        <div
          className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow"
          style={{ background: `${catDef?.color}22` }}
        >
          {skill.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-bold text-sm leading-tight group-hover:text-brand-300 transition-colors">
              {skill.name}
            </h3>
            {/* タイプバッジ */}
            <span className={`shrink-0 text-xs px-1.5 py-0.5 rounded font-mono ${skill.type === 'slash' ? 'bg-brand-500/20 text-brand-400' : 'bg-purple-500/20 text-purple-400'}`}>
              {skill.type === 'slash' ? '/コマンド' : 'プロンプト'}
            </span>
          </div>
          <p className="text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2">{skill.description}</p>
        </div>
      </div>

      {/* ターミナルモックアップ */}
      <div className="mx-4 mt-3 rounded-xl overflow-hidden border border-gray-700 flex-1">
        {/* タイトルバー */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800 border-b border-gray-700">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <Terminal size={10} className="text-gray-500 ml-1" />
          <span className="text-gray-500 text-xs ml-0.5">Claude Code</span>
        </div>
        {/* ターミナル本体 */}
        <div className="bg-gray-950 px-3 py-2.5">
          {/* プロンプト入力行 */}
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 font-mono text-xs shrink-0 mt-0.5">❯</span>
            <code className="text-brand-300 font-mono text-xs leading-relaxed break-all">
              {skill.prompt.length > 80 ? skill.prompt.slice(0, 80) + '…' : skill.prompt}
            </code>
          </div>
          {/* 出力例 */}
          <div className="mt-2 pl-4 border-l-2 border-gray-700">
            <p className="text-gray-400 font-mono text-xs leading-relaxed line-clamp-2 whitespace-pre-line">
              {skill.output.split('\n').slice(0, 2).join('\n')}
            </p>
          </div>
        </div>
      </div>

      {/* カードフッター */}
      <div className="flex items-center justify-between px-4 py-3 mt-2">
        {/* 難易度 */}
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${DIFFICULTY_COLOR[skill.difficulty]}`}>
            {DIFFICULTY_DOT[skill.difficulty]} {skill.difficulty}
          </span>
        </div>

        {/* コピーボタン */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
            copied
              ? 'bg-emerald-500/20 text-emerald-400'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? 'コピー済み！' : 'コピー'}
        </button>
      </div>
    </div>
  )
}
