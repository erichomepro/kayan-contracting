import BlogClient from './blog-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Blog | Tips & Guides for Alberta Homeowners | Kayan Contracting',
  description:
    'Honest advice, how-to guides, and lessons from 22 years of roofing across Stony Plain, Spruce Grove, and Parkland County. Written by real roofers.',
  openGraph: {
    title: 'Roofing Blog | Tips & Guides for Alberta Homeowners | Kayan Contracting',
    description:
      'Honest advice, how-to guides, and lessons from 22 years of roofing across Stony Plain, Spruce Grove, and Parkland County.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Blog | Tips & Guides for Alberta Homeowners | Kayan Contracting',
    description:
      'Honest roofing advice from 22 years of experience in Parkland County.',
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
}

export default function BlogPage() {
  return <BlogClient />
}
