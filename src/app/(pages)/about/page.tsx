import { Metadata } from 'next'
import Link from 'next/link'

export const generateMetadata = (): Metadata => {
  return {
    title: 'About Chelford Mobile Services | Leading Sustainable Toilet Hire Solutions',
    description: 'Discover our 20+ years of expertise in sustainable toilet hire solutions. Family-owned business serving Chester and surrounding areas with eco-friendly portable sanitation services.',
    keywords: 'about Chelford Mobile Services, sustainable toilet hire, portable toilet experts, Chester toilet hire, eco-friendly sanitation, family business Chester, toilet hire team, green sanitation solutions',
    openGraph: {
      title: 'About Chelford Mobile Services | Leading Sustainable Toilet Hire Solutions',
      description: 'Your trusted partner in sustainable toilet hire services - family-owned, eco-conscious, and committed to excellence.',
      type: 'website',
      images: [
        {
          url: '/images/about-team.jpg',
          width: 1200,
          height: 630,
          alt: 'Chelford Mobile Services Team'
        }
      ]
    },
    alternates: {
      canonical: 'https://chelfordmobileservices.co.uk/about',
    },
    other: {
      'script[type="application/ld+json"]': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        mainEntity: {
          '@type': 'LocalBusiness',
          name: 'Chelford Mobile Services',
          description: 'Family-owned sustainable toilet hire services provider serving Chester and surrounding areas since 2000.',
          foundingDate: '2000',
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 53.1937,
              longitude: -2.8931
            },
            geoRadius: '40 mi'
          },
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Chester',
            addressRegion: 'Cheshire',
            addressCountry: 'UK'
          },
          award: [
            'Environmental Excellence Award 2023',
            'Best Local Service Provider 2022'
          ],
          slogan: 'Sustainable Sanitation Solutions for Every Occasion',
          knowsAbout: [
            'Portable Toilet Hire',
            'Event Sanitation',
            'Construction Site Facilities',
            'Luxury Toilet Trailers',
            'Sustainable Waste Management'
          ],
          sameAs: [
            'https://chelfordmobileservices.co.uk'
          ]
        }
      })
    }
  }
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Chelford Mobile Services</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Local Family-Owned Sanitation Partner</h2>
          <p className="text-gray-700 mb-4">
            Since our establishment, Chelford Mobile Services has been at the forefront of providing premium, sustainable toilet hire solutions across Chester and surrounding areas. As a family-owned business, we take immense pride in delivering personalized service that larger corporations simply can't match.
          </p>
          <p className="text-gray-700 mb-4">
            We understand that reliable, clean sanitation is crucial for any event or project's success. That's why we've invested in state-of-the-art units and developed rigorous maintenance protocols that exceed industry standards. Our commitment to excellence has earned us the trust of countless clients, from local event organizers to major construction companies.
          </p>
        </div>
        <div className="relative h-[300px] bg-gray-100 rounded-lg overflow-hidden">
          {/* Placeholder for team image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            [Image: Our dedicated team with our modern toilet hire fleet]
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To revolutionize portable sanitation through sustainable practices and exceptional service, ensuring comfort and dignity for all our customers while protecting our environment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Values</h3>
          <p className="text-gray-700">
            Sustainability, reliability, and customer satisfaction drive every decision we make. We believe in transparent pricing, honest communication, and going the extra mile for our clients.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Our Promise</h3>
          <p className="text-gray-700">
            We guarantee spotless units, timely service, and 24/7 support. When you choose Chelford, you're choosing peace of mind and unmatched professionalism.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Why Choose Chelford?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Experience & Expertise</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Over 20 years of industry experience</li>
              <li>Fully trained and certified team members</li>
              <li>Comprehensive service coverage</li>
              <li>Deep understanding of local requirements</li>
              <li>Regular staff training and development</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Stringent maintenance protocols</li>
              <li>Industry-leading hygiene standards</li>
              <li>Modern, well-maintained fleet</li>
              <li>GPS-tracked delivery service</li>
              <li>Regular quality audits</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Service Coverage</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Primary Service Areas</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chester and surrounding areas</li>
                <li>Ellesmere Port</li>
                <li>Wrexham</li>
                <li>Warrington</li>
                <li>North Wales coastal regions</li>
                <li>Cheshire West and Chester</li>
              </ul>
            </div>
            <div className="relative h-[200px] bg-gray-100 rounded-lg overflow-hidden">
              {/* Placeholder for coverage map */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                [Image: Interactive service area map]
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Sustainability Commitment</h2>
        <p className="text-gray-700 mb-6">
          Environmental responsibility is at the heart of our operations. We're proud to lead the industry in sustainable practices:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Eco-Friendly Solutions</h3>
            <p className="text-gray-700">
              We use biodegradable cleaning products, water-efficient systems, and environmentally certified materials in all our units.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Smart Waste Management</h3>
            <p className="text-gray-700">
              Our advanced waste processing system ensures 100% responsible disposal and maximum recycling of applicable materials.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Carbon Reduction</h3>
            <p className="text-gray-700">
              Route optimization, electric vehicle transition, and solar-powered units help minimize our carbon footprint.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Experience the Chelford Difference?</h2>
        <p className="text-gray-700 mb-6">
          Let's discuss how we can meet your portable sanitation needs with our sustainable solutions.
        </p>
        <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Contact Our Team
        </Link>
      </div>
    </div>
  )
}
