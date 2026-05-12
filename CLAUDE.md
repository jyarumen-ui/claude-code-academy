# Claude Code Academy — プロジェクト設定

## プロジェクト概要
Claude Code学習プラットフォーム。React + TypeScript + Tailwind CSS。
初心者から上級者まで7段階で学べるインタラクティブWebアプリ。

## 開発ルール
- コメントは日本語で書く
- コンポーネントはfunctional component + hooks のみ
- TypeScriptのany型は使用禁止（unknown を使う）
- テストはVitest使用
- コミットメッセージは日本語でOK
- コンポーネントは200行以内に保つ

## ディレクトリ構造
```
frontend/src/
  components/  # 再利用可能なUIコンポーネント
  pages/       # ルートに対応するページコンポーネント
  stores/      # Zustand状態管理
  data/        # カリキュラム・プロンプト等の静的データ
backend/src/
  routes/      # Express APIルート
  models/      # データモデル
  middleware/  # 認証・バリデーション
```

## よく使うコマンド
```bash
# フロントエンド
cd frontend && npm run dev      # 開発サーバー起動 (port 5173)
cd frontend && npm run test     # Vitestテスト実行
cd frontend && npm run build    # 本番ビルド

# バックエンド
cd backend && npm run dev       # APIサーバー起動 (port 3001)
```

## 重要な設計方針
- モバイルファースト（320px〜1920px対応）
- ダークモード対応（Tailwind dark: クラス）
- LocalStorageで進捗を永続化（バックエンド不要でも動作）
- 静的データはsrc/data/に集約し、コンポーネントからimport

## 絶対にやってはいけないこと
- 本番DBへの直接操作
- APIキーをコードにハードコード（.envを使う）
- any型の使用
- コンポーネントの200行超え
