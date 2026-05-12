import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CURRICULUM } from '../data/curriculum'
import { LessonContent } from '../components/learning/LessonContent'

/** レッスン詳細ページ */
export function Lesson() {
  const { levelId, lessonId } = useParams<{ levelId: string; lessonId: string }>()
  const level = CURRICULUM.find((lv) => lv.id === Number(levelId))
  const lessonIndex = level?.lessons.findIndex((l) => l.id === lessonId) ?? -1
  const lesson = level?.lessons[lessonIndex]
  const prevLesson = lessonIndex > 0 ? level?.lessons[lessonIndex - 1] : null
  const nextLesson = level && lessonIndex < level.lessons.length - 1 ? level.lessons[lessonIndex + 1] : null

  if (!level || !lesson) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-gray-400">レッスンが見つかりません</p>
        <Link to="/roadmap" className="btn-primary mt-4 inline-flex">ロードマップへ</Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* パンくず */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link to="/roadmap" className="hover:text-white transition-colors">ロードマップ</Link>
        <ChevronRight size={14} />
        <Link to={`/level/${level.id}`} className="hover:text-white transition-colors">
          {level.emoji} Level {level.id}
        </Link>
        <ChevronRight size={14} />
        <span className="text-white">{lesson.title}</span>
      </div>

      <LessonContent lesson={lesson} levelId={level.id} />

      {/* 前後レッスンナビ */}
      <div className="flex justify-between gap-4 mt-8 pt-6 border-t border-gray-800">
        {prevLesson ? (
          <Link
            to={`/level/${level.id}/lesson/${prevLesson.id}`}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <ChevronLeft size={15} />
            <span className="truncate max-w-40">{prevLesson.title}</span>
          </Link>
        ) : (
          <Link to={`/level/${level.id}`} className="btn-ghost flex items-center gap-2 text-sm">
            <ChevronLeft size={15} />
            レベル一覧
          </Link>
        )}

        {nextLesson ? (
          <Link
            to={`/level/${level.id}/lesson/${nextLesson.id}`}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <span className="truncate max-w-40">{nextLesson.title}</span>
            <ChevronRight size={15} />
          </Link>
        ) : (
          <Link to={`/level/${level.id + 1}`} className="btn-ghost flex items-center gap-2 text-sm">
            次のレベルへ
            <ChevronRight size={15} />
          </Link>
        )}
      </div>
    </div>
  )
}
