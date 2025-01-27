import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portable Toilet Hire | Construction & Industrial Solutions | Chelford Mobile Services',
  description: 'Professional HSE-compliant portable toilet hire for construction sites, industrial areas and remote locations. Weekly servicing and flexible hire terms available.',
  keywords: [
    'portable toilets',
    'standard toilet hire',
    'construction site toilets',
    'portable toilet rental Chester',
    'affordable toilet hire',
    'building site facilities',
    'HSE compliant toilets',
    'event toilet hire',
    'outdoor toilet facilities',
    'weekly toilet servicing',
    'portable bathroom rental',
    'construction site facilities',
    'temporary toilet solutions',
    'toilet hire prices',
    'portable toilet maintenance'
  ],
  openGraph: {
    title: 'Professional Portable Toilet Hire | Construction & Industrial Solutions',
    description: 'HSE-compliant portable toilets for construction sites and industrial areas. Professional weekly servicing and flexible hire terms available.',
    url: 'https://chelfordmobileservices.co.uk/services/portable-toilet-hire',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/portable-toilet.jpeg',
        width: 800,
        height: 600,
        alt: 'Standard Portable Toilet Unit'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portable Toilet Hire | Construction & Industrial Solutions',
    description: 'HSE-compliant portable toilets with weekly servicing. Ideal for construction sites and industrial areas.',
    images: ['/images/portable-toilet.jpeg']
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/services/portable-toilet-hire'
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Portable Toilet Hire",
  "serviceType": "Portable Sanitation Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Chelford Mobile Services",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Cheshire",
      "addressCountry": "GB"
    }
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 53.2714,
      "longitude": -2.2698
    },
    "geoRadius": "64.37376" // 40 miles in kilometers
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "Daily Hire",
        "description": "Short-term portable toilet hire for events"
      },
      {
        "@type": "Offer",
        "name": "Weekly Hire",
        "description": "Weekly hire with servicing included"
      },
      {
        "@type": "Offer",
        "name": "Monthly Hire",
        "description": "Long-term hire with flexible terms"
      }
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Portable Toilet Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Construction Site Toilets",
          "description": "HSE-compliant portable toilets for construction sites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
        "name": "Industrial Toilets",
        "description": "Robust portable toilets for industrial and manufacturing sites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Long-term Hire",
          "description": "Flexible long-term toilet hire solutions"
        }
      }
    ]
  }
} as const

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in your portable toilet hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our portable toilet hire includes delivery, setup, weekly servicing (cleaning, waste removal, and restocking of supplies), and collection. Each unit comes with non-slip flooring, ventilation, internal lighting, paper towel holder, toilet paper holder, and hand sanitiser unit."
      }
    },
    {
      "@type": "Question",
      "name": "How often are the portable toilets serviced?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide weekly servicing as standard, which includes thorough cleaning, waste removal, and restocking of supplies. More frequent servicing can be arranged for high-usage situations."
      }
    },
    {
      "@type": "Question",
      "name": "Are your portable toilets HSE compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our portable toilets meet HSE regulations for construction sites and workplace facilities. They are regularly maintained and include all required features for compliance."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide portable toilet hire services within a 40-mile radius of Chester, covering major areas in Cheshire and surrounding regions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer long-term hire discounts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer competitive rates for long-term hire with flexible rental periods. Volume discounts are available for multiple units, and we provide special rates for extended hire periods."
      }
    }
  ]
} as const
