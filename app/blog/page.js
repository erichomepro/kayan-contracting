import BlogClient from './blog-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Blog | Tips & Guides for Stony Plain & Alberta Homeowners',
  description:
    'Roofing tips from 22 years in Parkland County. Cost guides, maintenance checklists, material comparisons. Written by real Stony Plain roofers.',
  openGraph: {
    title: 'Roofing Blog | Tips & Guides for Alberta Homeowners | Kayan Contracting',
    description:
      'Roofing tips from 22 years in Parkland County. Cost guides, maintenance checklists, material comparisons.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Blog | Alberta Homeowner Guides | Kayan Contracting',
    description:
      'Roofing tips from 22 years in Parkland County. Written by real Stony Plain roofers.',
  },
  alternates: {
    canonical: `${BASE_URL}/blog`,
  },
}

export default function BlogPage() {
  return <BlogClient />
}
