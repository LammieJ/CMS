import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { BlogPost } from './types'

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog')

function formatDate(date: Date | string | number): string {
  if (!date) return ''
  
  try {
    // If it's already a string in YYYY-MM-DD format, return it
    if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return date
    }
    
    // Convert to Date object if it's not already
    const dateObj = typeof date === 'string' || typeof date === 'number' 
      ? new Date(date)
      : date
    
    // Format as YYYY-MM-DD
    const year = dateObj.getFullYear()
    const month = String(dateObj.getMonth() + 1).padStart(2, '0')
    const day = String(dateObj.getDate()).padStart(2, '0')
    
    return `${year}-${month}-${day}`
  } catch (error) {
    console.error('Error formatting date:', error)
    return ''
  }
}

export async function getAllPosts(): Promise<BlogPost[]> {
  // Create the blog directory if it doesn't exist
  if (!fs.existsSync(POSTS_PATH)) {
    fs.mkdirSync(POSTS_PATH, { recursive: true })
  }

  const files = fs.readdirSync(POSTS_PATH)
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file)
      const source = fs.readFileSync(filePath, 'utf8')
      const { data } = matter(source)
      
      // Parse the frontmatter date
      let date = ''
      if (data.date) {
        // Try to parse the date from the frontmatter
        const parsedDate = formatDate(data.date)
        if (parsedDate) {
          date = parsedDate
        } else {
          // If parsing fails, try to extract date from filename or use current date
          const matches = file.match(/(\d{4}-\d{2}-\d{2})/)
          date = matches ? matches[1] : formatDate(new Date())
        }
      } else {
        // If no date in frontmatter, use current date
        date = formatDate(new Date())
      }
      
      return {
        slug: file.replace(/\.mdx?$/, ''),
        title: data.title || '',
        date,
        image: data.image || '',
        excerpt: data.excerpt || '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        content: source
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    })

  return posts
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(source)

    // Get all posts to find previous and next
    const allPosts = await getAllPosts()
    const currentIndex = allPosts.findIndex(post => post.slug === slug)
    
    // Parse the frontmatter date
    let date = ''
    if (data.date) {
      const parsedDate = formatDate(data.date)
      if (parsedDate) {
        date = parsedDate
      } else {
        const matches = slug.match(/(\d{4}-\d{2}-\d{2})/)
        date = matches ? matches[1] : formatDate(new Date())
      }
    } else {
      date = formatDate(new Date())
    }
    
    const post: BlogPost = {
      slug,
      title: data.title || '',
      date,
      image: data.image || '',
      excerpt: data.excerpt || '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      content: source,
      previousPost: currentIndex > 0 ? {
        slug: allPosts[currentIndex - 1].slug,
        title: allPosts[currentIndex - 1].title
      } : undefined,
      nextPost: currentIndex < allPosts.length - 1 ? {
        slug: allPosts[currentIndex + 1].slug,
        title: allPosts[currentIndex + 1].title
      } : undefined
    }

    return post
  } catch (error) {
    console.error(`Error getting post by slug ${slug}:`, error)
    return null
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts()
  return allPosts.filter((post) => post.tags?.includes(tag))
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}
