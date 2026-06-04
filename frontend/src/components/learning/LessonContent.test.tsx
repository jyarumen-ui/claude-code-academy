// LessonContent コンポーネントのユニットテスト
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LessonContent } from './LessonContent'
import { type Lesson } from '../../data/curriculum'
import * as progressStore from '../../stores/progressStore'

// framer-motion をモック
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

// Prism 関連モック（CodePlayground 内で使用）
vi.mock('prismjs', () => ({ default: { highlightElement: vi.fn() } }))
vi.mock('prismjs/components/prism-bash', () => ({}))
vi.mock('prismjs/components/prism-typescript', () => ({}))
vi.mock('prismjs/components/prism-jsx', () => ({}))
vi.mock('prismjs/components/prism-json', () => ({}))
vi.mock('prismjs/components/prism-markdown', () => ({}))

// GLOSSARY をモック（TermCard 表示を制御）
vi.mock('../../data/glossary', () => ({
  GLOSSARY: [
    { term: 'LLM', reading: 'エルエルエム', description: '大規模言語モデル', category: 'AI' },
  ],
}))

// TermCard をモック
vi.mock('../beginner/TermCard', () => ({
  TermCard: ({ term }: { term: { term: string } }) => <div data-testid="term-card">{term.term}</div>,
}))

// useProgressStore をモック
vi.mock('../../stores/progressStore', () => ({
  useProgressStore: vi.fn(),
}))

const mockLesson: Lesson = {
  id: '0-1',
  title: 'AIとLLMを5分で理解する',
  description: 'LLMとAIの基礎を学ぶ',
  duration: 10,
  difficulty: 'beginner',
  type: 'reading',
  tags: ['AI基礎'],
  content: 'LLMとは大規模言語モデルのことです。\n\n詳しく学んでみましょう。',
}

const mockLessonWithCode: Lesson = {
  ...mockLesson,
  codeExamples: [
    { title: 'サンプルコード', code: 'claude --help', language: 'bash', explanation: '基本コマンド' },
  ],
}

const mockLessonWithQuiz: Lesson = {
  ...mockLesson,
  quiz: [
    {
      id: 'q1',
      question: 'LLMの正式名称は？',
      options: ['Large Language Model', 'Large Learning Machine', 'Local Language Module', 'Logic Layer Module'],
      correctIndex: 0,
      explanation: 'Large Language Model（大規模言語モデル）です。',
    },
  ],
}

const mockLessonWithLinks: Lesson = {
  ...mockLesson,
  externalLinks: [
    { title: '公式ドキュメント', url: 'https://example.com', description: '公式リファレンス', type: 'official' },
  ],
}

function makeMockStore(overrides: Partial<ReturnType<typeof progressStore.useProgressStore>> = {}) {
  return {
    isLessonCompleted: vi.fn().mockReturnValue(false),
    completeLesson: vi.fn(),
    addStudyTime: vi.fn(),
    ...overrides,
  } as unknown as ReturnType<typeof progressStore.useProgressStore>
}

describe('LessonContent', () => {
  beforeEach(() => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue(makeMockStore())
    Object.assign(navigator, {
      clipboard: { writeText: vi.fn().mockResolvedValue(undefined) },
    })
  })

  describe('レッスンヘッダー', () => {
    it('レッスンタイトルが表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('AIとLLMを5分で理解する')).toBeInTheDocument()
    })

    it('レッスン説明が表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('LLMとAIの基礎を学ぶ')).toBeInTheDocument()
    })

    it('難易度バッジが表示される（beginner → 初級）', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('初級')).toBeInTheDocument()
    })

    it('学習時間が表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText(/10分/)).toBeInTheDocument()
    })

    it('タグが表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('AI基礎')).toBeInTheDocument()
    })
  })

  describe('完了ボタン', () => {
    it('クイズなしのレッスンは「完了にする」ボタンが表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('完了にする')).toBeInTheDocument()
    })

    it('クイズありのレッスンは完了ボタンが表示されない', () => {
      render(<LessonContent lesson={mockLessonWithQuiz} levelId={0} />)
      expect(screen.queryByText('完了にする')).not.toBeInTheDocument()
    })

    it('完了済みレッスンは「完了済み」と表示される', () => {
      vi.mocked(progressStore.useProgressStore).mockReturnValue(
        makeMockStore({ isLessonCompleted: vi.fn().mockReturnValue(true) })
      )
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText('完了済み')).toBeInTheDocument()
    })

    it('「完了にする」クリックで completeLesson が呼ばれる', () => {
      const mockComplete = vi.fn()
      vi.mocked(progressStore.useProgressStore).mockReturnValue(
        makeMockStore({ completeLesson: mockComplete })
      )
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      fireEvent.click(screen.getByText('完了にする'))
      expect(mockComplete).toHaveBeenCalledWith(0, '0-1')
    })

    it('「完了にする」クリックで addStudyTime が呼ばれる', () => {
      const mockAddTime = vi.fn()
      vi.mocked(progressStore.useProgressStore).mockReturnValue(
        makeMockStore({ addStudyTime: mockAddTime })
      )
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      fireEvent.click(screen.getByText('完了にする'))
      expect(mockAddTime).toHaveBeenCalledWith(10)
    })
  })

  describe('タブナビゲーション', () => {
    it('デフォルトで「解説」タブが表示される', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.getByText(/LLMとは大規模言語モデルのことです/)).toBeInTheDocument()
    })

    it('コード例があれば「コード例」タブが表示される', () => {
      render(<LessonContent lesson={mockLessonWithCode} levelId={0} />)
      expect(screen.getByText('コード例')).toBeInTheDocument()
    })

    it('コード例がなければ「コード例」タブが表示されない', () => {
      render(<LessonContent lesson={mockLesson} levelId={0} />)
      expect(screen.queryByText('コード例')).not.toBeInTheDocument()
    })

    it('クイズがあれば「クイズ」タブが表示される', () => {
      render(<LessonContent lesson={mockLessonWithQuiz} levelId={0} />)
      expect(screen.getByText('クイズ')).toBeInTheDocument()
    })

    it('外部リンクがあれば「リソース」タブが表示される', () => {
      render(<LessonContent lesson={mockLessonWithLinks} levelId={0} />)
      expect(screen.getByText('リソース')).toBeInTheDocument()
    })

    it('「コード例」タブをクリックするとコードが表示される', () => {
      render(<LessonContent lesson={mockLessonWithCode} levelId={0} />)
      fireEvent.click(screen.getByText('コード例'))
      expect(screen.getByText('claude --help')).toBeInTheDocument()
    })

    it('「リソース」タブをクリックするとリンクが表示される', () => {
      render(<LessonContent lesson={mockLessonWithLinks} levelId={0} />)
      fireEvent.click(screen.getByText('リソース'))
      expect(screen.getByText('公式ドキュメント')).toBeInTheDocument()
    })
  })

  describe('難易度バッジ', () => {
    it.each([
      ['beginner' as const, '初級'],
      ['intermediate' as const, '中級'],
      ['advanced' as const, '上級'],
      ['expert' as const, '最上級'],
    ])('difficulty=%s → %s と表示される', (difficulty, label) => {
      render(<LessonContent lesson={{ ...mockLesson, difficulty }} levelId={0} />)
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })
})
