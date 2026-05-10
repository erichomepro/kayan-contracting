import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/gutters'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Seamless Eavestroughing & Gutters Stony Plain & Spruce Grove',
  description: 'Custom seamless eavestroughing in Stony Plain & Spruce Grove. 5" and 6" profiles built on-site. No joints, no leaks. 30+ colours. Call (780) 984-0221.',
  openGraph: {
    title: 'Seamless Eavestroughing & Gutters Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Custom seamless eavestroughing built on-site. 5" and 6" profiles. No joints, no leaks. 30+ colours.',
    url: `${BASE_URL}/services/gutters`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seamless Eavestroughing & Gutters | Kayan Contracting',
    description: 'Custom seamless eavestroughing built on-site. No joints, no leaks. 30+ colours.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/gutters`,
  },
}

export default function GuttersPage() {
  return <ServicePageClient serviceId="gutters" pageData={pageData} />
}
