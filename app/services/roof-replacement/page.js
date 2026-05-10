import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/roof-replacement'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roof Replacement Stony Plain & Spruce Grove | Free Estimates',
  description: 'Complete roof replacement in Stony Plain & Spruce Grove. IKO Preferred Contractor, 22 years experience. 15-year warranty. Free inspection. Call (780) 984-0221.',
  openGraph: {
    title: 'Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Complete roof replacement in Stony Plain & Spruce Grove. IKO Preferred Contractor, 22 years experience. 15-year warranty. Free inspection.',
    url: `${BASE_URL}/services/roof-replacement`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Complete roof replacement in Stony Plain & Spruce Grove. IKO Preferred. 15-year warranty. Free inspection.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/roof-replacement`,
  },
}

export default function RoofReplacementPage() {
  return <ServicePageClient serviceId="roof-replacement" pageData={pageData} />
}
