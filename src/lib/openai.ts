import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

interface GenerateContentParams {
  location: string
  description: string
}

export async function generateLocationContent({ location, description }: GenerateContentParams) {
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
          content: `Write content for our ${location} service area. Include this description: ${description}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error generating content:', error)
    throw new Error('Failed to generate content')
  }
}

export async function generateBlogImage(prompt: string) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `Professional, clean image for a portable toilet hire company blog post about: ${prompt}. Style should be modern and corporate.`,
      n: 1,
      size: "1024x1024",
      quality: "standard",
      response_format: "url"
    })

    return response.data[0].url
  } catch (error) {
    console.error('Error generating image:', error)
    throw new Error('Failed to generate image')
  }
}
