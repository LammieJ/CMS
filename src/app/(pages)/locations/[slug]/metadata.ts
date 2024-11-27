import { Metadata } from 'next'
import { generateLocationContent } from '@/lib/openai'
import { locationData } from '../location-data'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = locationData[params.slug]
  if (!location) {
    return {
      title: 'Location Not Found',
      description: 'The requested location could not be found.'
    }
  }

  const seoContent = await generateLocationContent(location.name, location.areas)
  if (!seoContent) {
    // Enhanced fallback metadata
    return {
      title: `Toilet Hire in ${location.name} | Expert Portable Toilet Services`,
      description: `Professional toilet hire services in ${location.name}. Quality facilities for events, construction sites, and more. Local, reliable service with 24/7 support. Serving ${location.areas.slice(0, 3).join(', ')} and beyond.`,
      keywords: [
        `${location.name.toLowerCase()} toilet hire`,
        'portable toilet rental',
        'event toilet hire',
        'construction site toilets',
        'local toilet hire',
        'mobile toilet services',
        'luxury toilet facilities',
        'disabled access toilets',
        'portable bathroom rental',
        'event sanitation solutions'
      ],
      openGraph: {
        title: `Professional Toilet Hire in ${location.name} | Chelford Mobile Services`,
        description: `Expert toilet hire services in ${location.name}. Quality portable toilets, luxury facilities, and reliable support for events and construction sites.`,
        url: `https://chelfordmobileservices.co.uk/locations/${params.slug}`,
        siteName: 'Chelford Mobile Services',
        locale: 'en_GB',
        type: 'website',
        images: [{
          url: '/images/portable-toilet.svg',
          width: 1200,
          height: 630,
          alt: `Toilet Hire Services in ${location.name}`
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: `Toilet Hire in ${location.name} | Chelford Mobile Services`,
        description: `Professional toilet hire services in ${location.name}. Quality facilities and 24/7 support.`,
        images: ['/images/portable-toilet.svg']
      },
      alternates: {
        canonical: `https://chelfordmobileservices.co.uk/locations/${params.slug}`
      }
    }
  }

  return {
    title: seoContent.title,
    description: seoContent.metaDescription,
    keywords: seoContent.keywords,
    openGraph: {
      title: seoContent.title,
      description: seoContent.metaDescription,
      url: `https://chelfordmobileservices.co.uk/locations/${params.slug}`,
      siteName: 'Chelford Mobile Services',
      locale: 'en_GB',
      type: 'website',
      images: [{
        url: '/images/portable-toilet.svg',
        width: 1200,
        height: 630,
        alt: `Toilet Hire Services in ${location.name}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoContent.title,
      description: seoContent.metaDescription,
      images: ['/images/portable-toilet.svg']
    },
    alternates: {
      canonical: `https://chelfordmobileservices.co.uk/locations/${params.slug}`
    }
  }
}

export function generateLocationSchema(locationName: string, areas: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://chelfordmobileservices.co.uk/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    name: `Chelford Mobile Services - ${locationName}`,
    description: `Professional portable toilet hire services in ${locationName} and surrounding areas. Specializing in events, construction sites, and luxury facilities.`,
    url: `https://chelfordmobileservices.co.uk/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: '07534 362251',
    email: 'info@chelfordmobileservices.co.uk',
    priceRange: '££',
    areaServed: {
      '@type': 'City',
      name: locationName,
      containsPlace: areas.map(area => ({
        '@type': 'Place',
        name: area
      }))
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'Cheshire'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.2714,
      longitude: -2.2698
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Toilet Hire Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Standard Portable Toilets',
            description: 'High-quality standard portable toilets suitable for various events and sites'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Toilet Units',
            description: 'Premium luxury toilet trailers perfect for weddings and corporate events'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Disabled Access Toilets',
            description: 'Accessible toilet facilities compliant with regulations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Construction Site Toilets',
            description: 'Durable toilet units designed for construction sites'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Solutions',
            description: 'Complete toilet hire solutions for events of all sizes'
          }
        }
      ]
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://www.facebook.com/chelfordmobileservices',
      'https://twitter.com/chelfordmobile',
      'https://www.linkedin.com/company/chelford-mobile-services'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    }
  }
}
