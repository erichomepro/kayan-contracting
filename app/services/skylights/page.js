import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/skylights'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Skylight Installation & Repair Stony Plain & Spruce Grove',
  description: 'Leak-free skylight installation & repair in Stony Plain & Spruce Grove. Curb-mounted, properly flashed, 15-year workmanship warranty. Call (780) 984-0221.',
  openGraph: {
    title: 'Skylight Installation & Repair Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Leak-free skylight installation by roofers with 22 years of experience. Curb-mounted, properly flashed, 15-year workmanship warranty.',
    url: `${BASE_URL}/services/skylights`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylight Installation & Repair | Kayan Contracting',
    description: 'Leak-free skylight installation by roofers. Curb-mounted, properly flashed, 15-year workmanship warranty.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/skylights`,
  },
}

export default function SkylightsPage() {
  return <ServicePageClient serviceId="skylights" pageData={pageData} />
}
