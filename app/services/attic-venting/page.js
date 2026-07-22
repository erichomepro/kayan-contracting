import ServicePageClient from '../service-page-client'
import pageData from '@/data/service-pages/attic-venting'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Attic Venting Installation & Repair Stony Plain & Spruce Grove',
  description: 'Attic ventilation installation & repair in Stony Plain & Spruce Grove. Ridge vents, solar vents, vented soffits. Stops ice dams. Free FLIR thermal scan. Call (780) 984-0221.',
  openGraph: {
    title: 'Attic Venting Installation & Repair Stony Plain & Spruce Grove | Kayan Contracting',
    description: 'Attic ventilation that stops ice dams and extends shingle life. Ridge vents, solar vents, vented soffits. Free FLIR thermal scan.',
    url: `${BASE_URL}/services/attic-venting`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attic Venting Installation & Repair | Kayan Contracting',
    description: 'Attic ventilation that stops ice dams and extends shingle life. Free FLIR thermal scan.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/attic-venting`,
  },
}

export default function AtticVentingPage() {
  return <ServicePageClient serviceId="attic-venting" pageData={pageData} />
}
