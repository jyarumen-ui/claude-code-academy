import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  ClaudeCodeScreen,
  NodeJsWebScreen,
  WindowsSearchScreen,
  PowerShellScreen,
  InstallScreen,
  BrowserLoginScreen,
  FileCreatedScreen,
  ErrorFixScreen,
  SkillMenuScreen,
  InitResultScreen,
  VsCodeFileTree,
} from '../components/beginner/ScreenShot'
import { GlossarySection } from '../components/beginner/GlossarySection'

// ────────────────────────────────────
// ステップデータ
// ────────────────────────────────────
const STEPS = [
  {
    num: 1,
    emoji: '💚',
    title: 'Node.js をパソコンに入れる',
    easy: '「Node.js（ノードジェイエス）」というソフトを先に入れます。これがないとClaude Codeが動きません。',
    point: 'LTS（エルティーエス）と書いてある緑のボタンをクリックするだけ！',
    howto: [
      '① ブラウザで「nodejs.org」と検索して開く',
      '② 緑の「LTS」ボタンをクリックしてダウンロード',
      '③ ダウンロードしたファイルを開いて「次へ→次へ→完了」でOK',
      '④ パソコンを再起動しなくてもそのまま次へ進んでOK',
    ],
    screen: <NodeJsWebScreen />,
  },
  {
    num: 2,
    emoji: '🖥️',
    title: '「ターミナル」という黒い画面を開く',
    easy: 'ターミナルとは「キーボードで命令を入力できる黒い画面」のこと。怖くないよ！普通の入力ボックスと同じです。',
    point: 'Windowsキー（左下の旗マーク）を押して「PowerShell」と入力するだけ',
    howto: [
      '① キーボードの「Windowsキー（旗のマーク）」を押す',
      '② 「PowerShell」と入力して検索',
      '③ 「Windows PowerShell」が出てきたらクリック',
      '④ 青い黒い画面が開いたら成功！',
    ],
    screen: <WindowsSearchScreen />,
  },
  {
    num: 3,
    emoji: '📦',
    title: 'Claude Code をインストールする',
    easy: '開いた黒い画面に、下のコマンド（命令文）をコピーして貼り付けてEnterを押すだけ！',
    point: 'コピー＆ペーストすれば打ち間違いは起きません。安心してください！',
    code: 'npm install -g @anthropic-ai/claude-code',
    howto: [
      '① 上のコマンドをコピーボタンでコピー',
      '② 黒い画面に貼り付け（右クリック→貼り付け、またはCtrl+V）',
      '③ Enterキーを押す',
      '④ 文字がたくさん流れて「added XXX packages」と出たら成功！',
    ],
    screen: <InstallScreen step={2} />,
  },
  {
    num: 4,
    emoji: '🚀',
    title: 'Claude Code を起動する',
    easy: 'ターミナルに「claude」と入力してEnterを押すと、自動でブラウザが開いてログイン画面になります。',
    point: 'ブラウザでログインしたら、またターミナルに戻ってくればOK！',
    code: 'claude',
    howto: [
      '① ターミナルに「claude」と入力してEnter',
      '② ブラウザが自動で開いてログイン画面になる',
      '③ claude.ai のメールアドレスとパスワードでログイン',
      '④ ログイン成功！ターミナルに戻るとClaude Codeが使える状態になっている',
    ],
    screen: <BrowserLoginScreen />,
  },
  {
    num: 5,
    emoji: '💬',
    title: '日本語で話しかけてみよう！',
    easy: 'ログインすると、このような画面になります。あとは普通に日本語で話しかけるだけ！英語は一切不要です。',
    point: 'なんでも日本語でOK！「ファイルを作って」「このエラーを直して」など気軽に話しかけよう',
    howto: [
      '① 画面下の入力欄に日本語で話しかける',
      '② Enterキーを押して送信',
      '③ Claudeが答えてくれる！（数秒〜数十秒で）',
      '④ やめるときは「exit」と入力するかCtrl+C',
    ],
    screen: (
      <ClaudeCodeScreen
        userText="HTMLファイルを作って。「こんにちは」と表示するだけでいいよ"
        claudeText="わかりました！index.html を作成しました。ブラウザで開くと「こんにちは」と表示されます ✓"
      />
    ),
  },
  {
    num: 6,
    emoji: '🎉',
    title: 'ファイルが作られた！確認しよう',
    easy: 'Claudeが「作成しました」と言ったら、実際にパソコンにファイルができています。VS Code や メモ帳で確認できます。',
    point: 'Claudeは本当にファイルを作ります！架空の話ではありません。',
    howto: [
      '① Claudeが「✓ 作成」と言ったファイル名をメモ',
      '② エクスプローラー（フォルダ）でそのファイルを見つける',
      '③ ダブルクリックして開いてみる',
      '④ 内容が正しければ成功！おかしければClaudeに「直して」と伝える',
    ],
    screen: (
      <FileCreatedScreen
        fileName="index.html"
        preview={'<h1>こんにちは</h1>'}
      />
    ),
  },
  {
    num: 7,
    emoji: '🔧',
    title: 'エラーが出ても怖くない！',
    easy: 'プログラムでエラーが出るのは普通のことです。エラーメッセージをそのままClaudeに見せるだけで直してくれます！',
    point: 'エラーが出たら「このエラーを直して」とClaudeに貼り付けるだけでOK',
    howto: [
      '① エラーメッセージが出たらコピー（Ctrl+A → Ctrl+C）',
      '② Claudeの入力欄に貼り付けて「直して」と送信',
      '③ Claudeが原因を説明しながら直してくれる',
      '④ 「Ctrl+C」でいつでも止められるから安心！',
    ],
    screen: <ErrorFixScreen />,
  },
]

// ────────────────────────────────────
// よくある疑問
// ────────────────────────────────────
const FAQ = [
  {
    q: '「コマンド」って何ですか？',
    a: 'ターミナル（黒い画面）に入力する「命令文」のことです。「npm install」や「claude」など英語の短い単語です。コピー&ペーストすれば打ち間違いは起きません！',
  },
  {
    q: '「インストール」って何ですか？',
    a: '「ソフトをパソコンに入れること」です。スマホでアプリをインストールするのと全く同じです！',
  },
  {
    q: '英語がまったくわかりません。大丈夫ですか？',
    a: '大丈夫！Claudeには日本語で話しかけられます。英語が出てくるのは「コマンド（短い命令文）」だけで、それもこのサイトのコピーボタンを使えばOKです。',
  },
  {
    q: '間違えてターミナルが動かなくなりました',
    a: '「Ctrl + C」キーを同時に押せばいつでも止められます！これさえ知っていれば怖いものはありません。',
  },
  {
    q: 'claude.ai のアカウントを持っていません',
    a: 'まず claude.ai でアカウントを作ってください（無料プランあり）。メールアドレスがあれば3分で作れます。',
  },
  {
    q: '「npm」って何ですか？',
    a: '「ソフトを自動でインストールしてくれる道具」です。難しく考えなくてOK。コマンドをコピー&ペーストするだけで自動で動きます。',
  },
  {
    q: 'インストールしたら課金されますか？',
    a: 'Claude Codeのインストール自体は無料です。ただし使い続けるには claude.ai の有料プランまたはAPI利用料が必要です（無料枠あり）。',
  },
  {
    q: 'Macでも使えますか？',
    a: '使えます！手順はほぼ同じです。ターミナルは「Launchpad→ターミナル」で開けます。コマンドはまったく同じです。',
  },
]

// ────────────────────────────────────
// 実例ギャラリー
// ────────────────────────────────────
const EXAMPLES = [
  {
    title: 'HTMLファイルを作る',
    emoji: '🌐',
    chat: { user: 'HTMLファイルを作って。「こんにちは」と表示するだけでいい', claude: 'index.html を作成しました！ブラウザで開くと「こんにちは」と表示されます ✓' },
    result: <VsCodeFileTree files={[{ name: 'index.html', isNew: true }]} />,
  },
  {
    title: 'エラーを直してもらう',
    emoji: '🔧',
    chat: null,
    result: <ErrorFixScreen />,
  },
  {
    title: 'Claudeと会話してプログラムを作る',
    emoji: '💬',
    chat: { user: 'ボタンを押したら「ありがとう！」と出るページを作って', claude: 'button.html を作成しました。ボタンをクリックすると「ありがとう！」とアラートが表示されます ✓' },
    result: <FileCreatedScreen fileName="button.html" preview={'<button onclick="alert(\'ありがとう！\')">押してね</button>'} />,
  },
  {
    title: '/init でプロジェクトを整理する',
    emoji: '⚡',
    chat: null,
    result: <InitResultScreen />,
  },
]

// ────────────────────────────────────
// コンポーネント
// ────────────────────────────────────

function StepCard({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className="rounded-2xl border border-gray-700 bg-gray-900 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-gray-800/50 transition-colors"
      >
        <div className="w-10 h-10 rounded-full bg-brand-500/20 border border-brand-500/40 flex items-center justify-center shrink-0">
          <span className="text-brand-400 font-bold text-sm">{step.num}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">{step.emoji}</span>
            <span className="text-white font-bold text-base truncate">{step.title}</span>
          </div>
          <p className="text-gray-400 text-xs mt-1 line-clamp-1">{step.easy}</p>
        </div>
        {open ? <ChevronUp size={18} className="text-gray-500 shrink-0" /> : <ChevronDown size={18} className="text-gray-500 shrink-0" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 space-y-5 border-t border-gray-800">
              {/* やさしい説明 */}
              <div className="pt-4 rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 mt-2">
                <p className="text-xs font-bold text-blue-300 mb-1">📖 かんたんに言うと</p>
                <p className="text-blue-100 text-sm leading-relaxed">{step.easy}</p>
              </div>

              {/* ポイント */}
              <div className="rounded-xl bg-yellow-500/10 border border-yellow-500/20 p-3">
                <p className="text-yellow-300 text-xs font-bold">💡 ポイント</p>
                <p className="text-yellow-100 text-xs mt-1">{step.point}</p>
              </div>

              {/* コード */}
              {'code' in step && step.code && (
                <div>
                  <p className="text-gray-400 text-xs mb-2">⌨️ ターミナルに入力するコマンド：</p>
                  <div className="rounded-lg bg-gray-950 border border-gray-700 p-3 flex items-center gap-3">
                    <span className="text-green-400 font-mono text-sm flex-1">{step.code}</span>
                    <button
                      onClick={() => navigator.clipboard.writeText((step as { code: string }).code)}
                      className="text-xs text-gray-500 hover:text-gray-300 border border-gray-700 rounded px-2 py-1 shrink-0 transition-colors"
                    >
                      コピー
                    </button>
                  </div>
                  <p className="text-gray-600 text-xs mt-1">↑ コピーボタン → 黒い画面に貼り付け → Enter</p>
                </div>
              )}

              {/* やり方 */}
              <div>
                <p className="text-gray-400 text-xs font-bold mb-2">📋 やり方（この通りやれば大丈夫）</p>
                <div className="space-y-1.5">
                  {step.howto.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-brand-400 text-xs shrink-0 mt-0.5">✓</span>
                      <span className="text-gray-300 text-xs leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 実画面 */}
              <div>
                <p className="text-gray-400 text-xs font-bold mb-2">🖥️ 実際の画面（こんなふうに見えます）</p>
                {step.screen}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-700 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 p-4 text-left hover:bg-gray-800/40 transition-colors"
      >
        <span className="text-yellow-400 font-bold text-sm shrink-0">Q{index + 1}.</span>
        <span className="text-white text-sm font-semibold flex-1">{q}</span>
        {open ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-800"
          >
            <div className="p-4 bg-gray-900/50">
              <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── タブ定義 ────────────────────────────────────────────
type Tab = 'start' | 'examples' | 'skill' | 'faq' | 'glossary'
const TABS: { id: Tab; label: string; emoji: string }[] = [
  { id: 'start',    label: 'インストール',   emoji: '🚀' },
  { id: 'examples', label: '実例ギャラリー', emoji: '🖼️' },
  { id: 'skill',   label: 'SKILL の使い方', emoji: '⚡' },
  { id: 'faq',     label: 'よくある疑問',   emoji: '❓' },
  { id: 'glossary',label: '用語集',         emoji: '📚' },
]

// ── ページ本体 ──────────────────────────────────────────
export function BeginnerGuide() {
  const [tab, setTab] = useState<Tab>('start')

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      {/* ヘッダー */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="text-center mb-4">
          <div className="text-5xl mb-3">👶</div>
          <h1 className="text-3xl font-bold text-white">初心者ガイド</h1>
          <p className="text-gray-400 mt-2">むずかしい言葉なし！画面の見本つきで一からわかりやすく説明します</p>
        </div>

        {/* 大事なことバナー */}
        <div className="rounded-2xl bg-gradient-to-r from-green-500/15 to-emerald-500/10 border border-green-500/30 p-5">
          <p className="text-green-300 font-bold text-base mb-3">📣 これだけ知っていればOK！</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { emoji: '📋', text: 'コマンドは\nコピー&ペーストでいい' },
              { emoji: '🛑', text: '困ったら\nCtrl+C で止まる' },
              { emoji: '💬', text: 'Claudeには\n日本語で話しかけられる' },
            ].map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-3 bg-green-500/10 rounded-xl p-3">
                <span className="text-2xl">{emoji}</span>
                <span className="text-green-100 text-xs whitespace-pre-line leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* タブ */}
      <div className="flex flex-wrap gap-2 mb-6">
        {TABS.map(({ id, label, emoji }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
              tab === id
                ? 'border-brand-500 bg-brand-500/15 text-white'
                : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-600'
            }`}
          >
            <span>{emoji}</span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >

          {/* ── インストール ── */}
          {tab === 'start' && (
            <div className="space-y-4">
              <div className="text-center py-3">
                <p className="text-white font-bold text-lg">🚀 ステップ順にやれば必ず使えます！</p>
                <p className="text-gray-400 text-sm">タップして開いてください</p>
              </div>
              {STEPS.map((step, i) => <StepCard key={step.num} step={step} index={i} />)}
            </div>
          )}

          {/* ── 実例ギャラリー ── */}
          {tab === 'examples' && (
            <div className="space-y-8">
              <div className="text-center py-3">
                <p className="text-white font-bold text-lg">🖼️ 実際にこんなことができます！</p>
                <p className="text-gray-400 text-sm">画面を見てイメージをつかんでください</p>
              </div>

              {/* PowerShell の基本操作 */}
              <div className="space-y-3">
                <h3 className="text-white font-bold flex items-center gap-2">💻 ターミナル（黒い画面）の基本</h3>
                <PowerShellScreen lines={[
                  { text: 'Windows PowerShell', color: 'text-blue-300' },
                  { text: 'Copyright (C) Microsoft Corporation.', color: 'text-gray-500' },
                  { text: '' },
                  { text: 'PS C:\\Users\\あなた> claude', color: 'text-blue-200' },
                  { text: '→ Claude Code が起動します...', color: 'text-yellow-300' },
                ]} />
                <p className="text-gray-500 text-xs text-center">↑ 青い画面がターミナル（PowerShell）です。「claude」と入力してEnter！</p>
              </div>

              {EXAMPLES.map((ex) => (
                <div key={ex.title} className="space-y-3">
                  <h3 className="text-white font-bold flex items-center gap-2">
                    <span>{ex.emoji}</span> {ex.title}
                  </h3>
                  {ex.chat && (
                    <ClaudeCodeScreen userText={ex.chat.user} claudeText={ex.chat.claude} />
                  )}
                  {ex.result}
                </div>
              ))}
            </div>
          )}

          {/* ── SKILL の使い方 ── */}
          {tab === 'skill' && (
            <div className="space-y-6">
              <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
                <p className="text-purple-300 font-bold text-base mb-1">⚡ SKILL ってなに？</p>
                <p className="text-purple-100 text-sm leading-relaxed">
                  Claude Code に最初から入っている「便利な機能のセット」です。<br />
                  <strong>「Shift + Tab」</strong> キーを押すと出てくるメニューから選んで使います。
                </p>
              </div>

              <div>
                <p className="text-white text-sm font-bold mb-2">① Shift + Tab を押すとこのメニューが出る</p>
                <SkillMenuScreen highlighted="init" />
                <p className="text-gray-500 text-xs mt-2 text-center">↑ 矢印キーで選んでEnterを押すだけ！</p>
              </div>

              <div className="space-y-3">
                <p className="text-white text-sm font-bold">② よく使うSKILL</p>
                {[
                  { name: '/init', emoji: '🆕', desc: 'プロジェクトの設定を自動で作ってくれる。最初に一回やるだけでOK', screen: <InitResultScreen /> },
                  { name: '/review', emoji: '🔍', desc: 'コードのどこが悪いか教えてくれる', screen: null },
                  { name: '/loop', emoji: '🔄', desc: '同じ作業を何度も繰り返してくれる', screen: null },
                  { name: '/simplify', emoji: '✨', desc: 'コードをきれいに整理してくれる', screen: null },
                ].map(({ name, emoji, desc, screen }) => (
                  <div key={name} className="rounded-xl bg-gray-900 border border-gray-800 overflow-hidden">
                    <div className="flex items-center gap-4 p-4">
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <p className="text-brand-400 font-mono font-bold text-sm">{name}</p>
                        <p className="text-gray-300 text-xs">{desc}</p>
                      </div>
                    </div>
                    {screen && <div className="px-4 pb-4">{screen}</div>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── よくある疑問 ── */}
          {tab === 'faq' && (
            <div className="space-y-3">
              <div className="text-center py-3">
                <p className="text-white font-bold text-lg">❓ よくある疑問</p>
                <p className="text-gray-400 text-sm">タップして答えを見てください</p>
              </div>
              {FAQ.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} index={i} />)}
            </div>
          )}

          {/* ── 用語集 ── */}
          {tab === 'glossary' && (
            <div>
              <div className="text-center py-3 mb-4">
                <p className="text-white font-bold text-lg">📚 用語集</p>
                <p className="text-gray-400 text-sm">むずかしい言葉をかんたんに説明します</p>
              </div>
              <GlossarySection />
            </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  )
}
