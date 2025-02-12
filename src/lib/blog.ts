interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  image?: string
  publishedAt: string
  author: string
  tags: string[]
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

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find(post => post.slug === slug)
  return post || null
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
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
