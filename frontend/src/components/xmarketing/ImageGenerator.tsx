import { useState } from 'react'
import { Image, Loader2, Download } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { generateImage } from '../../utils/openaiApi'
import { loadSettings } from '../../utils/settingsStore'

type Style = 'infographic' | 'simple-text' | 'illustration'
const STYLE_LABEL: Record<Style, string> = { infographic: 'インフォグラフィック風', 'simple-text': 'シンプルテキスト', illustration: '雰囲気イラスト' }

interface Props { initialPost?: string }

/** サブ機能⑦：ポスト画像生成 */
export function ImageGenerator({ initialPost = '' }: Props) {
  const [postText, setPostText] = useState(initialPost)
  const [style, setStyle] = useState<Style>('infographic')
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')
  const [step, setStep] = useState<'input' | 'prompt' | 'done'>('input')

  const handleBuildPrompt = async () => {
    if (!postText.trim()) return
    setLoading(true); setError('')
    try {
      const styleDesc = { infographic: 'infographic style, clean data visualization, Japanese text', 'simple-text': 'minimal design, large typography, white background', illustration: 'soft watercolor illustration, warm colors, mood-focused' }[style]
      const raw = await callClaude({
        system: 'あなたは画像生成AIのプロンプトエンジニアです。日本語のXポスト内容を英語の画像生成プロンプトに変換してください。50〜100語の英語プロンプトのみ返してください。',
        userMessage: `ポスト内容: ${postText}\nスタイル: ${styleDesc}`,
        maxTokens: 200,
      })
      setPrompt(raw.trim())
      setStep('prompt')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleGenerate = async () => {
    setLoading(true); setError('')
    try {
      const { openaiApiKey } = loadSettings()
      const url = await generateImage({ prompt, apiKey: openaiApiKey })
      setImageUrl(url)
      setStep('done')
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500'

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-yellow-500/10 border border-yellow-500/30 p-3 text-yellow-200 text-xs">
        ⚠️ この機能はOpenAI APIキー（DALL-E 3）が必要です。「設定」タブで入力してください。
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div>
          <label className="text-xs text-gray-400 mb-1 block">ポスト内容 *</label>
          <textarea value={postText} onChange={e => setPostText(e.target.value)} placeholder="画像化したいポスト文を入力" rows={4} className={`${inputCls} resize-none`} />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">画像スタイル</label>
          <div className="flex gap-2">
            {(Object.entries(STYLE_LABEL) as [Style, string][]).map(([k, v]) => (
              <button key={k} onClick={() => setStyle(k)} className={`flex-1 py-2 rounded-xl text-xs font-semibold border transition-colors ${style === k ? 'border-brand-500 bg-brand-500/20 text-white' : 'border-gray-700 text-gray-400'}`}>{v}</button>
            ))}
          </div>
        </div>
        <button onClick={handleBuildPrompt} disabled={loading || !postText.trim()} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          {loading && step === 'input' ? <Loader2 size={16} className="animate-spin" /> : <Image size={16} />}
          {loading && step === 'input' ? 'プロンプト生成中...' : '① プロンプトを生成する'}
        </button>
      </div>

      {(step === 'prompt' || step === 'done') && (
        <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-3">
          <label className="text-xs text-gray-400">画像生成プロンプト（編集可能）</label>
          <textarea value={prompt} onChange={e => setPrompt(e.target.value)} rows={4} className={`${inputCls} resize-none`} />
          <button onClick={handleGenerate} disabled={loading} className="flex items-center gap-2 bg-purple-500 hover:bg-purple-400 disabled:opacity-40 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
            {loading && step === 'prompt' ? <Loader2 size={16} className="animate-spin" /> : <Image size={16} />}
            {loading && step === 'prompt' ? 'DALL-E 3 で生成中...' : '② 画像を生成する'}
          </button>
        </div>
      )}

      {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}

      {imageUrl && (
        <div className="rounded-2xl bg-gray-900 border border-gray-700 p-4 space-y-3">
          <p className="text-white font-bold text-sm">✅ 生成完了！</p>
          <img src={imageUrl} alt="生成された画像" className="w-full rounded-xl" />
          <a href={imageUrl} download="post-image.png" target="_blank" rel="noreferrer" className="flex items-center gap-2 justify-center text-sm text-gray-400 border border-gray-700 rounded-xl px-4 py-2 hover:border-gray-600 transition-colors">
            <Download size={14} /> ダウンロード
          </a>
        </div>
      )}
    </div>
  )
}
