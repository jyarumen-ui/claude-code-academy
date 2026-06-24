/** 実画面そっくりなスクリーンショット風コンポーネント集 */

// ── 共通パーツ ──────────────────────────────────────────
function TitleBar({ title, color = 'gray' }: { title: string; color?: 'gray' | 'blue' | 'dark' }) {
  const bg = color === 'blue' ? 'bg-blue-900' : color === 'dark' ? 'bg-gray-950' : 'bg-gray-800'
  return (
    <div className={`${bg} px-4 py-2 flex items-center gap-2 border-b border-gray-700`}>
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="ml-3 text-gray-400 text-xs">{title}</span>
    </div>
  )
}

// ── Claude Code チャット画面 ────────────────────────────
export function ClaudeCodeScreen({ userText, claudeText }: { userText?: string; claudeText?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — claude" />
      <div className="bg-gray-950 p-4 space-y-3 min-h-[180px]">
        <p className="text-gray-500 text-xs">╭─────────────────────────────╮</p>
        <p className="text-gray-500 text-xs">│  Claude Code  ✻             │</p>
        <p className="text-gray-500 text-xs">╰─────────────────────────────╯</p>
        {userText && (
          <div className="mt-3">
            <span className="text-green-400">あなた &gt; </span>
            <span className="text-white">{userText}</span>
          </div>
        )}
        {claudeText && (
          <div className="mt-2 ml-2 border-l-2 border-brand-500 pl-3">
            <span className="text-brand-400 text-xs font-bold">● Claude</span>
            <p className="text-gray-200 mt-1 leading-relaxed">{claudeText}</p>
          </div>
        )}
        <div className="mt-4 flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-2 bg-gray-900">
          <span className="text-gray-600 text-xs">{'>'}</span>
          <span className="text-gray-500 text-xs flex-1">ここに話しかける（日本語でOK）</span>
          <span className="text-gray-600 text-xs animate-pulse">█</span>
        </div>
        <p className="text-gray-600 text-xs text-center">Enter で送信 / Shift+Tab でメニュー</p>
      </div>
    </div>
  )
}

// ── Node.js ダウンロードサイト ──────────────────────────
export function NodeJsWebScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-sans">
      <TitleBar title="Chrome — nodejs.org/ja/download" color="blue" />
      <div className="bg-gray-100 px-3 py-1.5 border-b border-gray-300 flex items-center gap-2">
        <div className="flex-1 bg-white border border-gray-300 rounded-full px-3 py-0.5 text-xs text-gray-600 flex items-center gap-1">
          <span className="text-green-600">🔒</span>
          <span>nodejs.org/ja/download</span>
        </div>
      </div>
      <div className="bg-white p-5 text-center">
        <div className="text-xl font-bold text-gray-800 mb-1">Node.js をダウンロード</div>
        <p className="text-gray-500 text-xs mb-4">LTS版（長期サポート）がおすすめです</p>
        <div className="flex gap-3 justify-center">
          <div className="bg-green-500 text-white rounded-xl px-5 py-3 text-sm font-bold shadow-md">
            <div className="text-xs opacity-80 mb-0.5">✅ 推奨版 (LTS)</div>
            <div>22.x.x LTS</div>
            <div className="text-xs opacity-80 mt-1 bg-white/20 rounded px-1">← これをクリック！</div>
          </div>
          <div className="bg-gray-200 text-gray-600 rounded-xl px-5 py-3 text-sm font-bold opacity-60">
            <div className="text-xs mb-0.5">最新版</div>
            <div>24.x.x Current</div>
            <div className="text-xs mt-1">（上級者向け）</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Windows スタートメニュー検索 ────────────────────────
export function WindowsSearchScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-sans">
      <div className="bg-gray-900 px-4 py-1.5 border-b border-gray-700">
        <span className="text-white text-xs">🪟 スタートメニュー</span>
      </div>
      <div className="bg-gray-800 p-3">
        <div className="bg-gray-700 border border-blue-400 rounded-md px-3 py-2 mb-3 flex items-center gap-2">
          <span className="text-gray-400 text-xs">🔍</span>
          <span className="text-white text-sm">PowerShell</span>
          <span className="text-blue-400 text-xs animate-pulse">|</span>
        </div>
        <div className="space-y-1">
          <div className="bg-blue-600 rounded-md px-3 py-2 flex items-center gap-2">
            <span className="text-xl">💻</span>
            <div>
              <p className="text-white text-xs font-bold">Windows PowerShell</p>
              <p className="text-blue-200 text-xs">アプリ</p>
            </div>
            <span className="ml-auto text-yellow-300 text-xs font-bold">← クリック！</span>
          </div>
          <div className="bg-gray-700 rounded-md px-3 py-2 flex items-center gap-2 opacity-50">
            <span className="text-xl">🔧</span>
            <p className="text-gray-300 text-xs">Windows PowerShell ISE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── PowerShell ターミナル ───────────────────────────────
export function PowerShellScreen({ lines }: { lines: { text: string; color?: string }[] }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <div className="bg-blue-900 px-4 py-2 flex items-center gap-2 border-b border-blue-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-blue-200 text-xs">Windows PowerShell</span>
      </div>
      <div className="bg-gray-950 p-4 space-y-1 text-xs min-h-[120px]">
        {lines.map((line, i) => (
          <p key={i} className={line.color ?? 'text-gray-300'}>{line.text}</p>
        ))}
        <span className="text-gray-500 animate-pulse">█</span>
      </div>
    </div>
  )
}

// ── npm install 進捗 ────────────────────────────────────
export function InstallScreen({ step }: { step: 1 | 2 | 3 }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — PowerShell" />
      <div className="bg-gray-950 p-4 space-y-1 text-xs">
        {step >= 1 && (
          <>
            <p className="text-blue-300">PS C:\Users\あなた{'>'} <span className="text-white">npm install -g @anthropic-ai/claude-code</span></p>
            <p className="text-gray-500 mt-1">npm warn deprecated...</p>
            <p className="text-gray-400">⠹ installing packages...</p>
          </>
        )}
        {step >= 2 && (
          <>
            <p className="text-gray-400 mt-1">added 847 packages in 23s</p>
            <p className="text-green-400 font-bold mt-1">✓ インストール完了！</p>
            <p className="text-blue-300 mt-2">PS C:\Users\あなた{'>'} <span className="text-white">claude</span></p>
          </>
        )}
        {step >= 3 && (
          <>
            <p className="text-yellow-300 mt-1">→ ブラウザでログイン画面が開きます...</p>
            <p className="text-gray-500 text-xs">  Waiting for authentication...</p>
            <p className="text-green-400 mt-1">✓ ログイン成功！Claude Code を起動します</p>
          </>
        )}
      </div>
    </div>
  )
}

// ── ブラウザ ログイン画面 ───────────────────────────────
export function BrowserLoginScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-sans">
      <TitleBar title="Chrome — claude.ai/login" color="blue" />
      <div className="bg-gray-100 px-3 py-1 border-b border-gray-300 flex items-center gap-2">
        <div className="flex-1 bg-white border border-gray-300 rounded-full px-3 py-0.5 text-xs text-gray-600 flex items-center gap-1">
          <span className="text-green-600">🔒</span>
          <span>claude.ai/login?redirect=...</span>
        </div>
      </div>
      <div className="bg-white p-5 flex flex-col items-center gap-3">
        <div className="text-3xl">✦</div>
        <div className="text-gray-800 font-bold text-base">Claude にログイン</div>
        <div className="w-full max-w-xs space-y-2">
          <div className="border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-500">📧 メールアドレス</div>
          <div className="border border-blue-400 rounded-lg px-3 py-2 text-xs text-gray-500">🔑 パスワード</div>
          <div className="bg-orange-500 text-white rounded-lg px-3 py-2.5 text-center text-sm font-bold cursor-pointer">
            ログイン →
          </div>
        </div>
        <p className="text-gray-400 text-xs">claude.ai のアカウントでOK</p>
      </div>
    </div>
  )
}

// ── ログイン後のClaude Code起動 ─────────────────────────
export function LoginScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — PowerShell" />
      <div className="bg-gray-950 p-4 space-y-2 text-xs">
        <p className="text-blue-300">PS C:\Users\あなた{'>'} <span className="text-white">claude</span></p>
        <p className="text-yellow-300 mt-2">→ ブラウザでログインページが開きます...</p>
        <p className="text-gray-500">  ログインURL: https://claude.ai/...</p>
        <p className="text-green-400 mt-3 border-t border-gray-800 pt-3">✓ ログイン完了！Claude Codeが使えます</p>
      </div>
    </div>
  )
}

// ── Claude がファイルを作成した画面 ────────────────────
export function FileCreatedScreen({ fileName, preview }: { fileName: string; preview: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — claude" />
      <div className="bg-gray-950 p-4 space-y-3 text-xs">
        <div>
          <span className="text-green-400">あなた &gt; </span>
          <span className="text-white">HTMLファイルを作って。「こんにちは」と表示して</span>
        </div>
        <div className="border-l-2 border-brand-500 pl-3">
          <p className="text-brand-400 font-bold">● Claude</p>
          <p className="text-gray-300 mt-1">
            わかりました！<span className="text-yellow-300">{fileName}</span> を作成します。
          </p>
          <div className="mt-2 bg-gray-900 border border-gray-700 rounded p-2">
            <p className="text-green-400">✚ 作成: {fileName}</p>
            <p className="text-gray-500 mt-1 font-mono text-xs">{preview}</p>
          </div>
          <p className="text-gray-300 mt-2">完成しました！ブラウザで開いてみてください 🎉</p>
        </div>
      </div>
    </div>
  )
}

// ── エラー → Claude が修正した画面 ─────────────────────
export function ErrorFixScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — claude" />
      <div className="bg-gray-950 p-4 space-y-3 text-xs">
        <div>
          <span className="text-green-400">あなた &gt; </span>
          <span className="text-white">エラーが出て動かないんだけど直して</span>
        </div>
        <div className="border-l-2 border-brand-500 pl-3">
          <p className="text-brand-400 font-bold">● Claude</p>
          <p className="text-gray-300 mt-1">エラーを確認します...</p>
          <div className="mt-1 bg-red-950 border border-red-800 rounded p-2">
            <p className="text-red-400">✗ Error: Cannot find module 'express'</p>
          </div>
          <p className="text-gray-300 mt-2">原因がわかりました！必要なソフトが入っていません。今すぐ直します。</p>
          <div className="mt-1 bg-gray-900 border border-gray-700 rounded p-2">
            <p className="text-gray-400">$ npm install express</p>
            <p className="text-green-400 mt-1">✓ 修正完了！もう一度試してみてください。</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── SKILLメニュー画面 ───────────────────────────────────
export function SkillMenuScreen({ highlighted }: { highlighted?: string }) {
  const skills = ['init', 'review', 'schedule', 'loop', 'simplify']
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — claude (SKILLメニュー)" />
      <div className="bg-gray-950 p-4">
        <p className="text-gray-400 text-xs mb-3">Shift + Tab を押すとこのメニューが開く↓</p>
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="bg-gray-800 px-3 py-1.5 text-gray-400 text-xs border-b border-gray-700">⚡ スキル一覧</div>
          {skills.map((s) => (
            <div
              key={s}
              className={`px-3 py-2 text-xs border-b border-gray-800 last:border-0 flex items-center gap-2 ${
                highlighted === s ? 'bg-brand-500/20 text-brand-300' : 'text-gray-300'
              }`}
            >
              {highlighted === s ? <span className="text-brand-400">▶</span> : <span className="text-gray-700">　</span>}
              /{s}
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-xs mt-2 text-center">↑ / ↓キーで選んで Enter</p>
      </div>
    </div>
  )
}

// ── /init 実行後の CLAUDE.md 生成画面 ──────────────────
export function InitResultScreen() {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <TitleBar title="Terminal — claude" />
      <div className="bg-gray-950 p-4 space-y-2 text-xs">
        <p className="text-gray-400">スキル <span className="text-purple-400">/init</span> を実行中...</p>
        <p className="text-gray-500">プロジェクトを分析しています...</p>
        <div className="bg-gray-900 border border-gray-700 rounded p-2 mt-2">
          <p className="text-green-400">✚ 作成: CLAUDE.md</p>
          <p className="text-gray-500 mt-1">このプロジェクトのルールを自動で書き込みました</p>
        </div>
        <div className="border-l-2 border-brand-500 pl-3 mt-2">
          <p className="text-brand-400 font-bold">● Claude</p>
          <p className="text-gray-300 mt-1">
            CLAUDE.md を作成しました！<br />
            次回からこのフォルダで作業するとき、プロジェクトのことを自動で覚えています。
          </p>
        </div>
      </div>
    </div>
  )
}

// ── VS Code ファイルツリー ──────────────────────────────
export function VsCodeFileTree({ files }: { files: { name: string; isNew?: boolean }[] }) {
  const icon = (name: string) =>
    name.endsWith('.html') ? '🌐' : name.endsWith('.js') ? '📜' : name.endsWith('.css') ? '🎨' : '📄'
  return (
    <div className="rounded-xl overflow-hidden border border-gray-600 shadow-2xl text-sm font-mono">
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-gray-400 text-xs">VS Code — エクスプローラー</span>
      </div>
      <div className="bg-gray-900 flex">
        <div className="bg-gray-800 w-8 flex flex-col items-center py-2 gap-3 text-gray-500 text-xs border-r border-gray-700">
          <span>📁</span><span>🔍</span><span>🔀</span>
        </div>
        <div className="flex-1 p-3 text-xs">
          <p className="text-gray-400 mb-2 font-bold text-xs uppercase tracking-wide">エクスプローラー</p>
          <p className="text-gray-500 mb-1.5 flex items-center gap-1">▼ 📁 MY-PROJECT</p>
          {files.map((f) => (
            <div key={f.name} className={`flex items-center gap-1.5 pl-4 py-0.5 ${f.isNew ? 'text-green-400' : 'text-gray-300'}`}>
              <span>{icon(f.name)}</span>
              <span>{f.name}</span>
              {f.isNew && <span className="text-green-500 text-xs ml-1 bg-green-500/10 px-1 rounded">NEW</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
