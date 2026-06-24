import { describe, it, expect, vi } from 'vitest'
import { requireAuth } from '../middleware/auth'
import { createError } from '../middleware/errorHandler'
import type { AuthRequest } from '../middleware/auth'
import type { Response, NextFunction } from 'express'

function mockRes(): Response {
  return {} as Response
}

function mockNext(): NextFunction & { calls: unknown[][] } {
  const fn = vi.fn() as unknown as NextFunction & { calls: unknown[][] }
  fn.calls = (fn as ReturnType<typeof vi.fn>).mock.calls
  return fn
}

describe('requireAuth', () => {
  it('Authorizationヘッダーがない場合は401エラー', () => {
    const req = { headers: {} } as AuthRequest
    const next = mockNext()
    requireAuth(req, mockRes(), next)
    expect(next).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 401 }))
  })

  it('Bearer プレフィックスがない場合は401エラー', () => {
    const req = { headers: { authorization: 'Token abc' } } as AuthRequest
    const next = mockNext()
    requireAuth(req, mockRes(), next)
    expect(next).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 401 }))
  })

  it('無効なトークンの場合は401エラー', () => {
    const req = { headers: { authorization: 'Bearer invalidtoken' } } as AuthRequest
    const next = mockNext()
    requireAuth(req, mockRes(), next)
    expect(next).toHaveBeenCalledWith(expect.objectContaining({ statusCode: 401 }))
  })
})
