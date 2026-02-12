import Link from 'next/link'

// Footer navigation links configuration
const footerLinks = {
  comparisons: {
    title: 'Comparisons',
    links: [
      { name: 'All APIs', href: '/comparisons' },
      { name: 'By Price', href: '/comparisons/price' },
      { name: 'By Feature', href: '/comparisons/features' },
      { name: 'By Use Case', href: '/comparisons/use-cases' },
      { name: 'Popular', href: '/comparisons/popular' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'Articles', href: '/articles' },
      { name: 'Guides', href: '/guides' },
      { name: 'API News', href: '/news' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
}

// Social media links
const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/serpapis',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/serpapis',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/serpapis',
    icon: (
      <svg
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Brand */}
          <div className="md:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <defs>
                    <linearGradient
                      id="footerLogoGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    fill="url(#footerLogoGradient)"
                  />
                  <path
                    d="M10 12L14 16L10 20M17 20H22"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-primary-400">
                SerpApis
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-dark-400 text-sm mb-6 max-w-xs">
              Your trusted source for SERP API comparisons
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-dark-400 hover:text-primary-400 hover:bg-dark-800 rounded-lg transition-all duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Comparisons */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {footerLinks.comparisons.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.comparisons.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-dark-500 text-sm">
              &copy; 2024 SerpApis. All rights reserved.
            </p>

            {/* Made with love */}
            <p className="text-dark-500 text-sm flex items-center">
              Made with{' '}
              <svg
                className="w-4 h-4 mx-1 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>{' '}
              for developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
