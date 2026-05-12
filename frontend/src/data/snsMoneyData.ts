// SNS × Claude Code × 稼ぐ方法 — 徹底リサーチデータ（URL付き）

export interface MoneyPhase {
  phase: number
  period: string
  title: string
  emoji: string
  color: string
  goal: string
  income: string
  tasks: { text: string; url?: string; tip?: string }[]
  milestone: string
}

export interface SnsPlatform {
  id: string
  name: string
  emoji: string
  color: string
  bgColor: string
  tagline: string
  earningMin: number  // 月収 万円
  earningMax: number
  difficulty: 1 | 2 | 3 | 4 | 5
  timeToFirstIncome: string
  description: string
  requiredTools: { name: string; url: string; free: boolean; desc: string }[]
  steps: { title: string; detail: string; url?: string; prompt?: string; tip?: string }[]
  realEarningMethods: { method: string; amount: string; how: string }[]
  mockPost?: { type: string; content: string; stats?: string }
}

// ── 稼ぐロードマップ 5フェーズ ─────────────────────────
export const MONEY_PHASES: MoneyPhase[] = [
  {
    phase: 0,
    period: '今日〜3日目',
    title: '道具を準備する',
    emoji: '🔧',
    color: '#6b7280',
    goal: 'Claude Codeを起動できるようにする',
    income: '0円',
    tasks: [
      { text: 'claude.ai でアカウント作成（無料）', url: 'https://claude.ai', tip: 'Googleアカウントでも登録できる' },
      { text: 'Node.js をインストール', url: 'https://nodejs.org/ja/', tip: 'LTS版（安定版）を選ぶこと' },
      { text: 'ターミナルを開いて「npm install -g @anthropic-ai/claude-code」を実行' },
      { text: 'X(Twitter)アカウントを作成', url: 'https://twitter.com', tip: '本名不要。ニックネームでOK' },
      { text: 'note.comアカウントを作成', url: 'https://note.com', tip: '無料で記事を売れる' },
    ],
    milestone: '「claude」と打って返事が来たら成功！',
  },
  {
    phase: 1,
    period: '1〜2週目',
    title: '初めての作品を作る',
    emoji: '✏️',
    color: '#3b82f6',
    goal: 'AIで作ったコンテンツを1つ公開する',
    income: '0〜1,000円',
    tasks: [
      { text: 'Claude Codeに「副業について1,000字の記事を書いて」と頼む', tip: '日本語でOK！そのままコピペして使える' },
      { text: 'note.comに記事を投稿（無料公開）', url: 'https://note.com', tip: 'まず無料で公開してスキの数を確認' },
      { text: 'X(Twitter)で毎日1投稿を始める', url: 'https://twitter.com', tip: 'Claudeに「今日のツイートを作って」と毎日頼む' },
      { text: 'Xの投稿をスケジュール管理（Buffer無料版）', url: 'https://buffer.com', tip: '予約投稿で毎日自動投稿できる' },
    ],
    milestone: 'note記事を1本公開 + Xフォロワー10人達成！',
  },
  {
    phase: 2,
    period: '3〜4週目',
    title: '習慣化＆フォロワーを増やす',
    emoji: '📈',
    color: '#8b5cf6',
    goal: 'Xフォロワー100人・note月100PV',
    income: '0〜5,000円',
    tasks: [
      { text: 'Claudeに「今週のX投稿7本を一括作成して」と頼む', tip: '月曜に1週間分まとめて作るのが最も効率的' },
      { text: 'Typefullyで投稿をスケジュール管理', url: 'https://typefully.com', tip: 'Xに特化した投稿管理ツール。無料プランあり' },
      { text: 'note有料記事（100〜300円）を初出版', url: 'https://note.com', tip: 'Claude Codeの使い方をまとめるだけで売れる' },
      { text: 'アフィリエイト登録（もしもアフィリエイト）', url: 'https://af.moshimo.com', tip: '無料で登録。記事に商品リンクを貼ると報酬が発生' },
    ],
    milestone: '初めての収益（100円でも）を確認！',
  },
  {
    phase: 3,
    period: '2ヶ月目',
    title: '収益化の仕組みを作る',
    emoji: '💰',
    color: '#10b981',
    goal: '月1〜3万円の安定収益',
    income: '1〜3万円',
    tasks: [
      { text: 'ランサーズに登録してAI代行サービスを出品', url: 'https://www.lancers.jp', tip: 'Claude Codeを使った記事作成代行。1件3,000〜1万円' },
      { text: 'ココナラでも同様のサービスを出品', url: 'https://coconala.com', tip: 'ランサーズより主婦・副業層が多い' },
      { text: 'note有料マガジン（月額500円）を開始', url: 'https://note.com', tip: '毎月定額で購読してもらうモデル。100人で月5万円' },
      { text: 'n8nで自動化フローを構築', url: 'https://n8n.io', tip: 'Claude APIと連携して完全自動投稿を実現' },
      { text: 'YouTube台本作成代行もメニューに追加', url: 'https://www.lancers.jp', tip: '1本5,000〜2万円。Claudeで台本を数分で作れる' },
    ],
    milestone: '月1万円の安定収益を達成！',
  },
  {
    phase: 4,
    period: '3ヶ月目以降',
    title: 'スケールアップ',
    emoji: '🚀',
    color: '#f59e0b',
    goal: '月5〜30万円へ拡大',
    income: '5〜30万円+',
    tasks: [
      { text: 'クラウドワークスでシステム開発案件に挑戦', url: 'https://crowdworks.jp', tip: 'Claude Codeで作ったツールを販売。1件10〜50万円' },
      { text: 'YouTubeチャンネルを開設（Claude Codeの使い方を解説）', url: 'https://youtube.com', tip: '1年後にAdSense収益。先行者メリットが大きい' },
      { text: 'Udemyでオンライン講座を出品', url: 'https://www.udemy.com', tip: 'Claude Code入門講座。1本3,000〜5,000円で売れる' },
      { text: 'メルマガ・LINEリストを構築', url: 'https://www.lycbiz.com/jp/', tip: '独自リストが一番安定した収益源になる' },
      { text: 'Upworkで海外案件に挑戦（英語不要・翻訳はClaudeに任せる）', url: 'https://www.upwork.com', tip: '海外単価は日本の3〜5倍！英語はClaudeが訳してくれる' },
    ],
    milestone: '月10万円突破 → 副業から本業へ！',
  },
]

// ── SNS各プラットフォーム詳細 ─────────────────────────
export const SNS_PLATFORMS: SnsPlatform[] = [
  {
    id: 'x',
    name: 'X (Twitter)',
    emoji: '🐦',
    color: '#1d9bf0',
    bgColor: '#1d9bf010',
    tagline: '最速でフォロワーを増やして収益化',
    earningMin: 1,
    earningMax: 50,
    difficulty: 2,
    timeToFirstIncome: '1〜2ヶ月',
    description: 'フォロワーが1,000人を超えると広告収益・アフィリエイト・案件で稼げる。Claude Codeで毎日の投稿を完全自動化できる。',
    requiredTools: [
      { name: 'X (Twitter)', url: 'https://twitter.com', free: true, desc: '投稿プラットフォーム本体' },
      { name: 'Typefully', url: 'https://typefully.com', free: true, desc: 'X特化の予約投稿・分析ツール' },
      { name: 'Buffer', url: 'https://buffer.com', free: true, desc: '複数SNS一括予約投稿' },
      { name: 'X Analytics', url: 'https://analytics.twitter.com', free: true, desc: '投稿のインプレッション分析' },
      { name: 'Claude.ai', url: 'https://claude.ai', free: true, desc: '投稿文の自動生成' },
      { name: 'n8n', url: 'https://n8n.io', free: true, desc: '完全自動投稿フロー構築' },
    ],
    steps: [
      {
        title: 'Xアカウントを作成・プロフィールを整える',
        detail: 'claude.aiで「副業AI活用のX自己紹介文を書いて」と頼む。プロフィール写真はAIで生成。',
        url: 'https://twitter.com',
        prompt: '「副業でAIを活用している人向けのXプロフィール文（160文字以内）を3パターン作って」',
        tip: 'プロフィールが整っているとフォロー率が3倍になる',
      },
      {
        title: 'Claudeで1週間分の投稿を一括生成',
        detail: 'Claude Codeを起動して下記のプロンプトを入力。月曜日に1週間分をまとめて作るのが最も効率的。',
        prompt: '「Claude Codeの活用法について、X(Twitter)に投稿する140字以内のツイートを7本作って。バズるように具体的な数字・体験・共感を入れて。」',
        tip: '毎日夜7〜9時の投稿がエンゲージメントが高い',
      },
      {
        title: 'Typefullyで予約投稿を設定',
        detail: '生成した投稿をTypefullyに貼り付け、1日1投稿のスケジュールを設定する。',
        url: 'https://typefully.com',
        tip: '無料プランで7投稿まで予約できる',
      },
      {
        title: 'フォロワー1,000人でX広告収益をONにする',
        detail: 'X Premium（Xの有料プラン）に加入すると、インプレッション数に応じて広告収益が発生する。',
        url: 'https://twitter.com/i/premium_sign_up',
        tip: 'フォロワー500人・インプレッション月500万で収益化可能',
      },
    ],
    realEarningMethods: [
      { method: 'X広告収益', amount: '月1〜10万円', how: 'フォロワー1,000人+・毎日投稿でインプレッション収益' },
      { method: 'アフィリエイト', amount: '月1〜20万円', how: 'もしもアフィリ・A8.netのリンクを投稿に貼る' },
      { method: '案件・PR投稿', amount: '1投稿1〜10万円', how: 'フォロワー3,000人で企業から依頼が来る' },
      { method: '自サービス告知', amount: '月3〜50万円', how: 'note・ランサーズのサービスを宣伝する場所として活用' },
    ],
    mockPost: {
      type: 'tweet',
      content: '【Claude Codeで時給1万円を実現した方法】\n\n先月、Claude Codeを使い始めてから\n・記事執筆：15分/本（以前は3時間）\n・SNS投稿：5分/週分（以前は毎日30分）\n\n空いた時間でランサーズの案件を取り、\n月8万円の副収入を達成しました。\n\n具体的な方法はこちら👇\n note.com/...',
      stats: '👁 12,400インプレッション  ❤️ 234いいね  🔁 89リポスト',
    },
  },
  {
    id: 'note',
    name: 'note.com',
    emoji: '📝',
    color: '#41c9b4',
    bgColor: '#41c9b410',
    tagline: 'AI記事で安定的なサブスク収益',
    earningMin: 1,
    earningMax: 30,
    difficulty: 2,
    timeToFirstIncome: '2週間〜1ヶ月',
    description: 'AIで書いた記事を有料販売。月額マガジン（サブスク）で安定収益が作れる。文章力ゼロでOK。',
    requiredTools: [
      { name: 'note.com', url: 'https://note.com', free: true, desc: '記事の投稿・販売プラットフォーム' },
      { name: 'Claude.ai', url: 'https://claude.ai', free: true, desc: '記事本文の自動生成' },
      { name: 'Canva', url: 'https://www.canva.com', free: true, desc: '記事のアイキャッチ画像を無料で作成' },
      { name: 'Notion', url: 'https://www.notion.so', free: true, desc: '記事のアイデア・ストック管理' },
    ],
    steps: [
      {
        title: 'note.comに無料登録',
        detail: '30秒で登録できる。メールアドレスかGoogleアカウントで登録。',
        url: 'https://note.com/signup',
      },
      {
        title: 'Claudeで記事を生成する',
        detail: '下のプロンプトをコピーしてClaude.aiに貼り付けるだけ。5分で3,000字の記事が完成する。',
        prompt: '「副業初心者向けに「Claude Codeで月3万円稼ぐ方法」というnote記事を3,000文字で書いて。\n・見出しはH2（##）とH3（###）で整理\n・体験談風の書き出し\n・具体的なステップを5つ\n・読者がすぐ実践できる内容\n・最後にCTA（次のアクション）を入れる」',
        tip: '「もっと具体的に」「図解を追加して」と追加指示するとさらに良くなる',
      },
      {
        title: '記事をnoteに投稿（まず無料で公開）',
        detail: '最初の3本は無料公開して「スキ（いいね）」の反応を見る。反応が良かった記事を有料化する。',
        url: 'https://note.com',
        tip: '無料記事→有料記事の導線を作ることで販売率が上がる',
      },
      {
        title: '有料記事（300〜500円）を出版',
        detail: '「スキ」が30以上ついた記事を有料版に。同内容の詳細版として「応用編」を有料で出す方法も効果的。',
        url: 'https://note.com',
        tip: '100〜500円が一番売れやすい。高くても1,000円まで',
      },
      {
        title: '月額マガジン（500円/月）を開始',
        detail: '有料読者が10人集まったらマガジンに切り替える。毎月4本の記事でOK。Claudeで量産できる。',
        url: 'https://note.com',
        tip: '100人購読で月5万円の安定収益！解約率は意外と低い',
      },
    ],
    realEarningMethods: [
      { method: '単品有料記事', amount: '1本100〜3,000円', how: '100〜500円帯が最も売れる。月20本で月2〜10万円' },
      { method: '月額マガジン', amount: '月500〜1,000円×読者数', how: '50人で月2.5万円、100人で月5万円の安定収益' },
      { method: '記事作成代行', amount: '1本3,000〜3万円', how: 'ランサーズ・ココナラでnote記事を代わりに作るサービスを売る' },
    ],
    mockPost: {
      type: 'note',
      content: '【Claude Codeで月5万円稼いだ全手順】\n\nAI初心者の私が3ヶ月で達成した方法を全て公開します。\n\n▼ この記事でわかること\n✅ Claude Codeの基本的な使い方\n✅ note記事を15分で作るプロンプト\n✅ フォロワー0から100人の増やし方\n\n※ 300円で公開中（期間限定）',
      stats: '❤️ 142スキ  💬 23コメント  📖 1,243PV',
    },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    emoji: '🎬',
    color: '#ff0000',
    bgColor: '#ff000010',
    tagline: '台本自動生成で動画量産・広告収益',
    earningMin: 0,
    earningMax: 100,
    difficulty: 3,
    timeToFirstIncome: '3ヶ月〜1年',
    description: '顔出し不要のAI解説動画・スライド動画でチャンネルを作る。Claude Codeが台本・タイトル・説明文を全て作ってくれる。',
    requiredTools: [
      { name: 'YouTube Studio', url: 'https://studio.youtube.com', free: true, desc: '動画のアップロード・分析' },
      { name: 'Descript', url: 'https://www.descript.com', free: true, desc: 'AI音声で動画を作れる（テキスト入力→動画）' },
      { name: 'Canva', url: 'https://www.canva.com', free: true, desc: 'サムネイル・スライド作成' },
      { name: 'TubeBuddy', url: 'https://www.tubebuddy.com', free: true, desc: 'SEOキーワード分析・タイトル最適化' },
      { name: 'NotebookLM', url: 'https://notebooklm.google.com', free: true, desc: 'Googleの無料AIでリサーチ補助' },
    ],
    steps: [
      {
        title: 'チャンネルテーマを決める（Claudeに相談）',
        detail: 'まずClaude.aiに「稼げるYouTubeチャンネルのジャンルを教えて。競合が少なくてAI系が役立つもの」と相談。',
        prompt: '「2024〜2025年に伸びそうなYouTubeチャンネルテーマを10個教えて。AI・副業・生産性向上ジャンルで、競合が少なくて顔出し不要なもの。月3本投稿で半年後に1,000人登録できそうなもの。」',
        tip: 'おすすめ：Claude Code解説・副業ノウハウ・ツール紹介',
      },
      {
        title: 'Claudeで動画台本を生成',
        detail: '10〜15分の動画台本をClaude Codeが作ってくれる。そのまま読むだけで収録完了。',
        prompt: '「「Claude Codeで月3万円稼ぐ方法【初心者向け】」というYouTube動画の台本を作って。\n・10〜12分の尺\n・冒頭30秒で視聴維持率を上げるフック\n・チャプター構成付き\n・視聴者へのCTA（チャンネル登録・いいね）も含める\n・読むだけで収録できる形式で」',
      },
      {
        title: 'Descriptで顔出し不要の動画を作成',
        detail: 'Descriptにテキストを貼ると、AIボイスで読み上げてくれる。スライドと組み合わせて動画完成。',
        url: 'https://www.descript.com',
        tip: '無料プランで月3本まで。1本5,000円の動画作成費を0円にできる',
      },
    ],
    realEarningMethods: [
      { method: 'YouTube広告収益', amount: '月1〜100万円', how: '登録者1,000人+4,000時間視聴で収益化。チャンネルが育てば青天井' },
      { method: 'スーパーサンクス', amount: '月1,000〜5万円', how: 'ファンからの投げ銭。有益コンテンツで定着' },
      { method: 'ブランドスポンサー', amount: '1動画3〜50万円', how: '登録者5,000人超でスポンサーが付き始める' },
    ],
    mockPost: { type: 'youtube', content: 'Claude Codeで副業月5万円達成した全手順【初心者でも再現できます】\n\n概要欄：\n▼ この動画の内容\n00:00 はじめに\n01:30 Claude Codeとは\n03:00 実際の稼ぎ方5選\n08:00 月5万円のロードマップ\n\n▼ 関連リンク\n・Claude Code: https://claude.ai\n・n8n（自動化）: https://n8n.io', stats: '👁 12,400再生  👍 456  💬 89コメント' },
  },
  {
    id: 'freelance',
    name: 'フリーランス',
    emoji: '💼',
    color: '#f59e0b',
    bgColor: '#f59e0b10',
    tagline: 'Claude Codeスキルを売って即収益',
    earningMin: 3,
    earningMax: 100,
    difficulty: 2,
    timeToFirstIncome: '1週間〜1ヶ月',
    description: 'クラウドソーシングでClaude Codeを使ったサービスを売る。記事作成・SNS運用代行・簡単なプログラム開発。初心者でも1週間で初収益が出る最短ルート。',
    requiredTools: [
      { name: 'ランサーズ', url: 'https://www.lancers.jp', free: true, desc: '日本最大級のフリーランスマッチング' },
      { name: 'ココナラ', url: 'https://coconala.com', free: true, desc: 'スキル販売に特化。個人向けが多い' },
      { name: 'クラウドワークス', url: 'https://crowdworks.jp', free: true, desc: 'システム開発・ライティング案件が豊富' },
      { name: 'Fiverr（海外）', url: 'https://www.fiverr.com', free: true, desc: '英語案件。単価が日本の3〜5倍' },
      { name: 'Upwork（海外）', url: 'https://www.upwork.com', free: true, desc: '海外の高単価案件。英語はClaudeに翻訳させる' },
    ],
    steps: [
      {
        title: 'ランサーズ・ココナラに登録',
        detail: '無料で登録できる。プロフィール文はClaudeに「AI・Claude Codeを使ったライターのプロフィール文を書いて」と頼む。',
        url: 'https://www.lancers.jp',
      },
      {
        title: 'サービスを出品する（おすすめ3種）',
        detail: '①AI記事作成（1本2,000〜5,000円）②SNS投稿文作成（5本3,000円）③簡単なスクレイピング・自動化（1件1〜5万円）',
        tip: '最初は相場の半額で出品してレビューを5件集めると急に売れるようになる',
      },
      {
        title: '実際の作業はClaude Codeに依頼',
        detail: 'クライアントの依頼内容をそのままClaude Codeに渡すだけ。あなたはプロンプトを書いて、確認して、納品するだけ。',
        prompt: '「以下の内容でnote記事を5,000文字で書いて：[クライアントの依頼内容をペースト]」',
      },
    ],
    realEarningMethods: [
      { method: 'AI記事作成代行', amount: '1本2,000〜3万円', how: 'Claudeで15分で作って、5〜30分のチェックで納品' },
      { method: 'SNS投稿文作成', amount: '週10本で5,000〜2万円', how: 'X・Instagram・note向けの投稿文を量産して販売' },
      { method: '自動化スクリプト作成', amount: '1件3〜20万円', how: 'Claude Codeが作ったPythonスクリプトを販売' },
      { method: 'YouTube台本作成', amount: '1本5,000〜3万円', how: '動画制作者向けに台本だけを販売する高単価サービス' },
    ],
    mockPost: { type: 'service', content: '【AI活用】note・ブログ記事を高品質に作成します\n\n✅ 2,000〜10,000字に対応\n✅ SEO対策・構成からお任せください\n✅ 最短24時間で納品\n✅ 修正2回まで無料\n\n■ 料金\n・2,000字：3,000円\n・5,000字：6,000円\n・10,000字：10,000円', stats: '⭐ 4.9（評価98件）  📦 累計販売数：312件' },
  },
  {
    id: 'line',
    name: 'LINE配信',
    emoji: '💬',
    color: '#06c755',
    bgColor: '#06c75510',
    tagline: 'LINE公式アカウントで安定顧客リスト',
    earningMin: 2,
    earningMax: 30,
    difficulty: 3,
    timeToFirstIncome: '2〜3ヶ月',
    description: 'LINE公式アカウントで読者リストを構築。メルマガより開封率が高く（70〜80%）、商品・サービスを告知すれば確実に売れる。配信文はClaudeが作る。',
    requiredTools: [
      { name: 'LINE Official Account Manager', url: 'https://www.lycbiz.com/jp/service/line-official-account/', free: true, desc: '月1,000通まで無料。LINE公式アカウント管理' },
      { name: 'LINE Messaging API', url: 'https://developers.line.biz/ja/', free: true, desc: '自動応答・一斉配信のAPI。Claude Codeと連携可能' },
      { name: 'ManyChat（LINE連携）', url: 'https://manychat.com', free: true, desc: 'LINEの自動応答チャットボット' },
    ],
    steps: [
      {
        title: 'LINE公式アカウントを開設',
        detail: '個人でも無料で作れる。毎月1,000通まで無料配信できる。',
        url: 'https://www.lycbiz.com/jp/service/line-official-account/',
      },
      {
        title: '登録者を集める（X・noteと連携）',
        detail: 'X・noteで「LINE登録で●●プレゼント」と案内する。無料PDFや特典をClaudeで作って配布。',
        tip: '登録特典は「Claude Codeプロンプト集10選」などがおすすめ。Claudeで30分で作れる',
      },
      {
        title: 'Claudeで配信文を自動生成',
        detail: '週1回の配信文をClaudeで作成。テーマを渡すだけで300〜400字の配信文が完成。',
        prompt: '「LINE公式アカウントで送る配信文を作って。\nテーマ：Claude Codeで時間を節約する方法\n制約：300字・絵文字3〜5個・読者の悩みから始める・末尾にCTA」',
      },
    ],
    realEarningMethods: [
      { method: '自社商品・サービス販売', amount: '月1〜30万円', how: 'note・コンサル・ツール販売の告知で即売上' },
      { method: 'アフィリエイト', amount: '月5,000〜5万円', how: 'LINE読者に商品紹介。開封率が高いので購買率も高い' },
    ],
    mockPost: { type: 'line', content: 'こんにちは！\n\n今日は「Claude Codeで10分節約する裏技」をお伝えします💡\n\n実は多くの人が知らないんですが、Claude Codeに「毎日やること」を登録しておくと...\n\n▶ 続きはこちら\nhttps://note.com/...', stats: '📊 開封率：74%  👆 クリック率：18%' },
  },
]

// ── おすすめリソース（URL付き）────────────────────────
export const USEFUL_URLS = [
  {
    category: 'Claude Code 公式',
    links: [
      { name: 'Claude Code 公式サイト', url: 'https://claude.ai/code', desc: 'Anthropic公式のClaude Code情報' },
      { name: 'Claude API コンソール', url: 'https://console.anthropic.com', desc: 'APIキーの取得・使用量確認' },
      { name: 'Anthropic Academy', url: 'https://anthropic.skilljar.com', desc: '公式の無料学習コース' },
      { name: 'Claude Code ドキュメント', url: 'https://docs.anthropic.com/ja/docs/claude-code/overview', desc: '公式ドキュメント（日本語あり）' },
    ],
  },
  {
    category: '自動化ツール',
    links: [
      { name: 'n8n（エヌエイトエヌ）', url: 'https://n8n.io', desc: '無料で使えるワークフロー自動化ツール。Claude APIと連携可' },
      { name: 'Zapier', url: 'https://zapier.com', desc: '世界最大の自動化ツール。5,000+のサービスと連携' },
      { name: 'Make（旧Integromat）', url: 'https://www.make.com', desc: '視覚的なフローで自動化。無料プランあり' },
    ],
  },
  {
    category: '収益化プラットフォーム',
    links: [
      { name: 'note.com', url: 'https://note.com', desc: '記事・マガジンの有料販売' },
      { name: 'Zenn', url: 'https://zenn.dev', desc: '技術記事・本の販売（エンジニア向け）' },
      { name: 'ランサーズ', url: 'https://www.lancers.jp', desc: '日本最大のフリーランスマッチング' },
      { name: 'ココナラ', url: 'https://coconala.com', desc: 'スキル販売・個人向けサービス' },
      { name: 'Udemy', url: 'https://www.udemy.com', desc: 'オンライン講座の販売' },
    ],
  },
]
