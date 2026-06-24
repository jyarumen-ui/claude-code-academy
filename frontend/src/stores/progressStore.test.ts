// progressStore のユニットテスト
import { describe, it, expect, beforeEach } from 'vitest'
import { act } from '@testing-library/react'
import { useProgressStore } from './progressStore'

// 各テスト前にストアをリセット
beforeEach(() => {
  act(() => {
    useProgressStore.getState().resetProgress()
  })
})

describe('progressStore', () => {
  describe('初期状態', () => {
    it('Level 0 がアンロック済みで他はロック', () => {
      const { levels } = useProgressStore.getState()
      expect(levels[0].unlocked).toBe(true)
      expect(levels[1].unlocked).toBe(false)
      expect(levels[2].unlocked).toBe(false)
    })

    it('badges が空配列', () => {
      expect(useProgressStore.getState().badges).toEqual([])
    })

    it('totalStudyMinutes が 0', () => {
      expect(useProgressStore.getState().totalStudyMinutes).toBe(0)
    })

    it('currentStreak が 0', () => {
      expect(useProgressStore.getState().currentStreak).toBe(0)
    })
  })

  describe('completeLesson', () => {
    it('レッスンを完了すると lessonsProgress に追加される', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1', 90)
      })
      const level = useProgressStore.getState().levels[0]
      expect(level.lessonsProgress['0-1'].completed).toBe(true)
      expect(level.lessonsProgress['0-1'].quizScore).toBe(90)
    })

    it('レッスン完了後に次のレベルがアンロックされる', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1')
      })
      expect(useProgressStore.getState().levels[1].unlocked).toBe(true)
    })

    it('Level 1 でレッスン完了すると Level 2 がアンロック', () => {
      // まず Level 1 をアンロック
      act(() => {
        useProgressStore.getState().unlockLevel(1)
      })
      act(() => {
        useProgressStore.getState().completeLesson(1, '1-1')
      })
      expect(useProgressStore.getState().levels[2].unlocked).toBe(true)
    })
  })

  describe('unlockLevel', () => {
    it('指定レベルがアンロックされる', () => {
      act(() => {
        useProgressStore.getState().unlockLevel(3)
      })
      expect(useProgressStore.getState().levels[3].unlocked).toBe(true)
    })

    it('既存のlevelProgressを保持しつつアンロックする', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1')
        useProgressStore.getState().unlockLevel(0)
      })
      const level = useProgressStore.getState().levels[0]
      expect(level.unlocked).toBe(true)
      expect(level.lessonsProgress['0-1'].completed).toBe(true)
    })
  })

  describe('addBadge', () => {
    it('バッジが追加される', () => {
      act(() => {
        useProgressStore.getState().addBadge({
          id: 'test-badge',
          title: 'テストバッジ',
          description: 'テスト用',
          emoji: '🏆',
        })
      })
      const { badges } = useProgressStore.getState()
      expect(badges).toHaveLength(1)
      expect(badges[0].id).toBe('test-badge')
      expect(badges[0].earnedAt).toBeTruthy()
    })

    it('複数バッジを追加できる', () => {
      act(() => {
        useProgressStore.getState().addBadge({ id: 'b1', title: 'B1', description: '', emoji: '🥇' })
        useProgressStore.getState().addBadge({ id: 'b2', title: 'B2', description: '', emoji: '🥈' })
      })
      expect(useProgressStore.getState().badges).toHaveLength(2)
    })
  })

  describe('addStudyTime', () => {
    it('学習時間が加算される', () => {
      act(() => {
        useProgressStore.getState().addStudyTime(30)
      })
      expect(useProgressStore.getState().totalStudyMinutes).toBe(30)
    })

    it('複数回の学習時間が正しく合算される', () => {
      act(() => {
        useProgressStore.getState().addStudyTime(30)
        useProgressStore.getState().addStudyTime(45)
      })
      expect(useProgressStore.getState().totalStudyMinutes).toBe(75)
    })

    it('初回学習でstreakが1になる', () => {
      act(() => {
        useProgressStore.getState().addStudyTime(10)
      })
      expect(useProgressStore.getState().currentStreak).toBe(1)
    })
  })

  describe('isLessonCompleted', () => {
    it('未完了レッスンはfalse', () => {
      expect(useProgressStore.getState().isLessonCompleted(0, '0-1')).toBe(false)
    })

    it('完了済みレッスンはtrue', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1')
      })
      expect(useProgressStore.getState().isLessonCompleted(0, '0-1')).toBe(true)
    })

    it('存在しないレベルはfalse', () => {
      expect(useProgressStore.getState().isLessonCompleted(99, '99-1')).toBe(false)
    })
  })

  describe('getLevelProgress', () => {
    it('進捗なしは0を返す', () => {
      expect(useProgressStore.getState().getLevelProgress(0)).toBe(0)
    })

    it('存在しないレベルは0を返す', () => {
      expect(useProgressStore.getState().getLevelProgress(99)).toBe(0)
    })

    it('1件完了/1件合計 = 100%', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1')
      })
      // lessonsProgress に 1件登録 → 1/1 = 100%
      expect(useProgressStore.getState().getLevelProgress(0)).toBe(100)
    })
  })

  describe('resetProgress', () => {
    it('全進捗がリセットされる', () => {
      act(() => {
        useProgressStore.getState().completeLesson(0, '0-1')
        useProgressStore.getState().addBadge({ id: 'b1', title: 'B1', description: '', emoji: '🏆' })
        useProgressStore.getState().addStudyTime(100)
        useProgressStore.getState().resetProgress()
      })
      const state = useProgressStore.getState()
      expect(state.levels[0].lessonsProgress).toEqual({})
      expect(state.badges).toEqual([])
      expect(state.totalStudyMinutes).toBe(0)
      expect(state.currentStreak).toBe(0)
    })
  })
})
