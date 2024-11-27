import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Toilet Hire Locations | Chelford Mobile Services',
  description: 'Professional portable toilet hire services across Chester, Liverpool, Manchester and surrounding areas. Find reliable toilet solutions within a 40-mile radius.',
  keywords: [
    'toilet hire locations',
    'portable toilet rental',
    'event toilet hire',
    'construction site toilets',
    'Chester toilet hire',
    'Liverpool toilet hire',
    'Manchester toilet hire',
    'Northwest toilet hire',
    'local toilet rental',
    'mobile toilet services'
  ],
  openGraph: {
    title: 'Toilet Hire Locations | Chelford Mobile Services',
    description: 'Professional portable toilet hire services across Chester, Liverpool, Manchester and surrounding areas. Find reliable toilet solutions within a 40-mile radius.',
    url: 'https://chelfordmobileservices.co.uk/locations',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/locations'
  }
}

// Schema markup for the locations page
export const locationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Chelford Mobile Services',
  description: 'Professional portable toilet hire services across the Northwest of England',
  url: 'https://chelfordmobileservices.co.uk',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '07534 362251',
    email: 'info@chelfordmobileservices.co.uk',
    contactType: 'customer service'
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 53.2607,
      longitude: -2.4974
    },
    geoRadius: '64.37376', // 40 miles in kilometers
    description: '40-mile radius around Chester'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Toilet Hire Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Portable Toilets'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury Toilet Units'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event Solutions'
        }
      }
    ]
  }
}
