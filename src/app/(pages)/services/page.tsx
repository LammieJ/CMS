import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata(): Promise<Metadata> {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Portable Toilet Hire',
        url: 'https://chelfordmobileservices.co.uk/services/portable-toilet-hire',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Chelford Mobile Services'
        }
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Luxury Toilet Hire',
        url: 'https://chelfordmobileservices.co.uk/services/luxury-toilet-hire',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Chelford Mobile Services'
        }
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Event Solutions',
        url: 'https://chelfordmobileservices.co.uk/services/event-solutions',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Chelford Mobile Services'
        }
      }
    ]
  }

  return {
    title: 'Toilet Hire Services | Chelford Mobile Services',
    description: 'Comprehensive toilet hire solutions including portable toilets, luxury facilities, and event-specific solutions. Serving Chester and surrounding areas.',
    keywords: 'toilet hire services, portable toilets, luxury toilet hire, event toilets, Chester toilet hire',
    openGraph: {
      title: 'Toilet Hire Services | Chelford Mobile Services',
      description: 'Comprehensive toilet hire solutions for all your needs.',
      type: 'website',
    },
    alternates: {
      canonical: 'https://chelfordmobileservices.co.uk/services',
    },
    other: {
      'script[type="application/ld+json"]': JSON.stringify(jsonLd)
    }
  }
}

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      <p className="text-xl text-gray-700 mb-12">
        Discover our comprehensive range of toilet hire solutions, tailored to meet any requirement from construction sites to luxury events.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Link href="/services/portable-toilet-hire" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/portable-toilet.svg"
                alt="Standard portable toilet unit"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              Portable Toilet Hire
            </h2>
            <p className="text-gray-700">
              Reliable and clean portable toilet solutions for construction sites, outdoor work areas, and basic event needs.
            </p>
          </div>
        </Link>

        <Link href="/services/luxury-toilet-hire" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/luxury-toilet.svg"
                alt="Luxury toilet trailer interior"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              Luxury Toilet Hire
            </h2>
            <p className="text-gray-700">
              Premium toilet facilities perfect for weddings, corporate events, and VIP functions.
            </p>
          </div>
        </Link>

        <Link href="/services/event-solutions" className="group">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/event-toilets.svg"
                alt="Event setup with multiple toilet units"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              Event Solutions
            </h2>
            <p className="text-gray-700">
              Customized toilet hire packages for festivals, sporting events, and large gatherings.
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Our Services?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Reliable Service</h3>
            <p className="text-gray-700">
              Punctual delivery and collection with professional maintenance.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Local Coverage</h3>
            <p className="text-gray-700">
              Serving Chester and surrounding areas within a 40-mile radius.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-700">
              Well-maintained units meeting all hygiene standards.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Flexible Options</h3>
            <p className="text-gray-700">
              Solutions for any event size or duration.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  )
}
