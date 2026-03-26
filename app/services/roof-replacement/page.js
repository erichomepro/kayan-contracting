import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/roof-replacement'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting | Free Estimates',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting | Free Estimates',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/roof-replacement`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/roof-replacement`,
  },
}

export default function RoofReplacementPage() {
  return <ServicePageClient serviceId="roof-replacement" pageData={pageData} />
}
