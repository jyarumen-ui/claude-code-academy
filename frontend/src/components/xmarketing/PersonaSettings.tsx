import { useState, useEffect } from 'react'
import { Save, User } from 'lucide-react'
import { loadPersona, savePersona, type Persona } from '../../utils/personaStore'
import { useAccounts } from '../../hooks/useAccounts'

/** サブ機能⑪：ペルソナ設定保存（アカウント対応） */
export function PersonaSettings() {
  const { activeAccount } = useAccounts()
  const accId = activeAccount?.id
  const [form, setForm] = useState<Persona>(() => loadPersona(accId))

  useEffect(() => { setForm(loadPersona(accId)) }, [accId])
  const [saved, setSaved] = useState(false)

  const set = (k: keyof Persona) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSave = () => {
    savePersona(form, accId)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div>
      <label className="text-xs text-gray-400 mb-1 block">{label}</label>
      {children}
    </div>
  )

  const inputCls = 'w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-brand-500'

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-sky-500/10 border border-sky-500/30 p-4 text-sky-200 text-sm">
        💡 ここで設定したペルソナは、プロフ生成・ポスト生成・添削など<strong>全機能のAIプロンプトに自動で埋め込まれます</strong>。
      </div>

      <div className="rounded-2xl bg-gray-900 border border-gray-700 p-5 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <User size={18} className="text-brand-400" />
          <h3 className="text-white font-bold">ペルソナ設定</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="発信ジャンル *">
            <input value={form.genre} onChange={set('genre')} placeholder="例：iPhone副業、AI自動化" className={inputCls} />
          </Field>
          <Field label="メインターゲット *">
            <input value={form.target} onChange={set('target')} placeholder="例：副業初心者の会社員（30〜40代）" className={inputCls} />
          </Field>
        </div>

        <Field label="自分の実績・強み *">
          <textarea value={form.strengths} onChange={set('strengths')} placeholder="例：元ブラック企業勤務→AI活用で月5万円副業収入達成、2年でフォロワー5000人" rows={3} className={`${inputCls} resize-none`} />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="口調・トーン">
            <select value={form.tone} onChange={set('tone')} className={inputCls}>
              {['親しみやすい', '権威的・専門的', 'ストーリー型', 'カジュアル', 'フラット'].map(t => <option key={t}>{t}</option>)}
            </select>
          </Field>
          <Field label="目標">
            <select value={form.goal} onChange={set('goal')} className={inputCls}>
              {['フォロワー獲得', '商品販売', 'LINE誘導', 'ブランディング', 'コミュニティ形成'].map(g => <option key={g}>{g}</option>)}
            </select>
          </Field>
        </div>

        <button onClick={handleSave} className="flex items-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">
          <Save size={16} />
          {saved ? '✓ 保存しました！' : 'ペルソナを保存する'}
        </button>
      </div>

      {form.genre && (
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-4">
          <p className="text-xs text-gray-500 mb-2">AI生成時に埋め込まれるペルソナ情報（プレビュー）</p>
          <pre className="text-gray-400 text-xs whitespace-pre-wrap leading-relaxed">
            {`発信ジャンル: ${form.genre}\nターゲット: ${form.target}\nトーン: ${form.tone}\n強み: ${form.strengths}\n目標: ${form.goal}`}
          </pre>
        </div>
      )}
    </div>
  )
}
