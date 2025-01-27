import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Site Toilet Hire | HSE Compliant Solutions | Chelford Mobile Services',
  description: 'HSE-compliant portable toilet solutions for construction sites. Weekly servicing, reliable delivery, and flexible hire terms across Chester and surrounding areas.',
  keywords: 'construction site toilets, building site facilities, HSE compliant toilets, portable toilet hire construction, site welfare facilities Chester',
  openGraph: {
    title: 'Construction Site Toilet Hire | Chelford Mobile Services',
    description: 'HSE-compliant portable toilet solutions for construction sites with weekly servicing included.',
    type: 'website',
  }
}

export default function ConstructionSites() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Construction Site Toilet Hire</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">HSE-Compliant Site Facilities</h2>
          <p className="dark:text-primary mb-4">
            We provide fully HSE-compliant portable toilet solutions tailored for construction sites. Our units are regularly serviced and maintained to ensure your site meets all necessary health and safety requirements.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
            <li>Weekly servicing included as standard</li>
            <li>HSE compliance guaranteed</li>
            <li>Flexible long-term hire options</li>
            <li>Rapid response maintenance</li>
            <li>Multiple unit discounts available</li>
          </ul>
        </div>
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/images/construction.svg"
            alt="Construction site portable toilet facilities"
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
            Robust portable toilets designed for construction site use. Includes hand washing facilities and weekly servicing.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Non-slip flooring</li>
            <li>Hand wash station</li>
            <li>Regular servicing</li>
            <li>Easy site access</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Welfare Units</h3>
          <p className="dark:text-primary mb-4">
            Complete site welfare solutions including toilet facilities, rest areas, and washing stations.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Rest area included</li>
            <li>Hot water supply</li>
            <li>Eating facilities</li>
            <li>Secure storage</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Mains Connected</h3>
          <p className="dark:text-primary mb-4">
            Mains-connected toilet units ideal for longer-term construction projects with existing utilities.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Full plumbing</li>
            <li>Reliable operation</li>
            <li>Cost-effective</li>
            <li>Low maintenance</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Our Construction Site Facilities?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Service Excellence</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>Weekly cleaning and servicing</li>
              <li>Waste removal included</li>
              <li>Supply restocking</li>
              <li>Regular maintenance checks</li>
              <li>24/7 emergency support</li>
              <li>Flexible servicing schedule</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Site Requirements</h3>
            <ul className="list-disc list-inside dark:text-primary">
              <li>HSE compliance assured</li>
              <li>Health & safety documentation</li>
              <li>Risk assessments provided</li>
              <li>Method statements available</li>
              <li>Regular compliance checks</li>
              <li>Full site support</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Long-term Hire Benefits</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Weekly Service</h3>
            <p className="dark:text-primary">Regular cleaning and maintenance included</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Flexible Terms</h3>
            <p className="dark:text-primary">Hire duration to match your project timeline</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Volume Discount</h3>
            <p className="dark:text-primary">Special rates for multiple units</p>
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
