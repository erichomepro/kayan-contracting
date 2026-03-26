import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing & Exteriors in Edmonton, AB | Kayan Contracting',
  description:
    'Edmonton roofing and exterior services by Kayan Contracting. Roof replacement, shingling, metal roofing, steel siding, seamless eavestroughing. IKO Preferred Contractor. BBB A+. 22 years experience. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing & Exteriors in Edmonton, AB | Kayan Contracting',
    description:
      'Serving west Edmonton and surrounding areas. IKO Preferred Contractor. BBB A+.',
    url: `${BASE_URL}/services/edmonton`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing & Exteriors in Edmonton, AB | Kayan Contracting',
    description: 'Serving west Edmonton. IKO Preferred Contractor. BBB A+.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/edmonton`,
  },
}

export default function EdmontonPage() {
  return (
    <LocationPageClient
      location="Edmonton"
      locationSlug="edmonton"
      description="While we're based in Stony Plain, Kayan Contracting regularly serves homeowners throughout west Edmonton and the greater Edmonton area. Our reputation for quality workmanship has brought us into neighbourhoods from Lewis Estates to Windermere to The Hamptons. Edmonton homeowners choose us for the same reason Parkland County does — honest work, premium materials, and warranties that mean something."
      highlights={[
        'Serving west Edmonton and the greater Edmonton area',
        'Same quality and warranty as our Parkland County projects',
        'Competitive pricing — small-town overhead, big-city quality',
        'IKO Preferred Contractor with enhanced warranty coverage',
        'References available from Edmonton homeowners',
      ]}
    />
  )
}
