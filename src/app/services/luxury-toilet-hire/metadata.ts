import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Luxury Toilet Hire | Premium Wedding & VIP Facilities | Chelford Mobile Services',
  description: 'Premium luxury toilet trailers for weddings, corporate events and VIP gatherings. Hotel-standard facilities with luxury amenities, attendant service, and climate control. Get a quote today.',
  keywords: [
    'luxury toilet trailers',
    'VIP toilet hire',
    'wedding toilets',
    'premium portable toilets',
    'corporate event facilities',
    'luxury bathroom hire',
    'wedding facilities Chester',
    'executive toilet hire',
    'high-end portable bathrooms',
    'luxury event facilities',
    'premium toilet trailers',
    'wedding venue facilities',
    'VIP bathroom hire',
    'luxury mobile toilets',
    'premium event services'
  ],
  openGraph: {
    title: 'Luxury Toilet Hire | Premium Wedding & VIP Facilities | Chelford Mobile Services',
    description: 'Premium luxury toilet trailers with hotel-standard amenities. Perfect for weddings, corporate events and VIP gatherings.',
    url: 'https://chelfordmobileservices.co.uk/services/luxury-toilet-hire',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/luxury-toilet.svg',
        width: 1200,
        height: 630,
        alt: 'Luxury Toilet Trailer Interior'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Luxury Toilet Hire Solutions',
    description: 'Hotel-standard portable bathroom facilities for prestigious events.',
    images: ['/images/luxury-toilet.svg']
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/services/luxury-toilet-hire'
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Luxury Toilet Hire",
  "serviceType": "Premium Portable Sanitation Services",
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
    "geoRadius": "64.37376"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "offerCount": "3",
    "offers": [
      {
        "@type": "Offer",
        "name": "2+1 Luxury Trailer",
        "description": "2 Ladies, 1 Gents + Urinal - Ideal for up to 80 guests"
      },
      {
        "@type": "Offer",
        "name": "3+2 Luxury Trailer",
        "description": "3 Ladies, 2 Gents + Urinal - Perfect for up to 150 guests"
      },
      {
        "@type": "Offer",
        "name": "Luxury Suite",
        "description": "Multiple configurations - Suitable for 200+ guests"
      }
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Luxury Toilet Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Facilities",
          "description": "Elegant bathroom trailers with bridal preparation area and premium amenities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Events",
          "description": "Executive-level facilities with professional attendant service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "VIP Functions",
          "description": "Highest specification units with luxury amenities and dedicated attendant"
        }
      }
    ]
  }
} as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What amenities are included in your luxury toilet trailers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our luxury toilet trailers include hotel-standard fixtures and fittings, climate control, hot running water, vanity mirrors with LED lighting, premium toiletries, hardwood effect flooring, and background music system. Optional extras include fresh flower arrangements and personalized signage."
      }
    },
    {
      "@type": "Question",
      "name": "How many guests can your luxury trailers accommodate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer various sizes: 2+1 trailer (up to 80 guests), 3+2 trailer (up to 150 guests), and Luxury Suite configurations suitable for 200+ guests. We can advise on the best option based on your event duration and guest numbers."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide attendants for luxury toilet hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer professional attendant service as an option for all luxury hires. Attendants ensure facilities remain pristine throughout your event, restock supplies, and assist guests as needed."
      }
    },
    {
      "@type": "Question",
      "name": "What special features are available for wedding hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our wedding facilities include a dedicated bridal preparation area, vanity stations with beauty lighting, premium toiletries, full-length mirrors, and optional extras like fresh flower arrangements and matching décor to complement your wedding theme."
      }
    },
    {
      "@type": "Question",
      "name": "Can the luxury units be customized for corporate events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer corporate branding options, executive finishing, and multiple unit configurations. Professional attendant service is available, and we can customize amenities to match your corporate requirements."
      }
    }
  ]
} as const;
