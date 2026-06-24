import { useState } from 'react'
import { Plus, Sparkles, Loader2 } from 'lucide-react'
import { addSchedule } from '../../utils/scheduleStore'
import { getActiveAccountId } from '../../utils/accountStore'
import { useAccounts } from '../../hooks/useAccounts'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { loadPersona, personaToPrompt } from '../../utils/personaStore'
import { buildInstructorSystemPrompt } from '../../utils/instructorStore'
import { loadXAccountStyle } from '../../utils/xAccountStore'
import { loadSettings } from '../../utils/settingsStore'

const COLOR_CLS: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', green: 'bg-green-500',
  purple: 'bg-purple-500', orange: 'bg-orange-500',
}

const BEST_TIMES = [
  { label: '🌅 朝8時', hour: 8, min: 0 },
  { label: '☀ 昼12時', hour: 12, min: 0 },
  { label: '🌆 夕18時', hour: 18, min: 0 },
  { label: '🌙 夜21時', hour: 21, min: 0 },
]

function toLocalDatetime(d: Date) {
  const pad = (n: number) => String(n).padStart(2,'0')
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function defaultDatetime() {
  const d = new Date(); d.setDate(d.getDate()+1); d.setHours(9,0,0,0)
  return toLocalDatetime(d)
}

interface Props { initialText?: string; onAdded: () => void }

export function ScheduleCompose({ initialText = '', onAdded }: Props) {
  const { accounts } = useAccounts()
  const [selectedAccIds, setSelectedAccIds] = useState<Set<string>>(new Set())
  const [text, setText] = useState(initialText)
  const [scheduledAt, setScheduledAt] = useState(defaultDatetime)
  const [autoTheme, setAutoTheme] = useState('')
  const [autoCount, setAutoCount] = useState(5)
  const [autoDeadline, setAutoDeadline] = useState(defaultDatetime)
  const [autoLoading, setAutoLoading] = useState(false)
  const [autoError, setAutoError] = useState('')
  const [mode, setMode] = useState<'manual' | 'ai'>('manual')
  const hasKey = !!loadSettings().anthropicApiKey

  const toggleAcc = (id: string) => setSelectedAccIds(prev => {
    const n = new Set(prev)
    n.has(id) ? n.delete(id) : n.add(id)
    return n
  })

  const setBestTime = (hour: number, min: number) => {
    const d = new Date(scheduledAt)
    d.setHours(hour, min, 0, 0)
    if (d <= new Date()) d.setDate(d.getDate()+1)
    setScheduledAt(toLocalDatetime(d))
  }

  const isValid = text.trim() && new Date(scheduledAt) > new Date()

  const handleAdd = () => {
    if (!isValid) return
    const accs = accounts.filter(a => selectedAccIds.has(a.id))
    if (accs.length === 0) {
      // アカウント未選択の場合はデフォルト予約
      addSchedule({ text, platform: 'both', scheduledAt })
    } else {
      accs.forEach(acc => addSchedule({
        text, platform: (acc.platform ?? 'both'), scheduledAt,
        accountId: acc.id, accountName: acc.name, accountColor: acc.color,
      }))
    }
    setText(''); setScheduledAt(defaultDatetime()); setSelectedAccIds(new Set())
    onAdded()
  }

  const handleAutoGenerate = async () => {
    if (!autoTheme.trim() || !hasKey) return
    setAutoLoading(true); setAutoError('')
    try {
      const deadline = new Date(autoDeadline)
      if (deadline <= new Date()) { setAutoError('締め切りが過去です'); return }

      const accId = getActiveAccountId()
      const persona = personaToPrompt(loadPersona(accId))
      const knowledge = knowledgeToPrompt(loadKnowledge(accId))
      const instructorCtx = buildInstructorSystemPrompt()
      const xStyle = loadXAccountStyle()
      const styleBlock = xStyle?.posts?.trim()
        ? `【文体模倣】過去ポストの語尾・絵文字・テンションを完全コピー:\n${xStyle.posts.trim()}\n\n` : ''

      const system = `${styleBlock}XマーケティングのプロかつなまいきスクールのAI講師。
${persona ? `【キャラ設定】${persona}\n` : ''}【教材】${knowledge}
【Discord講師】${instructorCtx}
テーマに基づき${autoCount}件のポストを生成。各140文字前後。重複しない多様なアングル。
【出力形式 — JSONのみ】{"posts":["ポスト文1","ポスト文2"]}`

      const raw = await callClaude({ system, userMessage: `テーマ: ${autoTheme}\n${autoCount}件生成`, maxTokens: 2500 })
      const s = raw.replace(/```json?\s*/gi,'').replace(/```/g,'').trim()
      const start = s.indexOf('{'), end = s.lastIndexOf('}')
      const parsed = JSON.parse(s.slice(start, end+1)) as { posts: string[] }
      if (!parsed.posts?.length) throw new Error('生成失敗')

      const now = Date.now(), deadlineMs = deadline.getTime()
      const interval = (deadlineMs - now) / (parsed.posts.length + 1)
      const accs = accounts.filter(a => selectedAccIds.has(a.id))

      parsed.posts.forEach((post, i) => {
        const t = new Date(now + interval * (i + 1))
        t.setMinutes(Math.round(t.getMinutes()/5)*5, 0, 0)
        const at = toLocalDatetime(t)
        if (accs.length === 0) {
          addSchedule({ text: post, platform: 'both', scheduledAt: at })
        } else {
          accs.forEach(acc => addSchedule({
            text: post, platform: acc.platform ?? 'both', scheduledAt: at,
            accountId: acc.id, accountName: acc.name, accountColor: acc.color,
          }))
        }
      })
      setAutoTheme(''); onAdded()
    } catch(e) { setAutoError((e as Error).message) }
    finally { setAutoLoading(false) }
  }

  const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-sky-500'

  return (
    <div className="space-y-4">
      {/* モード切替 */}
      <div className="flex gap-2">
        <button onClick={() => setMode('manual')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${mode==='manual'?'bg-sky-500 text-white':'bg-gray-800 text-gray-400 hover:text-white'}`}>
          ✍️ 手動で追加
        </button>
        <button onClick={() => setMode('ai')}
          className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-colors ${mode==='ai'?'bg-purple-500 text-white':'bg-gray-800 text-gray-400 hover:text-white'}`}>
          ✨ AI一括生成
        </button>
      </div>

      {/* アカウント未登録の警告 */}
      {accounts.length === 0 && (
        <div className="rounded-2xl border border-orange-500/40 bg-orange-500/5 p-4">
          <p className="text-orange-200 text-sm font-bold mb-1">⚠️ アカウントが登録されていません</p>
          <p className="text-orange-300/70 text-xs">ツール → アカウント管理 からアカウントを登録すると、アカウントごとに文体・ペルソナが反映された予約投稿ができます。</p>
        </div>
      )}

      {/* アカウント選択（共通） */}
      {accounts.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 mb-2">投稿するアカウント（複数選択可）</p>
          <div className="flex flex-wrap gap-2">
            {accounts.map(acc => {
              const sel = selectedAccIds.has(acc.id)
              return (
                <button key={acc.id} onClick={() => toggleAcc(acc.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-sm font-bold transition-all ${sel ? 'border-white bg-gray-700 text-white' : 'border-gray-700 bg-gray-900 text-gray-400'}`}>
                  <span className={`w-3 h-3 rounded-full ${COLOR_CLS[acc.color]}`} />
                  {acc.name}
                  {sel && ' ✓'}
                </button>
              )
            })}
          </div>
          {selectedAccIds.size === 0 && <p className="text-xs text-gray-600 mt-1">未選択の場合はデフォルト設定で予約</p>}
          {selectedAccIds.size > 1 && <p className="text-xs text-sky-400 mt-1">✓ {selectedAccIds.size}アカウントに同時予約します</p>}
        </div>
      )}

      {mode === 'manual' && (
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs text-gray-400">投稿テキスト <span className="text-red-400">*</span></label>
              <span className={`text-xs font-mono font-bold ${text.length > 140 ? 'text-red-400' : text.length > 100 ? 'text-yellow-400' : 'text-gray-500'}`}>
                {text.length} / 140
              </span>
            </div>
            <textarea value={text} onChange={e => setText(e.target.value)}
              placeholder="投稿内容を入力（ポストスタジオからコピーして貼り付け）" rows={5}
              className={`${inputCls} resize-none`} />
            {/* 文字数バー */}
            <div className="mt-1.5 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  text.length > 140 ? 'bg-red-500' : text.length > 100 ? 'bg-yellow-400' : 'bg-sky-500'
                }`}
                style={{ width: `${Math.min(100, (text.length / 140) * 100)}%` }}
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-2 block">ワンタップ時刻設定</label>
            <div className="grid grid-cols-4 gap-2">
              {BEST_TIMES.map(t => (
                <button key={t.label} onClick={() => setBestTime(t.hour, t.min)}
                  className="py-2 rounded-xl border border-gray-700 hover:border-sky-500 text-xs text-gray-300 hover:text-sky-300 transition-colors">
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">投稿日時</label>
            <input type="datetime-local" value={scheduledAt} onChange={e => setScheduledAt(e.target.value)}
              min={toLocalDatetime(new Date())}
              className={`${inputCls} [color-scheme:dark]`} />
          </div>

          {!text.trim() && <p className="text-xs text-yellow-400 bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-2">⚠ テキストを入力してください</p>}
          {text.trim() && !isValid && <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">⚠ 未来の日時を選んでください</p>}

          <button onClick={handleAdd} disabled={!isValid}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-purple-600 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-3.5 rounded-xl text-sm font-bold transition-all">
            <Plus size={16} />
            {selectedAccIds.size > 1 ? `${selectedAccIds.size}アカウントに同時予約` : 'X+Threadsに予約する'}
          </button>
        </div>
      )}

      {mode === 'ai' && (
        <div className="rounded-2xl bg-gray-900 border border-purple-500/40 p-5 space-y-4">
          <p className="text-gray-400 text-xs">テーマと締め切りを指定するだけ。AIが{autoCount}件のポストを生成して等間隔で自動予約します。</p>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">ポストテーマ</label>
            <input value={autoTheme} onChange={e => setAutoTheme(e.target.value)}
              placeholder="例：AIで副業を月10万にした方法" className={inputCls} />
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-2 block">生成件数</label>
            <div className="flex gap-2">
              {[5,7,10].map(n => (
                <button key={n} onClick={() => setAutoCount(n)}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-colors ${autoCount===n?'bg-purple-500 text-white':'bg-gray-800 text-gray-400 hover:text-white'}`}>
                  {n}件
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-400 mb-1 block">締め切り日時（この時刻までに均等配置）</label>
            <input type="datetime-local" value={autoDeadline} onChange={e => setAutoDeadline(e.target.value)}
              min={toLocalDatetime(new Date())} className={`${inputCls} [color-scheme:dark]`} />
          </div>

          {!hasKey && <p className="text-yellow-400 text-xs bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-2">⚠ APIキー設定が必要です</p>}
          {autoError && <p className="text-red-400 text-xs bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">{autoError}</p>}

          <button onClick={handleAutoGenerate} disabled={autoLoading || !autoTheme.trim() || !hasKey}
            className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-400 disabled:opacity-40 text-white py-3.5 rounded-xl text-sm font-bold transition-colors">
            {autoLoading ? <><Loader2 size={16} className="animate-spin" />生成・予約中...</> : <><Sparkles size={16} />{autoCount}件をAI生成して自動予約</>}
          </button>
        </div>
      )}
    </div>
  )
}
