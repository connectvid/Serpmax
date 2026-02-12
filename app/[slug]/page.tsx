import { allArticles } from 'contentlayer/generated'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: 'Article Not Found | Serpmax',
    }
  }

  return {
    title: `${article.title} | Serpmax`,
    description: article.description,
    keywords: article.keywords?.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'Serpmax Team'],
      images: article.image ? [{ url: article.image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: article.image ? [article.image] : [],
    },
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = allArticles.find((a) => a.slug === slug)

  if (!article || !article.published) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
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
            <Link href="/#docs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Documentation</Link>
            <Link href="#" className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-32">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            ← Back to Home
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <time dateTime={article.date}>
              {format(new Date(article.date), 'MMMM dd, yyyy')}
            </time>
            <span>·</span>
            <span>{article.readingTime} min read</span>
            <span>·</span>
            <span>By {article.author}</span>
          </div>

          {/* Featured Image */}
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
            />
          )}
        </header>

        {/* Article Content */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
            prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
            prose-p:mb-6 prose-p:leading-relaxed prose-p:text-gray-700
            prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ol:my-6
            prose-li:my-2
            prose-img:rounded-lg prose-img:shadow-md prose-img:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-4 prose-blockquote:italic
            prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-table:my-8 prose-table:text-sm
            prose-th:bg-gray-100 prose-th:font-semibold prose-th:p-3
            prose-td:p-3 prose-td:border prose-td:border-gray-200"
          dangerouslySetInnerHTML={{ __html: article.body.html }}
        />

        {/* Keywords Tags */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full hover:bg-indigo-100 transition-colors"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: article.title,
              description: article.description,
              image: article.image,
              datePublished: article.date,
              dateModified: article.date,
              author: {
                '@type': 'Person',
                name: article.author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'Serpmax',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://serpmax.com/logo.png',
                },
              },
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://serpapis.com${article.url}`,
              },
            }),
          }}
        />
      </article>
    </div>
  )
}
