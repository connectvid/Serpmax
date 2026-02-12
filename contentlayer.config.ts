import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `articles/**/*.md`,
  contentType: 'markdown',
  fields: {
    title: {
      type: 'string',
      required: true,
      description: 'Article title (SEO)',
    },
    description: {
      type: 'string',
      required: true,
      description: 'Meta description (150-160 chars)',
    },
    date: {
      type: 'date',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
      description: 'URL slug (lowercase, hyphens only)',
    },
    keywords: {
      type: 'list',
      of: { type: 'string' },
      description: 'SEO keywords',
    },
    author: {
      type: 'string',
      default: 'Serpmax Team',
    },
    image: {
      type: 'string',
      description: 'Featured image URL',
    },
    published: {
      type: 'boolean',
      default: true,
      description: 'Publish status',
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (article) => `/${article.slug}`,
    },
    readingTime: {
      type: 'number',
      resolve: (article) => {
        const wordsPerMinute = 200
        const wordCount = article.body.raw.split(/\s+/g).length
        return Math.ceil(wordCount / wordsPerMinute)
      },
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Article],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})
