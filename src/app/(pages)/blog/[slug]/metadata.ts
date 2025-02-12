import type { Metadata } from 'next'
import { getPostBySlug, type Post } from '@/lib/blog'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const ogImage = post.image || '/images/blog/default-cover.jpg'

  return {
    title: `${post.title} | Chelford Mobile Services Blog`,
    description: post.description,
    keywords: post.tags,
    authors: post.author ? [{ name: post.author.name }] : undefined,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://chelfordmobileservices.co.uk/blog/${post.slug}`,
      siteName: 'Chelford Mobile Services',
      locale: 'en_GB',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : undefined,
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: post.title
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogImage]
    },
    alternates: {
      canonical: `https://chelfordmobileservices.co.uk/blog/${post.slug}`
    }
  }
}

export function generatePostSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image || '/images/blog/default-cover.jpg',
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: post.author ? {
      '@type': 'Person',
      name: post.author.name,
      image: post.author.image,
      description: post.author.bio
    } : undefined,
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
    }
  }
}

export function generateBreadcrumbSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': 'https://chelfordmobileservices.co.uk/blog',
          name: 'Blog'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': `https://chelfordmobileservices.co.uk/blog/${post.slug}`,
          name: post.title
        }
      }
    ]
  }
}

export function generateSocialShareSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ShareAction',
    object: {
      '@type': 'Article',
      headline: post.title,
      url: `https://chelfordmobileservices.co.uk/blog/${post.slug}`
    },
    target: [
      {
        '@type': 'EntryPoint',
        urlTemplate: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://chelfordmobileservices.co.uk/blog/${post.slug}`
      },
      {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.facebook.com/sharer/sharer.php?u=https://chelfordmobileservices.co.uk/blog/${post.slug}`
      },
      {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.linkedin.com/shareArticle?mini=true&url=https://chelfordmobileservices.co.uk/blog/${post.slug}&title=${encodeURIComponent(post.title)}`
      }
    ]
  }
}

export function generateRelatedContentSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      ...(post.previousPost ? [{
        '@type': 'ListItem',
        position: 1,
        url: `https://chelfordmobileservices.co.uk/blog/${post.previousPost.slug}`,
        name: post.previousPost.title
      }] : []),
      ...(post.nextPost ? [{
        '@type': 'ListItem',
        position: 2,
        url: `https://chelfordmobileservices.co.uk/blog/${post.nextPost.slug}`,
        name: post.nextPost.title
      }] : [])
    ]
  }
}
