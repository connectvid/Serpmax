"use client";

import Link from "next/link";
import { ArrowRight, Check, Zap } from "lucide-react";

interface APICard {
  id: string;
  name: string;
  price: string;
  priceLabel: string;
  searches: string;
  uptime: string;
  uptimeColor: string;
}

const apiCards: APICard[] = [
  {
    id: "serpapi",
    name: "SerpApi",
    price: "$50",
    priceLabel: "/mo",
    searches: "5,000 searches",
    uptime: "99.9%",
    uptimeColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "scrapingbee",
    name: "ScrapingBee",
    price: "$29",
    priceLabel: "/mo",
    searches: "1,000 credits",
    uptime: "99.5%",
    uptimeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "bright-data",
    name: "Bright Data",
    price: "Custom",
    priceLabel: "",
    searches: "Unlimited",
    uptime: "99.99%",
    uptimeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

const APICardComponent = ({ card }: { card: APICard }) => {
  return (
    <div
      className="group relative p-5 sm:p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700
                 transition-all duration-300 ease-out
                 hover:shadow-lg hover:shadow-primary-200/50 dark:hover:shadow-primary-900/20
                 hover:-translate-y-1 hover:border-primary-300 dark:hover:border-primary-600
                 animate-fade-in"
    >
      {/* API Name */}
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        {card.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline mb-4">
        <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
          {card.price}
        </span>
        {card.priceLabel && (
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            {card.priceLabel}
          </span>
        )}
      </div>

      {/* Search Volume */}
      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mb-3">
        <Zap className="w-4 h-4 text-primary-500" />
        <span>{card.searches}</span>
      </div>

      {/* Uptime Badge */}
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${card.uptimeColor}`}
        >
          <Check className="w-3 h-3" />
          {card.uptime} uptime
        </span>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle - top right */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 bg-primary-200/30 dark:bg-primary-700/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        {/* Medium circle - bottom left */}
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-200/20 dark:bg-secondary-700/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        {/* Small dots pattern - top left */}
        <div className="absolute top-20 left-10 md:left-20">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary-300/50 dark:bg-primary-600/30 rounded-full animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
        {/* Small dots pattern - bottom right */}
        <div className="absolute bottom-20 right-10 md:right-20 hidden sm:block">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-secondary-300/50 dark:bg-secondary-600/30 rounded-full animate-float"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
        {/* Decorative ring - center right */}
        <div
          className="absolute top-1/2 -right-10 w-40 h-40 border-4 border-primary-200/30 dark:border-primary-700/20 rounded-full animate-float hidden lg:block"
          style={{ animationDelay: "1s" }}
        />
        {/* Decorative ring - center left */}
        <div
          className="absolute top-1/3 -left-10 w-24 h-24 border-2 border-accent-200/40 dark:border-accent-700/20 rounded-full animate-float hidden md:block"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white
                       leading-tight tracking-tight mb-6 animate-fade-in font-sans"
          >
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              SERP API
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Compare pricing, features, and performance of leading search APIs
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {/* Primary Button - Compare APIs */}
            <Link
              href="/compare"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4
                         bg-primary-600 hover:bg-primary-700
                         text-white font-semibold text-lg rounded-xl
                         transition-all duration-200
                         hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/30
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                         dark:focus:ring-offset-gray-900"
            >
              Compare APIs
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Secondary Button - Read Reviews */}
            <Link
              href="/reviews"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4
                         border-2 border-gray-300 dark:border-gray-600
                         text-gray-700 dark:text-gray-200 font-semibold text-lg rounded-xl
                         transition-all duration-200
                         hover:border-primary-500 hover:text-primary-600
                         dark:hover:border-primary-400 dark:hover:text-primary-400
                         hover:-translate-y-0.5
                         focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                         dark:focus:ring-offset-gray-900"
            >
              Read Reviews
            </Link>
          </div>
        </div>

        {/* Quick Comparison Preview */}
        <div
          className="max-w-4xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Section Label */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
              Quick Comparison
            </span>
          </div>

          {/* API Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {apiCards.map((card, index) => (
              <div
                key={card.id}
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <APICardComponent card={card} />
              </div>
            ))}
          </div>

          {/* View Full Comparison Link */}
          <div className="text-center mt-8">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400
                         font-medium hover:text-primary-700 dark:hover:text-primary-300
                         transition-colors group"
            >
              View full comparison
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
