import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing & Exteriors in Stony Plain, AB | Kayan Contracting',
  description:
    'Kayan Contracting has been Stony Plain\'s trusted roofing and exterior contractor since 2003. Roof replacement, shingling, metal roofing, steel siding, gutters, soffits & fascia. IKO Preferred. BBB A+. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing & Exteriors in Stony Plain, AB | Kayan Contracting',
    description:
      'Stony Plain\'s trusted roofing contractor since 2003. IKO Preferred. BBB A+. 1,500+ homeowners served.',
    url: `${BASE_URL}/services/stony-plain`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing & Exteriors in Stony Plain, AB | Kayan Contracting',
    description:
      'Stony Plain\'s trusted roofing contractor since 2003. IKO Preferred. BBB A+.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/stony-plain`,
  },
}

export default function StonyPlainPage() {
  return (
    <LocationPageClient
      location="Stony Plain"
      locationSlug="stony-plain"
      description="Based right here in Stony Plain since 2003, Kayan Contracting is the local contractor your neighbours trust. We've completed hundreds of roofing and exterior projects throughout the town — from the established neighbourhoods near downtown to the newer developments along Highway 779. When you drive through Stony Plain, you're looking at our work."
      highlights={[
        'Headquartered in Stony Plain since 2003',
        'Hundreds of completed projects in every neighbourhood',
        'Same-day emergency repairs for Stony Plain residents',
        'Free on-site inspections with FLIR thermal imaging',
        'References available from your neighbours',
      ]}
    />
  )
}
