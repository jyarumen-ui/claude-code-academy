// LevelCard コンポーネントのユニットテスト
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { LevelCard } from './LevelCard'
import { type Level } from '../../data/curriculum'
import * as progressStore from '../../stores/progressStore'

// framer-motion をモック（アニメーションはテスト不要）
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

// useProgressStore をモック
vi.mock('../../stores/progressStore', () => ({
  useProgressStore: vi.fn(),
}))

const mockLevel: Level = {
  id: 0,
  name: 'Claudeって何？',
  emoji: '🌱',
  description: 'AIの基礎からClaude / Claude Codeの違いまで。完全初心者スタート。',
  color: '#10b981',
  bgGradient: 'from-emerald-500/20 to-teal-500/20',
  estimatedHours: 1,
  prerequisites: [],
  skills: ['AI基礎理解', 'Claude.aiの使い方', '料金プラン把握', 'LLMの概念'],
  lessons: [
    {
      id: '0-1',
      title: 'AIとLLMを5分で理解する',
      description: 'テスト用レッスン',
      duration: 10,
      difficulty: 'beginner',
      type: 'reading',
      tags: ['AI基礎'],
      content: 'コンテンツ',
    },
  ],
}

const mockLockedLevel: Level = {
  ...mockLevel,
  id: 1,
  name: 'Claude Code 入門',
  emoji: '🚀',
  color: '#0ea5e9',
}

function renderCard(level: Level, index = 0) {
  return render(
    <MemoryRouter>
      <LevelCard level={level} index={index} />
    </MemoryRouter>,
  )
}

describe('LevelCard', () => {
  beforeEach(() => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: { levelId: 0, unlocked: true, completed: false, lessonsProgress: {} },
        1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
      },
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
  })

  it('レベル名と説明が表示される', () => {
    renderCard(mockLevel)
    expect(screen.getByText('Claudeって何？')).toBeInTheDocument()
    expect(screen.getByText(/AIの基礎から/)).toBeInTheDocument()
  })

  it('レベル番号が正しく表示される', () => {
    renderCard(mockLevel)
    expect(screen.getByText('Level 0')).toBeInTheDocument()
  })

  it('スキルタグが最大3件表示される', () => {
    renderCard(mockLevel)
    // 4スキルのうち最初の3つが表示される
    expect(screen.getByText('AI基礎理解')).toBeInTheDocument()
    expect(screen.getByText('Claude.aiの使い方')).toBeInTheDocument()
    expect(screen.getByText('料金プラン把握')).toBeInTheDocument()
    // 4番目は +1 として表示される
    expect(screen.getByText('+1')).toBeInTheDocument()
  })

  it('推定時間とレッスン数が表示される', () => {
    renderCard(mockLevel)
    expect(screen.getByText(/約1時間/)).toBeInTheDocument()
    expect(screen.getByText(/1レッスン/)).toBeInTheDocument()
  })

  it('アンロック済みレベルはリンクが有効', () => {
    renderCard(mockLevel)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/level/0')
  })

  it('ロック済みレベルはpointer-events-noneクラスを持つ', () => {
    renderCard(mockLockedLevel, 1)
    const link = screen.getByRole('link')
    // React Router は # を / に変換するため、cursor-not-allowed クラスで判定
    expect(link).toHaveClass('cursor-not-allowed')
  })

  it('完了率が表示される（アンロック済みの場合）', () => {
    renderCard(mockLevel)
    // 進捗0%が表示される
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('レッスン完了時に完了率が更新される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: {
          levelId: 0,
          unlocked: true,
          completed: false,
          lessonsProgress: {
            '0-1': { lessonId: '0-1', completed: true },
          },
        },
      },
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)

    renderCard(mockLevel)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})
