import { NextResponse } from 'next/server'
import { generateLocationContent } from '@/lib/openai'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { location, description } = body

    if (!location || !description) {
      return NextResponse.json(
        { error: 'Location and description are required' },
        { status: 400 }
      )
    }

    const content = await generateLocationContent({ location, description })

    return NextResponse.json({ content })
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    )
  }
}
