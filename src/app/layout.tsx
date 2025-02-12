import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/layout/navigation-menu'
import { Footer } from '../components/layout/footer'
import { ThemeProvider } from '../components/theme/theme-provider'
import GoogleAnalytics from '../components/analytics/google-analytics'
import { AnimatedBackground } from '../components/ui/animated-background'
import { ServiceWorkerRegistration } from '../components/ServiceWorkerRegistration'
import Script from 'next/script'
import { websiteSchema, organizationSchema, localBusinessSchema } from './metadata'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0891b2',
}

export const metadata: Metadata = {
  title: {
    template: '%s | Toilet Hire Services',
    default: 'Professional Toilet Hire Services | Portable & Luxury Solutions',
  },
  description: 'Professional toilet hire services offering portable, luxury, and event-specific solutions. Serving Chester and surrounding areas within 40 miles. High-quality, hygienic facilities for all occasions.',
  keywords: [
    'portable toilet hire',
    'luxury toilet hire',
    'event toilet hire',
    'construction site toilets',
    'toilet trailer hire',
    'portable bathroom rental',
    'event sanitation solutions',
    'toilet hire Chester',
    'portable toilet rental',
    'wedding toilet hire',
    'festival toilet hire',
    'construction site facilities',
    'accessible toilet hire',
    'temporary toilet facilities',
    'mobile toilet services',
    'toilet hire Cheshire',
    'portable toilet hire Manchester',
    'event facilities hire',
    'construction site sanitation',
    'outdoor event facilities'
  ],
  authors: [{ name: 'Chelford Mobile Services' }],
  creator: 'Chelford Mobile Services',
  publisher: 'Chelford Mobile Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chelfordmobileservices.co.uk'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/logo.svg', sizes: '48x48 72x72 96x96 128x128 180x180 256x256', type: 'image/svg+xml' }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Professional Toilet Hire Services | Portable & Luxury Solutions',
    description: 'Professional toilet hire services offering portable, luxury, and event-specific solutions. Serving Chester and surrounding areas within 40 miles.',
    url: 'https://chelfordmobileservices.co.uk',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/cmstoilethire.jpg',
        width: 1200,
        height: 630,
        alt: 'Chelford Mobile Services - Professional Toilet Hire'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Toilet Hire Services | Portable & Luxury Solutions',
    description: 'Professional toilet hire services offering portable, luxury, and event-specific solutions. Serving Chester and surrounding areas within 40 miles.',
    images: ['/images/cmstoilethire.jpg']
  },
  verification: {
    google: 'verification_token',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" amp={process.env.NODE_ENV === 'production' ? '' : undefined}>
      <head>
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="geo.region" content="GB-CHE" />
        <meta name="geo.placename" content="Chester" />
        <meta name="geo.position" content="53.2707;-2.6963" />
        <meta name="ICBM" content="53.2707, -2.6963" />
        <GoogleAnalytics />
        <Script
          id="schema-metadata"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                websiteSchema,
                organizationSchema,
                localBusinessSchema
              ]
            })
          }}
        />
        {process.env.NODE_ENV === 'production' && (
          <style amp-boilerplate>{`body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`}</style>
        )}
      </head>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <ThemeProvider>
          <AnimatedBackground />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <ServiceWorkerRegistration />
      </body>
    </html>
  )
}
