"use client";

import React from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO at DataFlow",
    quote:
      "SerpApis helped us cut our API evaluation time from weeks to hours. The comparison tables are incredibly detailed.",
    initials: "SC",
    avatarColor: "bg-blue-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer at ScaleUp",
    quote:
      "Finally, an unbiased source for SERP API comparisons. Saved us thousands by finding the right fit.",
    initials: "MR",
    avatarColor: "bg-purple-500",
  },
  {
    name: "Emily Watson",
    role: "Founder at SearchTech",
    quote:
      "The performance benchmarks are exactly what we needed. We switched APIs and improved our response times by 40%.",
    initials: "EW",
    avatarColor: "bg-emerald-500",
  },
  {
    name: "James Park",
    role: "Engineering Manager",
    quote:
      "Clear pricing breakdowns and honest reviews. This should be the first stop for anyone evaluating SERP APIs.",
    initials: "JP",
    avatarColor: "bg-orange-500",
  },
];

const stats = [
  { value: "10,000+", label: "developers" },
  { value: "500+", label: "API reviews" },
  { value: "50+", label: "APIs compared" },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-yellow-400 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
    {/* Quote decoration */}
    <div className="absolute top-4 right-4 text-6xl text-gray-100 dark:text-gray-700 font-serif leading-none select-none">
      &ldquo;
    </div>

    <div className="relative z-10">
      {/* Star rating */}
      <StarRating />

      {/* Quote */}
      <blockquote className="mt-4 text-gray-600 dark:text-gray-300 italic leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author info */}
      <div className="mt-6 flex items-center gap-3">
        {/* Avatar */}
        <div
          className={`w-12 h-12 rounded-full ${testimonial.avatarColor} flex items-center justify-center text-white font-semibold text-sm`}
        >
          {testimonial.initials}
        </div>

        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Developers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Join thousands of developers and companies who rely on SerpApis to
            make informed decisions about their SERP API integrations.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Logo cloud */}
        <div className="text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-24 h-8 sm:w-32 sm:h-10 bg-gray-200 dark:bg-gray-700 rounded-lg opacity-50 hover:opacity-75 transition-opacity duration-300"
                aria-label={`Company logo placeholder ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
