import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GENAI RAG PROJECT',
  description: 'Developed for easy understanding and study purposes.'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
