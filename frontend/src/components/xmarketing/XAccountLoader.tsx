import { useState, useEffect } from 'react'
import { Twitter, Check, ChevronDown, ChevronUp } from 'lucide-react'
import { loadXAccountStyle, saveXAccountStyle } from '../../utils/xAccountStore'

export function XAccountLoader() {
  const [open, setOpen] = useState(false)
  const [url, setUrl] = useState('')
  const [posts, setPosts] = useState('')
  const [saved, setSaved] = useState(false)

  // 起動時にlocalStorageから復元
  useEffect(() => {
    const s = loadXAccountStyle()
    if (s) {
      setUrl(s.url ?? '')
      setPosts(s.posts ?? '')
    } else {
      setOpen(true)
    }
  }, [])

  // URL変更時は即座に保存
  const handleUrlChange = (v: string) => {
    setUrl(v)
    saveXAccountStyle({ url: v, posts, savedAt: new Date().toISOString() })
  }

  // ポスト変更時も即座に保存
  const handlePostsChange = (v: string) => {
    setPosts(v)
    saveXAccountStyle({ url, posts: v, savedAt: new Date().toISOString() })
  }

  const handleSave = () => {
    saveXAccountStyle({ url, posts, savedAt: new Date().toISOString() })
    setSaved(true)
    setOpen(false)
    setTimeout(() => setSaved(false), 2000)
  }

  const isReady = posts.trim().length > 0

  return (
    <div className="rounded-2xl bg-gray-900 border border-gray-700 overflow-hidden">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-800 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Twitter size={15} className="text-sky-400" />
          <span className="text-white text-sm font-bold">あなたのXアカウント</span>
          {url && <span className="text-sky-300 text-xs">{url.replace('https://x.com/', '@')}</span>}
          {isReady
            ? <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">✅ スタイル学習済み</span>
            : <span className="text-xs text-yellow-400 bg-yellow-500/10 px-2 py-0.5 rounded-full">ポストを追加してください</span>
          }
        </div>
        {open ? <ChevronUp size={15} className="text-gray-400" /> : <ChevronDown size={15} className="text-gray-400" />}
      </button>

      {open && (
        <div className="px-5 pb-5 space-y-3 border-t border-gray-800 pt-4">
          <div>
            <label className="text-xs text-gray-400 mb-1 block">XプロフィールURL</label>
            <input
              value={url}
              onChange={e => handleUrlChange(e.target.value)}
              placeholder="https://x.com/username"
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="text-xs text-gray-400 mb-1 block">過去のポスト（5〜10件をコピペ）</label>
            <p className="text-gray-500 text-xs mb-2">「---」で区切って複数貼ると語尾・絵文字・文体を学習します</p>
            <textarea
              value={posts}
              onChange={e => handlePostsChange(e.target.value)}
              placeholder={"AIで作業を自動化したら月10時間浮きました✨\n---\n副業で稼ぎたいなら、まずこれを読んで👇\n---\n正直に言います。最初は全然稼げなかった…"}
              rows={7}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none"
            />
          </div>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors"
          >
            <Check size={14} />
            {saved ? '保存しました！' : '閉じる・保存'}
          </button>
        </div>
      )}
    </div>
  )
}
