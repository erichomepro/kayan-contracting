import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/gutters'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Seamless Eavestroughing Stony Plain & Spruce Grove | Kayan Contracting',
  description: pageData.metaDescription,
  openGraph: {
    title: 'Seamless Eavestroughing Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
    url: `${BASE_URL}/services/gutters`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seamless Eavestroughing Stony Plain & Spruce Grove | Kayan Contracting',
    description: pageData.metaDescription,
  },
  alternates: {
    canonical: `${BASE_URL}/services/gutters`,
  },
}

export default function GuttersPage() {
  return <ServicePageClient serviceId="gutters" pageData={pageData} />
}
