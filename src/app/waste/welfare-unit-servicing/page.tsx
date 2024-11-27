import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welfare Unit Servicing | CMS Toilet Hire",
  description: "Professional welfare unit servicing with flexible scheduling options. NSQ-certified engineers, tank capacities from 70-300 gallons, and comprehensive maintenance including waste removal and consumables restocking.",
  keywords: "welfare unit servicing, liquid waste removal, NSQ certified engineers, tank servicing, facility maintenance",
  openGraph: {
    title: "Welfare Unit Servicing | CMS Toilet Hire",
    description: "Professional welfare unit servicing with flexible scheduling options. NSQ-certified engineers, tank capacities from 70-300 gallons, and comprehensive maintenance including waste removal and consumables restocking.",
    type: "website",
  },
};

export default function WelfareUnitServicingPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welfare Unit Servicing by CMS Toilet Hire – Reliable and Professional Solutions
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          At CMS Toilet Hire, we offer comprehensive welfare unit servicing to ensure your facilities remain hygienic and fully stocked. Our service includes emptying the waste tank, replenishing consumables such as soap, hand towels, and toilet rolls, and replacing chemicals to maintain cleanliness and safety. Whether you have a welfare unit with a tank capacity of 70 to 300 gallons, we provide tailored servicing options, including weekly, twice-weekly, or ad-hoc visits.
        </p>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire welfare unit servicing"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Liquid Waste Removal Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our dedicated team of NSQ-certified service engineers boasts years of experience in liquid waste removal. This expertise ensures that all work is carried out to the highest standards, giving you peace of mind. We also supply electronic waste transfer documents for complete transparency and compliance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Flexible Service Options</h2>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Tank Capacities:</span>
              From 70 gallons to 300 gallons
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Service Frequency:</span>
              Weekly, twice-weekly, or as needed
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Qualified Staff:</span>
              NSQ-certified for professional and efficient service
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Eco-Friendly Disposal:</span>
              All waste is disposed of at authorised facilities in line with legal and ethical standards
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced Fleet for Welfare Unit Servicing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Our fleet is equipped to handle a variety of site conditions:</p>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Mercedes Sprinter Tankers:</span>
              Fitted with bespoke 300-gallon vacuum tanks, these vehicles are ideal for servicing in busy or restricted areas. With hazard lights for safe operation, they meet all health and safety requirements.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4×4 Trucks for Rough Terrain:</span>
              Perfect for off-road or difficult-access locations, our 4×4 vehicles ensure that even the most remote sites can be serviced without issue.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Affordable Hire Packages</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our welfare unit servicing is available on minimum four-week hire terms for weekly services. This ensures a reliable and cost-effective solution for your sanitation needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CMS Toilet Hire?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Professional and highly-trained staff</li>
            <li>State-of-the-art vehicles for all terrain types</li>
            <li>Commitment to eco-friendly and legal waste disposal</li>
            <li>Instant electronic documentation for your records</li>
          </ul>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Request a Quote Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            For dependable welfare unit servicing across the UK, contact CMS Toilet Hire. Whether your site is in a city centre, a rural location, or somewhere in between, our team is ready to provide expert servicing with unmatched reliability. Let us help keep your facilities running smoothly!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:07534362251"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-lg font-medium text-primary hover:bg-primary/10 transition-all duration-200"
            >
              Call Now
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
