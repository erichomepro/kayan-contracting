import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor Spruce Grove, AB | 22 Years Trusted Service',
  description:
    'Spruce Grove roofing contractor. Roof replacement, metal roofing, shingles, eavestroughing. IKO Preferred. BBB A+. Free inspections. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor Spruce Grove, AB | Kayan Contracting',
    description:
      'Trusted roofing contractor serving Spruce Grove for 22 years. IKO Preferred. BBB A+.',
    url: `${BASE_URL}/services/spruce-grove`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Spruce Grove, AB | Kayan Contracting',
    description: 'Trusted roofing contractor serving Spruce Grove for 22 years. IKO Preferred. BBB A+.',
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
      description="Just minutes from our Stony Plain headquarters, Spruce Grove is one of our busiest service areas. From the established homes near Century Road to the growing communities in Spruce Grove South, we've been protecting Spruce Grove roofs for over two decades. Our crews know the area, the building styles, and the unique weather challenges that come with living on the edge of the prairies."
      highlights={[
        'Serving Spruce Grove for 22+ years — just minutes from our Stony Plain shop',
        'Hundreds of completed projects from Millgrove to Greenbury to Spruce Ridge',
        'Quick response times — typically on-site within the hour for emergencies',
        'Familiar with City of Spruce Grove building codes, permits, and inspection requirements',
        'Trusted by homeowners in every Spruce Grove neighbourhood, old and new',
      ]}
      neighborhoodsContent={`
        <p>Spruce Grove has grown dramatically over the past two decades, and we've grown with it. From the original neighbourhoods built in the 1970s to the brand-new subdivisions going up today, we've worked on roofs in every corner of this city. Here's where you'll find our work:</p>

        <h3>Century Road & Central Spruce Grove</h3>
        <p>The established homes along and near Century Road represent the heart of Spruce Grove. Many of these homes were built in the 1970s and 1980s, and we've replaced countless original roofs in this area. The mature trees that line these streets add character but also create challenges — overhanging branches trap moisture and debris that accelerate shingle wear. We always recommend proper trimming and regular gutter maintenance for homes in this area.</p>

        <h3>Millgrove</h3>
        <p>Millgrove is one of Spruce Grove's most established and desirable neighbourhoods. The mix of split-levels, bungalows, and two-storeys built from the late 1980s through the 2000s keeps our crews busy with a variety of roof styles. We've completed dozens of full tear-off and re-roof projects here, and many Millgrove homeowners have called us back years later for eavestroughing and siding work after seeing the quality of our roofing.</p>

        <h3>Spruce Ridge</h3>
        <p>Spruce Ridge's newer homes feature modern architectural styles with steeper pitches and more complex rooflines. While these homes are younger, we've already started seeing builder-grade materials showing early wear — particularly around pipe boots and in valleys where ice damming occurs during freeze-thaw cycles. A proactive inspection now can save thousands in water damage repair later.</p>

        <h3>Grove Meadows</h3>
        <p>Grove Meadows sits along the west side of Spruce Grove with good exposure to the prevailing westerly winds. The homes here take a beating from wind-driven rain and winter storms. We frequently see lifted shingles and worn sealant strips on west-facing slopes in this neighbourhood. Our wind-rated installations using IKO Dynasty shingles with hand-sealed tabs provide the extra protection these exposures demand.</p>

        <h3>Greenbury</h3>
        <p>As one of Spruce Grove's newest communities, Greenbury represents the city's southward expansion. These homes are still under builder warranty for the first few years, but after that expires, homeowners start noticing issues that should have been caught during construction. We offer thorough post-warranty inspections that identify problems before they become expensive — and our repairs are backed by our own 15-year workmanship warranty.</p>

        <h3>Spruce Grove South & New Developments</h3>
        <p>The rapid growth south of Highway 16A has brought hundreds of new homes to Spruce Grove. While new construction roofs are covered by builder warranties, those warranties are limited and don't cover everything. We regularly work with homeowners whose builder warranty has expired and who want a trusted local contractor for ongoing maintenance and eventual replacement. Starting a relationship with us early means we know your roof's history when it's time for major work.</p>
      `}
      localExpertise={`
        <h3>City of Spruce Grove Building Permits</h3>
        <p>The City of Spruce Grove requires building permits for roof replacements, and their inspection process ensures work meets Alberta Building Code standards. We handle the full permit process for every job — from application to final inspection. Our long relationship with the city's building department means smooth, efficient permit turnaround for our Spruce Grove projects.</p>

        <h3>Rapid Growth Area Challenges</h3>
        <p>Spruce Grove is one of the fastest-growing cities in Alberta, which creates unique roofing challenges. New subdivision soils haven't fully settled, which can cause subtle shifts in roof structure over the first 5 to 10 years. Builder-grade materials are often the minimum code requirement rather than the best choice for long-term performance. And the sheer volume of construction means not every new roof was installed by an experienced crew. We regularly fix problems on homes that are only 8 to 12 years old — problems that shouldn't exist if the original work was done properly.</p>

        <h3>Prairie Wind & Weather Exposure</h3>
        <p>Spruce Grove's location on the edge of the open prairies means homes face significant wind exposure, particularly on the west and south sides of the city. Wind speeds during Alberta storms regularly exceed 90 km/h, and we've seen gusts strip entire sections of improperly fastened shingles. Our installations use six-nail patterns (versus the standard four-nail) on exposed elevations and hand-seal all tabs in high-wind zones. This costs a bit more in labour but saves homeowners from expensive wind damage claims.</p>

        <h3>Insurance Claims in Spruce Grove</h3>
        <p>After hail and wind events, Spruce Grove homeowners often face a flood of door-to-door storm chasers — roofing companies from outside the area looking for quick insurance jobs. We encourage you to call a local contractor first. We live and work here. We'll be here in 10 years when your warranty matters. Storm chasers won't. Call Kayan Contracting at (780) 984-0221 for an honest damage assessment before you sign anything.</p>
      `}
      projectShowcase={[
        {
          title: 'Millgrove Split-Level — Full Roof & Gutter Replacement',
          description: 'Replaced a 25-year-old three-tab roof on a large split-level in Millgrove with IKO Dynasty shingles in Sedona. Installed 220 linear feet of new 6-inch seamless eavestroughing and replaced all downspouts. The larger 6-inch gutters were recommended due to the steep roof pitch and high water volume during summer storms.',
          type: 'Roof & Gutters',
        },
        {
          title: 'Spruce Ridge — Ice Dam Repair & Ventilation Upgrade',
          description: 'This homeowner had recurring ice dams causing water to back up under the shingles every spring. We added proper soffit intake vents, installed a ridge vent system, and replaced the ice and water shield membrane along all eaves. Problem solved permanently — no more ice dams, and lower heating bills from improved attic airflow.',
          type: 'Repair & Ventilation',
        },
        {
          title: 'Grove Meadows — Wind Damage Emergency & Full Replacement',
          description: 'A severe windstorm ripped shingles off the west-facing slope of this two-storey home. We responded the same day with emergency tarping, then completed a full roof replacement the following week. We upgraded to IKO Dynasty with six-nail fastening and hand-sealed tabs to prevent future wind damage on this exposed property.',
          type: 'Emergency + Replacement',
        },
        {
          title: 'Century Road — Seamless Eavestroughing & Soffit Replacement',
          description: 'Replaced 30-year-old sectional aluminum gutters that were leaking at every joint with new seamless 5-inch eavestroughing. Also replaced deteriorated wooden soffits with vented aluminum panels to improve attic ventilation and eliminate a persistent moisture problem in the attic.',
          type: 'Gutters & Soffits',
        },
        {
          title: 'Greenbury — Post-Builder Warranty Inspection & Repairs',
          description: 'Performed a comprehensive roof inspection on a 6-year-old home where the builder warranty had just expired. Found improperly sealed pipe boots, missing kickout flashing at a wall-to-roof transition, and inadequate attic ventilation. Repaired all issues and gave the homeowner a detailed maintenance plan to maximize the life of their roof.',
          type: 'Inspection & Repair',
        },
      ]}
      localFaqs={[
        {
          q: 'Do I need a building permit for a roof replacement in Spruce Grove?',
          a: 'Yes, the City of Spruce Grove requires a building permit for roof replacements. We take care of the full permit process as part of every project — application, documentation, and scheduling the final inspection. The permit cost is included in our quote.',
        },
        {
          q: 'How long does a roof replacement take in Spruce Grove?',
          a: 'Most Spruce Grove residential roofs are completed in 1 to 3 days, depending on the size, complexity, and weather. We schedule around the forecast and won\'t start a tear-off if rain is expected. Our proximity to Spruce Grove — just minutes from our Stony Plain shop — means no wasted time on travel.',
        },
        {
          q: 'Why are newer Spruce Grove homes already needing roof work?',
          a: 'Many homes built during Spruce Grove\'s rapid growth period (2005-2018) used builder-grade materials installed by the lowest-bidding subcontractor. We regularly see premature shingle failure, inadequate ventilation, and missing flashing details on homes that are only 10 to 15 years old. A thorough inspection can identify problems before they cause interior water damage.',
        },
        {
          q: 'How do I avoid storm chaser roofing companies after a hail event?',
          a: 'After major hail events, out-of-town companies flood Spruce Grove looking for quick insurance jobs. Protect yourself by calling a local contractor first. Check for a permanent local address, verify their BBB rating, and ask for local references. Kayan Contracting has been serving Spruce Grove for 22 years — we are not going anywhere. Call (780) 984-0221.',
        },
        {
          q: 'What is the best time of year to replace a roof in Spruce Grove?',
          a: 'The ideal roofing season in Spruce Grove runs from May through October, when temperatures are consistently above 10°C. Shingle sealant strips need warm weather to bond properly. However, we can install in cooler temperatures when necessary using hand-sealing techniques. Fall is an excellent time to book — demand is lower, and your roof will be ready for winter.',
        },
        {
          q: 'Does Kayan Contracting offer free roof inspections in Spruce Grove?',
          a: 'Yes, we provide completely free, no-obligation roof inspections for Spruce Grove homeowners. We inspect from the ground and from the roof, check the attic for ventilation and moisture issues, and provide a written report with photos. If your roof is in good shape, we will tell you — honestly. Call (780) 984-0221 to book.',
        },
      ]}
      nearbyAreas={[
        { name: 'Stony Plain', slug: 'stony-plain' },
        { name: 'Parkland County', slug: 'parkland-county' },
        { name: 'Edmonton', slug: 'edmonton' },
        { name: 'St. Albert', slug: 'st-albert' },
        { name: 'Lac Ste. Anne County', slug: 'lac-ste-anne' },
      ]}
      blogLinks={[
        { title: 'Emergency Roof Repair in Stony Plain & Spruce Grove', href: '/blog/emergency-roof-repair-stony-plain-spruce-grove' },
        { title: 'Hail Damage Roof Repair: Alberta Guide', href: '/blog/hail-damage-roof-repair-alberta' },
        { title: 'How to Choose a Roofing Contractor', href: '/blog/choose-roofing-contractor-stony-plain' },
      ]}
    />
  )
}
