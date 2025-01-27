import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Toilet Hire Services | Construction, Events & Luxury Solutions',
  description: 'Comprehensive toilet hire solutions for all needs. From construction sites to luxury events, we provide reliable, high-quality facilities with professional service.',
  keywords: [
    'toilet hire services',
    'portable toilet rental',
    'luxury toilet hire',
    'event toilet solutions',
    'construction site facilities',
    'portable bathroom hire',
    'toilet trailer rental',
    'event sanitation',
    'HSE compliant toilets',
    'wedding toilet hire',
    'festival toilet facilities',
    'corporate event toilets',
    'temporary toilet solutions',
    'mobile toilet hire',
    'professional toilet services'
  ],
  openGraph: {
    title: 'Professional Toilet Hire Services | Chelford Mobile Services',
    description: 'Expert toilet hire solutions for construction, events, and luxury functions. Quality facilities and professional service guaranteed.',
    url: 'https://chelfordmobileservices.co.uk/services',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/portable-toilet.jpeg',
        width: 1200,
        height: 630,
        alt: 'Professional Toilet Hire Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Toilet Hire Services',
    description: 'Expert toilet hire solutions for all needs. Quality facilities and service guaranteed.',
    images: ['/images/portable-toilet.jpeg']
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/services'
  }
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://chelfordmobileservices.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://chelfordmobileservices.co.uk/services"
    }
  ]
} as const;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chelford Mobile Services",
  "url": "https://chelfordmobileservices.co.uk",
  "logo": "https://chelfordmobileservices.co.uk/images/logo.svg",
  "description": "Professional toilet hire services for construction sites, events, and luxury functions",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Cheshire",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "07534362251",
    "contactType": "customer service",
    "areaServed": "GB-CHE",
    "availableLanguage": "English"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 53.2714,
      "longitude": -2.2698
    },
    "geoRadius": "64.37376" // 40 miles in kilometers
  }
} as const;

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of toilet hire services do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer three main types of toilet hire services: Standard Portable Toilets for construction sites and outdoor events, Luxury Toilet Trailers for weddings and corporate functions, and comprehensive Event Solutions for festivals and large gatherings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide maintenance and servicing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our toilet hire services include regular maintenance and servicing. Standard units receive weekly servicing, while event solutions include on-site maintenance teams and emergency response services."
      }
    },
    {
      "@type": "Question",
      "name": "Are your toilets HSE compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all our portable toilets are fully HSE compliant and suitable for construction sites. We ensure all facilities meet current health and safety regulations and industry standards."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you cover?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide toilet hire services within a 40-mile radius of Chester, covering major areas in Cheshire and surrounding regions including Liverpool and Manchester."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in your luxury toilet hire service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our luxury toilet trailers include hotel-standard fixtures and fittings, climate control, hot running water, vanity areas with mirrors, premium toiletries, and optional attendant service. Perfect for weddings and corporate events."
      }
    }
  ]
} as const;
