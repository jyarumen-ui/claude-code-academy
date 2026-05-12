import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ChevronRight, Trophy } from 'lucide-react'
import { type QuizQuestion } from '../../data/curriculum'
import { clsx } from 'clsx'

interface QuizProps {
  questions: QuizQuestion[]
  onComplete: (score: number) => void
}

/** インタラクティブクイズコンポーネント */
export function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [showResult, setShowResult] = useState(false)

  const currentQ = questions[currentIndex]
  const isAnswered = selectedOption !== null
  const isCorrect = selectedOption === currentQ?.correctIndex

  const handleSelect = (index: number) => {
    if (isAnswered) return
    setSelectedOption(index)
  }

  const handleNext = () => {
    if (!isAnswered) return
    const newAnswers = [...answers, isCorrect]

    if (currentIndex + 1 >= questions.length) {
      setAnswers(newAnswers)
      setShowResult(true)
      const score = Math.round(
        (newAnswers.filter(Boolean).length / questions.length) * 100,
      )
      onComplete(score)
    } else {
      setAnswers(newAnswers)
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
    }
  }

  if (showResult) {
    const correctCount = answers.filter(Boolean).length
    const score = Math.round((correctCount / questions.length) * 100)
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center"
      >
        <Trophy size={40} className="mx-auto mb-3 text-yellow-400" />
        <h3 className="text-xl font-bold text-white mb-1">クイズ完了！</h3>
        <p className="text-4xl font-bold mb-2" style={{ color: score >= 70 ? '#10b981' : '#f59e0b' }}>
          {score}点
        </p>
        <p className="text-gray-400 text-sm">
          {questions.length}問中 {correctCount}問正解
        </p>
        {score >= 70 ? (
          <p className="mt-3 text-emerald-400 font-medium">🎉 合格！次のレッスンへ進もう</p>
        ) : (
          <p className="mt-3 text-amber-400 font-medium">もう一度チャレンジしてみよう</p>
        )}
      </motion.div>
    )
  }

  return (
    <div className="space-y-4">
      {/* 進捗 */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
        <span>問題 {currentIndex + 1} / {questions.length}</span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={clsx(
                'w-2 h-2 rounded-full transition-colors',
                i < currentIndex
                  ? answers[i] ? 'bg-emerald-500' : 'bg-red-500'
                  : i === currentIndex
                    ? 'bg-brand-400'
                    : 'bg-gray-700',
              )}
            />
          ))}
        </div>
      </div>

      {/* 問題 */}
      <div className="card">
        <p className="text-white font-medium leading-relaxed mb-4">{currentQ.question}</p>

        <div className="space-y-2">
          {currentQ.options.map((option, i) => {
            const isSelected = selectedOption === i
            const isRight = i === currentQ.correctIndex
            let colorClass = 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-750 cursor-pointer'

            if (isAnswered) {
              if (isRight) colorClass = 'border-emerald-500 bg-emerald-500/10'
              else if (isSelected && !isRight) colorClass = 'border-red-500 bg-red-500/10'
              else colorClass = 'border-gray-800 bg-gray-900 opacity-50'
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={clsx(
                  'w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all text-sm',
                  colorClass,
                )}
              >
                <span className={clsx(
                  'w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-bold',
                  isAnswered && isRight ? 'border-emerald-500 text-emerald-400' :
                  isAnswered && isSelected && !isRight ? 'border-red-500 text-red-400' :
                  'border-gray-600 text-gray-400',
                )}>
                  {isAnswered
                    ? isRight ? <CheckCircle2 size={14} className="text-emerald-400" />
                    : isSelected ? <XCircle size={14} className="text-red-400" />
                    : String.fromCharCode(65 + i)
                    : String.fromCharCode(65 + i)}
                </span>
                <span className={clsx(
                  isAnswered && isRight ? 'text-emerald-300' :
                  isAnswered && isSelected && !isRight ? 'text-red-300' :
                  'text-gray-200',
                )}>
                  {option}
                </span>
              </button>
            )
          })}
        </div>

        {/* 解説 */}
        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className={clsx(
                'mt-4 p-3 rounded-lg text-sm',
                isCorrect ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                          : 'bg-amber-500/10 border border-amber-500/30 text-amber-300',
              )}
            >
              <strong>{isCorrect ? '✅ 正解！' : '❌ 不正解'}</strong>
              <p className="mt-1 text-gray-300">{currentQ.explanation}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 次へボタン */}
      {isAnswered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={handleNext}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          {currentIndex + 1 >= questions.length ? '結果を見る' : '次の問題'}
          <ChevronRight size={16} />
        </motion.button>
      )}
    </div>
  )
}
