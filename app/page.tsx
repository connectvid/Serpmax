import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2.5 text-2xl font-extrabold text-gray-900">
            <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-xl">S</span>
            <span>Serpmax</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Blog</Link>
            <Link href="#docs" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Documentation</Link>
            <Link href="#" className="px-5 py-2.5 border-2 border-gray-200 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-500 transition-all">Log In</Link>
            <Link href="#" className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-36 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 text-sm font-semibold rounded-full mb-6">
                Trusted by 10,000+ developers
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                The Fastest Search API for Developers
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl">
                Access real-time Google search results with our blazing-fast API.
                No proxies, no headless browsers — just clean, structured data in milliseconds.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <Link href="#" className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 transition-all">
                  Start Free Trial
                </Link>
                <Link href="#docs" className="px-8 py-4 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-indigo-500 hover:text-indigo-500 transition-all">
                  View Documentation
                </Link>
              </div>
              <div className="flex gap-12 pt-10 border-t border-gray-200">
                <div>
                  <div className="text-4xl font-extrabold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-500 mt-1">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gray-900">&lt;200ms</div>
                  <div className="text-sm text-gray-500 mt-1">Avg Response</div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-gray-900">1B+</div>
                  <div className="text-sm text-gray-500 mt-1">API Calls</div>
                </div>
              </div>
            </div>
            <div className="code-window">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="code-title">request.js</span>
              </div>
              <pre><code>{`const response = await fetch('https://api.serpmax.com/search', {
  method: 'POST',
  headers: {
    'X-API-Key': 'your_api_key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    q: 'best coffee in NYC',
    num: 10
  })
});

const data = await response.json();
// Returns structured search results instantly`}</code></pre>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Everything you need to build powerful search</h2>
            <p className="text-xl text-gray-600">Our API provides comprehensive search capabilities with enterprise-grade reliability</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Average response time under 200ms. No rate limiting headaches. Scale instantly to millions of requests.' },
              { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security with 99.9% uptime SLA. Your data is encrypted and never stored.' },
              { icon: '🌍', title: 'Global Coverage', desc: 'Search from 195+ countries and 100+ languages. Get localized results from anywhere.' },
              { icon: '💻', title: 'Developer Friendly', desc: 'Clean JSON responses, comprehensive docs, and SDKs for Python, Node.js, Go, and more.' },
              { icon: '📦', title: 'Multiple Search Types', desc: 'Web, Images, News, Maps, Shopping, and Scholar search — all from a single unified API.' },
              { icon: '📊', title: 'Structured Data', desc: 'Get clean, parsed results including knowledge graphs, featured snippets, and rich results.' },
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:border-transparent transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">Start free and scale as you grow. No hidden fees.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="p-10 bg-white border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-6xl font-extrabold">0</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-8">Perfect for testing and small projects</p>
              <ul className="space-y-4 mb-8">
                {['100 searches/month', 'Web & Image search', 'Basic support', 'Standard response time'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="block w-full py-3 text-center border-2 border-gray-200 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-500 transition-all">
                Get Started Free
              </Link>
            </div>

            {/* Pro */}
            <div className="relative p-10 bg-white border-2 border-indigo-500 rounded-2xl shadow-xl shadow-indigo-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-6xl font-extrabold">49</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-8">For growing businesses and teams</p>
              <ul className="space-y-4 mb-8">
                {['10,000 searches/month', 'All search types', 'Priority support', 'Fast response time', 'Webhook notifications', 'Custom parameters'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="block w-full py-3 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-10 bg-white border border-gray-200 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="flex items-baseline mb-2">
                <span className="text-2xl font-semibold">$</span>
                <span className="text-6xl font-extrabold">299</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <p className="text-gray-600 mb-8">For large-scale applications</p>
              <ul className="space-y-4 mb-8">
                {['Unlimited searches', 'All search types', 'Dedicated support', 'Fastest response time', 'Custom SLA', 'Dedicated infrastructure', 'On-premise option'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="text-emerald-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="#" className="block w-full py-3 text-center border-2 border-gray-200 rounded-lg font-semibold hover:border-indigo-500 hover:text-indigo-500 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Docs Section */}
      <section id="docs" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">Ready to integrate in minutes</h2>
              <p className="text-xl text-gray-600 mb-10">Our comprehensive documentation and SDKs make integration a breeze. Get up and running in under 5 minutes.</p>
              <div className="space-y-6 mb-8">
                {[
                  { icon: '📚', title: 'Comprehensive Docs', desc: 'Detailed guides, tutorials, and API references' },
                  { icon: '💻', title: 'Official SDKs', desc: 'Python, Node.js, Go, Ruby, PHP, and more' },
                  { icon: '💬', title: 'Developer Community', desc: 'Active Discord with 5,000+ developers' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <strong className="block text-gray-900">{item.title}</strong>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/30 transition-all">
                Read Documentation
              </Link>
            </div>
            <div>
              <div className="flex gap-2 mb-4">
                {['Python', 'Node.js', 'cURL'].map((tab, i) => (
                  <button key={i} className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${i === 0 ? 'bg-gray-900 text-white' : 'border border-gray-200 text-gray-600 hover:border-indigo-500 hover:text-indigo-500'}`}>
                    {tab}
                  </button>
                ))}
              </div>
              <div className="code-window">
                <div className="code-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <pre><code>{`import serpmax

client = serpmax.Client("your_api_key")

result = client.search(
    query="best restaurants in SF",
    location="San Francisco, CA",
    num=10
)

for item in result.organic:
    print(item.title, item.link)`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">Start building with Serpmax today</h2>
          <p className="text-xl text-white/80 mb-10">Join thousands of developers using Serpmax to power their search applications.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold text-lg hover:-translate-y-0.5 hover:shadow-xl transition-all">
              Get Started Free
            </Link>
            <Link href="#" className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <Link href="/" className="flex items-center gap-2.5 text-2xl font-extrabold text-white mb-5">
                <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg text-xl">S</span>
                <span>Serpmax</span>
              </Link>
              <p className="mb-5">The fastest and most reliable search API for developers.</p>
              <div className="flex gap-4">
                {['X', 'GitHub', 'LinkedIn'].map((social, i) => (
                  <Link key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-500 hover:text-white transition-all">
                    {social[0]}
                  </Link>
                ))}
              </div>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'API Reference', 'Changelog'] },
              { title: 'Resources', links: ['Documentation', 'Tutorials', 'Blog', 'Status'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact', 'Privacy'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-white font-semibold mb-6">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <Link href={link === 'Blog' ? '/blog' : '#'} className="hover:text-white transition-colors">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-10 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2026 Serpmax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
