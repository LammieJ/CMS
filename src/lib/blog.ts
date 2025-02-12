import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_PATH = path.join(process.cwd(), 'content/blog')

export interface Post {
  slug: string
  title: string
  description: string
  publishedAt: string
  content: string
  image?: string
  tags?: string[]
  author?: {
    name: string
    image?: string
    bio?: string
  }
  previousPost?: {
    slug: string
    title: string
  }
  nextPost?: {
    slug: string
    title: string
  }
}

export type BlogPost = Post

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const post: Post = {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      content,
      image: data.image,
      tags: data.tags,
      author: data.author
    }

    return post
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

export async function getAllPosts(): Promise<Post[]> {
  try {
    const files = fs.readdirSync(POSTS_PATH)
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.mdx'))
        .map(async file => {
          const slug = file.replace('.mdx', '')
          const post = await getPostBySlug(slug)
          return post
        })
    )

    const validPosts = posts.filter((post): post is Post => post !== null)
    validPosts.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })

    // Add previous/next links
    validPosts.forEach((post, index) => {
      if (index > 0) {
        post.previousPost = {
          slug: validPosts[index - 1].slug,
          title: validPosts[index - 1].title
        }
      }
      if (index < validPosts.length - 1) {
        post.nextPost = {
          slug: validPosts[index + 1].slug,
          title: validPosts[index + 1].title
        }
      }
    })

    return validPosts
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.tags?.forEach(tag => {
      tags.add(tag)
    })
  })

  return Array.from(tags).sort()
}
