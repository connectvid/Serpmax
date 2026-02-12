import Link from 'next/link'
import { allArticles } from 'contentlayer/generated'

export default function Home() {
  const recentArticles = allArticles
    .filter(a => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

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
              <Link href="/articles" className="text-gray-600 hover:text-gray-900">
                Articles
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

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find the Best SERP API for Your Project
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Honest comparisons, real benchmarks, and detailed reviews of search APIs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/compare"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
            >
              Compare APIs
            </Link>
            <Link
              href="#articles"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400"
            >
              Read Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">APIs Reviewed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">100+</div>
              <div className="text-gray-600">Articles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">10K+</div>
              <div className="text-gray-600">Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section id="articles" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h2>

          {recentArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="block p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <span className="text-sm text-blue-600 font-medium">
                    {article.keywords?.[0] || 'Article'}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-4 text-sm text-gray-500">
                    {article.readingTime} min read
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No articles yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to find the right API?
          </h2>
          <p className="text-blue-100 mb-8">
            Compare pricing, features, and performance side by side.
          </p>
          <Link
            href="/compare"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
          >
            Start Comparing
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-white font-bold text-lg mb-4">SerpApis</div>
              <p className="text-sm">Your trusted source for SERP API comparisons.</p>
            </div>
            <div>
              <div className="font-medium text-white mb-4">Links</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/articles" className="hover:text-white">Articles</Link></li>
                <li><Link href="/compare" className="hover:text-white">Compare</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-white mb-4">Resources</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-medium text-white mb-4">Legal</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            © 2024 SerpApis. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
