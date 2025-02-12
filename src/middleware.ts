import { NextResponse } from 'next/server'

export function middleware() {
  // Add security headers
  const response = NextResponse.next()
  
  // HSTS
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  )
  
  // XSS Protection
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  // Content Security Policy
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https://*.googleapis.com https://*.gstatic.com https://www.google-analytics.com; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://*.googleapis.com https://www.google-analytics.com; frame-src 'self' https://www.google.com;"
  )
  
  // X-Frame-Options
  response.headers.set('X-Frame-Options', 'DENY')
  
  // X-Content-Type-Options
  response.headers.set('X-Content-Type-Options', 'nosniff')
  
  // Referrer-Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // Permissions-Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
  )

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}
