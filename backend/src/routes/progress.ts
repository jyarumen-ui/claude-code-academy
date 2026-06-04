import { Router, Response, NextFunction } from 'express'
import { db } from '../models/db'
import { requireAuth, AuthRequest } from '../middleware/auth'
import { createError } from '../middleware/errorHandler'

export const progressRouter = Router()
progressRouter.use(requireAuth)

// GET /api/progress
progressRouter.get('/', (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    db.read()
    const record = db.data.progress.find((p) => p.userId === req.userId)
    res.json({ data: record?.data ?? null })
  } catch (err) { next(err) }
})

// POST /api/progress
progressRouter.post('/', (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { data } = req.body as { data?: unknown }
    if (!data) return next(createError('data は必須です', 400))

    db.read()
    const idx = db.data.progress.findIndex((p) => p.userId === req.userId)
    const record = { userId: req.userId as number, data, updatedAt: new Date().toISOString() }

    if (idx >= 0) {
      db.data.progress[idx] = record
    } else {
      db.data.progress.push(record)
    }
    db.write()
    res.json({ ok: true })
  } catch (err) { next(err) }
})
