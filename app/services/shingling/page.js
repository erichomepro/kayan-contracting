import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/shingling'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Shingling Services Stony Plain & Spruce Grove | IKO Preferred | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Shingling Services Stony Plain & Spruce Grove | IKO Preferred | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/shingling`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shingling Services Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/shingling`,
  },
}

export default function ShinglingPage() {
  return <ServicePageClient serviceId="shingling" pageData={pageData} />
}
