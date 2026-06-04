import { useState, useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home, PenLine, CalendarDays, Grid3X3 } from 'lucide-react'
import { useAccounts } from '../hooks/useAccounts'
import { HomeTab } from '../components/xmarketing/HomeTab'
import { ToolsTab } from '../components/xmarketing/ToolsTab'
import { AccountSwitcher } from '../components/xmarketing/AccountSwitcher'
import { PostStudio } from '../components/xmarketing/PostStudio'
import { ScheduleManager } from '../components/xmarketing/ScheduleManager'
import { KnowledgeBase } from '../components/xmarketing/KnowledgeBase'
import { ProfileGenerator } from '../components/xmarketing/ProfileGenerator'
import { PostGenerator } from '../components/xmarketing/PostGenerator'
import { ProfileAnalyzer } from '../components/xmarketing/ProfileAnalyzer'
import { DiscordFeedback } from '../components/xmarketing/DiscordFeedback'
import { PersonaSettings } from '../components/xmarketing/PersonaSettings'
import { BulkImport } from '../components/xmarketing/BulkImport'
import { PostHistory } from '../components/xmarketing/PostHistory'
import { HookBank } from '../components/xmarketing/HookBank'
import { ImageGenerator } from '../components/xmarketing/ImageGenerator'
import { AbTest } from '../components/xmarketing/AbTest'
import { BuzzAnalyzer } from '../components/xmarketing/BuzzAnalyzer'
import { PostCalendar } from '../components/xmarketing/PostCalendar'
import { AppSettings } from '../components/xmarketing/AppSettings'
import { AccountManager } from '../components/xmarketing/AccountManager'
import { DiscordAnalyzer } from '../components/xmarketing/DiscordAnalyzer'

type NavTab = 'home' | 'studio' | 'schedule' | 'tools'
type SubTab =
  | 'persona' | 'settings' | 'accounts' | 'import'
  | 'profile-gen' | 'post-gen' | 'ab-test' | 'image-gen'
  | 'knowledge' | 'hooks' | 'feedback' | 'profile-analyze' | 'buzz'
  | 'history' | 'calendar' | 'discord-analyzer'

type AnyTab = NavTab | SubTab

const NAV_ITEMS: { id: NavTab; icon: typeof Home; label: string }[] = [
  { id: 'home', icon: Home, label: 'ホーム' },
  { id: 'studio', icon: PenLine, label: '投稿作成' },
  { id: 'schedule', icon: CalendarDays, label: '予約管理' },
  { id: 'tools', icon: Grid3X3, label: 'ツール' },
]

const NAV_SET = new Set<AnyTab>(['home', 'studio', 'schedule', 'tools'])

function isNavTab(t: AnyTab): t is NavTab {
  return NAV_SET.has(t)
}

const SUBTAB_TITLES: Partial<Record<SubTab, string>> = {
  persona: '👤 キャラクター設定',
  settings: '🔑 APIキー・設定',
  accounts: '👥 アカウント管理',
  import: '📥 教材インポート',
  'profile-gen': '🪪 プロフィール生成',
  'post-gen': '✍️ ポスト生成',
  'ab-test': '🔀 ABテスト',
  'image-gen': '🖼️ 画像生成',
  knowledge: '📚 教材を見る',
  hooks: '⚡ フック集',
  feedback: '✏️ 講師添削',
  'profile-analyze': '🔍 プロフ診断',
  buzz: '📈 バズ分析',
  history: '🗂️ 投稿履歴',
  calendar: '📅 投稿カレンダー',
  'discord-analyzer': '💬 Discord分析',
}

export function XMarketing() {
  const [navTab, setNavTab] = useState<NavTab>('home')
  const [subTab, setSubTab] = useState<SubTab | null>(null)
  const [scheduleText, setScheduleText] = useState('')
  const [refreshKey, setRefreshKey] = useState(0)

  // activeId が変わったら（どこで切り替えても）コンテンツを再マウント
  const { activeId } = useAccounts()
  const prevActiveId = useRef(activeId)
  useEffect(() => {
    if (prevActiveId.current !== activeId) {
      prevActiveId.current = activeId
      setRefreshKey(k => k + 1)
    }
  }, [activeId])

  const navigate = (tab: string) => {
    const t = tab as AnyTab
    if (isNavTab(t)) {
      setNavTab(t)
      setSubTab(null)
    } else {
      setSubTab(t as SubTab)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => setSubTab(null)

  const handleAccountSwitch = useCallback(() => {
    setRefreshKey(k => k + 1)
  }, [])

  const activeNavForStyle = subTab ? null : navTab

  const contentKey = `${refreshKey}-${subTab ?? navTab}`

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      {/* ページコンテンツ */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pt-5 pb-28">
        {/* ヘッダー */}
        <div className="flex items-center justify-between gap-3 mb-5">
          {subTab ? (
            <button onClick={handleBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <span className="text-lg">←</span>
              <span className="text-sm">{SUBTAB_TITLES[subTab] ?? subTab}</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-sky-400 font-black text-xl leading-none">𝕏</span>
              <div>
                <h1 className="text-white font-black text-base leading-tight">なまいきスクール</h1>
                <p className="text-gray-500 text-xs">AI × SNS自動化ツール</p>
              </div>
            </div>
          )}
          {/* アカウント切替 */}
          <AccountSwitcher
            onSwitch={handleAccountSwitch}
            onAddNew={() => navigate('accounts')}
          />
        </div>

        {/* コンテンツ */}
        <AnimatePresence mode="wait">
          <motion.div
            key={contentKey}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.13 }}
          >
            {/* サブタブ */}
            {subTab === 'persona'           && <PersonaSettings />}
            {subTab === 'settings'          && <AppSettings />}
            {subTab === 'accounts'          && <AccountManager />}
            {subTab === 'import'            && <BulkImport />}
            {subTab === 'profile-gen'       && <ProfileGenerator />}
            {subTab === 'post-gen'          && <PostGenerator initialTheme="" />}
            {subTab === 'ab-test'           && <AbTest onUsePost={t => { setScheduleText(t); navigate('schedule') }} />}
            {subTab === 'image-gen'         && <ImageGenerator />}
            {subTab === 'knowledge'         && <KnowledgeBase />}
            {subTab === 'hooks'             && <HookBank onUseHook={() => navigate('post-gen')} />}
            {subTab === 'feedback'          && <DiscordFeedback />}
            {subTab === 'profile-analyze'   && <ProfileAnalyzer />}
            {subTab === 'buzz'              && <BuzzAnalyzer onUseTemplate={() => navigate('post-gen')} />}
            {subTab === 'history'           && <PostHistory onUsePost={t => { setScheduleText(t); navigate('schedule') }} />}
            {subTab === 'calendar'          && <PostCalendar onNavigateToSchedule={() => navigate('schedule')} />}
            {subTab === 'discord-analyzer'  && <DiscordAnalyzer />}

            {/* メインナビ */}
            {!subTab && navTab === 'home'     && <HomeTab onNavigate={navigate} />}
            {!subTab && navTab === 'studio'   && (
              <PostStudio onSchedule={t => { setScheduleText(t); navigate('schedule') }} />
            )}
            {!subTab && navTab === 'schedule' && <ScheduleManager initialText={scheduleText} />}
            {!subTab && navTab === 'tools'    && <ToolsTab onNavigate={navigate} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ボトムナビ */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-t border-gray-800 safe-area-bottom">
        <div className="max-w-2xl mx-auto px-2 flex">
          {NAV_ITEMS.map(item => {
            const active = activeNavForStyle === item.id
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 transition-colors ${
                  active ? 'text-sky-400' : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 1.8} />
                <span className={`text-xs font-semibold ${active ? 'text-sky-400' : 'text-gray-600'}`}>
                  {item.label}
                </span>
                {active && (
                  <span className="absolute bottom-0 h-0.5 w-8 bg-sky-400 rounded-full" style={{ marginBottom: '0' }} />
                )}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
