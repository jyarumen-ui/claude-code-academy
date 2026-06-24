// ProgressTracker コンポーネントのユニットテスト
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressTracker } from './ProgressTracker'
import * as progressStore from '../../stores/progressStore'

// framer-motion をモック
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

// CURRICULUM をモック（テスト用に簡略化）
vi.mock('../../data/curriculum', () => ({
  CURRICULUM: [
    {
      id: 0,
      name: 'Claudeって何？',
      emoji: '🌱',
      color: '#10b981',
      lessons: [
        { id: '0-1', title: 'レッスン1' },
        { id: '0-2', title: 'レッスン2' },
      ],
    },
    {
      id: 1,
      name: 'Claude Code 入門',
      emoji: '🚀',
      color: '#0ea5e9',
      lessons: [
        { id: '1-1', title: 'レッスン1' },
      ],
    },
  ],
}))

describe('ProgressTracker', () => {
  beforeEach(() => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: { levelId: 0, unlocked: true, completed: false, lessonsProgress: {} },
        1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
      },
      badges: [],
      totalStudyMinutes: 0,
      currentStreak: 0,
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
  })

  it('全体進捗セクションが表示される', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('全体進捗')).toBeInTheDocument()
  })

  it('初期状態では全体進捗が0%', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('統計カードが4つ表示される', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('完了レッスン')).toBeInTheDocument()
    expect(screen.getByText('学習時間')).toBeInTheDocument()
    expect(screen.getByText('連続学習')).toBeInTheDocument()
    expect(screen.getByText('バッジ獲得')).toBeInTheDocument()
  })

  it('完了レッスン数が正しく表示される', () => {
    render(<ProgressTracker />)
    // 3レッスン合計、0完了
    expect(screen.getByText('0 / 3')).toBeInTheDocument()
  })

  it('学習時間が正しく表示される', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('0h 0m')).toBeInTheDocument()
  })

  it('学習時間が60分の場合は1h 0mと表示される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: { levelId: 0, unlocked: true, completed: false, lessonsProgress: {} },
        1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
      },
      badges: [],
      totalStudyMinutes: 60,
      currentStreak: 3,
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
    render(<ProgressTracker />)
    // Math.round(60/60)=1, 60%60=0 → "1h 0m"
    expect(screen.getByText('1h 0m')).toBeInTheDocument()
  })

  it('連続学習日数が正しく表示される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {},
      badges: [],
      totalStudyMinutes: 0,
      currentStreak: 5,
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
    render(<ProgressTracker />)
    expect(screen.getByText('5日')).toBeInTheDocument()
  })

  it('バッジが0個のとき バッジセクションが表示されない', () => {
    render(<ProgressTracker />)
    expect(screen.queryByText('獲得バッジ')).not.toBeInTheDocument()
  })

  it('バッジが存在するとき バッジセクションが表示される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {},
      badges: [
        {
          id: 'badge-1',
          title: '初心者',
          description: '最初のレッスンを完了',
          emoji: '🏆',
          earnedAt: '2026-01-01',
        },
      ],
      totalStudyMinutes: 0,
      currentStreak: 0,
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
    render(<ProgressTracker />)
    expect(screen.getByText('獲得バッジ')).toBeInTheDocument()
    expect(screen.getByText('初心者')).toBeInTheDocument()
  })

  it('レッスン完了時に進捗率が更新される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: {
          levelId: 0,
          unlocked: true,
          completed: false,
          lessonsProgress: {
            '0-1': { lessonId: '0-1', completed: true },
            '0-2': { lessonId: '0-2', completed: true },
          },
        },
        1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
      },
      badges: [],
      totalStudyMinutes: 0,
      currentStreak: 0,
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
    render(<ProgressTracker />)
    // 3レッスン中2完了 ≒ 67%
    expect(screen.getByText('67%')).toBeInTheDocument()
  })

  it('レベル別進捗セクションが表示される', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('レベル別進捗')).toBeInTheDocument()
    expect(screen.getByText(/Lv0: Claudeって何？/)).toBeInTheDocument()
  })

  it('ロック済みレベルは 🔒 が表示される', () => {
    render(<ProgressTracker />)
    expect(screen.getByText('🔒')).toBeInTheDocument()
  })
})
