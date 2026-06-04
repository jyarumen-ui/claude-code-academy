import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { initDb } from './models/db'
import { authRouter } from './routes/auth'
import { progressRouter } from './routes/progress'
import { communityRouter } from './routes/community'
import { socialRouter } from './routes/social'
import { errorHandler } from './middleware/errorHandler'

const app = express()
const PORT = process.env.PORT ?? 3001

app.use(helmet())
app.use(cors({ origin: ['http://localhost:5173', 'http://100.93.153.25:5173'] }))
app.use(express.json({ limit: '15mb' })) // メディアのbase64アップロードに対応

// ヘルスチェック
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRouter)
app.use('/api/progress', progressRouter)
app.use('/api/community', communityRouter)
app.use('/api/social', socialRouter)

app.use(errorHandler)

initDb()

app.listen(PORT, () => {
  console.log(`🚀 Backend API: http://localhost:${PORT}`)
})
