import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/soffits-fascia'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Soffits & Fascia Installation Stony Plain | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Soffits & Fascia Installation Stony Plain | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/soffits-fascia`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soffits & Fascia Installation Stony Plain | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/soffits-fascia`,
  },
}

export default function SoffitsFasciaPage() {
  return <ServicePageClient serviceId="soffits-fascia" pageData={pageData} />
}
