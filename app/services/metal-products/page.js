import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/metal-products'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Metal Roofing & Siding Stony Plain | 40-70 Year Lifespan | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Metal Roofing & Siding Stony Plain | 40-70 Year Lifespan | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/metal-products`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Metal Roofing & Siding Stony Plain | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/metal-products`,
  },
}

export default function MetalProductsPage() {
  return <ServicePageClient serviceId="metal-products" pageData={pageData} />
}
