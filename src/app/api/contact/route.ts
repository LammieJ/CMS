import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Here you would integrate with your email service provider
    // Example using a service like SendGrid, Mailgun, etc.
    // For now, we'll just return success
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'service', 'message']
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
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
      message: 'Form submitted successfully' 
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
