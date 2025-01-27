import { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Expert Toilet Hire Tips & Industry Insights | Chelford Mobile Services',
  description: 'Expert advice on portable toilet hire, event planning, and sanitation solutions. Discover professional tips, guides, and industry best practices from our experienced team.',
  keywords: [
    'toilet hire blog',
    'portable toilet tips',
    'event planning advice',
    'sanitation insights',
    'toilet hire guide',
    'event planning tips',
    'outdoor event planning',
    'construction site facilities',
    'event sanitation guide',
    'portable toilet maintenance',
    'toilet hire best practices',
    'event management tips',
    'festival planning guide',
    'construction site compliance',
    'sanitation solutions'
  ],
  openGraph: {
    title: 'Expert Toilet Hire Tips & Industry Insights | Chelford Mobile Services',
    description: 'Professional advice and comprehensive guides for successful event planning and toilet hire solutions.',
    url: 'https://chelfordmobileservices.co.uk/blog',
    siteName: 'Chelford Mobile Services',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/blog/placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Chelford Mobile Services Blog'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert Toilet Hire Tips & Industry Insights',
    description: 'Professional advice and guides for event planning and toilet hire.',
    images: ['/blog/placeholder.svg']
  },
  alternates: {
    canonical: 'https://chelfordmobileservices.co.uk/blog'
  }
}

export const generateBlogSchema = async () => {
  const posts = await getAllPosts()
  
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Chelford Mobile Services Blog",
    "description": "Expert advice and insights on portable toilet hire, event planning, and sanitation solutions",
    "url": "https://chelfordmobileservices.co.uk/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Chelford Mobile Services",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chelfordmobileservices.co.uk/images/logo.svg"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.image || '/blog/placeholder.svg',
      "datePublished": post.date,
      "dateModified": post.date,
      "author": {
        "@type": "Organization",
        "name": "Chelford Mobile Services"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Chelford Mobile Services",
        "logo": {
          "@type": "ImageObject",
          "url": "https://chelfordmobileservices.co.uk/images/logo.svg"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://chelfordmobileservices.co.uk/blog/${post.slug}`
      },
      "keywords": post.tags?.join(', ')
    }))
  }
}

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://chelfordmobileservices.co.uk"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://chelfordmobileservices.co.uk/blog"
    }
  ]
}

export const newsletterSchema = {
  "@context": "https://schema.org",
  "@type": "NewsletterService",
  "name": "Chelford Mobile Services Newsletter",
  "description": "Subscribe to receive expert tips, industry insights, and updates about portable toilet hire and event planning.",
  "provider": {
    "@type": "Organization",
    "name": "Chelford Mobile Services"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  }
}
