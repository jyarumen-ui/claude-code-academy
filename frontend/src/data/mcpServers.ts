// MCP サーバー設定テンプレート集

export interface McpServer {
  id: string
  name: string
  description: string
  category: McpCategory
  installCommand: string
  configTemplate: string
  envVars: { key: string; description: string; required: boolean }[]
  useCases: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  official: boolean
}

export type McpCategory =
  | 'dev'
  | 'productivity'
  | 'sns'
  | 'data'
  | 'media'
  | 'custom'

// configTemplate 内の ${...} はリテラルテキストとして表示するため \${} でエスケープ
export const MCP_SERVERS: McpServer[] = [
  {
    id: 'mcp-github',
    name: 'GitHub MCP',
    description: 'GitHubのリポジトリ・PR・Issue・コードをClaude Codeから直接操作',
    category: 'dev',
    difficulty: 'easy',
    official: true,
    installCommand: 'claude mcp add github npx @anthropic-ai/mcp-server-github',
    configTemplate: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "\${GITHUB_TOKEN}"
      }
    }
  }
}`,
    envVars: [
      {
        key: 'GITHUB_TOKEN',
        description: 'GitHubのPersonal Access Token（Settings → Developer settings → Tokens）',
        required: true,
      },
    ],
    useCases: [
      'PRのレビューと自動コメント',
      'Issueの自動作成・管理',
      'コードレビューを依頼',
      'READMEの自動更新',
    ],
  },
  {
    id: 'mcp-slack',
    name: 'Slack MCP',
    description: 'SlackのチャンネルへのメッセージをClaude Codeから送受信',
    category: 'productivity',
    difficulty: 'easy',
    official: true,
    installCommand: 'claude mcp add slack npx @anthropic-ai/mcp-server-slack',
    configTemplate: `{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "\${SLACK_BOT_TOKEN}",
        "SLACK_TEAM_ID": "\${SLACK_TEAM_ID}"
      }
    }
  }
}`,
    envVars: [
      {
        key: 'SLACK_BOT_TOKEN',
        description: 'Slack App の Bot User OAuth Token（xoxb-...）',
        required: true,
      },
      {
        key: 'SLACK_TEAM_ID',
        description: 'SlackワークスペースのチームID',
        required: true,
      },
    ],
    useCases: [
      'デプロイ完了の自動通知',
      'エラーアラートの自動投稿',
      '週次レポートの自動送信',
      'チームへの進捗共有',
    ],
  },
  {
    id: 'mcp-notion',
    name: 'Notion MCP',
    description: 'NotionのページやデータベースをClaude Codeから読み書き',
    category: 'productivity',
    difficulty: 'medium',
    official: true,
    installCommand: 'claude mcp add notion npx @anthropic-ai/mcp-server-notion',
    configTemplate: `{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-notion"],
      "env": {
        "NOTION_API_KEY": "\${NOTION_API_KEY}"
      }
    }
  }
}`,
    envVars: [
      {
        key: 'NOTION_API_KEY',
        description: 'Notion Integration のシークレットキー（notion.so/my-integrations）',
        required: true,
      },
    ],
    useCases: [
      '議事録の自動作成・保存',
      'タスク管理データベースの更新',
      'ドキュメントの自動生成',
      'コンテンツカレンダーの管理',
    ],
  },
  {
    id: 'mcp-youtube',
    name: 'YouTube MCP',
    description: 'YouTube動画の情報取得・字幕抽出・チャンネル分析',
    category: 'media',
    difficulty: 'medium',
    official: false,
    installCommand: 'pip install youtube_transcript_api && claude mcp add youtube npx @anthropic-ai/mcp-server-youtube',
    configTemplate: `{
  "mcpServers": {
    "youtube": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-youtube"],
      "env": {
        "YOUTUBE_API_KEY": "\${YOUTUBE_API_KEY}"
      }
    }
  }
}`,
    envVars: [
      {
        key: 'YOUTUBE_API_KEY',
        description: 'Google Cloud Console で取得したYouTube Data API v3のキー',
        required: false,
      },
    ],
    useCases: [
      'YouTube動画の全文字幕抽出・要約',
      '競合チャンネルの動画分析',
      '台本・説明欄の自動生成',
      'トレンド動画のリサーチ',
    ],
  },
  {
    id: 'mcp-postgres',
    name: 'PostgreSQL MCP',
    description: 'PostgreSQLデータベースをClaude Codeから直接クエリ・操作',
    category: 'data',
    difficulty: 'medium',
    official: true,
    installCommand: 'claude mcp add postgres npx @anthropic-ai/mcp-server-postgres',
    configTemplate: `{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": [
        "-y",
        "@anthropic-ai/mcp-server-postgres",
        "\${DATABASE_URL}"
      ]
    }
  }
}`,
    envVars: [
      {
        key: 'DATABASE_URL',
        description: 'PostgreSQL接続URL（postgresql://user:pass@host:5432/dbname）',
        required: true,
      },
    ],
    useCases: [
      'データ分析・集計クエリの実行',
      'スキーマ確認とER図生成',
      'バグ調査のためのデータ検索',
      'マイグレーションスクリプト生成',
    ],
  },
  {
    id: 'mcp-puppeteer',
    name: 'Puppeteer MCP',
    description: 'Webスクレイピング・ブラウザ自動操作をClaude Codeから実行',
    category: 'data',
    difficulty: 'hard',
    official: true,
    installCommand: 'claude mcp add puppeteer npx @anthropic-ai/mcp-server-puppeteer',
    configTemplate: `{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-puppeteer"]
    }
  }
}`,
    envVars: [],
    useCases: [
      'Webサイトのスクリーンショット取得',
      '競合サイトの価格・情報収集',
      'フォーム自動入力・自動化テスト',
      'SNSの公開情報スクレイピング',
    ],
  },
]

// カスタムMCPサーバーのNode.jsテンプレート
export const CUSTOM_MCP_TEMPLATE = `
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const server = new Server(
  { name: 'my-custom-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } }
)

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'my_tool',
      description: 'カスタムツールの説明',
      inputSchema: {
        type: 'object',
        properties: {
          param: { type: 'string', description: 'パラメータの説明' },
        },
        required: ['param'],
      },
    },
  ],
}))

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === 'my_tool') {
    const { param } = request.params.arguments as { param: string }
    return { content: [{ type: 'text', text: \`処理結果: \${param}\` }] }
  }
  throw new Error('Unknown tool')
})

const transport = new StdioServerTransport()
await server.connect(transport)
`
