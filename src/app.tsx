import { useState, useEffect } from 'react'
import { render } from '@react-email/components'
import EmailTheme from './email-theme'
import PreviewContent from './preview-content'

export default function App() {
  const [html, setHtml] = useState<string>()

  useEffect(() => {
    render(<EmailTheme><PreviewContent /></EmailTheme>).then(setHtml)
  }, [])

  return (
    <iframe srcDoc={html} className="mx-auto border-0" />
  )
}