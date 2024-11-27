import { NextRequest, NextResponse } from 'next/server'
import { generateLocationContent } from '@/lib/openai'

interface LocationRequest {
  name: string;
  areas: string[];
  type?: string;
  features?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { name, areas, type, features } = await request.json() as LocationRequest

    if (!name || !areas) {
      console.error('Missing required fields:', { name, areas })
      return NextResponse.json(
        { error: 'Name and areas are required' },
        { status: 400 }
      )
    }

    console.log('Generating content for location:', { name, areas, type, features })
    const content = await generateLocationContent(name, areas, type, features)
    
    if (!content) {
      console.error('Content generation failed for:', { name, areas })
      return NextResponse.json(
        { error: 'Failed to generate content' },
        { status: 500 }
      )
    }

    console.log('Successfully generated content for:', name)
    return NextResponse.json(content)
  } catch (error) {
    console.error('Error in location content generation:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Configure runtime for edge compatibility
export const runtime = 'edge'

// Add CORS headers
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
