import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/shingling'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Shingling Services Stony Plain & Spruce Grove | IKO Preferred',
  description: 'Expert shingle installation in Stony Plain & Spruce Grove. IKO Cambridge & Dynasty shingles. Class 4 hail resistance. 15-year warranty. Call (780) 984-0221.',
  openGraph: {
    title: 'Shingling Services Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Expert shingle installation with IKO Cambridge & Dynasty. Class 4 hail resistance. 15-year warranty.',
    url: `${BASE_URL}/services/shingling`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shingling Services Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Expert shingle installation with IKO Cambridge & Dynasty. Class 4 hail resistance. 15-year warranty.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/shingling`,
  },
}

export default function ShinglingPage() {
  return <ServicePageClient serviceId="shingling" pageData={pageData} />
}
