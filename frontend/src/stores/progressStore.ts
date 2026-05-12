// 学習進捗ストア — LocalStorageで永続化

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface LessonProgress {
  lessonId: string
  completed: boolean
  quizScore?: number
  completedAt?: string
}

export interface LevelProgress {
  levelId: number
  unlocked: boolean
  completed: boolean
  lessonsProgress: Record<string, LessonProgress>
}

export interface Badge {
  id: string
  title: string
  description: string
  emoji: string
  earnedAt: string
}

interface ProgressState {
  levels: Record<number, LevelProgress>
  badges: Badge[]
  totalStudyMinutes: number
  currentStreak: number
  lastStudyDate: string | null

  // アクション
  completeLesson: (levelId: number, lessonId: string, quizScore?: number) => void
  unlockLevel: (levelId: number) => void
  addBadge: (badge: Omit<Badge, 'earnedAt'>) => void
  addStudyTime: (minutes: number) => void
  isLessonCompleted: (levelId: number, lessonId: string) => boolean
  isLevelCompleted: (levelId: number) => boolean
  getLevelProgress: (levelId: number) => number // 0-100
  resetProgress: () => void
}

const INITIAL_LEVELS: Record<number, LevelProgress> = {
  0: { levelId: 0, unlocked: true, completed: false, lessonsProgress: {} },
  1: { levelId: 1, unlocked: false, completed: false, lessonsProgress: {} },
  2: { levelId: 2, unlocked: false, completed: false, lessonsProgress: {} },
  3: { levelId: 3, unlocked: false, completed: false, lessonsProgress: {} },
  4: { levelId: 4, unlocked: false, completed: false, lessonsProgress: {} },
  5: { levelId: 5, unlocked: false, completed: false, lessonsProgress: {} },
  6: { levelId: 6, unlocked: false, completed: false, lessonsProgress: {} },
  7: { levelId: 7, unlocked: false, completed: false, lessonsProgress: {} },
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      levels: INITIAL_LEVELS,
      badges: [],
      totalStudyMinutes: 0,
      currentStreak: 0,
      lastStudyDate: null,

      completeLesson: (levelId, lessonId, quizScore) => {
        set((state) => {
          const level = state.levels[levelId] ?? {
            levelId,
            unlocked: true,
            completed: false,
            lessonsProgress: {},
          }

          const updated: LevelProgress = {
            ...level,
            lessonsProgress: {
              ...level.lessonsProgress,
              [lessonId]: {
                lessonId,
                completed: true,
                quizScore,
                completedAt: new Date().toISOString(),
              },
            },
          }

          // 次のレベルをアンロック
          const nextLevels = { ...state.levels, [levelId]: updated }
          const completedCount = Object.values(updated.lessonsProgress).filter(
            (l) => l.completed,
          ).length

          // 全レッスン完了でレベルコンプリート→次レベルをアンロック
          if (completedCount >= 1 && nextLevels[levelId + 1]) {
            nextLevels[levelId + 1] = {
              ...nextLevels[levelId + 1],
              unlocked: true,
            }
          }

          return { levels: nextLevels }
        })
      },

      unlockLevel: (levelId) => {
        set((state) => ({
          levels: {
            ...state.levels,
            [levelId]: {
              ...(state.levels[levelId] ?? {
                levelId,
                completed: false,
                lessonsProgress: {},
              }),
              unlocked: true,
            },
          },
        }))
      },

      addBadge: (badge) => {
        set((state) => ({
          badges: [
            ...state.badges,
            { ...badge, earnedAt: new Date().toISOString() },
          ],
        }))
      },

      addStudyTime: (minutes) => {
        const today = new Date().toDateString()
        set((state) => {
          const isConsecutive =
            state.lastStudyDate ===
            new Date(Date.now() - 86400000).toDateString()
          return {
            totalStudyMinutes: state.totalStudyMinutes + minutes,
            lastStudyDate: today,
            currentStreak:
              state.lastStudyDate === today
                ? state.currentStreak
                : isConsecutive
                  ? state.currentStreak + 1
                  : 1,
          }
        })
      },

      isLessonCompleted: (levelId, lessonId) => {
        const level = get().levels[levelId]
        return level?.lessonsProgress[lessonId]?.completed ?? false
      },

      isLevelCompleted: (levelId) => {
        return get().levels[levelId]?.completed ?? false
      },

      getLevelProgress: (levelId) => {
        const level = get().levels[levelId]
        if (!level) return 0
        const completed = Object.values(level.lessonsProgress).filter(
          (l) => l.completed,
        ).length
        const total = Object.keys(level.lessonsProgress).length
        if (total === 0) return 0
        return Math.round((completed / total) * 100)
      },

      resetProgress: () => {
        set({ levels: INITIAL_LEVELS, badges: [], totalStudyMinutes: 0, currentStreak: 0, lastStudyDate: null })
      },
    }),
    { name: 'claude-academy-progress' },
  ),
)
