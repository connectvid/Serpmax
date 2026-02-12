"use client";

import React from "react";

// Warning/Exclamation Icon
const WarningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Lightbulb Icon
const LightbulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
    <path
      fillRule="evenodd"
      d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z"
      clipRule="evenodd"
    />
  </svg>
);

// Checkmark/Trophy Icon
const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
  >
    <path
      fillRule="evenodd"
      d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15.19a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z"
      clipRule="evenodd"
    />
  </svg>
);

// Arrow Icon for flow indicators
const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

interface CardData {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: "red" | "blue" | "green";
  step: number;
}

const cards: CardData[] = [
  {
    icon: <WarningIcon />,
    title: "Overwhelming Choices",
    description:
      "50+ SERP APIs with different pricing, features, and reliability. Hours wasted researching.",
    accentColor: "red",
    step: 1,
  },
  {
    icon: <LightbulbIcon />,
    title: "Side-by-Side Comparison",
    description:
      "We test and compare every API so you don't have to. Real benchmarks, honest reviews.",
    accentColor: "blue",
    step: 2,
  },
  {
    icon: <TrophyIcon />,
    title: "Perfect Match",
    description:
      "Find the API that fits your budget, scale, and use case in minutes, not days.",
    accentColor: "green",
    step: 3,
  },
];

const accentStyles = {
  red: {
    iconBg: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-500 dark:text-red-400",
    border: "border-red-200 dark:border-red-800/50",
    hoverBorder: "hover:border-red-300 dark:hover:border-red-700",
    stepBg: "bg-red-500",
  },
  blue: {
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-500 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800/50",
    hoverBorder: "hover:border-blue-300 dark:hover:border-blue-700",
    stepBg: "bg-blue-500",
  },
  green: {
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-500 dark:text-green-400",
    border: "border-green-200 dark:border-green-800/50",
    hoverBorder: "hover:border-green-300 dark:hover:border-green-700",
    stepBg: "bg-green-500",
  },
};

const Card = ({ icon, title, description, accentColor, step }: CardData) => {
  const styles = accentStyles[accentColor];

  return (
    <div
      className={`
        relative p-6 rounded-2xl bg-white dark:bg-gray-800/50
        border ${styles.border} ${styles.hoverBorder}
        shadow-sm hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        group
      `}
    >
      {/* Step indicator */}
      <div
        className={`
          absolute -top-3 -left-3 w-8 h-8 rounded-full
          ${styles.stepBg} text-white
          flex items-center justify-center
          font-bold text-sm
          shadow-md
        `}
      >
        {step}
      </div>

      {/* Icon container */}
      <div
        className={`
          w-16 h-16 rounded-xl ${styles.iconBg}
          flex items-center justify-center
          mb-5 ${styles.iconColor}
          transition-transform duration-300
          group-hover:scale-110
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const FlowArrow = () => (
  <div className="hidden lg:flex items-center justify-center text-gray-300 dark:text-gray-600">
    <div className="relative">
      {/* Animated arrow */}
      <div className="animate-pulse">
        <ArrowIcon />
      </div>
      {/* Dashed line */}
      <div className="absolute top-1/2 -left-4 w-4 h-px bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
      <div className="absolute top-1/2 -right-4 w-4 h-px bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
    </div>
  </div>
);

// Mobile flow indicator (vertical)
const MobileFlowArrow = () => (
  <div className="flex lg:hidden items-center justify-center py-4 text-gray-300 dark:text-gray-600">
    <div className="rotate-90">
      <ArrowIcon />
    </div>
  </div>
);

export default function ProblemSolution() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              With Confidence
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your journey from confusion to clarity in three simple steps
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-4 items-center">
          {/* Card 1 - Problem */}
          <Card {...cards[0]} />

          {/* Arrow 1 */}
          <FlowArrow />
          <MobileFlowArrow />

          {/* Card 2 - Solution */}
          <Card {...cards[1]} />

          {/* Arrow 2 */}
          <FlowArrow />
          <MobileFlowArrow />

          {/* Card 3 - Result */}
          <Card {...cards[2]} />
        </div>

        {/* Bottom decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <svg
              className="w-5 h-5 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Trusted by 10,000+ developers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
