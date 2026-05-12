import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ExternalLink, Smartphone } from 'lucide-react'
import { MoneyRoadmap } from '../components/money/MoneyRoadmap'
import { PlatformDetail } from '../components/money/PlatformDetail'
import { ClaudeMdEditor } from '../components/learning/ClaudeMdEditor'
import { SNS_PLATFORMS, USEFUL_URLS } from '../data/snsMoneyData'
import { clsx } from 'clsx'

type MainTab = 'roadmap' | 'x' | 'note' | 'youtube' | 'freelance' | 'line' | 'urls' | 'claude-md'

const TABS: { id: MainTab; label: string; emoji: string; hot?: boolean }[] = [
  { id: 'roadmap',   label: '💰 稼ぐロードマップ', emoji: '💰', hot: true },
  { id: 'x',        label: 'X(Twitter)',          emoji: '🐦' },
  { id: 'note',     label: 'note.com',            emoji: '📝' },
  { id: 'youtube',  label: 'YouTube',             emoji: '🎬' },
  { id: 'freelance',label: 'フリーランス',         emoji: '💼' },
  { id: 'line',     label: 'LINE配信',            emoji: '💬' },
  { id: 'urls',     label: '🔗 URL集',            emoji: '🔗' },
  { id: 'claude-md',label: 'CLAUDE.md',           emoji: '⚡' },
]

/** SNS活用 × 副業収益化ページ（完全リニューアル版） */
export function SNSTools() {
  const [tab, setTab] = useState<MainTab>('roadmap')

  const platformMap: Record<string, typeof SNS_PLATFORMS[0]> = Object.fromEntries(
    SNS_PLATFORMS.map(p => [p.id, p])
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* ヘッダー */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <Smartphone size={28} className="text-brand-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">SNS × Claude Code で稼ぐ</h1>
            <p className="text-gray-400 text-sm">X・note・YouTube・フリーランスで月3〜30万円を目指すロードマップ</p>
          </div>
        </div>

        {/* 収益の目安バー */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
          {[
            { label: '1週間目', amount: '初収益', color: '#6b7280' },
            { label: '1ヶ月目', amount: '〜1万円', color: '#3b82f6' },
            { label: '2ヶ月目', amount: '〜3万円', color: '#8b5cf6' },
            { label: '3ヶ月目', amount: '〜10万円', color: '#10b981' },
            { label: '6ヶ月目+', amount: '30万円+', color: '#f59e0b' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl p-3 text-center border border-gray-800 bg-gray-900">
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="font-bold text-sm" style={{ color: item.color }}>{item.amount}</div>
            </div>
          ))}
        </div>

        {/* 注意書き */}
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs">
          💡 <strong>大切なこと：</strong>稼ぐまでの期間は行動量によって大きく変わります。毎日少しずつ継続することが一番大切です。
          「魔法の方法」はありません。でも<strong>Claude Codeを使えば作業時間を1/10に短縮</strong>できます。
        </div>
      </motion.div>

      {/* タブナビ */}
      <div className="flex gap-1 overflow-x-auto pb-1 mb-6 border-b border-gray-800">
        {TABS.map(({ id, label, hot }) => (
          <button key={id} onClick={() => setTab(id)}
            className={clsx(
              'relative flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors shrink-0',
              tab === id ? 'border-brand-500 text-brand-400' : 'border-transparent text-gray-500 hover:text-gray-300',
            )}
          >
            {label}
            {hot && tab !== id && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold" style={{ fontSize: 9 }}>!</span>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>

        {tab === 'roadmap' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={20} className="text-emerald-400" />
              <h2 className="text-xl font-bold text-white">稼ぐまでの5ステップロードマップ</h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Phase 0〜4 の順番でクリックして確認してください。今いる段階から始めればOKです！
            </p>
            <MoneyRoadmap />
          </div>
        )}

        {tab === 'x'        && platformMap['x']        && <PlatformDetail platform={platformMap['x']} />}
        {tab === 'note'     && platformMap['note']      && <PlatformDetail platform={platformMap['note']} />}
        {tab === 'youtube'  && platformMap['youtube']   && <PlatformDetail platform={platformMap['youtube']} />}
        {tab === 'freelance'&& platformMap['freelance'] && <PlatformDetail platform={platformMap['freelance']} />}
        {tab === 'line'     && platformMap['line']      && <PlatformDetail platform={platformMap['line']} />}

        {tab === 'urls' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">🔗 厳選URLリスト（全部無料で使える）</h2>
            {USEFUL_URLS.map((cat) => (
              <div key={cat.category}>
                <h3 className="font-bold text-gray-300 text-sm mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-4 rounded-full bg-brand-500 shrink-0" />
                  {cat.category}
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {cat.links.map((link) => (
                    <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-3 p-3 rounded-xl border border-gray-700 bg-gray-900 hover:border-brand-500/50 hover:bg-brand-500/5 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/15 flex items-center justify-center shrink-0">
                        <ExternalLink size={14} className="text-brand-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">{link.name}</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed">{link.desc}</p>
                        <p className="text-gray-600 text-xs mt-0.5 truncate">{link.url}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'claude-md' && <ClaudeMdEditor />}
      </motion.div>
    </div>
  )
}
