import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event Toilet Solutions | Festival & Large Event Facilities | Chelford Mobile Services',
  description: 'Comprehensive toilet hire solutions for festivals, marathons, and large events. Custom configurations and professional event planning support.',
  keywords: 'event toilets, festival toilet rental, party toilets, marathon facilities, event sanitation, large event toilets, outdoor event facilities',
  openGraph: {
    title: 'Event Toilet Solutions | Festival & Large Event Facilities',
    description: 'Comprehensive toilet hire solutions for festivals, marathons, and large events.',
    type: 'website',
  }
}

export default function EventSolutions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Event-Specific Toilet Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Customized Event Sanitation Solutions</h2>
          <p className="text-gray-700 mb-4">
            From intimate gatherings to major festivals, we provide tailored sanitation solutions that scale to your event's needs. Our experienced team ensures the right facilities are in the right place at the right time.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Custom site planning and layout</li>
            <li>Flexible capacity options</li>
            <li>On-site maintenance teams</li>
            <li>Emergency response service</li>
            <li>Accessibility options</li>
            <li>Sustainable solutions</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/event-toilets.svg"
            alt="Event toilet setup with multiple units"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Festival Solutions</h3>
          <p className="text-gray-700 mb-4">
            Comprehensive sanitation solutions for music festivals, food festivals, and cultural events.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>High-capacity units</li>
            <li>24/7 maintenance</li>
            <li>Queue management</li>
            <li>Strategic placement</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Sporting Events</h3>
          <p className="text-gray-700 mb-4">
            Mobile facilities perfect for marathons, tournaments, and outdoor competitions.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Route-based placement</li>
            <li>Quick-access design</li>
            <li>Hydration station integration</li>
            <li>Athlete-specific facilities</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Private Events</h3>
          <p className="text-gray-700 mb-4">
            Tailored solutions for garden parties, community events, and private gatherings.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Discrete placement</li>
            <li>Luxury options</li>
            <li>Flexible duration</li>
            <li>Competitive pricing</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Planning Support</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Site Planning</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Professional site assessment</li>
              <li>Capacity planning</li>
              <li>Access route planning</li>
              <li>Service schedule planning</li>
              <li>Health & safety compliance</li>
              <li>Environmental considerations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Event Support</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Dedicated event manager</li>
              <li>On-site maintenance team</li>
              <li>Emergency response service</li>
              <li>Regular servicing</li>
              <li>Consumables management</li>
              <li>End-of-event cleanup</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Calculator</h2>
        <p className="text-gray-700 mb-6">
          Use our guide to estimate facilities needed for your event:
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Small Events</h3>
            <p className="text-gray-700">Up to 250 guests</p>
            <p className="text-sm text-gray-600">4-6 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Medium Events</h3>
            <p className="text-gray-700">250-500 guests</p>
            <p className="text-sm text-gray-600">8-12 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Large Events</h3>
            <p className="text-gray-700">500-1000 guests</p>
            <p className="text-sm text-gray-600">15-20 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Festivals</h3>
            <p className="text-gray-700">1000+ guests</p>
            <p className="text-sm text-gray-600">Custom configuration</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Final numbers depend on event duration, alcohol service, and other factors
        </p>
      </div>

      <div className="text-center">
        <Link 
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Plan Your Event
        </Link>
      </div>
    </div>
  )
}
