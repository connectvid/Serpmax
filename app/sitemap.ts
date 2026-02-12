import { allArticles } from 'contentlayer/generated'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = allArticles
    .filter(article => article.published)
    .map((article) => ({
      url: `https://serpapis.com${article.url}`,
      lastModified: new Date(article.date),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

  return [
    {
      url: 'https://serpapis.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...articles,
  ]
}
