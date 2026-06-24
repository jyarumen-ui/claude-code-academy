// CodePlayground コンポーネントのユニットテスト
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CodePlayground } from './CodePlayground'
import { type CodeExample } from '../../data/curriculum'

// Prism をモック（ハイライト処理はテスト不要）
vi.mock('prismjs', () => ({
  default: { highlightElement: vi.fn() },
}))
vi.mock('prismjs/components/prism-bash', () => ({}))
vi.mock('prismjs/components/prism-typescript', () => ({}))
vi.mock('prismjs/components/prism-jsx', () => ({}))
vi.mock('prismjs/components/prism-json', () => ({}))
vi.mock('prismjs/components/prism-markdown', () => ({}))

const mockExamples: CodeExample[] = [
  {
    title: '基本コマンド',
    code: 'claude --help',
    language: 'bash',
    explanation: 'ヘルプを表示するコマンドです。',
  },
  {
    title: 'TypeScript例',
    code: 'const greeting: string = "Hello"',
    language: 'typescript',
    explanation: 'TypeScriptの型注釈の例です。',
  },
  {
    title: '説明なしの例',
    code: 'echo "test"',
    language: 'bash',
  },
]

describe('CodePlayground', () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    })
  })

  it('例が空の場合は何も描画しない', () => {
    const { container } = render(<CodePlayground examples={[]} />)
    expect(container.firstChild).toBeNull()
  })

  it('最初の例のコードが表示される', () => {
    render(<CodePlayground examples={mockExamples} />)
    expect(screen.getByText('claude --help')).toBeInTheDocument()
  })

  it('最初の例の解説が表示される', () => {
    render(<CodePlayground examples={mockExamples} />)
    expect(screen.getByText(/ヘルプを表示するコマンドです/)).toBeInTheDocument()
  })

  it('解説がない場合は解説エリアが表示されない', () => {
    render(<CodePlayground examples={[mockExamples[2]]} />)
    expect(screen.queryByText(/💡/)).not.toBeInTheDocument()
  })

  it('複数例のタブが表示される', () => {
    render(<CodePlayground examples={mockExamples} />)
    expect(screen.getByText('基本コマンド')).toBeInTheDocument()
    expect(screen.getByText('TypeScript例')).toBeInTheDocument()
  })

  it('タブをクリックすると対応するコードに切り替わる', () => {
    render(<CodePlayground examples={mockExamples} />)
    fireEvent.click(screen.getByText('TypeScript例'))
    expect(screen.getByText('const greeting: string = "Hello"')).toBeInTheDocument()
  })

  it('タブ切り替え後に解説も更新される', () => {
    render(<CodePlayground examples={mockExamples} />)
    fireEvent.click(screen.getByText('TypeScript例'))
    expect(screen.getByText(/TypeScriptの型注釈の例です/)).toBeInTheDocument()
  })

  it('1件のみの場合は前後ナビボタンが表示されない', () => {
    render(<CodePlayground examples={[mockExamples[0]]} />)
    expect(screen.queryByRole('button', { name: '' })).not.toBeInTheDocument()
  })

  it('コピーボタンをクリックするとclipboard.writeTextが呼ばれる', async () => {
    render(<CodePlayground examples={mockExamples} />)
    const copyBtn = screen.getByText('コピー')
    fireEvent.click(copyBtn)
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('claude --help')
  })

  it('コピー後は「コピー済み」に表示が変わる', async () => {
    render(<CodePlayground examples={mockExamples} />)
    fireEvent.click(screen.getByText('コピー'))
    expect(await screen.findByText('コピー済み')).toBeInTheDocument()
  })

  it('タイトルが20文字超の場合は省略される', () => {
    const longTitleExample: CodeExample = {
      title: 'これは20文字を超えるとても長いタイトルです',
      code: 'echo long',
      language: 'bash',
    }
    render(<CodePlayground examples={[longTitleExample]} />)
    expect(screen.getByText(/…$/)).toBeInTheDocument()
  })
})
