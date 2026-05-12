import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Tag, ExternalLink, BookOpen, Code2, HelpCircle, Baby } from 'lucide-react'
import { type Lesson } from '../../data/curriculum'
import { CodePlayground } from './CodePlayground'
import { Quiz } from './Quiz'
import { useProgressStore } from '../../stores/progressStore'
import { GLOSSARY } from '../../data/glossary'
import { TermCard } from '../beginner/TermCard'
import { clsx } from 'clsx'

interface LessonContentProps {
  lesson: Lesson
  levelId: number
}

type Tab = 'content' | 'code' | 'quiz' | 'links'

/** レッスンコンテンツ表示コンポーネント */
export function LessonContent({ lesson, levelId }: LessonContentProps) {
  const [activeTab, setActiveTab] = useState<Tab>('content')
  const { isLessonCompleted, completeLesson, addStudyTime } = useProgressStore()
  const isCompleted = isLessonCompleted(levelId, lesson.id)

  const tabs: { id: Tab; label: string; icon: typeof BookOpen; show: boolean }[] = [
    { id: 'content', label: '解説', icon: BookOpen, show: true },
    { id: 'code', label: 'コード例', icon: Code2, show: !!(lesson.codeExamples?.length) },
    { id: 'quiz', label: 'クイズ', icon: HelpCircle, show: !!(lesson.quiz?.length) },
    { id: 'links', label: 'リソース', icon: ExternalLink, show: !!(lesson.externalLinks?.length) },
  ]

  const handleMarkComplete = () => {
    completeLesson(levelId, lesson.id)
    addStudyTime(lesson.duration)
  }

  const handleQuizComplete = (score: number) => {
    completeLesson(levelId, lesson.id, score)
    addStudyTime(lesson.duration)
  }

  const difficultyLabel = {
    beginner: { label: '初級', color: 'text-emerald-400 bg-emerald-500/10' },
    intermediate: { label: '中級', color: 'text-blue-400 bg-blue-500/10' },
    advanced: { label: '上級', color: 'text-purple-400 bg-purple-500/10' },
    expert: { label: '最上級', color: 'text-rose-400 bg-rose-500/10' },
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      {/* レッスンヘッダー */}
      <div className="card">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={clsx('badge', difficultyLabel[lesson.difficulty].color)}>
                {difficultyLabel[lesson.difficulty].label}
              </span>
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Clock size={12} />
                {lesson.duration}分
              </span>
              {lesson.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs text-gray-600">
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-white mb-1">{lesson.title}</h2>
            <p className="text-gray-400 text-sm">{lesson.description}</p>
          </div>

          {/* 完了チェック */}
          {!lesson.quiz?.length && (
            <button
              onClick={handleMarkComplete}
              disabled={isCompleted}
              className={clsx(
                'shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                isCompleted
                  ? 'bg-emerald-500/20 text-emerald-400 cursor-default'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white',
              )}
            >
              <CheckCircle2 size={16} className={isCompleted ? 'text-emerald-400' : ''} />
              {isCompleted ? '完了済み' : '完了にする'}
            </button>
          )}
        </div>
      </div>

      {/* タブナビ */}
      <div className="flex gap-1 border-b border-gray-800">
        {tabs.filter((t) => t.show).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
              activeTab === id
                ? 'border-brand-500 text-brand-400'
                : 'border-transparent text-gray-500 hover:text-gray-300',
            )}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <div>
        {activeTab === 'content' && (
          <div className="space-y-4">
          {/* このレッスンに関連する用語を自動抽出して表示 */}
          {(() => {
            const relatedTerms = GLOSSARY.filter((g) =>
              lesson.content.includes(g.term) || lesson.tags.includes(g.term.toLowerCase())
            ).slice(0, 4)
            return relatedTerms.length > 0 ? (
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Baby size={16} className="text-yellow-400" />
                  <span className="text-yellow-300 text-sm font-semibold">このレッスンで出てくる言葉</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {relatedTerms.map((t) => <TermCard key={t.term} term={t} compact />)}
                </div>
              </div>
            ) : null
          })()}
          <div className="card prose-custom">
            {/* Markdownをシンプルに整形して表示 */}
            {lesson.content.split('\n').map((line, i) => {
              if (line.startsWith('# ')) return <h1 key={i}>{line.slice(2)}</h1>
              if (line.startsWith('## ')) return <h2 key={i}>{line.slice(3)}</h2>
              if (line.startsWith('### ')) return <h3 key={i}>{line.slice(4)}</h3>
              if (line.startsWith('> ')) return <blockquote key={i}>{line.slice(2)}</blockquote>
              if (line.startsWith('---')) return <hr key={i} />
              if (line.startsWith('- ') || line.startsWith('* '))
                return <li key={i} className="ml-4 text-gray-300 text-sm">{line.slice(2)}</li>
              if (line.startsWith('```')) return null
              if (line === '') return <br key={i} />
              // テーブル行
              if (line.startsWith('|')) {
                return (
                  <div key={i} className="font-mono text-xs text-gray-400 border-b border-gray-800 py-1">
                    {line}
                  </div>
                )
              }
              // インラインコード
              if (line.includes('`')) {
                const parts = line.split('`')
                return (
                  <p key={i} className="text-gray-300 text-sm leading-relaxed mb-2">
                    {parts.map((part, j) =>
                      j % 2 === 1
                        ? <code key={j} className="bg-gray-800 text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono">{part}</code>
                        : part,
                    )}
                  </p>
                )
              }
              if (line.startsWith('**') && line.endsWith('**'))
                return <p key={i} className="font-semibold text-white text-sm mb-1">{line.slice(2, -2)}</p>
              return <p key={i} className="text-gray-300 text-sm leading-relaxed mb-2">{line}</p>
            })}
          </div>
          </div>
        )}

        {activeTab === 'code' && lesson.codeExamples && (
          <CodePlayground examples={lesson.codeExamples} />
        )}

        {activeTab === 'quiz' && lesson.quiz && (
          <Quiz questions={lesson.quiz} onComplete={handleQuizComplete} />
        )}

        {activeTab === 'links' && lesson.externalLinks && (
          <div className="space-y-3">
            {lesson.externalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={clsx(
                      'badge text-xs',
                      link.type === 'official' ? 'bg-blue-500/20 text-blue-400' :
                      link.type === 'course' ? 'bg-purple-500/20 text-purple-400' :
                      link.type === 'article' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-gray-700 text-gray-400',
                    )}>
                      {link.type === 'official' ? '公式' :
                       link.type === 'course' ? 'コース' :
                       link.type === 'article' ? '記事' : '動画'}
                    </span>
                    <span className="font-medium text-white text-sm">{link.title}</span>
                  </div>
                  <p className="text-xs text-gray-400">{link.description}</p>
                </div>
                <ExternalLink size={16} className="text-gray-500 group-hover:text-brand-400 shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
