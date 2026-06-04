// Quiz コンポーネントのユニットテスト
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Quiz } from './Quiz'
import { type QuizQuestion } from '../../data/curriculum'

// framer-motion をモック
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
    button: ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
      <button {...props}>{children}</button>
    ),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

const mockQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'LLMの正式名称は？',
    options: [
      'Large Learning Machine',
      'Large Language Model',
      'Local Language Module',
      'Layered Logic Machine',
    ],
    correctIndex: 1,
    explanation: 'LLM = Large Language Model（大規模言語モデル）です。',
  },
  {
    id: 'q2',
    question: 'Claude Codeを起動するコマンドは？',
    options: ['claude', 'claude-code', 'cc', 'run claude'],
    correctIndex: 0,
    explanation: 'ターミナルで `claude` と入力すると起動します。',
  },
]

describe('Quiz', () => {
  it('最初の問題が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    expect(screen.getByText('LLMの正式名称は？')).toBeInTheDocument()
  })

  it('選択肢が4つ表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    expect(screen.getByText('Large Learning Machine')).toBeInTheDocument()
    expect(screen.getByText('Large Language Model')).toBeInTheDocument()
    expect(screen.getByText('Local Language Module')).toBeInTheDocument()
    expect(screen.getByText('Layered Logic Machine')).toBeInTheDocument()
  })

  it('問題番号が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    expect(screen.getByText(/問題 1 \/ 2/)).toBeInTheDocument()
  })

  it('正解を選ぶと解説が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 正解（index 1）を選択
    fireEvent.click(screen.getByText('Large Language Model'))
    expect(screen.getByText(/正解/)).toBeInTheDocument()
    expect(screen.getByText(/LLM = Large Language Model/)).toBeInTheDocument()
  })

  it('不正解を選ぶと解説が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 不正解（index 0）を選択
    fireEvent.click(screen.getByText('Large Learning Machine'))
    expect(screen.getByText(/不正解/)).toBeInTheDocument()
  })

  it('選択後は他の選択肢を変更できない（disabled）', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('Large Learning Machine'))
    // 全ボタンが disabled になる
    const buttons = screen.getAllByRole('button').filter(
      (b) => b.tagName === 'BUTTON',
    )
    // 選択肢ボタンは disabled
    const optionButtons = buttons.filter((b) => !b.textContent?.includes('次の問題'))
    optionButtons.forEach((btn) => {
      expect(btn).toBeDisabled()
    })
  })

  it('「次の問題」ボタンで次の問題に進む', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    fireEvent.click(screen.getByText('Large Language Model'))
    fireEvent.click(screen.getByText('次の問題'))
    expect(screen.getByText('Claude Codeを起動するコマンドは？')).toBeInTheDocument()
  })

  it('最後の問題で「結果を見る」ボタンが表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 問題1を回答
    fireEvent.click(screen.getByText('Large Language Model'))
    fireEvent.click(screen.getByText('次の問題'))
    // 問題2を回答
    fireEvent.click(screen.getByText('claude'))
    expect(screen.getByText('結果を見る')).toBeInTheDocument()
  })

  it('全問正解で100点が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 問題1: 正解
    fireEvent.click(screen.getByText('Large Language Model'))
    fireEvent.click(screen.getByText('次の問題'))
    // 問題2: 正解
    fireEvent.click(screen.getByText('claude'))
    fireEvent.click(screen.getByText('結果を見る'))
    expect(screen.getByText('100点')).toBeInTheDocument()
    expect(screen.getByText(/合格/)).toBeInTheDocument()
  })

  it('全問不正解で0点が表示される', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 問題1: 不正解
    fireEvent.click(screen.getByText('Large Learning Machine'))
    fireEvent.click(screen.getByText('次の問題'))
    // 問題2: 不正解
    fireEvent.click(screen.getByText('claude-code'))
    fireEvent.click(screen.getByText('結果を見る'))
    expect(screen.getByText('0点')).toBeInTheDocument()
    expect(onComplete).toHaveBeenCalledWith(0)
  })

  it('onComplete が正しいスコアで呼ばれる', () => {
    const onComplete = vi.fn()
    render(<Quiz questions={mockQuestions} onComplete={onComplete} />)
    // 問題1: 正解、問題2: 不正解 → 50点
    fireEvent.click(screen.getByText('Large Language Model'))
    fireEvent.click(screen.getByText('次の問題'))
    fireEvent.click(screen.getByText('claude-code'))
    fireEvent.click(screen.getByText('結果を見る'))
    expect(onComplete).toHaveBeenCalledWith(50)
  })
})
