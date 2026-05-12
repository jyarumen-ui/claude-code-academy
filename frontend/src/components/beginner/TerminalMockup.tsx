/** Claude Code ターミナルの見た目を再現したCSS モックアップ */

interface Message {
  role: 'user' | 'claude' | 'system'
  text: string
}

interface TerminalMockupProps {
  /** 表示する会話メッセージ */
  messages?: Message[]
  /** 入力欄に表示するプレースホルダー */
  inputPlaceholder?: string
  /** 入力欄をハイライト（ここに入力してね）するか */
  highlightInput?: boolean
  /** 入力欄の上に表示する吹き出しテキスト */
  inputHint?: string
  title?: string
}

const DEFAULT_MESSAGES: Message[] = [
  { role: 'system', text: '$ claude' },
  { role: 'claude', text: 'こんにちは！Claude Code です。何でも聞いてください 😊' },
  { role: 'user', text: 'Reactのボタンコンポーネントを作って' },
  { role: 'claude', text: 'はい！Button.tsx を作成します...\n✓ ファイルを作成しました' },
]

export function TerminalMockup({
  messages = DEFAULT_MESSAGES,
  inputPlaceholder = 'メッセージを入力...',
  highlightInput = true,
  inputHint = '👆 ここに文字を入力してEnterキーを押す',
  title = 'Terminal — claude',
}: TerminalMockupProps) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl bg-gray-900 font-mono text-sm select-none">
      {/* ── ウィンドウタイトルバー ── */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 border-b border-gray-700">
        {/* 信号ボタン (Mac風) */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="flex-1 text-center text-xs text-gray-400">{title}</span>
      </div>

      {/* ── 会話エリア ── */}
      <div className="p-4 space-y-3 min-h-[160px]">
        {messages.map((msg, i) => {
          if (msg.role === 'system') {
            return (
              <div key={i} className="text-green-400 text-xs">{msg.text}</div>
            )
          }
          if (msg.role === 'user') {
            return (
              <div key={i} className="flex gap-2">
                <span className="text-blue-400 shrink-0">あなた:</span>
                <span className="text-gray-200">{msg.text}</span>
              </div>
            )
          }
          return (
            <div key={i} className="flex gap-2">
              <span className="text-purple-400 shrink-0">Claude:</span>
              <span className="text-gray-300 whitespace-pre-line">{msg.text}</span>
            </div>
          )
        })}
      </div>

      {/* ── 入力エリア ── */}
      <div className="px-4 pb-4 pt-1">
        <div className="relative">
          {/* ヒント吹き出し */}
          {highlightInput && inputHint && (
            <div className="absolute -top-8 left-0 z-10">
              <div className="bg-brand-500 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                {inputHint}
              </div>
              {/* 吹き出しの三角 */}
              <div className="w-2 h-2 bg-brand-500 rotate-45 ml-4 -mt-1" />
            </div>
          )}

          {/* 入力ボックス */}
          <div className={
            highlightInput
              ? 'border-2 border-brand-500 rounded-lg px-3 py-2.5 bg-gray-800 flex items-center gap-2 ring-2 ring-brand-500/30'
              : 'border border-gray-700 rounded-lg px-3 py-2.5 bg-gray-800 flex items-center gap-2'
          }>
            <span className="text-gray-500 text-sm flex-1">{inputPlaceholder}</span>
            {/* カーソル */}
            <span className="w-0.5 h-4 bg-brand-400 animate-pulse" />
            {/* Enterキー */}
            <span className="text-xs text-gray-600 border border-gray-700 rounded px-1.5 py-0.5 shrink-0">
              Enter ↵
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
