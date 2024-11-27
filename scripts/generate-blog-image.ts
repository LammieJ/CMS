import { generateImage } from '../src/lib/openai'

const blogPosts = [
  {
    name: 'event-planning',
    prompt: 'A professional event planning scene with portable toilets discreetly placed in an elegant outdoor wedding or festival setting. Clean, modern style.'
  },
  {
    name: 'winter-event',
    prompt: 'Portable toilet facilities at a winter outdoor event, with proper lighting and weather protection. Professional and clean appearance.'
  }
]

async function generateBlogImages() {
  for (const post of blogPosts) {
    console.log(`Generating image for ${post.name}...`)
    try {
      const imageUrl = await generateImage(post.prompt)
      if (imageUrl) {
        console.log(`Success! Image URL: ${imageUrl}`)
      } else {
        console.log(`Failed to generate image for ${post.name}`)
      }
    } catch (error) {
      console.error(`Error generating image for ${post.name}:`, error)
    }
  }
}

generateBlogImages().catch(console.error)
