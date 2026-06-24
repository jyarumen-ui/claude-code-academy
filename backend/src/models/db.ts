import { LowSync, JSONFileSync } from 'lowdb'
import path from 'path'
import fs from 'fs'

export interface User {
  id: number
  nickname: string
  email: string
  password: string
  createdAt: string
}

export interface Progress {
  userId: number
  data: unknown
  updatedAt: string
}

export interface Post {
  id: number
  userId: number
  content: string
  category: string
  likes: number
  likedBy: number[]
  createdAt: string
}

interface DbSchema {
  users: User[]
  progress: Progress[]
  posts: Post[]
  nextUserId: number
  nextPostId: number
}

const DEFAULT_DATA: DbSchema = {
  users: [],
  progress: [],
  posts: [],
  nextUserId: 1,
  nextPostId: 1,
}

const dbDir = path.resolve('./data')
const dbPath = path.join(dbDir, 'academy.json')

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}

const adapter = new JSONFileSync<DbSchema>(dbPath)
export const db = new LowSync(adapter, DEFAULT_DATA)

export function initDb(): void {
  db.read()
  // ファイルが空の場合はデフォルト値をセット
  db.data ??= DEFAULT_DATA
  db.write()
  console.log('✅ DB初期化完了')
}
