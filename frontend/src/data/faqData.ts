// チャットボット用FAQ — 初心者に優しい設計

export interface FaqItem {
  id: string
  question: string
  answer: string      // Markdownで書く（レンダラーが整形する）
  keywords: string[]
  category: FaqCategory
  emoji: string
}

export type FaqCategory =
  | 'start'      // はじめかた
  | 'skill'      // SKILLの使い方
  | 'basic'      // Claude Code基本
  | 'earn'       // 稼ぎ方・副業
  | 'terminal'   // ターミナル
  | 'mcp'        // MCP連携
  | 'claudemd'   // CLAUDE.md
  | 'codex'      // Codex比較

export interface FaqCategory_Def {
  id: FaqCategory
  label: string
  emoji: string
  color: string
  desc: string
}

export const FAQ_CATEGORIES: FaqCategory_Def[] = [
  { id: 'start',    label: 'はじめかた',      emoji: '🔰', color: '#3b82f6', desc: 'インストール・最初の一歩' },
  { id: 'skill',    label: 'SKILLの使い方',   emoji: '⭐', color: '#8b5cf6', desc: 'どこに入力するの？' },
  { id: 'basic',    label: 'Claude Code基本', emoji: '⚡', color: '#0ea5e9', desc: '仕組みと基本操作' },
  { id: 'earn',     label: '稼ぎ方・副業',    emoji: '💰', color: '#10b981', desc: '収益化の方法' },
  { id: 'terminal', label: 'ターミナル',      emoji: '🖥️', color: '#6b7280', desc: '黒い画面の使い方' },
  { id: 'mcp',      label: 'MCP連携',         emoji: '🔌', color: '#f59e0b', desc: '外部ツールとの接続' },
  { id: 'claudemd', label: 'CLAUDE.md',       emoji: '📋', color: '#ec4899', desc: 'お仕事説明書の作り方' },
  { id: 'codex',    label: 'Codex比較',       emoji: '🤖', color: '#14b8a6', desc: 'OpenAI Codexとの違い' },
]

export const FAQ_ITEMS: FaqItem[] = [

  // ── はじめかた ─────────────────────────────────────────
  {
    id: 'install-step',
    question: 'Claude Codeのインストール方法を教えて',
    answer: `## 5ステップで完了！

**① Node.jsをインストール**
→ https://nodejs.org にアクセスして「LTS版」をダウンロード
💡 「LTS版（安定版）」と書いてある方を選んでね

**② ターミナルを開く**
→ Windowsなら「PowerShell」、Macなら「ターミナル」

**③ 下のコマンドを入力してEnterを押す**
\`\`\`
npm install -g @anthropic-ai/claude-code
\`\`\`

**④ Anthropicアカウントを作る**
→ https://claude.ai でメールアドレスを登録（無料）

**⑤ ターミナルで起動！**
\`\`\`
claude
\`\`\`
→ 初回はブラウザのログイン画面が自動で開くよ`,
    keywords: ['インストール', 'install', '入れ方', 'セットアップ', '始め方', '最初', 'はじめ'],
    category: 'start',
    emoji: '📦',
  },
  {
    id: 'nodejs-what',
    question: 'Node.jsって何ですか？なぜ必要なの？',
    answer: `## Node.jsとは？

Node.jsは「JavaScriptをパソコン上で動かすための仕組み」です。

スマホのアプリをインストールするのと同じように、Node.jsをインストールすることでClaude Codeが動くようになります。

**なぜ必要なの？**
Claude Codeは「npmパッケージ」という仕組みで配布されており、それを動かすためにNode.jsが必要です。

**インストールはここから：**
→ https://nodejs.org （LTS版を選ぶ）

インストールが完了したら、ターミナルで確認：
\`\`\`
node --version
\`\`\`
→ 「v20.x.x」のような数字が出たらOK！`,
    keywords: ['node', 'nodejs', 'ノード', '必要', 'なぜ', 'どうして'],
    category: 'start',
    emoji: '💚',
  },
  {
    id: 'claude-ai-vs-code',
    question: 'Claude.aiとClaude Codeの違いは何ですか？',
    answer: `## 2つの大きな違い

**🌐 Claude.ai（ブラウザ版）**
- ブラウザで開いてすぐ使える
- 文章を書いたり、質問に答えたりが得意
- パソコンのファイルは直接操作できない
- スマホでも使える
- 初心者向け

**⚡ Claude Code（CLI版）**
- ターミナル（黒い画面）で使う
- パソコンのファイルを直接読み書きできる
- コマンドを自動で実行できる
- SKILL・MCP・Hooksなど高度な機能がある
- プログラマー・副業したい人向け

**どっちを使えばいい？**
まず**Claude.ai**から始めて、慣れたら**Claude Code**を試してみよう！`,
    keywords: ['アプリ', 'ブラウザ', 'cli', '違い', 'どっち', 'claude.ai'],
    category: 'start',
    emoji: '🔄',
  },
  {
    id: 'free-or-paid',
    question: '無料で使えますか？料金はいくらかかりますか？',
    answer: `## 料金について

**🆓 無料で使えるもの**
- Claude.ai（ブラウザ）の無料プラン → 毎日少し使える
- n8n（自動化ツール）の無料版
- note.com・X(Twitter)のアカウント

**💳 有料になるもの**
- Claude.ai Proプラン → **月額$20（約3,000円）**
  → 制限なく使えるようになる
- Claude Code（CLI版）→ **Claude APIの従量課金**
  → 使った分だけ（個人利用なら月数百〜数千円）

**💡 おすすめの始め方**
まず**Claude.aiの無料プラン**から試してみよう！
慣れてきたら有料プランやClaude Codeに移行するのがおすすめ`,
    keywords: ['無料', '料金', '費用', '値段', '有料', 'お金', '円', 'pro'],
    category: 'start',
    emoji: '💰',
  },

  // ── SKILLの使い方 ──────────────────────────────────────
  {
    id: 'skill-what',
    question: 'SKILLとは何ですか？',
    answer: `## SKILLとは「特別なコマンド」のこと

SKILLは、Claude Codeに追加できる「特技」です。
スラッシュ（ / ）をつけて入力するだけで使えます。

**使えるSKILLの例：**

| コマンド | やってくれること |
|---|---|
| /simplify | コードをシンプルにする |
| /review | コードの問題点を指摘 |
| /init | CLAUDE.mdを自動作成 |
| /security-review | セキュリティをチェック |

**大切なポイント：**
SKILLは**Claude Codeのチャット入力欄**に入力します。
ブラウザやメモ帳ではなく、ターミナルの中のClaude Code画面に入力してね！`,
    keywords: ['skill', 'スキル', 'コマンド', '特技', 'スラッシュ', '/'],
    category: 'skill',
    emoji: '⭐',
  },
  {
    id: 'skill-where',
    question: 'SKILLはどこに入力するの？場所がわからない',
    answer: `## SKILLの入力場所を画像で説明！

**手順：**

**① まずターミナルを開く**
- Windows：スタートメニュー → 「PowerShell」を検索
- Mac：アプリケーション → ユーティリティ → ターミナル

**② 「claude」と入力してEnterを押す**
\`\`\`
claude
\`\`\`

**③ チャット画面が表示される**
→ 画面の下の方に入力欄が現れる

**④ 入力欄に「/skill名」を入力してEnter**
\`\`\`
/simplify
\`\`\`

⚠️ **よくある間違い**
- ブラウザのアドレスバーに入力 → ❌違います
- メモ帳に入力 → ❌違います
- ターミナルの中のClaude画面に入力 → ✅正解！`,
    keywords: ['どこ', '場所', '入力', 'where', 'わからない', 'skill', 'スキル'],
    category: 'skill',
    emoji: '📍',
  },
  {
    id: 'skill-list',
    question: '使えるSKILLの一覧を教えてください',
    answer: `## よく使うSKILL一覧

**コード関連**
- \`/simplify\` → コードをシンプルにする
- \`/review\` → コードの問題点を指摘してくれる
- \`/security-review\` → セキュリティのチェック

**プロジェクト管理**
- \`/init\` → プロジェクトのCLAUDE.mdを自動作成
- \`/memory\` → メモリ・記憶の管理

**便利機能**
- \`/help\` → 使い方を教えてくれる
- \`/clear\` → 会話をリセットする

**カスタムSKILL**
自分でSKILLを作って追加することもできる！
詳しくはClaude Codeのドキュメントを参照。`,
    keywords: ['一覧', 'リスト', 'どんな', 'どれ', 'skill', 'スキル', '種類'],
    category: 'skill',
    emoji: '📋',
  },

  // ── Claude Code 基本 ──────────────────────────────────
  {
    id: 'what-claude-code',
    question: 'Claude Codeとは何ですか？',
    answer: `## Claude Codeとは？

Claude Codeは、Anthropic（アンソロピック）という会社が作った**ターミナルで動くAIアシスタント**です。

**ふつうのClaude.ai（ブラウザ版）と何が違うの？**

- 📁 パソコンのファイルを直接読み書きできる
- ⌨️ ターミナルのコマンドを自動で実行できる
- ⭐ SKILL（スラッシュコマンド）で機能を拡張できる
- 🔌 MCPで外部ツール（GitHub・Slackなど）と連携できる

**こんな人に向いてる**
プログラムを書く人・副業したい人・作業を自動化したい人`,
    keywords: ['claude code', 'クロードコード', 'とは', '何', 'なに', '説明'],
    category: 'basic',
    emoji: '⚡',
  },
  {
    id: 'how-to-use',
    question: 'Claude Codeの基本的な使い方を教えて',
    answer: `## 基本の使い方

**① ターミナルで「claude」と入力して起動**
\`\`\`
claude
\`\`\`

**② チャット画面が開いたら日本語で話しかける**
例えば：
- 「Reactのボタンを作って」
- 「このファイルを読んで説明して」
- 「エラーを直して」

**③ Claudeが自動でファイルを作ったりコードを書いてくれる**

**④ 確認して「OK」か修正を指示する**

**便利なコツ：**
- 具体的に指示するほど精度が上がる
- 「なぜそうしたの？」と聞くとちゃんと説明してくれる
- 「もっとシンプルに」「日本語でコメントを書いて」など追加指示もできる`,
    keywords: ['使い方', '使う', 'how to', '基本', '操作'],
    category: 'basic',
    emoji: '🎮',
  },
  {
    id: 'hooks-what',
    question: 'Hooksとは何ですか？',
    answer: `## Hooksとは「自動トリガー」のこと

Hooksは「〇〇したら自動で△△する」という仕組みです。

**具体的な例：**
- ファイルを保存したら → 自動でテストを実行する
- Claudeが何か書いたら → 自動でコードチェックをする
- 作業が終わったら → Slackに通知を送る

**設定場所：**
\`\`\`json
~/.claude/settings.json
\`\`\`

**初心者は最初は覚えなくてOK！**
まずはClaude Codeの基本操作に慣れてから、
興味が出たら学んでみよう。`,
    keywords: ['hooks', 'フック', '自動', 'トリガー'],
    category: 'basic',
    emoji: '🪝',
  },
  {
    id: 'agent-what',
    question: 'エージェントって何ですか？',
    answer: `## エージェントとは「自律型AI」のこと

エージェントは、人間が一々指示しなくても**自分で考えて複数のタスクを実行し続けるAI**のことです。

**例えば：**
「Webサイトを作って」と一言言うだけで
1. ファイル構成を考える
2. HTMLを書く
3. CSSでデザインする
4. JavaScriptで動きをつける
5. テストする
→ これを全部自動でやってくれる！

**サブエージェントとは？**
メインのAIが「専門家AI」に仕事を分担する仕組み。
大きなプロジェクトを複数のAIでチームワークして完成させられる。

これが「Agent Teams（エージェントチーム）」という最上級機能！`,
    keywords: ['エージェント', 'agent', '自動', '自律', 'チーム'],
    category: 'basic',
    emoji: '🦾',
  },

  // ── 稼ぎ方 ───────────────────────────────────────────
  {
    id: 'earn-first',
    question: '初めて稼ぐにはどうすればいい？一番早い方法は？',
    answer: `## 最速で初収益を得る方法

**一番早いのは「フリーランス」です！**

**① ランサーズかココナラに登録（無料）**
- ランサーズ → https://www.lancers.jp
- ココナラ → https://coconala.com

**② 「AI記事作成」サービスを出品する**
値段例：2,000字の記事 → 3,000円

**③ 依頼が来たらClaudeで記事を作る**
実際の作業時間：15〜30分

**④ 納品 → 入金！**

**なぜこれが一番早い？**
- フォロワー0人でも稼げる
- 今すぐサービスを出品できる
- 1件3,000〜1万円の収入が見込める

**もっと詳しく知りたい場合は**
「SNS活用」メニューの「フリーランス」タブをチェック！`,
    keywords: ['稼ぐ', '収益', '副業', 'お金', '最速', '最初', 'はじめて', '初めて'],
    category: 'earn',
    emoji: '💰',
  },
  {
    id: 'earn-sns',
    question: 'SNSで稼ぐにはどんな方法がある？',
    answer: `## SNS × Claude Code で稼ぐ方法

**X(Twitter) で稼ぐ**
- フォロワー1,000人 → X広告収益 → 月1〜10万円
- アフィリエイトリンクを貼る → 月1〜20万円
- スポンサー案件 → 1投稿1〜10万円

**note.com で稼ぐ**
- 有料記事を売る → 1本100〜3,000円
- 月額マガジン → 読者100人で月5万円
- 記事作成代行 → 1本3,000〜3万円

**YouTube で稼ぐ**
- 広告収益 → 月1〜100万円（チャンネルが育てば）
- スポンサー → 1動画3〜50万円

**フリーランス**
- AI記事代行 → 1本2,000〜3万円
- SNS運用代行 → 月3〜10万円/クライアント

**目安のタイムライン：**
1週間で初収益 → 1〜3ヶ月で月1万円 → 6ヶ月で月10万円`,
    keywords: ['sns', 'x', 'note', 'youtube', 'twitter', '稼ぐ', '副業', '収益化'],
    category: 'earn',
    emoji: '📈',
  },
  {
    id: 'earn-roadmap',
    question: '副業で稼ぐまでのロードマップを教えて',
    answer: `## 副業ロードマップ（5フェーズ）

**Phase 0：今日〜3日（準備）**
- Claude.aiにアカウント作成
- X・noteのアカウント作成
→ 収益：0円

**Phase 1：1〜2週目（最初の作品）**
- Claudeで記事を書いてnoteに投稿
- Xで毎日1投稿を始める
→ 収益：0〜1,000円

**Phase 2：3〜4週目（習慣化）**
- note有料記事を初出版（300円〜）
- Xフォロワー100人を目指す
→ 収益：0〜5,000円

**Phase 3：2ヶ月目（仕組み化）**
- ランサーズで記事代行を出品
- note月額マガジンを開始
→ 収益：1〜3万円

**Phase 4：3ヶ月目〜（スケールアップ）**
- YouTubeを開始
- Udemyで講座販売
→ 収益：5〜30万円

詳しくは「SNS活用」メニューで確認！`,
    keywords: ['ロードマップ', '手順', '流れ', 'ステップ', '副業', '稼ぐ', 'どうやって'],
    category: 'earn',
    emoji: '🗺️',
  },

  // ── ターミナル ────────────────────────────────────────
  {
    id: 'terminal-open',
    question: 'ターミナルの開き方を教えてください',
    answer: `## ターミナルの開き方

**Windowsの場合（3つの方法）**

方法①：スタートメニューから
→ Windowsキーを押す → 「powershell」と入力 → Enterを押す

方法②：ショートカット
→ Windowsキー + R → 「powershell」と入力 → OK

方法③：右クリックメニュー
→ デスクトップで右クリック → 「PowerShellウィンドウを開く」

**Macの場合**

→ Finder を開く → アプリケーション → ユーティリティ → ターミナル

**もしくは：**
→ Command + スペース → 「terminal」と入力 → Enter

**開いたら何を入力する？**
とりあえず「claude」と入力してEnterを押してみよう！`,
    keywords: ['ターミナル', '開く', 'powershell', '黒い画面', 'open'],
    category: 'terminal',
    emoji: '🖥️',
  },
  {
    id: 'terminal-what',
    question: 'ターミナルって何？怖くない？',
    answer: `## ターミナルは怖くないよ！

ターミナルは「コンピューターにキーボードで命令を入力する画面」です。

黒くて文字だけで怖く見えるけど、実は**数個のコマンドを覚えるだけで使える！**

**まず覚えるコマンド3つだけ：**

1. 今いる場所を確認する
\`\`\`
ls
\`\`\`
（Windowsの場合は「dir」）

2. フォルダを移動する
\`\`\`
cd フォルダ名
\`\`\`

3. Claude Codeを起動する
\`\`\`
claude
\`\`\`

**間違えたときは？**
\`Ctrl + C\` を押せばいつでも止められる！
これさえ覚えておけば安心。`,
    keywords: ['ターミナル', '怖い', 'わからない', '難しい', '黒い', '初めて'],
    category: 'terminal',
    emoji: '🖥️',
  },
  {
    id: 'error-occurred',
    question: 'エラーが出て動かない。どうすればいい？',
    answer: `## エラーが出たときの対処法

**まず落ち着いて！エラーは当たり前のことだよ**

**① Ctrl+Cで止める**
何かがフリーズしたらCtrl+Cで強制終了できる

**② エラーメッセージをClaudeに丸ごと貼る**
Claude Codeや Claude.aiのチャットに
「このエラーが出ました：[エラーをペースト]」
と入力するとClaudeが解決してくれる

**③ よくあるエラーと解決策：**

- 「command not found」→ インストールが完了していない。インストールを再実行。
- 「Permission denied」→ 管理者権限が必要。Windowsなら管理者として実行。
- 「port already in use」→ 同じポートで別のプログラムが動いている。一度再起動。

**困ったらClaude Codeに全部投げよう！**
「〇〇しようとしたらエラーが出ました」と伝えるだけでOK`,
    keywords: ['エラー', '動かない', 'error', '失敗', 'うまくいかない', '壊れた'],
    category: 'terminal',
    emoji: '🔧',
  },

  // ── MCP ──────────────────────────────────────────────
  {
    id: 'mcp-what',
    question: 'MCPとは何ですか？',
    answer: `## MCPとは「拡張プラグイン」のこと

MCP（Model Context Protocol）は、Claude Codeに新しい「道具」を追加する仕組みです。

**プラグインのような感覚で機能を追加できる！**

**使えるMCPの例：**

- 🐱 GitHub MCP → GitHubのPR・Issueを操作できる
- 💬 Slack MCP → Slackにメッセージを送れる
- 📝 Notion MCP → Notionのページを読み書きできる
- 🎬 YouTube MCP → 動画の字幕を取得・分析できる
- 🗄️ PostgreSQL MCP → データベースを操作できる

**追加方法（GitHubの場合）：**
\`\`\`
claude mcp add github npx @anthropic-ai/mcp-server-github
\`\`\`

初心者はまずClaude Codeの基本に慣れてから挑戦しよう！`,
    keywords: ['mcp', 'エムシーピー', '拡張', 'プラグイン', 'github', 'slack', '連携'],
    category: 'mcp',
    emoji: '🔌',
  },

  // ── CLAUDE.md ─────────────────────────────────────────
  {
    id: 'claudemd-what',
    question: 'CLAUDE.mdとは何ですか？',
    answer: `## CLAUDE.mdとは「Claudeへの説明書」

CLAUDE.mdはプロジェクトの説明をClaude Codeに事前に教えておくためのファイルです。

**なぜ便利なの？**
毎回「このプロジェクトはReact製で、TypeScriptを使って...」と説明しなくてよくなる！
一度書いておけばClaude Codeが自動で読んでくれる。

**書ける内容の例：**
\`\`\`markdown
# プロジェクトの説明
Reactで作ったウェブアプリです。

# ルール
- コメントは日本語で書く
- TypeScriptのany型は使わない

# よく使うコマンド
- npm run dev → 開発サーバー起動
\`\`\`

**自動で作る方法：**
\`\`\`
claude /init
\`\`\`
→ Claude Codeが自動でCLAUDE.mdを作ってくれる！`,
    keywords: ['claude.md', 'くろーどmd', '説明書', 'ルール', 'init', '設定ファイル'],
    category: 'claudemd',
    emoji: '📋',
  },

  // ── Codex比較 ─────────────────────────────────────────
  {
    id: 'codex-what',
    question: 'Codexとは何ですか？Claude Codeと何が違うの？',
    answer: `## Codexと Claude Codeの違い

**OpenAI Codex CLI**
- ChatGPTを作ったOpenAI社のターミナル型AIツール
- GPT-4oモデルを使う
- OpenAIのAPIキー（有料）が必要

**Claude Code**
- Anthropic社のターミナル型AIツール
- Claude 3.5/4系モデルを使う
- SKILL・MCP・Hooksなど豊富な機能がある

**主な違い：**

| | Claude Code | Codex |
|---|---|---|
| 会社 | Anthropic | OpenAI |
| MCP対応 | ✅あり | ❌なし |
| SKILL | ✅豊富 | ❌少ない |
| 初期費用 | Claude利用料 | OpenAI APIキー |

**どっちを使えばいい？**
まずはClaude Codeを使い込んで、慣れたらCodexも試してみよう！`,
    keywords: ['codex', 'コデックス', 'openai', '違い', '比較', 'gpt'],
    category: 'codex',
    emoji: '🤖',
  },
]

// カテゴリ別にFAQを取得
export function getFaqByCategory(category: FaqCategory): FaqItem[] {
  return FAQ_ITEMS.filter(f => f.category === category)
}

// キーワードマッチングで検索
export function searchFaq(query: string): FaqItem[] {
  if (!query.trim()) return FAQ_ITEMS.slice(0, 6)
  const q = query.toLowerCase()
  const scored = FAQ_ITEMS.map((item) => {
    let score = 0
    if (item.question.toLowerCase().includes(q)) score += 10
    item.keywords.forEach((kw) => {
      if (q.includes(kw) || kw.includes(q)) score += 5
    })
    if (item.answer.toLowerCase().includes(q)) score += 2
    return { item, score }
  })
  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(s => s.item)
    .slice(0, 5)
}
