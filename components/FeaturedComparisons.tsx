"use client";

import Link from "next/link";
import { ArrowRight, Clock, Flame, Sparkles, RefreshCw } from "lucide-react";

type BadgeType = "hot" | "new" | "updated" | null;

interface ComparisonCard {
  id: string;
  title: string;
  description: string;
  keyPoint: string;
  badge: BadgeType;
  readTime: string;
  href: string;
}

const comparisons: ComparisonCard[] = [
  {
    id: "serpapi-vs-scrapingbee",
    title: "SerpApi vs ScrapingBee",
    description: "Best budget options for startups looking to scale their data extraction needs.",
    keyPoint: "Price difference: $21/mo",
    badge: "hot",
    readTime: "5 min read",
    href: "/compare/serpapi-vs-scrapingbee",
  },
  {
    id: "bright-data-vs-oxylabs",
    title: "Bright Data vs Oxylabs",
    description: "Enterprise-grade battle between two industry giants with premium features.",
    keyPoint: "Enterprise features compared",
    badge: "updated",
    readTime: "7 min read",
    href: "/compare/bright-data-vs-oxylabs",
  },
  {
    id: "zenrows-vs-scrapingbee",
    title: "Zenrows vs ScrapingBee",
    description: "Speed vs simplicity - which API fits your workflow better?",
    keyPoint: "Response time: 2x faster",
    badge: "new",
    readTime: "4 min read",
    href: "/compare/zenrows-vs-scrapingbee",
  },
  {
    id: "serpapi-vs-bright-data",
    title: "SerpApi vs Bright Data",
    description: "Scale comparison for growing businesses with high-volume requirements.",
    keyPoint: "Best for 100K+ requests",
    badge: "hot",
    readTime: "6 min read",
    href: "/compare/serpapi-vs-bright-data",
  },
  {
    id: "oxylabs-vs-zenrows",
    title: "Oxylabs vs Zenrows",
    description: "Feature deep-dive into two powerful scraping solutions.",
    keyPoint: "15+ features analyzed",
    badge: null,
    readTime: "8 min read",
    href: "/compare/oxylabs-vs-zenrows",
  },
  {
    id: "all-apis-compared",
    title: "All APIs Compared",
    description: "Complete 2024 guide covering every major SERP API on the market.",
    keyPoint: "10 APIs ranked",
    badge: null,
    readTime: "12 min read",
    href: "/compare/all-serp-apis",
  },
];

const BadgeComponent = ({ type }: { type: BadgeType }) => {
  if (!type) return null;

  const badgeConfig = {
    hot: {
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-600 dark:text-red-400",
      icon: Flame,
      label: "Hot",
    },
    new: {
      bg: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
      icon: Sparkles,
      label: "New",
    },
    updated: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      icon: RefreshCw,
      label: "Updated",
    },
  };

  const config = badgeConfig[type];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
    >
      <Icon className="w-3 h-3" />
      {config.label}
    </span>
  );
};

const ComparisonCardComponent = ({ card }: { card: ComparisonCard }) => {
  return (
    <Link href={card.href} className="group block">
      <article
        className="h-full p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700
                   transition-all duration-300 ease-out
                   hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50
                   hover:-translate-y-1 hover:border-gray-300 dark:hover:border-gray-600"
      >
        <div className="flex items-start justify-between mb-3">
          <BadgeComponent type={card.badge} />
          <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
            <Clock className="w-3 h-3" />
            {card.readTime}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {card.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {card.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300">
            {card.keyPoint}
          </span>

          <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
            Read Comparison
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default function FeaturedComparisons() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Comparisons
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our most-read API matchups
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comparisons.map((card) => (
            <ComparisonCardComponent key={card.id} card={card} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            View All Comparisons
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
