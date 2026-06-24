import { Router, Request, Response, NextFunction } from 'express'
import { db, Post } from '../models/db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { createError } from '../middleware/errorHandler'

export const communityRouter = Router()

const ALLOWED_CATEGORIES = ['general', 'question', 'tip', 'showcase']

// GET /api/community/posts
communityRouter.get('/posts', (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category, limit = '20', offset = '0' } = req.query as Record<string, string>
    db.read()

    let posts: Post[] = [...db.data.posts].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    if (category && category !== 'all') {
      posts = posts.filter((p) => p.category === category)
    }

    const paginated = posts.slice(Number(offset), Number(offset) + Number(limit))

    const result = paginated.map((p) => {
      const user = db.data.users.find((u) => u.id === p.userId)
      return {
        id: p.id,
        userId: p.userId,
        nickname: user?.nickname ?? '不明',
        content: p.content,
        category: p.category,
        likes: p.likes,
        createdAt: p.createdAt,
      }
    })

    res.json({ posts: result })
  } catch (err) { next(err) }
})

// POST /api/community/posts
communityRouter.post('/posts', requireAuth, (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { content, category = 'general' } = req.body as { content?: string; category?: string }
    if (!content?.trim()) return next(createError('content は必須です', 400))
    if (content.length > 1000) return next(createError('投稿は1000文字以内にしてください', 400))
    if (!ALLOWED_CATEGORIES.includes(category)) return next(createError('無効なカテゴリです', 400))

    db.read()
    const id = db.data.nextPostId++
    db.data.posts.push({
      id, userId: req.userId as number,
      content: content.trim(), category, likes: 0,
      likedBy: [], createdAt: new Date().toISOString(),
    })
    db.write()

    res.status(201).json({ id })
  } catch (err) { next(err) }
})

// POST /api/community/posts/:id/like
communityRouter.post('/posts/:id/like', requireAuth, (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const postId = Number(req.params.id)
    if (isNaN(postId)) return next(createError('無効なpost IDです', 400))

    db.read()
    const post = db.data.posts.find((p) => p.id === postId)
    if (!post) return next(createError('投稿が見つかりません', 404))

    const userId = req.userId as number
    const alreadyLiked = post.likedBy.includes(userId)

    if (alreadyLiked) {
      post.likedBy = post.likedBy.filter((id) => id !== userId)
      post.likes--
    } else {
      post.likedBy.push(userId)
      post.likes++
    }
    db.write()

    res.json({ liked: !alreadyLiked, likes: post.likes })
  } catch (err) { next(err) }
})

// DELETE /api/community/posts/:id
communityRouter.delete('/posts/:id', requireAuth, (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const postId = Number(req.params.id)
    if (isNaN(postId)) return next(createError('無効なpost IDです', 400))

    db.read()
    const idx = db.data.posts.findIndex((p) => p.id === postId)
    if (idx < 0) return next(createError('投稿が見つかりません', 404))
    if (db.data.posts[idx].userId !== req.userId) return next(createError('削除権限がありません', 403))

    db.data.posts.splice(idx, 1)
    db.write()

    res.json({ ok: true })
  } catch (err) { next(err) }
})
