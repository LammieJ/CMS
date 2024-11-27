import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Expert Toilet Hire Tips & Insights | Chelford Mobile Services',
  description: 'Expert advice on portable toilet hire, event planning, and sanitation solutions. Stay updated with the latest industry insights and tips.',
  keywords: 'toilet hire blog, portable toilet tips, event planning advice, sanitation insights, toilet hire guide',
  openGraph: {
    title: 'Blog | Expert Toilet Hire Tips & Insights',
    description: 'Expert advice and insights on portable toilet hire and event planning.',
    type: 'website',
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Expert Insights & Guides</h1>
        <p className="text-xl dark:text-primary mb-12">
          Discover professional tips, industry insights, and comprehensive guides for successful event planning and toilet hire.
        </p>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={post.image || '/blog/placeholder.svg'}
                        alt={post.title}
                        fill
                        priority={index === 0}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 text-sm dark:text-primary mb-3">
                      <time dateTime={post.date} className="font-medium">
                        {new Date(post.date).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="dark:text-primary mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="dark:text-primary mb-6">
            Get the latest insights, tips, and industry updates delivered directly to your inbox.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Need Expert Advice?</h2>
            <p className="dark:text-primary mb-4">
              Our team is here to help you plan your event's sanitation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Contact Us
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Quick Quote</h2>
            <p className="dark:text-primary mb-4">
              Get an instant quote for your toilet hire requirements.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              View Pricing
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
