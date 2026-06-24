// userStore のユニットテスト
import { describe, it, expect, beforeEach } from 'vitest'
import { act } from '@testing-library/react'
import { useUserStore } from './userStore'

// 各テスト前にストアを初期状態に戻す（promptLibraryFavoritesを含む全状態をリセット）
beforeEach(() => {
  act(() => {
    useUserStore.setState({
      nickname: '',
      theme: 'dark',
      sidebarOpen: true,
      currentLevelId: null,
      currentLessonId: null,
      promptLibraryFavorites: [],
      claudeMdContent: '# My Project',
    })
  })
})

describe('userStore', () => {
  describe('初期状態', () => {
    it('nicknameが空文字', () => {
      expect(useUserStore.getState().nickname).toBe('')
    })

    it('themeがdark', () => {
      expect(useUserStore.getState().theme).toBe('dark')
    })

    it('sidebarOpenがtrue', () => {
      expect(useUserStore.getState().sidebarOpen).toBe(true)
    })

    it('promptLibraryFavoritesが空配列', () => {
      expect(useUserStore.getState().promptLibraryFavorites).toEqual([])
    })

    it('claudeMdContentが初期テンプレート', () => {
      expect(useUserStore.getState().claudeMdContent).toContain('# My Project')
    })
  })

  describe('setNickname', () => {
    it('ニックネームが設定される', () => {
      act(() => {
        useUserStore.getState().setNickname('テストユーザー')
      })
      expect(useUserStore.getState().nickname).toBe('テストユーザー')
    })

    it('空文字に設定できる', () => {
      act(() => {
        useUserStore.getState().setNickname('テスト')
        useUserStore.getState().setNickname('')
      })
      expect(useUserStore.getState().nickname).toBe('')
    })
  })

  describe('toggleSidebar', () => {
    it('サイドバーのOpen状態がトグルされる', () => {
      act(() => {
        useUserStore.getState().toggleSidebar()
      })
      expect(useUserStore.getState().sidebarOpen).toBe(false)
      act(() => {
        useUserStore.getState().toggleSidebar()
      })
      expect(useUserStore.getState().sidebarOpen).toBe(true)
    })
  })

  describe('setSidebarOpen', () => {
    it('サイドバーの状態を直接設定できる', () => {
      act(() => {
        useUserStore.getState().setSidebarOpen(false)
      })
      expect(useUserStore.getState().sidebarOpen).toBe(false)
    })
  })

  describe('setCurrentLesson', () => {
    it('現在のレッスンが設定される', () => {
      act(() => {
        useUserStore.getState().setCurrentLesson(2, '2-3')
      })
      const state = useUserStore.getState()
      expect(state.currentLevelId).toBe(2)
      expect(state.currentLessonId).toBe('2-3')
    })
  })

  describe('togglePromptFavorite', () => {
    it('お気に入りに追加できる', () => {
      act(() => {
        useUserStore.getState().togglePromptFavorite('prompt-123')
      })
      expect(useUserStore.getState().promptLibraryFavorites).toContain('prompt-123')
    })

    it('既存のお気に入りを削除できる（トグル）', () => {
      act(() => {
        useUserStore.getState().togglePromptFavorite('prompt-123')
        useUserStore.getState().togglePromptFavorite('prompt-123')
      })
      expect(useUserStore.getState().promptLibraryFavorites).not.toContain('prompt-123')
    })

    it('複数のお気に入りを管理できる', () => {
      act(() => {
        useUserStore.getState().togglePromptFavorite('p1')
        useUserStore.getState().togglePromptFavorite('p2')
        useUserStore.getState().togglePromptFavorite('p3')
      })
      expect(useUserStore.getState().promptLibraryFavorites).toHaveLength(3)
    })

    it('一部だけ削除してもほかは残る', () => {
      act(() => {
        useUserStore.getState().togglePromptFavorite('p1')
        useUserStore.getState().togglePromptFavorite('p2')
        useUserStore.getState().togglePromptFavorite('p1') // p1 を削除
      })
      const favs = useUserStore.getState().promptLibraryFavorites
      expect(favs).not.toContain('p1')
      expect(favs).toContain('p2')
    })
  })

  describe('setClaudeMdContent', () => {
    it('CLAUDE.md の内容を更新できる', () => {
      const newContent = '# 新しいプロジェクト\n## 説明'
      act(() => {
        useUserStore.getState().setClaudeMdContent(newContent)
      })
      expect(useUserStore.getState().claudeMdContent).toBe(newContent)
    })
  })
})
