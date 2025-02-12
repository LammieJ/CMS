import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  eventDate?: string
  duration?: string
  location?: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as ContactFormData
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'service', 'message'] as const
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: Add your email service integration here
    // Example:
    // await sendEmail({
    //   to: 'info@chelfordmobileservices.co.uk',
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   text: `
    //     Name: ${data.name}
    //     Email: ${data.email}
    //     Phone: ${data.phone || 'Not provided'}
    //     Service: ${data.service}
    //     Event Date: ${data.eventDate || 'Not provided'}
    //     Duration: ${data.duration || 'Not provided'}
    //     Location: ${data.location || 'Not provided'}
    //     Message: ${data.message}
    //   `
    // })

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to submit form' 
      },
      { status: 500 }
    )
  }
}
