interface ToolItem {
  emoji: string
  label: string
  desc: string
  tab: string
  color: string
}

const TOOLS: ToolItem[] = [
  { emoji: '🪪', label: 'プロフィール生成', desc: 'AIでプロフを自動生成', tab: 'profile-gen', color: 'border-sky-500/40 bg-sky-500/5 hover:bg-sky-500/10' },
  { emoji: '🔀', label: 'ABテスト', desc: '複数パターンを比較', tab: 'ab-test', color: 'border-purple-500/40 bg-purple-500/5 hover:bg-purple-500/10' },
  { emoji: '🖼️', label: '画像生成', desc: 'ポスト用画像をAIで', tab: 'image-gen', color: 'border-pink-500/40 bg-pink-500/5 hover:bg-pink-500/10' },
  { emoji: '📈', label: 'バズ分析', desc: '人気投稿の型を学習', tab: 'buzz', color: 'border-orange-500/40 bg-orange-500/5 hover:bg-orange-500/10' },
  { emoji: '🔍', label: 'プロフ診断', desc: 'URLで改善点を発見', tab: 'profile-analyze', color: 'border-amber-500/40 bg-amber-500/5 hover:bg-amber-500/10' },
  { emoji: '⚡', label: 'フック集', desc: '目を引く書き出し集', tab: 'hooks', color: 'border-yellow-500/40 bg-yellow-500/5 hover:bg-yellow-500/10' },
  { emoji: '✏️', label: '講師添削', desc: 'Discord学習を再現', tab: 'feedback', color: 'border-green-500/40 bg-green-500/5 hover:bg-green-500/10' },
  { emoji: '💬', label: 'Discord分析', desc: '講師メッセージを検索', tab: 'discord-analyzer', color: 'border-indigo-500/40 bg-indigo-500/5 hover:bg-indigo-500/10' },
  { emoji: '📚', label: '教材を見る', desc: '取り込んだ教材を確認', tab: 'knowledge', color: 'border-teal-500/40 bg-teal-500/5 hover:bg-teal-500/10' },
  { emoji: '📅', label: '投稿カレンダー', desc: '1週間の計画を自動作成', tab: 'calendar', color: 'border-cyan-500/40 bg-cyan-500/5 hover:bg-cyan-500/10' },
  { emoji: '🗂️', label: '投稿履歴', desc: '過去の投稿を一覧確認', tab: 'history', color: 'border-slate-500/40 bg-slate-500/5 hover:bg-slate-500/10' },
  { emoji: '👥', label: 'アカウント管理', desc: '複数アカウントを登録', tab: 'accounts', color: 'border-rose-500/40 bg-rose-500/5 hover:bg-rose-500/10' },
]

interface Props {
  onNavigate: (tab: string) => void
}

export function ToolsTab({ onNavigate }: Props) {
  return (
    <div className="space-y-4 pb-4">
      <div>
        <p className="text-white font-bold text-base mb-1">全ツール一覧</p>
        <p className="text-gray-500 text-xs">タップして各機能を開く</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {TOOLS.map(tool => (
          <button
            key={tool.tab}
            onClick={() => onNavigate(tool.tab)}
            className={`flex flex-col items-start gap-2 p-4 rounded-2xl border text-left transition-all active:scale-95 ${tool.color}`}
          >
            <span className="text-2xl">{tool.emoji}</span>
            <div>
              <p className="text-white text-sm font-bold leading-tight">{tool.label}</p>
              <p className="text-gray-400 text-xs mt-0.5 leading-tight">{tool.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* 設定セクション */}
      <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4">
        <p className="text-gray-400 text-xs font-semibold mb-3">設定</p>
        <div className="space-y-2">
          {[
            { emoji: '🔑', label: 'APIキー・設定', tab: 'settings' },
            { emoji: '👤', label: 'キャラクター設定', tab: 'persona' },
            { emoji: '📥', label: '教材インポート', tab: 'import' },
          ].map(item => (
            <button
              key={item.tab}
              onClick={() => onNavigate(item.tab)}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-left transition-colors"
            >
              <span className="text-lg">{item.emoji}</span>
              <span className="text-white text-sm font-medium flex-1">{item.label}</span>
              <span className="text-gray-600 text-xs">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
