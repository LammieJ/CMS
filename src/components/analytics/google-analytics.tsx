"use client"

import Script from 'next/script'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-7V1PZD2H6T'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}

function gtag(...args: any[]) {
  window.dataLayer.push(args)
}

export default function GoogleAnalytics() {
  useEffect(() => {
    try {
      window.dataLayer = window.dataLayer || []
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID, {
        page_path: window.location.pathname,
        transport_url: 'https://region1.google-analytics.com',
        send_page_view: true
      })
    } catch (error) {
      console.error('Google Analytics error:', error)
    }
  }, [])

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Script failed to load:', e)
        }}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Analytics script failed to load:', e)
        }}
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            transport_url: 'https://region1.google-analytics.com'
          });
        `}
      </Script>
    </>
  )
}
