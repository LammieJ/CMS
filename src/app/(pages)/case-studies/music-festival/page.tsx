import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Summer Music Festival Case Study | Chelford Mobile Services",
  description: "Learn how we successfully managed sanitation facilities for a 10,000-attendee music festival, ensuring comfort and compliance throughout the event.",
  keywords: "Event Toilet Success Stories, Festival Toilet Hire, Large Event Sanitation",
}

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Summer Music Festival Success Story",
  "description": "How Chelford Mobile Services managed sanitation for 10,000 festival attendees",
  "author": {
    "@type": "Organization",
    "name": "Chelford Mobile Services"
  }
}

export default function MusicFestivalCaseStudy() {
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

        <h1 className="text-4xl font-bold mb-6">Summer Music Festival Success Story</h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#0891b2]/5 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <ul className="space-y-2">
              <li><strong>Event:</strong> 3-day music festival</li>
              <li><strong>Attendance:</strong> 10,000 people</li>
              <li><strong>Duration:</strong> 72 hours</li>
              <li><strong>Location:</strong> Rural festival grounds</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="mb-6">
            Managing sanitation facilities for a large-scale music festival presents unique challenges:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>High-volume usage during peak times</li>
            <li>Extended operating hours requiring 24/7 maintenance</li>
            <li>Various user requirements including accessibility needs</li>
            <li>Environmental considerations and waste management</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="mb-6">
            We implemented a comprehensive sanitation strategy:
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>Deployed 100 standard portable toilets strategically across the site</li>
            <li>Installed 4 luxury toilet trailers in VIP areas</li>
            <li>Provided 8 accessible units with proper spacing and pathways</li>
            <li>Established 20 hand washing stations throughout the venue</li>
            <li>Implemented 24/7 maintenance schedule with dedicated on-site team</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">The Results</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">100%</p>
              <p className="text-gray-600">Uptime maintained</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">0</p>
              <p className="text-gray-600">Service interruptions</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-[#0891b2] mb-2">95%</p>
              <p className="text-gray-600">Customer satisfaction</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Client Testimonial</h2>
          <blockquote className="border-l-4 border-[#0891b2] pl-4 italic mb-8">
            "Chelford Mobile Services exceeded our expectations. Their proactive approach and attention to detail ensured our festival attendees had access to clean, well-maintained facilities throughout the entire event."
            <footer className="text-gray-600 mt-2">- Festival Director</footer>
          </blockquote>

          <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Strategic placement of units reduces queuing times</li>
            <li>24/7 maintenance team is crucial for large events</li>
            <li>Mix of standard and luxury units meets diverse needs</li>
            <li>Regular supply checks prevent service interruptions</li>
          </ul>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Plan Your Event</h2>
          <p className="text-gray-600 mb-6">
            Looking to organize a large-scale event? Let us help you plan the perfect sanitation solution.
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
