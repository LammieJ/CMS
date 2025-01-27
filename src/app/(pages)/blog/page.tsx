import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { getAllPosts } from '@/lib/blog'
import { generateBlogSchema, breadcrumbSchema, newsletterSchema } from './metadata'
import NewsletterForm from '@/components/blog/newsletter-form'

function formatDate(dateString: string) {
  if (!dateString) return ''
  
  try {
    // Create a date object from the YYYY-MM-DD string
    const date = new Date(dateString)
    // Check if the date is valid
    if (isNaN(date.getTime())) return dateString

    // Format the date using British English locale
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date)
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString
  }
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  const blogSchema = await generateBlogSchema()

  return (
    <div className="container mx-auto px-4 py-16">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="newsletter-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
      />
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Expert Insights & Guides</h1>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-12">
            Discover professional tips, industry insights, and comprehensive guides for successful event planning and toilet hire.
          </p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
            <article key={post.slug} className="blog-card group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="blog-card-image">
                  <Image
                    src={post.image || '/blog/placeholder.svg'}
                    alt={post.title}
                    fill
                    priority={true}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <time dateTime={post.date} className="font-medium">
                      {formatDate(post.date)}
                    </time>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
                  <h2 className="blog-card-title group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="blog-card-excerpt">
                    {post.excerpt}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>

        <NewsletterForm />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Need Expert Advice?</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Our team is here to help you plan your event's sanitation needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/90"
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
          <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Quick Quote</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-6">
              Get an instant quote for your toilet hire requirements.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center text-primary hover:text-primary/90"
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
