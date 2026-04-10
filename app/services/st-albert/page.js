import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor St. Albert, AB | 22 Years Trusted Experience',
  description:
    'St. Albert roofing contractor. Roof replacement, metal roofing, shingles, eavestroughing, soffits. IKO Preferred. BBB A+. 22 years experience. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor St. Albert, AB | Kayan Contracting',
    description:
      'Trusted roofing contractor serving St. Albert. IKO Preferred. BBB A+. 22 years experience. 1,500+ homeowners served.',
    url: `${BASE_URL}/services/st-albert`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor St. Albert, AB | Kayan Contracting',
    description: 'Trusted roofing contractor serving St. Albert. IKO Preferred. BBB A+. 22 years experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/st-albert`,
  },
}

export default function StAlbertPage() {
  return (
    <LocationPageClient
      location="St. Albert"
      locationSlug="st-albert"
      description="St. Albert is one of Alberta's most desirable communities, and its homeowners expect quality that matches the neighbourhood. Kayan Contracting has served St. Albert for over two decades, bringing the same honest workmanship and premium materials that built our reputation in Parkland County. From the established homes in Grandin to the newer developments in Erin Ridge North, we know St. Albert's roofing challenges — and we know how to solve them right the first time."
      highlights={[
        'Serving St. Albert homeowners for 22+ years from our Stony Plain base',
        'Completed projects in every major St. Albert neighbourhood',
        'IKO Preferred Contractor — enhanced warranty coverage on every installation',
        'BBB A+ rated with references available from St. Albert homeowners',
        'Free on-site inspections with FLIR Level II thermal imaging',
      ]}
      neighborhoodsContent={`
        <p>St. Albert is a well-established city with neighbourhoods ranging from the 1960s-era homes near downtown to brand-new developments on the north and west edges. Each area has its own roofing profile, and we've worked in all of them. Here's where you'll find our work across St. Albert:</p>

        <h3>Erin Ridge & Erin Ridge North</h3>
        <p>Erin Ridge is one of St. Albert's most popular family neighbourhoods, with homes built from the late 1990s through the 2010s. The original Erin Ridge homes are now reaching the age where roof replacement becomes necessary — especially homes with builder-grade three-tab shingles that have weathered 20+ Alberta winters. Erin Ridge North is newer, but we're already seeing the early signs of builder-grade material fatigue on homes from the first phases. We've completed dozens of roof replacements across both Erin Ridge communities, upgrading homeowners to IKO Dynasty shingles that will last significantly longer than the originals.</p>

        <h3>Oakmont</h3>
        <p>Oakmont is one of St. Albert's premier neighbourhoods, featuring larger executive-style homes with complex rooflines, multiple valleys, and steep pitches. These homes demand precision installation — there's no room for shortcuts on a 45-degree pitch with six valleys and two skylights. Our experienced crews handle Oakmont's challenging roof geometries with confidence. We've completed full exterior packages here — roofing, eavestroughing, soffits, and fascia — that protect these significant investments for decades.</p>

        <h3>North Ridge</h3>
        <p>North Ridge sits along St. Albert's northern edge with good exposure to the open farmland beyond the city limits. This exposure means north- and west-facing roof slopes take extra punishment from wind-driven rain and snow. We frequently see lifted shingles and premature wear on the exposed elevations of North Ridge homes. Our installations use six-nail fastening patterns and hand-sealed tabs on wind-exposed slopes — a small extra step that prevents expensive wind damage claims down the road.</p>

        <h3>Grandin</h3>
        <p>Grandin is St. Albert's historic heart, with charming homes dating back to the 1960s and 1970s along the Sturgeon River valley. Many of these homes have character features — dormers, bay windows, and unique rooflines — that require careful workmanship during replacement. We've handled numerous roofs in Grandin where multiple layers of old shingles needed full tear-off and where rotted decking required repair before the new roof could go on. The mature trees in Grandin also create challenges with debris accumulation and moss growth that we address as part of every project.</p>

        <h3>Lacombe Park</h3>
        <p>Lacombe Park is one of St. Albert's most established and well-maintained neighbourhoods. Homes here were primarily built in the 1980s and 1990s, meaning many are on their second or third roof. We've replaced numerous roofs in Lacombe Park and often recommend upgrading from the original three-tab shingles to architectural shingles for improved appearance and longevity. The neighbourhood's mature landscaping requires careful yard protection during our work — we use tarps, plywood walkways, and magnetic nail sweepers to leave properties spotless.</p>

        <h3>Heritage Lakes</h3>
        <p>Heritage Lakes is a newer community on the west side of St. Albert, featuring modern home designs with a mix of two-storey and bungalow styles. The proximity to the wetland areas means higher humidity exposure for some properties. We pay special attention to ventilation and moisture management on Heritage Lakes roofs, ensuring proper soffit intake and ridge exhaust to prevent attic condensation. For homeowners whose builder warranties have recently expired, our free inspections identify any issues before they become costly problems.</p>
      `}
      localExpertise={`
        <h3>City of St. Albert Building Permits</h3>
        <p>The City of St. Albert requires building permits for roof replacements, and their building department is efficient and well-organized. We handle the full permit process for every St. Albert project — from application through final inspection. Our long history of working in St. Albert means smooth interactions with their inspectors and quick permit turnaround. The permit cost is included in our quote so there are no surprises for homeowners.</p>

        <h3>Sturgeon River Valley & Moisture Exposure</h3>
        <p>St. Albert is built along the Sturgeon River, and homes near the Red Willow Park trail system and river valley face higher moisture exposure than those on higher ground. This moisture accelerates moss and algae growth on north-facing slopes, degrades flashing sealants faster, and can contribute to ice damming if ventilation is inadequate. We account for these conditions by specifying enhanced ventilation, algae-resistant shingles where appropriate, and additional ice and water shield protection at eaves and valleys for river-adjacent properties.</p>

        <h3>St. Albert's Climate & Weather Patterns</h3>
        <p>St. Albert shares the Edmonton region's challenging climate — extreme cold in winter, hailstorms in summer, and the ever-present chinook temperature swings that stress roofing materials. The city's slightly northern position compared to Edmonton means marginally colder average temperatures and a slightly longer snow season. We select materials rated for these conditions and install using methods that account for the thermal expansion cycles that are especially punishing on south-facing slopes that swing from -30C in shade to above freezing in direct winter sun.</p>

        <h3>St. Albert's High Standards</h3>
        <p>St. Albert consistently ranks among Canada's best places to live, and its homeowners maintain their properties to match. We understand that a roofing project in St. Albert needs to look as good as it performs. Our attention to clean lines, colour-matched flashing, and precise shingle alignment reflects the pride that St. Albert homeowners take in their homes. We clean up thoroughly, protect landscaping, and leave properties looking better than we found them.</p>
      `}
      projectShowcase={[
        {
          title: 'Oakmont — Executive Home Complex Roof Replacement',
          description: 'Replaced a 2,800 square foot roof on a large Oakmont executive home featuring a complex roofline with seven valleys, three pitch transitions, and a large chimney. Installed IKO Dynasty shingles in Brownstone with ice and water shield in every valley. Precision flashing work around the chimney and two plumbing stacks. Completed in three days with full yard protection.',
          type: 'Roof Replacement',
        },
        {
          title: 'Erin Ridge — Full Tear-Off & Ventilation Upgrade',
          description: 'This 2001-built Erin Ridge home had its original three-tab shingles showing severe curling and granule loss after 23 Alberta winters. We performed a full tear-off, repaired sections of soft decking along the north eave, upgraded to IKO Cambridge architectural shingles, and added a continuous ridge vent to replace the outdated roof-mounted turbine vents. Dramatic improvement in attic temperature and moisture levels.',
          type: 'Roof Replacement + Ventilation',
        },
        {
          title: 'Grandin — Heritage Home Multi-Layer Tear-Off',
          description: 'A charming 1968 Grandin home had three layers of shingles — the maximum before structural concerns arise. We performed a complete tear-off down to the original decking, replaced 14 sheets of deteriorated plywood, installed new ice and water shield, underlayment, and IKO Dynasty shingles. Careful work around the original dormer windows preserved the home\'s character while giving it decades of new protection.',
          type: 'Full Tear-Off & Re-Roof',
        },
        {
          title: 'North Ridge — Wind Damage Emergency & Upgrade',
          description: 'A severe fall windstorm ripped shingles off the north-facing slope of this North Ridge two-storey. We responded the same day with emergency tarping to prevent water intrusion. The following week, we replaced the entire roof with IKO Dynasty shingles using six-nail fastening and hand-sealed tabs on the exposed north and west elevations. Added 140 linear feet of new seamless eavestroughing.',
          type: 'Emergency + Full Replacement',
        },
        {
          title: 'Lacombe Park — Seamless Gutters & Soffit Replacement',
          description: 'Replaced aging sectional aluminum gutters with 200 linear feet of new seamless 5-inch eavestroughing on a large Lacombe Park split-level. Also replaced deteriorated wooden soffits with vented aluminum panels, improving attic airflow and eliminating a persistent paint-peeling problem on the fascia boards. The homeowner was thrilled with the clean, maintenance-free result.',
          type: 'Gutters & Soffits',
        },
      ]}
      localFaqs={[
        {
          q: 'Do I need a building permit for a roof replacement in St. Albert?',
          a: 'Yes, the City of St. Albert requires a building permit for roof replacements. We handle the entire permit process as part of every project — application, documentation, and scheduling the final inspection. The permit fee is included in our quote.',
        },
        {
          q: 'How long does it take Kayan Contracting to get to St. Albert?',
          a: 'Our Stony Plain shop is approximately 30 minutes from most St. Albert neighbourhoods. We travel via Highway 16A and Anthony Henday Drive, so traffic is rarely an issue. For emergency tarping and storm damage, we can typically be on-site within a few hours. For scheduled projects, our crews arrive early and work full days to minimize disruption.',
        },
        {
          q: 'What roofing materials do you recommend for St. Albert homes?',
          a: 'For most St. Albert homes, IKO Dynasty architectural shingles offer the best combination of durability, wind resistance, and curb appeal. They are rated for winds up to 210 km/h and engineered for Alberta\'s freeze-thaw cycles. For homes near the Sturgeon River valley where moisture exposure is higher, we may recommend algae-resistant options. For homeowners wanting a premium permanent solution, standing seam metal roofing is an excellent choice.',
        },
        {
          q: 'Does Kayan Contracting offer free roof inspections in St. Albert?',
          a: 'Yes, we provide completely free, no-obligation roof inspections for St. Albert homeowners. We inspect from the ground and from the roof surface, check the attic for ventilation and moisture issues using FLIR thermal imaging, and deliver a written report with photos. If your roof is in good shape, we will tell you honestly. Call (780) 984-0221 to book your inspection.',
        },
        {
          q: 'Can you work on homes near the Sturgeon River and Red Willow Park?',
          a: 'Absolutely. We have extensive experience with properties near the Sturgeon River valley and Red Willow Park trail system. These homes face higher moisture exposure that requires careful attention to ventilation, flashing, and material selection. We account for these conditions in every quote for river-adjacent properties — including enhanced ice and water shield coverage and proper soffit ventilation to manage the increased humidity.',
        },
        {
          q: 'How does Kayan Contracting handle hail damage claims in St. Albert?',
          a: 'We work with all major insurance providers and have extensive experience with hail damage claims in St. Albert. We document damage thoroughly with detailed photos and measurements, meet with your adjuster on-site, and advocate for a proper replacement rather than a temporary patch. As a local contractor with 22 years in business and a BBB A+ rating, we provide the credibility that insurance companies respect. Call (780) 984-0221 after any storm for a free damage assessment.',
        },
      ]}
      nearbyAreas={[
        { name: 'Stony Plain', slug: 'stony-plain' },
        { name: 'Spruce Grove', slug: 'spruce-grove' },
        { name: 'Edmonton', slug: 'edmonton' },
        { name: 'Parkland County', slug: 'parkland-county' },
        { name: 'Lac Ste. Anne County', slug: 'lac-ste-anne' },
      ]}
      blogLinks={[
        { title: 'Hail Damage Roof Repair: Alberta Guide', href: '/blog/hail-damage-roof-repair-alberta' },
        { title: 'How Much Does Roof Replacement Cost in Alberta?', href: '/blog/roof-replacement-cost-alberta-2026' },
        { title: 'How to Choose a Roofing Contractor', href: '/blog/choose-roofing-contractor-stony-plain' },
      ]}
    />
  )
}
