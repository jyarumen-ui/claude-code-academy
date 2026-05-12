import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, ArrowRight, BookOpen, Smartphone, Users, Star, ChevronRight, Baby } from 'lucide-react'
import { CURRICULUM } from '../data/curriculum'
import { useProgressStore } from '../stores/progressStore'

/** ホームページ */
export function Home() {
  const { levels } = useProgressStore()

  // 直近のアンロック済みレベルを探す
  const nextLevel = CURRICULUM.find((lv) => {
    const p = levels[lv.id]
    return p?.unlocked && !p.completed
  }) ?? CURRICULUM[0]

  const features = [
    { icon: BookOpen, title: '7段階ロードマップ', desc: '完全初心者からAgent Teams上級者まで段階的に学習', color: '#0ea5e9' },
    { icon: Smartphone, title: 'SNS × 副業活用', desc: 'X・note・LINE・YouTubeとの連携で収益化を加速', color: '#10b981' },
    { icon: Zap, title: 'インタラクティブ学習', desc: 'クイズ・コードプレイグラウンド・CLAUDE.mdエディタ', color: '#8b5cf6' },
    { icon: Users, title: 'コミュニティ', desc: 'プロンプトライブラリ・厳選リソース・フォロー推奨アカウント', color: '#f59e0b' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-16">

      {/* 初心者向けバナー */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border-2 border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-5 flex flex-col sm:flex-row items-center gap-4"
      >
        <div className="text-5xl shrink-0">👶</div>
        <div className="flex-1 text-center sm:text-left">
          <p className="font-bold text-yellow-300 text-lg mb-1">はじめてですか？ まずここから！</p>
          <p className="text-yellow-200/80 text-sm leading-relaxed">
            「ターミナルって何？」「SKILLってどこに入力するの？」など、
            <strong>わからない言葉を全部わかりやすく</strong>説明する専用ページを用意しました。
            専門用語ゼロで読めます。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <Link
            to="/guide"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold text-sm transition-colors"
          >
            <Baby size={18} />
            初心者ガイド
            <ArrowRight size={14} />
          </Link>
          <Link
            to="/skills"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-300 font-bold text-sm transition-colors"
          >
            <Zap size={18} />
            SKILLライブラリ
          </Link>
        </div>
      </motion.div>

      {/* ヒーロー */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium mb-6">
          <Star size={14} />
          <span>2026年最新版 — Claude Code完全マスター</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Claude Code を<br />
          <span className="gradient-text">完全マスター</span>しよう
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          初心者から上級者まで。Claude 101からAgent Teamsまで、
          実践的なコンテンツで段階的にスキルアップ。
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to={`/level/${nextLevel.id}`}
            className="btn-primary flex items-center justify-center gap-2 text-base px-6 py-3"
          >
            <Zap size={18} />
            学習を始める
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/roadmap"
            className="btn-secondary flex items-center justify-center gap-2 text-base px-6 py-3"
          >
            ロードマップを見る
          </Link>
        </div>
      </motion.section>

      {/* レベル一覧（ミニ版） */}
      <section>
        <h2 className="section-title text-center mb-2">7段階学習ロードマップ</h2>
        <p className="section-subtitle text-center">あなたのレベルから始められます</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CURRICULUM.map((level, i) => {
            const p = levels[level.id]
            const isUnlocked = p?.unlocked ?? level.id === 0
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={isUnlocked ? `/level/${level.id}` : '#'}
                  className={`block p-4 rounded-xl border transition-all ${
                    isUnlocked
                      ? 'border-gray-800 bg-gray-900 hover:border-gray-600 cursor-pointer'
                      : 'border-gray-800 bg-gray-900/30 opacity-40 cursor-not-allowed pointer-events-none'
                  }`}
                >
                  <div className="text-2xl mb-2">{level.emoji}</div>
                  <p className="text-xs text-gray-500 font-mono mb-1">Level {level.id}</p>
                  <p className="text-sm font-semibold text-white leading-tight">{level.name}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
        <div className="text-center mt-4">
          <Link to="/roadmap" className="btn-ghost inline-flex items-center gap-1 text-sm">
            詳細を見る <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* 特徴 */}
      <section>
        <h2 className="section-title text-center mb-2">できること</h2>
        <p className="section-subtitle text-center">学習から副業まで完全サポート</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="card flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${color}20` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SNS活用 CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-gray-800 p-8 text-center"
        style={{ background: 'linear-gradient(135deg, #0ea5e910, #8b5cf610)' }}
      >
        <h2 className="text-2xl font-bold text-white mb-2">
          Claude Code × SNS で<span className="gradient-text">副業収入</span>を作る
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          X・note・LINE・YouTubeとClaude Codeを連携して、
          コンテンツ生成から投稿まで自動化する実践ガイド
        </p>
        <Link to="/sns-tools" className="btn-primary inline-flex items-center gap-2">
          <Smartphone size={18} />
          SNS活用ガイドを見る
          <ArrowRight size={16} />
        </Link>
      </motion.section>
    </div>
  )
}
