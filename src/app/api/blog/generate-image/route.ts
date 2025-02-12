import { NextResponse } from 'next/server'
import { generateImage } from '@/lib/openai'

export const runtime = 'edge'

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      )
    }

    // Generate image URL using DALL-E
    const imageUrl = await generateImage(prompt)

    // Return the image URL or fallback
    return NextResponse.json({
      success: true,
      imageUrl
    })

  } catch (error) {
    console.error('Error generating blog image:', error)
    return NextResponse.json(
      { error: 'Failed to process image generation' },
      { status: 500 }
    )
  }
}
