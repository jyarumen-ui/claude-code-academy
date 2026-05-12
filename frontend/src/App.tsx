import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Sidebar } from './components/layout/Sidebar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Roadmap } from './pages/Roadmap'
import { Level } from './pages/Level'
import { Lesson } from './pages/Lesson'
import { SNSTools } from './pages/SNSTools'
import { Academy } from './pages/Academy'
import { PromptLibraryPage } from './pages/PromptLibraryPage'
import { Community } from './pages/Community'
import { BeginnerGuide } from './pages/BeginnerGuide'
import { ToolsComparison } from './pages/ToolsComparison'
import { SkillLibrary } from './pages/SkillLibrary'
import { ChatWidget } from './components/chat/ChatWidget'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-950 text-gray-100">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
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
              <Route path="*" element={
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <p className="text-5xl mb-4">🤖</p>
                  <p className="text-lg font-medium">ページが見つかりません</p>
                </div>
              } />
            </Routes>
            <Footer />
          </main>
        </div>
      </div>
      {/* 全ページ共通フローティングチャット */}
      <ChatWidget />
    </BrowserRouter>
  )
}
