import { X as XIcon } from 'lucide-react'
import type { Platform } from '../utils/accountStore'

interface Props {
  text: string
  platform: Platform
  category?: string
  media?: string[]          // プレビュー用dataURL
  accountName: string
  accountAvatar?: string
  handle?: string
  onClose: () => void
}

// X / Threads 風の見た目で投稿前確認するモーダル
export function PostPreview({ text, platform, category, media, accountName, accountAvatar, handle, onClose }: Props) {
  const showX = platform === 'x' || platform === 'both'
  const showThreads = platform === 'threads' || platform === 'both'
  const threadsText = category?.trim() ? `${text}\n#${category.trim().replace(/^#/, '').replace(/\s+/g, '')}` : text

  const Card = ({ label, body, accent }: { label: string; body: string; accent: string }) => (
    <div className="bg-black border border-gray-800 rounded-2xl p-4">
      <div className={`text-xs font-bold mb-2 ${accent}`}>{label} プレビュー</div>
      <div className="flex gap-3">
        {accountAvatar
          ? <img src={accountAvatar} alt={accountName} className="w-10 h-10 rounded-full object-cover shrink-0" />
          : <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0" />}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-white font-bold truncate">{accountName}</span>
            {handle && <span className="text-gray-500 truncate">@{handle}</span>}
          </div>
          <p className="text-gray-100 text-sm whitespace-pre-wrap break-words mt-0.5">{body || '(本文なし)'}</p>
          {media && media.length > 0 && (
            <div className="grid grid-cols-2 gap-1.5 mt-2">
              {media.map((m, i) => (
                <img key={i} src={m} alt="" className="rounded-xl w-full h-28 object-cover" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-md space-y-3" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-black">投稿プレビュー</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1"><XIcon size={20} /></button>
        </div>
        {showX && <Card label="𝕏 X" body={text} accent="text-sky-400" />}
        {showThreads && <Card label="🧵 Threads" body={threadsText} accent="text-purple-400" />}
        <button onClick={onClose} className="w-full py-3 rounded-2xl bg-gray-800 text-white font-bold">閉じる</button>
      </div>
    </div>
  )
}
