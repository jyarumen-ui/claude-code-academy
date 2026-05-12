import { ExternalLink, GraduationCap, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const COURSES = [
  {
    id: 'claude-101',
    title: 'Claude 101',
    url: 'https://anthropic.skilljar.com/claude-101',
    description: 'Claudeとは何か、基本的な使い方から活用法まで。完全無料の入門コース。',
    level: '入門',
    duration: '約1時間',
    audience: ['初心者', '非エンジニア', 'ビジネス職'],
    badge: '🌱',
    recommended: true,
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    url: 'https://anthropic.skilljar.com/claude-code-101',
    description: 'Claude Codeのインストールから基本操作まで。開発者向け入門コース。',
    level: '初級',
    duration: '約2時間',
    audience: ['エンジニア志望', '初心者プログラマー'],
    badge: '⚙️',
    recommended: true,
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code in Action',
    url: 'https://anthropic.skilljar.com/claude-code-in-action',
    description: '実際のプロジェクトでClaude Codeを活用する上級テクニックを学ぶ。',
    level: '中〜上級',
    duration: '約3時間',
    audience: ['エンジニア', '開発者'],
    badge: '🚀',
    recommended: true,
  },
  {
    id: 'mcp-intro',
    title: 'Introduction to MCP',
    url: 'https://anthropic.skilljar.com/introduction-to-mcp',
    description: 'Model Context Protocolの概念から実装まで。外部サービス連携を学ぶ。',
    level: '上級',
    duration: '約2時間',
    audience: ['エンジニア', 'MCP開発者'],
    badge: '🔌',
    recommended: false,
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency',
    url: 'https://anthropic.skilljar.com/ai-fluency',
    description: 'AIリテラシーを高める非エンジニア向けコース。AIの仕組みを直感的に理解する。',
    level: '入門',
    duration: '約1.5時間',
    audience: ['非エンジニア', 'マーケター', '経営者'],
    badge: '🧠',
    recommended: false,
  },
]

const LEARNING_PATHS = [
  {
    role: '🌱 完全初心者',
    courses: ['claude-101', 'claude-code-101'],
    description: 'まずClaude 101でAIを理解し、Claude Code 101で実際に動かしてみましょう',
  },
  {
    role: '💻 エンジニア',
    courses: ['claude-code-101', 'claude-code-action', 'mcp-intro'],
    description: 'Claude Code 101 → in Action → MCPの順で体系的にスキルを積み上げます',
  },
  {
    role: '📱 マーケター・副業者',
    courses: ['claude-101', 'ai-fluency', 'claude-code-101'],
    description: 'AI基礎を固めてからClaude Codeで実務活用を始めましょう',
  },
  {
    role: '🏢 非エンジニア',
    courses: ['claude-101', 'ai-fluency'],
    description: 'Claude 101とAI Fluencyで業務にAIを取り入れるスタートラインに立てます',
  },
]

/** Anthropic Academy ページ */
export function Academy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-10">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <GraduationCap size={28} className="text-brand-400" />
          <h1 className="section-title text-3xl mb-0">Anthropic Academy</h1>
        </div>
        <p className="section-subtitle">
          Anthropic公式の無料学習コース一覧。修了証はLinkedInに追加できます。
        </p>
      </div>

      {/* コース一覧 */}
      <section>
        <h2 className="font-bold text-white text-xl mb-4">📚 コース一覧</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COURSES.map((course, i) => (
            <motion.a
              key={course.id}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="card-hover group relative"
            >
              {course.recommended && (
                <div className="absolute top-3 right-3 badge bg-brand-500/20 text-brand-400 text-xs">
                  おすすめ
                </div>
              )}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{course.badge}</span>
                <div>
                  <h3 className="font-bold text-white group-hover:text-brand-400 transition-colors">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                    <span>{course.level}</span>
                    <span>·</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-3">{course.description}</p>
              <div className="flex flex-wrap gap-1">
                {course.audience.map((a) => (
                  <span key={a} className="badge bg-gray-800 text-gray-400 text-xs">{a}</span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-brand-400 mt-3">
                <ExternalLink size={12} />
                <span>無料で受講する</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 推奨学習パス */}
      <section>
        <h2 className="font-bold text-white text-xl mb-4">🗺️ ロール別推奨パス</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LEARNING_PATHS.map((path, i) => {
            const pathCourses = path.courses.map((id) => COURSES.find((c) => c.id === id)!)
            return (
              <motion.div
                key={path.role}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card"
              >
                <h3 className="font-bold text-white mb-2">{path.role}</h3>
                <p className="text-xs text-gray-400 mb-3">{path.description}</p>
                <div className="space-y-2">
                  {pathCourses.map((course, j) => (
                    <div key={course.id} className="flex items-center gap-2 text-sm">
                      <span className="w-5 h-5 rounded-full bg-brand-500/20 text-brand-400 text-xs flex items-center justify-center shrink-0 font-bold">
                        {j + 1}
                      </span>
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-brand-400 transition-colors"
                      >
                        {course.badge} {course.title}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 修了証について */}
      <section className="card border-brand-500/20">
        <div className="flex items-start gap-3">
          <Award size={24} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-white mb-2">🏆 修了証のLinkedIn追加方法</h2>
            <ol className="text-sm text-gray-400 space-y-2 list-decimal list-inside">
              <li>各コースを完了すると修了証がメールで届きます</li>
              <li>LinkedInの「資格証明」セクションを開く</li>
              <li>「資格証明を追加」→「発行機関: Anthropic」を入力</li>
              <li>修了証のURLをプロフィールに追加</li>
              <li>SNSでシェアして実績をアピール！</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
