import { blogPosts } from '@/data/blogPosts'
import { company } from '@/data/company'
import BlogPostClient from './blog-post-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    postId: post.id,
  }))
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.id === params.postId)

  if (!post) {
    return {
      title: 'Post Not Found | Kayan Contracting',
    }
  }

  return {
    title: `${post.title} | Kayan Contracting`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Kayan Contracting`,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.id}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [company.name],
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Kayan Contracting`,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post.id}`,
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.id === params.postId)

  // Article schema for blog posts
  const articleSchema = post
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishDate,
        author: {
          '@type': 'Organization',
          name: company.name,
        },
        publisher: {
          '@type': 'Organization',
          name: company.name,
          url: BASE_URL,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${BASE_URL}/blog/${post.id}`,
        },
        image: post.coverImage,
      }
    : null

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostClient postId={params.postId} />
    </>
  )
}
