// 初心者向け用語集 — 小学生でもわかる説明

export interface GlossaryTerm {
  term: string
  reading: string   // ひらがな読み仮名
  simple: string    // 小学生向け説明
  detail?: string   // もう少し詳しい説明（オプション）
  emoji: string
  category: 'basic' | 'claudecode' | 'skill' | 'file' | 'command'
}

export const GLOSSARY: GlossaryTerm[] = [
  // ── 基本用語 ──────────────────────────────
  {
    term: 'ターミナル',
    reading: 'たーみなる',
    simple: 'コンピューターに文字で命令を打ち込む「黒い画面」のこと。キーボードで命令を入力する。',
    detail: 'WindowsではPowerShell、MacではTerminalというアプリがこれにあたる。',
    emoji: '🖥️',
    category: 'basic',
  },
  {
    term: 'コマンド',
    reading: 'こまんど',
    simple: 'コンピューターへの「命令文」。ターミナルに文字を入力して実行する。',
    detail: '例えば「npm run dev」と入力してEnterを押すと、プログラムが起動する。',
    emoji: '⌨️',
    category: 'basic',
  },
  {
    term: 'インストール',
    reading: 'いんすとーる',
    simple: '新しいソフトをコンピューターに入れること。スマホのアプリをダウンロードするのと同じ感覚。',
    emoji: '📦',
    category: 'basic',
  },
  {
    term: 'AIアシスタント',
    reading: 'えーあいあしすたんと',
    simple: '人工知能（AI）が質問に答えたり、作業を手伝ってくれる仕組み。ChatGPTと同じような感じ。',
    emoji: '🤖',
    category: 'basic',
  },
  {
    term: 'APIキー',
    reading: 'えーぴーあいきー',
    simple: 'AIサービスを使うための「合言葉（パスワード）」。他の人に教えてはいけない秘密の文字列。',
    detail: 'クレジットカードの番号のように大切に管理する必要がある。',
    emoji: '🔑',
    category: 'basic',
  },
  {
    term: 'npm',
    reading: 'えぬぴーえむ',
    simple: 'JavaScriptのプログラムを管理するツール。「便利な道具箱」を追加したり削除したりできる。',
    detail: 'Node Package Managerの略。ターミナルで「npm install パッケージ名」と入力して使う。',
    emoji: '📮',
    category: 'basic',
  },
  {
    term: 'Node.js',
    reading: 'のーどじぇいえす',
    simple: 'JavaScriptをコンピューター上で動かすための仕組み。ウェブサイト以外でもJSを動かせる。',
    emoji: '💚',
    category: 'basic',
  },

  // ── Claude Code 用語 ──────────────────────
  {
    term: 'Claude Code',
    reading: 'くろーどこーど',
    simple: 'AnthropicというAI会社が作った、プログラミングを手伝ってくれるAI。ターミナルの中で動く。',
    detail: 'チャットしながらコードを書いてもらったり、ファイルを操作してもらえる。',
    emoji: '⚡',
    category: 'claudecode',
  },
  {
    term: 'CLAUDE.md',
    reading: 'くろーどえむでぃ',
    simple: 'Claudeへの「お仕事説明書」ファイル。「こんなルールで動いて」と事前に教えておける。',
    detail: 'プロジェクトのフォルダに置くと、Claudeが自動で読んで設定を覚えてくれる。',
    emoji: '📋',
    category: 'claudecode',
  },
  {
    term: 'プロンプト',
    reading: 'ぷろんぷと',
    simple: 'AIへの「お願い文章」のこと。どう書くかでAIの返答の質が大きく変わる。',
    detail: '「〜してください」だけでなく、背景・条件・出力形式を書くと精度が上がる。',
    emoji: '💬',
    category: 'claudecode',
  },
  {
    term: 'Hooks（フック）',
    reading: 'ふっく',
    simple: '「〇〇したら自動で△△する」という自動実行の仕組み。例：ファイルを保存したら自動でテストを走らせる。',
    detail: 'Claude Codeが特定の操作をした直前・直後に自動でスクリプトを実行できる。',
    emoji: '🪝',
    category: 'claudecode',
  },
  {
    term: 'エージェント',
    reading: 'えーじぇんと',
    simple: '自分で考えて自動的に作業を続けるAIのこと。人間が指示しなくても次の手順を実行する。',
    detail: '複数のタスクを連続して自動でこなすことができる高度なAI動作モード。',
    emoji: '🦾',
    category: 'claudecode',
  },
  {
    term: 'サブエージェント',
    reading: 'さぶえーじぇんと',
    simple: 'メインのAIが「別の専門家AI」に仕事を頼む仕組み。チームで分担して作業する感じ。',
    emoji: '👥',
    category: 'claudecode',
  },

  // ── SKILL 用語 ────────────────────────────
  {
    term: 'SKILL（スキル）',
    reading: 'すきる',
    simple: 'Claude Codeに追加できる「特技」。/（スラッシュ）を付けて入力すると使える特別な機能。',
    detail: '例：/simplify と入力するとコードをきれいにしてくれる、/review でコードをチェックしてくれる。',
    emoji: '⭐',
    category: 'skill',
  },
  {
    term: '/simplify',
    reading: 'すらっしゅしんぷりふぁい',
    simple: 'コードをよりシンプルで読みやすくしてくれるスキル。ごちゃごちゃしたコードを整理してくれる。',
    emoji: '✨',
    category: 'skill',
  },
  {
    term: '/review',
    reading: 'すらっしゅれびゅー',
    simple: 'コードの問題点や改善点を教えてくれるスキル。先生が宿題を添削するイメージ。',
    emoji: '🔍',
    category: 'skill',
  },
  {
    term: 'MCP（エムシーピー）',
    reading: 'えむしーぴー',
    simple: 'Claude Codeに新しい「道具」を追加する仕組み。GitHubやSlackなど外部サービスと連携できる。',
    detail: 'Model Context Protocol の略。プラグインのような感覚で機能を拡張できる。',
    emoji: '🔌',
    category: 'skill',
  },

  // ── ファイル・設定 ──────────────────────────
  {
    term: 'settings.json',
    reading: 'せっていんぐすじぇいそん',
    simple: 'Claude Codeの「設定メモ帳」ファイル。どんな動作をするか細かく設定できる。',
    emoji: '⚙️',
    category: 'file',
  },
  {
    term: 'JSON',
    reading: 'じぇいそん',
    simple: 'コンピューターが読みやすい形式の「設定メモ」。{ } や [ ] で情報を整理して書く。',
    detail: '例：{ "名前": "太郎", "年齢": 10 } という形で情報を書く。',
    emoji: '📄',
    category: 'file',
  },
  {
    term: 'GitHub（ギットハブ）',
    reading: 'ぎっとはぶ',
    simple: 'プログラムのコードを保存・管理できるウェブサービス。コードのクラウド保存場所。',
    detail: 'チームで共同作業するときにも使う。世界中のプログラマーが使っている。',
    emoji: '🐱',
    category: 'file',
  },
  {
    term: 'TypeScript',
    reading: 'たいぷすくりぷと',
    simple: 'JavaScriptをより安全に書けるようにしたプログラミング言語。間違いを事前に教えてくれる。',
    emoji: '🔷',
    category: 'basic',
  },
  {
    term: 'React',
    reading: 'りあくと',
    simple: 'ウェブサイトの画面を作るためのツール。ボタンや画面の部品を組み合わせて作る。',
    emoji: '⚛️',
    category: 'basic',
  },
]

// カテゴリ別に分ける
export const GLOSSARY_BY_CATEGORY = {
  basic: GLOSSARY.filter(g => g.category === 'basic'),
  claudecode: GLOSSARY.filter(g => g.category === 'claudecode'),
  skill: GLOSSARY.filter(g => g.category === 'skill'),
  file: GLOSSARY.filter(g => g.category === 'file'),
}
