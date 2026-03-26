import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/roof-repair'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roof Repair Stony Plain & Spruce Grove | Same-Day Service | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Roof Repair Stony Plain & Spruce Grove | Same-Day Service | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/roof-repair`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/roof-repair`,
  },
}

export default function RoofRepairPage() {
  return <ServicePageClient serviceId="roof-repair" pageData={pageData} />
}
