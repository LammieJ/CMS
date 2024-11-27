import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug } from '@/lib/blog'
import Image from 'next/image'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Chelford Mobile Services'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chelford Mobile Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chelfordmobileservices.co.uk/logo.png'
      }
    }
  }

  return {
    title: `${post.title} | Chelford Mobile Services Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Chelford Mobile Services'],
      tags: post.tags
    },
    alternates: {
      canonical: `https://chelfordmobileservices.co.uk/blog/${params.slug}`,
    },
    other: {
      'script[type="application/ld+json"]': JSON.stringify(jsonLd)
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}</time>
            {post.tags && (
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {post.image && (
          <div className="relative w-full aspect-[16/9] mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div className="mdx-content">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Share this article</h2>
          <div className="flex gap-4">
            <button className="text-blue-600 hover:text-blue-700">
              Share on Facebook
            </button>
            <button className="text-blue-400 hover:text-blue-500">
              Share on Twitter
            </button>
            <button className="text-blue-700 hover:text-blue-800">
              Share on LinkedIn
            </button>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Need help with toilet hire?</h2>
          <p className="mb-6">
            Contact our team for expert advice and competitive quotes for your event or project.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
            Get a Quote
          </button>
        </div>
      </article>
    </div>
  )
}
