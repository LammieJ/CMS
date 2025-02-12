import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts, getAllTags, type BlogPost } from '@/lib/blog'
import { cn } from '@/lib/utils'

export default async function BlogPage() {
  const [posts, tags] = await Promise.all([
    getAllPosts(),
    getAllTags()
  ])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Stay updated with our latest insights, guides, and news about portable toilet hire and event sanitation solutions.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Topics</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className={cn(
                "px-3 py-1 rounded-full text-sm",
                "bg-primary/10 text-primary hover:bg-primary/20",
                "transition-colors duration-200"
              )}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: BlogPost) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={cn(
              "group relative bg-card rounded-lg overflow-hidden",
              "border border-border hover:border-primary",
              "transition-all duration-200 transform hover:-translate-y-1"
            )}
          >
            {post.image && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
