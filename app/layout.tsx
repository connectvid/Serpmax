import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'SerpApis - Compare SERP APIs | Find the Best Search API for Your Needs',
  description: 'Compare top SERP APIs side-by-side. Unbiased reviews, pricing breakdowns, and performance benchmarks to help you choose the perfect search API.',
  keywords: ['serp api', 'search api', 'google search api', 'serp api comparison', 'api comparison', 'web scraping api', 'search results api'],
  authors: [{ name: 'SerpApis Team' }],
  openGraph: {
    title: 'SerpApis - Compare SERP APIs',
    description: 'Compare top SERP APIs side-by-side. Find the best search API for your needs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SerpApis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SerpApis - Compare SERP APIs',
    description: 'Compare top SERP APIs side-by-side. Find the best search API for your needs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
