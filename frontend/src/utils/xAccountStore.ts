export interface XAccountStyle {
  url: string
  posts: string
  savedAt: string
}

const KEY = 'namaiki_x_account_style'

const DEFAULT_X_ACCOUNT: XAccountStyle = {
  url: 'https://x.com/madao_gekokujoo',
  posts: 'アカウントキャラクター:\n・借金1500万の底辺→AI×Xに全賭け・月収80万への逆転ドキュメント\n・リアルな失敗・成功を包み隠さず発信するスタイル\n・2025年12月開始・1127ポスト・374フォロワー',
  savedAt: '',
}

export function loadXAccountStyle(): XAccountStyle | null {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) || 'null')
    return stored ?? DEFAULT_X_ACCOUNT
  }
  catch { return DEFAULT_X_ACCOUNT }
}

export function saveXAccountStyle(data: XAccountStyle): void {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function buildStyleContext(style: XAccountStyle | null): string {
  if (!style?.posts.trim()) return ''
  return `【文体スタイル完全模倣命令 — 最優先ルール】
以下の過去ポスト群から語尾・絵文字・改行・テンション・文体パターンを分析し、「同じ人が書いた」と判断されるポストを生成せよ。

URL: ${style.url || '未登録'}
===過去のポスト===
${style.posts.trim()}
=================

スタイル模倣チェックリスト（全て守ること）:
- 絵文字の種類・数・位置を合わせる（文末に✨ならそのまま使用、使わないなら使わない）
- 語尾のパターンを踏襲する（「〜です」「〜した！」「〜です👇」など）
- 改行のリズムを合わせる（短文改行が多いならそのパターンで）
- テンションレベルを合わせる（ポジティブ・落ち着き・熱量など）
- 一人称・呼びかけを合わせる（「僕」「私」「あなた」など）
- 文章の長さ感（短文連続 vs 長文）を合わせる
※上記スタイルルールはJSON内の"post"フィールドに全て適用すること`
}
