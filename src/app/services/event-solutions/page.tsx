import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { serviceSchema, faqSchema } from './metadata'

interface FAQ {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export default function EventSolutions() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-4xl font-bold mb-8">Event-Specific Toilet Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Customized Event Sanitation Solutions</h2>
          <p className="dark:text-primary mb-4">
            From intimate gatherings to major festivals, we provide tailored sanitation solutions that scale to your event's needs. Our experienced team ensures the right facilities are in the right place at the right time.
          </p>
          <ul className="list-disc list-inside mb-4 dark:text-primary">
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
          <p className="dark:text-primary mb-4">
            Comprehensive sanitation solutions for music festivals, food festivals, and cultural events.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>High-capacity units</li>
            <li>24/7 maintenance</li>
            <li>Queue management</li>
            <li>Strategic placement</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Sporting Events</h3>
          <p className="dark:text-primary mb-4">
            Mobile facilities perfect for marathons, tournaments, and outdoor competitions.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
            <li>Route-based placement</li>
            <li>Quick-access design</li>
            <li>Hydration station integration</li>
            <li>Athlete-specific facilities</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Private Events</h3>
          <p className="dark:text-primary mb-4">
            Tailored solutions for garden parties, community events, and private gatherings.
          </p>
          <ul className="list-disc list-inside dark:text-primary">
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
            <ul className="list-disc list-inside dark:text-primary">
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
            <ul className="list-disc list-inside dark:text-primary">
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
        <p className="dark:text-primary mb-6">
          Use our guide to estimate facilities needed for your event:
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Small Events</h3>
            <p className="dark:text-primary">Up to 250 guests</p>
            <p className="text-sm dark:text-primary">4-6 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Medium Events</h3>
            <p className="dark:text-primary">250-500 guests</p>
            <p className="text-sm dark:text-primary">8-12 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Large Events</h3>
            <p className="dark:text-primary">500-1000 guests</p>
            <p className="text-sm dark:text-primary">15-20 units recommended</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Festivals</h3>
            <p className="dark:text-primary">1000+ guests</p>
            <p className="text-sm dark:text-primary">Custom configuration</p>
          </div>
        </div>
        <p className="mt-4 text-sm dark:text-primary">
          * Final numbers depend on event duration, alcohol service, and other factors
        </p>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {(faqSchema.mainEntity as FAQ[]).map((faq: FAQ, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.name}</h3>
              <p className="dark:text-primary">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center space-y-6">
        <Link 
          href="/contact"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
        >
          Plan Your Event
        </Link>
        <p className="text-sm text-muted-foreground dark:text-primary/80">
          Or call us on <a href="tel:07534362251" className="text-primary hover:underline">07534 362251</a> for event planning assistance
        </p>
      </div>
    </div>
  )
}
