import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Industries We Serve | Chelford Mobile Services",
  description: "Specialised toilet hire solutions for construction sites, events, weddings, and more. Tailored services meeting industry-specific requirements across Chester and surrounding areas.",
  keywords: "Construction Toilet Hire, Event Toilet Solutions, Wedding Portable Toilets, Industry-Specific Toilet Hire, Chester Toilet Hire",
}

const industrySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industry-Specific Toilet Hire Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Chelford Mobile Services"
  },
  "areaServed": "Chester and surrounding areas",
  "serviceType": "Portable Toilet Hire",
  "description": "Specialised portable toilet solutions for various industries including construction, events, and weddings"
}

const industries = [
  {
    title: "Construction Sites",
    icon: "/images/construction.svg",
    features: [
      "HSE compliant facilities",
      "Weekly maintenance service",
      "Robust units for site conditions",
      "Flexible long-term hire options"
    ]
  },
  {
    title: "Events & Festivals",
    icon: "/images/events.svg",
    features: [
      "Luxury toilet trailers",
      "High-capacity solutions",
      "Accessible facilities",
      "On-site attendants available"
    ]
  },
  {
    title: "Weddings",
    icon: "/images/wedding.svg",
    features: [
      "Premium luxury units",
      "Styled to match your event",
      "Full-length mirrors",
      "Luxury fittings and amenities"
    ]
  },
  {
    title: "Agricultural",
    icon: "/images/agricultural.svg",
    features: [
      "Durable units for rural settings",
      "Easy access for servicing",
      "Weather-resistant design",
      "Flexible placement options"
    ]
  }
]

export default function IndustriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-lg dark:text-primary max-w-2xl mx-auto">
          Tailored portable toilet solutions for every industry, ensuring comfort, compliance, and convenience for your specific needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {industries.map((industry) => (
          <div key={industry.title} className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 mr-4 relative flex-shrink-0">
                <Image
                  src={industry.icon}
                  alt={`${industry.title} icon`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold">{industry.title}</h2>
            </div>
            <ul className="space-y-3">
              {industry.features.map((feature) => (
                <li key={feature} className="flex items-center dark:text-primary">
                  <svg className="w-5 h-5 mr-2 text-[#0891b2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose Our Industry-Specific Solutions?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">Tailored Service</h3>
            <p className="dark:text-primary">Every industry has unique requirements. We provide customised solutions that perfectly match your specific needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">Compliance Guaranteed</h3>
            <p className="dark:text-primary">All our units meet or exceed industry regulations and standards, ensuring peace of mind for your business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">Flexible Hire Terms</h3>
            <p className="dark:text-primary">From one-day events to long-term construction projects, we offer flexible hiring options to suit your timeline.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-3">Professional Support</h3>
            <p className="dark:text-primary">Our experienced team provides expert advice and reliable support throughout your hire period.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Need Industry-Specific Advice?</h2>
        <p className="dark:text-primary mb-8 max-w-2xl mx-auto">
          Contact our team for expert guidance on choosing the right solution for your industry.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-[#0891b2] text-white px-8 py-4 rounded-lg hover:bg-[#0891b2]/90 transition-all duration-200 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
