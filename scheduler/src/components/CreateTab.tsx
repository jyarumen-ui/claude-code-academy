import { useState, useRef } from 'react'
import { Plus, Trash2, Send, X as XIcon, Sparkles, RefreshCw, FileText, Image as ImageIcon, Eye, Save } from 'lucide-react'
import { useAccounts } from '../hooks/useAccounts'
import { addPostAsync } from '../utils/scheduleStore'
import { setActive, type Platform } from '../utils/accountStore'
import { generatePosts, uploadMedia, hasBackend } from '../utils/api'
import { loadTemplates } from '../utils/templateStore'
import { PostPreview } from './PostPreview'

// プラットフォーム別の文字数上限（Threadsは500、X/両方は280に合わせる）
function charLimit(platform: Platform): number {
  return platform === 'threads' ? 500 : 280
}

const PLATFORM_COLOR: Record<string, string> = {
  sky: 'bg-sky-500', pink: 'bg-pink-500', purple: 'bg-purple-500',
  green: 'bg-green-500', orange: 'bg-orange-500',
}

// ── ダイヤル部品 ───────────────────────────
function Dial({ value, min, max, step = 1, pad = 2, onChange }: {
  value: number; min: number; max: number; step?: number; pad?: number
  onChange: (v: number) => void
}) {
  const inc = () => { const n = value + step; onChange(n > max ? min : n) }
  const dec = () => { const n = value - step; onChange(n < min ? max : n) }

  return (
    <div className="flex flex-col items-center select-none">
      <button onClick={inc}
        className="text-gray-400 hover:text-white active:text-sky-400 transition-colors text-2xl w-12 h-10 flex items-center justify-center">
        ▲
      </button>
      <div className="bg-gray-800 border border-gray-600 rounded-2xl w-16 h-16 flex items-center justify-center">
        <span className="text-white font-black text-3xl tabular-nums">
          {String(value).padStart(pad, '0')}
        </span>
      </div>
      <button onClick={dec}
        className="text-gray-400 hover:text-white active:text-sky-400 transition-colors text-2xl w-12 h-10 flex items-center justify-center">
        ▼
      </button>
    </div>
  )
}

// ── 日付横スクロール ─────────────────────────
function DateScroll({ selected, onChange }: { selected: Date; onChange: (d: Date) => void }) {
  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i); d.setHours(0,0,0,0); return d
  })
  const DAY = ['日','月','火','水','木','金','土']

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {days.map(d => {
        const isSelected = d.toDateString() === selected.toDateString()
        const isToday = d.toDateString() === new Date().toDateString()
        return (
          <button key={d.toDateString()} onClick={() => onChange(d)}
            className={`shrink-0 flex flex-col items-center py-2 px-3 rounded-2xl transition-all ${
              isSelected ? 'bg-sky-500 text-white' : 'bg-gray-900 border border-gray-700 text-gray-400 hover:border-gray-500'
            }`}>
            <span className="text-xs font-semibold">{isToday ? '今日' : `${d.getMonth()+1}/${d.getDate()}`}</span>
            <span className={`text-lg font-black ${isSelected ? '' : ['text-red-400','text-white','text-white','text-white','text-white','text-white','text-blue-400'][d.getDay()]}`}>
              {DAY[d.getDay()]}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// ── 時刻ダイヤル ─────────────────────────────
function TimePicker({ date, onChange }: { date: Date; onChange: (d: Date) => void }) {
  const setH = (h: number) => { const d = new Date(date); d.setHours(h); onChange(d) }
  const setM = (m: number) => { const d = new Date(date); d.setMinutes(m); onChange(d) }

  return (
    <div className="flex items-center justify-center gap-3">
      <Dial value={date.getHours()} min={0} max={23} onChange={setH} />
      <span className="text-white font-black text-4xl pb-1">:</span>
      <Dial value={date.getMinutes()} min={0} max={55} step={5} onChange={setM} />
    </div>
  )
}

// ── 投稿1件 ──────────────────────────────────
interface MediaItem { id?: string; preview: string; name: string; uploading?: boolean }
interface PostEntry { text: string; date: Date; category?: string; media?: MediaItem[] }

function PostItem({ entry, index, total, charMax, showCategory, socialSetId, platform, accountName, accountAvatar, handle, onUpdate, onDelete }: {
  entry: PostEntry; index: number; total: number; charMax: number; showCategory: boolean
  socialSetId?: string; platform: Platform; accountName: string; accountAvatar?: string; handle?: string
  onUpdate: (fn: (e: PostEntry) => PostEntry) => void; onDelete: () => void
}) {
  const over = entry.text.length > charMax
  const [showTpl, setShowTpl] = useState(false)
  const [showPrev, setShowPrev] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)
  const templates = loadTemplates()
  const set = (patch: Partial<PostEntry>) => onUpdate(e => ({ ...e, ...patch }))

  // 画像/動画を選択 → プレビュー作成 → backend経由でアップロードしmedia_id取得
  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return
    for (const file of Array.from(files).slice(0, 4)) {
      const preview = await new Promise<string>(res => {
        const r = new FileReader(); r.onload = () => res(String(r.result)); r.readAsDataURL(file)
      })
      const item: MediaItem = { preview, name: file.name, uploading: hasBackend }
      onUpdate(e => ({ ...e, media: [...(e.media ?? []), item] }))
      if (hasBackend) {
        try {
          const { mediaId } = await uploadMedia(file.name, preview, socialSetId)
          onUpdate(e => ({ ...e, media: (e.media ?? []).map(m => m.preview === preview ? { ...m, id: mediaId, uploading: false } : m) }))
        } catch {
          onUpdate(e => ({ ...e, media: (e.media ?? []).map(m => m.preview === preview ? { ...m, uploading: false } : m) }))
        }
      }
    }
  }
  const removeMedia = (i: number) => onUpdate(e => ({ ...e, media: (e.media ?? []).filter((_, idx) => idx !== i) }))

  return (
    <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 space-y-3">
      {showPrev && (
        <PostPreview text={entry.text} platform={platform} category={entry.category}
          media={(entry.media ?? []).map(m => m.preview)}
          accountName={accountName} accountAvatar={accountAvatar} handle={handle}
          onClose={() => setShowPrev(false)} />
      )}
      <div className="flex items-center justify-between">
        <span className="text-sky-400 text-sm font-black">#{index + 1}</span>
        <div className="flex items-center gap-1">
          <button onClick={() => setShowTpl(s => !s)} className="text-gray-500 hover:text-sky-400 p-1 transition-colors" title="テンプレ"><FileText size={15} /></button>
          <button onClick={() => fileRef.current?.click()} className="text-gray-500 hover:text-sky-400 p-1 transition-colors" title="画像/動画"><ImageIcon size={15} /></button>
          <button onClick={() => setShowPrev(true)} className="text-gray-500 hover:text-sky-400 p-1 transition-colors" title="プレビュー"><Eye size={15} /></button>
          {total > 1 && (
            <button onClick={onDelete} className="text-gray-700 hover:text-red-400 p-1 transition-colors"><Trash2 size={15} /></button>
          )}
        </div>
      </div>
      <input ref={fileRef} type="file" accept="image/*,video/mp4,video/quicktime" multiple hidden
        onChange={e => { void handleFiles(e.target.files); e.target.value = '' }} />

      {/* テンプレ一覧 */}
      {showTpl && (
        <div className="bg-gray-800 rounded-xl p-2 space-y-1 max-h-44 overflow-y-auto">
          {templates.map(t => (
            <button key={t.id} onClick={() => { set({ text: t.text }); setShowTpl(false) }}
              className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span className="text-white text-xs font-bold">{t.title}</span>
              <span className="block text-gray-500 text-[11px] truncate">{t.text.replace(/\n/g, ' ')}</span>
            </button>
          ))}
        </div>
      )}

      {/* テキスト */}
      <textarea value={entry.text}
        onChange={e => set({ text: e.target.value })}
        placeholder="投稿内容を入力..."
        rows={3}
        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500 resize-none transition-colors" />

      {/* 添付メディア */}
      {(entry.media ?? []).length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {(entry.media ?? []).map((m, i) => (
            <div key={i} className="relative w-16 h-16">
              <img src={m.preview} alt={m.name} className="w-16 h-16 rounded-lg object-cover" />
              {m.uploading && <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center text-white text-[10px]">送信中</div>}
              <button onClick={() => removeMedia(i)} className="absolute -top-1.5 -right-1.5 bg-gray-900 rounded-full p-0.5 text-gray-400 hover:text-red-400"><XIcon size={12} /></button>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${over ? 'bg-red-500' : entry.text.length > charMax * 0.8 ? 'bg-yellow-400' : 'bg-sky-500'}`}
            style={{ width: `${Math.min(100, (entry.text.length / charMax) * 100)}%` }} />
        </div>
        <span className={`text-xs font-mono shrink-0 ${over ? 'text-red-400' : 'text-gray-600'}`}>{entry.text.length}/{charMax}</span>
      </div>

      {/* Threadsカテゴリ（トピック/コミュニティ） */}
      {showCategory && (
        <div className="flex items-center gap-2">
          <span className="text-purple-400 text-xs font-bold shrink-0">🧵 カテゴリ</span>
          <input value={entry.category ?? ''}
            onChange={e => set({ category: e.target.value })}
            placeholder="トピック / コミュニティ（例：占い）"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors" />
        </div>
      )}

      {/* 日付＋時刻 */}
      <div className="space-y-3 pt-1">
        <DateScroll selected={entry.date} onChange={d => set({
          date: (() => { const nd = new Date(entry.date); nd.setFullYear(d.getFullYear(), d.getMonth(), d.getDate()); return nd })(),
        })} />
        <TimePicker date={entry.date} onChange={d => set({ date: d })} />
      </div>
    </div>
  )
}

// ── メイン ────────────────────────────────────
function defaultDate(offsetHours = 0): Date {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  d.setHours(9 + offsetHours, 0, 0, 0)
  return d
}

interface Props { onDone: () => void }

export function CreateTab({ onDone }: Props) {
  const { accounts, activeId, active } = useAccounts()
  const [platform, setPlatform] = useState<Platform>('both')
  const [entries, setEntries] = useState<PostEntry[]>([{ text: '', date: defaultDate() }])
  const [done, setDone] = useState(false)
  const [theme, setTheme] = useState('')
  const [aiBusy, setAiBusy] = useState(false)
  const [aiErr, setAiErr] = useState('')

  const charMax = charLimit(platform)

  const addEntry = () => {
    if (entries.length >= 10) return
    setEntries(prev => [...prev, { text: '', date: defaultDate(prev.length) }])
  }

  const updateEntry = (i: number, fn: (e: PostEntry) => PostEntry) => setEntries(prev => prev.map((p, idx) => idx === i ? fn(p) : p))
  const deleteEntry = (i: number) => setEntries(prev => prev.filter((_, idx) => idx !== i))

  // AIで投稿文を生成し、各投稿欄に流し込む
  const handleGenerate = async () => {
    if (!theme.trim() || aiBusy) return
    setAiBusy(true); setAiErr('')
    try {
      const { posts } = await generatePosts(theme.trim(), platform, Math.max(entries.length, 1))
      if (posts.length === 0) throw new Error('生成結果が空でした')
      setEntries(prev => prev.map((e, i) => posts[i] ? { ...e, text: posts[i] } : e))
    } catch (e) {
      setAiErr(e instanceof Error ? e.message : '生成に失敗しました')
    } finally { setAiBusy(false) }
  }

  const hasText = entries.some(e => e.text.trim())
  const canSubmit = hasText && !!active && entries.every(e => e.text.length <= charMax)

  const handleSubmit = async (status: 'scheduled' | 'draft' = 'scheduled') => {
    if (!active || !hasText) return
    await Promise.all(entries.filter(e => e.text.trim()).map(e => {
      const media = (e.media ?? []).map(m => m.id).filter((x): x is string => !!x)
      return addPostAsync({
        text: e.text.trim(), platform,
        scheduledAt: e.date.toISOString(),
        status,
        accountId: active.id, accountName: active.name,
        accountColor: active.color, accountAvatar: active.profileImageUrl,
        threadsCategory: e.category?.trim() || undefined,
        mediaIds: media.length ? media : undefined,
        mediaPreviews: (e.media ?? []).map(m => m.preview),
      })
    }))
    setDone(true)
    setTimeout(() => { setDone(false); setEntries([{ text: '', date: defaultDate() }]); onDone() }, 1200)
  }

  return (
    <div className="px-4 py-5 space-y-5">

      {/* アカウント選択 */}
      {accounts.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {accounts.map(acc => (
            <button key={acc.id} onClick={() => setActive(acc.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-2xl border transition-all ${
                activeId === acc.id ? 'border-sky-500 bg-sky-500/10' : 'border-gray-700 bg-gray-900 hover:border-gray-600'
              }`}>
              {acc.profileImageUrl
                ? <img src={acc.profileImageUrl} alt={acc.name} className="w-6 h-6 rounded-full object-cover" />
                : <div className={`w-6 h-6 rounded-full ${PLATFORM_COLOR[acc.color]} flex items-center justify-center text-white text-xs font-black`}>{acc.name[0]}</div>
              }
              <span className="text-white text-sm font-semibold">{acc.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* 投稿先 */}
      <div className="grid grid-cols-3 gap-2">
        {([
          { id: 'x', icon: '𝕏', label: 'X' },
          { id: 'threads', icon: '🧵', label: 'Threads' },
          { id: 'both', icon: '✦', label: '両方' },
        ] as { id: Platform; icon: string; label: string }[]).map(p => (
          <button key={p.id} onClick={() => setPlatform(p.id)}
            className={`py-2.5 rounded-2xl border text-center transition-all ${
              platform === p.id
                ? p.id === 'x' ? 'border-sky-500 bg-sky-500/15 text-sky-300'
                : p.id === 'threads' ? 'border-purple-500 bg-purple-500/15 text-purple-300'
                : 'border-green-500 bg-green-500/15 text-green-300'
                : 'border-gray-700 bg-gray-900 text-gray-500 hover:border-gray-600'
            }`}>
            <div className="text-lg">{p.icon}</div>
            <div className="text-xs font-bold">{p.label}</div>
          </button>
        ))}
      </div>

      {/* AI生成 */}
      <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-sky-500/30 p-4 space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-sky-400" />
          <span className="text-white text-sm font-bold">AIで投稿文を作る</span>
        </div>
        <div className="flex gap-2">
          <input value={theme} onChange={e => setTheme(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') void handleGenerate() }}
            placeholder="テーマを入力（例：大殺界の過ごし方）"
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500 transition-colors" />
          <button onClick={handleGenerate} disabled={!theme.trim() || aiBusy}
            className="shrink-0 flex items-center gap-1.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-gray-800 disabled:text-gray-600 text-white text-sm font-bold transition-colors active:scale-95">
            <Sparkles size={14} />{aiBusy ? '生成中...' : '生成'}
          </button>
          {entries.some(e => e.text.trim()) && (
            <button onClick={handleGenerate} disabled={!theme.trim() || aiBusy} title="作り直す"
              className="shrink-0 flex items-center px-3 rounded-xl border border-sky-500/40 text-sky-300 hover:bg-sky-500/10 disabled:opacity-40 transition-colors active:scale-95">
              <RefreshCw size={14} className={aiBusy ? 'animate-spin' : ''} />
            </button>
          )}
        </div>
        {aiErr && <p className="text-red-400 text-xs">{aiErr}</p>}
        <p className="text-gray-600 text-[11px]">現在の投稿欄の数だけ生成して流し込みます（最大5本）。</p>
      </div>

      {/* 投稿リスト */}
      <div className="space-y-4">
        {entries.map((entry, i) => (
          <PostItem key={i} entry={entry} index={i} total={entries.length} charMax={charMax}
            showCategory={platform === 'threads' || platform === 'both'}
            socialSetId={active?.typefullySocialSetId} platform={platform}
            accountName={active?.name ?? ''} accountAvatar={active?.profileImageUrl}
            handle={platform === 'threads' ? active?.handleThreads : active?.handle}
            onUpdate={fn => updateEntry(i, fn)} onDelete={() => deleteEntry(i)} />
        ))}
      </div>

      {/* 追加ボタン */}
      {entries.length < 10 && (
        <button onClick={addEntry}
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl border border-dashed border-gray-600 hover:border-sky-500 text-gray-500 hover:text-sky-400 text-sm font-semibold transition-colors">
          <Plus size={16} />投稿を追加（{entries.length}/10）
        </button>
      )}

      {/* 予約ボタン */}
      <div className="space-y-2 pb-2">
        <button onClick={() => handleSubmit('scheduled')} disabled={!canSubmit || done}
          className={`w-full py-4 rounded-2xl font-black text-base transition-all ${
            done ? 'bg-green-500 text-white' :
            !canSubmit ? 'bg-gray-800 text-gray-600 cursor-not-allowed' :
            'bg-sky-500 hover:bg-sky-400 active:scale-[0.98] text-white shadow-lg shadow-sky-500/25'
          }`}>
          {done ? '✅ 保存しました！' :
            <span className="flex items-center justify-center gap-2">
              <Send size={18} />
              {entries.filter(e => e.text.trim()).length > 1
                ? `${entries.filter(e => e.text.trim()).length}件をまとめて予約`
                : '予約する'}
            </span>
          }
        </button>
        <button onClick={() => handleSubmit('draft')} disabled={!hasText || done}
          className="w-full py-3 rounded-2xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 disabled:opacity-40 text-sm font-bold transition-colors flex items-center justify-center gap-2">
          <Save size={15} />下書き保存
        </button>
        <button onClick={onDone} className="w-full py-3 rounded-2xl border border-gray-800 text-gray-500 hover:text-white text-sm font-semibold transition-colors flex items-center justify-center gap-2">
          <XIcon size={15} />キャンセル
        </button>
        <p className="text-gray-600 text-xs text-center leading-relaxed pt-1">
          ⏱️ 予約時刻ちょうどではなく、<span className="text-gray-400">最大5分後</span>に自動投稿されます（システムが5分ごとにチェックするため）。すぐに反映されなくても故障ではありません。
        </p>
      </div>
    </div>
  )
}
