import OpenAI from 'openai'
import type { LocationSEOContent } from './types'

const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  : null

export async function generateImage(prompt: string): Promise<string | null> {
  if (!openai) return null

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })

    return response.data[0].url || null
  } catch (error) {
    console.error('Error generating image:', error)
    return null
  }
}

export async function generateBlogContent(topic: string): Promise<string | null> {
  if (!openai) return null

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional content writer specializing in toilet hire and event planning content."
        },
        {
          role: "user",
          content: `Write a detailed blog post about ${topic}. Include practical tips, industry insights, and best practices.`
        }
      ]
    })

    return completion.choices[0]?.message?.content || null
  } catch (error) {
    console.error('Error generating blog content:', error)
    return null
  }
}

export async function generateLocationContent(
  name: string, 
  areas: string[], 
  type?: string, 
  features?: string[]
): Promise<LocationSEOContent | null> {
  if (!openai) {
    // Return enhanced fallback content when OpenAI is not available
    return {
      title: `Toilet Hire in ${name} | Expert Portable Toilet Services | Chelford Mobile Services`,
      metaDescription: `Professional toilet hire services in ${name} and surrounding areas. Specialising in events, construction sites, and luxury facilities. Local 24/7 support, competitive rates, and rapid delivery. Serving ${areas.slice(0, 3).join(', ')} and beyond.`,
      keywords: [
        `${name.toLowerCase()} toilet hire`,
        `portable toilet rental ${name.toLowerCase()}`,
        `event toilet hire ${name.toLowerCase()}`,
        `construction site toilets ${name.toLowerCase()}`,
        'luxury toilet facilities',
        'disabled access toilets',
        'portable bathroom rental',
        'event sanitation solutions',
        'temporary toilet facilities',
        'portable toilet suppliers',
        'toilet trailer hire',
        'portable restroom services'
      ],
      h1: `Professional Toilet Hire Services in ${name}`,
      h2s: [
        `Complete Toilet Hire Solutions for ${name}`,
        'Comprehensive Range of Facilities',
        `Areas We Cover Around ${name}`,
        'Our Service Guarantees',
        'Competitive Hire Rates'
      ],
      content: `Welcome to Chelford Mobile Services, your trusted provider of professional toilet hire solutions in ${name} and surrounding areas. We understand that every event and project has unique requirements, which is why we offer a comprehensive range of portable toilet facilities to meet your specific needs.

Our extensive service area covers ${areas.join(', ')}, ensuring reliable and prompt delivery wherever you need us. With years of experience serving the ${name} region, we've built a reputation for excellence in both our facilities and customer service.

We provide a diverse range of toilet hire options including standard portable toilets, luxury toilet trailers, disabled access facilities, and specialized solutions for construction sites. All our units are regularly maintained and serviced to the highest standards of hygiene and comfort.

What sets us apart in ${name}:
• Local expertise and rapid response times
• 24/7 emergency support and maintenance
• Competitive pricing with no hidden costs
• Full service including delivery, setup, and collection
• Regular cleaning and servicing included
• Flexible hire periods to suit your needs

Whether you're planning a wedding in ${areas[0]}, managing a construction project in ${areas[1]}, or organizing a public event in ${areas[2]}, we have the perfect solution for your requirements. Contact us today to discuss your needs and receive a tailored quote.`,
      schema: {
        name: `Chelford Mobile Services - ${name} Toilet Hire`,
        description: `Professional toilet hire services in ${name} and surrounding areas, specializing in events, construction, and luxury facilities`,
        areaServed: {
          name: name,
          containsPlace: areas
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
  }

  try {
    const locationPrompt = `Generate unique, location-specific content for toilet hire services in ${name}, a ${type || 'local area'}${features ? ' known for ' + features.join(', ') : ''}. Consider the following aspects:

1. Local characteristics:
- Type: ${type || 'Not specified'}
- Notable features: ${features ? features.join(', ') : 'Not specified'}
- Common events and activities in this area
- Local business and development needs

2. Area-specific requirements:
- Events and venues typical to ${name}
- Construction and development projects
- Business and commercial needs
- Tourism and visitor facilities
- Seasonal considerations

3. Local context:
- Areas served: ${areas.join(', ')}
- Local landmarks and venues
- Specific challenges or requirements
- Regional events and activities

Format the response as JSON with this structure:
{
  "title": "Location-specific SEO title (50-60 chars)",
  "metaDescription": "Unique meta description highlighting local relevance (150-160 chars)",
  "keywords": ["array", "of", "location-specific", "keywords"],
  "h1": "Location-optimized main heading",
  "h2s": ["array", "of", "relevant", "subheadings"],
  "content": "Detailed, unique content that specifically addresses the local area's needs and characteristics",
  "schema": {
    "name": "Business name with location",
    "description": "Location-specific business description",
    "areaServed": {
      "name": "Location name",
      "containsPlace": ["array", "of", "areas", "served"]
    },
    "services": ["array", "of", "relevant", "services"]
  }
}`

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a local SEO expert with deep knowledge of UK geography and business needs. Generate unique, location-specific content that reflects the characteristics and requirements of each area."
        },
        {
          role: "user",
          content: locationPrompt
        }
      ],
      temperature: 0.8 // Increase creativity for more unique content
    })

    const content = completion.choices[0]?.message?.content
    if (!content) return null

    return JSON.parse(content) as LocationSEOContent
  } catch (error) {
    console.error('Error generating location content:', error)
    return null
  }
}
