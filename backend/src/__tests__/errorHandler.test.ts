import { describe, it, expect } from 'vitest'
import { createError } from '../middleware/errorHandler'

describe('createError', () => {
  it('メッセージとstatusCodeを持つエラーを生成する', () => {
    const err = createError('テストエラー', 400)
    expect(err.message).toBe('テストエラー')
    expect(err.statusCode).toBe(400)
  })

  it('Errorのインスタンスである', () => {
    const err = createError('エラー', 500)
    expect(err).toBeInstanceOf(Error)
  })

  it('401エラーを生成できる', () => {
    const err = createError('認証が必要です', 401)
    expect(err.statusCode).toBe(401)
  })

  it('404エラーを生成できる', () => {
    const err = createError('見つかりません', 404)
    expect(err.statusCode).toBe(404)
  })
})
