import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wedding Toilet Hire | Luxury Facilities | Chelford Mobile Services',
  description: 'Luxury portable toilet hire for weddings and special occasions. Premium facilities with modern amenities, perfect for your special day across Chester and surrounding areas.',
  keywords: 'wedding toilet hire, luxury portable toilets, wedding facilities, special event toilets, premium toilet hire Chester',
  openGraph: {
    title: 'Wedding Toilet Hire | Chelford Mobile Services',
    description: 'Luxury portable toilet solutions for weddings with premium facilities and comprehensive service included.',
    type: 'website',
  }
}

export default function Weddings() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Wedding Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Luxury Facilities for Your Special Day</h2>
          <p className="dark:text-primary mb-4">
            Our premium toilet facilities are designed to complement your wedding venue perfectly. Whether you're planning an outdoor celebration, marquee reception, or venue enhancement, our luxury units provide hotel-standard facilities for your guests.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
            <li>Luxury trailer units available</li>
            <li>Styled to match your wedding theme</li>
            <li>Full attendant service optional</li>
            <li>Pristine presentation guaranteed</li>
            <li>Discrete delivery and positioning</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/wedding.svg"
            alt="Luxury wedding toilet facilities"
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
          <h3 className="text-xl font-semibold mb-3">Luxury Trailer Units</h3>
          <p className="dark:text-primary mb-4">
            Premium toilet trailers featuring hotel-standard facilities and elegant finishing touches.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Porcelain fixtures</li>
            <li>Full-length mirrors</li>
            <li>Luxury hand wash</li>
            <li>Climate control</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Pamper Units</h3>
          <p className="dark:text-primary mb-4">
            Spacious facilities perfect for bridal parties and guest preparation areas.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Vanity areas</li>
            <li>Premium lighting</li>
            <li>Styling space</li>
            <li>Fresh flowers</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Accessible Luxury</h3>
          <p className="dark:text-primary mb-4">
            Specially designed accessible units maintaining the same high standards of luxury.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Spacious design</li>
            <li>Baby changing</li>
            <li>Support rails</li>
            <li>Easy access</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Premium Wedding Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Luxury Features</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Hotel-quality facilities</li>
              <li>Luxury hand products</li>
              <li>Fresh flower service</li>
              <li>Vanity areas</li>
              <li>Climate control</li>
              <li>Premium lighting</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Service Excellence</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Dedicated event manager</li>
              <li>Attendant service available</li>
              <li>Discrete positioning</li>
              <li>Site visit included</li>
              <li>Setup day before</li>
              <li>Emergency support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Wedding Day Assurance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Early Setup</h3>
            <p className="dark:text-primary">Installed and ready the day before</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Attendant Service</h3>
            <p className="dark:text-primary">Professional staff available</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Luxury Guaranteed</h3>
            <p className="dark:text-primary">Premium experience assured</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/calculator"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get a Personalised Quote
        </Link>
      </div>
    </div>
  )
}
