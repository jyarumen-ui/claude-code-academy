// Home ページのユニットテスト
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Home } from './Home'
import * as progressStore from '../stores/progressStore'

// framer-motion をモック
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <section {...props}>{children}</section>
    ),
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

// useProgressStore をモック
vi.mock('../stores/progressStore', () => ({
  useProgressStore: vi.fn(),
}))

// CURRICULUM をモック（テスト用に簡略化）
vi.mock('../data/curriculum', () => ({
  CURRICULUM: [
    {
      id: 0,
      name: 'Claudeって何？',
      emoji: '🌱',
      color: '#10b981',
      lessons: [{ id: '0-1', title: 'レッスン1' }],
    },
    {
      id: 1,
      name: 'Claude Code 入門',
      emoji: '🚀',
      color: '#0ea5e9',
      lessons: [{ id: '1-1', title: 'レッスン1' }],
    },
  ],
}))

function renderHome() {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
  )
}

describe('Home', () => {
  beforeEach(() => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: { levelId: 0, unlocked: true, completed: false, lessonsProgress: {} },
        1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
      },
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
  })

  it('メインキャッチコピーが表示される', () => {
    renderHome()
    expect(screen.getByText('完全マスター')).toBeInTheDocument()
  })

  it('ヘッダーに「Claude Code を」が含まれる', () => {
    renderHome()
    expect(screen.getByText(/Claude Code を/)).toBeInTheDocument()
  })

  it('初心者ガイドリンクが表示される', () => {
    renderHome()
    expect(screen.getByText('初心者ガイド')).toBeInTheDocument()
  })

  it('SKILLライブラリリンクが表示される', () => {
    renderHome()
    expect(screen.getByText('SKILLライブラリ')).toBeInTheDocument()
  })

  it('「学習を始める」ボタンが表示される', () => {
    renderHome()
    expect(screen.getByText('学習を始める')).toBeInTheDocument()
  })

  it('「ロードマップを見る」ボタンが表示される', () => {
    renderHome()
    expect(screen.getByText('ロードマップを見る')).toBeInTheDocument()
  })

  it('7段階学習ロードマップセクションが表示される', () => {
    renderHome()
    expect(screen.getByText('7段階学習ロードマップ')).toBeInTheDocument()
  })

  it('カリキュラムのレベルカードが表示される', () => {
    renderHome()
    // CURRICULUM のモックデータに基づく
    expect(screen.getByText('Claudeって何？')).toBeInTheDocument()
    expect(screen.getByText('Claude Code 入門')).toBeInTheDocument()
  })

  it('Level 0 は /level/0 へのリンクを持つ', () => {
    renderHome()
    // アンロック済みレベルにはリンクが有効
    const links = screen.getAllByRole('link')
    const level0Link = links.find((l) => l.getAttribute('href') === '/level/0')
    expect(level0Link).toBeDefined()
  })

  it('4つの特徴が表示される', () => {
    renderHome()
    expect(screen.getByText('7段階ロードマップ')).toBeInTheDocument()
    expect(screen.getByText('SNS × 副業活用')).toBeInTheDocument()
    expect(screen.getByText('インタラクティブ学習')).toBeInTheDocument()
    expect(screen.getByText('コミュニティ')).toBeInTheDocument()
  })

  it('SNS活用ガイドへのCTAが表示される', () => {
    renderHome()
    expect(screen.getByText('SNS活用ガイドを見る')).toBeInTheDocument()
  })

  it('アンロック済みレベルから学習開始リンクが設定される', () => {
    renderHome()
    // Level 0 がアンロック済みで未完了なので /level/0 が学習開始リンク
    const startLink = screen.getByText('学習を始める').closest('a')
    expect(startLink).toHaveAttribute('href', '/level/0')
  })

  it('全レベル完了の場合も最初のレベルリンクが表示される', () => {
    vi.mocked(progressStore.useProgressStore).mockReturnValue({
      levels: {
        0: { levelId: 0, unlocked: true, completed: true, lessonsProgress: {} },
        1: { levelId: 1, unlocked: true, completed: true, lessonsProgress: {} },
      },
    } as unknown as ReturnType<typeof progressStore.useProgressStore>)
    renderHome()
    const startLink = screen.getByText('学習を始める').closest('a')
    // 全完了なら CURRICULUM[0] にフォールバック
    expect(startLink).toHaveAttribute('href', '/level/0')
  })
})
