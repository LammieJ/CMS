import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Luxury Toilet Hire | Premium Wedding & VIP Facilities | Chelford Mobile Services',
  description: 'Premium luxury toilet trailers for weddings, corporate events and VIP gatherings. Offering high-end portable bathroom facilities with luxury amenities.',
  keywords: 'luxury toilet trailers, VIP toilet hire, wedding toilets, premium portable toilets, corporate event facilities, luxury bathroom hire, wedding facilities Chester',
  openGraph: {
    title: 'Luxury Toilet Hire | Premium Wedding & VIP Facilities',
    description: 'Premium luxury toilet trailers perfect for weddings, corporate events and VIP gatherings.',
    type: 'website',
  }
}

export default function LuxuryToiletHire() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Luxury Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Premium Bathroom Experience</h2>
          <p className="dark:text-primary mb-4">
            Elevate your event with our luxury toilet facilities that rival high-end hotels. Perfect for weddings, corporate functions, and VIP events, our premium units offer all the comforts and elegance your guests expect.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
            <li>Hotel-standard fixtures and fittings</li>
            <li>Climate-controlled environment</li>
            <li>Luxury hand wash and toiletries</li>
            <li>Full-length mirrors with beauty lighting</li>
            <li>Background music system</li>
            <li>Fresh flower arrangements</li>
          </ul>
        </div>
        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <Image
            src="/images/luxury-toilet.svg"
            alt="Luxury toilet trailer interior"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Wedding Facilities</h3>
          <p className="dark:text-primary mb-4">
            Make your special day perfect with our elegant bathroom trailers designed specifically for weddings.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Bridal preparation area</li>
            <li>Vanity stations</li>
            <li>Premium toiletries</li>
            <li>Matching décor options</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Corporate Events</h3>
          <p className="dark:text-primary mb-4">
            Maintain your professional image with our executive-level facilities suitable for any corporate function.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Professional attendant service</li>
            <li>Corporate branding options</li>
            <li>Executive finishing</li>
            <li>Multiple unit configurations</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">VIP Functions</h3>
          <p className="dark:text-primary mb-4">
            Exceed expectations with our highest specification units for prestigious events and VIP gatherings.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Premium finishes</li>
            <li>Luxury amenities</li>
            <li>Dedicated attendant</li>
            <li>Bespoke service options</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Luxury Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Interior Amenities</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Porcelain sanitaryware</li>
              <li>Hot running water</li>
              <li>Vanity mirrors with LED lighting</li>
              <li>Luxury soap dispensers</li>
              <li>Premium paper products</li>
              <li>Hardwood effect flooring</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Premium Services</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Professional attendant option</li>
              <li>Regular servicing throughout event</li>
              <li>Fresh flower service</li>
              <li>Customized music playlist</li>
              <li>Luxury toiletry packages</li>
              <li>Personalized signage</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Trailer Specifications</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">2+1 Trailer</h3>
            <p className="dark:text-primary">2 Ladies, 1 Gents + Urinal</p>
            <p className="text-sm dark:text-primary">Ideal for up to 80 guests</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">3+2 Trailer</h3>
            <p className="dark:text-primary">3 Ladies, 2 Gents + Urinal</p>
            <p className="text-sm dark:text-primary">Perfect for up to 150 guests</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Luxury Suite</h3>
            <p className="dark:text-primary">Multiple configurations</p>
            <p className="text-sm dark:text-primary">Suitable for 200+ guests</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Request Premium Quote
        </Link>
      </div>
    </div>
  )
}
