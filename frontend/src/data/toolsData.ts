// App版 / CLI版 / Codex の比較データ

export interface CompareRow {
  feature: string
  app: { value: string; good: boolean | null }
  cli: { value: string; good: boolean | null }
  codex: { value: string; good: boolean | null }
}

export interface ToolInfo {
  id: 'app' | 'cli' | 'codex'
  name: string
  emoji: string
  tagline: string
  description: string
  color: string
  pros: string[]
  cons: string[]
  bestFor: string[]
  installSteps: { title: string; code?: string; note?: string }[]
}

// ── ツール詳細情報 ─────────────────────────────────────
export const TOOLS: ToolInfo[] = [
  {
    id: 'app',
    name: 'Claude.ai アプリ版',
    emoji: '🌐',
    tagline: 'ブラウザ・デスクトップで使う',
    description: 'claude.ai をブラウザで開いたり、専用のデスクトップアプリを使う方法。インストール不要で今すぐ使える。',
    color: '#8b5cf6',
    pros: [
      'インストール不要。ブラウザですぐ使える',
      '画像・PDFをドラッグ＆ドロップで添付できる',
      'Projects機能でファイルをまとめて管理',
      'スマホからも使える',
      '操作が直感的でプログラミング知識不要',
    ],
    cons: [
      'パソコンのファイルを直接操作できない',
      'ターミナルのコマンドを自動実行できない',
      'SKILLやHooksなどの高度機能が使えない',
      'MCPサーバーとの連携が限定的',
    ],
    bestFor: [
      '文章作成・翻訳・要約',
      '画像の分析・説明',
      'プログラミングの質問・学習',
      'アイデア出し・ブレインストーミング',
    ],
    installSteps: [
      {
        title: 'ブラウザで claude.ai を開く',
        note: 'Chrome / Safari / Edge など何でもOK',
      },
      {
        title: 'アカウントを作成してログイン',
        note: 'メールアドレスがあれば無料登録できる',
      },
      {
        title: '画面中央の入力欄に話しかけるだけ！',
        note: '「コードを書いて」「説明して」など日本語でOK',
      },
    ],
  },
  {
    id: 'cli',
    name: 'Claude Code（CLI版）',
    emoji: '⚡',
    tagline: 'ターミナルで使うプロ仕様',
    description: 'ターミナル（黒い画面）の中でClaude AIを使う開発者向けツール。ファイル操作・コマンド実行・自動化が可能。',
    color: '#0ea5e9',
    pros: [
      'パソコンのファイルを直接読み書きできる',
      'ターミナルのコマンドを自動で実行できる',
      'SKILL・Hooks・MCPなど高度機能が使える',
      '複数ファイルを一気に変更できる',
      '作業を自動化して繰り返し作業をゼロにできる',
    ],
    cons: [
      'インストール作業が必要（Node.js + npm）',
      'ターミナルの基本知識が必要',
      '画像の添付ができない（テキストのみ）',
      '設定が多くて最初は難しい',
    ],
    bestFor: [
      'プログラムのコードを書く・直す',
      'ファイルの一括変換・整理',
      'GitHubへの自動プッシュ',
      'SNS投稿の自動化スクリプト作成',
      'テスト・ビルドの自動化',
    ],
    installSteps: [
      {
        title: 'Node.js をインストール',
        note: 'nodejs.org から「LTS版」をダウンロード',
      },
      {
        title: 'Claude Code をインストール',
        code: 'npm install -g @anthropic-ai/claude-code',
      },
      {
        title: 'ターミナルで起動',
        code: 'claude',
        note: '初回はブラウザでログイン画面が開く',
      },
    ],
  },
  {
    id: 'codex',
    name: 'OpenAI Codex CLI',
    emoji: '🤖',
    tagline: 'OpenAIのターミナル型AIツール',
    description: 'OpenAI（ChatGPTの会社）が作ったターミナル型のコーディングAI。Claude Codeと同じような使い方ができる競合ツール。',
    color: '#10b981',
    pros: [
      'GPT-4o / o3 モデルが使える',
      'コードの自動修正・テスト実行が得意',
      'OpenAIのAPIキーがあればすぐ使える',
      'Sandboxモードで安全に実行できる',
      'Claude Codeと同時に使って使い分け可能',
    ],
    cons: [
      'OpenAIのAPIキーとお金が必要（従量課金）',
      'MCPサーバーは非対応（2026年現在）',
      'SKILLのようなカスタム拡張機能が少ない',
      'Hooksによる自動化は未対応',
    ],
    bestFor: [
      'Claude Codeと並行して使い比べる',
      'GPT-4oモデルを使いたい場面',
      'コードの自動テスト・デバッグ',
      '複数AIを使い分けたい上級者向け',
    ],
    installSteps: [
      {
        title: 'Node.js をインストール（まだの場合）',
        code: 'node --version',
        note: 'バージョンが表示されればOK',
      },
      {
        title: 'Codex CLI をインストール',
        code: 'npm install -g @openai/codex',
      },
      {
        title: 'OpenAI APIキーを設定',
        code: 'export OPENAI_API_KEY="sk-..."',
        note: 'platform.openai.comでAPIキーを取得する',
      },
      {
        title: '起動する',
        code: 'codex',
      },
    ],
  },
]

// ── 機能比較表 ─────────────────────────────────────────
export const COMPARE_ROWS: CompareRow[] = [
  {
    feature: 'インストール不要',
    app:   { value: '✅ 不要', good: true },
    cli:   { value: '❌ 必要', good: false },
    codex: { value: '❌ 必要', good: false },
  },
  {
    feature: 'ファイルの直接操作',
    app:   { value: '❌ できない', good: false },
    cli:   { value: '✅ できる', good: true },
    codex: { value: '✅ できる', good: true },
  },
  {
    feature: 'ターミナルコマンド実行',
    app:   { value: '❌ できない', good: false },
    cli:   { value: '✅ できる', good: true },
    codex: { value: '✅ できる', good: true },
  },
  {
    feature: '画像・PDF添付',
    app:   { value: '✅ できる', good: true },
    cli:   { value: '⚠️ 一部対応', good: null },
    codex: { value: '❌ 未対応', good: false },
  },
  {
    feature: 'SKILL（スラッシュコマンド）',
    app:   { value: '❌ なし', good: false },
    cli:   { value: '✅ 豊富', good: true },
    codex: { value: '⚠️ 限定的', good: null },
  },
  {
    feature: 'MCP連携',
    app:   { value: '⚠️ 一部対応', good: null },
    cli:   { value: '✅ フル対応', good: true },
    codex: { value: '❌ 未対応', good: false },
  },
  {
    feature: 'Hooks（自動化）',
    app:   { value: '❌ なし', good: false },
    cli:   { value: '✅ あり', good: true },
    codex: { value: '❌ なし', good: false },
  },
  {
    feature: 'スマホ対応',
    app:   { value: '✅ 対応', good: true },
    cli:   { value: '❌ 非対応', good: false },
    codex: { value: '❌ 非対応', good: false },
  },
  {
    feature: '使えるAIモデル',
    app:   { value: 'Claude 3.5〜4系', good: null },
    cli:   { value: 'Claude 3.5〜4系', good: null },
    codex: { value: 'GPT-4o / o3', good: null },
  },
  {
    feature: '料金',
    app:   { value: '無料プランあり', good: true },
    cli:   { value: 'Claude利用料金', good: null },
    codex: { value: 'OpenAI APIキー必要', good: null },
  },
  {
    feature: '初心者向け',
    app:   { value: '⭐⭐⭐ とても易しい', good: true },
    cli:   { value: '⭐⭐ 中程度', good: null },
    codex: { value: '⭐⭐ 中程度', good: null },
  },
]

// ── Claude Code × Codex 並行利用 ─────────────────────
export const PARALLEL_USE = {
  how: [
    {
      title: 'Claude Code でプロジェクトを管理しながら Codex で特定タスクを実行',
      description: 'Claude Code でファイル全体の構造管理・CLAUDE.md設定・Hooks自動化を担当。\nCodex にはコードの特定部分のデバッグやテスト生成を任せる。',
      emoji: '🔀',
    },
    {
      title: '同じコードを両方に投げて回答を比較する',
      description: '難しいバグを Claude Code と Codex の両方に質問して、答えを比較することでより確実な解決策を見つけられる。',
      emoji: '⚖️',
    },
    {
      title: 'Claude Code 内から Codex を呼び出す（MCP経由）',
      description: 'Claude CodeのHooks設定で、特定のファイル保存時にCodexのAPIを呼び出すスクリプトを実行できる。',
      emoji: '🔗',
    },
  ],
  codexInClaudeCode: `# Claude Code 内で Codex を呼び出す例

## 方法1: シェルスクリプト経由
Claude Codeのチャットで以下を指示する：

> 「このファイルをCodex CLIでも確認して」

Claude Code が自動的に:
1. ファイルを保存
2. \`codex "このコードのバグを見つけて" --file app.ts\` を実行
3. 結果を取り込んで報告

## 方法2: CLAUDE.md に手順を書いておく
\`\`\`markdown
# 重要なルール
- バグ修正は必ずCodexでも確認すること
- \`codex "バグチェック" --file {filename}\` を実行してから報告
\`\`\`

## 方法3: Hooks で自動化
\`\`\`json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write",
      "hooks": [{
        "type": "command",
        "command": "codex 'コードレビュー' --file {{file}}"
      }]
    }]
  }
}
\`\`\``,
  merit: [
    '2つのAIの意見を比較できるので精度が上がる',
    'Claude が苦手な部分を Codex で補える（逆も同様）',
    'どちらかのAPIが落ちてもすぐ切り替えられる',
    'コストを分散できる（高精度な質問はClaudeに、単純なものはCodexに）',
  ],
  demerit: [
    'APIキーを2つ管理する必要がある（コスト・手間）',
    '両方の設定を覚えないといけない',
    '回答が矛盾した場合にどちらを信じるか判断が難しい',
    'ワークフローが複雑になりすぎる可能性がある',
  ],
}
