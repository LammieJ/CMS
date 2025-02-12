import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/blog'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import {
  generatePostSchema,
  generateBreadcrumbSchema,
  generateSocialShareSchema,
  generateRelatedContentSchema
} from './metadata'

function formatDate(dateString: string) {
  try {
    const [year, month, day] = dateString.split('-').map(Number)
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  } catch (error) {
    console.error('Error formatting date:', error)
    return dateString // Return original string if parsing fails
  }
}

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const postSchema = generatePostSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(post)
  const socialShareSchema = generateSocialShareSchema(post)
  const relatedContentSchema = generateRelatedContentSchema([post]) // Pass as array

  return (
    <div className="container mx-auto px-4 py-16">
      <Script
        id="post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="social-share-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(socialShareSchema) }}
      />
      <Script
        id="related-content-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(relatedContentSchema) }}
      />
      <article className="blog-content mdx-content" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="description" content={post.description} />
        <meta itemProp="datePublished" content={post.publishedAt} />
        <meta itemProp="dateModified" content={post.publishedAt} />
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center gap-6 text-lg dark:text-primary" itemProp="datePublished">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            {post.tags && (
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm dark:text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {post.image && (
          <div className="relative w-full aspect-[16/9] mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <MDXRemote source={post.content} />

        <div className="mt-12 pt-8 border-t space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Share this article</h2>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://chelfordmobileservices.co.uk/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/90 transition-colors"
              >
                Share on Facebook
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://chelfordmobileservices.co.uk/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/90 transition-colors"
              >
                Share on Twitter
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://chelfordmobileservices.co.uk/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/90 transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Need help with toilet hire?</h2>
            <p className="mb-6 dark:text-primary">
              Contact our team for expert advice and competitive quotes for your event or project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <nav className="flex justify-between items-center pt-8 border-t">
            <div>
              {post.previousPost && (
                <Link
                  href={`/blog/${post.previousPost.slug}`}
                  className="text-primary hover:text-primary/90 transition-colors"
                >
                  ← {post.previousPost.title}
                </Link>
              )}
            </div>
            <div>
              {post.nextPost && (
                <Link
                  href={`/blog/${post.nextPost.slug}`}
                  className="text-primary hover:text-primary/90 transition-colors"
                >
                  {post.nextPost.title} →
                </Link>
              )}
            </div>
          </nav>
        </div>
      </article>
    </div>
  )
}
