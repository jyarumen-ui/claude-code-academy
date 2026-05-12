/** チャット回答のMarkdownをきれいなJSXに変換するレンダラー */

interface AnswerRendererProps {
  text: string
}

/** 1行をインライン要素（bold・code）に変換 */
function parseLine(line: string, key: number) {
  // **bold** と `code` を処理
  const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g)
  return (
    <span key={key}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-white font-bold">{part.slice(2, -2)}</strong>
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return (
            <code key={i} className="bg-gray-700 text-brand-300 px-1.5 py-0.5 rounded text-xs font-mono mx-0.5">
              {part.slice(1, -1)}
            </code>
          )
        }
        return part
      })}
    </span>
  )
}

export function AnswerRenderer({ text }: AnswerRendererProps) {
  const lines = text.split('\n')
  const elements: React.ReactNode[] = []
  let codeBlock: string[] = []
  let inCode = false
  let listItems: React.ReactNode[] = []

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`ul-${elements.length}`} className="space-y-1 my-2 ml-1">
          {listItems}
        </ul>
      )
      listItems = []
    }
  }

  lines.forEach((line, i) => {
    // コードブロック開始・終了
    if (line.startsWith('```')) {
      if (!inCode) {
        flushList()
        inCode = true
        codeBlock = []
      } else {
        inCode = false
        elements.push(
          <div key={`code-${i}`} className="my-3 rounded-xl overflow-hidden border border-gray-700">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 border-b border-gray-700">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-gray-500">コマンド・コード</span>
            </div>
            <pre className="bg-gray-950 px-4 py-3 text-xs text-green-300 font-mono overflow-x-auto leading-relaxed whitespace-pre-wrap">
              {codeBlock.join('\n')}
            </pre>
          </div>
        )
        codeBlock = []
      }
      return
    }

    if (inCode) {
      codeBlock.push(line)
      return
    }

    // 見出し ##
    if (line.startsWith('## ')) {
      flushList()
      elements.push(
        <h3 key={i} className="text-base font-bold text-white mt-4 mb-2 first:mt-0 flex items-center gap-1">
          {line.slice(3)}
        </h3>
      )
      return
    }

    // 見出し ###
    if (line.startsWith('### ')) {
      flushList()
      elements.push(
        <h4 key={i} className="text-sm font-bold text-gray-200 mt-3 mb-1">{line.slice(4)}</h4>
      )
      return
    }

    // リスト - or *
    if (line.match(/^[-*] /)) {
      listItems.push(
        <li key={i} className="flex items-start gap-2 text-sm text-gray-200 leading-relaxed">
          <span className="text-brand-400 mt-0.5 shrink-0">●</span>
          <span>{parseLine(line.slice(2), i)}</span>
        </li>
      )
      return
    }

    // テーブル行（| で始まる）
    if (line.startsWith('|')) {
      flushList()
      const isHeader = lines[i + 1]?.match(/^\|[-|]+\|/)
      const isSeparator = line.match(/^\|[-|]+\|/)
      if (isSeparator) return

      const cells = line.split('|').filter(c => c.trim() !== '').map(c => c.trim())
      elements.push(
        <div key={i} className={`flex border-b border-gray-700 text-xs py-1.5 ${isHeader ? 'font-bold text-white bg-gray-800/50' : 'text-gray-300'}`}>
          {cells.map((cell, ci) => (
            <div key={ci} className="flex-1 px-2">{cell}</div>
          ))}
        </div>
      )
      return
    }

    // → で始まる行（リンク的なもの）
    if (line.startsWith('→')) {
      flushList()
      const urlMatch = line.match(/https?:\/\/[^\s]+/)
      elements.push(
        <p key={i} className="text-sm text-gray-200 leading-relaxed my-1 flex items-start gap-1.5">
          <span className="text-brand-400 shrink-0">→</span>
          {urlMatch ? (
            <a href={urlMatch[0]} target="_blank" rel="noopener noreferrer"
              className="text-brand-400 underline underline-offset-2 hover:text-brand-300 break-all">
              {line.slice(1).trim()}
            </a>
          ) : (
            <span>{parseLine(line.slice(1).trim(), i)}</span>
          )}
        </p>
      )
      return
    }

    // 空行
    if (line.trim() === '') {
      flushList()
      return
    }

    // 通常テキスト
    flushList()
    // URLを含む行はリンクに変換
    const urlMatch = line.match(/https?:\/\/[^\s]+/)
    if (urlMatch && !line.startsWith('**')) {
      const [before, after] = line.split(urlMatch[0])
      elements.push(
        <p key={i} className="text-sm text-gray-200 leading-relaxed my-1">
          {parseLine(before, i)}
          <a href={urlMatch[0]} target="_blank" rel="noopener noreferrer"
            className="text-brand-400 underline underline-offset-2 hover:text-brand-300 break-all">
            {urlMatch[0]}
          </a>
          {parseLine(after ?? '', i + 1000)}
        </p>
      )
      return
    }

    elements.push(
      <p key={i} className="text-sm text-gray-200 leading-relaxed my-1">
        {parseLine(line, i)}
      </p>
    )
  })

  flushList()

  return <div className="space-y-0.5">{elements}</div>
}
