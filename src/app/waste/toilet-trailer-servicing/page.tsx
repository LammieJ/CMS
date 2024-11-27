import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Toilet Trailer Servicing | CMS Toilet Hire",
  description: "Professional toilet trailer servicing by NSQ-certified experts. Comprehensive maintenance including waste tank emptying, filter cleaning, and consumables restocking. Flexible scheduling with weekly, twice-weekly, or ad-hoc options.",
  keywords: "toilet trailer servicing, NSQ certified engineers, waste tank emptying, trailer maintenance, liquid waste removal",
  openGraph: {
    title: "Toilet Trailer Servicing | CMS Toilet Hire",
    description: "Professional toilet trailer servicing by NSQ-certified experts. Comprehensive maintenance including waste tank emptying, filter cleaning, and consumables restocking. Flexible scheduling with weekly, twice-weekly, or ad-hoc options.",
    type: "website",
  },
};

export default function ToiletTrailerServicingPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Professional Toilet Trailer Servicing with CMS Toilet Hire
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          At CMS Toilet Hire, we provide comprehensive toilet trailer servicing to keep your facilities in top condition. Our service includes:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300 mb-8">
          <li>Emptying waste tanks efficiently and hygienically</li>
          <li>Thorough cleaning of filters and tanks to prevent residue build-up</li>
          <li>Replacing chemicals to maintain freshness and functionality</li>
          <li>Replenishing consumables, including soap, hand towels, and toilet rolls</li>
          <li>Safe effluent disposal at a registered sewage works</li>
        </ul>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire trailer servicing"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Expert Service from Qualified Professionals</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our team consists of NSQ-certified Service Drivers (National Sanitation Qualification) with extensive experience in liquid waste removal. This ensures your toilet trailers are serviced by professionals with the highest standards of training and expertise.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Flexible Servicing Options</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            We offer a range of servicing frequencies to suit your needs, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Weekly servicing</li>
            <li>Twice-weekly servicing</li>
            <li>Ad-hoc one-off services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Hire Terms and Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            All servicing is available with a minimum hire period of 4 weeks for weekly services. Our flexible approach ensures you get the service you need, when you need it.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Specialist Equipment for Every Scenario</h2>
          <h3 className="text-2xl font-semibold mb-4">Tailored Fleet for Professional Service</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Our fleet is designed for versatility and efficiency:
          </p>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">3.5-tonne vehicles:</span>
              Equipped with bespoke 300-gallon vacuum tanks for waste removal, ideal for servicing in busy or crowded spaces, complete with hazard lights for safety.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">4×4 trucks:</span>
              Capable of navigating rough terrain or areas with limited access, ensuring no location is too remote for servicing.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CMS Toilet Hire?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Highly trained engineers with industry-recognised qualifications</li>
            <li>Comprehensive cleaning and maintenance, reducing the risk of breakdowns</li>
            <li>Health and safety compliant vehicles for safe servicing in all environments</li>
          </ul>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Contact Us Today</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to arrange professional toilet trailer servicing? Get in touch with our team to discuss your requirements and schedule your service.
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
