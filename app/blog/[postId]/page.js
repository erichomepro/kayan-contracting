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
    title: post.title,
    description: post.metaDescription || post.excerpt?.slice(0, 155),
    openGraph: {
      title: `${post.title} | Kayan Contracting`,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${post.id}`,
      type: 'article',
      publishedTime: post.publishDate,
      modifiedTime: post.modifiedDate || post.publishDate,
      authors: ['Bryan Dewey'],
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
        dateModified: post.modifiedDate || post.publishDate,
        author: {
          '@type': 'Person',
          name: 'Bryan Dewey',
          jobTitle: 'Owner & Lead Roofer',
          worksFor: {
            '@type': 'Organization',
            name: company.name,
          },
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

  // FAQ schema — extract Q&A pairs from content sections with FAQ-style formatting
  const faqSchema = post ? (() => {
    const faqSection = post.sections.find(
      (s) => s.type === 'content' && s.title && s.title.toLowerCase().includes('frequently asked')
    )
    if (!faqSection) return null

    // Parse **Question?**\nAnswer pairs from content
    const pairs = []
    const lines = faqSection.content.split('\n').filter(Boolean)
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^\*\*(.+?)\*\*$/)
      if (match && i + 1 < lines.length) {
        pairs.push({ q: match[1], a: lines[i + 1] })
      }
    }
    if (pairs.length === 0) return null

    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pairs.map((p) => ({
        '@type': 'Question',
        name: p.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: p.a,
        },
      })),
    }
  })() : null

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostClient postId={params.postId} />
    </>
  )
}
