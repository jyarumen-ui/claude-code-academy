// プロンプトライブラリデータ

export interface Prompt {
  id: string
  title: string
  description: string
  category: PromptCategory
  content: string
  tags: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  likes: number
  useCount: number
}

export type PromptCategory =
  | 'code'
  | 'debug'
  | 'sns'
  | 'business'
  | 'document'
  | 'learning'
  | 'claude-md'
  | 'agent'

export const PROMPT_CATEGORIES: { id: PromptCategory; label: string; emoji: string }[] = [
  { id: 'code', label: 'コード生成', emoji: '💻' },
  { id: 'debug', label: 'デバッグ', emoji: '🐛' },
  { id: 'sns', label: 'SNS・マーケ', emoji: '📱' },
  { id: 'business', label: '副業・ビジネス', emoji: '💰' },
  { id: 'document', label: 'ドキュメント', emoji: '📄' },
  { id: 'learning', label: '学習・解説', emoji: '📚' },
  { id: 'claude-md', label: 'CLAUDE.md', emoji: '⚙️' },
  { id: 'agent', label: 'エージェント', emoji: '🤖' },
]

export const PROMPTS: Prompt[] = [
  // ── コード生成 ──────────────────────────
  {
    id: 'p-code-1',
    title: 'React コンポーネント生成（完全版）',
    description: 'Props型定義・テスト・Storybook込みのコンポーネントを一括生成',
    category: 'code',
    difficulty: 'intermediate',
    likes: 342,
    useCount: 1820,
    tags: ['React', 'TypeScript', 'テスト', 'Storybook'],
    content: `以下の仕様でReactコンポーネントを作成してください。

【コンポーネント名】
$COMPONENT_NAME

【役割】
$DESCRIPTION

【要件】
- TypeScript の型定義を明示（Props インターフェース）
- Tailwind CSS でスタイリング
- モバイルファースト・レスポンシブ対応
- ダークモード対応（dark: クラス）
- アクセシビリティ対応（aria属性）
- Vitest + React Testing Library のテストファイルも作成
- JSDocコメントは日本語で

【制約】
- any型禁止
- 200行以内
- 副作用は useEffect にまとめる`,
  },
  {
    id: 'p-code-2',
    title: 'APIルート生成（Express + TypeScript）',
    description: 'バリデーション・エラーハンドリング・型安全なExpressルートを生成',
    category: 'code',
    difficulty: 'intermediate',
    likes: 218,
    useCount: 940,
    tags: ['Node.js', 'Express', 'API', 'TypeScript'],
    content: `Express + TypeScript で以下のAPIエンドポイントを実装してください。

【エンドポイント】
$ENDPOINT

【機能】
$DESCRIPTION

【要件】
- リクエストのバリデーション（zod使用）
- 適切なHTTPステータスコード
- エラーハンドリング（try/catch + カスタムエラークラス）
- JWT認証ミドルウェアの適用
- JSDocコメント（日本語）
- 対応するテストファイルも作成

【DB】
$DB_DESCRIPTION`,
  },
  {
    id: 'p-code-3',
    title: 'バグ修正依頼（詳細版）',
    description: 'エラー内容・環境・試したことをセットで渡すテンプレート',
    category: 'code',
    difficulty: 'beginner',
    likes: 567,
    useCount: 3240,
    tags: ['デバッグ', 'バグ修正', '初心者'],
    content: `以下のバグを修正してください。

【エラーメッセージ】
\`\`\`
$ERROR_MESSAGE
\`\`\`

【発生箇所】
$FILE_PATH（$LINE_NUMBER行目付近）

【環境】
- OS: $OS
- Node.js: $NODE_VERSION
- 関連パッケージ: $PACKAGES

【再現手順】
1. $STEP_1
2. $STEP_2

【試したこと】
- $TRIED_1
- $TRIED_2

【期待する動作】
$EXPECTED

修正後、同じ問題が起きないよう予防策も教えてください。`,
  },

  // ── SNS・マーケ ──────────────────────────
  {
    id: 'p-sns-1',
    title: 'X投稿文 3パターン生成',
    description: '朝・昼・夕のトーン別でバズりやすい投稿文を自動生成',
    category: 'sns',
    difficulty: 'beginner',
    likes: 891,
    useCount: 4560,
    tags: ['X', 'Twitter', 'SNS', '投稿文'],
    content: `以下のテーマでX(Twitter)投稿文を3パターン作成してください。

【テーマ】
$TOPIC

【ターゲット】
$TARGET（例: 副業初心者・会社員・20〜40代）

【制約】
- 各パターン: 100〜140字
- ハッシュタグ: 2〜3個（末尾に）
- 絵文字: 1〜3個使用
- 数字・具体例を入れる
- CTA（行動促進）を末尾に

【出力形式】
【朝版 ☀️ 7時投稿向け（希望・前向きトーン）】
[投稿文]

【昼版 🌤️ 12時投稿向け（情報・実用トーン）】
[投稿文]

【夕版 🌙 18時投稿向け（共感・感情トーン）】
[投稿文]`,
  },
  {
    id: 'p-sns-2',
    title: 'note記事 構成案生成（1万字向け）',
    description: 'SEOを意識した見出し構成・各セクションの要点付きで生成',
    category: 'sns',
    difficulty: 'intermediate',
    likes: 445,
    useCount: 2100,
    tags: ['note', '記事', 'ライティング', 'SEO'],
    content: `以下のテーマでnote記事の構成案を作成してください。

【記事テーマ】
$TOPIC

【ターゲット読者】
$TARGET

【想定文字数】
10,000〜12,000字

【要件】
- SEOキーワードを見出しに含める
- 各セクション: 要点3行 + 推奨文字数
- 冒頭に「読者の悩み・共感」を入れる
- 具体的な数字・事例を含める
- 末尾に「まとめ + CTA」を入れる

【出力形式】
# タイトル案（3パターン）

## 記事構成
### 1. リード文（400字）
[要点]

### 2. [見出し]（○○字）
[要点・盛り込む内容]
...`,
  },
  {
    id: 'p-sns-3',
    title: '3媒体同時コンテンツ生成',
    description: 'X・note・LINE配信用コンテンツを1テーマから一括生成',
    category: 'sns',
    difficulty: 'intermediate',
    likes: 623,
    useCount: 2890,
    tags: ['X', 'note', 'LINE', '一括生成', 'マーケ'],
    content: `以下のテーマで3媒体分のコンテンツを一括生成してください。

【テーマ】
$TOPIC

【共通ターゲット】
$TARGET

━━━━━━━━━━━━━━━━
【X(Twitter)投稿】
・140字以内
・ハッシュタグ3個
・行動促進CTA付き

━━━━━━━━━━━━━━━━
【note記事リード文】
・400〜500字
・読者の悩みから始める
・「続きを読む」を促す終わり方

━━━━━━━━━━━━━━━━
【LINE配信文】
・300〜400字
・親しみやすい口語体
・具体的なアクションを1つ提示
・末尾: 「詳しくはこちら👇」

━━━━━━━━━━━━━━━━
【DALL-E 3サムネイルプロンプト（英語）】
・横長16:9
・テキストなし
・高品質フォトリアル`,
  },

  // ── 副業・ビジネス ──────────────────────────
  {
    id: 'p-biz-1',
    title: '副業ロードマップ生成',
    description: '自分のスキル・時間・目標金額からカスタム副業プランを作成',
    category: 'business',
    difficulty: 'beginner',
    likes: 734,
    useCount: 3780,
    tags: ['副業', 'ロードマップ', '収益化'],
    content: `私の状況から、現実的な副業ロードマップを作成してください。

【現状】
- スキル: $SKILLS
- 使える時間: 週$HOURS時間
- 初期予算: $BUDGET円
- 目標月収: $GOAL円/月
- 期間: $PERIOD ヶ月以内に達成したい

【制約】
- 本業に影響しない範囲
- リスクは最小限に
- Claude Codeを最大活用する前提

以下の形式でロードマップを作成:
1. 最初の1ヶ月でやること（具体的なタスクレベル）
2. 2〜3ヶ月目の目標
3. 3〜6ヶ月目の収益化フェーズ
4. 使用するツール・サービス一覧
5. 想定リスクと対策`,
  },
  {
    id: 'p-biz-2',
    title: 'LP（ランディングページ）コピー生成',
    description: 'ターゲット・USP・CVRを意識したLPコピーを全セクション生成',
    category: 'business',
    difficulty: 'intermediate',
    likes: 389,
    useCount: 1560,
    tags: ['LP', 'コピーライティング', '集客', 'CVR'],
    content: `以下の商品・サービスのLPコピーを作成してください。

【商品・サービス名】
$PRODUCT_NAME

【概要】
$DESCRIPTION

【ターゲット】
$TARGET

【価格】
$PRICE

【USP（強み・差別化）】
$USP

【出力するセクション】
1. ファーストビュー（キャッチコピー + サブコピー）
2. 悩み提示（3つ）
3. 解決策の提示
4. 機能・特徴（5項目）
5. 実績・社会的証明
6. よくある質問（5問）
7. CTA（申込みボタン周辺テキスト）

SEOキーワード「$KEYWORDS」を自然に含めてください。`,
  },

  // ── ドキュメント ──────────────────────────
  {
    id: 'p-doc-1',
    title: 'README.md 自動生成',
    description: 'プロジェクトを読んでGitHub映えするREADMEを自動生成',
    category: 'document',
    difficulty: 'beginner',
    likes: 512,
    useCount: 2670,
    tags: ['README', 'GitHub', 'ドキュメント'],
    content: `このプロジェクトのREADME.mdを作成してください。

@package.json
@src/

以下のセクションを含めてください:
1. プロジェクト名 + バッジ（ビルド/カバレッジ/ライセンス）
2. 概要（3行以内）
3. デモ画像/GIF のプレースホルダー
4. 特徴（箇条書き5項目）
5. 技術スタック（アイコン付きテーブル）
6. インストール手順（コードブロック）
7. 使い方（スクリーンショット付き）
8. ディレクトリ構造
9. 環境変数一覧
10. コントリビュート方法
11. ライセンス

GitHubで映えるMarkdown形式で。絵文字も適度に使用。`,
  },

  // ── CLAUDE.md ──────────────────────────
  {
    id: 'p-clmd-1',
    title: 'CLAUDE.md 自動生成（プロジェクト分析版）',
    description: 'コードを読んでCLAUDE.mdを最適な形で自動生成',
    category: 'claude-md',
    difficulty: 'beginner',
    likes: 678,
    useCount: 3450,
    tags: ['CLAUDE.md', '設定', '自動生成'],
    content: `このプロジェクトを分析して、最適なCLAUDE.mdを作成してください。

分析対象:
@package.json
@src/
@.env.example（あれば）

CLAUDE.mdに含めること:
1. プロジェクト概要（3行以内）
2. 技術スタック
3. ディレクトリ構造の説明（重要なフォルダのみ）
4. よく使うコマンド
5. コーディング規約（このプロジェクト固有のルール）
6. 禁止事項（絶対やってはいけないこと）

原則:
- 短く保つ（500字以内推奨）
- 具体的に書く（「いい感じに」は禁止）
- Claudeが間違えやすいポイントを明記`,
  },

  // ── エージェント ──────────────────────────
  {
    id: 'p-agent-1',
    title: 'SNSコンテンツ生成エージェントチーム設計',
    description: '週次SNSコンテンツを自動生成するAgent Teams構成を設計',
    category: 'agent',
    difficulty: 'advanced',
    likes: 445,
    useCount: 890,
    tags: ['Agent Teams', 'SNS', '自動化', 'subagent'],
    content: `SNSコンテンツを自動生成するAgent Teamsを設計・実装してください。

【目標】
週1回の指示で、1週間分のSNSコンテンツを自動生成する

【チーム構成（提案）】
- リードエージェント: 全体指揮・品質管理
- リサーチャー: トレンド調査・競合分析
- ライター: 投稿文・記事生成
- デザイナー: 画像プロンプト生成
- QCエージェント: 品質チェック・炎上リスク確認

【出力物】
- X投稿: 21本（朝昼夕 × 7日）
- note記事骨格: 4本
- DALL-E 3プロンプト: 7本

CLAUDE.mdとHooksの設定も含めて実装してください。`,
  },
]
