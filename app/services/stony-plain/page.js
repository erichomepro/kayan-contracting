import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor Stony Plain, AB | 22 Years Local Experience',
  description:
    'Stony Plain roofing contractor since 2003. Roof replacement, metal roofing, shingles, gutters, soffits. IKO Preferred. BBB A+. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor Stony Plain, AB | Kayan Contracting',
    description:
      'Stony Plain\'s trusted roofing contractor since 2003. IKO Preferred. BBB A+. 1,500+ homeowners served.',
    url: `${BASE_URL}/services/stony-plain`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Stony Plain, AB | Kayan Contracting',
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
        'Headquartered in Stony Plain since 2003 — this is home',
        'Hundreds of completed projects in every neighbourhood from Heritage Park to Meridian Estates',
        'Same-day emergency repairs for Stony Plain residents',
        'Free on-site inspections with FLIR thermal imaging to find hidden leaks',
        'References available from your neighbours on your own street',
      ]}
      neighborhoodsContent={`
        <p>Stony Plain is our home base, and we know every neighbourhood in town. Our shop is right here, which means faster response times and lower travel costs for Stony Plain homeowners. Here are the areas where you'll find our work on nearly every block:</p>

        <h3>Downtown Core & Heritage Park Area</h3>
        <p>The older homes near downtown Stony Plain and along Heritage Park often have original roofs from the 1970s and 1980s. These aging roofs need careful inspection — many have multiple layers of shingles that need full tear-off before a proper re-roof. We've replaced dozens of roofs in this area and understand the unique challenges of working on mature trees, tighter lot lines, and heritage-adjacent properties.</p>

        <h3>Highway 779 Developments</h3>
        <p>The newer developments along Highway 779 — including the areas south of town — feature builder-grade roofing that often starts showing wear after 12 to 15 years. We regularly replace these roofs with upgraded IKO Dynasty shingles that offer superior wind and hail resistance. If your home was built between 2005 and 2015, it's worth booking a free inspection.</p>

        <h3>South Park Drive & Surrounding Neighbourhoods</h3>
        <p>The established homes along South Park Drive and the surrounding streets represent some of Stony Plain's most well-kept properties. We've completed full exterior packages here — roof replacement, new eavestroughing, soffits, fascia, and steel siding — that transformed the curb appeal while protecting the home for decades to come.</p>

        <h3>Meridian Estates & Newer Subdivisions</h3>
        <p>Meridian Estates and the surrounding newer subdivisions feature modern architectural styles with steeper pitches, multiple valleys, and complex rooflines. Our crews have the experience and equipment to handle these challenging installations properly — including proper ice and water shield placement in valleys and at transitions. Even newer homes benefit from our gutter and soffit services to complete the exterior system.</p>

        <h3>Acreages on the Edge of Town</h3>
        <p>The rural acreages surrounding Stony Plain — along Township Road 524 and Range Road 10 — combine rural exposure with larger roof areas. We're equally comfortable working on a bungalow in town or a two-storey farmhouse on five acres. For acreage properties, we often recommend metal roofing for its durability against wind and hail.</p>
      `}
      localExpertise={`
        <h3>Town of Stony Plain Building Permits</h3>
        <p>In Stony Plain, a building permit is required for roof replacement projects. The Town of Stony Plain's planning department processes permits efficiently, and we handle the paperwork for you as part of our service. We pull the permit, schedule the inspection, and ensure everything is code-compliant so you don't have to deal with the Town directly.</p>

        <h3>Alberta Building Code Requirements</h3>
        <p>Alberta's building code has specific requirements for roofing in our climate zone. This includes minimum R-values for attic insulation, proper ventilation ratios (1:300 for balanced intake and exhaust), ice and water shield requirements at eaves and valleys, and specific fastening patterns for high-wind zones. Every Kayan Contracting roof meets or exceeds these requirements — no shortcuts, no exceptions.</p>

        <h3>Chinook Wind Patterns & Weather Challenges</h3>
        <p>Stony Plain sits in the chinook belt, where rapid temperature swings can go from -30°C to +10°C in a matter of hours. These extreme cycles cause expansion and contraction that degrades roofing materials faster than in more stable climates. We select products specifically engineered for these conditions — IKO Dynasty shingles with ArmourZone technology provide enhanced wind resistance up to 210 km/h, and our installation methods account for thermal movement. The chinook winds that blow across the open farmland west of town can be particularly punishing on south- and west-facing roof slopes.</p>

        <h3>Hail Season Preparedness</h3>
        <p>Central Alberta's hail season runs from June through August, and Stony Plain has seen its share of damaging storms. We help homeowners navigate insurance claims after hail events — documenting damage properly, working with adjusters, and ensuring your claim covers a quality replacement rather than a patch job. If you've had hail damage, call us at (780) 984-0221 for a free assessment before filing your claim.</p>
      `}
      projectShowcase={[
        {
          title: 'Heritage Park Bungalow — Full Tear-Off & Re-Roof',
          description: 'Removed three layers of old shingles from a 1978 bungalow, repaired rotted decking along the north eave, and installed IKO Dynasty shingles in Driftshake with new ridge vents and soffit ventilation. The homeowner had been getting quotes for two years — our honest assessment and competitive pricing won the job.',
          type: 'Roof Replacement',
        },
        {
          title: 'South Park Drive — Complete Exterior Package',
          description: 'Full roof replacement, 180 linear feet of seamless 5-inch eavestroughing, new aluminum soffits with vented panels, and fascia wrap on a two-storey home. Completed in four days with full yard protection and cleanup. The homeowner said it looked like a brand-new house.',
          type: 'Full Exterior',
        },
        {
          title: 'Meridian Estates — Complex Multi-Valley Roof',
          description: 'This newer home had a complex roofline with six valleys and three different pitch transitions. We installed IKO Cambridge shingles with ice and water shield in every valley and at all transitions. Precision flashing work around two skylights and a chimney. Zero callbacks.',
          type: 'Shingling',
        },
        {
          title: 'Highway 779 Acreage — Standing Seam Metal Roof',
          description: 'Installed a standing seam metal roof on a large acreage home south of Stony Plain. The homeowner wanted a permanent solution after replacing asphalt shingles twice in 20 years. The metal roof will last 50+ years with virtually no maintenance — a smart long-term investment.',
          type: 'Metal Roofing',
        },
        {
          title: 'Downtown Stony Plain — Emergency Storm Repair',
          description: 'After a severe windstorm tore shingles off the south face of this older home near downtown, we responded within hours with emergency tarping. Full repair was completed the following day — matching the existing shingles and replacing damaged flashing around the chimney.',
          type: 'Roof Repair',
        },
      ]}
      localFaqs={[
        {
          q: 'Do I need a permit for a roof replacement in Stony Plain?',
          a: 'Yes, the Town of Stony Plain requires a building permit for roof replacements. We handle the entire permit process for you — pulling the permit, scheduling inspections, and ensuring compliance. The permit fee is typically included in our quote so there are no surprises.',
        },
        {
          q: 'How do chinook winds affect roofing in Stony Plain?',
          a: 'Chinook winds cause rapid temperature swings that create expansion and contraction cycles in roofing materials. Over time, this accelerates wear on shingles and sealant strips. We install IKO Dynasty shingles with ArmourZone technology rated for winds up to 210 km/h, and our fastening patterns exceed code requirements for wind resistance.',
        },
        {
          q: 'What is the best roofing material for Stony Plain homes?',
          a: 'For most Stony Plain homes, IKO Dynasty or Cambridge architectural shingles offer the best balance of durability, appearance, and value. They are engineered for Alberta\'s freeze-thaw cycles and rated for high winds. For acreages or homeowners wanting a permanent solution, standing seam metal roofing is an excellent choice that lasts 50+ years.',
        },
        {
          q: 'How quickly can you start a roofing project in Stony Plain?',
          a: 'Because we are headquartered right here in Stony Plain, we can often start within days of signing the contract. Emergency repairs get same-day response. During peak season (June through September), we recommend booking 2 to 3 weeks in advance for full roof replacements.',
        },
        {
          q: 'Does Kayan Contracting handle hail damage insurance claims in Stony Plain?',
          a: 'Absolutely. We work with all major insurance providers and have extensive experience with hail damage claims in the Stony Plain area. We document damage thoroughly with photos and detailed reports, meet with your adjuster on-site, and ensure the claim covers a proper replacement — not just a patch. Call us at (780) 984-0221 after any storm for a free assessment.',
        },
        {
          q: 'Can you match my existing shingles for a partial repair?',
          a: 'In many cases, yes. We carry a wide inventory of IKO shingles and can often match existing colours and profiles for partial repairs. For older roofs where an exact match isn\'t possible, we will be upfront about the options and help you decide between a section repair or a full replacement that gives you a uniform, new look.',
        },
      ]}
      nearbyAreas={[
        { name: 'Spruce Grove', slug: 'spruce-grove' },
        { name: 'Parkland County', slug: 'parkland-county' },
        { name: 'Edmonton', slug: 'edmonton' },
        { name: 'St. Albert', slug: 'st-albert' },
        { name: 'Lac Ste. Anne County', slug: 'lac-ste-anne' },
      ]}
      blogLinks={[
        { title: '7 Warning Signs Your Roof Needs Replacement', href: '/blog/signs-roof-needs-replacement-stony-plain' },
        { title: 'Metal Roofing vs. Asphalt Shingles in Alberta', href: '/blog/metal-roofing-vs-asphalt-shingles-alberta' },
        { title: 'How Much Does Roof Replacement Cost in Alberta?', href: '/blog/roof-replacement-cost-alberta-2026' },
      ]}
    />
  )
}
