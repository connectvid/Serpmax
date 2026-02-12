'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useTheme } from '@/components/ThemeProvider'

// Navigation links configuration
const navigationLinks = [
  {
    name: 'Comparisons',
    href: '/comparisons',
    hasDropdown: true,
    dropdownItems: [
      { name: 'All Comparisons', href: '/comparisons' },
      { name: 'By Category', href: '/comparisons/categories' },
      { name: 'Popular', href: '/comparisons/popular' },
    ],
  },
  { name: 'Articles', href: '/articles' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 group"
            >
              {/* Logo Icon with blue gradient */}
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                  </defs>
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    fill="url(#logoGradient)"
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
              <span className="text-xl font-bold text-dark-900 dark:text-white transition-colors duration-200 group-hover:text-primary">
                SerpApis
              </span>
            </Link>

            {/* Center Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : undefined}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center px-4 py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary-400 font-medium transition-colors duration-200 rounded-lg hover:bg-primary-50 dark:hover:bg-dark-800"
                      >
                        {link.name}
                        <svg
                          className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-48 bg-white dark:bg-dark-800 rounded-xl shadow-soft border border-dark-100 dark:border-dark-700 overflow-hidden transition-all duration-200 ${
                          isDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        }`}
                      >
                        {link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors duration-200"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-dark-600 dark:text-dark-300 hover:text-primary dark:hover:text-primary-400 font-medium transition-colors duration-200 rounded-lg hover:bg-primary-50 dark:hover:bg-dark-800"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Search Icon */}
              <button
                className="p-2 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 rounded-lg transition-all duration-200"
                aria-label="Search"
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 rounded-lg transition-all duration-200"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* CTA Button */}
              <Link
                href="/comparisons"
                className="inline-flex items-center px-5 py-2.5 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Start Comparing
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 rounded-lg transition-all duration-200"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
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
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
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
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 rounded-lg transition-all duration-200"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark-900/50 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 w-80 max-w-[85vw] h-full bg-white dark:bg-dark-900 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-dark-100 dark:border-dark-800">
            <span className="text-lg font-bold text-dark-900 dark:text-white">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            {navigationLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center justify-between w-full px-6 py-3 text-dark-700 dark:text-dark-200 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 font-medium transition-colors duration-200"
                    >
                      {link.name}
                      <svg
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        isDropdownOpen ? 'max-h-48' : 'max-h-0'
                      }`}
                    >
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-10 py-3 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-6 py-3 text-dark-700 dark:text-dark-200 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Search in Mobile Menu */}
            <div className="px-4 py-4 border-t border-dark-100 dark:border-dark-800 mt-4">
              <button className="flex items-center w-full px-4 py-3 text-dark-500 dark:text-dark-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-dark-800 rounded-lg transition-colors duration-200">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>

          {/* Mobile Menu Footer with CTA */}
          <div className="p-4 border-t border-dark-100 dark:border-dark-800">
            <Link
              href="/comparisons"
              className="flex items-center justify-center w-full px-5 py-3 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start Comparing
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
