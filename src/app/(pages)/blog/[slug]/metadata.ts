import { Metadata } from 'next'
import { getPostBySlug, type BlogPost } from '@/lib/blog'

interface Props {
  params: { slug: string }
}

export function generatePostSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author
    }
  }
}

export function generateBreadcrumbSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': '/',
          name: 'Home'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': '/blog',
          name: 'Blog'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@id': `/blog/${post.slug}`,
          name: post.title
        }
      }
    ]
  }
}

export function generateSocialShareSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ShareAction',
    object: {
      '@type': 'BlogPosting',
      headline: post.title,
      url: `/blog/${post.slug}`
    }
  }
}

export function generateRelatedContentSchema(relatedPosts: BlogPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: relatedPosts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: post.title,
        url: `/blog/${post.slug}`
      }
    }))
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

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
