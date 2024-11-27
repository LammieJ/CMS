import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '../components/layout/navigation-menu'
import { Footer } from '../components/layout/footer'
import { ThemeProvider } from '../components/theme/theme-provider'
import GoogleAnalytics from '../components/analytics/google-analytics'

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
  keywords: ['Toilet Hire Services', 'Portable Toilet Rental', 'Luxury Toilets', 'Event Toilets Chester', 'Construction Site Toilets', 'Wedding Toilet Hire'],
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
      { url: '/favicon.svg' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Professional Toilet Hire Services | Portable & Luxury Solutions',
    description: 'Professional toilet hire services offering portable, luxury, and event-specific solutions. Serving Chester and surrounding areas within 40 miles.',
    url: 'https://chelfordmobileservices.co.uk',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <GoogleAnalytics />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
