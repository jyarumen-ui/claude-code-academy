import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { createError } from './errorHandler'

export interface AuthRequest extends Request {
  userId?: number
}

export function requireAuth(req: AuthRequest, _res: Response, next: NextFunction): void {
  const header = req.headers.authorization
  if (!header?.startsWith('Bearer ')) {
    return next(createError('認証が必要です', 401))
  }

  const token = header.slice(7)
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET ?? '') as { userId: number }
    req.userId = payload.userId
    next()
  } catch {
    next(createError('無効なトークンです', 401))
  }
}
