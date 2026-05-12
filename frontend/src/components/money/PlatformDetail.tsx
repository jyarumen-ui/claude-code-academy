import { useState } from 'react'
import { ExternalLink, Copy, Check } from 'lucide-react'
import { type SnsPlatform } from '../../data/snsMoneyData'
import { clsx } from 'clsx'

interface PlatformDetailProps {
  platform: SnsPlatform
}

/** SNSプラットフォーム詳細カード — 稼ぎ方・手順・URL付き */
export function PlatformDetail({ platform: p }: PlatformDetailProps) {
  const [copied, setCopied] = useState<number | null>(null)
  const [tab, setTab] = useState<'steps' | 'earning' | 'tools'>('steps')

  const handleCopy = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text)
    setCopied(idx)
    setTimeout(() => setCopied(null), 2000)
  }

  // 難易度を星で表示
  const stars = Array.from({ length: 5 }, (_, i) => i < p.difficulty)

  return (
    <div className="space-y-4">
      {/* ヒーローカード */}
      <div className="rounded-2xl overflow-hidden border" style={{ borderColor: p.color + '50' }}>
        <div className="p-5" style={{ background: `linear-gradient(135deg, ${p.color}20, transparent)` }}>
          <div className="flex items-start gap-4 flex-wrap">
            <div className="text-5xl">{p.emoji}</div>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-white mb-1">{p.name}</h2>
              <p className="text-sm mb-3" style={{ color: p.color }}>{p.tagline}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{p.description}</p>
            </div>
            {/* 稼ぎ力バッジ */}
            <div className="flex gap-3 flex-wrap">
              <div className="rounded-xl p-3 text-center border" style={{ borderColor: p.color + '40', background: p.color + '10' }}>
                <div className="text-xs text-gray-400 mb-0.5">月収目安</div>
                <div className="font-bold text-lg" style={{ color: p.color }}>
                  {p.earningMin}〜{p.earningMax}万円
                </div>
              </div>
              <div className="rounded-xl p-3 text-center border border-gray-700 bg-gray-900">
                <div className="text-xs text-gray-400 mb-0.5">初収益まで</div>
                <div className="font-bold text-sm text-white">{p.timeToFirstIncome}</div>
              </div>
              <div className="rounded-xl p-3 text-center border border-gray-700 bg-gray-900">
                <div className="text-xs text-gray-400 mb-1">難しさ</div>
                <div className="flex gap-0.5">
                  {stars.map((filled, i) => (
                    <span key={i} style={{ color: filled ? p.color : '#374151', fontSize: 14 }}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SNSモック投稿プレビュー */}
        {p.mockPost && (
          <div className="border-t p-4" style={{ borderColor: p.color + '30', background: p.color + '05' }}>
            <p className="text-xs text-gray-500 mb-2">📱 実際にこんな投稿で稼げます：</p>
            <div className="bg-gray-950 rounded-xl p-4 border" style={{ borderColor: p.color + '30' }}>
              <pre className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">{p.mockPost.content}</pre>
              {p.mockPost.stats && (
                <p className="text-xs mt-3 pt-2 border-t" style={{ borderColor: p.color + '30', color: p.color }}>
                  {p.mockPost.stats}
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* タブ */}
      <div className="flex gap-1 border-b border-gray-800">
        {(['steps', 'earning', 'tools'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={clsx('px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors',
              tab === t ? 'border-current text-white' : 'border-transparent text-gray-500 hover:text-gray-300')}
            style={tab === t ? { borderColor: p.color, color: p.color } : {}}
          >
            {t === 'steps' ? '📋 始め方' : t === 'earning' ? '💰 稼ぎ方' : '🔧 使うツール'}
          </button>
        ))}
      </div>

      {/* 始め方 */}
      {tab === 'steps' && (
        <div className="space-y-3">
          {p.steps.map((step, i) => (
            <div key={i} className="rounded-xl border border-gray-700 bg-gray-900 overflow-hidden">
              <div className="flex items-start gap-3 p-4">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: p.color + '25', color: p.color }}>{i + 1}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="font-semibold text-white text-sm">{step.title}</h4>
                    {step.url && (
                      <a href={step.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
                        style={{ color: p.color, background: p.color + '15' }}>
                        <ExternalLink size={10} />開く
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{step.detail}</p>
                  {step.tip && (
                    <p className="text-xs text-yellow-300/80 mt-1.5 bg-yellow-500/10 rounded-lg px-2 py-1.5">
                      💡 {step.tip}
                    </p>
                  )}
                </div>
              </div>
              {step.prompt && (
                <div className="border-t border-gray-800 bg-gray-950 p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs text-gray-500">📋 Claude へのプロンプト（コピーしてそのまま使える）</span>
                    <button onClick={() => handleCopy(step.prompt!, i * 100)}
                      className="flex items-center gap-1 text-xs px-2 py-0.5 rounded"
                      style={{ color: p.color, background: p.color + '20' }}>
                      {copied === i * 100 ? <Check size={10} /> : <Copy size={10} />}
                      {copied === i * 100 ? 'コピー済' : 'コピー'}
                    </button>
                  </div>
                  <pre className="text-xs text-gray-300 whitespace-pre-wrap leading-relaxed">{step.prompt}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* 稼ぎ方 */}
      {tab === 'earning' && (
        <div className="space-y-3">
          {p.realEarningMethods.map((m, i) => (
            <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-gray-700 bg-gray-900">
              <div className="shrink-0 text-center rounded-lg border px-3 py-2 min-w-[90px]"
                style={{ borderColor: p.color + '40', background: p.color + '10' }}>
                <div className="text-xs text-gray-400">収益</div>
                <div className="text-sm font-bold leading-tight" style={{ color: p.color }}>{m.amount}</div>
              </div>
              <div>
                <p className="font-semibold text-white text-sm mb-1">{m.method}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{m.how}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ツール */}
      {tab === 'tools' && (
        <div className="grid sm:grid-cols-2 gap-2">
          {p.requiredTools.map((tool) => (
            <a key={tool.url} href={tool.url} target="_blank" rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl border border-gray-700 bg-gray-900 hover:border-gray-600 transition-colors group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm"
                style={{ background: p.color + '20', color: p.color }}>
                {tool.free ? '無料' : '有料'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-white text-sm group-hover:text-brand-400 transition-colors">{tool.name}</span>
                  <ExternalLink size={11} className="text-gray-500 shrink-0" />
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{tool.desc}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
