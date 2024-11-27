import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Resources & Guides | Chelford Mobile Services",
  description: "Access our comprehensive resources including FAQs, guides, and case studies about portable toilet hire for events, construction sites, and more.",
  keywords: "Portable Toilet FAQs, Toilet Hire Questions, Event Toilet Advice, Event Planning Checklist, Toilet Rental Guide",
}

const resourceSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far in advance should I book portable toilets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend booking at least 2-3 weeks in advance for regular events, and 1-2 months for large events or peak season dates."
      }
    },
    {
      "@type": "Question",
      "name": "What maintenance is included with toilet hire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our service includes regular cleaning, waste removal, restocking of supplies, and maintenance checks. Frequency depends on your hire package."
      }
    }
  ]
}

const faqs = [
  {
    question: "How far in advance should I book portable toilets?",
    answer: "We recommend booking at least 2-3 weeks in advance for regular events, and 1-2 months for large events or peak season dates."
  },
  {
    question: "What maintenance is included with toilet hire?",
    answer: "Our service includes regular cleaning, waste removal, restocking of supplies, and maintenance checks. Frequency depends on your hire package."
  },
  {
    question: "How many toilets do I need for my event?",
    answer: "This depends on your event duration and guest count. As a general rule, we recommend 1 toilet per 75-100 guests for events up to 6 hours."
  },
  {
    question: "Do you provide accessible toilets?",
    answer: "Yes, we offer fully compliant accessible toilets suitable for users with disabilities, complete with handrails and appropriate dimensions."
  }
]

const guides = [
  {
    title: "Event Planning Checklist",
    description: "Complete guide to planning your event's sanitation needs",
    icon: "/images/guides.svg",
    href: "/guides/event-planning-checklist.pdf"
  },
  {
    title: "Construction Site Compliance",
    description: "Essential guide to meeting HSE requirements",
    icon: "/images/guides.svg",
    href: "/guides/construction-compliance.pdf"
  }
]

const caseStudies = [
  {
    title: "Summer Music Festival Success",
    description: "How we managed sanitation for 10,000 attendees",
    icon: "/images/case-studies.svg",
    href: "/case-studies/music-festival"
  },
  {
    title: "Year-Long Construction Project",
    description: "Supporting a major development site",
    icon: "/images/case-studies.svg",
    href: "/case-studies/construction-project"
  }
]

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }}
      />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Resources & Guides</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about portable toilet hire, from planning guides to maintenance tips.
        </p>
      </div>

      {/* FAQs Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Image
            src="/images/faq.svg"
            alt="FAQ icon"
            width={40}
            height={40}
            className="mr-4"
          />
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Guides Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Image
            src="/images/guides.svg"
            alt="Guides icon"
            width={40}
            height={40}
            className="mr-4"
          />
          <h2 className="text-2xl font-semibold">Downloadable Guides</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <a
              key={index}
              href={guide.href}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-lg mb-2">{guide.title}</h3>
              <p className="text-gray-600">{guide.description}</p>
              <div className="mt-4 text-[#0891b2] font-medium">
                Download PDF →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <Image
            src="/images/case-studies.svg"
            alt="Case Studies icon"
            width={40}
            height={40}
            className="mr-4"
          />
          <h2 className="text-2xl font-semibold">Case Studies</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              href={study.href}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-lg mb-2">{study.title}</h3>
              <p className="text-gray-600">{study.description}</p>
              <div className="mt-4 text-[#0891b2] font-medium">
                Read More →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Our team is here to help you make the best decision for your specific needs.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#0891b2] text-white px-8 py-4 rounded-lg hover:bg-[#0891b2]/90 transition-all duration-200 transform hover:scale-105"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}
