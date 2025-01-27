import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Toilet Solutions | Festival & Large Event Facilities | Chelford Mobile Services',
  description: 'Expert event toilet solutions for festivals, sporting events, and large gatherings. Professional planning support, 24/7 maintenance, and custom configurations available. Get a tailored quote today.',
  keywords: [
    'event toilets',
    'festival toilet rental',
    'party toilets',
    'marathon facilities',
    'event sanitation',
    'large event toilets',
    'outdoor event facilities',
    'festival sanitation',
    'event planning support',
    'portable toilet hire',
    'event facilities',
    'temporary toilet solutions',
    'event bathroom rental',
    'outdoor event services',
    'event infrastructure'
  ],
  openGraph: {
    title: 'Event Toilet Solutions | Professional Event Planning Support | Chelford Mobile Services',
    description: 'Complete event sanitation solutions with expert planning support. Perfect for festivals, sporting events, and large gatherings.',
    url: 'https://chelfordmobileservices.co.uk/services/event-solutions',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/event-toilets.svg',
        width: 1200,
        height: 630,
        alt: 'Event Toilet Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Event Toilet Solutions',
    description: 'Expert event sanitation solutions with comprehensive planning support.',
    images: ['/images/event-toilets.svg']
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/services/event-solutions'
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Event Toilet Solutions",
  "serviceType": "Event Sanitation Services",
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
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "Small Events Package",
        "description": "Up to 250 guests - 4-6 units recommended"
      },
      {
        "@type": "Offer",
        "name": "Medium Events Package",
        "description": "250-500 guests - 8-12 units recommended"
      },
      {
        "@type": "Offer",
        "name": "Large Events Package",
        "description": "500-1000 guests - 15-20 units recommended"
      },
      {
        "@type": "Offer",
        "name": "Festival Package",
        "description": "1000+ guests - Custom configuration available"
      }
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Toilet Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Festival Solutions",
          "description": "Comprehensive sanitation solutions for music festivals and cultural events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sporting Events",
          "description": "Mobile facilities for marathons and outdoor competitions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Events",
          "description": "Tailored solutions for garden parties and community events"
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
      "name": "How many toilet units do I need for my event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of units needed depends on several factors: For events up to 250 guests, we recommend 4-6 units; 250-500 guests need 8-12 units; and 500-1000 guests require 15-20 units. For festivals over 1000 guests, we provide custom configurations. Final numbers may vary based on event duration, alcohol service, and other specific factors."
      }
    },
    {
      "@type": "Question",
      "name": "What event support services do you provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We provide comprehensive event support including professional site assessment, capacity planning, dedicated event managers, on-site maintenance teams, 24/7 emergency response, regular servicing, consumables management, and end-of-event cleanup."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer site planning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our site planning services include professional site assessment, capacity planning, access route planning, service schedule planning, health & safety compliance checks, and environmental considerations to ensure optimal facility placement and event success."
      }
    },
    {
      "@type": "Question",
      "name": "What types of events do you cater to?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We cater to a wide range of events including music festivals, sporting events (marathons, tournaments), private parties, community events, cultural gatherings, and corporate functions. Each solution is tailored to the specific event requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Is on-site maintenance included?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide on-site maintenance teams for events, including regular servicing, consumables restocking, and emergency response service. For larger events, we offer 24/7 maintenance coverage to ensure facilities remain clean and functional throughout."
      }
    }
  ]
} as const;
