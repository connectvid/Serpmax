import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Serpmax - Fast & Reliable Search API',
  description: 'Access real-time Google search results with our blazing-fast API. No proxies, no headless browsers — just clean, structured data in milliseconds.',
  keywords: ['serp api', 'search api', 'google search api', 'web scraping', 'data extraction'],
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
