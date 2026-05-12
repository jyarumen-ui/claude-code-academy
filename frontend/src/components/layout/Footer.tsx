import { Zap, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

/** フッター */
export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          {/* ブランド */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-brand-500 to-purple-600 rounded flex items-center justify-center">
                <Zap size={12} className="text-white" />
              </div>
              <span className="font-bold text-white text-sm">Claude Code Academy</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              初心者から上級者まで、Claude Codeを完全マスターできる学習プラットフォーム
            </p>
          </div>

          {/* 学習 */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">学習</p>
            <ul className="space-y-2">
              {[
                { to: '/roadmap', label: 'ロードマップ' },
                { to: '/level/0', label: 'Claude入門' },
                { to: '/level/7', label: 'Agent Teams' },
                { to: '/prompts', label: 'プロンプト集' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ツール */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">ツール</p>
            <ul className="space-y-2">
              {[
                { to: '/sns-tools', label: 'SNS活用' },
                { to: '/academy', label: 'Academy' },
                { to: '/community', label: 'コミュニティ' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 公式リンク */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">公式</p>
            <ul className="space-y-2">
              {[
                { url: 'https://claude.ai', label: 'Claude.ai' },
                { url: 'https://docs.anthropic.com/ja/docs/claude-code/overview', label: 'ドキュメント' },
                { url: 'https://anthropic.skilljar.com', label: 'Academy' },
                { url: 'https://console.anthropic.com', label: 'Console' },
              ].map(({ url, label }) => (
                <li key={url}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {label}
                    <ExternalLink size={10} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © 2026 Claude Code Academy. このサイトはAnthropicとは無関係の非公式コンテンツです。
          </p>
          <p className="text-xs text-gray-600">
            Built with Claude Code 🤖
          </p>
        </div>
      </div>
    </footer>
  )
}
