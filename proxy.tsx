// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone()
  // normalize pathname: remove trailing slashes
  const pathname = url.pathname.replace(/\/+$/, '') || '/'

  // Allow the canonical path
  if (pathname.startsWith('/ultimate-cbe')) return NextResponse.next()

  // Exclude common static/next internals and API routes so they continue to work
  // Adjust these rules if you want to include/exclude more paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' ||
    pathname.includes('.') // likely a static file (e.g. /sitemap.xml, /robots.txt, /file.png)
  ) {
    return NextResponse.next()
  }

  // preserve search params when redirecting
  const target = req.nextUrl.clone()
  target.pathname = '/ultimate-cbe'
  // Optionally preserve original path in a query param:
  // target.searchParams.set('from', pathname + req.nextUrl.search)

  return NextResponse.redirect(target)
}

// Run middleware for all paths. You can tighten the matcher if desired.
export const config = {
  matcher: ['/:path*'],
}