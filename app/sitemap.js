import { blogPosts } from '@/data/blogPosts'

// UPDATE THIS when the domain is confirmed
const BASE_URL = 'https://www.kayancontracting.ca'

export default function sitemap() {
  const servicePages = [
    'roof-replacement',
    'shingling',
    'metal-products',
    'steel-siding',
    'roof-repair',
    'gutters',
    'soffits-fascia',
  ]

  const locationPages = [
    'stony-plain',
    'spruce-grove',
    'parkland-county',
    'edmonton',
  ]

  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const serviceEntries = servicePages.map((id) => ({
    url: `${BASE_URL}/services/${id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const locationEntries = locationPages.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.id}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticPages, ...serviceEntries, ...locationEntries, ...blogEntries]
}
