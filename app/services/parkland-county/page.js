import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor Parkland County, AB | Acreages & Rural Properties',
  description:
    'Parkland County roofing for acreages and rural homes. Metal roofing, shingles, eavestroughing. IKO Preferred. BBB A+. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor Parkland County, AB | Kayan Contracting',
    description:
      'Parkland County roofing specialists for acreages and rural properties. 22 years experience. IKO Preferred.',
    url: `${BASE_URL}/services/parkland-county`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Parkland County, AB | Kayan Contracting',
    description: 'Parkland County roofing specialists for acreages and rural properties.',
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
      description="Parkland County acreages and rural properties face unique roofing challenges — larger roof areas, exposure to open-field winds, and longer distances from service providers. Kayan Contracting specializes in acreage roofing and exterior work throughout the county. We've completed projects from Tomahawk to Entwistle to Wabamun and everywhere in between. When you live rural, you need a contractor who shows up, does it right, and stands behind the work."
      highlights={[
        'Specialists in acreage and rural property roofing for 22+ years',
        'Metal roofing experts — standing seam and metal shingles ideal for large rural properties',
        'Serving all of Parkland County including remote acreages off gravel roads',
        'Experience with large-scale agricultural buildings, shops, and outbuildings',
        'Free on-site inspections — we come to you, no matter how far into the county',
      ]}
      neighborhoodsContent={`
        <p>Parkland County covers a vast area west of Edmonton, and we serve every corner of it. From the hamlets along Highway 16 to the acreages tucked along the North Saskatchewan River valley, our crews have worked on properties throughout the county. Here's a look at the areas we serve most frequently:</p>

        <h3>Tomahawk & Area</h3>
        <p>The Tomahawk area, south of Highway 16 along Highway 759, is home to some of the county's largest acreages and working farms. These properties often have multiple buildings that need roofing attention — the main house, a detached garage, a quonset, and sometimes a barn or shop. We regularly package multiple building roofs into a single project to save homeowners on mobilization costs. The drive from our Stony Plain shop is under 40 minutes, so response times are still fast.</p>

        <h3>Entwistle & Evansburg</h3>
        <p>Further west along Highway 16, the communities of Entwistle and Evansburg sit in a transitional zone between prairies and parkland. The homes here face some of the county's most challenging weather — heavy snowfall, sustained winds, and intense freeze-thaw cycles through the winter months. We've completed many metal roof installations in this area because metal stands up better to the heavier snow loads and doesn't degrade as quickly in the harsh conditions.</p>

        <h3>Wabamun & Wabamun Lake Area</h3>
        <p>Wabamun Lake is a popular cottage and year-round residential area. The proximity to the lake creates higher humidity levels that can accelerate wear on roofing materials, particularly on north-facing slopes that stay damp longer. We've roofed lakefront cottages, year-round homes, and seasonal cabins throughout the Wabamun area. Metal roofing is a popular choice here for its resistance to moisture and its ability to shed heavy snow loads.</p>

        <h3>Duffield & Carvel</h3>
        <p>The Duffield and Carvel areas east of Stony Plain feature a mix of older established acreages and newer country residential subdivisions. Many of the older properties have original roofs that are well past their lifespan. The newer country residential lots often have larger homes with complex rooflines that require experienced crews. We know these roads well — Duffield is barely 15 minutes from our shop.</p>

        <h3>Keephills & South Parkland County</h3>
        <p>The Keephills area in south Parkland County is more remote, with properties spread across larger parcels of land. Access can be challenging during spring breakup when gravel roads soften, so we plan these projects strategically. The open exposure in this area makes wind resistance a top priority — we use enhanced fastening patterns and hand-seal all shingle tabs on properties with significant wind exposure.</p>

        <h3>Acreages Along Highway 16A</h3>
        <p>The corridor along old Highway 16A between Stony Plain and Spruce Grove includes some of Parkland County's most established acreages. These larger properties often have mature landscaping that requires careful protection during roofing work. Our crews use ground-level tarps, plywood runners, and magnetic nail sweepers to protect your property. We leave the site cleaner than we found it — every time.</p>
      `}
      localExpertise={`
        <h3>Parkland County Building Permits</h3>
        <p>Parkland County's development services department handles building permits for rural properties. The permit process for acreage roofing is straightforward, and we manage it entirely for you. We apply for the permit, provide the required documentation, and schedule the inspection upon completion. Parkland County's inspectors know our work — we've been pulling permits here for over two decades.</p>

        <h3>Rural Property Roofing Challenges</h3>
        <p>Roofing an acreage is fundamentally different from roofing a home in town. Rural properties face open-field wind exposure without the shelter of neighbouring houses and trees. Roof areas are often significantly larger — 2,000 to 4,000 square feet or more for the main house alone. Access roads may be unpaved, and material delivery requires coordination with suppliers who have the right trucks for rural routes. We've built our entire operation around these realities. Our equipment trailers, material staging processes, and crew deployment are all designed for efficient rural work.</p>

        <h3>Metal Roofing for Parkland County Properties</h3>
        <p>Metal roofing is increasingly popular on Parkland County acreages, and for good reason. A properly installed standing seam metal roof lasts 50 to 70 years — easily outlasting two or three asphalt shingle roofs. Metal handles heavy snow loads, resists hail damage, sheds ice and debris, and requires virtually zero maintenance. For a large acreage home where re-roofing means significant cost and disruption, doing it once with metal makes long-term financial sense. We install both standing seam and metal shingle systems in a range of colours and profiles.</p>

        <h3>Wind Exposure & Fastening Standards</h3>
        <p>Parkland County acreages sit on open land with minimal wind breaks. Standard four-nail fastening patterns are not adequate for these exposures. We use six-nail patterns on all exposed elevations, hand-seal every tab in high-wind zones, and install ice and water shield membrane on all eaves and rakes — not just the minimum code requirement. This attention to wind resistance is what separates a roof that lasts 25 years from one that fails in the first major storm.</p>
      `}
      projectShowcase={[
        {
          title: 'Tomahawk Acreage — Standing Seam Metal Roof on 3,200 sq ft Home',
          description: 'Installed a charcoal standing seam metal roof on a large two-storey acreage home near Tomahawk. The property had significant wind exposure from the southwest, so we used concealed fastener panels with enhanced clip spacing for wind uplift resistance. The homeowner also had us roof the detached 40x60 shop in matching metal.',
          type: 'Metal Roofing',
        },
        {
          title: 'Wabamun Lake Cottage — Roof Replacement & Gutter Installation',
          description: 'Replaced the original 1980s three-tab roof on a lakefront cottage with IKO Cambridge shingles and installed new 5-inch seamless eavestroughing. The proximity to the lake meant we needed to address moisture buildup in the attic — we added ridge venting and soffit intake vents to create proper airflow and prevent condensation.',
          type: 'Roof & Gutters',
        },
        {
          title: 'Duffield Country Residential — Full Exterior Overhaul',
          description: 'Complete exterior transformation on a 2,800 sq ft country home near Duffield. New IKO Dynasty roof in Glacier, 280 linear feet of seamless eavestroughing, aluminum soffits and fascia, and steel siding on the garage. This project took six working days and completely changed the look and weather protection of the property.',
          type: 'Full Exterior',
        },
        {
          title: 'Entwistle Farm — Metal Roof on House & Outbuildings',
          description: 'Roofed the main farmhouse, a 30x40 shop, and a small storage building with colour-matched metal roofing. Coordinating three buildings in a single mobilization saved the homeowner significantly on setup and delivery costs. All three roofs were completed in eight working days.',
          type: 'Metal Roofing',
        },
        {
          title: 'Highway 16A Acreage — Emergency Hail Damage & Insurance Claim',
          description: 'Responded to a severe hail event that damaged the roof, siding, and eavestroughing on a large acreage property. Documented all damage with detailed photos and measurements, met with the insurance adjuster on-site, and completed the full replacement — roof, gutters, and fascia — within three weeks of the claim being approved.',
          type: 'Insurance Claim',
        },
      ]}
      localFaqs={[
        {
          q: 'Do you charge extra for travel to remote Parkland County acreages?',
          a: 'No. We do not charge extra travel fees for properties within Parkland County. Our quotes include all mobilization and travel costs. Whether you are 10 minutes from Stony Plain or 45 minutes west near Entwistle, the price is the price. We serve the entire county.',
        },
        {
          q: 'Is metal roofing worth the extra cost for an acreage property?',
          a: 'For most acreage properties, metal roofing makes strong financial sense. While the upfront cost is higher than asphalt shingles, a standing seam metal roof lasts 50 to 70 years versus 20 to 25 years for shingles. When you factor in the cost of two or three shingle replacements over that period — plus the disruption each time — metal often costs less in the long run. Metal is also superior for wind resistance, snow shedding, and fire protection, which are important on rural properties.',
        },
        {
          q: 'Can you roof my outbuildings and shop along with my house?',
          a: 'Absolutely — and we encourage it. Packaging multiple buildings into a single project saves you money on mobilization, delivery, and setup costs. We regularly roof main houses, detached garages, shops, and outbuildings in a single project. We provide a combined quote with itemized pricing for each building so you can see exactly what you are paying for.',
        },
        {
          q: 'Do I need a building permit for roofing on a Parkland County acreage?',
          a: 'Yes, Parkland County requires building permits for roof replacements. We handle the entire permit process for you — submitting the application, providing required documentation, and scheduling the final inspection. Our familiarity with Parkland County\'s development services department ensures smooth, efficient permit processing.',
        },
        {
          q: 'How do you handle material delivery to rural properties with gravel roads?',
          a: 'We coordinate material delivery with our suppliers who have trucks equipped for rural access. Materials are delivered directly to your property and staged near the work area. For properties with longer or narrower driveways, we plan delivery carefully to avoid ruts or damage. During spring breakup season when gravel roads soften, we schedule delivery timing to minimize impact on your road.',
        },
        {
          q: 'What is your warranty coverage for Parkland County acreage roofing?',
          a: 'Every Kayan Contracting roof — whether in town or on a remote acreage — comes with our full 15-year workmanship warranty plus the manufacturer\'s material warranty. Our warranty covers any installation-related issues including leaks, lifting shingles, and flashing failures. We have been in business for 22 years and stand behind every project. Call (780) 984-0221 for a free inspection.',
        },
      ]}
      nearbyAreas={[
        { name: 'Stony Plain', slug: 'stony-plain' },
        { name: 'Spruce Grove', slug: 'spruce-grove' },
        { name: 'Edmonton', slug: 'edmonton' },
        { name: 'St. Albert', slug: 'st-albert' },
        { name: 'Lac Ste. Anne County', slug: 'lac-ste-anne' },
      ]}
      blogLinks={[
        { title: 'Metal Roofing vs. Asphalt Shingles in Alberta', href: '/blog/metal-roofing-vs-asphalt-shingles-alberta' },
        { title: 'Spring Roof Maintenance Checklist for Parkland County', href: '/blog/spring-roof-maintenance-checklist-alberta' },
        { title: 'How to File a Roof Insurance Claim After Hail', href: '/blog/roof-insurance-claim-hail-storm-alberta' },
      ]}
    />
  )
}
