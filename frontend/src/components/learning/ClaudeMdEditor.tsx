import { useState } from 'react'
import { Copy, Check, RefreshCw, Download } from 'lucide-react'
import { useUserStore } from '../../stores/userStore'

const TEMPLATES = [
  {
    label: 'Webアプリ',
    content: `# My Web App

## 概要
React + TypeScript + Tailwind CSS製のWebアプリ。

## 技術スタック
- Frontend: React 18, TypeScript, Tailwind CSS, Vite
- State: Zustand
- Testing: Vitest + React Testing Library

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

## 禁止事項
- 本番DBに直接接続しない
- APIキーをコードにハードコードしない`,
  },
  {
    label: 'Python',
    content: `# Python プロジェクト

## 概要
データ分析・自動化スクリプト。

## 環境
Python 3.11, pandas, numpy, requests

## よく使うコマンド
\`\`\`bash
python main.py         # 実行
pip install -r requirements.txt  # 依存関係インストール
pytest tests/          # テスト実行
\`\`\`

## ルール
- 型ヒントを必ず書く
- docstringは日本語で
- 生データは絶対に上書きしない

## 禁止事項
- ハードコードしたAPIキー
- 例外を握りつぶす（pass のみ）`,
  },
  {
    label: 'SNS自動化',
    content: `# SNS自動投稿システム

## 概要
Claude Code + n8n でSNSコンテンツを自動生成・投稿する。

## 投稿ルール
- 朝7時: 学習系コンテンツ（希望・前向き）
- 昼12時: 情報・実用系
- 夕18時: 副業・お金系（共感）
- 文字数: 100〜140字
- ハッシュタグ: 2〜3個以内

## NG事項
- 政治・宗教・医療の断言はしない
- 他者を批判する内容は避ける
- 根拠のない数字を使わない
- 誇大表現・詐欺的表現は絶対禁止

## API設定
.envから読み込む（ハードコード禁止）`,
  },
  {
    label: 'グローバル設定',
    content: `# グローバル設定（~/.claude/CLAUDE.md）

## 私のプロフィール
- 役割: フリーランスエンジニア / 副業者
- 得意: TypeScript, React, Node.js
- 目標: Claude Codeで業務を自動化

## 作業スタイル
- 説明は日本語で
- コードコメントも日本語
- エラーは「原因→解決策」の順で説明
- 複数の選択肢がある場合は比較表を作る

## セキュリティ
- .envファイルの内容は絶対に出力しない
- パスワードが含まれる場合は [REDACTED] に置き換える
- 本番環境に直接影響する操作は必ず確認を取る`,
  },
]

/** CLAUDE.mdライブエディタ */
export function ClaudeMdEditor() {
  const { claudeMdContent, setClaudeMdContent } = useUserStore()
  const [copied, setCopied] = useState(false)
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(claudeMdContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const blob = new Blob([claudeMdContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'CLAUDE.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleTemplateLoad = (template: typeof TEMPLATES[0]) => {
    setClaudeMdContent(template.content)
    setActiveTemplate(template.label)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-white">CLAUDE.md ライブエディタ</h3>
        <div className="flex items-center gap-2">
          <button onClick={handleCopy} className="btn-secondary text-xs flex items-center gap-1.5 py-1.5">
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            コピー
          </button>
          <button onClick={handleDownload} className="btn-secondary text-xs flex items-center gap-1.5 py-1.5">
            <Download size={13} />
            DL
          </button>
        </div>
      </div>

      {/* テンプレート選択 */}
      <div className="flex flex-wrap gap-2">
        {TEMPLATES.map((t) => (
          <button
            key={t.label}
            onClick={() => handleTemplateLoad(t)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
              activeTemplate === t.label
                ? 'border-brand-500 bg-brand-500/20 text-brand-400'
                : 'border-gray-700 bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            {t.label}
          </button>
        ))}
        <button
          onClick={() => { setClaudeMdContent(''); setActiveTemplate(null) }}
          className="px-3 py-1 rounded-lg text-xs font-medium border border-gray-700 bg-gray-800 text-gray-400 hover:text-white hover:border-gray-600 transition-colors flex items-center gap-1"
        >
          <RefreshCw size={11} />
          クリア
        </button>
      </div>

      {/* エディタ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-2">✏️ 編集</p>
          <textarea
            value={claudeMdContent}
            onChange={(e) => setClaudeMdContent(e.target.value)}
            className="w-full h-80 bg-gray-950 border border-gray-700 rounded-lg p-4 font-mono text-sm text-gray-200 focus:outline-none focus:border-brand-500 resize-none leading-relaxed"
            spellCheck={false}
            placeholder="# My Project..."
          />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-2">👁️ プレビュー</p>
          <div className="h-80 overflow-auto bg-gray-900 border border-gray-700 rounded-lg p-4">
            <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
              {claudeMdContent || <span className="text-gray-600">ここにプレビューが表示されます</span>}
            </pre>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500">
        💡 このエディタで作成したCLAUDE.mdはローカルに保存されます。
        完成したらダウンロードしてプロジェクトルートに配置してください。
      </p>
    </div>
  )
}
