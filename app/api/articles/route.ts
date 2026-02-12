import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { createOrUpdateArticle, listArticles } from '@/lib/github'
import { validateSlug, sanitizeSlug } from '@/lib/validators'

const API_KEY = process.env.ARTICLE_API_KEY

// Rate limiting (simple in-memory, use Redis in production)
const rateLimits = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now()
  const limit = rateLimits.get(ip)

  if (limit && limit.resetAt > now) {
    if (limit.count >= 10) {
      return {
        allowed: false,
        message: 'Rate limit exceeded. Try again in 1 minute.',
      }
    }
    limit.count++
  } else {
    rateLimits.set(ip, { count: 1, resetAt: now + 60000 }) // 1 minute
  }

  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // 1. Verify API key
    const authHeader = request.headers.get('authorization')
    const providedKey = authHeader?.replace('Bearer ', '')

    if (!providedKey || providedKey !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized - Invalid API key' },
        { status: 401 }
      )
    }

    // 2. Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const rateCheck = checkRateLimit(ip)
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { error: rateCheck.message },
        { status: 429 }
      )
    }

    // 3. Parse request body
    const body = await request.json()
    let {
      title,
      description,
      date,
      slug,
      keywords = [],
      author = 'Serpmax Team',
      image,
      content,
      published = true,
    } = body

    // 4. Validate required fields
    if (!title || !description || !slug || !content) {
      return NextResponse.json(
        {
          error: 'Missing required fields',
          required: ['title', 'description', 'slug', 'content'],
        },
        { status: 400 }
      )
    }

    // 5. Sanitize and validate slug
    slug = sanitizeSlug(slug)
    const slugValidation = validateSlug(slug)
    if (!slugValidation.valid) {
      return NextResponse.json(
        { error: slugValidation.error },
        { status: 400 }
      )
    }

    // 6. Create markdown with frontmatter
    const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${date || new Date().toISOString().split('T')[0]}"
slug: "${slug}"
keywords: ${JSON.stringify(keywords)}
author: "${author}"
${image ? `image: "${image}"` : ''}
published: ${published}
---

${content}`

    // 7. Create/update file via GitHub API
    const result = await createOrUpdateArticle(slug, frontmatter)

    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      )
    }

    // 8. Revalidate blog pages (instant visibility!)
    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)

    // 9. Return success
    return NextResponse.json(
      {
        success: true,
        message: result.message,
        slug,
        url: `/blog/${slug}`,
        sha: result.sha,
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify API key
    const authHeader = request.headers.get('authorization')
    const providedKey = authHeader?.replace('Bearer ', '')

    if (!providedKey || providedKey !== API_KEY) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // List all articles
    const slugs = await listArticles()

    return NextResponse.json({
      articles: slugs,
      total: slugs.length,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
