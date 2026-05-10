import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/soffits-fascia'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Soffits & Fascia Installation Stony Plain & Spruce Grove',
  description: 'Professional soffit & fascia installation in Stony Plain & Spruce Grove. Proper attic ventilation, moisture protection. Aluminum & vinyl options. Call (780) 984-0221.',
  openGraph: {
    title: 'Soffits & Fascia Installation Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Professional soffit & fascia installation. Proper attic ventilation, moisture protection. Aluminum & vinyl.',
    url: `${BASE_URL}/services/soffits-fascia`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soffits & Fascia Installation | Kayan Contracting',
    description: 'Professional soffit & fascia installation. Proper attic ventilation, moisture protection.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/soffits-fascia`,
  },
}

export default function SoffitsFasciaPage() {
  return <ServicePageClient serviceId="soffits-fascia" pageData={pageData} />
}
