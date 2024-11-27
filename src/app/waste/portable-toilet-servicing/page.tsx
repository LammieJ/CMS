import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chemical Toilet Servicing | CMS Toilet Hire",
  description: "Professional chemical toilet servicing with flexible scheduling options. NSQ-qualified engineers, eco-friendly practices, and comprehensive maintenance including waste tank emptying and consumables restocking.",
  keywords: "chemical toilet servicing, portable toilet maintenance, NSQ qualified engineers, waste tank emptying, toilet cleaning service",
  openGraph: {
    title: "Chemical Toilet Servicing | CMS Toilet Hire",
    description: "Professional chemical toilet servicing with flexible scheduling options. NSQ-qualified engineers, eco-friendly practices, and comprehensive maintenance including waste tank emptying and consumables restocking.",
    type: "website",
  },
};

export default function PortableToiletServicingPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Chemical Toilet Servicing by CMS Toilet Hire – Reliable and Efficient Solutions
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          At CMS Toilet Hire, we offer comprehensive chemical toilet servicing, ensuring your facilities remain clean, hygienic, and well-stocked. Our service includes emptying the waste tank, replenishing chemicals, and restocking essential consumables such as soap, hand towels, and toilet rolls.
        </p>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire chemical toilet servicing"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CMS for Chemical Toilet Servicing?</h2>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Expert Team:</span>
              Our service drivers are highly experienced and hold the National Sanitation Qualification (NSQ), ensuring professional and safe waste removal.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Flexible Servicing Options:</span>
              Choose from weekly, twice weekly, or ad-hoc servicing to suit your needs.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Eco-Friendly Practices:</span>
              We provide electronic waste transfer documents to ensure compliance with environmental regulations.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Servicing Details</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li><strong>Effluent Limit:</strong> Up to 70 gallons per service. Excess effluent will incur additional charges on a pro-rata basis.</li>
            <li><strong>Access Requirements:</strong> Unrestricted site access is required. A no-access or abortive charge may apply if access is denied.</li>
            <li><strong>Timing:</strong> Each service is allocated 45 minutes, with any additional time charged at a standard rate.</li>
            <li><strong>Operating Hours:</strong> Servicing is carried out between 7am and 5pm, Monday to Friday.</li>
          </ul>
        </section>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire service fleet"
            fill
            className="object-cover"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">State-of-the-Art Fleet for All Terrains</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">Our versatile fleet is equipped to handle any environment:</p>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Urban and Event-Friendly Vehicles:</span>
              Our Mercedes Sprinter tankers, equipped with 300-gallon vacuum tanks and hazard lights, are ideal for busy or crowded areas.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4x4 Trucks for Challenging Sites:</span>
              For sites with rough terrain or difficult access, our 4x4 vehicles ensure reliable servicing, no matter the location.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Choosing CMS Toilet Hire</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>NSQ-Qualified Engineers: Trust the UK's most qualified professionals to maintain your facilities.</li>
            <li>Customisable Service Frequencies: Tailor your schedule with weekly, twice-weekly, or one-off servicing.</li>
            <li>Health and Safety Compliance: Our vehicles are equipped to safely operate in high-traffic or hard-to-reach areas.</li>
          </ul>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Book Your Chemical Toilet Servicing Today!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            CMS Toilet Hire provides reliable and effective solutions to keep your chemical toilets in excellent condition. Whether you're managing a construction site, festival, or remote event, our team ensures your facilities remain fully operational and hygienic.
          </p>
          <p className="text-xl font-semibold mb-6">Ready to Book?</p>
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
