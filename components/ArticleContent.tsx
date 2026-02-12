'use client'

import { useEffect, useState, useRef } from 'react'

interface ArticleContentProps {
  content: string
  keywords: string[]
}

interface TOCItem {
  id: string
  text: string
  level: number
}

export default function ArticleContent({ content, keywords }: ArticleContentProps) {
  const [readingProgress, setReadingProgress] = useState(0)
  const [activeId, setActiveId] = useState<string>('')
  const [tocItems, setTocItems] = useState<TOCItem[]>([])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Extract TOC from content
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3')
      const items: TOCItem[] = []
      headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`
        if (!heading.id) {
          heading.id = id
        }
        items.push({
          id,
          text: heading.textContent || '',
          level: heading.tagName === 'H2' ? 2 : 3,
        })
      })
      setTocItems(items)
    }
  }, [content])

  // Reading progress and active heading tracking
  useEffect(() => {
    const handleScroll = () => {
      // Reading progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))

      // Show/hide scroll to top button
      setShowScrollTop(scrollTop > 500)

      // Active heading tracking
      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll('h2, h3')
        let currentActive = ''
        headings.forEach((heading) => {
          const rect = heading.getBoundingClientRect()
          if (rect.top <= 150) {
            currentActive = heading.id
          }
        })
        setActiveId(currentActive)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div
        className="reading-progress"
        style={{ width: `${readingProgress}%` }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
          {/* Main Content */}
          <div
            ref={contentRef}
            className="prose prose-lg prose-gray dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-dark-700
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline dark:prose-a:text-primary-400
              prose-strong:text-gray-900 prose-strong:font-semibold dark:prose-strong:text-white
              prose-ul:my-6 prose-ol:my-6
              prose-li:my-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
              prose-code:bg-primary-50 prose-code:text-primary-700 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-primary-900/30 dark:prose-code:text-primary-400
              prose-pre:bg-dark-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:shadow-lg
              prose-table:my-8 prose-table:text-sm prose-table:rounded-xl prose-table:overflow-hidden
              prose-th:bg-gray-100 prose-th:font-semibold prose-th:p-4 dark:prose-th:bg-dark-800
              prose-td:p-4 prose-td:border prose-td:border-gray-200 dark:prose-td:border-dark-700"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              {tocItems.length > 0 && (
                <nav className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                    Table of Contents
                  </h4>
                  <ul className="space-y-1">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToHeading(item.id)}
                          className={`
                            toc-link w-full text-left
                            ${item.level === 3 ? 'pl-8' : 'pl-4'}
                            ${activeId === item.id
                              ? 'text-primary dark:text-primary-400 border-primary font-medium'
                              : 'text-gray-500 dark:text-gray-400 border-transparent'
                            }
                          `}
                        >
                          {item.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Keywords */}
              {keywords.length > 0 && (
                <div className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1.5 bg-white dark:bg-dark-700 text-gray-600 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-dark-600 hover:border-primary dark:hover:border-primary-500 transition-colors cursor-default"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  )
}
