import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/steel-siding'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Steel Siding Installation Stony Plain & Spruce Grove | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Steel Siding Installation Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/steel-siding`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steel Siding Installation Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/steel-siding`,
  },
}

export default function SteelSidingPage() {
  return <ServicePageClient serviceId="steel-siding" pageData={pageData} />
}
