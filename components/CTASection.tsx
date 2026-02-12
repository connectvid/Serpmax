'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 py-16 sm:py-20 lg:py-24">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Decorative Floating Shapes - Left Side */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-20">
        <div className="relative">
          <div className="h-64 w-64 rounded-full border-[3px] border-white/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
          <div className="absolute left-8 top-8 h-48 w-48 rounded-full border-[3px] border-white/20 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
          <div className="absolute left-16 top-16 h-32 w-32 rounded-full bg-white/10 sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
        </div>
      </div>

      {/* Decorative Floating Shapes - Right Side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 opacity-20">
        <div className="relative">
          <div className="h-64 w-64 rounded-full border-[3px] border-white/30 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
          <div className="absolute right-8 top-8 h-48 w-48 rounded-full border-[3px] border-white/20 sm:h-64 sm:w-64 lg:h-72 lg:w-72" />
          <div className="absolute right-16 top-16 h-32 w-32 rounded-full bg-white/10 sm:h-48 sm:w-48 lg:h-56 lg:w-56" />
        </div>
      </div>

      {/* Floating Dots Decoration */}
      <div className="absolute left-10 top-10 h-3 w-3 rounded-full bg-white/30 animate-pulse" />
      <div className="absolute left-1/4 top-1/4 h-2 w-2 rounded-full bg-white/20 animate-pulse delay-100" />
      <div className="absolute right-10 bottom-10 h-4 w-4 rounded-full bg-white/25 animate-pulse delay-200" />
      <div className="absolute right-1/4 bottom-1/4 h-2 w-2 rounded-full bg-white/30 animate-pulse delay-300" />
      <div className="absolute left-1/3 bottom-10 h-3 w-3 rounded-full bg-white/20 animate-pulse delay-500" />
      <div className="absolute right-1/3 top-10 h-2 w-2 rounded-full bg-white/25 animate-pulse delay-700" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Find Your Perfect API?
        </h2>

        {/* Subheadline */}
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90 sm:mt-6 sm:text-xl">
          Start comparing SERP APIs now. It&apos;s free and takes less than a minute.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-6">
          {/* Primary CTA - Start Comparing */}
          <Link
            href="/compare"
            className="group inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-900/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 sm:text-lg"
          >
            <span>Start Comparing</span>
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          {/* Secondary CTA - Browse Articles */}
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center rounded-lg border-2 border-white/80 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 sm:text-lg"
          >
            <span>Browse Articles</span>
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </Link>
        </div>

        {/* Trust Indicator */}
        <p className="mt-8 text-sm text-white/70 sm:mt-10">
          No credit card required &bull; Free forever &bull; Trusted by 10,000+ developers
        </p>
      </div>
    </section>
  );
}
