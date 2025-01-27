import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agricultural Toilet Hire | Farm & Rural Solutions | Chelford Mobile Services',
  description: 'Reliable portable toilet solutions for farms and agricultural sites. Robust units with regular servicing, perfect for long-term rural and agricultural requirements across Chester.',
  keywords: 'agricultural toilet hire, farm toilet facilities, rural portable toilets, long-term toilet hire, farming facilities Chester',
  openGraph: {
    title: 'Agricultural Toilet Hire | Chelford Mobile Services',
    description: 'Robust portable toilet solutions for agricultural settings with comprehensive service included.',
    type: 'website',
  }
}

export default function Agriculture() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Agricultural Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Rural Site Solutions</h2>
          <p className="dark:text-primary mb-4">
            We provide robust and reliable toilet facilities specifically designed for agricultural environments. Our units are built to withstand rural conditions and come with regular servicing to ensure consistent operation throughout the year.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
            <li>Long-term hire specialists</li>
            <li>Weekly servicing included</li>
            <li>All-weather units available</li>
            <li>Flexible positioning options</li>
            <li>Remote location expertise</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/agricultural.svg"
            alt="Agricultural toilet facilities"
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
            Robust portable toilets designed for agricultural settings and remote locations.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Durable construction</li>
            <li>Hand wash station</li>
            <li>Weekly servicing</li>
            <li>All-weather use</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Welfare Units</h3>
          <p className="dark:text-primary mb-4">
            Complete welfare solutions including rest areas and washing facilities for farm workers.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Rest facilities</li>
            <li>Hot water supply</li>
            <li>Changing area</li>
            <li>Storage space</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Mains Connected</h3>
          <p className="dark:text-primary mb-4">
            Connected units ideal for permanent farm buildings and long-term agricultural sites.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Full plumbing</li>
            <li>Efficient operation</li>
            <li>Low maintenance</li>
            <li>Cost-effective</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Agricultural Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Service Package</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Weekly cleaning service</li>
              <li>Waste management</li>
              <li>Supplies restocking</li>
              <li>Regular maintenance</li>
              <li>24/7 emergency support</li>
              <li>Flexible service scheduling</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Site Requirements</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Remote access capability</li>
              <li>All-weather servicing</li>
              <li>Health & safety compliance</li>
              <li>Environmental considerations</li>
              <li>Suitable ground conditions</li>
              <li>Access requirements</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Long-term Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Regular Service</h3>
            <p className="dark:text-primary">Weekly maintenance included</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Flexible Terms</h3>
            <p className="dark:text-primary">Long-term hire options available</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Remote Support</h3>
            <p className="dark:text-primary">24/7 emergency assistance</p>
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
