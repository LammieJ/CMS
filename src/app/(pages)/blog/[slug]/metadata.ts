import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/blog'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Chelford Mobile Services Blog',
      description: 'The requested blog post could not be found.',
      robots: {
        index: false,
        follow: false
      }
    }
  }

  return {
    title: `${post.title} | Expert Toilet Hire Insights | Chelford Mobile Services`,
    description: post.excerpt,
    keywords: [
      ...(post.tags || []),
      'toilet hire advice',
      'event planning tips',
      'sanitation solutions',
      'portable toilet guide',
      'event facilities'
    ],
    authors: [{ name: 'Chelford Mobile Services' }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Chelford Mobile Services'],
      tags: post.tags,
      images: [
        {
          url: post.image || '/blog/placeholder.svg',
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      siteName: 'Chelford Mobile Services',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || '/blog/placeholder.svg']
    },
    alternates: {
      canonical: `https://chelfordmobileservices.co.uk/blog/${params.slug}`
    }
  }
}

import { BlogPost } from '@/lib/types'

export const generatePostSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://chelfordmobileservices.co.uk/blog/placeholder.svg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Chelford Mobile Services',
      url: 'https://chelfordmobileservices.co.uk'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chelford Mobile Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chelfordmobileservices.co.uk/images/logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://chelfordmobileservices.co.uk/blog/${post.slug}`
    },
    keywords: post.tags?.join(', '),
    articleBody: post.content,
    wordCount: post.content.split(/\s+/).length
  }
}

export const generateBreadcrumbSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://chelfordmobileservices.co.uk'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://chelfordmobileservices.co.uk/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://chelfordmobileservices.co.uk/blog/${post.slug}`
      }
    ]
  }
}

export const generateSocialShareSchema = (post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'InteractionCounter',
    interactionType: {
      '@type': 'ShareAction'
    },
    userInteractionCount: 0,
    target: {
      '@type': 'WebPage',
      '@id': `https://chelfordmobileservices.co.uk/blog/${post.slug}`
    }
  }
}

export const generateRelatedContentSchema = (_post: BlogPost) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Related Content',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Article',
          name: 'Need help with toilet hire?',
          description: 'Contact our team for expert advice and competitive quotes for your event or project.',
          url: 'https://chelfordmobileservices.co.uk/contact'
        }
      }
    ]
  }
}
