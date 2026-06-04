import { useState } from 'react'
import { Copy, Sparkles, Loader2, BookOpen, MessageSquare, Star } from 'lucide-react'
import { callClaude } from '../../utils/claudeApi'
import { loadKnowledge, knowledgeToPrompt } from '../../utils/knowledgeStore'
import { buildInstructorSystemPrompt } from '../../utils/instructorStore'

const GENRES = [
  'AI・自動化', '副業・在宅ワーク', 'フリーランス', 'Webデザイン',
  'プログラミング', 'ブログ・ライティング', '動画編集・YouTube',
  'SNSマーケティング', '物販・せどり', 'ドロップシッピング',
  'アフィリエイト', 'コンテンツ販売', 'コーチング・コンサル',
  '占い・スピリチュアル', '投資・資産運用', '仮想通貨・NFT',
  '不動産投資', '節約・家計管理', '転職・キャリア', '起業・ビジネス',
  '英語・語学', 'ダイエット・筋トレ', 'メンタルヘルス', '料理・レシピ',
  '美容・スキンケア', 'ファッション', '恋愛・婚活', '子育て・育児',
  'ペット', '旅行', 'ゲーム', 'アニメ・漫画', '写真・カメラ',
  'インスタ運用', 'TikTok運用', 'その他（自由入力）',
]

const GOALS = [
  'フォロワー1000人達成',
  'フォロワー1万人達成',
  'フォロワー10万人達成',
  'インフルエンサーになる',
  '副業収入 月5万円',
  '副業収入 月10万円',
  '副業収入 月30万円',
  '副業収入 月100万円',
  'フリーランス独立',
  '会社員を辞める',
  '商品・サービス販売',
  'コンテンツ販売（note・教材）',
  'オンラインサロン運営',
  'コーチング・コンサル集客',
  'セミナー・イベント集客',
  'LINE公式アカウントへ誘導',
  'メルマガ読者獲得',
  'アフィリエイト収益化',
  'ブログへのアクセス流入',
  'YouTubeチャンネル登録者増加',
  'TikTokフォロワー増加',
  'ポッドキャスト聴取者増加',
  'ブランディング・認知拡大',
  '業界での権威性確立',
  '企業案件・PR獲得',
  '採用・人材獲得',
  '投資家・パートナー探し',
  '出版・メディア露出',
  '就職・転職活動',
  'コミュニティ形成',
  'その他（自由入力）',
]

const TARGETS = [
  '副業を始めたい会社員',
  '副業で月5万を目指している人',
  '副業で月30万を目指している人',
  'フリーランスを目指している人',
  '在宅ワークをしたい主婦・主夫',
  '20代の社会人',
  '30代の会社員',
  '40〜50代の会社員',
  '大学生・学生',
  '専業主婦・主夫',
  'シングルマザー・シングルファザー',
  '定年後の60代',
  'AIツールに興味がある人',
  'プログラミング未経験者',
  'ブログ初心者',
  'SNS初心者',
  '物販初心者',
  '投資初心者',
  '英語学習者',
  'ダイエット中の人',
  '転職を考えている人',
  '起業を考えているサラリーマン',
  '収入を増やしたい人',
  '時間の自由がほしい人',
  'スキルアップしたい社会人',
  '地方在住で仕事に悩む人',
  '育児中で働き方を変えたい人',
  'X（Twitter）を伸ばしたい人',
  'その他（自由入力）',
]

interface ScoreItem { name: string; score: number; comment: string }

interface Output {
  profile: string
  fixedPost: string
  target: string
  materialItems: ScoreItem[]
  discordItems: ScoreItem[]
  instructorFeedback: string
}

function Stars({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={13} fill={i <= score ? '#f59e0b' : 'none'} className={i <= score ? 'text-yellow-400' : 'text-gray-600'} />
      ))}
    </div>
  )
}

function ScoreRow({ index, item, color }: { index: number; item: ScoreItem; color: string }) {
  return (
    <div className="flex items-start gap-3 py-2 border-b border-gray-800 last:border-0">
      <span className={`text-xs font-bold w-5 shrink-0 mt-0.5 ${color}`}>#{index + 1}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-white text-xs font-medium">{item.name}</span>
          <Stars score={item.score} />
        </div>
        <p className="text-gray-400 text-xs">{item.comment}</p>
      </div>
    </div>
  )
}

function SelectOrInput({
  label, options, value, onChange, placeholder, required,
}: {
  label: string; options: string[]; value: string; onChange: (v: string) => void; placeholder: string; required?: boolean
}) {
  const isOther = value === 'その他（自由入力）' || (value !== '' && !options.slice(0, -1).includes(value))
  const [selectVal, setSelectVal] = useState(options.includes(value) ? value : value ? 'その他（自由入力）' : '')
  const [freeText, setFreeText] = useState(options.includes(value) ? '' : value)

  const handleSelect = (v: string) => {
    setSelectVal(v)
    if (v !== 'その他（自由入力）') { onChange(v); setFreeText('') }
    else onChange(freeText)
  }
  const handleFree = (v: string) => { setFreeText(v); onChange(v) }

  return (
    <div>
      <label className="text-xs text-gray-400 mb-1 block">{label}{required && ' *'}</label>
      <select value={selectVal} onChange={e => handleSelect(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-500">
        <option value="">選択してください</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {(selectVal === 'その他（自由入力）' || isOther) && (
        <input value={freeText} onChange={e => handleFree(e.target.value)} placeholder={placeholder} className="w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500" />
      )}
    </div>
  )
}

export function ProfileGenerator() {
  const [genre, setGenre] = useState('')
  const [target, setTarget] = useState('')
  const [strengths, setStrengths] = useState('')
  const [goal, setGoal] = useState('フォロワー1000人達成')
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState<Output | null>(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<'profile' | 'post' | null>(null)

  const handleGenerate = async () => {
    if (!genre || !target || !strengths) return
    setLoading(true); setError(''); setOutput(null)
    try {
      const knowledge = knowledgeToPrompt(loadKnowledge())
      const instructorCtx = buildInstructorSystemPrompt()

      const system = `あなたはXマーケティングの専門家かつなまいきスクールの講師として動作します。
初心者のXアカウントのプロフィールと固定ポストを生成し、教材・Discordの両面から分析・添削してください。

【なまいきスクール教材ナレッジ】
${knowledge}

【Discord講師メッセージ】
${instructorCtx}

コンセプト設計（WHO・WHAT・HOW）を最重要視。必ず以下のJSON形式のみで返してください:
{
  "profile":"プロフ文",
  "fixedPost":"固定ポスト文",
  "target":"刺さるターゲット層（具体的に）",
  "materialItems":[
    {"name":"コンセプト明確度","score":1-5,"comment":"教材視点の一言"},
    {"name":"ターゲット絞り込み","score":1-5,"comment":"教材視点の一言"},
    {"name":"初見の理解しやすさ","score":1-5,"comment":"教材視点の一言"},
    {"name":"ベネフィットの明確さ","score":1-5,"comment":"教材視点の一言"},
    {"name":"差別化ポイント","score":1-5,"comment":"教材視点の一言"}
  ],
  "discordItems":[
    {"name":"フォロー動機","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"権威性・信頼性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"アルゴリズム適性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"固定ポストとの一貫性","score":1-5,"comment":"Discord講師視点の一言"},
    {"name":"長期成長性","score":1-5,"comment":"Discord講師視点の一言"}
  ],
  "instructorFeedback":"講師として具体的なアドバイスを自然な日本語の文章で120字程度で"
}`

      const userMsg = `発信ジャンル: ${genre}\nターゲット層: ${target}\n実績・強み: ${strengths}\n目標: ${goal}`
      const raw = await callClaude({ system, userMessage: userMsg, maxTokens: 2000 })
      const match = raw.match(/\{[\s\S]*"profile"[\s\S]*\}/)
      if (!match) throw new Error('出力のパースに失敗しました。再度お試しください。')
      setOutput(JSON.parse(match[0]) as Output)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const copy = (type: 'profile' | 'post', text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5">
        <BookOpen size={14} className="text-blue-400 shrink-0" />
        <p className="text-blue-300 text-xs">なまいきスクール教材 ＋ Discord講師メッセージ712件を基に生成・分析します</p>
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SelectOrInput
            label="発信ジャンル" options={GENRES} value={genre} onChange={setGenre}
            placeholder="例：NFT・ゲーム実況など" required
          />
          <SelectOrInput
            label="ターゲット層" options={TARGETS} value={target} onChange={setTarget}
            placeholder="例：40代の独身男性など" required
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 mb-1 block">自分の実績・強み *</label>
          <textarea value={strengths} onChange={e => setStrengths(e.target.value)} placeholder="例：月5万円の副業収入達成、AI活用歴3年、元会社員" rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500 resize-none" />
        </div>
        <SelectOrInput
          label="目標" options={GOALS} value={goal} onChange={setGoal}
          placeholder="例：セミナー集客、出版など"
        />
        <button onClick={handleGenerate} disabled={loading || !genre || !target || !strengths} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 disabled:opacity-40 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? '生成・分析中...' : '生成＋教材分析する'}
        </button>
        {error && <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-2">{error}</p>}
      </div>

      {output && (
        <div className="space-y-4">
          {/* ターゲット */}
          <div className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-4">
            <p className="text-purple-300 text-xs font-bold mb-1">🎯 刺さるターゲット層</p>
            <p className="text-white text-sm">{output.target}</p>
          </div>

          {/* 教材ベース分析 */}
          <div className="rounded-2xl bg-gray-900 border border-sky-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={14} className="text-sky-400" />
              <h4 className="text-white font-bold text-sm">教材ベース分析</h4>
              <span className="text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full">なまいきスクール教材</span>
            </div>
            {(output.materialItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i} item={item} color="text-sky-400" />
            ))}
          </div>

          {/* Discord講師分析 */}
          <div className="rounded-2xl bg-gray-900 border border-green-500/30 p-5">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={14} className="text-green-400" />
              <h4 className="text-white font-bold text-sm">Discord講師分析</h4>
              <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">Discord 712件</span>
            </div>
            {(output.discordItems ?? []).map((item, i) => (
              <ScoreRow key={i} index={i + 5} item={item} color="text-green-400" />
            ))}
          </div>

          {/* 講師添削 */}
          <div className="rounded-2xl bg-gray-900 border border-yellow-500/30 p-5">
            <h4 className="text-white font-bold text-sm mb-3">🎓 講師添削</h4>
            <p className="text-yellow-100 text-sm leading-relaxed">{output.instructorFeedback}</p>
          </div>

          {/* 生成されたプロフ・固定ポスト */}
          {([['profile', 'プロフィール文', output.profile], ['post', '固定ポスト文', output.fixedPost]] as const).map(([type, label, text]) => (
            <div key={type} className="rounded-2xl bg-gray-900 border border-gray-700 p-5">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-bold text-sm">📝 {label}</h4>
                <button onClick={() => copy(type, text)} className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-700 rounded-lg px-3 py-1.5 transition-colors">
                  <Copy size={12} />{copied === type ? '✓ コピー済み' : 'コピー'}
                </button>
              </div>
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">{text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
