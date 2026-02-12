import { allArticles } from 'contentlayer/generated'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ArticleContent from '@/components/ArticleContent'

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
      title: 'Article Not Found | SerpApis',
    }
  }

  return {
    title: `${article.title} | SerpApis`,
    description: article.description,
    keywords: article.keywords?.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author || 'SerpApis Team'],
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

  // Get related articles (same keywords, different slug)
  const relatedArticles = allArticles
    .filter((a) =>
      a.slug !== slug &&
      a.published &&
      a.keywords?.some(k => article.keywords?.includes(k))
    )
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <Navigation />

      <article className="pt-24">
        {/* Hero Section */}
        <header className="bg-gradient-to-b from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-gray-400 dark:text-gray-600">/</li>
                <li>
                  <Link
                    href="/articles"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors"
                  >
                    Articles
                  </Link>
                </li>
                <li className="text-gray-400 dark:text-gray-600">/</li>
                <li className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">
                  {article.title}
                </li>
              </ol>
            </nav>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {article.keywords && article.keywords.length > 0 && (
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-semibold rounded-full uppercase tracking-wide">
                  {article.keywords[0]}
                </span>
              )}
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {article.readingTime} min read
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* Author & Date */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-primary-700 dark:text-primary-400 font-semibold text-lg">
                  {article.author?.charAt(0) || 'S'}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {article.author || 'SerpApis Team'}
                </p>
                <time
                  dateTime={article.date}
                  className="text-sm text-gray-500 dark:text-gray-400"
                >
                  {format(new Date(article.date), 'MMMM dd, yyyy')}
                </time>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {article.image && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        )}

        {/* Article Content with TOC */}
        <ArticleContent
          content={article.body.html}
          keywords={article.keywords || []}
        />

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-dark-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${related.slug}`}
                    className="group bg-white dark:bg-dark-900 rounded-xl p-6 border border-gray-200 dark:border-dark-700 hover:border-primary dark:hover:border-primary-500 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="text-xs font-semibold text-primary dark:text-primary-400 uppercase tracking-wide">
                      {related.keywords?.[0] || 'Article'}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                      {related.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{related.readingTime} min read</span>
                      <span className="text-primary dark:text-primary-400 font-medium group-hover:translate-x-1 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
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
                name: 'SerpApis',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://serpapis.com/logo.png',
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

      <Footer />
    </div>
  )
}
