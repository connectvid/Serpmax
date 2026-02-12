import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SerpApis - Compare SERP APIs',
  description: 'Find the best SERP API for your project. Honest comparisons, real benchmarks, and detailed reviews.',
  keywords: ['serp api', 'search api', 'google search api', 'api comparison'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
