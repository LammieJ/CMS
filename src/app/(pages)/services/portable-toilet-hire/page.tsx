import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portable Toilet Hire | Construction & Event Solutions | Chelford Mobile Services',
  description: 'Professional portable toilet hire services for construction sites, outdoor events and more. Affordable, flexible solutions with reliable maintenance and delivery.',
  keywords: 'portable toilets, standard toilet hire, construction site toilets, portable toilet rental Chester, affordable toilet hire, building site facilities',
  openGraph: {
    title: 'Portable Toilet Hire | Chelford Mobile Services',
    description: 'Professional portable toilet hire services for construction sites, outdoor events and more.',
    type: 'website',
  }
}

export default function PortableToiletHire() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Portable Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Affordable & Flexible Solutions</h2>
          <p className="text-gray-700 mb-4">
            Our portable toilet solutions combine affordability with flexibility, making them perfect for construction sites, outdoor events, and temporary facilities. With competitive pricing and flexible hire periods, we ensure you get the best value for your requirements.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Short and long-term hire options available</li>
            <li>Weekly servicing included in price</li>
            <li>Flexible payment terms for long-term hires</li>
            <li>Volume discounts for multiple units</li>
            <li>No hidden costs or surprise fees</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/portable-toilet.jpeg"
            alt="Standard portable toilet unit"
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
          <h3 className="text-xl font-semibold mb-3">Construction Sites</h3>
          <p className="text-gray-700 mb-4">
            HSE-compliant portable toilets perfect for construction sites and building projects. Includes weekly servicing and maintenance.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>HSE compliance guaranteed</li>
            <li>Robust construction</li>
            <li>Easy site access</li>
            <li>Regular maintenance</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Outdoor Events</h3>
          <p className="text-gray-700 mb-4">
            Clean and well-maintained portable toilets suitable for festivals, sporting events, and outdoor gatherings.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Quick setup</li>
            <li>Fresh water supply</li>
            <li>Hand washing stations</li>
            <li>Regular servicing</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Long-term Hire</h3>
          <p className="text-gray-700 mb-4">
            Competitive rates for long-term hire with flexible rental periods and regular maintenance included.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Flexible terms</li>
            <li>Volume discounts</li>
            <li>Regular maintenance</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Standard Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Quality Facilities</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Non-slip flooring</li>
              <li>Ventilation system</li>
              <li>Internal lighting</li>
              <li>Paper towel dispenser</li>
              <li>Toilet paper holder</li>
              <li>Hand sanitiser dispenser</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Service Package</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Weekly cleaning service</li>
              <li>Waste removal</li>
              <li>Supply replenishment</li>
              <li>Maintenance checks</li>
              <li>24/7 emergency support</li>
              <li>Flexible servicing schedule</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Pricing Guide</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Daily Hire</h3>
            <p className="text-gray-700">From £30/unit</p>
            <p className="text-sm text-gray-600">Perfect for short events</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Weekly Hire</h3>
            <p className="text-gray-700">From £80/unit</p>
            <p className="text-sm text-gray-600">Ideal for construction sites</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Monthly Hire</h3>
            <p className="text-gray-700">From £240/unit</p>
            <p className="text-sm text-gray-600">Best value for long-term</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          * Prices include delivery, collection, and weekly servicing within 40-mile radius of Chester
        </p>
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
