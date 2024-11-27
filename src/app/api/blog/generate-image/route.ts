import { NextResponse } from 'next/server'
import { generateImage } from '@/lib/openai'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import fetch from 'node-fetch'

const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

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

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    // Download the image
    const response = await fetch(imageUrl)
    const buffer = await response.arrayBuffer()

    // Ensure the blog images directory exists
    const publicDir = path.join(process.cwd(), 'public')
    const blogImagesDir = path.join(publicDir, 'blog')
    
    if (!fs.existsSync(blogImagesDir)) {
      await mkdir(blogImagesDir, { recursive: true })
    }

    // Generate a unique filename
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.png`
    const filepath = path.join(blogImagesDir, filename)

    // Save the image
    await writeFile(filepath, Buffer.from(buffer))

    // Return the relative path to the image
    return NextResponse.json({
      success: true,
      imagePath: `/blog/${filename}`
    })

  } catch (error) {
    console.error('Error generating blog image:', error)
    return NextResponse.json(
      { error: 'Failed to process image generation' },
      { status: 500 }
    )
  }
}
