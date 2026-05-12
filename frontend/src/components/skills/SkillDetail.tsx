import { useState } from 'react'
import { X, Copy, Check, Terminal, Tag } from 'lucide-react'
import { type Skill, SKILL_CATEGORIES } from '../../data/skillsData'

interface SkillDetailProps {
  skill: Skill
  onClose: () => void
}

const DIFFICULTY_COLOR: Record<string, string> = {
  'かんたん': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'ふつう':   'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'むずかしい': 'bg-red-500/20 text-red-400 border-red-500/30',
}

/** スキル詳細モーダル */
export function SkillDetail({ skill, onClose }: SkillDetailProps) {
  const [copied, setCopied] = useState(false)
  const catDef = SKILL_CATEGORIES.find(c => c.id === skill.category)

  const handleCopy = () => {
    navigator.clipboard.writeText(skill.prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div
          className="flex items-center gap-4 px-6 py-5"
          style={{ background: `linear-gradient(135deg, ${catDef?.color}22, transparent)` }}
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg shrink-0"
            style={{ background: `${catDef?.color}33` }}
          >
            {skill.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-white font-bold text-lg">{skill.name}</h2>
              <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${DIFFICULTY_COLOR[skill.difficulty]}`}>
                {skill.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-400">{catDef?.emoji} {catDef?.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${skill.type === 'slash' ? 'bg-brand-500/20 text-brand-400' : 'bg-purple-500/20 text-purple-400'}`}>
                {skill.type === 'slash' ? '/コマンド' : 'プロンプト'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* 説明 */}
          <div>
            <p className="text-xs text-gray-500 font-medium mb-1.5">📖 どんなスキル？</p>
            <p className="text-gray-200 text-sm leading-relaxed">{skill.description}</p>
          </div>

          {/* 入力するもの */}
          <div>
            <p className="text-xs text-gray-500 font-medium mb-2">⌨️ Claude Codeに入力する文字</p>
            {/* ターミナルモックアップ */}
            <div className="rounded-xl overflow-hidden border border-gray-700">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-gray-800 border-b border-gray-700">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <Terminal size={10} className="text-gray-500 ml-1" />
                <span className="text-gray-500 text-xs ml-0.5">Claude Code — ターミナル</span>
              </div>
              <div className="bg-gray-950 px-4 py-3">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-400 font-mono text-sm shrink-0">❯</span>
                  <code className="text-brand-300 font-mono text-sm leading-relaxed whitespace-pre-wrap break-all">
                    {skill.prompt}
                  </code>
                </div>
                <div className="mt-1 ml-4 flex items-center gap-1.5">
                  <div className="w-2 h-4 bg-brand-400 animate-pulse rounded-sm" />
                  <span className="text-gray-600 text-xs">ここにカーソルがある</span>
                </div>
              </div>
            </div>

            {/* コピーボタン */}
            <button
              onClick={handleCopy}
              className={`mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-brand-500 hover:bg-brand-600 text-white'
              }`}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? 'クリップボードにコピーしました！' : 'この文字をコピーする'}
            </button>
          </div>

          {/* 出力例 */}
          <div>
            <p className="text-xs text-gray-500 font-medium mb-2">💬 Claudeの返答例</p>
            <div className="rounded-xl bg-gray-800/60 border border-gray-700 px-4 py-3">
              <p className="text-gray-300 text-sm leading-relaxed font-mono whitespace-pre-line">{skill.output}</p>
            </div>
          </div>

          {/* タグ */}
          {skill.tags.length > 0 && (
            <div>
              <p className="text-xs text-gray-500 font-medium mb-2 flex items-center gap-1">
                <Tag size={12} /> タグ
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 使い方ヒント */}
          <div className="rounded-xl bg-brand-500/10 border border-brand-500/20 px-4 py-3">
            <p className="text-brand-400 text-xs font-bold mb-1">💡 使い方のコツ</p>
            <p className="text-gray-300 text-xs leading-relaxed">
              {skill.type === 'slash'
                ? 'ターミナルに「' + skill.prompt + '」と入力してEnterキーを押すだけ！ 簡単だよ。'
                : '上の文章をコピーして、Claude Codeのターミナル画面に貼り付けてEnterを押そう。'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
