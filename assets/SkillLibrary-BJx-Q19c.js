import{c as A,r as d,j as t,X as g,l as I,b as P}from"./index-CTFI0PLF.js";import{T as f}from"./terminal-qwb_xzw2.js";import{C as S,a as v}from"./copy-BSRw6xVN.js";import{T as L}from"./tag-CCRI8Br9.js";/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=A("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),u=[{id:"start",label:"はじめかた",emoji:"🔰",color:"#3b82f6",desc:"最初に覚えるコマンド"},{id:"code",label:"コード作成",emoji:"💻",color:"#8b5cf6",desc:"プログラムを書いてもらう"},{id:"debug",label:"デバッグ・修正",emoji:"🐛",color:"#ef4444",desc:"エラーや不具合を直す"},{id:"refactor",label:"コード改善",emoji:"✨",color:"#0ea5e9",desc:"コードをきれいにする"},{id:"test",label:"テスト",emoji:"🧪",color:"#10b981",desc:"動作確認コードを作る"},{id:"doc",label:"ドキュメント",emoji:"📚",color:"#f59e0b",desc:"説明書・コメントを書く"},{id:"security",label:"セキュリティ",emoji:"🛡️",color:"#dc2626",desc:"安全性をチェックする"},{id:"perf",label:"パフォーマンス",emoji:"⚡",color:"#f97316",desc:"速度・効率を改善する"},{id:"sns",label:"SNS・コンテンツ",emoji:"📱",color:"#ec4899",desc:"SNS投稿・記事を作る"},{id:"business",label:"副業・ビジネス",emoji:"💰",color:"#84cc16",desc:"稼ぐための文書を作る"},{id:"data",label:"データ分析",emoji:"📊",color:"#06b6d4",desc:"データを読んで分析する"},{id:"translate",label:"翻訳・多言語",emoji:"🌍",color:"#a855f7",desc:"言語の翻訳・変換をする"},{id:"auto",label:"自動化",emoji:"🤖",color:"#14b8a6",desc:"作業を自動で繰り返す"}],m=[{id:"s001",name:"/init",type:"slash",prompt:"/init",description:"プロジェクトのCLAUDE.md（説明書ファイル）を自動で作成する。最初に必ず実行しよう！",category:"start",difficulty:"かんたん",emoji:"📋",output:`✓ CLAUDE.md を作成しました
✓ プロジェクトの構成を分析しました`,tags:["CLAUDE.md","最初","設定"]},{id:"s002",name:"/help",type:"slash",prompt:"/help",description:"使えるコマンドの一覧と使い方を表示する。困ったらまずこれを実行！",category:"start",difficulty:"かんたん",emoji:"❓",output:`利用可能なコマンド一覧:
/init - プロジェクト初期化
/review - コードレビュー
...`,tags:["ヘルプ","一覧","使い方"]},{id:"s003",name:"/clear",type:"slash",prompt:"/clear",description:"会話の履歴をリセットしてまっさらな状態に戻す。新しい作業を始めるときに使う。",category:"start",difficulty:"かんたん",emoji:"🔄",output:"会話履歴をクリアしました。",tags:["リセット","クリア","初期化"]},{id:"s004",name:"プロジェクト説明",type:"prompt",prompt:"このプロジェクトの全体像を教えてください。フォルダ構成・使われている技術・主要なファイルをわかりやすく説明してください。",description:"プロジェクトの中身をClaudeに分析させて、初心者でもわかるように説明してもらう。",category:"start",difficulty:"かんたん",emoji:"🗺️",output:`## プロジェクト概要
これはReact + TypeScriptで作られた...`,tags:["分析","説明","概要"]},{id:"s005",name:"CLAUDE.md作成",type:"prompt",prompt:"このプロジェクト用のCLAUDE.mdを作成してください。プロジェクトの概要・技術スタック・コーディングルール・よく使うコマンドを含めてください。",description:"Claudeへの「説明書」を自動で作ってもらう。毎回同じ説明をしなくてよくなる！",category:"start",difficulty:"かんたん",emoji:"📝",output:`# プロジェクト名
## 概要
Reactで作ったWebアプリです...`,tags:["CLAUDE.md","設定","説明書"]},{id:"s006",name:"エラー解決（貼り付け）",type:"prompt",prompt:`以下のエラーが出ています。原因と解決方法を教えてください：

[ここにエラーメッセージを貼り付け]`,description:"エラーメッセージをそのままコピペするだけでClaudeが解決策を教えてくれる。",category:"start",difficulty:"かんたん",emoji:"🔧",output:`このエラーの原因は〇〇です。
解決策：npm install を再実行してください。`,tags:["エラー","解決","初心者"]},{id:"s007",name:"次のステップ相談",type:"prompt",prompt:"今何をすべきか相談したいです。今の状況は〇〇で、目標は〇〇です。次に何をすればよいか教えてください。",description:"何から始めればいいか迷ったらClaudeに相談！具体的な手順を提案してくれる。",category:"start",difficulty:"かんたん",emoji:"🧭",output:"状況を整理します。まず①〇〇をして、次に②〇〇をすると良いでしょう。",tags:["相談","計画","初心者"]},{id:"s008",name:"ファイル読み込み・要約",type:"prompt",prompt:"このファイルを読んで内容を3行で要約してください。また、重要なポイントを箇条書きで教えてください。",description:"ファイルの内容をClaudeに読んでもらい、大事なことだけ教えてもらう。",category:"start",difficulty:"かんたん",emoji:"📄",output:`【要約】このファイルは〇〇のための設定ファイルです...
【重要ポイント】...`,tags:["読み込み","要約","ファイル"]},{id:"s009",name:"何でも質問",type:"prompt",prompt:"〇〇とは何ですか？初心者向けにわかりやすく、具体例を使って説明してください。",description:"わからない言葉や技術をClaudeに聞く。小学生でもわかる説明をしてもらえる！",category:"start",difficulty:"かんたん",emoji:"💬",output:"〇〇とは、簡単に言うと「〇〇」のことです。例えば...",tags:["質問","説明","初心者"]},{id:"s010",name:"作業の自動化提案",type:"prompt",prompt:"私は毎日〇〇という作業をしています。Claude Codeを使って自動化できますか？もしできるなら手順を教えてください。",description:"いつもやっている繰り返し作業をClaudeが自動化してくれるか相談する。",category:"start",difficulty:"ふつう",emoji:"⚙️",output:"はい、自動化できます！以下のスクリプトで実現できます...",tags:["自動化","相談","効率化"]},{id:"s011",name:"Reactコンポーネント作成",type:"prompt",prompt:"Reactで〇〇のコンポーネントを作ってください。TypeScriptを使い、propsの型定義も含めてください。",description:"Webサイトのパーツ（ボタン・カードなど）を自動で作ってもらう。",category:"code",difficulty:"ふつう",emoji:"⚛️",output:`export function Button({ label, onClick }: ButtonProps) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}`,tags:["React","TypeScript","コンポーネント"]},{id:"s012",name:"Python スクリプト作成",type:"prompt",prompt:"Pythonで〇〇するスクリプトを作ってください。コメントを日本語で書いてください。",description:"Pythonのプログラムを日本語コメント付きで作ってもらう。",category:"code",difficulty:"ふつう",emoji:"🐍",output:`# CSVファイルを読み込む
import csv
with open("data.csv") as f:
    reader = csv.reader(f)`,tags:["Python","スクリプト","自動化"]},{id:"s013",name:"APIエンドポイント作成",type:"prompt",prompt:"Node.js + Expressで〇〇のAPIエンドポイントを作ってください。バリデーションとエラーハンドリングも含めてください。",description:"WebサービスのAPI（データを受け渡す口）を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"🔌",output:`app.post('/api/users', async (req, res) => {
  const { name } = req.body
  ...`,tags:["API","Node.js","Express"]},{id:"s014",name:"データベース設計",type:"prompt",prompt:"〇〇というサービスに必要なデータベースのテーブル設計をしてください。SQLのCREATE TABLE文も書いてください。",description:"データを保存するためのデータベース構造を設計してもらう。",category:"code",difficulty:"ふつう",emoji:"🗄️",output:`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(255)
);`,tags:["データベース","SQL","設計"]},{id:"s015",name:"フォームバリデーション",type:"prompt",prompt:"〇〇フォームのバリデーション（入力チェック）を実装してください。エラーメッセージも日本語で表示してください。",description:"フォームの入力チェック（空欄チェック・メール形式確認など）を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"✅",output:`if (!email.includes('@')) {
  setError('メールアドレスの形式が正しくありません')
}`,tags:["フォーム","バリデーション","エラー"]},{id:"s016",name:"ログイン機能",type:"prompt",prompt:"JWT認証を使ったログイン・ログアウト機能を作ってください。セキュリティも考慮してください。",description:"ユーザーがIDとパスワードでログインできる機能を作ってもらう。",category:"code",difficulty:"むずかしい",emoji:"🔐",output:'const token = jwt.sign({ userId }, SECRET, { expiresIn: "7d" })',tags:["認証","JWT","ログイン"]},{id:"s017",name:"画像アップロード機能",type:"prompt",prompt:"画像をアップロードしてプレビュー表示する機能を実装してください。ファイルサイズ制限（5MB以下）も追加してください。",description:"写真や画像をウェブサイトにアップロードする機能を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"🖼️",output:`const handleFile = (e) => {
  if (e.target.files[0].size > 5000000) {
    alert('5MB以下にしてください')
  }
}`,tags:["画像","アップロード","ファイル"]},{id:"s018",name:"検索機能",type:"prompt",prompt:"リアルタイムで検索結果を表示する検索機能を実装してください。デバウンス処理も含めてください。",description:"文字を入力するたびに検索結果が更新されるリアルタイム検索を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"🔍",output:`const debouncedSearch = useMemo(
  () => debounce(handleSearch, 300),
  []
)`,tags:["検索","リアルタイム","デバウンス"]},{id:"s019",name:"ページネーション",type:"prompt",prompt:"100件のデータを1ページ10件ずつ表示するページネーション機能を作ってください。",description:"たくさんのデータを「前へ・次へ」で切り替えて見られる機能を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"📑",output:"const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)",tags:["ページネーション","一覧","UI"]},{id:"s020",name:"グラフ・チャート",type:"prompt",prompt:"Chart.jsを使って〇〇のデータを棒グラフで表示するコンポーネントを作ってください。",description:"データをグラフや図で見やすく表示するコードを作ってもらう。",category:"code",difficulty:"ふつう",emoji:"📊",output:`new Chart(ctx, {
  type: 'bar',
  data: { labels: [...], datasets: [...] }
})`,tags:["グラフ","Chart.js","可視化"]},{id:"s021",name:"メール送信",type:"prompt",prompt:"nodemailerを使ってメールを送信する機能を作ってください。HTMLメールにも対応してください。",description:"プログラムから自動でメールを送信する機能を作ってもらう。",category:"code",difficulty:"ふつう",emoji:"📧",output:`transporter.sendMail({
  to: email,
  subject: '件名',
  html: '<h1>こんにちは</h1>'
})`,tags:["メール","nodemailer","通知"]},{id:"s022",name:"WebSocket",type:"prompt",prompt:"Socket.ioを使ったリアルタイムチャット機能を作ってください。メッセージの送受信と接続人数表示も含めてください。",description:"リアルタイムでメッセージがやり取りできるチャット機能を作ってもらう。",category:"code",difficulty:"むずかしい",emoji:"💬",output:`io.on('connection', (socket) => {
  socket.on('message', (msg) => {
    io.emit('message', msg)
  })
})`,tags:["WebSocket","リアルタイム","チャット"]},{id:"s023",name:"PDF生成",type:"prompt",prompt:"pdfkitまたはjsPDFを使ってデータをPDFに出力する機能を作ってください。日本語フォントにも対応させてください。",description:"ブラウザやアプリからPDFファイルを自動生成する機能を作ってもらう。",category:"code",difficulty:"むずかしい",emoji:"📕",output:`doc.font('NotoSans').fontSize(14).text('PDF生成テスト')
doc.pipe(fs.createWriteStream('output.pdf'))`,tags:["PDF","帳票","生成"]},{id:"s024",name:"QRコード生成",type:"prompt",prompt:"URLや文字列からQRコードを生成して表示するコードを書いてください。",description:"QRコードを自動生成する機能を作ってもらう。URLを渡すだけでOK！",category:"code",difficulty:"かんたん",emoji:"📱",output:`import QRCode from 'qrcode'
const url = await QRCode.toDataURL('https://example.com')`,tags:["QRコード","生成","URL"]},{id:"s025",name:"カレンダーUI",type:"prompt",prompt:"イベントを登録・表示できるカレンダーコンポーネントをReactで作ってください。",description:"スケジュール管理できるカレンダーをWebサイトに追加してもらう。",category:"code",difficulty:"むずかしい",emoji:"📅",output:`function Calendar() {
  const daysInMonth = new Date(year, month+1, 0).getDate()
  ...`,tags:["カレンダー","UI","React"]},{id:"s026",name:"ダークモード切替",type:"prompt",prompt:"ダークモード・ライトモードを切り替えられる機能を追加してください。ユーザーの設定をlocalStorageに保存してください。",description:"黒い画面と白い画面を切り替えられるボタンを追加してもらう。",category:"code",difficulty:"かんたん",emoji:"🌙",output:"const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark')",tags:["ダークモード","テーマ","UI"]},{id:"s027",name:"スクロールアニメーション",type:"prompt",prompt:"スクロールしたときに要素がフェードインするアニメーションをCSSとJavaScriptで実装してください。",description:"ページをスクロールすると画像や文章がふわっと現れるアニメーションを作ってもらう。",category:"code",difficulty:"ふつう",emoji:"🎞️",output:`const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.target.classList.add('visible'))
})`,tags:["アニメーション","CSS","スクロール"]},{id:"s028",name:"通知機能（Push通知）",type:"prompt",prompt:"ブラウザのプッシュ通知を送る機能を実装してください。許可リクエストと通知送信のコードを書いてください。",description:"スマホやPCに通知を送れる機能を追加してもらう。",category:"code",difficulty:"むずかしい",emoji:"🔔",output:`Notification.requestPermission().then(result => {
  if (result === 'granted') new Notification('通知テスト')
})`,tags:["通知","Push","ブラウザ"]},{id:"s029",name:"エラー原因調査",type:"prompt",prompt:"以下のエラーが出ています。原因と修正方法を教えてください：\n\n```\n[エラーメッセージをここに貼り付け]\n```",description:"エラーメッセージをコピペするだけ！Claudeが原因と解決策を教えてくれる。",category:"debug",difficulty:"かんたん",emoji:"🔍",output:`エラーの原因：モジュールがインストールされていません。
解決策：npm install 〇〇 を実行してください。`,tags:["エラー","解決","デバッグ"]},{id:"s030",name:"ロジックのバグ探し",type:"prompt",prompt:`以下のコードが期待通り動きません。バグを見つけて修正してください：

\`\`\`javascript
[コードをここに貼り付け]
\`\`\`

期待する動作：〇〇
実際の動作：〇〇`,description:"コードがおかしいけど原因がわからないとき。期待と実際を伝えるだけでバグを見つけてくれる。",category:"debug",difficulty:"かんたん",emoji:"🐞",output:"10行目に問題があります。〇〇の部分を〇〇に変更してください。",tags:["バグ","デバッグ","ロジック"]},{id:"s031",name:"型エラー修正",type:"prompt",prompt:`TypeScriptの型エラーが出ています。以下のエラーを修正して型定義を改善してください：

[型エラーを貼り付け]`,description:"TypeScriptの赤線エラーをClaude が自動で直してくれる。",category:"debug",difficulty:"ふつう",emoji:"🔷",output:"string型とnumber型が混在しています。〇〇をstring型に統一してください。",tags:["TypeScript","型","エラー"]},{id:"s032",name:"ビルドエラー解決",type:"prompt",prompt:`ビルドが失敗しています。以下のエラーログを見て解決方法を教えてください：

[ビルドエラーを貼り付け]`,description:"npm run buildが失敗したときにClaudeが解決してくれる。",category:"debug",difficulty:"ふつう",emoji:"🏗️",output:"依存関係のバージョンが競合しています。package.jsonの〇〇を〇〇に変更してください。",tags:["ビルド","npm","エラー"]},{id:"s033",name:"メモリリーク修正",type:"prompt",prompt:`このReactコンポーネントでメモリリークが発生しています。原因を特定して修正してください：

[コードを貼り付け]`,description:"アプリがだんだん重くなる「メモリリーク」の原因を見つけて直してもらう。",category:"debug",difficulty:"むずかしい",emoji:"💧",output:"useEffectのクリーンアップ処理が不足しています。return () => { ... } を追加してください。",tags:["メモリ","React","クリーンアップ"]},{id:"s034",name:"CSS崩れ修正",type:"prompt",prompt:`このCSSが期待通りに表示されません。デザインが崩れている原因を教えてください：

[CSSとHTMLを貼り付け]`,description:"Webサイトのデザインが崩れているとき、原因と修正方法を教えてもらう。",category:"debug",difficulty:"かんたん",emoji:"🎨",output:"flexboxの direction 設定が原因です。flex-direction: column を追加してください。",tags:["CSS","デザイン","レイアウト"]},{id:"s035",name:"無限ループ修正",type:"prompt",prompt:`useEffectが無限ループになっています。以下のコードを修正してください：

[コードを貼り付け]`,description:"プログラムが止まらない無限ループを検出して直してもらう。",category:"debug",difficulty:"ふつう",emoji:"♾️",output:"dependencyArrayに state が含まれているため無限ループになっています。",tags:["無限ループ","useEffect","React"]},{id:"s036",name:"非同期エラー修正",type:"prompt",prompt:`非同期処理（async/await）でエラーが起きています。以下のコードを修正してください：

[コードを貼り付け]`,description:"await の書き忘れなど非同期処理のバグをClaudeが見つけてくれる。",category:"debug",difficulty:"ふつう",emoji:"⏳",output:"〇〇の前にawaitが必要です。また、try-catchでエラーハンドリングを追加してください。",tags:["async","await","非同期"]},{id:"s037",name:"SQLエラー修正",type:"prompt",prompt:`このSQLクエリがエラーになります。正しいSQLに修正してください：

[SQLを貼り付け]`,description:"データベースのSQL文のエラーを見つけて正しく修正してもらう。",category:"debug",difficulty:"ふつう",emoji:"🗄️",output:"GROUP BYの前に集計関数が必要です。SUM(amount) AS total を追加してください。",tags:["SQL","データベース","クエリ"]},{id:"s038",name:"コンソールエラー解説",type:"prompt",prompt:`ブラウザのコンソールに以下のエラーが出ています。日本語で説明して解決方法を教えてください：

[コンソールエラーを貼り付け]`,description:"ブラウザの開発者ツールに出る英語のエラーを日本語で説明してもらう。",category:"debug",difficulty:"かんたん",emoji:"🖥️",output:"このエラーは「オブジェクトが見つからない」という意味です。〇〇が undefined になっています。",tags:["コンソール","ブラウザ","エラー"]},{id:"s039",name:"ログ分析",type:"prompt",prompt:`以下のサーバーログからエラーの原因を分析してください：

[ログを貼り付け]`,description:"サーバーのログファイルを読んでエラーの原因を探してもらう。",category:"debug",difficulty:"ふつう",emoji:"📋",output:"〇〇時〇〇分に接続タイムアウトが発生しています。データベース接続の設定を確認してください。",tags:["ログ","サーバー","分析"]},{id:"s040",name:"テストが失敗する原因",type:"prompt",prompt:`以下のテストが失敗しています。原因を教えて修正してください：

[テストコードとエラーを貼り付け]`,description:"自動テストが失敗しているとき、何が問題かをClaudeが見つけてくれる。",category:"debug",difficulty:"ふつう",emoji:"❌",output:"モックの戻り値が期待と異なります。mockReturnValue(〇〇) を変更してください。",tags:["テスト","Jest","デバッグ"]},{id:"s041",name:"/simplify",type:"slash",prompt:"/simplify",description:"コードを読みやすくシンプルにする。長くて複雑なコードをすっきりさせてくれる！",category:"refactor",difficulty:"かんたん",emoji:"✨",output:"コードをシンプルにしました。重複部分を関数に切り出し、コード量を30%削減しました。",tags:["シンプル","リファクタリング","読みやすさ"]},{id:"s042",name:"/review",type:"slash",prompt:"/review",description:"コードの問題点・改善点を教えてくれる。プロのコードレビューを無料で受けられる！",category:"refactor",difficulty:"かんたん",emoji:"🔍",output:`【問題点】3点見つかりました：
1. エラーハンドリングが不足
2. 変数名がわかりにくい
3. ループが非効率`,tags:["レビュー","改善","品質"]},{id:"s043",name:"関数分割",type:"prompt",prompt:`この関数が長すぎます。責任ごとに小さな関数に分割してください：

[コードを貼り付け]`,description:"1つの大きな関数を、役割ごとの小さな関数に分けてもらう。",category:"refactor",difficulty:"ふつう",emoji:"✂️",output:`3つの関数に分割しました：
- validateInput()
- processData()
- formatOutput()`,tags:["分割","関数","クリーン"]},{id:"s044",name:"命名改善",type:"prompt",prompt:`このコードの変数名・関数名が分かりにくいです。意味が明確な名前に変更してください：

[コードを貼り付け]`,description:"わかりにくい変数名を、意味が伝わる良い名前に変えてもらう。",category:"refactor",difficulty:"かんたん",emoji:"📛",output:`x → userEmail
flag → isAuthenticated
proc → processPayment`,tags:["命名","可読性","クリーン"]},{id:"s045",name:"重複コード削除",type:"prompt",prompt:`このコードに重複した処理があります。DRY原則に従ってまとめてください：

[コードを貼り付け]`,description:"同じようなコードが複数箇所にある場合、1つにまとめてもらう。",category:"refactor",difficulty:"ふつう",emoji:"🧹",output:"重複部分を共通関数 formatUserData() にまとめました。コードが40行削減されました。",tags:["DRY","重複削除","リファクタリング"]},{id:"s046",name:"最新の書き方に変換",type:"prompt",prompt:`このコードは古い書き方です。最新のJavaScript/TypeScriptの書き方（ES2024）に変換してください：

[コードを貼り付け]`,description:"古いJavaScriptコードを最新の書き方に自動で変換してもらう。",category:"refactor",difficulty:"ふつう",emoji:"🔄",output:`var → const/let
function() {} → () => {}
.then() → async/await`,tags:["モダン","ES2024","アップグレード"]},{id:"s047",name:"コメント追加",type:"prompt",prompt:`このコードにわかりやすいコメントを日本語で追加してください。初心者でも読めるレベルで説明してください：

[コードを貼り付け]`,description:"コードに日本語の説明コメントを追加してもらう。後で見返したときにわかりやすくなる！",category:"refactor",difficulty:"かんたん",emoji:"💬",output:`// ユーザー情報を取得して画面に表示する関数
// 引数: userId - 表示するユーザーのID番号
function displayUser(userId) {`,tags:["コメント","日本語","ドキュメント"]},{id:"s048",name:"エラーハンドリング追加",type:"prompt",prompt:`このコードにエラーハンドリング（try-catch）を追加して、エラー時にわかりやすいメッセージを表示してください：

[コードを貼り付け]`,description:"エラーが起きたときにちゃんと対応できるコードに修正してもらう。",category:"refactor",difficulty:"ふつう",emoji:"🛡️",output:`try {
  await fetchData()
} catch (error) {
  console.error('データの取得に失敗しました:', error)
  showErrorMessage()
}`,tags:["エラーハンドリング","try-catch","堅牢性"]},{id:"s049",name:"ユニットテスト作成",type:"prompt",prompt:`以下の関数のユニットテストをJestで書いてください。正常系・異常系・境界値のテストを含めてください：

[関数コードを貼り付け]`,description:"関数が正しく動くかチェックするテストコードを自動で作ってもらう。",category:"test",difficulty:"ふつう",emoji:"🧪",output:`test('正常系：有効なメールアドレスを返す', () => {
  expect(validateEmail('test@test.com')).toBe(true)
})`,tags:["Jest","ユニットテスト","テスト"]},{id:"s050",name:"E2Eテスト作成",type:"prompt",prompt:"Playwrightを使ってログインフローのE2Eテストを書いてください。",description:"実際にブラウザを操作するテストを自動で作ってもらう。",category:"test",difficulty:"むずかしい",emoji:"🎭",output:`await page.goto('/login')
await page.fill('#email', 'test@example.com')
await page.click('button[type=submit]')`,tags:["Playwright","E2E","ブラウザ"]},{id:"s051",name:"モック作成",type:"prompt",prompt:`以下のAPIをモック（ダミー）に置き換えてテストできるようにしてください：

[APIコードを貼り付け]`,description:"外部APIを使わずにテストできるようにダミーのAPIを作ってもらう。",category:"test",difficulty:"ふつう",emoji:"🎭",output:`jest.mock('./api', () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'テスト' })
}))`,tags:["モック","Jest","API"]},{id:"s052",name:"テストデータ生成",type:"prompt",prompt:"テスト用のダミーデータを100件生成するコードを書いてください。ユーザー情報（名前・メール・年齢）を含めてください。",description:"テスト用のダミーデータを大量に自動生成するコードを作ってもらう。",category:"test",difficulty:"かんたん",emoji:"📊",output:`const users = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: faker.person.fullName(),
  email: faker.internet.email()
}))`,tags:["テストデータ","Faker","ダミー"]},{id:"s053",name:"カバレッジ向上",type:"prompt",prompt:"現在のテストカバレッジが60%です。未テストの部分を特定して、テストを追加してください。",description:"テストが足りていない部分を見つけてテストを追加してもらう。",category:"test",difficulty:"ふつう",emoji:"📈",output:`カバレッジが60%→85%に向上しました。
追加したテスト：エラーケース3件、境界値5件`,tags:["カバレッジ","テスト強化","Jest"]},{id:"s054",name:"APIテスト作成",type:"prompt",prompt:"以下のREST APIのテストをSupertestで書いてください。GET/POST/PUT/DELETEのテストを含めてください：",description:"WebAPIが正しく動くかテストするコードを作ってもらう。",category:"test",difficulty:"ふつう",emoji:"🌐",output:`describe('GET /api/users', () => {
  it('200を返す', async () => {
    await request(app).get('/api/users').expect(200)
  })
})`,tags:["Supertest","API","テスト"]},{id:"s055",name:"スナップショットテスト",type:"prompt",prompt:`以下のReactコンポーネントのスナップショットテストを作成してください：

[コンポーネントを貼り付け]`,description:"UIコンポーネントが意図せず変わっていないかチェックするテストを作ってもらう。",category:"test",difficulty:"ふつう",emoji:"📸",output:`test('Buttonスナップショット', () => {
  const { asFragment } = render(<Button label='テスト' />)
  expect(asFragment()).toMatchSnapshot()
})`,tags:["スナップショット","React","Testing Library"]},{id:"s056",name:"テスト並列化",type:"prompt",prompt:"テストの実行が遅いです。並列実行できるように設定を改善してください。",description:"テストが遅い問題を解決して、並列実行で速くしてもらう。",category:"test",difficulty:"ふつう",emoji:"⚡",output:`// jest.config.js
maxWorkers: "50%",
runInBand: false`,tags:["並列","パフォーマンス","Jest"]},{id:"s057",name:"README作成",type:"prompt",prompt:"このプロジェクトのREADME.mdを作成してください。概要・インストール方法・使い方・スクリーンショット欄を含めてください。",description:"GitHubにアップするときのプロジェクト説明ファイルを自動で作ってもらう。",category:"doc",difficulty:"かんたん",emoji:"📖",output:`# プロジェクト名

## 概要
〇〇のためのWebアプリケーションです。

## インストール
\`\`\`bash
npm install
\`\`\``,tags:["README","GitHub","ドキュメント"]},{id:"s058",name:"API仕様書",type:"prompt",prompt:`以下のAPIのSwagger/OpenAPI仕様書を書いてください：

[APIコードを貼り付け]`,description:"APIの使い方をまとめた仕様書を自動で作ってもらう。他の人が使いやすくなる！",category:"doc",difficulty:"ふつう",emoji:"📋",output:`openapi: 3.0.0
paths:
  /users:
    get:
      summary: ユーザー一覧取得
      responses:
        200:
          description: 成功`,tags:["Swagger","API仕様書","OpenAPI"]},{id:"s059",name:"JSDocコメント",type:"prompt",prompt:`以下の関数にJSDocコメントを追加してください。引数・戻り値・例外の説明を含めてください：

[関数を貼り付け]`,description:"関数の説明・引数・戻り値を自動でコメントに書いてもらう。",category:"doc",difficulty:"かんたん",emoji:"📝",output:`/**
 * ユーザー情報を取得する
 * @param {number} userId - ユーザーID
 * @returns {Promise<User>} ユーザーオブジェクト
 * @throws {Error} ユーザーが見つからない場合
 */`,tags:["JSDoc","コメント","TypeScript"]},{id:"s060",name:"リリースノート生成",type:"prompt",prompt:`以下のGitコミット履歴からリリースノートを生成してください：

[git logの出力を貼り付け]`,description:"Gitのコミット履歴からリリース時の変更ログを自動で作ってもらう。",category:"doc",difficulty:"かんたん",emoji:"📢",output:`## v2.1.0 (2026-05-12)
### 新機能
- ダークモードを追加
### バグ修正
- ログインエラーを修正`,tags:["リリース","CHANGELOG","git"]},{id:"s061",name:"デプロイ手順書",type:"prompt",prompt:"このアプリケーションをVercelにデプロイする手順書を書いてください。スクリーンショットが必要な箇所はその説明も含めてください。",description:"アプリを公開するための手順書を自動で作ってもらう。",category:"doc",difficulty:"かんたん",emoji:"🚀",output:`## Vercelデプロイ手順

1. GitHubにpushする
2. vercel.comにアクセス
3. リポジトリを選択...`,tags:["デプロイ","Vercel","手順書"]},{id:"s062",name:"ER図の説明文",type:"prompt",prompt:"以下のデータベーステーブル定義から、ER図の説明とテーブル間のリレーションを説明する文書を作ってください：",description:"データベースの構造を説明する文書を自動で作ってもらう。",category:"doc",difficulty:"ふつう",emoji:"🗄️",output:"Usersテーブルは1対多でOrdersテーブルと関連しています。1人のユーザーが複数の注文を持てます。",tags:["ER図","データベース","設計書"]},{id:"s063",name:"設計書作成",type:"prompt",prompt:"〇〇機能の基本設計書を作成してください。目的・機能一覧・画面設計・API設計・データフローを含めてください。",description:"機能を作る前に設計書を自動で作ってもらう。チームで共有しやすくなる！",category:"doc",difficulty:"ふつう",emoji:"📐",output:`# 〇〇機能 基本設計書
## 目的
## 機能一覧
## 画面構成
## API一覧`,tags:["設計書","仕様書","ドキュメント"]},{id:"s064",name:"議事録作成",type:"prompt",prompt:`以下の会議メモから議事録を作成してください。決定事項・アクションアイテム・次回日程を明確にしてください：

[メモを貼り付け]`,description:"箇条書きのメモから正式な議事録を自動で作ってもらう。",category:"doc",difficulty:"かんたん",emoji:"📋",output:`## 会議議事録
**決定事項**：〇〇を採用する
**アクションアイテム**：山田が〇〇を〇日までに対応`,tags:["議事録","ビジネス","文書"]},{id:"s065",name:"/security-review",type:"slash",prompt:"/security-review",description:"コードのセキュリティ問題を自動でチェック。ハッカーに狙われる弱点を見つけてくれる！",category:"security",difficulty:"かんたん",emoji:"🛡️",output:`【重大】SQLインジェクションの危険があります（12行目）
【警告】APIキーがハードコードされています（45行目）`,tags:["セキュリティ","脆弱性","チェック"]},{id:"s066",name:"SQLインジェクション対策",type:"prompt",prompt:`以下のコードにSQLインジェクション脆弱性があります。プリペアドステートメントを使って修正してください：

[コードを貼り付け]`,description:"データベースへの不正アクセスを防ぐ修正をしてもらう。",category:"security",difficulty:"ふつう",emoji:"💉",output:"// 危険\ndb.query(`SELECT * FROM users WHERE id = ${id}`)\n// 安全\ndb.query('SELECT * FROM users WHERE id = ?', [id])",tags:["SQLインジェクション","セキュリティ","SQL"]},{id:"s067",name:"XSS対策",type:"prompt",prompt:`このコードにXSS（クロスサイトスクリプティング）の脆弱性があります。修正してください：

[コードを貼り付け]`,description:"ウェブサイトに悪意あるスクリプトを埋め込まれる攻撃を防ぐ修正をしてもらう。",category:"security",difficulty:"ふつう",emoji:"⚠️",output:`// 危険
element.innerHTML = userInput
// 安全
element.textContent = userInput`,tags:["XSS","セキュリティ","HTML"]},{id:"s068",name:"APIキー漏洩チェック",type:"prompt",prompt:"このコードにAPIキーやシークレットが直接書かれていないかチェックして、環境変数を使った安全な実装に修正してください。",description:"パスワードや秘密のキーがコードに直接書かれていないかチェックしてもらう。",category:"security",difficulty:"かんたん",emoji:"🔑",output:`// 危険
const API_KEY = 'sk-1234...'
// 安全
const API_KEY = process.env.API_KEY`,tags:["APIキー","環境変数","セキュリティ"]},{id:"s069",name:"認証・認可チェック",type:"prompt",prompt:"このAPIエンドポイントに適切な認証・認可チェックが実装されているか確認して、不足している部分を修正してください。",description:"本人確認（認証）と権限チェック（認可）が正しく実装されているか確認してもらう。",category:"security",difficulty:"ふつう",emoji:"🔒",output:"ミドルウェアで認証チェックが抜けています。authMiddlewareを追加してください。",tags:["認証","認可","ミドルウェア"]},{id:"s070",name:"パスワードハッシュ化",type:"prompt",prompt:"パスワードを安全に保存するためにbcryptを使ったハッシュ化の実装を追加してください。",description:"パスワードを安全に保存するための暗号化処理を追加してもらう。",category:"security",difficulty:"ふつう",emoji:"🔐",output:`const hashedPassword = await bcrypt.hash(password, 10)
// 照合
await bcrypt.compare(password, hashedPassword)`,tags:["bcrypt","パスワード","ハッシュ"]},{id:"s071",name:"処理速度改善",type:"prompt",prompt:`このコードの処理速度を改善してください。ボトルネックを特定して最適化してください：

[コードを貼り付け]`,description:"動作が遅いコードを速くするための改善案を提案してもらう。",category:"perf",difficulty:"むずかしい",emoji:"⚡",output:"O(n²)のネストされたループを、Map を使った O(n) に最適化しました。処理速度が10倍向上します。",tags:["パフォーマンス","最適化","アルゴリズム"]},{id:"s072",name:"DBクエリ最適化",type:"prompt",prompt:`このデータベースクエリが遅いです。インデックスの追加やクエリの最適化をしてください：

[クエリを貼り付け]`,description:"データベースの検索が遅い問題を解決するための最適化をしてもらう。",category:"perf",difficulty:"むずかしい",emoji:"🗄️",output:`email カラムにインデックスを追加することで、クエリが100倍速くなります：
CREATE INDEX idx_email ON users(email)`,tags:["SQL","インデックス","クエリ最適化"]},{id:"s073",name:"バンドルサイズ削減",type:"prompt",prompt:"Webアプリのバンドルサイズが大きすぎます。コードスプリッティングと遅延ロードを実装して軽量化してください。",description:"Webサイトのファイルサイズを小さくして、読み込みを速くしてもらう。",category:"perf",difficulty:"ふつう",emoji:"📦",output:`const HeavyComponent = lazy(() => import('./HeavyComponent'))
// バンドルサイズが40%削減されました`,tags:["バンドル","コードスプリッティング","Vite"]},{id:"s074",name:"キャッシュ実装",type:"prompt",prompt:"毎回APIを叩いているため遅いです。RedisかLocalStorageを使ったキャッシュを実装してください。",description:"同じデータを何度もAPIから取得しないよう、一時保存（キャッシュ）を実装してもらう。",category:"perf",difficulty:"ふつう",emoji:"💾",output:`const cache = new Map()
if (cache.has(key)) return cache.get(key)
const data = await api.fetch(key)
cache.set(key, data)`,tags:["キャッシュ","Redis","パフォーマンス"]},{id:"s075",name:"画像最適化",type:"prompt",prompt:"このWebサイトの画像が重すぎてページの読み込みが遅いです。WebPへの変換と遅延ロードを実装してください。",description:"画像を圧縮・最適化してページを速く読み込めるようにしてもらう。",category:"perf",difficulty:"かんたん",emoji:"🖼️",output:'<img loading="lazy" src="image.webp" alt="説明" width="800" height="600" />',tags:["画像","WebP","遅延ロード"]},{id:"s076",name:"X投稿文を10本作成",type:"prompt",prompt:"〇〇というテーマで、X(Twitter)に投稿する140字以内のツイートを10本作ってください。バズりやすいように具体的な数字・体験・共感を入れてください。",description:"1週間分以上のX投稿を一気に作ってもらう。毎朝投稿するのが楽になる！",category:"sns",difficulty:"かんたん",emoji:"🐦",output:`【1本目】副業で月5万円稼ぐ方法を3つ紹介します...
【2本目】Claude Codeを使い始めて変わったこと...`,tags:["X","Twitter","SNS投稿"]},{id:"s077",name:"note記事を執筆",type:"prompt",prompt:"〇〇というテーマでnote.com向けの記事を3,000〜5,000文字で書いてください。見出し（##）を使い、初心者でも読みやすい文体で。最後に有料記事への誘導CTAも入れてください。",description:"noteの記事をClaude Codeに丸ごと書いてもらう。15分で完成！",category:"sns",difficulty:"かんたん",emoji:"📝",output:`# 〇〇で月5万円稼ぐ完全ガイド

## はじめに
この記事では...`,tags:["note","記事","コンテンツ"]},{id:"s078",name:"YouTube台本作成",type:"prompt",prompt:`〇〇というYouTube動画の台本を作ってください。
・10〜12分の尺
・冒頭30秒の視聴維持フック
・チャプター構成付き
・読むだけで収録できる形式`,description:"YouTube動画の台本を丸ごと作ってもらう。顔出し不要の解説動画に最適！",category:"sns",difficulty:"かんたん",emoji:"🎬",output:`【冒頭フック】「〇〇で月10万円稼いでいる人の共通点を発見しました」

【チャプター1】...`,tags:["YouTube","台本","動画"]},{id:"s079",name:"LINE配信メッセージ",type:"prompt",prompt:`LINE公式アカウントで送る配信文を作ってください。
テーマ：〇〇
制約：300字・絵文字3〜5個・読者の悩みから始める・末尾に行動促進のCTA`,description:"LINE公式アカウントで送る配信メッセージを自動生成。読者へのメッセージ作りが楽に！",category:"sns",difficulty:"かんたん",emoji:"💬",output:`こんにちは！突然ですが、〇〇で悩んでいませんか？😊

実は先日...`,tags:["LINE","メッセージ","配信"]},{id:"s080",name:"インスタグラムキャプション",type:"prompt",prompt:"インスタグラムの投稿キャプションを作ってください。〇〇というテーマで、感情を動かす文章＋ハッシュタグ30個を含めてください。",description:"インスタの投稿文とハッシュタグを一気に作ってもらう。",category:"sns",difficulty:"かんたん",emoji:"📸",output:`〇〇を毎日続けたら人生が変わりました✨

#副業 #AI活用 #Claude #副業初心者...`,tags:["Instagram","キャプション","ハッシュタグ"]},{id:"s081",name:"SEOタイトル10案",type:"prompt",prompt:"〇〇というテーマのブログ記事について、SEO効果が高いタイトルを10案作ってください。検索されやすいキーワードを含めてください。",description:"Googleで上位表示されやすいタイトルを複数案作ってもらう。",category:"sns",difficulty:"かんたん",emoji:"🔍",output:`1. 【2026年最新】〇〇で月5万円稼ぐ方法
2. 初心者でもできる〇〇完全ガイド
3. 〇〇を使って3ヶ月で副収入を得た話`,tags:["SEO","タイトル","ブログ"]},{id:"s082",name:"1ヶ月投稿カレンダー",type:"prompt",prompt:"〇〇というジャンルで1ヶ月（30日分）のSNS投稿カレンダーを作ってください。毎日テーマが異なり、ネタが被らないようにしてください。",description:"1ヶ月分の投稿ネタを一気に決めてもらう。「今日何投稿しよう…」と悩まなくなる！",category:"sns",difficulty:"かんたん",emoji:"📅",output:`1日：副業始めたきっかけ
2日：使っているツール紹介
3日：先月の収益公開...`,tags:["投稿カレンダー","SNS","コンテンツ計画"]},{id:"s083",name:"プロフィール文作成",type:"prompt",prompt:`X(Twitter)/noteのプロフィール文を作ってください。
・私について：〇〇
・発信テーマ：〇〇
・160文字以内でフォローされやすいように`,description:"フォロワーが増えるようなプロフィール文をClaudeに作ってもらう。",category:"sns",difficulty:"かんたん",emoji:"👤",output:"副業でAI×コンテンツビジネスをやっています｜Claude Code活用で月5万円達成｜同じように稼ぎたい方へ情報発信中",tags:["プロフィール","X","note"]},{id:"s084",name:"バズツイートのパターン分析",type:"prompt",prompt:`以下のバズったツイートを分析して、共通するパターンと構成を教えてください。同じパターンで私のテーマの投稿を5本作ってください：

[バズツイートを貼り付け]`,description:"バズった投稿を分析して、同じパターンで自分の投稿を作ってもらう。",category:"sns",difficulty:"ふつう",emoji:"📊",output:`共通パターン：①驚きの数字 ②具体的な手順 ③行動CTA
このパターンで作った投稿：...`,tags:["バズ分析","パターン","X"]},{id:"s085",name:"メールマガジン作成",type:"prompt",prompt:`メールマガジン（週刊）の第〇号を作成してください。
テーマ：〇〇
構成：ご挨拶・メインコンテンツ・今週のTips・お知らせ・締め`,description:"メルマガの文章をClaude Codeに全部書いてもらう。読者へのメッセージが楽に！",category:"sns",difficulty:"かんたん",emoji:"📧",output:`【第〇号】〇〇だより

いつもお読みいただきありがとうございます...`,tags:["メルマガ","メール","ニュースレター"]},{id:"s086",name:"アフィリエイト記事",type:"prompt",prompt:"〇〇という商品のアフィリエイト紹介記事を2,000文字で書いてください。メリット・デメリット・こんな人に向いている・実際の使い方を含めてください。",description:"商品を紹介してアフィリエイト収入を得るための記事を自動生成。",category:"sns",difficulty:"ふつう",emoji:"🔗",output:`# 〇〇を3ヶ月使って分かったこと【正直レビュー】

## 結論から言うと...`,tags:["アフィリエイト","紹介記事","収益化"]},{id:"s087",name:"動画説明欄・タグ",type:"prompt",prompt:"〇〇というYouTube動画の説明欄とタグを最適化してください。検索されやすいキーワードを含め、チャンネル登録を促すCTAも入れてください。",description:"YouTube動画の説明欄とタグを自動最適化してもらう。再生回数アップに繋がる！",category:"sns",difficulty:"かんたん",emoji:"🏷️",output:`▼ チャプター
00:00 はじめに
01:30 〇〇とは

▼ 関連リンク
・Claude Code: https://claude.ai`,tags:["YouTube","説明欄","SEO"]},{id:"s088",name:"コメント返信文",type:"prompt",prompt:`私のSNS投稿に以下のコメントが来ました。丁寧で好感度が上がる返信文を5パターン作ってください：

[コメント内容を貼り付け]`,description:"フォロワーからのコメントへの返信を自動生成。エンゲージメント向上に！",category:"sns",difficulty:"かんたん",emoji:"💬",output:`返信1：〇〇さん、コメントありがとうございます！...
返信2：嬉しいお言葉ありがとうございます！...`,tags:["コメント","返信","エンゲージメント"]},{id:"s089",name:"プレスリリース作成",type:"prompt",prompt:`以下のサービス・製品のプレスリリースを作成してください。

サービス名：〇〇
概要：〇〇
リリース日：〇〇
問い合わせ先：〇〇`,description:"新サービス・新機能のお知らせ文書をClaude Codeに作ってもらう。",category:"sns",difficulty:"かんたん",emoji:"📢",output:`【報道関係者各位】
プレスリリース

〇〇株式会社、新サービス「〇〇」をリリース`,tags:["プレスリリース","ビジネス","PR"]},{id:"s090",name:"サムネイルのコピー文",type:"prompt",prompt:"YouTubeのサムネイルに使う短いコピー（キャッチコピー）を10個作ってください。動画テーマ：〇〇。クリックしたくなるような文言で。",description:"YouTube動画のサムネイルに載せる目を引くコピーを作ってもらう。",category:"sns",difficulty:"かんたん",emoji:"🎨",output:`1. 月5万円→これだけでOK
2. 99%が知らない秘密
3. 3ヶ月で人生変わった
...`,tags:["サムネイル","コピーライティング","YouTube"]},{id:"s091",name:"ランサーズ出品文",type:"prompt",prompt:`ランサーズ/ココナラに出品するサービスの説明文を作ってください。
サービス内容：〇〇（Claude Codeを活用した〇〇代行）
価格：〇〇円
ターゲット：〇〇`,description:"フリーランスサービスの出品ページ文を自動生成。すぐ出品できる！",category:"business",difficulty:"かんたん",emoji:"💼",output:`【AI×〇〇代行】高品質・最短24時間納品

✅ AIを活用した効率的な制作
✅ 修正2回まで無料
✅ 実績〇件`,tags:["ランサーズ","ココナラ","フリーランス"]},{id:"s092",name:"事業計画書",type:"prompt",prompt:`以下の副業・事業の事業計画書を作成してください。
事業内容：〇〇
目標売上：〇〇
ターゲット：〇〇

市場分析・収益モデル・3ヶ月のロードマップも含めてください。`,description:"副業・ビジネスの計画書をClaudeが自動で作ってくれる。銀行融資の申請にも使える。",category:"business",difficulty:"ふつう",emoji:"📊",output:`# 〇〇事業計画書

## 事業概要
## 市場規模と競合分析
## 収益モデル
## 3ヶ月ロードマップ`,tags:["事業計画","ビジネス","副業"]},{id:"s093",name:"見積書・請求書テンプレ",type:"prompt",prompt:"フリーランス向けの見積書テンプレートをHTMLで作成してください。会社名・金額・明細・振込先・有効期限を含めてください。",description:"見積書・請求書のテンプレートをClaude Codeが自動で作ってくれる。",category:"business",difficulty:"かんたん",emoji:"📄",output:`<!DOCTYPE html>
<html>
<body>
<h1>御見積書</h1>
<table>...</table>
</body>
</html>`,tags:["見積書","請求書","フリーランス"]},{id:"s094",name:"セールスメール作成",type:"prompt",prompt:`以下のサービスを新規顧客に提案するセールスメールを作ってください。
サービス：〇〇
ターゲット：〇〇の課題を持つ人
特徴：〇〇

件名5案とメール本文を作成してください。`,description:"営業メールをClaude Codeに作ってもらう。断られにくい文章にしてくれる！",category:"business",difficulty:"かんたん",emoji:"📧",output:`件名：【〇〇様へ】〇〇の課題を解決するご提案

いつもお世話になっております...`,tags:["セールス","メール","営業"]},{id:"s095",name:"競合分析レポート",type:"prompt",prompt:"〇〇サービスの競合分析をしてください。主要な競合5社の特徴・価格・強み・弱みをまとめて、差別化ポイントを提案してください。",description:"競合他社の分析レポートをClaudeが自動で作ってくれる。市場調査が楽になる！",category:"business",difficulty:"ふつう",emoji:"🔍",output:`## 競合分析レポート

### 競合A：〇〇
強み：〇〇
弱み：〇〇
価格：〇〇

### 差別化ポイント...`,tags:["競合分析","マーケティング","ビジネス"]},{id:"s096",name:"LP（ランディングページ）コピー",type:"prompt",prompt:`以下のサービスのランディングページ（LP）のコピーを作ってください。
サービス：〇〇
ターゲット：〇〇

キャッチコピー・問題提起・解決策・実績・料金・FAQ・CTAを含めてください。`,description:"サービスを売るための1ページのウェブサイトのコピー文を全部作ってもらう。",category:"business",difficulty:"ふつう",emoji:"🖥️",output:`# 〇〇で悩む〇〇に朗報。
## あなたのこんな悩みを解決します
- 〇〇が難しい
- 〇〇に時間がかかる`,tags:["LP","コピーライティング","マーケティング"]},{id:"s097",name:"提案書作成",type:"prompt",prompt:`クライアントへの提案書を作成してください。
クライアントの課題：〇〇
提案内容：〇〇
料金：〇〇
期間：〇〇

パワーポイント風の構成でまとめてください。`,description:"クライアントへのプレゼン用提案書をClaude Codeが自動作成。",category:"business",difficulty:"ふつう",emoji:"📊",output:`## 提案書

### 1. 現状と課題
### 2. 解決策
### 3. 実施スケジュール
### 4. 費用`,tags:["提案書","プレゼン","ビジネス"]},{id:"s098",name:"収益化戦略策定",type:"prompt",prompt:"〇〇というスキル・知識を持っている私が、副業で月〇万円を目指すための収益化戦略を3つ提案してください。それぞれのリスク・リターン・始め方を説明してください。",description:"自分のスキルを使ってお金を稼ぐ方法をClaudeが提案してくれる。",category:"business",difficulty:"かんたん",emoji:"💡",output:`戦略1：〇〇代行（リスク：低、月収見込み：3〜10万円）
戦略2：〇〇情報商材販売...`,tags:["収益化","副業","戦略"]},{id:"s099",name:"FAQ・よくある質問",type:"prompt",prompt:"〇〇というサービスのFAQ（よくある質問）を20問作ってください。顧客が不安に感じるポイントを先回りして答える形式で。",description:"サービスのよくある質問と回答をまとめて作ってもらう。顧客対応が楽になる！",category:"business",difficulty:"かんたん",emoji:"❓",output:`Q. 初心者でも使えますか？
A. はい、〇〇から始められます。

Q. 返金保証はありますか？
A. ...`,tags:["FAQ","カスタマーサポート","ビジネス"]},{id:"s100",name:"Udemyコース設計",type:"prompt",prompt:"〇〇を教えるUdemy講座のカリキュラムを設計してください。全〇時間・〇セクション・対象者は初心者。受講後に〇〇できるようになる目標で。",description:"オンライン講座（Udemy）のカリキュラムをClaudeが全部設計してくれる。",category:"business",difficulty:"ふつう",emoji:"🎓",output:`## 〇〇 完全マスターコース

### セクション1：はじめかた（60分）
- レッスン1：〇〇とは
- レッスン2：インストール`,tags:["Udemy","講座","教育コンテンツ"]},{id:"s101",name:"CSV分析スクリプト",type:"prompt",prompt:"以下のCSVファイルを分析するPythonスクリプトを書いてください。列名：〇〇。平均・最大・最小・相関関係を計算してグラフで可視化してください。",description:"ExcelやCSVのデータをPythonで自動分析してグラフにしてもらう。",category:"data",difficulty:"ふつう",emoji:"📊",output:`import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data.csv")
print(df.describe())`,tags:["Python","pandas","データ分析"]},{id:"s102",name:"売上データ分析",type:"prompt",prompt:`以下の売上データを分析してください。月次トレンド・前年比・売れ筋商品TOP10・改善提案を含めてください：

[データを貼り付け]`,description:"売上データをClaudeが分析して、改善提案まで出してくれる。経営判断に活用できる！",category:"data",difficulty:"ふつう",emoji:"💹",output:`## 売上分析レポート
前月比：+12%
前年比：+38%

売れ筋1位：〇〇（月〇件）

改善提案：...`,tags:["売上","分析","ビジネス"]},{id:"s103",name:"アンケート結果まとめ",type:"prompt",prompt:`以下のアンケート回答をまとめてください。回答数：〇件。グラフの説明・傾向・インサイト・改善提案を含めてください：

[アンケート結果を貼り付け]`,description:"アンケートの回答をClaudeが自動でまとめてレポートにしてくれる。",category:"data",difficulty:"かんたん",emoji:"📋",output:`## アンケート分析結果
回答数：100件

最多回答：〇〇（45%）

インサイト：...`,tags:["アンケート","レポート","分析"]},{id:"s104",name:"Googleアナリティクス分析",type:"prompt",prompt:`Google Analyticsのデータを分析してください。
期間：〇〇
主要指標：セッション数・直帰率・コンバージョン率

問題点と改善施策を提案してください。`,description:"Webサイトのアクセスデータを分析して、改善方法を提案してもらう。",category:"data",difficulty:"ふつう",emoji:"📈",output:"直帰率が〇%と高い原因：スマホ表示が最適化されていない可能性があります。改善策：...",tags:["GA4","アクセス解析","Webマーケティング"]},{id:"s105",name:"Excel集計自動化",type:"prompt",prompt:"Excelの〇〇データを毎月手動で集計しています。PythonでExcelを自動集計するスクリプトを作ってください。",description:"毎月のExcel作業をPythonで自動化するスクリプトを作ってもらう。月に数時間の節約に！",category:"data",difficulty:"ふつう",emoji:"📗",output:`import openpyxl
wb = openpyxl.load_workbook("data.xlsx")
ws = wb.active
# 集計処理...`,tags:["Excel","Python","自動化"]},{id:"s106",name:"英語ページを日本語に翻訳",type:"prompt",prompt:`以下の英語テキストを自然な日本語に翻訳してください。専門用語は()内に原語を残してください：

[英語テキストを貼り付け]`,description:"英語のウェブサイトやドキュメントを日本語に翻訳してもらう。",category:"translate",difficulty:"かんたん",emoji:"🌍",output:"このAPIは（Application Programming Interface）、外部サービスと連携するための...",tags:["翻訳","英語","日本語"]},{id:"s107",name:"英語のエラーを日本語で説明",type:"prompt",prompt:`以下の英語のエラーメッセージを日本語でわかりやすく説明してください。初心者向けに解決方法も教えてください：

[英語エラーを貼り付け]`,description:"英語のエラーメッセージの意味を日本語で教えてもらう。エラーが怖くなくなる！",category:"translate",difficulty:"かんたん",emoji:"📖",output:"このエラーは「ファイルが見つかりません」という意味です。解決方法：ファイルのパスを確認してください。",tags:["エラー","翻訳","日本語"]},{id:"s108",name:"英語メールの返信",type:"prompt",prompt:`以下の英語メールへの返信を英語で書いてください。丁寧なビジネスメールの形式で。

元のメール：[英語メールを貼り付け]`,description:"英語のメールへの返信をClaudeが書いてくれる。英語が苦手でも問題なし！",category:"translate",difficulty:"かんたん",emoji:"✉️",output:`Dear 〇〇,

Thank you for your email. I would be happy to...`,tags:["英語","メール","ビジネス"]},{id:"s109",name:"多言語対応実装",type:"prompt",prompt:"このReactアプリにi18n（多言語対応）を実装してください。日本語・英語・中国語に対応させてください。",description:"ウェブサイトを複数の言語に対応させる機能を実装してもらう。",category:"translate",difficulty:"むずかしい",emoji:"🗣️",output:`import i18n from 'i18next'
i18n.init({
  resources: {
    ja: { translation: { hello: 'こんにちは' } },
    en: { translation: { hello: 'Hello' } }
  }
})`,tags:["i18n","多言語","React"]},{id:"s110",name:"英語ドキュメントを日本語化",type:"prompt",prompt:`以下の英語の技術ドキュメントを日本語に翻訳してください。コードブロックはそのまま残し、コメントのみ日本語にしてください：

[ドキュメントを貼り付け]`,description:"英語の技術ドキュメントを日本語に翻訳。コードは残してコメントだけ日本語に！",category:"translate",difficulty:"かんたん",emoji:"📚",output:`// ユーザーデータを取得する関数
function getUser(id) {
  // APIからデータを取得
  return fetch(\`/api/users/\${id}\`)
}`,tags:["ドキュメント","翻訳","技術文書"]},{id:"s111",name:"ファイル一括リネーム",type:"prompt",prompt:`フォルダ内のファイルを一括リネームするPythonスクリプトを作ってください。
ルール：〇〇_001.jpg, 〇〇_002.jpg... という形式に変換。`,description:"フォルダにある大量のファイルを一瞬で一括リネームするスクリプトを作ってもらう。",category:"auto",difficulty:"かんたん",emoji:"📁",output:`import os
files = sorted(os.listdir("."))
for i, f in enumerate(files):
    os.rename(f, f"photo_{i:03d}.jpg")`,tags:["ファイル","リネーム","Python"]},{id:"s112",name:"スクレイピング",type:"prompt",prompt:"〇〇サイトから〇〇のデータを定期的に収集するスクレイピングスクリプトを書いてください。結果をCSVに保存してください。",description:"ウェブサイトから自動でデータを集めてCSVに保存するスクリプトを作ってもらう。",category:"auto",difficulty:"ふつう",emoji:"🕷️",output:`import requests
from bs4 import BeautifulSoup
import csv

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")`,tags:["スクレイピング","Python","データ収集"]},{id:"s113",name:"n8nワークフロー設計",type:"prompt",prompt:`以下の作業を自動化するn8nワークフローを設計してください：
〇〇したら→〇〇して→〇〇に送る

具体的なノード設定も教えてください。`,description:"n8n（無料の自動化ツール）で作業を自動化するフローを設計してもらう。",category:"auto",difficulty:"ふつう",emoji:"⚙️",output:`ワークフロー：
1. Webhookで受信 → 2. Claudeで文章生成 → 3. Xに投稿 → 4. Notionに記録`,tags:["n8n","自動化","ノーコード"]},{id:"s114",name:"バックアップスクリプト",type:"prompt",prompt:"指定フォルダを毎日自動でバックアップするシェルスクリプトを作ってください。日付付きのzipファイルを作成してDropboxに保存するフローで。",description:"大事なファイルを自動でバックアップするスクリプトを作ってもらう。",category:"auto",difficulty:"ふつう",emoji:"💾",output:'DATE=$(date +%Y%m%d)\nzip -r "backup_${DATE}.zip" ./important_files/\nmv "backup_${DATE}.zip" ~/Dropbox/backups/',tags:["バックアップ","シェルスクリプト","自動化"]},{id:"s115",name:"Slack自動通知",type:"prompt",prompt:"〇〇が完了したときに自動でSlackに通知するスクリプトを書いてください。Slack Incoming Webhookを使ってください。",description:"作業完了時に自動でSlackに通知するスクリプトを作ってもらう。チームへの報告が楽に！",category:"auto",difficulty:"ふつう",emoji:"🔔",output:`import requests
requests.post(WEBHOOK_URL, json={'text': '✅ デプロイが完了しました！'})`,tags:["Slack","通知","自動化"]},{id:"s116",name:"GitHub Actions設定",type:"prompt",prompt:"GitHubにpushしたら自動でテストを実行してデプロイするGitHub Actionsのワークフローを作成してください。",description:"GitHubに保存したら自動でテストとデプロイを実行する仕組みを作ってもらう。",category:"auto",difficulty:"むずかしい",emoji:"🤖",output:`name: CI/CD
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm test`,tags:["GitHub Actions","CI/CD","自動化"]},{id:"s117",name:"Discord Bot作成",type:"prompt",prompt:"Discord Botを作成してください。コマンド「!claude」で入力した質問をClaude APIに送って回答するBotを作ってください。",description:"DiscordでClaudeと会話できるBotを作ってもらう。サーバーメンバー全員が使える！",category:"auto",difficulty:"むずかしい",emoji:"🎮",output:`client.on('messageCreate', async msg => {
  if (msg.content.startsWith('!claude')) {
    const reply = await callClaude(msg.content)
    msg.reply(reply)
  }
})`,tags:["Discord","Bot","Claude API"]}];u.forEach(e=>{e.count=m.filter(n=>n.category===e.id).length});const R={かんたん:"bg-emerald-500/20 text-emerald-400 border-emerald-500/30",ふつう:"bg-yellow-500/20 text-yellow-400 border-yellow-500/30",むずかしい:"bg-red-500/20 text-red-400 border-red-500/30"},k={かんたん:"●○○",ふつう:"●●○",むずかしい:"●●●"};function D({skill:e,onClick:n}){const[s,p]=d.useState(!1),r=u.find(i=>i.id===e.category),c=i=>{i.stopPropagation(),navigator.clipboard.writeText(e.prompt).then(()=>{p(!0),setTimeout(()=>p(!1),1800)})};return t.jsxs("div",{onClick:n,className:"group flex flex-col rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-600 hover:bg-gray-800/80 transition-all cursor-pointer overflow-hidden",children:[t.jsxs("div",{className:"flex items-start gap-3 p-4",style:{borderBottom:`2px solid ${r==null?void 0:r.color}22`},children:[t.jsx("div",{className:"shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-xl shadow",style:{background:`${r==null?void 0:r.color}22`},children:e.emoji}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("h3",{className:"text-white font-bold text-sm leading-tight group-hover:text-brand-300 transition-colors",children:e.name}),t.jsx("span",{className:`shrink-0 text-xs px-1.5 py-0.5 rounded font-mono ${e.type==="slash"?"bg-brand-500/20 text-brand-400":"bg-purple-500/20 text-purple-400"}`,children:e.type==="slash"?"/コマンド":"プロンプト"})]}),t.jsx("p",{className:"text-gray-400 text-xs mt-1 leading-relaxed line-clamp-2",children:e.description})]})]}),t.jsxs("div",{className:"mx-4 mt-3 rounded-xl overflow-hidden border border-gray-700 flex-1",children:[t.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 bg-gray-800 border-b border-gray-700",children:[t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),t.jsx(f,{size:10,className:"text-gray-500 ml-1"}),t.jsx("span",{className:"text-gray-500 text-xs ml-0.5",children:"Claude Code"})]}),t.jsxs("div",{className:"bg-gray-950 px-3 py-2.5",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-emerald-400 font-mono text-xs shrink-0 mt-0.5",children:"❯"}),t.jsx("code",{className:"text-brand-300 font-mono text-xs leading-relaxed break-all",children:e.prompt.length>80?e.prompt.slice(0,80)+"…":e.prompt})]}),t.jsx("div",{className:"mt-2 pl-4 border-l-2 border-gray-700",children:t.jsx("p",{className:"text-gray-400 font-mono text-xs leading-relaxed line-clamp-2 whitespace-pre-line",children:e.output.split(`
`).slice(0,2).join(`
`)})})]})]}),t.jsxs("div",{className:"flex items-center justify-between px-4 py-3 mt-2",children:[t.jsx("div",{className:"flex items-center gap-2",children:t.jsxs("span",{className:`text-xs px-2 py-0.5 rounded-full border font-medium ${R[e.difficulty]}`,children:[k[e.difficulty]," ",e.difficulty]})}),t.jsxs("button",{onClick:c,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${s?"bg-emerald-500/20 text-emerald-400":"bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"}`,children:[s?t.jsx(S,{size:12}):t.jsx(v,{size:12}),s?"コピー済み！":"コピー"]})]})]})}const U={かんたん:"bg-emerald-500/20 text-emerald-400 border-emerald-500/30",ふつう:"bg-yellow-500/20 text-yellow-400 border-yellow-500/30",むずかしい:"bg-red-500/20 text-red-400 border-red-500/30"};function M({skill:e,onClose:n}){const[s,p]=d.useState(!1),r=u.find(i=>i.id===e.category),c=()=>{navigator.clipboard.writeText(e.prompt).then(()=>{p(!0),setTimeout(()=>p(!1),2e3)})};return t.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",onClick:n,children:t.jsxs("div",{className:"relative w-full max-w-lg rounded-2xl bg-gray-900 border border-gray-700 shadow-2xl overflow-hidden",onClick:i=>i.stopPropagation(),children:[t.jsxs("div",{className:"flex items-center gap-4 px-6 py-5",style:{background:`linear-gradient(135deg, ${r==null?void 0:r.color}22, transparent)`},children:[t.jsx("div",{className:"w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg shrink-0",style:{background:`${r==null?void 0:r.color}33`},children:e.emoji}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[t.jsx("h2",{className:"text-white font-bold text-lg",children:e.name}),t.jsx("span",{className:`text-xs px-2 py-0.5 rounded-full border font-medium ${U[e.difficulty]}`,children:e.difficulty})]}),t.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[t.jsxs("span",{className:"text-xs text-gray-400",children:[r==null?void 0:r.emoji," ",r==null?void 0:r.label]}),t.jsx("span",{className:`text-xs px-1.5 py-0.5 rounded font-mono ${e.type==="slash"?"bg-brand-500/20 text-brand-400":"bg-purple-500/20 text-purple-400"}`,children:e.type==="slash"?"/コマンド":"プロンプト"})]})]}),t.jsx("button",{onClick:n,className:"w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors shrink-0",children:t.jsx(g,{size:16})})]}),t.jsxs("div",{className:"px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-500 font-medium mb-1.5",children:"📖 どんなスキル？"}),t.jsx("p",{className:"text-gray-200 text-sm leading-relaxed",children:e.description})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-500 font-medium mb-2",children:"⌨️ Claude Codeに入力する文字"}),t.jsxs("div",{className:"rounded-xl overflow-hidden border border-gray-700",children:[t.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 bg-gray-800 border-b border-gray-700",children:[t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-400"}),t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-400"}),t.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-green-400"}),t.jsx(f,{size:10,className:"text-gray-500 ml-1"}),t.jsx("span",{className:"text-gray-500 text-xs ml-0.5",children:"Claude Code — ターミナル"})]}),t.jsxs("div",{className:"bg-gray-950 px-4 py-3",children:[t.jsxs("div",{className:"flex items-start gap-2",children:[t.jsx("span",{className:"text-emerald-400 font-mono text-sm shrink-0",children:"❯"}),t.jsx("code",{className:"text-brand-300 font-mono text-sm leading-relaxed whitespace-pre-wrap break-all",children:e.prompt})]}),t.jsxs("div",{className:"mt-1 ml-4 flex items-center gap-1.5",children:[t.jsx("div",{className:"w-2 h-4 bg-brand-400 animate-pulse rounded-sm"}),t.jsx("span",{className:"text-gray-600 text-xs",children:"ここにカーソルがある"})]})]})]}),t.jsxs("button",{onClick:c,className:`mt-2 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm transition-all ${s?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-brand-500 hover:bg-brand-600 text-white"}`,children:[s?t.jsx(S,{size:16}):t.jsx(v,{size:16}),s?"クリップボードにコピーしました！":"この文字をコピーする"]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs text-gray-500 font-medium mb-2",children:"💬 Claudeの返答例"}),t.jsx("div",{className:"rounded-xl bg-gray-800/60 border border-gray-700 px-4 py-3",children:t.jsx("p",{className:"text-gray-300 text-sm leading-relaxed font-mono whitespace-pre-line",children:e.output})})]}),e.tags.length>0&&t.jsxs("div",{children:[t.jsxs("p",{className:"text-xs text-gray-500 font-medium mb-2 flex items-center gap-1",children:[t.jsx(L,{size:12})," タグ"]}),t.jsx("div",{className:"flex flex-wrap gap-1.5",children:e.tags.map(i=>t.jsxs("span",{className:"text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-400 border border-gray-700",children:["#",i]},i))})]}),t.jsxs("div",{className:"rounded-xl bg-brand-500/10 border border-brand-500/20 px-4 py-3",children:[t.jsx("p",{className:"text-brand-400 text-xs font-bold mb-1",children:"💡 使い方のコツ"}),t.jsx("p",{className:"text-gray-300 text-xs leading-relaxed",children:e.type==="slash"?"ターミナルに「"+e.prompt+"」と入力してEnterキーを押すだけ！ 簡単だよ。":"上の文章をコピーして、Claude Codeのターミナル画面に貼り付けてEnterを押そう。"})]})]})]})})}function z(){var C,N;const[e,n]=d.useState(""),[s,p]=d.useState("all"),[r,c]=d.useState("all"),[i,x]=d.useState("all"),[b,h]=d.useState(null),y=d.useMemo(()=>{let o=m;if(s!=="all"&&(o=o.filter(a=>a.category===s)),r!=="all"&&(o=o.filter(a=>a.difficulty===r)),i!=="all"&&(o=o.filter(a=>a.type===i)),e.trim()){const a=e.toLowerCase();o=o.filter(l=>l.name.toLowerCase().includes(a)||l.description.toLowerCase().includes(a)||l.prompt.toLowerCase().includes(a)||l.tags.some(E=>E.includes(a)))}return o},[e,s,r,i]),j=()=>{n(""),p("all"),c("all"),x("all")},w=e||s!=="all"||r!=="all"||i!=="all";return t.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8 space-y-8",children:[t.jsxs("div",{className:"text-center space-y-3",children:[t.jsxs("div",{className:"inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/30 rounded-full px-4 py-1.5 text-brand-400 text-sm font-medium",children:[t.jsx(T,{size:14}),"SKILLライブラリ"]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-bold text-white",children:["使えるSKILL ",t.jsxs("span",{className:"text-brand-400",children:[m.length,"個"]})," 全部見せます！"]}),t.jsxs("p",{className:"text-gray-400 max-w-xl mx-auto text-sm leading-relaxed",children:["カテゴリから選ぶか、検索して使いたいSKILLを見つけよう。",t.jsx("br",{}),"コピーボタンを押してClaudeに貼り付けるだけ！"]}),t.jsxs("div",{className:"inline-flex items-center gap-3 bg-gray-800/60 border border-gray-700 rounded-xl px-5 py-3 text-left mt-2",children:[t.jsx(f,{size:20,className:"text-brand-400 shrink-0"}),t.jsxs("div",{children:[t.jsx("p",{className:"text-white text-sm font-bold",children:"SKILLってどこに入力するの？"}),t.jsx("p",{className:"text-gray-400 text-xs mt-0.5",children:"ターミナル（黒い画面）でClaudeが起動している場所に入力するよ。カードをタップすると詳しく説明するね！"})]})]})]}),t.jsxs("div",{className:"relative max-w-xl mx-auto",children:[t.jsx(I,{size:16,className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"}),t.jsx("input",{value:e,onChange:o=>n(o.target.value),placeholder:"名前・説明・タグで検索… 例：「コード」「エラー」「SNS」",className:"w-full bg-gray-800 border border-gray-700 rounded-2xl pl-10 pr-10 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"}),e&&t.jsx("button",{onClick:()=>n(""),className:"absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300",children:t.jsx(g,{size:16})})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"📂 カテゴリで絞り込む"}),t.jsxs("div",{className:"flex flex-wrap gap-2",children:[t.jsxs("button",{onClick:()=>p("all"),className:`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${s==="all"?"bg-brand-500/20 border-brand-500/50 text-brand-300":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"}`,children:["🗂️ すべて（",m.length,"）"]}),u.map(o=>{const a=m.filter(l=>l.category===o.id).length;return t.jsxs("button",{onClick:()=>p(o.id),className:`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all ${s===o.id?"text-white border-transparent":"bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"}`,style:s===o.id?{background:`${o.color}33`,borderColor:o.color}:{},children:[o.emoji," ",o.label,t.jsxs("span",{className:"text-xs opacity-60",children:["(",a,")"]})]},o.id)})]})]}),t.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-xs text-gray-500",children:"難易度："}),["all","かんたん","ふつう","むずかしい"].map(o=>t.jsx("button",{onClick:()=>c(o),className:`text-xs px-2.5 py-1 rounded-lg border transition-colors ${r===o?"bg-brand-500/20 border-brand-500/50 text-brand-300":"bg-gray-800 border-gray-700 text-gray-400 hover:text-white"}`,children:o==="all"?"すべて":o},o))]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"text-xs text-gray-500",children:"種類："}),[{v:"all",label:"すべて"},{v:"slash",label:"/コマンド"},{v:"prompt",label:"プロンプト"}].map(({v:o,label:a})=>t.jsx("button",{onClick:()=>x(o),className:`text-xs px-2.5 py-1 rounded-lg border transition-colors ${i===o?"bg-brand-500/20 border-brand-500/50 text-brand-300":"bg-gray-800 border-gray-700 text-gray-400 hover:text-white"}`,children:a},o))]}),w&&t.jsxs("button",{onClick:j,className:"text-xs text-gray-500 hover:text-gray-300 flex items-center gap-1 transition-colors",children:[t.jsx(g,{size:12})," フィルターをリセット"]})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{className:"text-sm text-gray-400",children:[t.jsx("span",{className:"text-white font-bold",children:y.length})," / ",m.length," スキルを表示中"]}),s!=="all"&&t.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[t.jsx("span",{className:"text-gray-400",children:"カテゴリ："}),t.jsxs("span",{className:"text-white font-medium",children:[(C=u.find(o=>o.id===s))==null?void 0:C.emoji," ",(N=u.find(o=>o.id===s))==null?void 0:N.label]})]})]}),y.length===0?t.jsxs("div",{className:"text-center py-20 space-y-4",children:[t.jsx("p",{className:"text-5xl",children:"🤔"}),t.jsx("p",{className:"text-gray-400 font-medium",children:"スキルが見つかりませんでした"}),t.jsx("p",{className:"text-gray-600 text-sm",children:"別のキーワードやカテゴリで試してみてね"}),t.jsx("button",{onClick:j,className:"text-brand-400 hover:text-brand-300 text-sm transition-colors",children:"→ フィルターをリセットする"})]}):t.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:y.map(o=>t.jsx(D,{skill:o,onClick:()=>h(o)},o.id))}),t.jsxs("div",{className:"rounded-2xl bg-gray-800/40 border border-gray-700 p-6 text-center space-y-3",children:[t.jsx(P,{size:28,className:"text-brand-400 mx-auto"}),t.jsx("h3",{className:"text-white font-bold text-lg",children:"SKILLのつかいかたがわからない？"}),t.jsxs("p",{className:"text-gray-400 text-sm max-w-md mx-auto leading-relaxed",children:["初心者ガイドでClaude Codeの起動方法から丁寧に説明しているよ。",t.jsx("br",{}),"スキルカードをタップすると詳しい入力方法も見られるよ！"]}),t.jsx("a",{href:"/guide",className:"inline-flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-colors",children:"🔰 初心者ガイドを見る"})]}),b&&t.jsx(M,{skill:b,onClose:()=>h(null)})]})}export{z as SkillLibrary};
