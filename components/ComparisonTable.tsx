'use client'

import { useState } from 'react'
import Link from 'next/link'

type SortDirection = 'asc' | 'desc' | null
type SortColumn = 'name' | 'price' | 'searches' | 'responseTime' | 'accuracy' | null

interface ApiData {
  id: number
  name: string
  price: string
  priceValue: number // for sorting
  searches: string
  searchesValue: number // for sorting
  responseTime: string
  responseTimeValue: number // for sorting
  accuracy: string
  accuracyValue: number // for sorting
  bestFor: string
  link: string
}

const apiData: ApiData[] = [
  {
    id: 1,
    name: 'SerpApi',
    price: '$50',
    priceValue: 50,
    searches: '5,000',
    searchesValue: 5000,
    responseTime: '2.1s',
    responseTimeValue: 2.1,
    accuracy: '99.9%',
    accuracyValue: 99.9,
    bestFor: 'Production apps',
    link: '/compare/serpapi',
  },
  {
    id: 2,
    name: 'ScrapingBee',
    price: '$29',
    priceValue: 29,
    searches: '1,000',
    searchesValue: 1000,
    responseTime: '1.8s',
    responseTimeValue: 1.8,
    accuracy: '99.5%',
    accuracyValue: 99.5,
    bestFor: 'Small projects',
    link: '/compare/scrapingbee',
  },
  {
    id: 3,
    name: 'Bright Data',
    price: 'Custom',
    priceValue: 999999, // Sort custom pricing last
    searches: 'Unlimited',
    searchesValue: 999999,
    responseTime: '0.8s',
    responseTimeValue: 0.8,
    accuracy: '99.99%',
    accuracyValue: 99.99,
    bestFor: 'Enterprise',
    link: '/compare/bright-data',
  },
  {
    id: 4,
    name: 'Oxylabs',
    price: '$99',
    priceValue: 99,
    searches: '10,000',
    searchesValue: 10000,
    responseTime: '1.2s',
    responseTimeValue: 1.2,
    accuracy: '99.8%',
    accuracyValue: 99.8,
    bestFor: 'High volume',
    link: '/compare/oxylabs',
  },
  {
    id: 5,
    name: 'Zenrows',
    price: '$69',
    priceValue: 69,
    searches: '5,000',
    searchesValue: 5000,
    responseTime: '1.5s',
    responseTimeValue: 1.5,
    accuracy: '99.7%',
    accuracyValue: 99.7,
    bestFor: 'Scraping',
    link: '/compare/zenrows',
  },
]

interface SortIndicatorProps {
  column: SortColumn
  currentSort: SortColumn
  direction: SortDirection
}

function SortIndicator({ column, currentSort, direction }: SortIndicatorProps) {
  const isActive = currentSort === column

  return (
    <span className="inline-flex flex-col ml-1">
      <svg
        className={`w-3 h-3 -mb-1 ${isActive && direction === 'asc' ? 'text-indigo-500' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 5l-8 8h16z" />
      </svg>
      <svg
        className={`w-3 h-3 ${isActive && direction === 'desc' ? 'text-indigo-500' : 'text-gray-300 dark:text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 19l8-8H4z" />
      </svg>
    </span>
  )
}

export default function ComparisonTable() {
  const [sortColumn, setSortColumn] = useState<SortColumn>(null)
  const [sortDirection, setSortDirection] = useState<SortDirection>(null)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  const handleSort = (column: SortColumn) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc')
      } else if (sortDirection === 'desc') {
        setSortColumn(null)
        setSortDirection(null)
      }
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const getSortedData = () => {
    if (!sortColumn || !sortDirection) return apiData

    return [...apiData].sort((a, b) => {
      let aValue: number
      let bValue: number

      switch (sortColumn) {
        case 'name':
          return sortDirection === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        case 'price':
          aValue = a.priceValue
          bValue = b.priceValue
          break
        case 'searches':
          aValue = a.searchesValue
          bValue = b.searchesValue
          break
        case 'responseTime':
          aValue = a.responseTimeValue
          bValue = b.responseTimeValue
          break
        case 'accuracy':
          aValue = a.accuracyValue
          bValue = b.accuracyValue
          break
        default:
          return 0
      }

      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue
    })
  }

  const sortedData = getSortedData()

  const headerClass = "px-4 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors select-none whitespace-nowrap"

  return (
    <section className="comparison-table py-16 md:py-24 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Quick API Comparison
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Compare the leading SERP API providers side by side. Find the perfect solution for your project based on price, performance, and features.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-soft">
          <table className="w-full min-w-[800px]">
            <thead className="sticky top-0 bg-gray-50 dark:bg-dark-700 border-b border-gray-200 dark:border-dark-600 z-10">
              <tr>
                <th
                  className={headerClass}
                  onClick={() => handleSort('name')}
                >
                  <span className="inline-flex items-center">
                    API Name
                    <SortIndicator column="name" currentSort={sortColumn} direction={sortDirection} />
                  </span>
                </th>
                <th
                  className={headerClass}
                  onClick={() => handleSort('price')}
                >
                  <span className="inline-flex items-center">
                    Price/mo
                    <SortIndicator column="price" currentSort={sortColumn} direction={sortDirection} />
                  </span>
                </th>
                <th
                  className={headerClass}
                  onClick={() => handleSort('searches')}
                >
                  <span className="inline-flex items-center">
                    Searches
                    <SortIndicator column="searches" currentSort={sortColumn} direction={sortDirection} />
                  </span>
                </th>
                <th
                  className={headerClass}
                  onClick={() => handleSort('responseTime')}
                >
                  <span className="inline-flex items-center">
                    Response Time
                    <SortIndicator column="responseTime" currentSort={sortColumn} direction={sortDirection} />
                  </span>
                </th>
                <th
                  className={headerClass}
                  onClick={() => handleSort('accuracy')}
                >
                  <span className="inline-flex items-center">
                    Accuracy
                    <SortIndicator column="accuracy" currentSort={sortColumn} direction={sortDirection} />
                  </span>
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                  Best For
                </th>
                <th className="px-4 py-4 text-center text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-dark-700">
              {sortedData.map((api) => (
                <tr
                  key={api.id}
                  className={`transition-colors duration-150 ${
                    hoveredRow === api.id
                      ? 'bg-indigo-50 dark:bg-indigo-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-dark-700/50'
                  }`}
                  onMouseEnter={() => setHoveredRow(api.id)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-4 py-4">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {api.name}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`font-medium ${api.price === 'Custom' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'}`}>
                      {api.price}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-400">
                    {api.searches}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      api.responseTimeValue <= 1
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : api.responseTimeValue <= 1.5
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {api.responseTime}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">
                      {api.accuracy}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-gray-600 dark:text-gray-400 italic">
                    &quot;{api.bestFor}&quot;
                  </td>
                  <td className="px-4 py-4 text-center">
                    <Link
                      href={api.link}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {sortedData.map((api) => (
            <div
              key={api.id}
              className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-5 shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {api.name}
                </h3>
                <span className={`text-lg font-semibold ${api.price === 'Custom' ? 'text-purple-600 dark:text-purple-400' : 'text-indigo-600 dark:text-indigo-400'}`}>
                  {api.price}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Searches</span>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{api.searches}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Response Time</span>
                  <p className="text-sm">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      api.responseTimeValue <= 1
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : api.responseTimeValue <= 1.5
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
                    }`}>
                      {api.responseTime}
                    </span>
                  </p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Accuracy</span>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{api.accuracy}</p>
                </div>
                <div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Best For</span>
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">&quot;{api.bestFor}&quot;</p>
                </div>
              </div>

              <Link
                href={api.link}
                className="block w-full py-2.5 text-center text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>

        {/* View Full Comparison Link */}
        <div className="mt-10 text-center">
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group"
          >
            View Full Comparison
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
