import { allArticles } from 'contentlayer/generated'
import { compareDesc, format } from 'date-fns'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Serpmax - SERP API Tutorials & Guides',
  description: 'Learn about SERP APIs, web scraping, and data extraction with expert guides and comparisons.',
  openGraph: {
    title: 'Serpmax Blog',
    description: 'Expert guides on SERP APIs and web scraping',
    type: 'website',
  },
}

export const revalidate = 60

export default function BlogPage() {
  const articles = allArticles
    .filter((article) => article.published)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2.5 text-2xl font-extrabold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-xl">S</span>
            <span>Serpmax</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</Link>
            <Link href="/blog" className="text-indigo-600 font-medium">Blog</Link>
            <Link href="/#docs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Documentation</Link>
            <Link href="#" className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Serpmax Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert guides on SERP APIs, web scraping, and data extraction
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={article.url}
                className="group"
              >
                <article className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Featured Image */}
                  {article.image && (
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                      {article.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t">
                      <time dateTime={article.date}>
                        {format(new Date(article.date), 'MMM dd, yyyy')}
                      </time>
                      <span>{article.readingTime} min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles published yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}
