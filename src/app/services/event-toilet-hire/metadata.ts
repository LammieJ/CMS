import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Toilet Hire | Festival, Wedding & Corporate Event Facilities',
  description: 'Professional event toilet hire including accessible units and portable urinals. Perfect for festivals, weddings and corporate events. DDA compliant facilities available.',
  keywords: [
    'event toilet hire',
    'festival toilet hire',
    'wedding toilet facilities',
    'accessible event toilets',
    'DDA compliant toilets',
    'portable urinals hire',
    'corporate event facilities',
    'event bathroom rental',
    'outdoor event toilets',
    'luxury toilet trailers',
    'portable toilet hire events',
    'event sanitation solutions',
    'wheelchair accessible toilets',
    'festival bathroom facilities',
    'event toilet servicing'
  ],
  openGraph: {
    title: 'Professional Event Toilet Hire Solutions',
    description: 'Comprehensive event toilet hire including accessible units and portable urinals. Perfect for festivals, weddings and corporate events.',
    url: 'https://chelfordmobileservices.co.uk/services/event-toilet-hire',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/event-toilets.svg',
        width: 800,
        height: 600,
        alt: 'Professional Event Toilet Facilities'
      }
    ]
  }
}

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Event Toilet Hire",
  "description": "Professional event toilet hire solutions including accessible units and portable urinals. We provide high-quality, well-maintained facilities for festivals, weddings, and corporate events.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Chelford Mobile Services",
    "image": "https://chelfordmobileservices.co.uk/images/logo.svg",
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
    "geoRadius": "40000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Event Toilet Hire Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Festival Toilet Hire",
          "description": "High-capacity toilet solutions for music festivals and large events, including accessible units and portable urinals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wedding Toilet Hire",
          "description": "Luxury toilet facilities for outdoor weddings and receptions, with premium fittings and climate control"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Accessible Event Facilities",
          "description": "DDA compliant accessible toilets with extra space, support rails, and easy-access ramps"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Portable Urinal Hire",
          "description": "Efficient urinal solutions for high-traffic events, reducing queues and improving event flow"
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
      "name": "How many toilets do I need for my event?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The number of toilets needed depends on your event duration and guest count. As a general guide, we recommend 1 toilet per 75-100 guests for events up to 6 hours. Use our calculator for a precise recommendation based on your specific requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide accessible toilets for events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer DDA compliant accessible toilets suitable for wheelchair users and those with mobility requirements. These units feature extra space, support rails, and easy-access ramps."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the event toilet hire service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service includes delivery, setup, all necessary supplies (toilet paper, hand soap, etc.), regular servicing during the event, and collection. We also provide hand washing stations and can include attendant service upon request."
      }
    },
    {
      "@type": "Question",
      "name": "How often are the toilets serviced during events?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For events lasting multiple days, we provide daily servicing as standard. For high-traffic events, we can arrange more frequent servicing. Each service includes cleaning, waste removal, and restocking of supplies."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer luxury options for weddings?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide luxury toilet trailers specifically designed for weddings and upscale events. These feature premium fittings, climate control, vanity units, and can be styled to match your event theme."
      }
    }
  ]
} as const

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
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Event Toilet Hire",
      "item": "https://chelfordmobileservices.co.uk/services/event-toilet-hire"
    }
  ]
} as const
