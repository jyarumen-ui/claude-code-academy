// 外部リソース・リンク集

export interface Resource {
  id: string
  title: string
  url: string
  description: string
  category: ResourceCategory
  type: 'official' | 'course' | 'article' | 'video' | 'tool' | 'community'
  language: 'ja' | 'en' | 'both'
  free: boolean
  recommended: boolean
  tags: string[]
}

export type ResourceCategory =
  | 'getting-started'
  | 'official-docs'
  | 'courses'
  | 'articles'
  | 'mcp'
  | 'sns-tools'
  | 'community'
  | 'tools'

export const RESOURCES: Resource[] = [
  // ── 公式ドキュメント ──────────────────────────
  {
    id: 'r-doc-1',
    title: 'Claude Code 公式ドキュメント（日本語）',
    url: 'https://docs.anthropic.com/ja/docs/claude-code/overview',
    description: 'Anthropic公式のClaude Code完全ドキュメント。最新情報はここで確認',
    category: 'official-docs',
    type: 'official',
    language: 'ja',
    free: true,
    recommended: true,
    tags: ['公式', 'ドキュメント', '必読'],
  },
  {
    id: 'r-doc-2',
    title: 'Claude Code GitHub Actions 連携',
    url: 'https://docs.anthropic.com/en/docs/claude-code/github-actions',
    description: 'GitHub ActionsとClaude Codeを連携してCI/CDを自動化する方法',
    category: 'official-docs',
    type: 'official',
    language: 'en',
    free: true,
    recommended: false,
    tags: ['GitHub Actions', 'CI/CD', '自動化'],
  },
  {
    id: 'r-doc-3',
    title: 'Anthropic API ドキュメント',
    url: 'https://docs.anthropic.com/ja/api/getting-started',
    description: 'Claude APIの使い方・モデル一覧・料金体系の公式情報',
    category: 'official-docs',
    type: 'official',
    language: 'ja',
    free: true,
    recommended: false,
    tags: ['API', '料金', 'モデル'],
  },

  // ── Anthropic Academy コース ──────────────────────────
  {
    id: 'r-course-1',
    title: 'Claude 101',
    url: 'https://anthropic.skilljar.com/claude-101',
    description: 'Anthropic公式のClaude入門コース。無料で受講可能',
    category: 'courses',
    type: 'course',
    language: 'en',
    free: true,
    recommended: true,
    tags: ['入門', 'Claude', '公式コース', '無料'],
  },
  {
    id: 'r-course-2',
    title: 'Claude Code 101',
    url: 'https://anthropic.skilljar.com/claude-code-101',
    description: 'Claude Code の基礎を学ぶ公式コース',
    category: 'courses',
    type: 'course',
    language: 'en',
    free: true,
    recommended: true,
    tags: ['Claude Code', '入門', '公式コース'],
  },
  {
    id: 'r-course-3',
    title: 'Claude Code in Action',
    url: 'https://anthropic.skilljar.com/claude-code-in-action',
    description: '実践的なClaude Code活用方法を学ぶ上級コース',
    category: 'courses',
    type: 'course',
    language: 'en',
    free: true,
    recommended: true,
    tags: ['Claude Code', '実践', '上級'],
  },
  {
    id: 'r-course-4',
    title: 'Introduction to MCP',
    url: 'https://anthropic.skilljar.com/introduction-to-mcp',
    description: 'Model Context Protocolの概念と実装を学ぶコース',
    category: 'courses',
    type: 'course',
    language: 'en',
    free: true,
    recommended: false,
    tags: ['MCP', '連携', 'コース'],
  },
  {
    id: 'r-course-5',
    title: 'AI Fluency（非エンジニア向け）',
    url: 'https://anthropic.skilljar.com/ai-fluency',
    description: 'AIの基礎をエンジニア以外でも理解できるコース',
    category: 'courses',
    type: 'course',
    language: 'en',
    free: true,
    recommended: false,
    tags: ['AI基礎', '非エンジニア', '入門'],
  },

  // ── 日本語記事 ──────────────────────────
  {
    id: 'r-art-1',
    title: 'Claude Code 完全ガイド（Zenn本）',
    url: 'https://zenn.dev/tmasuyama1114/books/claude_code_basic',
    description: '日本語で読めるClaude Code最も詳しいガイドブック',
    category: 'articles',
    type: 'article',
    language: 'ja',
    free: true,
    recommended: true,
    tags: ['Zenn', '日本語', '完全ガイド'],
  },
  {
    id: 'r-art-2',
    title: 'Claude Code 初心者入門（Qiita）',
    url: 'https://qiita.com/i-inose/items/e644e9b620ee1c8d3c1b',
    description: 'インストールから基本操作まで、初心者向けに丁寧に解説',
    category: 'articles',
    type: 'article',
    language: 'ja',
    free: true,
    recommended: true,
    tags: ['Qiita', '初心者', '入門'],
  },
  {
    id: 'r-art-3',
    title: 'SNS × Claude Code マーケティングガイド',
    url: 'https://uravation.com/media/claude-code-sns-marketing-guide-2026/',
    description: 'Claude CodeをSNSマーケティングに活用する方法を解説',
    category: 'articles',
    type: 'article',
    language: 'ja',
    free: true,
    recommended: false,
    tags: ['SNS', 'マーケティング', '副業'],
  },
  {
    id: 'r-art-4',
    title: 'Claude Code CLI完全ガイド（英語）',
    url: 'https://blakecrosley.com/guides/claude-code',
    description: 'Claude CodeのCLIオプション・設定をすべて網羅した英語ガイド',
    category: 'articles',
    type: 'article',
    language: 'en',
    free: true,
    recommended: false,
    tags: ['CLI', '英語', '詳細'],
  },

  // ── ツール ──────────────────────────
  {
    id: 'r-tool-1',
    title: 'n8n（ワークフロー自動化）',
    url: 'https://n8n.io',
    description: 'Claude Codeと連携してSNS自動投稿・業務自動化を実現するノーコードツール',
    category: 'tools',
    type: 'tool',
    language: 'both',
    free: true,
    recommended: true,
    tags: ['n8n', '自動化', 'ノーコード', 'ワークフロー'],
  },
  {
    id: 'r-tool-2',
    title: 'Superwhisper（音声入力）',
    url: 'https://superwhisper.com',
    description: 'Mac向け高精度音声入力アプリ。Claude Codeへの指示を音声で入力できる',
    category: 'tools',
    type: 'tool',
    language: 'en',
    free: false,
    recommended: true,
    tags: ['音声入力', 'Mac', 'Whisper'],
  },
  {
    id: 'r-tool-3',
    title: 'Anthropic Console',
    url: 'https://console.anthropic.com',
    description: 'APIキー管理・使用量確認・プレイグラウンドが使える公式コンソール',
    category: 'tools',
    type: 'tool',
    language: 'en',
    free: true,
    recommended: false,
    tags: ['APIキー', 'コンソール', '公式'],
  },

  // ── コミュニティ ──────────────────────────
  {
    id: 'r-com-1',
    title: 'Anthropic Discord',
    url: 'https://discord.gg/anthropic',
    description: 'Anthropic公式Discordサーバー。開発者・ユーザーが集まるコミュニティ',
    category: 'community',
    type: 'community',
    language: 'en',
    free: true,
    recommended: true,
    tags: ['Discord', 'コミュニティ', '公式'],
  },
]

// 推奨フォローアカウント（X/Twitter）
export const RECOMMENDED_ACCOUNTS = [
  {
    handle: '@AnthropicAI',
    description: 'Anthropic公式アカウント。最新情報をいち早くキャッチ',
    url: 'https://x.com/AnthropicAI',
  },
  {
    handle: '@muscle_coding',
    description: 'Claude Code活用・副業情報を発信する人気アカウント',
    url: 'https://x.com/muscle_coding',
  },
  {
    handle: '@SuguruKun_ai',
    description: 'AI × 副業・ビジネス活用の実践情報を発信',
    url: 'https://x.com/SuguruKun_ai',
  },
]
