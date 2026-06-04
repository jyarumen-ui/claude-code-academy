export interface Settings {
  typefullyApiKey: string
  typefullySocialSetId: string
  supabaseUrl: string
  supabaseKey: string
}

const KEY = 'toukokun_settings'

// ⚠️ シークレット（Typefully APIキー等）はソースに置かない。各自「設定」タブで入力する。
// Supabaseは anon/publishable キー（公開前提・RLSで保護）と接続URLのみデフォルト許容。
const DEFAULTS: Settings = {
  typefullyApiKey: '',
  typefullySocialSetId: '310432',
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL ?? 'https://nrftoesatbvrdszotzjp.supabase.co',
  supabaseKey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? 'sb_publishable_9f6_wD2PNEUp5HTCqKpMJA_mS9BAFXH',
}

export function loadSettings(): Settings {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) ?? '{}') as Partial<Settings> }
  } catch { return { ...DEFAULTS } }
}

export function saveSettings(s: Settings): void {
  localStorage.setItem(KEY, JSON.stringify(s))
}
