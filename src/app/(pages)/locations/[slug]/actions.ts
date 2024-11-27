'use server'

import { generateLocationContent } from '@/lib/openai'
import { locationData } from '../location-data'
import { notFound } from 'next/navigation'
import type { LocationSEOContent } from '@/lib/types'

interface LocationResponse {
  location: {
    name: string;
    slug: string;
    areas: string[];
  };
  content: LocationSEOContent | null;
}

export async function getLocationContent(slug: string): Promise<LocationResponse> {
  const location = locationData[slug]
  if (!location) {
    notFound()
  }

  try {
    const content = await generateLocationContent(location.name, location.areas)
    
    // If OpenAI generation fails, provide enhanced fallback content
    if (!content) {
      const fallbackContent: LocationSEOContent = {
        title: `Toilet Hire in ${location.name} | Expert Portable Toilet Services`,
        metaDescription: `Professional toilet hire services in ${location.name}. Quality facilities for events, construction sites, and more. Local, reliable service with 24/7 support. Serving ${location.areas.slice(0, 3).join(', ')} and beyond.`,
        keywords: [
          `${location.name.toLowerCase()} toilet hire`,
          'portable toilet rental',
          'event toilet hire',
          'construction site toilets',
          'local toilet hire',
          'mobile toilet services',
          'luxury toilet facilities',
          'disabled access toilets',
          'portable bathroom rental',
          'event sanitation solutions'
        ],
        h1: `Professional Toilet Hire Services in ${location.name}`,
        h2s: [
          `Complete Toilet Hire Solutions for ${location.name}`,
          'Comprehensive Range of Facilities',
          `Areas We Cover Around ${location.name}`,
          'Our Service Guarantees',
          'Competitive Hire Rates'
        ],
        content: `Welcome to Chelford Mobile Services, your trusted provider of professional toilet hire solutions in ${location.name} and surrounding areas. We understand that every event and project has unique requirements, which is why we offer a comprehensive range of portable toilet facilities to meet your specific needs.

Our extensive service area covers ${location.areas.join(', ')}, ensuring reliable and prompt delivery wherever you need us. With years of experience serving the ${location.name} region, we've built a reputation for excellence in both our facilities and customer service.

We provide a diverse range of toilet hire options including standard portable toilets, luxury toilet trailers, disabled access facilities, and specialized solutions for construction sites. All our units are regularly maintained and serviced to the highest standards of hygiene and comfort.

What sets us apart in ${location.name}:
• Local expertise and rapid response times
• 24/7 emergency support and maintenance
• Competitive pricing with no hidden costs
• Full service including delivery, setup, and collection
• Regular cleaning and servicing included
• Flexible hire periods to suit your needs

Whether you're planning a wedding in ${location.areas[0]}, managing a construction project in ${location.areas[1]}, or organizing a public event in ${location.areas[2]}, we have the perfect solution for your requirements. Contact us today to discuss your needs and receive a tailored quote.`,
        schema: {
          name: `Chelford Mobile Services - ${location.name}`,
          description: `Professional toilet hire services in ${location.name} and surrounding areas, specializing in events, construction, and luxury facilities`,
          areaServed: {
            name: location.name,
            containsPlace: location.areas
          },
          services: [
            'Standard Portable Toilets',
            'Luxury Toilet Units',
            'Disabled Access Facilities',
            'Construction Site Toilets',
            'Event Toilet Hire',
            'Emergency Toilet Solutions'
          ]
        }
      }
      return { location, content: fallbackContent }
    }
    
    return { location, content }
  } catch (error) {
    console.error('Error generating location content:', error)
    return { location, content: null }
  }
}
