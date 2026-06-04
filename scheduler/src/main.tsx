import { StrictMode, Component, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null }
  static getDerivedStateFromError(e: Error) { return { error: e.message } }
  render() {
    if (this.state.error) return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-6">
        <div className="bg-red-900/20 border border-red-500/40 rounded-2xl p-6 max-w-sm w-full text-center space-y-3">
          <p className="text-2xl">⚠️</p>
          <p className="text-red-300 font-bold">エラーが発生しました</p>
          <p className="text-red-400/70 text-xs">{this.state.error}</p>
          <button onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-400 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors">
            再読み込み
          </button>
        </div>
      </div>
    )
    return this.props.children
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode><ErrorBoundary><App /></ErrorBoundary></StrictMode>
)
