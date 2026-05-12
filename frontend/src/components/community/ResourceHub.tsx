import { ExternalLink, Star } from 'lucide-react'
import { RESOURCES, RECOMMENDED_ACCOUNTS } from '../../data/resources'
import { clsx } from 'clsx'

const CATEGORY_LABELS: Record<string, string> = {
  'getting-started': '始め方',
  'official-docs': '公式ドキュメント',
  'courses': 'コース',
  'articles': '記事・ガイド',
  'mcp': 'MCP',
  'sns-tools': 'SNSツール',
  'community': 'コミュニティ',
  'tools': 'ツール',
}

/** リソースハブコンポーネント */
export function ResourceHub() {
  const recommended = RESOURCES.filter((r) => r.recommended)
  const grouped = RESOURCES.reduce<Record<string, typeof RESOURCES>>(
    (acc, r) => {
      if (!acc[r.category]) acc[r.category] = []
      acc[r.category].push(r)
      return acc
    },
    {},
  )

  return (
    <div className="space-y-8">
      {/* おすすめリソース */}
      <section>
        <h2 className="section-title flex items-center gap-2">
          <Star size={20} className="text-yellow-400" />
          おすすめリソース
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {recommended.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      </section>

      {/* カテゴリ別 */}
      {Object.entries(grouped).map(([cat, resources]) => (
        <section key={cat}>
          <h2 className="text-lg font-bold text-white mb-3">
            {CATEGORY_LABELS[cat] ?? cat}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resources.map((r) => (
              <ResourceCard key={r.id} resource={r} />
            ))}
          </div>
        </section>
      ))}

      {/* おすすめXアカウント */}
      <section>
        <h2 className="section-title">📱 おすすめフォローアカウント（X）</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {RECOMMENDED_ACCOUNTS.map((acc) => (
            <a
              key={acc.handle}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
            >
              <p className="font-bold text-brand-400 mb-1">{acc.handle}</p>
              <p className="text-xs text-gray-400">{acc.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

function ResourceCard({ resource }: { resource: typeof RESOURCES[0] }) {
  const typeColor = {
    official: 'bg-blue-500/10 text-blue-400',
    course: 'bg-purple-500/10 text-purple-400',
    article: 'bg-emerald-500/10 text-emerald-400',
    video: 'bg-rose-500/10 text-rose-400',
    tool: 'bg-amber-500/10 text-amber-400',
    community: 'bg-cyan-500/10 text-cyan-400',
  }

  const typeLabel = {
    official: '公式',
    course: 'コース',
    article: '記事',
    video: '動画',
    tool: 'ツール',
    community: 'コミュニティ',
  }

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover flex items-start gap-3 group"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={clsx('badge text-xs', typeColor[resource.type])}>
            {typeLabel[resource.type]}
          </span>
          <span className="text-xs text-gray-600">
            {resource.language === 'ja' ? '🇯🇵 日本語' : resource.language === 'en' ? '🇺🇸 英語' : '🌐 両方'}
          </span>
          {!resource.free && (
            <span className="badge text-xs bg-gray-700 text-gray-400">有料</span>
          )}
        </div>
        <h3 className="font-medium text-white text-sm group-hover:text-brand-400 transition-colors">
          {resource.title}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{resource.description}</p>
      </div>
      <ExternalLink size={14} className="text-gray-600 group-hover:text-brand-400 transition-colors shrink-0 mt-1" />
    </a>
  )
}
