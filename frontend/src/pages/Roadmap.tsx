import { ProgressTracker } from '../components/learning/ProgressTracker'
import { LevelCard } from '../components/learning/LevelCard'
import { CURRICULUM } from '../data/curriculum'

/** ロードマップページ */
export function Roadmap() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="section-title text-3xl">🗺️ 学習ロードマップ</h1>
        <p className="section-subtitle">
          7段階で Claude Code を完全マスター。レベル0から順番に進めていきましょう。
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* レベルカード一覧 */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CURRICULUM.map((level, i) => (
              <LevelCard key={level.id} level={level} index={i} />
            ))}
          </div>
        </div>

        {/* 進捗トラッカー */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <ProgressTracker />
          </div>
        </div>
      </div>
    </div>
  )
}
