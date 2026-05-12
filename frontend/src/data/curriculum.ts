// カリキュラム全データ — Level 0〜7の完全コンテンツ

export interface CodeExample {
  title: string
  code: string
  language: string
  explanation?: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface ExternalLink {
  title: string
  url: string
  description: string
  type: 'official' | 'article' | 'video' | 'course'
}

export interface Lesson {
  id: string
  title: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  type: 'reading' | 'hands-on' | 'quiz' | 'video'
  content: string
  codeExamples?: CodeExample[]
  quiz?: QuizQuestion[]
  externalLinks?: ExternalLink[]
  tags: string[]
}

export interface Level {
  id: number
  name: string
  emoji: string
  description: string
  color: string
  bgGradient: string
  lessons: Lesson[]
  prerequisites: number[]
  estimatedHours: number
  skills: string[]
}

export const CURRICULUM: Level[] = [
  {
    id: 0,
    name: 'Claudeって何？',
    emoji: '🌱',
    description: 'AIの基礎からClaude / Claude Codeの違いまで。完全初心者スタート。',
    color: '#10b981',
    bgGradient: 'from-emerald-500/20 to-teal-500/20',
    estimatedHours: 1,
    prerequisites: [],
    skills: ['AI基礎理解', 'Claude.aiの使い方', '料金プラン把握', 'LLMの概念'],
    lessons: [
      {
        id: '0-1',
        title: 'AIとLLMを5分で理解する',
        description: 'ChatGPT・Gemini・Claudeの違いと、LLMの仕組みをわかりやすく解説',
        duration: 10,
        difficulty: 'beginner',
        type: 'reading',
        tags: ['AI基礎', 'LLM', '初心者'],
        content: `# AIとLLMを5分で理解する

## AIって何？

**AI（人工知能）** とは、人間の知的な作業をコンピュータで再現する技術の総称です。

最近よく聞く **LLM（Large Language Model：大規模言語モデル）** は、AIの一種で、大量のテキストデータを学習して「言葉を理解・生成する」ことに特化したモデルです。

---

## 主要AIサービスの比較

| サービス | 開発元 | 特徴 |
|---------|--------|------|
| Claude | Anthropic | 安全性重視・長文処理が得意 |
| ChatGPT | OpenAI | 最も広く普及・プラグイン豊富 |
| Gemini | Google | Google連携が強力 |
| Copilot | Microsoft | Office/GitHub統合 |

---

## ClaudeはどこがすごいのかS?

1. **コンテキスト窓が大きい** — 200,000トークン（約15万字）まで一度に処理
2. **安全性への配慮** — Constitutional AIという手法で有害出力を抑制
3. **コーディング能力** — 複雑なコードも高精度で生成・デバッグ
4. **日本語対応** — 高品質な日本語での対話が可能

---

## Claude と Claude Code の違い

> ここが一番大事なポイント！

**Claude（claude.ai）**
- ブラウザで使うチャットインターフェース
- 一般的な会話・文章作成・分析に使う
- プログラミングの相談もできる

**Claude Code**
- ターミナル（コマンドライン）で動くAIエージェント
- 実際にファイルを読み書きし、コマンドを実行できる
- プロジェクト全体を理解してコードを書いてくれる
- 「AIにコーディングを代行させる」ためのツール

**一言で言うと**: Claudeは「相談相手」、Claude Codeは「実際に手を動かしてくれる開発者」です。`,
        quiz: [
          {
            id: 'q0-1-1',
            question: 'LLMの正式名称は？',
            options: [
              'Large Learning Machine',
              'Large Language Model',
              'Local Language Module',
              'Layered Logic Machine',
            ],
            correctIndex: 1,
            explanation: 'LLM = Large Language Model（大規模言語モデル）。大量のテキストデータで学習した言語AIです。',
          },
          {
            id: 'q0-1-2',
            question: 'Claude Code と Claude（claude.ai）の最大の違いは？',
            options: [
              '料金が違う',
              'Claude Codeはターミナルで動き、実際にファイル操作・コマンド実行ができる',
              'Claudeの方が賢い',
              'Claude Codeは音声対応している',
            ],
            correctIndex: 1,
            explanation: 'Claude Codeはターミナルで動くAIエージェントで、ファイル読み書きやコマンド実行ができます。claude.aiはブラウザのチャットUIです。',
          },
        ],
        externalLinks: [
          {
            title: 'Claude 101（Anthropic Academy）',
            url: 'https://anthropic.skilljar.com/claude-101',
            description: 'Anthropic公式の無料Claude入門コース',
            type: 'course',
          },
        ],
      },
      {
        id: '0-2',
        title: 'Claude.ai を5分で使ってみる',
        description: 'アカウント作成から最初のメッセージ送信まで、ハンズオン体験',
        duration: 10,
        difficulty: 'beginner',
        type: 'hands-on',
        tags: ['Claude.ai', 'ハンズオン', '初心者'],
        content: `# Claude.ai を5分で使ってみる

## ステップ1: アカウント作成

1. [claude.ai](https://claude.ai) にアクセス
2. 「Sign up」ボタンをクリック
3. Googleアカウントまたはメールアドレスで登録
4. メール認証を完了させる

## ステップ2: 最初のメッセージを送る

アカウント作成後、チャット画面が表示されます。

以下のプロンプトをコピペして送ってみましょう：

\`\`\`
こんにちは！私はプログラミング初心者です。
Pythonで「Hello, World!」を表示するプログラムを
作成し、各行を日本語で説明してください。
\`\`\`

## ステップ3: 料金プランを確認する

| プラン | 月額 | 特徴 |
|--------|------|------|
| Free | 無料 | 1日あたりの使用制限あり |
| Pro | $20/月 | 制限緩和・優先アクセス |
| Max 5x | $100/月 | Pro の5倍の使用量 |
| Max 20x | $200/月 | Pro の20倍の使用量 |
| API | 従量課金 | 開発者向け・Claude Code用 |

> **初心者おすすめ**: まずFreeプランで試す → 使い倒したくなったらProへ

## よくある質問

**Q: 日本語は使えますか？**
A: はい、高品質な日本語対応です。

**Q: 無料プランはどれくらい使えますか？**
A: 毎日一定数のメッセージが送れます（制限は変動します）。

**Q: Claude Codeを使うには有料プランが必要？**
A: Max プランまたは API キーが推奨です。Proでも基本動作します。`,
        codeExamples: [
          {
            title: 'おすすめの最初のプロンプト',
            language: 'text',
            code: `あなたはプロのPythonエンジニアです。
以下のことを教えてください：

1. Pythonとは何か（3行以内）
2. 初心者が最初に覚えるべき5つの概念
3. 「Hello, World!」プログラムとその説明

初心者向けに、専門用語は避けてわかりやすく説明してください。`,
            explanation: 'ロールを指定し、具体的な要件を箇条書きにすることで、精度の高い回答が得られます。',
          },
        ],
      },
      {
        id: '0-3',
        title: '料金プランと選び方',
        description: 'Free/Pro/Max/API の違いと、あなたに最適なプランの選び方',
        duration: 8,
        difficulty: 'beginner',
        type: 'reading',
        tags: ['料金', 'プラン', '選び方'],
        content: `# 料金プランと選び方

## プラン比較表

| プラン | 月額（USD） | Claude Code | 使用量 | おすすめの人 |
|--------|------------|-------------|--------|-------------|
| Free | 無料 | ❌ | 制限あり | とにかく試したい人 |
| Pro | $20 | ✅ | 中程度 | 個人利用・副業 |
| Max 5x | $100 | ✅ | Pro×5 | ヘビーユーザー |
| Max 20x | $200 | ✅ | Pro×20 | エージェント開発者 |
| API | 従量課金 | ✅ | 制限なし | 開発者・企業 |

## Claude Codeには何が必要？

Claude Codeを本格的に使うには以下のいずれか：

1. **Claude Pro以上のサブスク** → OAuthで認証（推奨・簡単）
2. **Anthropic API キー** → API従量課金（開発者向け）

## 判断フローチャート

\`\`\`
プログラミングを学びたい or 副業に使いたい
        ↓
    → Pro $20/月 からスタート

本格的にAIエージェントを開発したい
        ↓
    → Max 5x $100/月 以上

企業システムに組み込みたい
        ↓
    → API 従量課金
\`\`\`

## 日本円換算（参考）

- Pro: 約3,000円/月
- Max 5x: 約15,000円/月
- Max 20x: 約30,000円/月

> 為替レートによって変動します。クレジットカード必須。

## コスト最適化のコツ

1. **/compact コマンド**でコンテキストを圧縮（トークン節約）
2. **Haiku モデル**を軽いタスクに使う（高速・安価）
3. **Sonnet → Opus**の順で試す（重いタスクだけOpusを使う）`,
      },
    ],
  },

  {
    id: 1,
    name: 'インストール & 初期設定',
    emoji: '⚙️',
    description: 'OS別インストール手順・認証設定・よくあるエラーの解決まで',
    color: '#3b82f6',
    bgGradient: 'from-blue-500/20 to-cyan-500/20',
    estimatedHours: 2,
    prerequisites: [0],
    skills: ['Claude Codeインストール', '認証設定', 'エラー解決', 'WSL設定'],
    lessons: [
      {
        id: '1-1',
        title: 'Mac/Linux へのインストール',
        description: 'npmを使ったインストールから初回起動まで',
        duration: 15,
        difficulty: 'beginner',
        type: 'hands-on',
        tags: ['インストール', 'Mac', 'Linux', 'npm'],
        content: `# Mac/Linux へのインストール

## 前提条件

- Node.js 18 以上（確認: \`node --version\`）
- npm 8 以上（確認: \`npm --version\`）

Node.jsが入っていない場合は [Node.js公式サイト](https://nodejs.org/ja/) から LTS版をインストール。

## インストール手順

\`\`\`bash
# Claude Codeをグローバルインストール
npm install -g @anthropic-ai/claude-code

# インストール確認
claude --version
\`\`\`

## 認証（初回起動）

\`\`\`bash
# プロジェクトフォルダに移動
cd ~/my-project

# Claude Code を起動（初回は認証が必要）
claude
\`\`\`

初回起動時に以下の2択が表示されます：

1. **Claude.ai アカウントでサインイン（推奨）**
   → ブラウザが開き、Anthropicアカウントでログイン

2. **API キーを使う**
   → [console.anthropic.com](https://console.anthropic.com) でキーを取得し入力

## インストール後の確認

\`\`\`bash
# バージョン確認
claude --version

# ヘルプ表示
claude --help

# 新しいプロジェクトで起動
mkdir my-first-project
cd my-first-project
claude
\`\`\`

起動すると \`>\` のプロンプトが表示されれば成功です！`,
        codeExamples: [
          {
            title: '完全インストール手順（コピペ用）',
            language: 'bash',
            code: `# 1. Node.jsバージョン確認
node --version  # v18.x 以上が必要

# 2. Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# 3. バージョン確認
claude --version

# 4. プロジェクトフォルダを作成して起動
mkdir my-first-project && cd my-first-project
claude`,
          },
        ],
      },
      {
        id: '1-2',
        title: 'Windows / WSL へのインストール',
        description: 'WSL2のセットアップからClaude Code起動まで（Windows完全ガイド）',
        duration: 20,
        difficulty: 'beginner',
        type: 'hands-on',
        tags: ['Windows', 'WSL', 'インストール'],
        content: `# Windows / WSL へのインストール

## なぜWSLが必要？

Claude CodeはLinux/Mac向けに最適化されています。
Windowsでも動きますが、**WSL2（Windows Subsystem for Linux）** を使うと安定して動作します。

## WSL2のセットアップ

### 方法A: WSL2経由（推奨）

\`\`\`powershell
# PowerShellを管理者で開いて実行
wsl --install

# 再起動後、Ubuntuが起動するのでユーザー名/パスワードを設定
\`\`\`

WSL2（Ubuntu）が起動したら:

\`\`\`bash
# Node.jsをインストール（nvmを使う）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts

# Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# 起動確認
claude --version
\`\`\`

### 方法B: Windowsネイティブ（PowerShell）

\`\`\`powershell
# Node.jsをwingetでインストール
winget install OpenJS.NodeJS.LTS

# Claude Codeインストール
npm install -g @anthropic-ai/claude-code

# バージョン確認
claude --version
\`\`\`

## WSL2でVS Codeと連携する

\`\`\`bash
# WSL内からVS Codeを開く
code .

# VS Code + Claude Code の組み合わせが最強
\`\`\`

## よくあるWindowsエラーと解決策

**エラー: EACCES permission denied**
\`\`\`bash
# npmグローバルのパスを修正
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
\`\`\`

**エラー: command not found: claude**
\`\`\`bash
# PATHの再設定
source ~/.bashrc
# または
export PATH="$(npm root -g)/.bin:$PATH"
\`\`\``,
        quiz: [
          {
            id: 'q1-2-1',
            question: 'WindowsでClaude Codeを使う推奨方法は？',
            options: [
              'PowerShellのみで使う',
              'WSL2（Windows Subsystem for Linux）経由で使う',
              'Dockerコンテナ内で使う',
              'コマンドプロンプトで使う',
            ],
            correctIndex: 1,
            explanation: 'WSL2経由が最も安定しています。Claude CodeはLinux/Mac向けに最適化されているためです。',
          },
        ],
      },
      {
        id: '1-3',
        title: 'よくあるエラーと解決策',
        description: 'インストール・起動・認証でつまずいたときのトラブルシューティング',
        duration: 15,
        difficulty: 'beginner',
        type: 'reading',
        tags: ['エラー', 'トラブルシューティング', 'FAQ'],
        content: `# よくあるエラーと解決策

## 🔴 インストール系エラー

### EACCES: permission denied
\`\`\`bash
# 解決策：npmの権限設定を変更
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
npm install -g @anthropic-ai/claude-code
\`\`\`

### node: command not found
\`\`\`bash
# Node.jsが入っていないのでインストール
# Mac（Homebrewを使う場合）
brew install node

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
\`\`\`

---

## 🔴 認証系エラー

### Authentication failed / 401 Unauthorized
**原因**: APIキーが間違っている、または期限切れ
\`\`\`bash
# 環境変数でAPIキーを再設定
export ANTHROPIC_API_KEY="sk-ant-api03-..."
# または .env ファイルに書く
echo "ANTHROPIC_API_KEY=sk-ant-api03-..." > .env
\`\`\`

### ブラウザが開かない（OAuth認証）
\`\`\`bash
# ヘッドレス環境（サーバー等）ではURLを手動コピー
# 表示されたURLをブラウザで開いて認証を完了させる
\`\`\`

---

## 🔴 実行系エラー

### Context window exceeded
**原因**: 会話が長くなりすぎた
\`\`\`bash
# コンテキストを圧縮する
/compact

# または新しいセッションを開始
claude
\`\`\`

### Rate limit exceeded
**原因**: 短時間での使いすぎ
- しばらく待ってから再試行
- より上位のプランにアップグレード

---

## チェックリスト

インストール後に確認すること：

- [ ] \`node --version\` → v18以上
- [ ] \`npm --version\` → v8以上
- [ ] \`claude --version\` → バージョン番号が表示される
- [ ] \`claude\` を実行してプロンプトが表示される
- [ ] 簡単なメッセージを送って応答が返ってくる`,
      },
    ],
  },

  {
    id: 2,
    name: '基本コマンド & 対話術',
    emoji: '💬',
    description: 'スラッシュコマンド全一覧・良いプロンプトの書き方・コンテキスト管理術',
    color: '#8b5cf6',
    bgGradient: 'from-violet-500/20 to-purple-500/20',
    estimatedHours: 3,
    prerequisites: [1],
    skills: ['スラッシュコマンド', 'プロンプト設計', 'コンテキスト管理', 'モデル選択'],
    lessons: [
      {
        id: '2-1',
        title: 'claude コマンドの使い分け',
        description: 'claude / --continue / --resume の違いと使いどころ',
        duration: 12,
        difficulty: 'beginner',
        type: 'reading',
        tags: ['コマンド', 'セッション管理'],
        content: `# claude コマンドの使い分け

## 基本的な起動方法

\`\`\`bash
# 新しいセッションを開始（最もよく使う）
claude

# 前のセッションを続ける（最後のセッション）
claude --continue
# 短縮形
claude -c

# 過去のセッション一覧から選んで再開
claude --resume
# 短縮形
claude -r
\`\`\`

## 起動時にメッセージを渡す

\`\`\`bash
# 起動と同時にメッセージを送る
claude "このファイルのバグを直して"

# ファイルを指定して渡す
claude "このコードをレビューして" --file main.py

# 特定のモデルを指定して起動
claude --model claude-opus-4-7
\`\`\`

## ヘッドレスモード（自動化向け）

\`\`\`bash
# 対話なしで1回だけ実行して終了（スクリプトに組み込む）
claude --print "package.jsonを読んでプロジェクト概要を50字で説明して"

# 出力をファイルに保存
claude --print "READMEを生成して" > README.md
\`\`\`

## セッション管理の考え方

| 状況 | 使うコマンド |
|------|-------------|
| 新しいプロジェクトを始める | \`claude\` |
| 昨日の続きからやりたい | \`claude --continue\` |
| 数日前のセッションに戻りたい | \`claude --resume\` |
| スクリプトに組み込みたい | \`claude --print\` |`,
        codeExamples: [
          {
            title: 'よく使うコマンドパターン',
            language: 'bash',
            code: `# 日常的なワークフロー
claude                          # 新セッション開始
claude -c                       # 前のセッション継続
claude -r                       # 過去セッションから選択

# 一発実行（CI/CDやスクリプトに）
claude -p "テストを実行してエラーを修正して"

# モデル指定
claude --model claude-haiku-4-5-20251001  # 高速・安価
claude --model claude-sonnet-4-6          # バランス
claude --model claude-opus-4-7            # 最高精度`,
          },
        ],
      },
      {
        id: '2-2',
        title: 'スラッシュコマンド完全ガイド',
        description: 'セッション内で使える全スラッシュコマンドの使い方',
        duration: 15,
        difficulty: 'beginner',
        type: 'reading',
        tags: ['スラッシュコマンド', 'ショートカット'],
        content: `# スラッシュコマンド完全ガイド

Claude Codeのセッション内で \`/\` から始まるコマンドを使えます。

## 基本コマンド

| コマンド | 説明 |
|----------|------|
| \`/help\` | コマンド一覧を表示 |
| \`/clear\` | 会話履歴をクリアして新しく始める |
| \`/compact\` | コンテキストを要約して圧縮（トークン節約） |
| \`/cost\` | 現在のセッションのAPI使用コストを表示 |
| \`/status\` | 現在のセッション情報を表示 |

## モデル・プラン変更

| コマンド | 説明 |
|----------|------|
| \`/model\` | 使用するモデルを変更 |
| \`/model claude-opus-4-7\` | Opusに切り替え |
| \`/model claude-haiku-4-5-20251001\` | Haikuに切り替え（高速） |

## モード変更

| コマンド | 説明 |
|----------|------|
| \`/plan\` | Planモードに切り替え（実行前に計画を確認） |
| \`Shift+Tab\` | Planモードのトグル（キーボードショートカット） |

## ファイル・プロジェクト系

| コマンド | 説明 |
|----------|------|
| \`/init\` | CLAUDE.mdを自動生成してプロジェクト設定 |
| \`/review\` | 現在の変更をコードレビュー |
| \`/add-dir <path>\` | 追加のディレクトリをコンテキストに追加 |

## メモリ・設定

| コマンド | 説明 |
|----------|------|
| \`/memory\` | グローバルメモリ（~/.claude/CLAUDE.md）を編集 |
| \`/config\` | 設定画面を開く |
| \`/doctor\` | 環境チェック・問題診断 |

## コツ

\`\`\`
# 長い会話でコンテキストが詰まってきたら
/compact

# 使用コストが気になったら
/cost

# 新しいトピックを始めるとき（文脈をリセット）
/clear
\`\`\``,
        quiz: [
          {
            id: 'q2-2-1',
            question: 'コンテキストウィンドウが埋まってきたときに使うコマンドは？',
            options: ['/clear', '/compact', '/cost', '/reset'],
            correctIndex: 1,
            explanation: '/compact は会話履歴を要約・圧縮してトークンを節約します。/clear は履歴を完全に削除します。',
          },
        ],
      },
      {
        id: '2-3',
        title: '良いプロンプトの書き方',
        description: 'Claude Codeから最高の出力を引き出すプロンプト設計術',
        duration: 20,
        difficulty: 'intermediate',
        type: 'reading',
        tags: ['プロンプト', 'ベストプラクティス'],
        content: `# 良いプロンプトの書き方

## 黄金ルール：CTCQ原則

| 要素 | 内容 | 例 |
|------|------|-----|
| **C**ontext（文脈） | 状況・環境を説明 | 「React 18 + TypeScriptのプロジェクトで」 |
| **T**ask（タスク） | 何をして欲しいか明確に | 「ログイン機能を実装して」 |
| **C**onstraints（制約） | 制限・条件を書く | 「JWT認証を使って、テストも書いて」 |
| **Q**uality（品質基準） | 期待する出力形式 | 「TypeScriptの型を全て明示して」 |

---

## ❌ 悪いプロンプト vs ✅ 良いプロンプト

### 例1: バグ修正

❌ **悪い例**
\`\`\`
このコードを直して
\`\`\`

✅ **良い例**
\`\`\`
以下のTypeScriptコードで型エラーが出ています。
エラーメッセージ: "Property 'name' does not exist on type 'User'"
Userインターフェースに name フィールドを追加する形で修正し、
既存のテストが壊れないようにしてください。
\`\`\`

---

### 例2: 機能開発

❌ **悪い例**
\`\`\`
検索機能を作って
\`\`\`

✅ **良い例**
\`\`\`
React + TypeScript で商品検索機能を実装してください。
要件:
- 入力に応じてリアルタイムでフィルタリング（debounce: 300ms）
- 商品名・説明文を対象に検索
- 検索結果件数を表示
- 検索中はローディングスピナーを表示
- 検索結果ゼロのときは「見つかりませんでした」を表示
既存の Product 型は src/types/product.ts に定義済みです。
\`\`\`

---

## think / ultrathink の使い方

複雑な問題には思考を深めるキーワードを追加できます：

\`\`\`
think について：軽い思考（複雑でない問題）
think harder：より深く考える
ultrathink：最も深く・時間をかけて考える（複雑なアーキテクチャ設計等）
\`\`\`

**例**:
\`\`\`
このマイクロサービスアーキテクチャの設計を
ultrathink で検討して、スケーラビリティと
コストのバランスを評価してください。
\`\`\`

---

## @ 記法でファイルを参照する

\`\`\`
@src/components/Header.tsx を参考に、
同じスタイルでFooterコンポーネントを作って
\`\`\`

\`\`\`
@package.json と @src/index.ts を確認して、
プロジェクトの概要を説明して
\`\`\``,
        codeExamples: [
          {
            title: '最強プロンプトテンプレート',
            language: 'text',
            code: `【役割】あなたは[役割]です。

【背景・文脈】
[プロジェクトや状況の説明]

【タスク】
[具体的にやってほしいこと]

【制約条件】
- [制約1]
- [制約2]

【期待する出力】
[出力形式・品質基準]

【参考ファイル】
@[ファイルパス]`,
            explanation: 'このテンプレートを使うと、Claudeが必要な情報を全て把握した上で実装できます。',
          },
        ],
      },
    ],
  },

  {
    id: 3,
    name: 'CLAUDE.md 設計術',
    emoji: '📝',
    description: 'プロジェクトの"記憶"を作る。CLAUDE.mdの設計からテンプレート集まで',
    color: '#f59e0b',
    bgGradient: 'from-amber-500/20 to-orange-500/20',
    estimatedHours: 3,
    prerequisites: [2],
    skills: ['CLAUDE.md設計', 'プロジェクト設定', 'テンプレート活用', '@ファイル参照'],
    lessons: [
      {
        id: '3-1',
        title: 'CLAUDE.md とは？役割と基本構造',
        description: 'Claude Codeへの"プロジェクト説明書"の作り方',
        duration: 15,
        difficulty: 'intermediate',
        type: 'reading',
        tags: ['CLAUDE.md', '設定', 'ベストプラクティス'],
        content: `# CLAUDE.md とは？

## CLAUDE.md の役割

CLAUDE.mdは **Claude Codeへのプロジェクト説明書** です。

セッションを開始するたびにClaude Codeが自動的に読み込み、
プロジェクトのルール・構造・注意事項を把握します。

**「毎回同じことを説明しなくていい」** のが最大のメリット。

---

## 配置場所

| 場所 | 役割 |
|------|------|
| \`~/.claude/CLAUDE.md\` | グローバル設定（全プロジェクト共通） |
| \`./CLAUDE.md\` | プロジェクトルート（チーム共有） |
| \`./src/CLAUDE.md\` | サブディレクトリ（特定ディレクトリのルール） |

---

## 基本構造

\`\`\`markdown
# プロジェクト名

## プロジェクト概要
[3行以内で何を作っているか]

## 技術スタック
[使用技術の一覧]

## ディレクトリ構造
[重要なフォルダの説明]

## 開発ルール
[コーディング規約・命名規則]

## よく使うコマンド
[npm run dev などのコマンド]

## 重要な注意事項
[やってはいけないこと・落とし穴]
\`\`\`

---

## 自動生成する方法

\`\`\`bash
# プロジェクトルートで実行
# Claude Codeがコードを読んでCLAUDE.mdを自動生成
/init
\`\`\`

---

## CLAUDE.md の設計原則

1. **短く保つ** — 長すぎると読まれない。500字以内が理想
2. **具体的に書く** — 「いい感じに」より「TypeScriptのany禁止」
3. **更新する** — プロジェクトの変化に合わせて常に最新状態を保つ
4. **禁止事項を書く** — 「やってはいけないこと」が最も重要`,
        codeExamples: [
          {
            title: 'Webアプリ用 CLAUDE.md テンプレート',
            language: 'markdown',
            code: `# My Web App

## 概要
[アプリ名]。React + TypeScript + Tailwind CSS製のWebアプリ。

## 技術スタック
- Frontend: React 18, TypeScript, Tailwind CSS, Vite
- State: Zustand
- Testing: Vitest + React Testing Library
- API: Node.js + Express

## よく使うコマンド
\`\`\`bash
npm run dev      # 開発サーバー起動
npm run test     # テスト実行
npm run build    # 本番ビルド
\`\`\`

## コーディングルール
- TypeScript の any 型は禁止（unknown を使う）
- コンポーネントは 200 行以内
- コメントは日本語で
- テストカバレッジ 80% 以上を維持

## 禁止事項
- 本番DBに直接接続しない
- APIキーをコードにハードコードしない
- console.log を本番コードに残さない`,
          },
        ],
      },
      {
        id: '3-2',
        title: '実践テンプレート集',
        description: '副業・SNS・Python・個人開発など用途別CLAUDE.mdテンプレート10種',
        duration: 20,
        difficulty: 'intermediate',
        type: 'reading',
        tags: ['テンプレート', 'CLAUDE.md', '副業', 'SNS'],
        content: `# 実践テンプレート集

## テンプレート1: 副業・Webサービス開発

\`\`\`markdown
# 副業Webサービス開発

## 目標
月収30万円を目指すWebサービス。集客→収益化の自動化。

## 現在の開発フェーズ
フェーズ2（機能追加）

## 技術
Next.js 14, TypeScript, Prisma, PostgreSQL, Stripe決済

## 収益モデル
月額サブスク ¥980/月 → Stripe Webhookで自動管理

## 優先ルール
- ユーザー体験 > コード美しさ
- シンプルに動くもの > 過剰に抽象化されたもの
- LPのCVR改善を常に意識する
\`\`\`

---

## テンプレート2: X(Twitter) SNS自動化

\`\`\`markdown
# X自動投稿システム

## 概要
Claude Code + n8n でX(Twitter)の自動投稿を管理する

## 投稿ルール
- 朝7時: 学習系コンテンツ
- 昼12時: ライフスタイル系
- 夕18時: 副業・お金系
- 文字数: 100〜140字
- ハッシュタグ: 3個以内

## NG事項
- 政治・宗教・医療の断言はしない
- 他者を批判する内容は避ける
- 根拠のない数字を使わない
\`\`\`

---

## テンプレート3: Python データ分析

\`\`\`markdown
# データ分析プロジェクト

## 環境
Python 3.11, pandas, numpy, matplotlib, scikit-learn
Jupyter Lab で作業

## データ
data/raw/: 生データ（加工しない）
data/processed/: 加工済みデータ
notebooks/: 分析ノートブック

## ルール
- 生データは絶対に上書きしない
- 分析結果は必ずグラフで可視化
- データ件数は常に確認して報告すること
\`\`\`

---

## テンプレート4: グローバル設定（~/.claude/CLAUDE.md）

\`\`\`markdown
# グローバル設定

## 私のプロフィール
- 役割: フリーランスエンジニア
- 得意: TypeScript, React, Node.js
- 目標: 副業で月収50万円

## 作業スタイル
- 説明は日本語で
- コードコメントも日本語
- エラーは原因→解決策の順で説明

## セキュリティ
- .envファイルの内容は絶対に出力しない
- パスワードが含まれる場合は [REDACTED] に置き換える
\`\`\``,
      },
    ],
  },

  {
    id: 4,
    name: 'Plan Mode & 高度な推論',
    emoji: '🧠',
    description: 'Plan Mode・think系キーワード・モデル選択で精度を最大化する',
    color: '#ec4899',
    bgGradient: 'from-pink-500/20 to-rose-500/20',
    estimatedHours: 3,
    prerequisites: [3],
    skills: ['Plan Mode操作', 'think/ultrathink', 'モデル選択', 'opusplanエイリアス'],
    lessons: [
      {
        id: '4-1',
        title: 'Plan Mode の使い方',
        description: '実行前に計画を確認・修正できるPlan Modeで安全に大規模変更',
        duration: 15,
        difficulty: 'intermediate',
        type: 'hands-on',
        tags: ['Plan Mode', '安全', '大規模変更'],
        content: `# Plan Mode の使い方

## Plan Mode とは？

通常のClaude Codeは「指示→即実行」ですが、
**Plan Mode** は「指示→計画提示→承認→実行」のフローになります。

大きな変更・危険な操作を行う前に **計画をレビューできる** のが最大のメリット。

---

## Plan Mode の起動方法

### 方法1: キーボードショートカット
\`\`\`
Shift + Tab（2回連続）
\`\`\`
ステータスバーに「Plan Mode」と表示されれば有効。

### 方法2: スラッシュコマンド
\`\`\`
/plan
\`\`\`

### 方法3: エイリアス設定（おすすめ）
\`\`\`bash
# ~/.bashrc または ~/.zshrc に追加
alias opusplan='claude --model claude-opus-4-7 --plan'

# 使い方
opusplan "新しいDB設計をゼロから行う"
\`\`\`

---

## Plan Mode の実践フロー

\`\`\`
1. Plan Mode を起動
   ↓
2. 「○○を実装して」と指示
   ↓
3. Claude が実装計画を提示
   例: 「以下のファイルを変更します:
        - src/api/user.ts (認証追加)
        - src/db/schema.ts (テーブル追加)
        - test/api/user.test.ts (テスト追加)」
   ↓
4. 計画を確認・修正
   「3番は後でいいです、1と2だけやって」など
   ↓
5. 承認 → 実行
\`\`\`

---

## Plan Mode が特に有効な場面

- データベーススキーマの変更
- 認証システムの実装
- 大規模リファクタリング
- 複数ファイルにまたがる変更
- 本番環境に近い作業`,
      },
      {
        id: '4-2',
        title: 'think / ultrathink で精度を上げる',
        description: '思考モードの使い分けで複雑な問題をより深く解決する',
        duration: 12,
        difficulty: 'intermediate',
        type: 'reading',
        tags: ['think', 'ultrathink', '推論', '精度向上'],
        content: `# think / ultrathink で精度を上げる

## 思考モードの種類

| キーワード | 思考量 | 向いているタスク |
|-----------|--------|----------------|
| （なし） | 標準 | 日常的な質問・簡単なコード |
| \`think\` | ×2程度 | 少し複雑な設計・バグ分析 |
| \`think harder\` | ×4程度 | アーキテクチャ設計・複雑なデバッグ |
| \`ultrathink\` | 最大 | システム設計・難しいアルゴリズム |

---

## 使い方

単純にプロンプトに追加するだけ：

\`\`\`
ultrathink して、このマイクロサービスアーキテクチャの
スケーラビリティ問題を分析してください。
\`\`\`

\`\`\`
think harder で、このSQLクエリを最適化する方法を
3パターン提案してください。
\`\`\`

---

## コスト vs 精度のバランス

\`\`\`
単純な質問      → think なし（速い・安い）
設計の相談      → think
アーキ設計      → think harder
システム全体設計 → ultrathink（時間・コストかかるが精度最高）
\`\`\`

---

## モデルと組み合わせる

\`\`\`bash
# Opus + ultrathink = 最強コンビ（コスト高め）
claude --model claude-opus-4-7
> ultrathink して...

# Sonnet + think = コスパ最良
claude --model claude-sonnet-4-6
> think して...

# Haiku = 速いタスクに（思考モード不要）
claude --model claude-haiku-4-5-20251001
\`\`\``,
        quiz: [
          {
            id: 'q4-2-1',
            question: 'システム全体のアーキテクチャ設計をClaudeに依頼するとき、最適な組み合わせは？',
            options: [
              'Haiku + think なし',
              'Sonnet + think',
              'Opus + ultrathink',
              'Haiku + ultrathink',
            ],
            correctIndex: 2,
            explanation: 'Opus（最高精度モデル）+ ultrathink（最大思考量）の組み合わせが複雑なアーキテクチャ設計に最適です。コストはかかりますが精度が段違いです。',
          },
        ],
      },
    ],
  },

  {
    id: 5,
    name: 'Hooks & Skills',
    emoji: '🔧',
    description: 'Hooksで自動化・Skillsでカスタムコマンド作成。Claude Codeを自分仕様に拡張',
    color: '#06b6d4',
    bgGradient: 'from-cyan-500/20 to-sky-500/20',
    estimatedHours: 4,
    prerequisites: [4],
    skills: ['Hooks設定', 'カスタムSkills', '自動lint', '自動テスト', 'Before/After フック'],
    lessons: [
      {
        id: '5-1',
        title: 'Hooks で作業を自動化する',
        description: 'ファイル保存時の自動lint・コミット前テスト・危険コマンドブロックの実装',
        duration: 25,
        difficulty: 'advanced',
        type: 'hands-on',
        tags: ['Hooks', '自動化', 'lint', 'テスト'],
        content: `# Hooks で作業を自動化する

## Hooks とは？

Claude Codeの操作に反応して **自動的にコマンドを実行** する仕組みです。

---

## Hooksの3種類

| タイミング | 設定名 | 例 |
|-----------|--------|-----|
| ツール実行前 | \`PreToolUse\` | 危険コマンドをブロック |
| ツール実行後 | \`PostToolUse\` | 保存後にlint実行 |
| セッション終了時 | \`Stop\` | 全テスト実行 |

---

## 設定ファイルの場所

\`\`\`
~/.claude/settings.json        # グローバル設定
.claude/settings.json          # プロジェクト設定（チーム共有）
.claude/settings.local.json    # ローカル設定（gitignore推奨）
\`\`\`

---

## 実践例1: ファイル保存時に自動lint

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "eslint --fix $(jq -r '.tool_input.file_path // .tool_response.filePath' 2>/dev/null) 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
\`\`\`

---

## 実践例2: rm -rf をブロック

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "cmd=$(jq -r '.tool_input.command'); if echo \\"$cmd\\" | grep -q 'rm -rf'; then echo '{\\"decision\\":\\"block\\",\\"reason\\":\\"rm -rfは危険なため禁止されています\\"}'; fi"
          }
        ]
      }
    ]
  }
}
\`\`\`

---

## 実践例3: セッション終了時に全テスト実行

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "cd $(pwd) && npm test -- --reporter=verbose 2>&1 | tail -20"
          }
        ]
      }
    ]
  }
}
\`\`\``,
        codeExamples: [
          {
            title: '完全なsettings.json例',
            language: 'json',
            code: `{
  "permissions": {
    "defaultMode": "bypassPermissions"
  },
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "FILE=$(jq -r '.tool_input.file_path // empty'); [ -n \\"$FILE\\" ] && npx eslint --fix \\"$FILE\\" 2>/dev/null || true",
            "timeout": 30
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "CMD=$(jq -r '.tool_input.command'); echo \\"$CMD\\" | grep -qE 'rm -rf|DROP TABLE|DELETE FROM' && echo '{\\"decision\\":\\"block\\",\\"reason\\":\\"危険なコマンドをブロックしました\\"}' || true"
          }
        ]
      }
    ]
  }
}`,
          },
        ],
      },
      {
        id: '5-2',
        title: 'カスタムSlashコマンド（Skills）を作る',
        description: '/code-review /sns-post など自分だけのコマンドを作成する方法',
        duration: 20,
        difficulty: 'advanced',
        type: 'hands-on',
        tags: ['Skills', 'カスタムコマンド', 'スラッシュコマンド'],
        content: `# カスタムSlashコマンド（Skills）を作る

## Skills とは？

\`.claude/skills/\` フォルダにMarkdownファイルを置くだけで
カスタムの \`/コマンド名\` が作れます。

---

## ファイル配置

\`\`\`
.claude/
  skills/
    code-review.md    → /code-review コマンド
    sns-post.md       → /sns-post コマンド
    translate.md      → /translate コマンド
\`\`\`

---

## Skillファイルの基本構造

\`\`\`markdown
---
name: code-review
description: コードレビューを行い改善点を日本語で報告する
argument-hint: "[ファイルパスまたは 'staged']"
---

# コードレビュー

以下のコードをレビューし、日本語で報告してください：

$ARGUMENTS

## レビュー観点
1. バグ・論理エラーの可能性
2. パフォーマンス問題
3. セキュリティリスク
4. 可読性・命名規則
5. テストの網羅性

各観点について [問題なし / 要改善 / 重大] で評価し、
改善案をコード例付きで提示してください。
\`\`\`

---

## 実践Skill: SNS投稿生成

\`\`\`markdown
---
name: sns-post
description: トピックからX(Twitter)投稿文を3パターン生成
argument-hint: "[投稿のテーマ]"
---

以下のテーマでX(Twitter)投稿文を3パターン作成してください:

テーマ: $ARGUMENTS

## 制約
- 各パターン: 100〜140字
- ハッシュタグ: 2〜3個
- 朝版・昼版・夕版でトーンを変える
- ターゲット: 副業・AI活用に興味がある20〜40代

## 出力形式
【朝版 ☀️】
[投稿文] #タグ1 #タグ2

【昼版 🌤️】
...

【夕版 🌙】
...
\`\`\`

---

## 使い方

\`\`\`bash
# セッション内でスラッシュコマンドとして実行
/code-review src/api/user.ts
/sns-post "Claude Codeで副業収入を増やす方法"
\`\`\``,
      },
    ],
  },

  {
    id: 6,
    name: 'MCP 連携',
    emoji: '🔌',
    description: 'Model Context Protocol でGitHub・Slack・Notion・YouTubeと連携する',
    color: '#7c3aed',
    bgGradient: 'from-purple-500/20 to-violet-500/20',
    estimatedHours: 5,
    prerequisites: [5],
    skills: ['MCP概念理解', 'GitHub MCP', 'Slack MCP', 'YouTube MCP', 'MCP自作'],
    lessons: [
      {
        id: '6-1',
        title: 'MCP（Model Context Protocol）とは？',
        description: 'Claude Codeの機能を外部サービスに拡張するMCPの概念を図解で理解',
        duration: 15,
        difficulty: 'advanced',
        type: 'reading',
        tags: ['MCP', '概念', '連携'],
        content: `# MCP（Model Context Protocol）とは？

## MCPの概念

**MCP（Model Context Protocol）** は、AIモデルと外部ツール・サービスを
接続するための標準プロトコルです。

\`\`\`
Claude Code ←→ MCP Server ←→ 外部サービス
               （橋渡し役）
\`\`\`

---

## MCPで何ができるようになるか

| MCP Server | できること |
|------------|-----------|
| GitHub MCP | PR作成・レビュー・Issue管理 |
| Slack MCP | チャンネルへの投稿・読み取り |
| Notion MCP | ページ作成・データベース操作 |
| YouTube MCP | 動画情報取得・字幕抽出 |
| PostgreSQL MCP | DB操作（SELECT/INSERT等） |
| Puppeteer MCP | Webスクレイピング・自動操作 |
| Custom MCP | 自分で作った任意のサービス |

---

## MCPの設定方法

\`\`\`bash
# MCPサーバーを追加
claude mcp add <name> <command> [args...]

# 例: Gitプッシュカレント
claude mcp add github npx @anthropic-ai/mcp-server-github

# 追加済みの一覧確認
claude mcp list

# MCPサーバーを削除
claude mcp remove <name>
\`\`\`

---

## 設定ファイルでの管理

\`\`\`json
// ~/.claude/settings.json または .claude/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-notion"],
      "env": {
        "NOTION_API_KEY": "\${NOTION_API_KEY}"
      }
    }
  }
}
\`\`\``,
        externalLinks: [
          {
            title: 'Introduction to MCP（Anthropic Academy）',
            url: 'https://anthropic.skilljar.com/introduction-to-mcp',
            description: 'Anthropic公式のMCP入門コース',
            type: 'course',
          },
        ],
      },
      {
        id: '6-2',
        title: 'YouTube MCP で動画を解析する',
        description: 'YouTube URLを渡すだけで全文抽出・要約・構造化する実践設定',
        duration: 25,
        difficulty: 'advanced',
        type: 'hands-on',
        tags: ['YouTube', 'MCP', '動画解析', '字幕抽出'],
        content: `# YouTube MCP で動画を解析する

## 必要なもの

- yt-dlp（動画情報取得ツール）
- Python 3.x
- youtube_transcript_api

## セットアップ

\`\`\`bash
# yt-dlpのインストール
pip install yt-dlp youtube_transcript_api

# MCPサーバーのインストール
npm install -g @anthropic-ai/mcp-server-youtube
\`\`\`

## Claude Codeに追加

\`\`\`bash
claude mcp add youtube npx @anthropic-ai/mcp-server-youtube
\`\`\`

## 使い方

\`\`\`
# セッション内で
YouTubeのこの動画を要約してください:
https://www.youtube.com/watch?v=XXXXXXXXX

以下の形式でまとめてください:
1. 動画の概要（3行）
2. 主要ポイント（箇条書き5点）
3. 印象的な発言・引用
4. 実践できるアクションアイテム
\`\`\`

## yt-dlpを使った字幕取得（手動）

\`\`\`bash
# 日本語字幕を取得
yt-dlp --write-sub --sub-lang ja --skip-download "https://youtu.be/XXXXX"

# 自動字幕（ASR）を取得
yt-dlp --write-auto-sub --sub-lang ja --skip-download "https://youtu.be/XXXXX"

# SRTをテキストに変換してClaudeに渡す
cat subtitle.ja.srt | claude "この字幕を要約して"
\`\`\`

## 活用パターン

- **競合分析**: 同業者の動画を一括解析
- **学習効率化**: 長い動画の要点だけ抽出
- **コンテンツ参考**: バズ動画の構成を分析
- **台本作成**: 人気動画のパターンを学んで自分の台本に活用`,
      },
    ],
  },

  {
    id: 7,
    name: 'Agent Teams',
    emoji: '🤖',
    description: '複数のAIエージェントをチームとして動かす最上級テクニック',
    color: '#f43f5e',
    bgGradient: 'from-rose-500/20 to-red-500/20',
    estimatedHours: 6,
    prerequisites: [6],
    skills: ['Subagents理解', 'Agent Teams設定', '並列開発', 'コスト管理', 'SNSエージェント設計'],
    lessons: [
      {
        id: '7-1',
        title: 'Subagents と Agent Teams の概念',
        description: 'ボスと部下の関係でAIを使いこなす。並列処理で開発を10倍速に',
        duration: 20,
        difficulty: 'expert',
        type: 'reading',
        tags: ['Subagents', 'Agent Teams', '並列処理'],
        content: `# Subagents と Agent Teams の概念

## Subagents とは？

Claude Codeの「メインエージェント（ボス）」が
**タスクを分割して複数のサブエージェント（部下）に並列で割り当てる** 仕組みです。

\`\`\`
メインエージェント（ボス）
    ├── サブエージェントA（フロントエンド実装）
    ├── サブエージェントB（バックエンドAPI実装）
    ├── サブエージェントC（テスト作成）
    └── サブエージェントD（ドキュメント生成）
            ↓ 全員が並列に動作
         完了したものから報告
\`\`\`

---

## Agent Teams（2026年2月〜）

\`Shift + T\` でチームビューを起動すると、
複数のエージェントをビジュアルで管理できます。

\`\`\`
Shift + T → チームビュー起動
\`\`\`

---

## 並列処理のメリット

| 通常モード | Agent Teamsモード |
|-----------|-----------------|
| 順次処理（A→B→C） | 並列処理（A+B+C同時） |
| 3時間かかるタスク | 1時間で完了 |
| コンテキストが1つ | 各エージェントが独立コンテキスト |

---

## コスト計算

Agent Teamsはエージェント数分のAPIコールが発生します：

\`\`\`
4エージェント × 各2万トークン消費 = 8万トークン
Sonnet の場合: 約$0.24 = 約36円
Opus の場合: 約$2.40 = 約360円
\`\`\`

---

## 実践例: SNSコンテンツ生成チーム

\`\`\`
リードエージェント: 週次コンテンツ計画を立案・統括

サブエージェント構成:
A: リサーチ → バズトレンド・競合分析
B: X投稿生成 → 21投稿（朝昼夕×7日）
C: note記事生成 → 月4本
D: 品質チェック → 誤字・トーン・炎上リスク確認
E: 画像プロンプト → DALL-E 3用プロンプト生成
\`\`\`

このチームで **週1回の指示だけで** SNS運用が自動化できます。`,
      },
      {
        id: '7-2',
        title: '実践：SNS自動生成エージェントを組む',
        description: '副業・SNS運用を完全自動化するAgent Teams実装ガイド',
        duration: 30,
        difficulty: 'expert',
        type: 'hands-on',
        tags: ['Agent Teams', 'SNS自動化', '副業', '実践'],
        content: `# 実践：SNS自動生成エージェントを組む

## 設計図

\`\`\`
ユーザー → 「副業副業について今週のコンテンツを作って」
    ↓
リードエージェント
    ├── 🔍 リサーチA: 今週のトレンド調査
    ├── ✍️ ライターB: X投稿21本生成
    ├── 📝 ブログC: note記事4本の骨格作成
    ├── 🎨 デザインD: サムネイル案・画像プロンプト
    └── ✅ QCC: 全コンテンツの品質チェック
\`\`\`

## CLAUDE.md（エージェントチーム設定）

\`\`\`markdown
# SNS自動生成エージェント設定

## チームの役割分担
- リード: 全体指揮・品質管理
- リサーチャー: トレンド分析・競合調査
- ライター: 投稿文・記事生成
- デザイナー: ビジュアル提案

## コンテンツ方針
- ターゲット: 副業初心者・会社員
- トーン: 親しみやすく・具体的・共感重視
- キーワード: 副業/AI/時短/収入/自由

## 出力形式
必ず以下のファイルに保存:
- output/x_posts.md (X投稿21本)
- output/note_outlines.md (note構成4本)
- output/image_prompts.md (画像プロンプト)
\`\`\`

## 実行コマンド

\`\`\`bash
# Shift+T でチームビュー起動後、以下を入力:
今週のコンテンツテーマ「Claude Codeで副業収入を増やす方法」で
SNSコンテンツパッケージを作成してください。

出力:
- X投稿: 朝/昼/夕 各7本（計21本）
- note記事骨格: 4本（各5,000字以上を想定）
- DALL-E 3サムネイルプロンプト: 4本

各エージェントが並列で作業し、
リードエージェントが最終的にまとめてください。
\`\`\``,
      },
    ],
  },
]
