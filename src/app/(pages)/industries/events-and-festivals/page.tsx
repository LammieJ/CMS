import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event & Festival Toilet Hire | Outdoor Event Solutions | Chelford Mobile Services',
  description: 'Professional portable toilet hire for festivals, outdoor events and gatherings. Clean, well-maintained units with flexible hire periods and reliable service across Chester.',
  keywords: 'event toilet hire, festival toilets, outdoor event facilities, portable toilet hire events, temporary toilet facilities Chester',
  openGraph: {
    title: 'Event & Festival Toilet Hire | Chelford Mobile Services',
    description: 'Professional portable toilet solutions for festivals and outdoor events with comprehensive service included.',
    type: 'website',
  }
}

export default function EventsAndFestivals() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Event & Festival Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Complete Event Solutions</h2>
          <p className="dark:text-primary mb-4">
            We provide comprehensive toilet hire solutions for events and festivals of all sizes. Our units are delivered clean, fully stocked, and regularly serviced to ensure the best experience for your attendees.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
            <li>Single-day to multi-week hire available</li>
            <li>Regular servicing throughout your event</li>
            <li>Various unit types to suit all needs</li>
            <li>Emergency response service</li>
            <li>Flexible delivery and collection times</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/events.svg"
            alt="Event and festival toilet facilities"
            width={800}
            height={600}
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
            }}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Standard Units</h3>
          <p className="dark:text-primary mb-4">
            Clean, well-maintained portable toilets perfect for smaller events and gatherings.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Hand washing facilities</li>
            <li>Regular servicing</li>
            <li>Fresh water supply</li>
            <li>Easy access</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Luxury Trailer Units</h3>
          <p className="dark:text-primary mb-4">
            Premium toilet trailers featuring modern facilities and superior comfort for upscale events.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Flushing toilets</li>
            <li>Hot water sinks</li>
            <li>Mirror lighting</li>
            <li>Climate control</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Disabled Access</h3>
          <p className="dark:text-primary mb-4">
            Specially designed accessible units ensuring comfort and dignity for all attendees.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Extra space</li>
            <li>Handrails</li>
            <li>Easy access ramp</li>
            <li>Baby changing</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Support Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Service Package</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Regular cleaning throughout event</li>
              <li>Waste management</li>
              <li>Supplies restocking</li>
              <li>Attendant service available</li>
              <li>24/7 emergency support</li>
              <li>Flexible service scheduling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Event Planning</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Site surveys available</li>
              <li>Layout planning assistance</li>
              <li>Capacity calculations</li>
              <li>Access requirements check</li>
              <li>Health & safety compliance</li>
              <li>Event management support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Event Hire Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Flexible Hire</h3>
            <p className="dark:text-primary">From single day to multiple weeks</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Full Service</h3>
            <p className="dark:text-primary">Regular cleaning and maintenance included</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Event Support</h3>
            <p className="dark:text-primary">24/7 emergency assistance available</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/calculator"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get an Instant Quote
        </Link>
      </div>
    </div>
  )
}
