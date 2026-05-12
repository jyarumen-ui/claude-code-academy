import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scale, CheckCircle2, XCircle, MinusCircle, GitMerge, TrendingUp, AlertTriangle } from 'lucide-react'
import { TOOLS, COMPARE_ROWS, PARALLEL_USE, type ToolInfo } from '../data/toolsData'
import { StepGuide } from '../components/beginner/StepGuide'
import { clsx } from 'clsx'

type TabId = 'compare' | 'app' | 'cli' | 'codex' | 'parallel'

function GoodBadIcon({ good }: { good: boolean | null }) {
  if (good === true) return <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
  if (good === false) return <XCircle size={15} className="text-red-400 shrink-0" />
  return <MinusCircle size={15} className="text-yellow-400 shrink-0" />
}

function ToolDetail({ tool }: { tool: ToolInfo }) {
  return (
    <div className="space-y-6">
      {/* ヒーロー */}
      <div className="rounded-2xl p-6 border" style={{ borderColor: tool.color + '40', background: tool.color + '0d' }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{tool.emoji}</span>
          <div>
            <h2 className="text-2xl font-bold text-white">{tool.name}</h2>
            <p className="text-sm" style={{ color: tool.color }}>{tool.tagline}</p>
          </div>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{tool.description}</p>
      </div>

      {/* メリット・デメリット */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
          <h3 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} /> できること・メリット
          </h3>
          <ul className="space-y-2">
            {tool.pros.map((p, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
          <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
            <XCircle size={16} /> できないこと・デメリット
          </h3>
          <ul className="space-y-2">
            {tool.cons.map((c, i) => (
              <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                <span className="text-red-400 shrink-0 mt-0.5">✗</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* こんな用途に最適 */}
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
        <h3 className="font-bold text-white mb-3">🎯 こんな人・用途に最適</h3>
        <div className="flex flex-wrap gap-2">
          {tool.bestFor.map((b, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300 text-xs">{b}</span>
          ))}
        </div>
      </div>

      {/* インストール手順 */}
      <StepGuide
        title={`${tool.name} の使い始め方`}
        steps={tool.installSteps.map((s, i) => ({
          number: i + 1,
          title: s.title,
          description: s.note ?? '',
          code: s.code,
        }))}
      />
    </div>
  )
}

/** ツール比較ページ — App版 / CLI版 / Codex の違いを徹底解説 */
export function ToolsComparison() {
  const [tab, setTab] = useState<TabId>('compare')

  const tabs: { id: TabId; label: string; emoji: string }[] = [
    { id: 'compare', label: '比較表', emoji: '⚖️' },
    { id: 'app',     label: 'アプリ版', emoji: '🌐' },
    { id: 'cli',     label: 'CLI版',   emoji: '⚡' },
    { id: 'codex',   label: 'Codex',   emoji: '🤖' },
    { id: 'parallel',label: '並行利用', emoji: '🔀' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ヘッダー */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Scale size={28} className="text-brand-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">ツール徹底比較</h1>
            <p className="text-gray-400 text-sm">アプリ版・CLI版・Codexの違いと使い方を小学生でもわかるように解説</p>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <p className="text-blue-300 text-sm">
            💡 <strong>迷ったら：</strong>
            プログラミング初心者は「アプリ版」→ コードを書く人は「CLI版」→ 使い比べたい上級者は「Codex」も試そう！
          </p>
        </div>
      </motion.div>

      {/* タブ */}
      <div className="flex gap-1 overflow-x-auto pb-1 mb-6 border-b border-gray-800">
        {tabs.map(({ id, label, emoji }) => (
          <button key={id} onClick={() => setTab(id)}
            className={clsx(
              'flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap border-b-2 -mb-px shrink-0',
              tab === id ? 'border-brand-500 text-brand-400' : 'border-transparent text-gray-500 hover:text-gray-300',
            )}
          >
            <span>{emoji}</span>{label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.15 }}>

        {/* 比較表 */}
        {tab === 'compare' && (
          <div className="space-y-4">
            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-900">
                    <th className="text-left px-4 py-3 text-gray-400 font-medium">機能</th>
                    {TOOLS.map(t => (
                      <th key={t.id} className="text-center px-3 py-3 font-semibold text-white">
                        {t.emoji} {t.id === 'app' ? 'アプリ版' : t.id === 'cli' ? 'CLI版' : 'Codex'}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row, i) => (
                    <tr key={i} className={clsx('border-b border-gray-800/50', i % 2 === 0 ? 'bg-gray-900/30' : '')}>
                      <td className="px-4 py-3 text-gray-300 font-medium text-xs">{row.feature}</td>
                      {[row.app, row.cli, row.codex].map((cell, j) => (
                        <td key={j} className="px-3 py-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <GoodBadIcon good={cell.good} />
                            <span className="text-gray-300 text-xs">{cell.value.replace(/[✅❌⭐⚠️]/g, '').trim()}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle2 size={12} className="text-emerald-400" /> 対応・メリット</span>
              <span className="flex items-center gap-1"><XCircle size={12} className="text-red-400" /> 非対応・デメリット</span>
              <span className="flex items-center gap-1"><MinusCircle size={12} className="text-yellow-400" /> 部分対応</span>
            </div>
          </div>
        )}

        {tab === 'app' && <ToolDetail tool={TOOLS[0]} />}
        {tab === 'cli' && <ToolDetail tool={TOOLS[1]} />}
        {tab === 'codex' && <ToolDetail tool={TOOLS[2]} />}

        {/* 並行利用 */}
        {tab === 'parallel' && (
          <div className="space-y-6">
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
              <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                <GitMerge size={20} className="text-purple-400" />
                Claude Code × Codex を一緒に使う
              </h2>
              <p className="text-gray-300 text-sm">2つのAIを並行して使うことで、お互いの弱点を補い合えます。</p>
            </div>

            {/* 活用方法 */}
            <div className="space-y-3">
              <h3 className="font-bold text-white">🔀 どうやって使い分ける？</h3>
              {PARALLEL_USE.how.map((h, i) => (
                <div key={i} className="flex gap-3 p-4 rounded-xl border border-gray-700 bg-gray-900">
                  <span className="text-2xl shrink-0">{h.emoji}</span>
                  <div>
                    <p className="font-semibold text-white text-sm mb-1">{h.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Claude Code内でCodexを使う */}
            <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
              <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                <span>⚡</span> Claude Code の中から Codex を呼び出す方法
              </h3>
              <pre className="text-xs text-gray-300 bg-gray-950 rounded-lg p-4 overflow-x-auto leading-relaxed whitespace-pre-wrap">
                {PARALLEL_USE.codexInClaudeCode}
              </pre>
            </div>

            {/* メリット・デメリット */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
                <h3 className="font-bold text-emerald-400 mb-3 flex items-center gap-2">
                  <TrendingUp size={16} /> 並行利用のメリット
                </h3>
                <ul className="space-y-2">
                  {PARALLEL_USE.merit.map((m, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-emerald-400 shrink-0">✓</span>{m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-4">
                <h3 className="font-bold text-orange-400 mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} /> 並行利用のデメリット
                </h3>
                <ul className="space-y-2">
                  {PARALLEL_USE.demerit.map((d, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                      <span className="text-orange-400 shrink-0">!</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-800 border border-gray-700">
              <p className="text-gray-300 text-sm font-semibold mb-1">🎯 結論：どっちを使えばいい？</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                <strong className="text-white">初心者・中級者 →</strong> まず Claude Code だけを使い込む。<br />
                <strong className="text-white">上級者・比較検証したい人 →</strong> 両方を使い分けてみよう。<br />
                重要な作業は2つのAIに同じ質問をして回答を比べると精度が上がります。
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}
