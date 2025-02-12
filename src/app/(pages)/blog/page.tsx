import { getAllBlogPosts } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const metadata = {
  title: 'Blog | Toilet Hire Insights and Updates',
  description: 'Stay informed with our latest articles about portable toilet hire, event planning, construction site facilities, and sanitation solutions.'
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Articles</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map(post => (
          <motion.article
            key={post.slug}
            variants={itemVariants}
            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {post.image && (
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
