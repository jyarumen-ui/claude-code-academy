import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { Footer } from './components/layout/Footer'
import { ChatWidget } from './components/chat/ChatWidget'

// ページコンポーネントを遅延読み込みしてチャンクを分割
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })))
const Roadmap = lazy(() => import('./pages/Roadmap').then(m => ({ default: m.Roadmap })))
const Level = lazy(() => import('./pages/Level').then(m => ({ default: m.Level })))
const Lesson = lazy(() => import('./pages/Lesson').then(m => ({ default: m.Lesson })))
const SNSTools = lazy(() => import('./pages/SNSTools').then(m => ({ default: m.SNSTools })))
const Academy = lazy(() => import('./pages/Academy').then(m => ({ default: m.Academy })))
const PromptLibraryPage = lazy(() => import('./pages/PromptLibraryPage').then(m => ({ default: m.PromptLibraryPage })))
const Community = lazy(() => import('./pages/Community').then(m => ({ default: m.Community })))
const BeginnerGuide = lazy(() => import('./pages/BeginnerGuide').then(m => ({ default: m.BeginnerGuide })))
const ToolsComparison = lazy(() => import('./pages/ToolsComparison').then(m => ({ default: m.ToolsComparison })))
const SkillLibrary = lazy(() => import('./pages/SkillLibrary').then(m => ({ default: m.SkillLibrary })))
const XMarketing = lazy(() => import('./pages/XMarketing').then(m => ({ default: m.XMarketing })))

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-64 text-gray-500">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/level/:id" element={<Level />} />
                <Route path="/level/:levelId/lesson/:lessonId" element={<Lesson />} />
                <Route path="/sns-tools" element={<SNSTools />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="/prompts" element={<PromptLibraryPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="/guide" element={<BeginnerGuide />} />
                <Route path="/tools" element={<ToolsComparison />} />
                <Route path="/skills" element={<SkillLibrary />} />
                <Route path="/x-marketing" element={<XMarketing />} />
                <Route path="*" element={
                  <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                    <p className="text-5xl mb-4">🤖</p>
                    <p className="text-lg font-medium">ページが見つかりません</p>
                  </div>
                } />
              </Routes>
            </Suspense>
            <Footer />
          </main>
        </div>
      </div>
      {/* 全ページ共通フローティングチャット */}
      <ChatWidget />
    </HashRouter>
  )
}
