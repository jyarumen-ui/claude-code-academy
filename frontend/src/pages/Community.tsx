import { Users } from 'lucide-react'
import { ResourceHub } from '../components/community/ResourceHub'

/** コミュニティ・リソースページ */
export function Community() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8 flex items-start gap-3">
        <Users size={28} className="text-brand-400 mt-0.5" />
        <div>
          <h1 className="section-title text-3xl mb-1">コミュニティ & リソース</h1>
          <p className="section-subtitle mb-0">
            厳選された公式ドキュメント・学習コース・記事・ツール・コミュニティのリンク集
          </p>
        </div>
      </div>
      <ResourceHub />
    </div>
  )
}
