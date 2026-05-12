import { useState } from 'react'
import { motion } from 'framer-motion'
import { Baby, BookOpen, Star, HelpCircle, Terminal } from 'lucide-react'
import { SkillInputGuide } from '../components/beginner/SkillInputGuide'
import { StepGuide, type Step } from '../components/beginner/StepGuide'
import { GlossarySection } from '../components/beginner/GlossarySection'
import { TerminalMockup } from '../components/beginner/TerminalMockup'
import { clsx } from 'clsx'

type TabId = 'start' | 'skill' | 'glossary' | 'terminal'

const TABS: { id: TabId; label: string; icon: typeof Baby; desc: string }[] = [
  { id: 'start',    label: 'はじめの一歩',      icon: Baby,     desc: 'Claude Codeの導入方法' },
  { id: 'skill',    label: 'SKILLの使い方',     icon: Star,     desc: 'どこで入力するの？' },
  { id: 'terminal', label: 'ターミナルって何？', icon: Terminal, desc: '黒い画面の使い方' },
  { id: 'glossary', label: '用語集',            icon: BookOpen, desc: '専門用語をわかりやすく解説' },
]

const INSTALL_STEPS: Step[] = [
  {
    title: 'Node.jsをインストールする',
    description: 'まず「Node.js（ノードジェイエス）」というソフトをパソコンに入れます。Claude Codeを動かすために必要です。',
    emoji: '💚',
    tip: 'https://nodejs.org にアクセスして「LTS版」と書いてある方をダウンロードしてください。',
  },
  {
    title: 'ターミナルを開く',
    description: 'Windowsの場合は「スタートメニュー」→「PowerShell」を検索して開きます。Macの場合は「ターミナル」アプリを開きます。',
    emoji: '🖥️',
    tip: 'Windowsキー + R を押して「powershell」と入力してもOKです。',
  },
  {
    title: 'Claude Codeをインストールする',
    description: '下のコマンドをターミナルにそのまま貼り付けてEnterキーを押します。自動でインストールが始まります。',
    emoji: '📦',
    code: 'npm install -g @anthropic-ai/claude-code',
    tip: '「-g」はパソコン全体にインストールするという意味です。',
  },
  {
    title: 'Anthropicのアカウントを作る',
    description: 'https://claude.ai にアクセスしてアカウントを作成します。メールアドレスがあれば無料で登録できます。',
    emoji: '📧',
  },
  {
    title: 'Claude Codeを起動する',
    description: 'ターミナルで下のコマンドを入力してEnterを押します。初回は自動でログイン画面が開きます。',
    emoji: '🚀',
    code: 'claude',
    tip: 'ブラウザでログインを求められたら、さっき作ったアカウントでログインしてください。',
  },
]

const TERMINAL_STEPS: Step[] = [
  {
    title: 'ターミナルは「キーボードで操作する画面」',
    description: 'マウスは使いません。キーボードで命令文（コマンド）を入力して、Enterを押すと実行されます。怖くありません！',
    emoji: '⌨️',
  },
  {
    title: 'よく使うコマンドを覚えよう',
    description: '「ls」（MacとLinux）または「dir」（Windows）と入力すると、今いるフォルダの中身が見られます。',
    emoji: '📂',
    code: 'ls',
    tip: 'Windowsの場合は「dir」と入力してください。',
  },
  {
    title: 'フォルダを移動する',
    description: '「cd フォルダ名」と入力するとフォルダを移動できます。cdは「Change Directory（場所を変える）」の略です。',
    emoji: '🚶',
    code: 'cd Documents',
    tip: 'cdの後にスペースを入れてから、移動したいフォルダ名を入力します。',
  },
  {
    title: '間違えたときはCtrl+Cで止められる',
    description: '何かおかしくなったら「Ctrl + C」キーを同時に押せば、実行中のコマンドを止められます。',
    emoji: '🛑',
    tip: 'これさえ覚えておけば大丈夫！何が起きても止められます。',
  },
]

/** 初心者向けガイドページ — 小学生でもわかるClaude Code入門 */
export function BeginnerGuide() {
  const [activeTab, setActiveTab] = useState<TabId>('start')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* ヘッダー */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Baby size={32} className="text-brand-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">初心者ガイド</h1>
            <p className="text-gray-400 text-sm">小学生でもわかる！Claude Code の使い方を丁寧に説明します</p>
          </div>
        </div>

        {/* お知らせバナー */}
        <div className="mt-4 rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4 flex gap-3">
          <HelpCircle size={20} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-300 font-semibold text-sm mb-1">初めての方へ</p>
            <p className="text-yellow-200/80 text-xs leading-relaxed">
              このページでは専門用語をできるだけわかりやすく説明しています。
              わからない言葉は「<strong>用語集</strong>」タブで調べられます。
              迷ったら気軽に確認してください！
            </p>
          </div>
        </div>
      </motion.div>

      {/* タブナビ */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {TABS.map(({ id, label, icon: Icon, desc }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={clsx(
              'flex flex-col items-center gap-1 p-3 rounded-xl border text-center transition-all',
              activeTab === id
                ? 'border-brand-500 bg-brand-500/15 text-white'
                : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-600 hover:text-gray-200',
            )}
          >
            <Icon size={22} className={activeTab === id ? 'text-brand-400' : ''} />
            <span className="font-semibold text-xs">{label}</span>
            <span className="text-gray-500 text-xs hidden sm:block">{desc}</span>
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6"
      >
        {activeTab === 'start' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">🚀 Claude Codeをはじめよう</h2>
              <p className="text-gray-400 text-sm">
                5つのステップに従えば、誰でもClaude Codeを使えるようになります！
              </p>
            </div>
            <StepGuide steps={INSTALL_STEPS} />
            <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
              <p className="text-emerald-300 text-sm font-semibold mb-1">🎉 インストール完了後は…</p>
              <p className="text-emerald-200/80 text-xs">
                ターミナルに「claude」と入力すると、チャット画面が表示されます。
                あとは普通に話しかけるだけでOK！「ファイルを作って」「コードを修正して」など、
                日本語で自由に指示できます。
              </p>
            </div>
          </div>
        )}

        {activeTab === 'skill' && (
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">⭐ SKILLの使い方</h2>
              <p className="text-gray-400 text-sm">
                「SKILLってどこに入力するの？」という疑問を画像付きで解説します。
              </p>
            </div>
            <SkillInputGuide />
          </div>
        )}

        {activeTab === 'terminal' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">🖥️ ターミナルって何？</h2>
              <p className="text-gray-400 text-sm mb-4">
                黒い画面に文字を入力する「ターミナル」の基本的な使い方を説明します。怖くないですよ！
              </p>
              <TerminalMockup
                messages={[
                  { role: 'system', text: '// ← これがターミナルです。文字で命令を入力します' },
                  { role: 'system', text: '$ ls' },
                  { role: 'system', text: 'Documents  Downloads  Desktop  Pictures' },
                  { role: 'system', text: '$ cd Documents' },
                  { role: 'system', text: '$ claude' },
                  { role: 'claude', text: 'こんにちは！何か手伝いましょうか？' },
                ]}
                inputPlaceholder="ここに命令を入力してEnterキーを押す"
                highlightInput={false}
                title="Terminal — PowerShell"
              />
            </div>
            <StepGuide steps={TERMINAL_STEPS} />
          </div>
        )}

        {activeTab === 'glossary' && (
          <div>
            <h2 className="text-xl font-bold text-white mb-1">📚 用語集</h2>
            <p className="text-gray-400 text-sm mb-5">
              難しい専門用語をわかりやすい言葉で説明します。タップで詳しい説明も見られます。
            </p>
            <GlossarySection />
          </div>
        )}
      </motion.div>
    </div>
  )
}
