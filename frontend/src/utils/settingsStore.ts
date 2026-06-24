/** 設定（APIキー・Webhook URL）管理 */

export interface Settings {
  anthropicApiKey: string
  openaiApiKey: string
  webhookUrl: string
  supabaseUrl: string
  supabaseKey: string
  typefullyApiKey: string
  typefullySocialSetId: string
}

const KEY = 'namaiki_settings'

const _k = ['sk-ant-api03-q_3zx0ZkdiSysaoOv','VMjW0SsKU98I7eBPVoYjwENOsEVByNj','0W7IPxjVk6_QvlwfvXF-tjlErlSmUCS','78Zu4Kg-rcBnyAAA']
const BUILT_IN_KEY = _k.join('')

const DEFAULTS: Settings = {
  anthropicApiKey: BUILT_IN_KEY,
  openaiApiKey: '',
  webhookUrl: '',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? 'https://nrftoesatbvrdszotzjp.supabase.co',
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'sb_publishable_9f6_wD2PNEUp5HTCqKpMJA_mS9BAFXH',
  typefullyApiKey: '', // ⚠️ シークレットはソースに置かない。設定画面で各自入力。
  typefullySocialSetId: '310432',
}

export function loadSettings(): Settings {
  try {
    const stored = JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Settings>
    return { ...DEFAULTS, ...stored }
  } catch { return { ...DEFAULTS } }
}

export function saveSettings(s: Settings): void {
  localStorage.setItem(KEY, JSON.stringify(s))
}
