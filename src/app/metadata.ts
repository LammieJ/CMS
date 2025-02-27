import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Toilet Hire Services | Portable & Luxury Solutions | Chelford Mobile Services',
  description: 'Leading provider of portable toilet hire services in Chester and surrounding areas. Specialising in events, construction sites, and luxury facilities. 24/7 support, competitive rates, and rapid delivery.',
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
  openGraph: {
    title: 'Professional Toilet Hire Services | Chelford Mobile Services',
    description: 'Leading provider of portable toilet hire services. Quality facilities for events, construction sites, and special occasions with 24/7 support.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Toilet Hire Services | Chelford Mobile Services',
    description: 'Quality portable toilet hire solutions with 24/7 support and rapid delivery.',
    images: ['/images/cmstoilethire.jpg']
  },
  verification: {
    google: 'verification_token'
  },
  category: 'Toilet Hire Services',
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
  }
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chelford Mobile Services",
  "url": "https://chelfordmobileservices.co.uk",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://chelfordmobileservices.co.uk/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Chelford Mobile Services",
  "url": "https://chelfordmobileservices.co.uk",
  "logo": "https://chelfordmobileservices.co.uk/images/logo.svg",
  "image": "https://chelfordmobileservices.co.uk/images/cmstoilethire.jpg",
  "description": "Professional portable toilet hire services for events, construction sites, and special occasions across Cheshire and surrounding areas.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Cheshire",
    "addressCountry": "GB",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 53.2707,
        "longitude": -2.6963
      },
      "geoRadius": "40mi"
    }
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.2707,
    "longitude": -2.6963
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "07534362251",
      "contactType": "customer service",
      "areaServed": "GB-CHE",
      "availableLanguage": "English",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "ContactPoint",
      "telephone": "07534362251",
      "contactType": "emergency",
      "areaServed": "GB-CHE",
      "availableLanguage": "English",
      "contactOption": "HearingImpairedSupported",
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    }
  ],
  "sameAs": [
    "https://www.facebook.com/chelfordmobileservices",
    "https://twitter.com/chelfordmobile",
    "https://www.linkedin.com/company/chelford-mobile-services"
  ],
  "award": [
    "Licensed Waste Carrier",
    "Environmental Agency Approved",
    "HSE Compliant"
  ],
  "priceRange": "££",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Toilet Hire Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Portable Toilets",
          "description": "High-quality standard portable toilets suitable for various events and sites",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 53.2707,
              "longitude": -2.6963
            },
            "geoRadius": "40mi"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Toilet Units",
          "description": "Premium luxury toilet trailers perfect for weddings and corporate events",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 53.2707,
              "longitude": -2.6963
            },
            "geoRadius": "40mi"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Event Solutions",
          "description": "Complete toilet hire solutions for events of all sizes",
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 53.2707,
              "longitude": -2.6963
            },
            "geoRadius": "40mi"
          }
        }
      }
    ]
  }
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Chelford Mobile Services",
  "image": "https://chelfordmobileservices.co.uk/images/cmstoilethire.jpg",
  "@id": "https://chelfordmobileservices.co.uk",
  "url": "https://chelfordmobileservices.co.uk",
  "telephone": "07534362251",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Cheshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.2707,
    "longitude": -2.6963
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/chelfordmobileservices",
    "https://twitter.com/chelfordmobile",
    "https://www.linkedin.com/company/chelford-mobile-services"
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 53.2707,
      "longitude": -2.6963
    },
    "geoRadius": "40mi"
  }
}
