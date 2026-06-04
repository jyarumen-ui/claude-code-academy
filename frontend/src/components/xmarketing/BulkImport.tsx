import { useRef, useState } from 'react'
import { Upload, FileJson, ExternalLink } from 'lucide-react'
import { importDiscordJson, importScraperJson } from '../../utils/knowledgeStore'

interface ImportResult { imported: number; skipped: number; label: string }

function DropZone({ label, icon, onFile }: { label: string; icon: React.ReactNode; onFile: (f: File) => void }) {
  const ref = useRef<HTMLInputElement>(null)
  const [drag, setDrag] = useState(false)
  const handle = (f: File) => { if (f.name.endsWith('.json')) onFile(f) }
  return (
    <div
      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-colors ${drag ? 'border-brand-400 bg-brand-500/10' : 'border-gray-700 hover:border-gray-600'}`}
      onDragOver={e => { e.preventDefault(); setDrag(true) }}
      onDragLeave={() => setDrag(false)}
      onDrop={e => { e.preventDefault(); setDrag(false); const f = e.dataTransfer.files[0]; if (f) handle(f) }}
      onClick={() => ref.current?.click()}
    >
      <input ref={ref} type="file" accept=".json" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handle(f) }} />
      <div className="flex flex-col items-center gap-2">
        <div className="text-brand-400">{icon}</div>
        <p className="text-white text-sm font-semibold">{label}</p>
        <p className="text-gray-500 text-xs">クリックまたはドラッグ&ドロップ（.jsonのみ）</p>
      </div>
    </div>
  )
}

/** 教材・Discord一括インポートシステム（機能A〜D） */
export function BulkImport() {
  const [result, setResult] = useState<ImportResult | null>(null)
  const [error, setError] = useState('')

  const handle = async (file: File, type: 'discord' | 'scraper') => {
    setResult(null); setError('')
    try {
      const text = await file.text()
      const json = JSON.parse(text) as unknown
      const r = type === 'discord' ? importDiscordJson(json) : importScraperJson(json)
      setResult({ ...r, label: type === 'discord' ? 'Discordメッセージ' : '教材' })
    } catch (e) {
      setError((e as Error).message)
    }
  }

  return (
    <div className="space-y-8">
      {/* A: Discord */}
      <div className="space-y-4">
        <h3 className="text-white font-bold flex items-center gap-2"><span className="text-brand-400">A.</span> Discord History Tracker からインポート</h3>
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 space-y-2 text-xs text-gray-400">
          <p className="text-white text-sm font-semibold">📋 使い方</p>
          <ol className="space-y-1 list-decimal list-inside">
            <li>Chrome拡張「Discord History Tracker」をインストール
              <a href="https://dht.chylex.com" target="_blank" rel="noreferrer" className="text-brand-400 hover:underline ml-1 inline-flex items-center gap-0.5">dht.chylex.com <ExternalLink size={10} /></a>
            </li>
            <li>Discordをブラウザで開き、対象チャンネルを開く</li>
            <li>拡張アイコン→「Track This Channel」でメッセージを取得</li>
            <li>完了後「Save」でJSONをダウンロード</li>
            <li>下にJSONをアップロード</li>
          </ol>
        </div>
        <DropZone label="Discord History TrackerのJSONを選択" icon={<Upload size={28} />} onFile={f => handle(f, 'discord')} />
      </div>

      {/* D: スクレイパーJSON */}
      <div className="space-y-4">
        <h3 className="text-white font-bold flex items-center gap-2"><span className="text-brand-400">D.</span> スクリプト生成JSONをインポート</h3>
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4 text-xs text-gray-400">
          <p className="text-white text-sm font-semibold mb-2">📋 使い方</p>
          <p>1. <code className="text-green-400">python tools/scraper.py</code> を実行して <code className="text-green-400">output/knowledge.json</code> を生成</p>
          <p className="mt-1">2. 下にそのJSONファイルをアップロード</p>
        </div>
        <DropZone label="スクリプト生成のJSONファイルを選択" icon={<FileJson size={28} />} onFile={f => handle(f, 'scraper')} />
      </div>

      {/* 結果 */}
      {result && (
        <div className="rounded-xl bg-green-500/10 border border-green-500/30 p-4 text-green-200 text-sm">
          ✅ <strong>{result.imported}件</strong>の{result.label}を取り込みました！（スキップ: {result.skipped}件）
        </div>
      )}
      {error && (
        <div className="rounded-xl bg-red-500/10 border border-red-500/30 p-4 text-red-300 text-sm">
          ❌ {error}
        </div>
      )}

      {/* B・C の案内 */}
      <div className="space-y-3">
        <h3 className="text-white font-bold">B・C. Pythonスクリプトで自動取得</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'B. 会員サイト スクレイパー', cmd: 'python tools/scraper.py', desc: 'なまいきスクール会員サイトを自動巡回して教材テキストを取得' },
            { label: 'C. 動画 文字起こし', cmd: 'python tools/transcribe.py --file lecture.mp4 --title "講義タイトル"', desc: 'OpenAI Whisperで動画・音声をテキスト化してナレッジ化' },
          ].map(({ label, cmd, desc }) => (
            <div key={label} className="rounded-xl bg-gray-900 border border-gray-800 p-4 space-y-2">
              <p className="text-white text-sm font-semibold">{label}</p>
              <p className="text-gray-400 text-xs">{desc}</p>
              <code className="block bg-gray-950 rounded px-3 py-2 text-green-400 text-xs">{cmd}</code>
              <p className="text-gray-600 text-xs">実行後、生成された output/knowledge.json を上の「D.」でアップロード</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
