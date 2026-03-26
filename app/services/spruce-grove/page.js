import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing & Exteriors in Spruce Grove, AB | Kayan Contracting',
  description:
    'Spruce Grove\'s trusted roofing and exterior contractor. Roof replacement, shingling, metal roofing, steel siding, seamless eavestroughing. IKO Preferred Contractor. BBB A+. 22 years experience. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing & Exteriors in Spruce Grove, AB | Kayan Contracting',
    description:
      'Trusted roofing contractor serving Spruce Grove for 22 years. IKO Preferred. BBB A+.',
    url: `${BASE_URL}/services/spruce-grove`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing & Exteriors in Spruce Grove, AB | Kayan Contracting',
    description: 'Trusted roofing contractor serving Spruce Grove for 22 years.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/spruce-grove`,
  },
}

export default function SpruceGrovePage() {
  return (
    <LocationPageClient
      location="Spruce Grove"
      locationSlug="spruce-grove"
      description="Just minutes from our Stony Plain headquarters, Spruce Grove is one of our busiest service areas. From the established homes near Century Road to the growing communities in Spruce Grove South, we've been protecting Spruce Grove roofs for over two decades. Our crews know the area, the building styles, and the unique weather challenges."
      highlights={[
        'Serving Spruce Grove for 22+ years',
        'Hundreds of completed projects across all neighbourhoods',
        'Quick response times — just minutes from our shop',
        'Familiar with Spruce Grove building codes and requirements',
        'Trusted by homeowners from Millgrove to Spruce Ridge',
      ]}
    />
  )
}
