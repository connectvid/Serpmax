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
    return { title: 'Article Not Found | SerpApis' }
  }

  return {
    title: `${article.title} | SerpApis`,
    description: article.description,
    keywords: article.keywords?.join(', '),
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
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

  const relatedArticles = allArticles
    .filter((a) => a.slug !== slug && a.published)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">
              SerpApis
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/compare"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Compare APIs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{article.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {article.keywords && article.keywords[0] && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
              {article.keywords[0]}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            {article.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>{article.author || 'SerpApis Team'}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {format(new Date(article.date), 'MMM dd, yyyy')}
            </time>
            <span>·</span>
            <span>{article.readingTime} min read</span>
          </div>
        </header>

        {/* Featured Image */}
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 sm:h-80 object-cover rounded-lg mb-8"
          />
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900
            prose-ul:my-4 prose-ol:my-4
            prose-li:text-gray-700
            prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic"
          dangerouslySetInnerHTML={{ __html: article.body.html }}
        />

        {/* Tags */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6">More Articles</h2>
            <div className="grid gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{related.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-1">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-500">
          © 2024 SerpApis. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
