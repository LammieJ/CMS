import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local Toilet Hire Services | Coverage Areas | Chelford Mobile Services',
  description: 'Professional portable toilet hire services across Chester, Liverpool, Manchester and surrounding areas. Local experts providing reliable toilet solutions within 40 miles. Same-day delivery available.',
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
    'mobile toilet services',
    'same day toilet hire',
    'emergency toilet rental',
    'accessible toilet facilities',
    'luxury toilet hire',
    'event sanitation solutions'
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
  logo: 'https://chelfordmobileservices.co.uk/images/logo.svg',
  image: [
    'https://chelfordmobileservices.co.uk/images/portable-toilet.jpeg',
    'https://chelfordmobileservices.co.uk/images/cmstoilethire.jpg'
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '07534 362251',
      email: 'info@chelfordmobileservices.co.uk',
      contactType: 'customer service',
      areaServed: 'GB-CHE',
      availableLanguage: 'English'
    },
    {
      '@type': 'ContactPoint',
      telephone: '07534 362251',
      contactType: 'emergency',
      areaServed: 'GB-CHE',
      availableLanguage: 'English',
      contactOption: 'HearingImpairedSupported'
    }
  ],
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 53.2607,
        longitude: -2.4974
      },
      geoRadius: '64.37376', // 40 miles in kilometers
      description: '40-mile radius around Chester'
    },
    {
      '@type': 'State',
      name: 'Cheshire',
      '@id': 'https://www.wikidata.org/wiki/Q23090'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Toilet Hire Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Standard Portable Toilets',
          description: 'High-quality standard portable toilets with regular servicing included',
          areaServed: 'Northwest England',
          availableAtOrFrom: {
            '@type': 'Place',
            name: 'Chelford Mobile Services Depot',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Cheshire',
              addressCountry: 'GB'
            }
          }
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Luxury Toilet Units',
          description: 'Premium luxury toilet trailers for weddings and corporate events',
          areaServed: 'Northwest England'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event Solutions',
          description: 'Complete toilet hire solutions for events of all sizes',
          areaServed: 'Northwest England'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Construction Site Facilities',
          description: 'HSE compliant toilet facilities for construction sites',
          areaServed: 'Northwest England'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency Toilet Hire',
          description: '24/7 emergency toilet hire service with rapid response',
          areaServed: 'Northwest England'
        }
      }
    ]
  },
  award: [
    {
      '@type': 'Award',
      name: 'Waste Carrier License',
      description: 'Licensed waste carrier by the Environment Agency'
    }
  ],
  slogan: 'Professional Toilet Hire Solutions Across the Northwest',
  foundingDate: '2003',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: '10',
    maxValue: '50'
  },
  knowsLanguage: ['en-GB'],
  currenciesAccepted: 'GBP',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  openingHours: 'Mo-Su 00:00-23:59'
}
