import { TerminalMockup } from './TerminalMockup'

interface SkillExample {
  name: string
  description: string
  emoji: string
}

const SKILL_EXAMPLES: SkillExample[] = [
  { name: '/simplify', description: 'コードをシンプルにする', emoji: '✨' },
  { name: '/review', description: 'コードを確認・添削', emoji: '🔍' },
  { name: '/init', description: 'CLAUDE.mdを自動作成', emoji: '📋' },
  { name: '/security-review', description: 'セキュリティのチェック', emoji: '🛡️' },
]

/**
 * SKILLの入力方法を視覚的に説明するガイド
 * 「どこに入力するの？」という疑問を解消する
 */
export function SkillInputGuide() {
  return (
    <div className="space-y-6">

      {/* SKILL とは */}
      <div className="rounded-xl border border-brand-500/40 bg-brand-500/5 p-5">
        <h3 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
          ⭐ SKILLとは？
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          SKILLは Claude Code に追加できる「<strong className="text-white">特別なコマンド</strong>」です。<br />
          スラッシュ（<code className="bg-gray-800 text-brand-300 px-1.5 py-0.5 rounded text-xs">/</code>）をつけて入力するだけで、
          特定の機能を使えます。
        </p>
      </div>

      {/* ステップ1：ターミナルを開く */}
      <div>
        <h3 className="font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">1</span>
          まず Claude Code を起動する
        </h3>
        <p className="text-gray-400 text-sm mb-3 ml-9">
          ターミナル（黒い画面）を開いて、下のコマンドを入力してEnterを押します。
        </p>
        <div className="ml-9 bg-gray-950 border border-gray-700 rounded-lg px-4 py-2.5 font-mono text-sm text-green-300 flex items-center gap-2">
          <span className="text-gray-600 select-none">$</span>
          <span>claude</span>
        </div>

        <div className="mt-4 ml-9 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <p className="text-blue-300 text-xs">
            💡 <strong>ターミナルの開き方：</strong><br />
            Windows：「スタートメニュー」→「PowerShell」または「コマンドプロンプト」と検索<br />
            Mac：「Finder」→「アプリケーション」→「ユーティリティ」→「ターミナル」
          </p>
        </div>
      </div>

      {/* ステップ2：入力場所の案内 */}
      <div>
        <h3 className="font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">2</span>
          この画面が出たら、下の入力欄にSKILL名を入力
        </h3>

        {/* ターミナルのモックアップ */}
        <div className="ml-9 mt-2">
          <TerminalMockup
            messages={[
              { role: 'system', text: '$ claude' },
              { role: 'claude', text: 'こんにちは！Claude Code です。スキルを使うには / から始めてください 😊' },
            ]}
            inputPlaceholder="/simplify ← こんな風に入力してEnter！"
            highlightInput={true}
            inputHint="👆 ここに /スキル名 を入力してEnterキーを押す"
          />
        </div>
      </div>

      {/* ステップ3：使えるSKILL一覧 */}
      <div>
        <h3 className="font-bold text-white mb-3 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full bg-brand-500/20 border border-brand-500/50 flex items-center justify-center text-brand-400 font-bold text-sm shrink-0">3</span>
          使えるSKILLの例
        </h3>
        <div className="ml-9 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SKILL_EXAMPLES.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700"
            >
              <span className="text-2xl shrink-0">{skill.emoji}</span>
              <div>
                <code className="text-brand-400 font-mono text-sm font-bold">{skill.name}</code>
                <p className="text-gray-400 text-xs mt-0.5">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* よくある間違い */}
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
        <h4 className="font-bold text-red-400 mb-2">❌ よくある間違い</h4>
        <ul className="space-y-1.5">
          <li className="text-sm text-gray-300 flex items-start gap-2">
            <span className="text-red-400 shrink-0">✗</span>
            <span>ブラウザのアドレスバーに入力する → <span className="text-gray-500">違います！</span></span>
          </li>
          <li className="text-sm text-gray-300 flex items-start gap-2">
            <span className="text-red-400 shrink-0">✗</span>
            <span>メモ帳に入力する → <span className="text-gray-500">違います！</span></span>
          </li>
          <li className="text-sm text-green-400 flex items-start gap-2">
            <span className="text-green-400 shrink-0">✓</span>
            <span>Claude Code の <strong>チャット入力欄</strong>（ターミナル内）に入力する → <span className="text-green-300">これが正解！</span></span>
          </li>
        </ul>
      </div>
    </div>
  )
}
