import { BookMarked } from 'lucide-react'
import { PromptLibrary } from '../components/community/PromptLibrary'

/** プロンプトライブラリページ */
export function PromptLibraryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 flex items-start gap-3">
        <BookMarked size={28} className="text-brand-400 mt-0.5" />
        <div>
          <h1 className="section-title text-3xl mb-1">プロンプトライブラリ</h1>
          <p className="section-subtitle mb-0">
            コード生成・デバッグ・SNS・副業・ドキュメント作成など用途別に厳選されたプロンプト集。
            コピーしてそのまま使えます。
          </p>
        </div>
      </div>
      <PromptLibrary />
    </div>
  )
}
