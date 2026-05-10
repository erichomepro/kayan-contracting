import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/roof-repair'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roof Repair Stony Plain & Spruce Grove | Same-Day Service',
  description: 'Fast roof repair in Stony Plain & Spruce Grove. Leaks, storm damage, hail damage. Same-day service available. Honest repair-vs-replace assessment. Call (780) 984-0221.',
  openGraph: {
    title: 'Roof Repair Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Fast roof repair in Stony Plain & Spruce Grove. Leaks, storm damage, hail damage. Same-day service.',
    url: `${BASE_URL}/services/roof-repair`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Fast roof repair. Leaks, storm damage, hail damage. Same-day service available.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/roof-repair`,
  },
}

export default function RoofRepairPage() {
  return <ServicePageClient serviceId="roof-repair" pageData={pageData} />
}
