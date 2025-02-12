import OpenAI from 'openai'
import type { LocationSEOContent } from './types'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key'
})

interface GenerateContentParams {
  location: string
  description: string
}

export async function generateLocationContent({ location, description }: GenerateContentParams): Promise<LocationSEOContent> {
  if (!process.env.OPENAI_API_KEY) {
    // Return fallback content if API key is not available
    return {
      title: `Toilet Hire in ${location} | Expert Portable Toilet Services`,
      metaDescription: `Professional toilet hire services in ${location}. Quality facilities for events, construction sites, and more. Local, reliable service with 24/7 support.`,
      keywords: [
        `${location.toLowerCase()} toilet hire`,
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
      h1: `Professional Toilet Hire Services in ${location}`,
      h2s: [
        `Complete Toilet Hire Solutions for ${location}`,
        'Comprehensive Range of Facilities',
        `Areas We Cover Around ${location}`,
        'Our Service Guarantees',
        'Competitive Hire Rates'
      ],
      content: `Welcome to Chelford Mobile Services, your trusted provider of professional toilet hire solutions in ${location} and surrounding areas including ${description}. We understand that every event and project has unique requirements, which is why we offer a comprehensive range of portable toilet facilities to meet your specific needs.

We provide a diverse range of toilet hire options including standard portable toilets, luxury toilet trailers, disabled access facilities, and specialized solutions for construction sites. All our units are regularly maintained and serviced to the highest standards of hygiene and comfort.

What sets us apart in ${location}:
• Local expertise and rapid response times
• 24/7 emergency support and maintenance
• Competitive pricing with no hidden costs
• Full service including delivery, setup, and collection
• Regular cleaning and servicing included
• Flexible hire periods to suit your needs`,
      schema: {
        name: `Chelford Mobile Services - ${location}`,
        description: `Professional toilet hire services in ${location} and surrounding areas, specializing in events, construction, and luxury facilities`,
        areaServed: {
          name: location,
          containsPlace: description.split(', ')
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
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a professional content writer for a portable toilet hire company. Write engaging, SEO-friendly content that highlights our services in specific locations. Focus on local relevance, service quality, and customer benefits.`
        },
        {
          role: "user",
          content: `Generate SEO content for our ${location} service area. Include this description: ${description}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })

    const content = completion.choices[0].message.content
    if (!content) throw new Error('No content generated')

    // Transform the content into LocationSEOContent format
    return {
      title: `Toilet Hire in ${location} | Expert Portable Toilet Services`,
      metaDescription: `Professional toilet hire services in ${location}. Quality facilities for events, construction sites, and more. Local, reliable service with 24/7 support.`,
      keywords: [
        `${location.toLowerCase()} toilet hire`,
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
      h1: `Professional Toilet Hire Services in ${location}`,
      h2s: [
        `Complete Toilet Hire Solutions for ${location}`,
        'Comprehensive Range of Facilities',
        `Areas We Cover Around ${location}`,
        'Our Service Guarantees',
        'Competitive Hire Rates'
      ],
      content,
      schema: {
        name: `Chelford Mobile Services - ${location}`,
        description: `Professional toilet hire services in ${location} and surrounding areas, specializing in events, construction, and luxury facilities`,
        areaServed: {
          name: location,
          containsPlace: description.split(', ')
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
  } catch (error) {
    console.error('Error generating content:', error)
    throw new Error('Failed to generate content')
  }
}

export async function generateImage(prompt: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    // Return a fallback image URL if API key is not available
    return '/blog/placeholder.svg'
  }

  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Professional, clean image for a portable toilet hire company blog post about: ${prompt}. Style should be modern and corporate.`,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      response_format: "url"
    })

    if (!response.data[0].url) {
      throw new Error('No image URL returned from OpenAI')
    }

    return response.data[0].url
  } catch (error) {
    console.error('Error generating image:', error)
    return '/blog/placeholder.svg'
  }
}

// Alias for backward compatibility
export const generateBlogImage = generateImage
