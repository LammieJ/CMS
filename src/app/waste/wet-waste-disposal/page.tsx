import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wet Waste Disposal Services | CMS Toilet Hire",
  description: "Professional sewage waste disposal services with flexible options from 40 to 4,000 gallon capacity. Licensed by Environmental Agency, offering weekly scheduled and ad-hoc services.",
  keywords: "sewage waste disposal, wet waste collection, toilet waste management, Environmental Agency licensed, waste tanker services",
  openGraph: {
    title: "Wet Waste Disposal Services | CMS Toilet Hire",
    description: "Professional sewage waste disposal services with flexible options from 40 to 4,000 gallon capacity. Licensed by Environmental Agency, offering weekly scheduled and ad-hoc services.",
    type: "website",
  },
};

const WetWasteDisposalPage = () => {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          CMS Toilet Hire: Reliable Sewage Waste Disposal Services
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          At CMS Toilet Hire, we specialize in professional sewage waste disposal services to keep your site clean, compliant, and hassle-free. With a versatile fleet of tankers ranging from compact 4×4 vehicles capable of handling 40 gallons to HGVs with a capacity of up to 4,000 gallons, we&apos;re equipped to manage liquid waste from any site, including those with restricted access.
        </p>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire waste disposal tanker"
            fill
            className="object-cover"
            priority
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Flexible Service Options</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer both weekly scheduled empties and ad-hoc services tailored to your needs. Our transparent pricing is based on a minimum 4-week hire, ensuring cost-effective and reliable service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose CMS Toilet Hire for Sewage Waste Disposal?</h2>
          <ul className="list-none space-y-4 text-lg text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="font-semibold mr-2">Fast Response Times:</span>
              We aim to address your enquiries immediately to minimize disruptions to your site operations.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Personalized Support:</span>
              Benefit from a dedicated account manager and service operator for seamless weekly servicing.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Dependable Service:</span>
              Using state-of-the-art routing and tracking systems, we guarantee your waste disposal needs are never missed.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Certified Professionals:</span>
              Our operators hold Level 1 National Sanitation Qualifications, and some have been recognized as Service Attendant of the Year.
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2">Legal and Efficient Disposal:</span>
              We are fully licensed by the Environmental Agency, ensuring all waste is managed safely and in compliance with regulations.
            </li>
          </ul>
        </section>

        <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-lg overflow-hidden">
          <Image
            src="/images/placeholder.svg"
            alt="CMS Toilet Hire waste management service"
            fill
            className="object-cover"
          />
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600 dark:text-gray-300">
            <li>Weekly or ad-hoc waste collection</li>
            <li>Licensed by the Environmental Agency</li>
            <li>Fleet options from 40 to 4,000 gallons</li>
            <li>Electronic waste transfer documentation for your records</li>
            <li>Safe, professional, and efficient service</li>
          </ul>
        </section>

        <section className="bg-primary/5 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Learn More</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            If you&apos;re looking for a trusted partner to handle your site&apos;s sewage waste, contact our friendly team today! Call us to discuss your requirements and experience the CMS Toilet Hire difference.
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
};

export default WetWasteDisposalPage;
