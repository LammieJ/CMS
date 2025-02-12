import { Metadata } from 'next'
import { getBlogPost } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const { title, description, image, publishedAt, author } = post

  return {
    title,
    description,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: publishedAt,
      authors: [author],
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title
        }
      ] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined
    }
  }
}
