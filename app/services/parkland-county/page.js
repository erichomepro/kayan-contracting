import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing & Exteriors in Parkland County, AB | Kayan Contracting',
  description:
    'Parkland County\'s trusted roofing and exterior contractor. Acreages, rural properties, and country homes. Roof replacement, metal roofing, steel siding. IKO Preferred. BBB A+. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing & Exteriors in Parkland County, AB | Kayan Contracting',
    description:
      'Parkland County\'s trusted contractor for acreages and rural properties. 22 years experience.',
    url: `${BASE_URL}/services/parkland-county`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing & Exteriors in Parkland County, AB | Kayan Contracting',
    description: 'Parkland County\'s trusted contractor for acreages and rural properties.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/parkland-county`,
  },
}

export default function ParklandCountyPage() {
  return (
    <LocationPageClient
      location="Parkland County"
      locationSlug="parkland-county"
      description="Parkland County acreages and rural properties face unique roofing challenges — larger roof areas, exposure to open-field winds, and longer distances from service providers. Kayan Contracting specializes in acreage roofing and exterior work throughout the county. We've completed projects from Tomahawk to Entwistle to Wabamun and everywhere in between."
      highlights={[
        'Specialists in acreage and rural property roofing',
        'Metal roofing experts — ideal for large rural properties',
        'Serving all of Parkland County including remote acreages',
        'Experience with large-scale commercial agricultural buildings',
        'Free on-site inspections — we come to you, no matter how far',
      ]}
    />
  )
}
