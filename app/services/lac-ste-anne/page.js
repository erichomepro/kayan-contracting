import LocationPageClient from '../location-page-client'

const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  title: 'Roofing Contractor Lac Ste. Anne County | Metal Roofing & Shingles',
  description:
    'Lac Ste. Anne County roofing contractor. Metal roofing, shingles, roof replacement for rural homes, lakefront properties & cabins. IKO Preferred. BBB A+. Call (780) 984-0221.',
  openGraph: {
    title: 'Roofing Contractor Lac Ste. Anne County | Kayan Contracting',
    description:
      'Trusted roofing for Lac Ste. Anne County — Alberta Beach, Onoway, Sangudo. Metal roofing specialists. BBB A+. 22 years experience.',
    url: `${BASE_URL}/services/lac-ste-anne`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Contractor Lac Ste. Anne County | Kayan Contracting',
    description: 'Trusted roofing for Lac Ste. Anne County. Metal roofing specialists. BBB A+. 22 years experience.',
  },
  alternates: {
    canonical: `${BASE_URL}/services/lac-ste-anne`,
  },
}

export default function LacSteAnnePage() {
  return (
    <LocationPageClient
      location="Lac Ste. Anne County"
      locationSlug="lac-ste-anne"
      description="Lac Ste. Anne County is our backyard. From the lakefront cottages at Alberta Beach to the farms and acreages around Onoway and Sangudo, Kayan Contracting has been the trusted roofing contractor for rural Lac Ste. Anne properties for over two decades. We understand the unique challenges of rural and lakefront roofing — longer spans, wind exposure, seasonal properties, and access considerations that city contractors simply don't know how to handle."
      highlights={[
        'Serving Lac Ste. Anne County for 22+ years — right next door from Stony Plain',
        'Metal roofing specialists — ideal for rural properties, acreages, and lakefront cabins',
        'Experienced with seasonal and lakefront properties at Alberta Beach and beyond',
        'Rural property expertise — large roof areas, outbuildings, and exposed sites',
        'Free on-site inspections throughout the county — no travel surcharges',
      ]}
      neighborhoodsContent={`
        <p>Lac Ste. Anne County stretches from the outskirts of Stony Plain all the way northwest to Sangudo and beyond. The mix of lakefront properties, small-town homes, and rural acreages means every project is different — and we've handled them all. Here's where you'll find our work across the county:</p>

        <h3>Alberta Beach</h3>
        <p>Alberta Beach is the jewel of Lac Ste. Anne, and its lakefront and near-lake properties face unique roofing challenges. The proximity to the lake creates higher humidity and moisture exposure that accelerates shingle wear, promotes moss and algae growth, and stresses flashing sealants. Many Alberta Beach homes are seasonal cottages that were built decades ago and have been expanded over the years, creating complex rooflines with additions that need careful integration. We've replaced dozens of roofs in Alberta Beach — from original 1950s cabins to modern year-round lakefront homes — and we understand how to protect these properties against the lake environment.</p>

        <h3>Onoway</h3>
        <p>Onoway is a thriving small town just northwest of Stony Plain, and we've been working on Onoway roofs for as long as we've been in business. The town's mix of older homes near the centre and newer developments on the edges gives us a range of projects — from full tear-offs on 1970s bungalows to gutter installations on recent builds. Onoway homeowners appreciate working with a nearby contractor who can respond quickly and who they'll see at the local hardware store. We're just 20 minutes away and treat every Onoway project like it's in our own neighbourhood.</p>

        <h3>Sangudo</h3>
        <p>Sangudo and the surrounding area represent the northwestern reaches of our regular service territory. The homes and farms here are more spread out, and roof areas tend to be larger — especially on agricultural properties with shops, barns, and outbuildings. We've completed numerous metal roofing projects in the Sangudo area, where the durability and low maintenance of standing seam metal makes it the practical choice for properties that are harder to access for regular maintenance. For Sangudo homeowners, we schedule efficiently to make the drive worthwhile and often complete multiple projects in the area on the same trip.</p>

        <h3>Gunn</h3>
        <p>The community of Gunn sits along Highway 43 between Onoway and Alberta Beach. The properties here are predominantly acreages with generous lot sizes and full wind exposure from the open farmland. We frequently work on acreage homes and outbuildings in the Gunn area, where metal roofing is a popular choice for its wind resistance and longevity. The rural setting means we need to plan for logistics — material delivery access, staging areas, and sometimes generator power — and our 22 years of rural project experience means we handle these details smoothly.</p>

        <h3>Lac Ste. Anne Lakefront Properties</h3>
        <p>The properties directly on Lac Ste. Anne — from Alberta Beach around to the south and west shores — represent some of our most interesting and rewarding projects. Lakefront homes face the most demanding conditions: constant moisture exposure, wind off the lake, and the freeze-thaw cycles that are especially severe near water. Many lakefront owners are converting seasonal cabins into year-round residences, which often requires upgrading the roof, insulation, and ventilation system to handle winter conditions. We specialize in these conversions, ensuring the roof system is built for full-season Alberta weather, not just summer weekends.</p>
      `}
      localExpertise={`
        <h3>Lac Ste. Anne County Building Permits</h3>
        <p>Lac Ste. Anne County requires development permits for certain construction projects, though the requirements for roof replacements can vary depending on the property's location and zoning. We navigate the county's permit process for every applicable project, ensuring compliance with local bylaws. For properties within the summer villages (like Alberta Beach), the village's own permit requirements apply — we're familiar with these as well and handle the paperwork for you.</p>

        <h3>Rural & Lakefront Roofing Challenges</h3>
        <p>Rural properties face challenges that city homes simply don't. Larger roof areas mean more material, more labour, and more exposure to wind uplift forces. Acreages and farms often have multiple structures — the house, a shop, a garage, maybe a barn — that all need roofing attention. Access can be challenging on rural roads, especially during spring breakup. And lakefront properties deal with constant moisture exposure that demands premium materials and meticulous installation. We've been solving these challenges for 22 years, and our pricing accounts for the realities of rural work without unnecessary surcharges.</p>

        <h3>Metal Roofing for Rural Properties</h3>
        <p>For rural Lac Ste. Anne properties, metal roofing is often the smartest investment. Standing seam metal roofs last 50+ years with virtually no maintenance — a critical advantage for properties that are harder to access or that serve as seasonal residences. Metal sheds snow efficiently, resists wind uplift, and stands up to hail far better than asphalt shingles. For agricultural buildings, shops, and outbuildings, metal roofing is the standard for good reason. We install both standing seam and exposed fastener metal roofing systems and can advise on which is right for each application.</p>

        <h3>Seasonal Property Considerations</h3>
        <p>Many Lac Ste. Anne properties — especially around Alberta Beach — are used seasonally. Seasonal homes have unique roofing concerns: unheated periods in winter create different condensation patterns, and spring opening often reveals damage that accumulated over the cold months. We recommend proper ventilation systems that work year-round regardless of heating status, and we schedule inspections in spring so seasonal owners can address any issues before summer. If your cottage roof needs work, call us in April or May to get ahead of the summer rush.</p>
      `}
      projectShowcase={[
        {
          title: 'Alberta Beach — Lakefront Cabin to Year-Round Home Conversion',
          description: 'Converted a 1960s seasonal cabin at Alberta Beach into a year-round residence with a complete roof system upgrade. Removed the aging asphalt shingles, added proper ice and water shield coverage across the entire roof deck, installed continuous soffit vents and a ridge vent system for year-round ventilation, and finished with IKO Dynasty shingles rated for full Alberta winter conditions. The owners now live lakeside twelve months a year.',
          type: 'Roof Replacement + Conversion',
        },
        {
          title: 'Onoway Acreage — Standing Seam Metal Roof on Custom Home',
          description: 'Installed a standing seam metal roof in charcoal grey on a large custom acreage home west of Onoway. The homeowner wanted a permanent roofing solution after replacing asphalt shingles twice in 25 years. The metal roof will last 50+ years, sheds snow cleanly, and complements the home\'s modern farmhouse design. Also installed metal roofing on the detached shop to match.',
          type: 'Metal Roofing',
        },
        {
          title: 'Sangudo Farm — Multi-Building Metal Roofing Package',
          description: 'Completed metal roofing on three structures for a Sangudo-area farm: the main residence (standing seam), a 40x60 shop (exposed fastener metal), and a horse barn (exposed fastener metal). Coordinated material delivery and crew scheduling to complete all three buildings in one mobilization, saving the property owner significant costs compared to three separate projects.',
          type: 'Metal Roofing — Multi-Building',
        },
        {
          title: 'Gunn Acreage — Hail Damage Insurance Claim & Full Replacement',
          description: 'A severe hailstorm damaged the roof and gutters on this Gunn-area acreage home. We documented all damage thoroughly and worked with the homeowner\'s insurance company to secure full replacement coverage. Installed IKO Dynasty shingles with upgraded flashing details and 180 linear feet of new seamless eavestroughing. The insurance process was completed in under four weeks from initial call to finished project.',
          type: 'Insurance + Replacement',
        },
        {
          title: 'Alberta Beach — Emergency Storm Repair on Seasonal Cottage',
          description: 'A spring windstorm tore shingles off the south face of this Alberta Beach cottage while the owners were still in Edmonton. We responded the same day, tarped the exposed area to prevent water damage, and completed a full south-slope re-shingle the following week. Quick communication and photos kept the out-of-town owners informed throughout. The cottage was ready for their May long weekend arrival.',
          type: 'Emergency Repair',
        },
      ]}
      localFaqs={[
        {
          q: 'Do I need a permit for roof work in Lac Ste. Anne County?',
          a: 'Permit requirements vary depending on your property\'s location and zoning within Lac Ste. Anne County. Properties within summer villages like Alberta Beach may need a village development permit. We check the requirements for your specific property and handle all necessary permits as part of our service. There are no surprises on permit costs — they are included in our quote.',
        },
        {
          q: 'Is metal roofing worth the extra cost for a rural property?',
          a: 'For most rural and lakefront properties in Lac Ste. Anne County, metal roofing is an excellent long-term investment. It lasts 50+ years versus 20-25 years for asphalt shingles, requires virtually no maintenance, sheds snow efficiently, and resists wind and hail damage far better than shingles. For properties that are harder to access or seasonal homes where you want minimal maintenance, the higher upfront cost pays for itself many times over.',
        },
        {
          q: 'Does Kayan Contracting charge extra for travelling to Lac Ste. Anne County?',
          a: 'No. Lac Ste. Anne County is our regular service territory — we\'re based right next door in Stony Plain. We do not charge travel surcharges for Alberta Beach, Onoway, Gunn, or the surrounding area. For properties further out toward Sangudo, we schedule efficiently to keep costs reasonable. Our quotes include all travel — the price we quote is the price you pay.',
        },
        {
          q: 'Can you work on seasonal cottages and cabins?',
          a: 'Absolutely. We have extensive experience with seasonal properties around Lac Ste. Anne. We work with out-of-town owners to schedule projects efficiently, provide photo updates throughout the process, and can coordinate with local keyholders for access. We also handle seasonal-to-year-round conversions, upgrading roof systems for full winter use. Spring is the ideal time to book cottage roof work before the summer season.',
        },
        {
          q: 'What roofing is best for lakefront properties at Alberta Beach?',
          a: 'Lakefront properties face constant moisture exposure, wind off the lake, and severe freeze-thaw cycles. We typically recommend either IKO Dynasty shingles with enhanced ventilation and full ice and water shield coverage, or standing seam metal roofing for maximum longevity and weather resistance. Metal is especially popular for lakefront homes because it sheds snow, resists moss and algae, and lasts 50+ years in the demanding lake environment.',
        },
        {
          q: 'How do you handle roofing on acreages with shops and outbuildings?',
          a: 'We frequently do multi-building projects on rural properties — house, shop, garage, and outbuildings in a single coordinated project. This saves you money because we mobilize once, order materials in bulk, and keep crews on-site for the full scope. We recommend standing seam metal for homes and exposed fastener metal for shops and agricultural buildings. Call (780) 984-0221 for a free assessment of all your buildings.',
        },
      ]}
      nearbyAreas={[
        { name: 'Stony Plain', slug: 'stony-plain' },
        { name: 'Spruce Grove', slug: 'spruce-grove' },
        { name: 'Parkland County', slug: 'parkland-county' },
        { name: 'Edmonton', slug: 'edmonton' },
        { name: 'St. Albert', slug: 'st-albert' },
      ]}
      blogLinks={[
        { title: 'Metal Roofing vs. Shingles: Which is Right for You?', href: '/blog/metal-roofing-vs-shingles' },
        { title: 'Hail Damage Roof Repair: Alberta Guide', href: '/blog/hail-damage-roof-repair-alberta' },
        { title: 'How Much Does Roof Replacement Cost in Alberta?', href: '/blog/roof-replacement-cost-alberta-2026' },
      ]}
    />
  )
}
