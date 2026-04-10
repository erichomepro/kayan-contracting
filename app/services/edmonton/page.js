import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor Edmonton West | Trusted Parkland County Roofer',
  description:
    'Edmonton roofing by Kayan Contracting. Roof replacement, metal roofing, shingles, eavestroughing. IKO Preferred. BBB A+. 22 years experience. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor Edmonton West | Kayan Contracting',
    description:
      'Serving west Edmonton and surrounding areas. IKO Preferred Contractor. BBB A+. 22 years experience.',
    url: `${BASE_URL}/services/edmonton`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Edmonton West | Kayan Contracting',
    description: 'Serving west Edmonton. IKO Preferred. BBB A+. 22 years experience.',
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
      neighborhoodsContent={`
        <p>We focus on west Edmonton neighbourhoods that are a quick drive from our Stony Plain headquarters. That means faster response times, lower travel costs, and crews who know these communities inside and out. Here's where you'll find our work across Edmonton's west side:</p>

        <h3>Lewis Estates</h3>
        <p>Lewis Estates is one of west Edmonton's premier communities, and its homes feature a mix of architectural styles with complex rooflines, steep pitches, and multiple dormers. Many homes here were built between 2005 and 2015, and builder-grade roofing materials are beginning to show their age. We've completed numerous roof replacements in Lewis Estates, upgrading homeowners to IKO Dynasty shingles that offer superior hail and wind resistance. The neighbourhood's proximity to the river valley means higher moisture exposure on north-facing slopes — something we account for with enhanced ice and water shield placement.</p>

        <h3>Windermere</h3>
        <p>Windermere is one of Edmonton's largest and fastest-growing communities on the southwest side. The mix of estate homes, family homes, and newer builds means a wide range of roofing needs. We regularly work on the larger estate-style homes along Windermere Boulevard, where roof areas can exceed 3,000 square feet and require careful staging and logistics. For Windermere homeowners, we recommend proactive inspections — especially on homes built during the 2008-2016 boom when subcontractor quality varied widely across the city.</p>

        <h3>The Hamptons</h3>
        <p>The Hamptons is a mature west Edmonton community built around the Hamptons Golf Course. These homes are well-established, and many original roofs from the early 2000s are now due for replacement. The open golf course exposure means west- and south-facing roof slopes take more wind and UV punishment than sheltered properties. We've replaced dozens of roofs in The Hamptons and often recommend upgraded wind-rated shingles for the exposed elevations that face the course.</p>

        <h3>Secord</h3>
        <p>Secord is a newer community in northwest Edmonton that's grown rapidly over the past decade. The homes here are predominantly modern two-storeys with attached garages and relatively straightforward rooflines. While many are still under builder warranty, homeowners whose warranties have expired are discovering issues — poor flashing details, inadequate ventilation, and builder-grade shingles that show premature granule loss. We provide thorough post-warranty inspections and repairs backed by our own 15-year workmanship warranty.</p>

        <h3>Rosenthal</h3>
        <p>Adjacent to Secord, Rosenthal is another rapidly developing community on Edmonton's west side. The newer construction here means many homes are still in good shape, but the ones built in the earliest phases (2012-2016) are starting to need attention. We've been called in for valley flashing repairs, pipe boot replacements, and gutter installations in Rosenthal. For homeowners planning ahead, our free inspections help you budget for roof replacement before problems become emergencies.</p>

        <h3>West Edmonton (General)</h3>
        <p>Beyond the specific neighbourhoods, we serve homeowners across the entire west Edmonton corridor — from Callingwood to Cameron Heights, from Granville to Glastonbury. West Edmonton's established communities have homes from every era, each with their own roofing challenges. Whether it's a 1970s bungalow in Jasper Place that needs a full tear-off or a 2010s two-storey in Glenridding that needs a ventilation upgrade, our crews have the experience to handle it. Being based just 20 minutes west of the city means we're often on-site faster than Edmonton-based contractors stuck in city traffic.</p>
      `}
      localExpertise={`
        <h3>City of Edmonton Building Permits</h3>
        <p>The City of Edmonton requires building permits for roof replacements, and their process is more involved than smaller municipalities. Edmonton uses an online permit portal, and inspections must be booked through their system. We handle the entire permit process for Edmonton homeowners — from application through final inspection. Our familiarity with Edmonton's building department ensures smooth permit turnaround so your project stays on schedule.</p>

        <h3>Edmonton Weather Challenges</h3>
        <p>Edmonton sits in one of Alberta's most active weather zones. Summer hailstorms, chinook winds in winter, and extreme temperature swings from -35C to +35C put tremendous stress on roofing materials. The freeze-thaw cycles are especially punishing — Edmonton averages over 30 freeze-thaw cycles per year, which causes expansion and contraction that degrades sealant strips and loosens fasteners over time. We select products specifically engineered for these conditions and install them using methods that account for thermal movement.</p>

        <h3>Insurance Claims After Edmonton Hailstorms</h3>
        <p>Edmonton has experienced several major hailstorms in recent years that caused billions in damage across the city. After these events, out-of-province storm chasers flood Edmonton looking for quick insurance jobs. As a local Parkland County contractor with 22 years in business, we offer Edmonton homeowners a trustworthy alternative. We document damage thoroughly, work directly with your adjuster, and ensure the claim covers a quality replacement — not a patch job that fails in three years. Call (780) 984-0221 after any storm for a free assessment.</p>

        <h3>West Edmonton's Unique Advantages</h3>
        <p>Choosing a Parkland County contractor for your Edmonton roof comes with real advantages. Our overhead is lower than city-based contractors, which means competitive pricing without cutting corners on materials or labour. We're not stuck in Edmonton traffic — we come in from the west on Highway 16 and are often on-site in 25 minutes. And because we've built our reputation in tight-knit communities where word of mouth matters, every Edmonton job gets the same attention to detail as a project on our own street.</p>
      `}
      projectShowcase={[
        {
          title: 'Lewis Estates — Estate Home Full Roof Replacement',
          description: 'Replaced a 3,200 square foot roof on a large estate home in Lewis Estates. The complex roofline included eight valleys, two skylights, and a chimney. Installed IKO Dynasty shingles in Glacier with ice and water shield in all valleys and at every transition. The homeowner chose us after getting three city quotes that were higher for lesser materials.',
          type: 'Roof Replacement',
        },
        {
          title: 'Windermere — Hail Damage Insurance Claim & Replacement',
          description: 'After a summer hailstorm damaged the roof on this Windermere two-storey, we provided a thorough damage assessment with photos and documentation. Worked directly with the homeowner\'s insurance adjuster to ensure full replacement coverage. Installed IKO Cambridge shingles with upgraded flashing and a new ridge vent system. The entire process — from claim to completion — took three weeks.',
          type: 'Insurance + Replacement',
        },
        {
          title: 'The Hamptons — Golf Course Exposure Roof Upgrade',
          description: 'This home backing onto the Hamptons Golf Course had significant wind damage on its west-facing slope. We replaced the entire roof with IKO Dynasty shingles using six-nail fastening patterns on exposed elevations and hand-sealed all tabs facing the course. Added 160 linear feet of new seamless eavestroughing to replace the aging originals.',
          type: 'Roof & Gutters',
        },
        {
          title: 'Secord — Post-Warranty Ventilation & Flashing Repair',
          description: 'A 7-year-old Secord home was experiencing ice damming and attic moisture after the builder warranty expired. Our inspection revealed inadequate soffit intake vents and missing kickout flashing at two wall-to-roof transitions. We corrected the ventilation, installed proper flashing, and added ice and water shield at the eaves. Problem solved — no more ice dams.',
          type: 'Repair & Ventilation',
        },
        {
          title: 'Callingwood — Complete Exterior Package on 1980s Bungalow',
          description: 'Transformed a dated 1980s bungalow in Callingwood with a full exterior package: complete roof tear-off and replacement with IKO Dynasty shingles, new seamless eavestroughing, aluminum soffit and fascia wrap, and steel siding on the front elevation. The homeowner said the house looked 30 years younger. Completed in five days.',
          type: 'Full Exterior',
        },
      ]}
      localFaqs={[
        {
          q: 'Do I need a building permit for a roof replacement in Edmonton?',
          a: 'Yes, the City of Edmonton requires a building permit for roof replacements. We handle the full permit process for you — online application, documentation, and scheduling the final inspection through Edmonton\'s portal. The permit cost is included in our quote so there are no surprises.',
        },
        {
          q: 'Why should I hire a Stony Plain contractor for my Edmonton roof?',
          a: 'Our Parkland County base means lower overhead and competitive pricing without sacrificing quality. We are just 20-25 minutes from most west Edmonton neighbourhoods via Highway 16. You get the same IKO Preferred quality, BBB A+ service, and 15-year workmanship warranty — often at a better price than city-based contractors. Plus, our 22-year reputation was built in communities where everyone knows everyone — we cannot afford to do anything less than excellent work.',
        },
        {
          q: 'How quickly can Kayan Contracting respond to Edmonton emergencies?',
          a: 'For emergency tarping and storm damage, we can typically be on-site within a few hours for west Edmonton neighbourhoods. Our crews travel from Stony Plain via Highway 16, avoiding city congestion. For scheduled projects, we can usually start within one to two weeks of signing the contract. During peak season, we recommend booking two to three weeks in advance.',
        },
        {
          q: 'Does Kayan Contracting handle hail damage insurance claims in Edmonton?',
          a: 'Absolutely. We have extensive experience with hail damage claims across Edmonton. We document all damage with detailed photos and reports, meet with your insurance adjuster on-site, and ensure the claim covers a proper replacement with quality materials. Unlike storm chasers who disappear after the job, we are a permanent local business — call (780) 984-0221 for a free post-storm assessment.',
        },
        {
          q: 'What areas of Edmonton does Kayan Contracting serve?',
          a: 'We focus primarily on west Edmonton — Lewis Estates, Windermere, The Hamptons, Secord, Rosenthal, Callingwood, Cameron Heights, Granville, Glastonbury, and surrounding communities. We also serve south Edmonton areas like Glenridding and Keswick. For east or north Edmonton, we can still provide quotes, but our strongest response times and pricing advantages are on the west side closest to our Stony Plain base.',
        },
        {
          q: 'Are Edmonton building codes different from Parkland County?',
          a: 'Both Edmonton and Parkland County follow the Alberta Building Code, so the technical requirements for roofing are the same — minimum R-values, ventilation ratios, ice and water shield placement, and fastening patterns. The main difference is the permit process: Edmonton uses an online portal and has a more structured inspection booking system. We are fully familiar with both and handle the paperwork for every project regardless of jurisdiction.',
        },
      ]}
      nearbyAreas={[
        { name: 'Stony Plain', slug: 'stony-plain' },
        { name: 'Spruce Grove', slug: 'spruce-grove' },
        { name: 'Parkland County', slug: 'parkland-county' },
        { name: 'St. Albert', slug: 'st-albert' },
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
