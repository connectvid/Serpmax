import { NextRequest, NextResponse } from 'next/server'

// This route handles TinaCMS API requests in self-hosted mode
// It proxies requests to the local TinaCMS server during development

export async function GET(request: NextRequest) {
  return handleRequest(request)
}

export async function POST(request: NextRequest) {
  return handleRequest(request)
}

async function handleRequest(request: NextRequest) {
  const url = new URL(request.url)
  const pathname = url.pathname.replace('/api/tina', '')

  // Proxy to local TinaCMS server
  const tinaUrl = `http://localhost:4001${pathname}${url.search}`

  try {
    const headers: HeadersInit = {}
    request.headers.forEach((value, key) => {
      if (key !== 'host') {
        headers[key] = value
      }
    })

    const body = request.method === 'POST' ? await request.text() : undefined

    const response = await fetch(tinaUrl, {
      method: request.method,
      headers,
      body,
    })

    const data = await response.text()

    return new NextResponse(data, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/json',
      },
    })
  } catch (error) {
    console.error('TinaCMS proxy error:', error)
    return NextResponse.json(
      { error: 'TinaCMS server not available. Make sure to run tinacms dev.' },
      { status: 503 }
    )
  }
}
