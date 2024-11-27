import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Year-Long Construction Project Case Study | Chelford Mobile Services",
  description: "Discover how we provided comprehensive toilet hire solutions for a major construction development, ensuring compliance and worker comfort throughout the project.",
  keywords: "Construction Site Toilet Hire, Long-term Toilet Hire, Construction Case Study",
}

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Year-Long Construction Project Success Story",
  "description": "How Chelford Mobile Services supported a major development site with comprehensive sanitation solutions",
  "author": {
    "@type": "Organization",
    "name": "Chelford Mobile Services"
  }
}

export default function ConstructionCaseStudy() {
  return (
    <div className="container mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/resources"
          className="text-[#0891b2] hover:underline mb-8 inline-block"
        >
          ← Back to Resources
        </Link>

        <h1 className="text-4xl font-bold mb-6">Year-Long Construction Project Success Story</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#0891b2]/5 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <ul className="space-y-2">
              <li><strong>Project Type:</strong> Mixed-use development</li>
              <li><strong>Duration:</strong> 12 months</li>
              <li><strong>Workforce:</strong> 75-100 workers daily</li>
              <li><strong>Location:</strong> Urban construction site</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="mb-6">
            Managing long-term sanitation facilities for a large construction site presented several challenges:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>Varying workforce numbers throughout project phases</li>
            <li>Strict HSE compliance requirements</li>
            <li>Limited space for facility placement</li>
            <li>Need for consistent maintenance despite site activities</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="mb-6">
            We implemented a flexible and comprehensive solution:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>Installed 8 standard portable toilets with weekly rotation</li>
            <li>Provided 2 accessible units for inclusive access</li>
            <li>Set up 4 hand washing stations with hot water</li>
            <li>Implemented twice-weekly maintenance schedule</li>
            <li>Established emergency response protocol</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">100%</p>
              <p className="text-gray-600">HSE compliance</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">52</p>
              <p className="text-gray-600">Weeks of service</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">0</p>
              <p className="text-gray-600">HSE incidents</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
          <blockquote className="border-l-4 border-[#0891b2] pl-4 italic mb-8">
            "Chelford Mobile Services provided reliable, consistent service throughout our year-long project. Their attention to HSE requirements and flexible approach to our changing needs made them an invaluable partner."
            <footer className="text-gray-600 mt-2">- Site Manager</footer>
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Regular maintenance prevents service interruptions</li>
            <li>Flexible unit numbers accommodate workforce changes</li>
            <li>Strategic placement maximises space efficiency</li>
            <li>Clear communication ensures rapid issue resolution</li>
          </ul>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">HSE Compliance Highlights</h2>
            <ul className="space-y-2">
              <li>✓ All units met current HSE regulations</li>
              <li>✓ Regular compliance documentation provided</li>
              <li>✓ Monthly HSE inspections completed</li>
              <li>✓ Staff training records maintained</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Construction Project</h2>
          <p className="text-gray-600 mb-6">
            Need reliable, HSE-compliant sanitation facilities for your construction site? Let's discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#0891b2] text-white px-8 py-4 rounded-lg hover:bg-[#0891b2]/90 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
