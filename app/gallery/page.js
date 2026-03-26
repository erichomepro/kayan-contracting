import GalleryClient from './gallery-client'

// UPDATE BASE_URL when domain is confirmed
const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Project Gallery | Before & After | Kayan Contracting Stony Plain',
  description:
    'Browse our portfolio of roofing, metal, siding, and exterior projects across Stony Plain, Spruce Grove, and Parkland County. Real photos from real jobs — no stock images.',
  openGraph: {
    title: 'Roofing Project Gallery | Before & After | Kayan Contracting Stony Plain',
    description:
      'Browse our portfolio of roofing, metal, siding, and exterior projects across Stony Plain, Spruce Grove, and Parkland County.',
    url: `${BASE_URL}/gallery`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Project Gallery | Before & After | Kayan Contracting Stony Plain',
    description:
      'Browse our portfolio of roofing, metal, siding, and exterior projects across Parkland County.',
  },
  alternates: {
    canonical: `${BASE_URL}/gallery`,
  },
}

export default function GalleryPage() {
  return <GalleryClient />
}
