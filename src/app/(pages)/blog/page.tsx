import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Chelford Mobile Services',
  description: 'Latest news, guides, and insights about portable toilet hire and event sanitation solutions.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Latest News & Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert advice, industry insights, and helpful guides about portable toilet hire and event sanitation solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative bg-card rounded-lg shadow-sm border border-border hover:border-primary transition-colors"
          >
            {post.image && (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
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
                <span>{post.author?.name}</span>
                <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
