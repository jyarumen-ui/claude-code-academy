import { Router, Request, Response, NextFunction } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../models/db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { createError } from '../middleware/errorHandler'

export const authRouter = Router()

// POST /api/auth/register
authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { nickname, email, password } = req.body as {
      nickname?: string; email?: string; password?: string
    }
    if (!nickname || !email || !password) return next(createError('nickname・email・password は必須です', 400))
    if (password.length < 8) return next(createError('パスワードは8文字以上で設定してください', 400))

    db.read()
    const existing = db.data.users.find((u) => u.email === email)
    if (existing) return next(createError('このメールアドレスは既に登録されています', 409))

    const hash = await bcrypt.hash(password, 10)
    const id = db.data.nextUserId++
    db.data.users.push({ id, nickname, email, password: hash, createdAt: new Date().toISOString() })
    db.write()

    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET ?? '', { expiresIn: '30d' })
    res.status(201).json({ token, nickname, email })
  } catch (err) { next(err) }
})

// POST /api/auth/login
authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body as { email?: string; password?: string }
    if (!email || !password) return next(createError('email・password は必須です', 400))

    db.read()
    const user = db.data.users.find((u) => u.email === email)
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return next(createError('メールアドレスまたはパスワードが正しくありません', 401))
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET ?? '', { expiresIn: '30d' })
    res.json({ token, nickname: user.nickname, email: user.email })
  } catch (err) { next(err) }
})

// GET /api/auth/me
authRouter.get('/me', requireAuth, (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    db.read()
    const user = db.data.users.find((u) => u.id === req.userId)
    if (!user) return next(createError('ユーザーが見つかりません', 404))
    res.json({ id: user.id, nickname: user.nickname, email: user.email, createdAt: user.createdAt })
  } catch (err) { next(err) }
})
