import { generateImage } from '../src/lib/openai'

const services = [
  {
    name: 'portable-toilet',
    prompt: 'A clean, modern portable toilet unit in a professional setting, with a blue and white color scheme. Photorealistic style.'
  },
  {
    name: 'luxury-toilet',
    prompt: 'A luxury portable toilet trailer with high-end finishes, chrome fixtures, and elegant lighting. Exterior view. Photorealistic style.'
  },
  {
    name: 'event-toilets',
    prompt: 'Multiple portable toilet units set up at an outdoor event venue, with clean and professional appearance. Photorealistic style.'
  }
]

async function generateServiceImages() {
  for (const service of services) {
    console.log(`Generating image for ${service.name}...`)
    try {
      const imageUrl = await generateImage(service.prompt)
      if (imageUrl) {
        console.log(`Success! Image URL: ${imageUrl}`)
      } else {
        console.log(`Failed to generate image for ${service.name}`)
      }
    } catch (error) {
      console.error(`Error generating image for ${service.name}:`, error)
    }
  }
}

generateServiceImages().catch(console.error)
