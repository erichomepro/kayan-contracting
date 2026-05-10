import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/metal-products'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Metal Roofing & Siding Stony Plain & Spruce Grove | 40-70 Year Lifespan',
  description: 'Metal roofing & siding in Stony Plain & Spruce Grove. Standing seam, snaplock, steel siding. 40-70 year lifespan. Hail & wind resistant. Call (780) 984-0221.',
  openGraph: {
    title: 'Metal Roofing & Siding Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Metal roofing & siding built for Alberta weather. Standing seam, snaplock, steel siding. 40-70 year lifespan.',
    url: `${BASE_URL}/services/metal-products`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Roofing & Siding Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Metal roofing & siding built for Alberta weather. 40-70 year lifespan. Hail & wind resistant.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/metal-products`,
  },
}

export default function MetalProductsPage() {
  return <ServicePageClient serviceId="metal-products" pageData={pageData} />
}
