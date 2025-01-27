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

export default function LuxuryToiletHire() {
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
            priority
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

      <div className="bg-gray-50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {([...faqSchema.mainEntity] as FAQ[]).map((faq: FAQ, index: number) => (
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
          Request Premium Quote
        </Link>
        <p className="text-sm text-muted-foreground dark:text-primary/80">
          Or call us on <a href="tel:07534362251" className="text-primary hover:underline">07534 362251</a> for personalized service
        </p>
      </div>
    </div>
  )
}
