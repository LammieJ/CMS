export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image?: string
  publishedAt: string
  author: string
  tags: string[]
  previousPost?: {
    slug: string
    title: string
  }
  nextPost?: {
    slug: string
    title: string
  }
}

const blogPosts: BlogPost[] = [
  {
    slug: 'choosing-the-right-portable-toilet',
    title: 'Choosing the Right Portable Toilet for Your Event',
    description: 'A comprehensive guide to selecting the perfect portable toilet solution for different types of events.',
    content: '...',
    image: '/images/blog/portable-toilet-guide.jpg',
    publishedAt: '2024-01-15',
    author: 'CMS Team',
    tags: ['Events', 'Guide', 'Portable Toilets']
  },
  {
    slug: 'construction-site-sanitation',
    title: 'Essential Guide to Construction Site Sanitation',
    description: 'Everything you need to know about maintaining proper sanitation standards on construction sites.',
    content: '...',
    image: '/images/blog/construction-sanitation.jpg',
    publishedAt: '2024-01-10',
    author: 'CMS Team',
    tags: ['Construction', 'Guide', 'Sanitation']
  }
]

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts()
  const index = posts.findIndex(post => post.slug === slug)
  
  if (index === -1) return null
  
  const post = posts[index]
  const previousPost = index > 0 ? posts[index - 1] : null
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null
  
  return {
    ...post,
    previousPost: previousPost ? { slug: previousPost.slug, title: previousPost.title } : undefined,
    nextPost: nextPost ? { slug: nextPost.slug, title: nextPost.title } : undefined
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  return blogPosts
    .filter(post => post.tags.includes(tag))
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
}

export async function getAllTags(): Promise<string[]> {
  const tags = new Set<string>()
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
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
