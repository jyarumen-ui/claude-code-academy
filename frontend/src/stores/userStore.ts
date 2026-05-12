// ユーザー設定ストア

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
  nickname: string
  theme: 'dark' | 'light'
  sidebarOpen: boolean
  currentLevelId: number | null
  currentLessonId: string | null
  promptLibraryFavorites: string[]
  claudeMdContent: string

  // アクション
  setNickname: (name: string) => void
  setTheme: (theme: 'dark' | 'light') => void
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setCurrentLesson: (levelId: number, lessonId: string) => void
  togglePromptFavorite: (promptId: string) => void
  setClaudeMdContent: (content: string) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      nickname: '',
      theme: 'dark',
      sidebarOpen: true,
      currentLevelId: null,
      currentLessonId: null,
      promptLibraryFavorites: [],
      claudeMdContent: `# My Project

## 概要
[プロジェクトの説明を3行以内で]

## 技術スタック
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- DB: PostgreSQL

## よく使うコマンド
\`\`\`bash
npm run dev    # 開発サーバー起動
npm run test   # テスト実行
\`\`\`

## コーディングルール
- TypeScript の any 型は禁止
- コメントは日本語で
- コンポーネントは200行以内

## 禁止事項
- 本番DBへの直接操作
- APIキーのハードコード
`,

      setNickname: (name) => set({ nickname: name }),
      setTheme: (theme) => {
        set({ theme })
        if (theme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setCurrentLesson: (levelId, lessonId) =>
        set({ currentLevelId: levelId, currentLessonId: lessonId }),
      togglePromptFavorite: (promptId) =>
        set((s) => ({
          promptLibraryFavorites: s.promptLibraryFavorites.includes(promptId)
            ? s.promptLibraryFavorites.filter((id) => id !== promptId)
            : [...s.promptLibraryFavorites, promptId],
        })),
      setClaudeMdContent: (content) => set({ claudeMdContent: content }),
    }),
    { name: 'claude-academy-user' },
  ),
)
