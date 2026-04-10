// ===== KAYAN CONTRACTING — BLOG POST DATA =====
// SEO-optimized articles targeting Stony Plain / Parkland County keywords

import { blogPostsBatch1 } from './blog-posts-batch1'
import { blogPostsBatch2 } from './blog-posts-batch2'

export const blogPosts = [
  ...blogPostsBatch1,
  ...blogPostsBatch2,
  {
    id: 'roofing-materials-guide-alberta',
    title: 'The Complete Guide to Roofing Materials for Alberta Homes',
    subtitle: 'Asphalt Shingles vs. Metal Roofing vs. Steel — Which Is Right for Your Stony Plain Home?',
    publishDate: '2026-03-18',
    readTime: '8 min read',
    category: 'Roofing Guide',
    coverImage: '/images/gallery/real/project-59.jpg',
    excerpt: 'Choosing the right roofing material in Alberta isn\'t just about looks — it\'s about surviving chinook winds, hail, and -40°C winters. Here\'s what 22 years of experience has taught us.',
    tags: ['Roofing Materials', 'Alberta', 'Stony Plain', 'Metal Roofing', 'Asphalt Shingles'],
    relatedService: 'roof-replacement',
    featured: true,
    sections: [
      {
        type: 'intro',
        content: `If you're a homeowner in Stony Plain, Spruce Grove, or Parkland County, your roof takes a beating that most of Canada can't imagine. We're talking about chinook winds that can rip poorly installed shingles clean off, summer hailstorms that turn roofs into Swiss cheese, and winters where temperatures plunge to -40°C.

After 22 years and over 1,500 roofs in Parkland County, we've seen every material succeed — and fail. This guide breaks down exactly what works in our climate and why.`,
      },
      {
        type: 'comparison-chart',
        title: 'Roofing Material Comparison',
        data: [
          {
            material: 'Asphalt Shingles (Architectural)',
            lifespan: '20-30 years',
            costPerSqFt: '$4.50 - $7.00',
            hailResistance: 'Moderate',
            windRating: 'Up to 210 km/h',
            maintenance: 'Low',
            score: 75,
            color: '#d95c26',
          },
          {
            material: 'Standing Seam Metal',
            lifespan: '40-70 years',
            costPerSqFt: '$12.00 - $18.00',
            hailResistance: 'Excellent',
            windRating: 'Up to 240 km/h',
            maintenance: 'Very Low',
            score: 92,
            color: '#4a90d9',
          },
          {
            material: 'Steel Shingles',
            lifespan: '40-50 years',
            costPerSqFt: '$9.00 - $14.00',
            hailResistance: 'Excellent',
            windRating: 'Up to 220 km/h',
            maintenance: 'Very Low',
            score: 85,
            color: '#2ecc71',
          },
          {
            material: 'Cedar Shake',
            lifespan: '15-25 years',
            costPerSqFt: '$8.00 - $14.00',
            hailResistance: 'Poor',
            windRating: 'Up to 170 km/h',
            maintenance: 'High',
            score: 45,
            color: '#8b6914',
          },
        ],
      },
      {
        type: 'content',
        title: 'Asphalt Shingles — The Parkland County Standard',
        content: `Architectural asphalt shingles remain the most popular choice across Stony Plain and Spruce Grove — and for good reason. They offer the best balance of cost, appearance, and durability for our climate.

**Why we recommend IKO Cambridge or Dynasty shingles:**
- Engineered specifically for Canadian weather
- Class 4 impact resistance (highest rating) available
- Wide colour selection to match any home style
- 30+ year manufacturer warranties
- As an IKO Preferred Contractor, we can offer enhanced warranty coverage

**Best for:** Most residential homes in Parkland County, especially if you're planning to sell within 20 years.`,
        image: '/images/gallery/real/project-59.jpg',
      },
      {
        type: 'content',
        title: 'Standing Seam Metal — The Forever Roof',
        content: `If you're building your forever home on an acreage in Parkland County, standing seam metal is the ultimate investment. We've been installing more metal roofs every year as homeowners realize the long-term value.

**Why metal roofs dominate on acreages:**
- 50+ year lifespan means you'll never reroof again
- Superior snow shedding — critical for Alberta winters
- Handles hail that would destroy asphalt shingles
- Energy efficient: reflects solar heat in summer
- Zero maintenance beyond occasional gutter cleaning

**The upfront cost is higher**, but when you calculate cost-per-year-of-protection, metal actually costs less than asphalt over 50 years.`,
        image: '/images/gallery/real/project-104.jpg',
      },
      {
        type: 'cost-calculator',
        title: 'Cost Per Year: The Real Comparison',
        description: 'Most homeowners compare upfront cost. Smart homeowners compare cost per year of protection.',
        data: [
          { material: 'Asphalt Shingles', upfront: 12000, lifespan: 25, annual: 480 },
          { material: 'Standing Seam Metal', upfront: 28000, lifespan: 55, annual: 509 },
          { material: 'Steel Shingles', upfront: 22000, lifespan: 45, annual: 489 },
          { material: 'Cedar Shake', upfront: 20000, lifespan: 20, annual: 1000 },
        ],
      },
      {
        type: 'content',
        title: 'Steel Siding — Protection That Looks Incredible',
        content: `Steel siding is gaining massive popularity in Parkland County. The modern board-and-batten look is clean, contemporary, and virtually indestructible.

**Why Stony Plain homeowners are choosing steel:**
- Withstands Alberta's worst hail and wind
- Never needs painting or staining
- Won't warp, crack, rot, or attract pests
- Available in dozens of colours and profiles
- Increases home value and curb appeal

We've completed steel siding projects from small shops to full residential exteriors — the transformation is always dramatic.`,
        image: '/images/gallery/real/project-69.jpg',
      },
      {
        type: 'cta',
        title: 'Not Sure Which Material Is Right for Your Home?',
        content: 'Book a free inspection and we\'ll give you an honest recommendation based on your roof, your budget, and your plans. No pressure, no obligation.',
        buttonText: 'Get Your Free Assessment',
        buttonLink: '/#quote',
      },
    ],
  },
  {
    id: 'signs-roof-needs-replacement-stony-plain',
    title: '7 Warning Signs Your Stony Plain Roof Needs Replacement',
    subtitle: 'Don\'t Wait Until You See Water Stains — Here\'s What to Look For',
    publishDate: '2026-03-13',
    readTime: '6 min read',
    category: 'Homeowner Tips',
    coverImage: '/images/gallery/real/project-61.jpg',
    excerpt: 'Most roof problems are invisible from the ground. Here are the 7 warning signs every Parkland County homeowner should know — and what to do about each one.',
    tags: ['Roof Replacement', 'Warning Signs', 'Stony Plain', 'Spruce Grove', 'Home Maintenance'],
    relatedService: 'roof-repair',
    sections: [
      {
        type: 'intro',
        content: `Here's a stat that should concern every homeowner in Stony Plain: **by the time you see a water stain on your ceiling, the damage has been happening for months — sometimes years.** The leak itself is often just the final symptom of a roof that's been failing silently.

After inspecting over 1,500 roofs across Parkland County, these are the 7 warning signs we see most often — ranked from easiest to spot to the ones that require a professional eye.`,
      },
      {
        type: 'warning-signs',
        title: 'The 7 Warning Signs',
        signs: [
          {
            number: 1,
            title: 'Your Roof Is 15+ Years Old',
            severity: 'moderate',
            description: 'Most asphalt shingle roofs in Alberta last 20-25 years. If yours is approaching 15, it\'s time for a professional inspection. Alberta\'s extreme temperature swings (from -40°C to +35°C) age roofs faster than in milder climates.',
            action: 'Schedule a free inspection to assess remaining life.',
          },
          {
            number: 2,
            title: 'Granules in Your Gutters',
            severity: 'moderate',
            description: 'Those black sandy bits collecting in your gutters? That\'s the protective granule coating washing off your shingles. Some granule loss is normal on new roofs, but heavy granule loss on an older roof means your shingles are deteriorating.',
            action: 'Check your gutters and downspout exits after rain.',
          },
          {
            number: 3,
            title: 'Curling, Buckling, or Missing Shingles',
            severity: 'high',
            description: 'Shingles that curl up at the edges, buckle in the middle, or have blown off entirely are no longer protecting your home. Alberta\'s chinook winds are especially brutal on aging shingles.',
            action: 'This needs immediate attention — exposed areas can leak within one rainstorm.',
          },
          {
            number: 4,
            title: 'Daylight Through Your Attic',
            severity: 'critical',
            description: 'Go into your attic on a sunny day. If you can see pinpoints of light coming through the roof boards, water is getting in too. This often means the underlayment has failed.',
            action: 'Call a roofer immediately — this is an active leak pathway.',
          },
          {
            number: 5,
            title: 'Sagging Roof Deck',
            severity: 'critical',
            description: 'A roof that sags or dips — even slightly — indicates structural damage to the decking below. This is often caused by long-term moisture exposure that has rotted the plywood.',
            action: 'Do NOT walk on a sagging roof. Call a professional immediately.',
          },
          {
            number: 6,
            title: 'Ice Dams in Winter',
            severity: 'high',
            description: 'Those dramatic icicles hanging from your eaves look pretty but signal a serious problem: poor attic ventilation or insulation. Heat escapes through the roof, melts snow, and the water refreezes at the cold eaves — forcing water under your shingles.',
            action: 'Address ventilation and insulation, not just the ice.',
          },
          {
            number: 7,
            title: 'Rising Energy Bills',
            severity: 'moderate',
            description: 'If your heating bills have been climbing despite no rate increase, your roof may be the culprit. Poor insulation, inadequate ventilation, or a failing roof system lets conditioned air escape — something our FLIR thermal imaging can pinpoint exactly.',
            action: 'Request a thermal inspection to find the exact heat loss points.',
          },
        ],
      },
      {
        type: 'severity-chart',
        title: 'How Urgent Is Your Roof Problem?',
        description: 'Use this chart to understand how quickly you need to act based on the signs you\'re seeing.',
      },
      {
        type: 'content',
        title: 'What Happens If You Wait Too Long?',
        content: `We get it — a new roof is a big investment. But delaying necessary repairs almost always costs more in the end. Here's what we typically see when homeowners wait:

**6 months of neglect:** Small leak becomes a big leak. Drywall damage. Mold starts growing.

**1 year of neglect:** Structural decking rots. Insulation gets waterlogged and loses effectiveness. Interior damage spreads.

**2+ years of neglect:** Full deck replacement needed (adds $3,000-$8,000 to the project). Mold remediation required. Potential structural framing damage.

The difference between a $12,000 roof replacement and a $25,000+ emergency repair is often just timing.`,
        image: '/images/gallery/real/project-70.jpg',
      },
      {
        type: 'content',
        title: 'The Free Inspection Advantage',
        content: `Here's what a Kayan Contracting inspection includes — at zero cost to you:

- **Complete exterior assessment** — shingles, flashing, vents, gutters, soffits
- **Attic inspection** — ventilation, insulation, moisture signs
- **FLIR thermal imaging** — pinpoints heat loss and moisture invisible to the naked eye
- **Honest assessment** — we'll tell you if a repair will do or if replacement is needed
- **Written report with photos** — documentation you can use for insurance claims

We've been doing this for 22 years. We'll always give you the honest answer — even if it means telling you your roof is fine.`,
        image: '/images/gallery/real/project-09.jpg',
      },
      {
        type: 'cta',
        title: 'Seeing Any of These Signs?',
        content: 'Don\'t wait until a small problem becomes an expensive emergency. Book your free roof inspection today.',
        buttonText: 'Book Free Inspection',
        buttonLink: '/#quote',
      },
    ],
  },
  {
    id: 'spring-roof-maintenance-checklist-alberta',
    title: 'Spring Roof Maintenance Checklist for Parkland County Homeowners (2026)',
    subtitle: 'The Post-Winter Inspection Guide That Prevents Costly Surprises',
    publishDate: '2026-03-27',
    readTime: '10 min read',
    category: 'Seasonal Maintenance',
    coverImage: '/images/gallery/real/project-30.jpg',
    excerpt: 'Alberta winters punish roofs like nowhere else in Canada. This spring maintenance checklist — built from 22 years of inspections across Stony Plain, Spruce Grove, and Parkland County — shows you exactly what to check, when to worry, and when to call a professional.',
    tags: ['Spring Maintenance', 'Roof Inspection', 'Stony Plain', 'Spruce Grove', 'Parkland County', 'Hail Season'],
    relatedService: 'roof-repair',
    featured: false,
    sections: [
      {
        type: 'intro',
        content: `Every spring in Parkland County, we get the same call dozens of times: "We just noticed water stains on the ceiling" or "Our shingles are all over the yard." The damage happened months ago — during the freeze-thaw cycles of February, the heavy snow loads of December, or the chinook winds that ripped through in January.

The homeowners who **never** make that call? They do a simple spring inspection every year. This checklist is what our crews use when we inspect roofs across Stony Plain, Spruce Grove, and Edmonton — adapted so any homeowner can do the visual checks themselves.`,
      },
      {
        type: 'content',
        title: 'Why Spring Inspections Matter in Alberta',
        content: `Alberta is one of the harshest climates for roofing in all of North America. Here is what your roof survived this past winter:

**Temperature extremes:** Lows of -35°C to -40°C followed by chinook warmups to +10°C — sometimes within 48 hours. This freeze-thaw cycling expands and contracts every material on your roof hundreds of times per season.

**Snow loads:** A typical Parkland County winter drops 120-150 cm of snow. Wet, heavy spring snow is even worse — it can weigh 5x more per cubic metre than dry powder.

**Ice damming:** When attic heat melts roof snow, water refreezes at the cold eaves and forces its way under shingles. We see ice dam damage on roughly 1 in 5 roofs we inspect each spring.

**Chinook winds:** Wind gusts of 80-120 km/h are normal in central Alberta. These tear at flashing, lift shingle edges, and loosen vents.

A 30-minute spring inspection can catch problems that cost $200-$500 to fix now — versus $5,000-$15,000 if left until fall.`,
        image: '/images/gallery/real/project-61.jpg',
      },
      {
        type: 'content',
        title: 'Fix Now vs. Fix Later: The Real Cost of Waiting',
        content: `Every small roof problem gets expensive when ignored. Here is what we see across Parkland County every spring:

**Loose or missing shingles** — Fix now: $150-$400. If ignored: $2,000-$5,000 (water penetrates decking, insulation damage, interior drywall repair).

**Damaged flashing** — Fix now: $200-$600. If ignored: $3,000-$8,000 (the #1 cause of roof leaks — water enters wall cavities, causes mold growth behind finishes).

**Clogged gutters and downspouts** — Fix now: $100-$250. If ignored: $1,500-$4,000 (fascia rot, foundation erosion, basement flooding).

**Cracked pipe boots and vent seals** — Fix now: $150-$350. If ignored: $2,500-$6,000 (direct water path into attic, rots decking around penetrations).

**Ice dam damage to underlayment** — Fix now: $500-$1,200. If ignored: $5,000-$15,000 (progressive decking rot, full section tear-off and replacement required).

The pattern is clear: **a $200 spring repair prevents a $5,000 emergency in fall.** This is the single best return on investment in home maintenance.`,
      },
      {
        type: 'content',
        title: 'Part 1: The Ground-Level Walk-Around (10 Minutes)',
        content: `You do not need to climb on your roof for this first check. Grab a pair of binoculars and walk the full perimeter of your home. Here is what to look for:

**Shingles on the ground or in the yard**
After a winter of chinook winds, it is common to find shingles that have blown off entirely. Check your yard, garden beds, and along the fence line. Even one missing shingle is an exposed leak pathway.

**Visible sagging or dipping in the roofline**
Stand across the street and look at your roof ridge (the peak). It should be a perfectly straight line. Any sag, dip, or waviness suggests structural issues — possibly from prolonged snow load or moisture damage to the decking.

**Damaged or leaning vents and pipes**
Look at the metal vents, plumbing stacks, and exhaust pipes poking through your roof. They should be straight and upright. Tilted or damaged vents mean the boot seal is likely compromised.

**Gutter condition**
Check for gutters pulling away from the fascia board, sagging sections (ice expansion), or visible rust and holes. Blocked or damaged gutters cause water to pool against your fascia, soffits, and foundation.

**Soffits and fascia damage**
Look under the roof overhang. Cracked, warped, or water-stained soffits indicate moisture getting behind your exterior — often from ice dams or failed flashing above.`,
        image: '/images/gallery/real/project-70.jpg',
      },
      {
        type: 'content',
        title: 'Part 2: The Up-Close Roof Check (20 Minutes)',
        content: `**Safety first: If your roof pitch is steep (more than 6/12), or you are not comfortable on a ladder, call a professional.** At Kayan Contracting, every inspection is free — there is no reason to risk a fall.

If you are comfortable on a ladder, here is what to examine:

**Shingle condition**
- **Curling:** Edges turning upward (usually from heat cycling or poor ventilation)
- **Cracking:** Horizontal splits across the shingle face (age and cold-cycling damage)
- **Granule loss:** Bald or smooth patches where the protective granule coating has washed away — check your gutters for piles of black grit
- **Lifted tabs:** Shingle tabs that are no longer sealed flat, leaving them vulnerable to wind

**Flashing integrity**
Check every place where the roof meets a wall, chimney, skylight, or vent. The metal flashing at these joints should be tight, sealed, and rust-free. Flashing failure is the number one cause of roof leaks in homes under 15 years old.

**Pipe boots and vent seals**
The rubber boots around plumbing vents crack and split after 8-12 years — even if the shingles are fine. A cracked pipe boot is a direct path for water into your attic.

**Ridge cap shingles**
The shingles along the very peak of your roof take the worst abuse from wind and UV. Check for lifting, cracking, or missing ridge caps.

**Valley condition**
Roof valleys (where two slopes meet) channel the most water. Look for worn shingles, exposed underlayment, or accumulated debris in valley channels.`,
        image: '/images/gallery/real/project-59.jpg',
      },
      {
        type: 'content',
        title: 'Part 3: The Attic Inspection (15 Minutes)',
        content: `This is the step most homeowners skip — and it is the most revealing. Grab a flashlight and check these areas:

**Daylight through the roof boards**
On a sunny afternoon, turn off the attic lights and look for pinpoints of light coming through the roof deck. Any visible light means water can get in too.

**Water stains or dark marks on the underside of the decking**
Discoloured wood — especially around vents, chimneys, and valleys — indicates past or active water intrusion. Fresh stains will feel damp to the touch.

**Mold or musty odour**
A musty smell in the attic means moisture is present. Visible mold on rafters or decking is a serious problem that needs immediate professional attention.

**Insulation condition**
- Is insulation evenly distributed, or are there bare spots?
- Is insulation wet or compressed? (Wet insulation has zero R-value)
- Can you see the attic floor joists through the insulation? (You should not be able to — minimum R-50 is recommended in Alberta)

**Ventilation check**
Your attic needs both intake vents (soffits) and exhaust vents (ridge vent or roof vents). Blocked soffits are extremely common — insulation gets pushed against them during installation. Poor ventilation causes ice dams in winter and heat buildup in summer.

**Our FLIR thermal cameras detect all of these issues instantly** — moisture, insulation gaps, ventilation failures — even through finished ceilings. Every Kayan inspection includes thermal imaging at no extra charge.`,
        image: '/images/gallery/real/project-09.jpg',
      },
      {
        type: 'content',
        title: 'Part 4: Gutters, Downspouts, and Drainage',
        content: `Your eavestroughing system is the unsung hero of roof protection. When it fails, water pools where it should not — against your foundation, behind your fascia, and under your shingles.

**Clean out all gutters and downspouts**
Winter debris, shingle granules, and leaf matter accumulate over winter. Blocked gutters cause water to back up under shingles at the eave edge.

**Check gutter slope**
Water should flow steadily toward downspouts with no pooling. If water sits in sections of your gutter, the hangers have likely shifted from ice expansion.

**Inspect downspout extensions**
Downspouts should discharge water at least 1.8 metres (6 feet) away from your foundation. Splash blocks and extensions that shifted over winter need to be repositioned.

**Look for overflow staining**
Dark staining on your fascia board directly behind the gutter indicates chronic overflow — either the gutter is too small (common with 4-inch gutters on Alberta homes) or it is blocked.

**Consider upgrading to 6-inch seamless eavestroughing**
If your home has older 4-inch or 5-inch sectional gutters, a 6-inch seamless system handles Alberta's heavy rainfall and snowmelt significantly better. We fabricate seamless eavestroughing on-site for a perfect, leak-free fit.`,
        image: '/images/gallery/real/project-104.jpg',
      },
      {
        type: 'content',
        title: 'Your Spring Inspection Priority Order',
        content: `Not all checks are equally urgent. Here is the order we recommend — based on which problems cause the most damage fastest:

**Priority 1: Attic inspection (moisture, mold, insulation)** — This reveals hidden damage that has been accumulating all winter. Mold, wet insulation, and rotting decking are urgent problems. Check this first.

**Priority 2: Flashing and pipe boots** — These are the #1 source of roof leaks on homes under 15 years old. A cracked pipe boot or lifted flashing is an active leak pathway. Address within one week.

**Priority 3: Shingle condition** — Curling, cracking, and missing shingles leave your underlayment and decking exposed. Address within two weeks of discovery.

**Priority 4: Gutters and downspouts** — Clean and repair before the first heavy spring rain. Blocked gutters cause fascia rot and foundation damage.

**Priority 5: Soffits and fascia** — Damaged soffits compromise attic ventilation, which causes ice dams the following winter. Address within one month.`,
      },
      {
        type: 'content',
        title: 'Preparing for Alberta Hail Season',
        content: `Spring inspections are not just about winter damage — they are also about **preparing for what comes next**. Alberta hail season runs from June through September, and Parkland County sits squarely in Canada's "Hail Alley."

**Why spring prep matters for hail:**
- A roof with pre-existing damage (loose shingles, compromised flashing, cracked pipe boots) will suffer dramatically worse hail damage than a roof in good condition
- Insurance adjusters will distinguish between pre-existing wear and storm damage — if your roof was already failing, your claim may be reduced or denied
- Documenting your roof's condition in spring (with dated photos) gives you proof of pre-storm condition if you need to file a claim later

**What to do before hail season:**
- Fix any issues found during your spring inspection
- Take dated photos of your roof from all four sides
- Save photos in cloud storage with timestamps
- Know your insurance policy's hail damage deductible
- Have a trusted roofer's number saved (before you need it)

**After any hailstorm, call us immediately at (780) 984-0221.** We document damage thoroughly, work directly with your insurance adjuster, and ensure your claim is handled properly. Do not wait — insurance companies have filing deadlines.`,
      },
      {
        type: 'content',
        title: 'When to Call a Professional',
        content: `Your spring walk-around can catch a lot. But some problems require professional eyes and equipment. **Call a roofer if you notice any of these:**

- Any visible sagging in the roofline
- Multiple missing or damaged shingles
- Active leaks or fresh water stains in the attic
- Mold growth anywhere in the attic
- Flashing that is visibly pulled away from walls or chimneys
- Your roof is 15+ years old and has never been professionally inspected
- You had ice dams this past winter

**What to expect from a Kayan Contracting spring inspection:**

Our inspections are free, thorough, and honest. Here is exactly what we do:

- **Complete exterior assessment** — every shingle, every flashing joint, every vent
- **Attic inspection** — ventilation, insulation depth and condition, moisture signs
- **FLIR thermal imaging** — reveals hidden moisture and insulation failures invisible to the naked eye
- **Gutter and drainage evaluation** — slope, capacity, downspout placement
- **Written report with photos** — documentation you can keep for insurance records
- **Honest recommendation** — we will tell you if your roof is fine, needs a small repair, or needs replacement. No upselling, no pressure.

We have been inspecting and repairing roofs across Stony Plain, Spruce Grove, and Parkland County for 22 years. We have seen everything — and we will always give you the straight answer.`,
        image: '/images/gallery/real/project-18.jpg',
      },
      {
        type: 'content',
        title: 'Frequently Asked Questions',
        content: `**How often should I inspect my roof in Alberta?**
At minimum, twice per year — once in spring (after winter) and once in fall (before winter). You should also inspect after any major storm, particularly hailstorms. Professional inspections are recommended every 2-3 years, or annually if your roof is over 15 years old.

**Can I do a roof inspection myself?**
You can do a thorough ground-level inspection and attic check yourself. However, walking on the roof carries fall risks and can actually damage aging shingles. We recommend professional inspections for the on-roof portion — especially since our inspections are free.

**What is the best time of year to replace a roof in Alberta?**
The ideal window is May through October, when temperatures are consistently above 10°C. Shingle adhesive strips require warm temperatures to seal properly. Spring bookings (March-April) secure your spot before the busy summer season.

**How much does a spring roof repair typically cost?**
Minor repairs (replacing a few shingles, sealing flashing, replacing a pipe boot) typically run $150-$600. More extensive repairs involving underlayment or decking can range from $1,000-$3,000. We always provide a written quote before any work begins.

**Does Kayan Contracting charge for inspections?**
Never. Our inspections are 100% free with no obligation. We include FLIR thermal imaging at no additional cost — something most companies charge $300-$500 for separately.

**What happens if I find hail damage from last year?**
Most Alberta home insurance policies allow claims to be filed within one year of the storm date. Contact your insurance company first, then call us at (780) 984-0221. We will document the damage and work directly with your adjuster.`,
      },
      {
        type: 'cta',
        title: 'Book Your Free Spring Inspection',
        content: 'Winter is hard on Alberta roofs. Let our experienced crews inspect yours — with FLIR thermal imaging included — before small problems become expensive emergencies. Free, no-obligation, and honest. That is the Kayan way.',
        buttonText: 'Schedule Free Inspection',
        buttonLink: '/#quote',
      },
    ],
  },
  {
    id: 'roofing-cost-guide-stony-plain-spruce-grove-2026',
    title: 'Roof Replacement Cost: Stony Plain & Spruce Grove (2026)',
    subtitle: 'Real Numbers From a Local Contractor — No Surprises',
    publishDate: '2026-04-02',
    readTime: '9 min read',
    category: 'Pricing Guide',
    coverImage: '/images/gallery/real/project-59.jpg',
    excerpt: 'Most contractors won\'t publish their prices. We will. Here\'s exactly what a new roof costs in Stony Plain and Spruce Grove — broken down by material, size, and scope.',
    metaDescription: 'Real 2026 roof replacement costs in Stony Plain & Spruce Grove from a local contractor. Material pricing, pitch premiums, and what your quote includes.',
    tags: ['Roofing Cost', 'Stony Plain', 'Spruce Grove', 'Roof Replacement', 'Pricing'],
    relatedService: 'roof-replacement',
    featured: false,
    sections: [
      {
        type: 'intro',
        content: `The number one question we get from Stony Plain and Spruce Grove homeowners is: "How much is this going to cost me?"

It is a fair question — and a frustrating one to research online. You type "roof replacement cost Alberta" and you get articles full of national averages, vague ranges like "$5,000 to $30,000," and disclaimers that prices vary wildly. None of that helps you actually budget for your home.

Here is what you need to know upfront: **we are going to give you real numbers.** Not national averages. Not calculator estimates from a website that has never seen an Alberta winter. Actual cost ranges from a contractor who has been doing this in Parkland County since 2003 — over 1,500 roofs completed, IKO Preferred Contractor status, and a BBB A+ rating that we have maintained for more than two decades.

We believe you deserve to know what you are spending before you ever pick up the phone. That is how we would want to be treated — so that is how we do business.`,
      },
      {
        type: 'content',
        title: 'What Determines Roof Replacement Cost in Alberta?',
        content: `Before we get to the numbers, it is important to understand the factors that move the price up or down. No two roofs are identical, and every one of these variables affects your final quote:

**Roof Size (The Biggest Factor)**
Roofing is priced by the square foot of roof surface — not your home's footprint. A 1,500 sq ft bungalow might have 1,800-2,200 sq ft of actual roof surface once you account for the slope. Larger roof = larger material and labour cost, proportionally.

**Pitch and Slope (The Labour Premium)**
A low-slope roof (3/12 or less) is fast and safe to work on. A steep-slope roof (8/12 or more) requires safety equipment, slower movement, and more crew time. Expect a labour premium of 15-30% for steep-pitch roofs. Many Stony Plain homes built in the 1990s and early 2000s have steeper 8/12 to 12/12 pitches — something we always assess during our free inspection.

**Materials Chosen**
This is the single largest variable in your quote. Standard asphalt shingles and standing seam metal panels are worlds apart in cost — but also in lifespan. We cover material costs in detail in the comparison below.

**Number of Tear-Off Layers**
The Alberta Building Code allows a maximum of two layers of shingles on a residential roof. If your existing roof already has two layers, both must be stripped before new shingles can be installed. Tear-off and disposal adds $1.50-$2.50 per sq ft to the project cost.

**Decking Condition**
Once the old shingles come off, we inspect the plywood or OSB decking underneath. Damaged, rotted, or delaminated decking must be replaced before new material goes on. This is non-negotiable — the best shingles in the world will fail if the deck underneath is compromised.

**Time of Year**
Spring and summer are our busiest seasons in Parkland County. Demand is higher, scheduling fills up faster, and material delivery lead times are slightly longer. If you can plan your replacement for late fall (September-October), you may find more flexibility. That said, shingle adhesive strips require temperatures consistently above 10°C to seal properly — we do not rush jobs in marginal weather.

For a full breakdown of material options and their performance in Alberta's climate, see our <a href="/services/roof-replacement">roof replacement service page</a>.`,
      },
      {
        type: 'comparison-chart',
        title: 'Cost Per Square Foot Installed (Labour + Materials)',
        data: [
          {
            material: 'Asphalt Shingles (Standard)',
            costPerSqFt: '$5.50 - $8.00',
            note: 'Most common choice',
            score: 70,
            color: '#d95c26',
          },
          {
            material: 'Architectural IKO Shingles',
            costPerSqFt: '$7.00 - $11.00',
            note: 'Best value — what we recommend',
            score: 85,
            color: '#4a90d9',
          },
          {
            material: 'Steel Shingles',
            costPerSqFt: '$10.00 - $15.00',
            note: '40-50 year lifespan',
            score: 88,
            color: '#2ecc71',
          },
          {
            material: 'Standing Seam Metal',
            costPerSqFt: '$14.00 - $20.00',
            note: 'Forever roof for acreages',
            score: 95,
            color: '#9b59b6',
          },
        ],
      },
      {
        type: 'cost-calculator',
        title: 'Cost vs. Lifespan: The Real Math',
        description: 'Real Project Examples From Our Work in Parkland County',
        data: [
          { material: '1,500 sq ft — Asphalt (standard)', upfront: 12500, lifespan: 25, annual: 500 },
          { material: '1,800 sq ft — IKO Architectural', upfront: 17000, lifespan: 30, annual: 567 },
          { material: '2,200 sq ft — Steel Shingles', upfront: 27500, lifespan: 45, annual: 611 },
          { material: '2,500 sq ft — Standing Seam Metal', upfront: 42000, lifespan: 55, annual: 764 },
        ],
      },
      {
        type: 'content',
        title: 'Roof Repair vs. Full Replacement: How to Decide',
        content: `One of the most common calls we get goes something like this: "I have a leak, but I am hoping I just need a repair, not a full replacement." We get it. A repair is always the easier answer. Here is how we help homeowners make that call honestly.

**When Roof Repair Makes Sense**

A repair is the right call when damage is isolated and the rest of the roof is sound. Specifically:

- **Damage covers less than 30% of the roof surface.** If one section took hail damage but the remaining three-quarters of the roof are in good shape, a targeted repair is cost-effective.
- **The roof is under 15 years old.** A younger asphalt roof with localized damage still has significant life in the unaffected sections. Full replacement at this stage would mean discarding perfectly good material.
- **Budget constraints are a reality right now.** A well-executed repair can buy you 5-10 more years on a roof that is otherwise aging well. This is a legitimate choice — not a shortcut — as long as you understand what you are deferring.
- **The issue is flashing, boots, or a single failed component.** A cracked pipe boot or lifted flashing can be replaced for a few hundred dollars. This is not a roofing failure — it is a maintenance item.

**When Full Replacement Is the Smarter Investment**

Some situations make repair a false economy. These are the cases where we recommend replacement, even when it is not what the homeowner wants to hear:

- **Multiple leak sources across the roof.** If water is finding three different paths in, the underlying problem is the roof system — not individual shingles. Patching one area while the others fail is a cycle of spending with no endpoint.
- **The roof is over 20 years old.** Asphalt shingle roofs in Alberta typically have a 20-25 year functional lifespan. At this stage, any repair is buying months, not years. The material is simply exhausted.
- **You are selling the home.** Buyers and home inspectors are thorough. A repaired roof on a 22-year-old home raises questions and can complicate your sale. A new roof, on the other hand, is a selling point — and it adds to your home's appraised value.
- **You have had the same section repaired more than once.** Recurring repairs in the same area mean the underlying cause has not been addressed. At some point, replacement is cheaper than the next five repair calls.

For situations where a targeted repair is the right call, our <a href="/services/roof-repair">roof repair team</a> can handle everything from single-shingle replacements to full flashing overhauls.`,
      },
      {
        type: 'content',
        title: "What's Included in a Kayan Quote?",
        content: `We have heard the horror stories — contractors who give a low quote and then add charges mid-project for "unexpected" work. That is not how we operate. Here is exactly what our written quotes include, line by line, so you know what you are getting before a single nail is pulled.

**Tear-Off and Disposal**
All existing shingles, underlayment, and if necessary, the second layer of old material are stripped, loaded, and hauled away. This is not a "we'll figure it out" item — our quotes specify the number of layers being removed and the disposal method.

**Ice and Water Shield**
A self-adhering waterproof membrane is installed in the valleys and along the entire eave edge (minimum 2 metres up from the exterior wall line, per Alberta Building Code requirements). This is your last line of defence against ice dam water intrusion. Some contractors skip this to save cost — we include it on every job.

**New Decking Where Needed**
After tear-off, our crew inspects every square foot of your plywood or OSB deck. Any section that is rotted, delaminated, or structurally compromised is replaced before new material goes on. We document damaged sections with photos and include the replacement cost in the quote.

**Drip Edge and Metal Flashing**
New aluminium drip edge is installed at all eaves and rakes. Step flashing, counter flashing, and valley flashing are replaced as part of every full replacement — not patched over the old.

**Ventilation**
Proper attic ventilation is required by the Alberta Building Code and dramatically extends the life of your new roof. Our quotes include inspection and upgrade of ridge vents, soffit vents, and roof-mounted vents where needed. An underventilated attic voids most shingle manufacturer warranties.

**Shingles and Underlayment**
The full roofing system — synthetic underlayment plus the shingle product you have selected. As an IKO Preferred Contractor, we install IKO products as our standard recommendation. IKO's Cambridge and Dynasty lines are engineered specifically for Canadian climates and carry some of the strongest warranties in the industry.

**Cleanup**
Our crews use magnetic sweepers on all paved and gravel surfaces around your home. Every shingle, piece of flashing, and nail is collected and removed. We do not leave your yard looking like a job site.

**Our Warranty**
Every Kayan installation comes with a **15-year workmanship warranty** covering labour defects. This is in addition to the IKO manufacturer warranty — typically 30+ years on architectural shingles and lifetime on select product lines through the IKO Preferred Contractor program. You receive both warranty documents in writing at project completion.

For a detailed look at our shingling process and the IKO products we use, visit our <a href="/services/shingling">shingling service page</a>.`,
      },
      {
        type: 'content',
        title: 'Serving Stony Plain and Spruce Grove Since 2003',
        content: `We are not a national franchise or a crew from out of town chasing storm season. Kayan Contracting was founded in Stony Plain in 2003, and we have watched this region grow and change for more than two decades.

**Why local experience matters for your roof:**

Homes built in Stony Plain and Spruce Grove during the 1990s and early 2000s — the period of rapid suburban growth in Parkland County — are now hitting the 20-30 year mark. That is precisely the window when asphalt shingle roofs age out of functional life. If your home was built between 1990 and 2005 and has never had a roof replacement, the math is telling you something.

Spruce Grove's continued growth has added thousands of homes in the same vintage. The 2000s-era developments along Grove Drive, Century Road, and Jennifer Heil Way are full of roofs entering their final decade.

We know Parkland County weather in a way that only comes from years of working in it. We know that hailstorms track northeast across the county from Nisku and Leduc, hitting Spruce Grove hardest. We know that chinooks create a pressure differential that lifts ridge cap shingles on east-facing slopes. We know that the clay-heavy soil in parts of Stony Plain causes foundation movement that stresses roof framing over time. These are the things that only 22 years of local work teaches you.

We also know which roofers cut corners on this side of Edmonton — and we compete on quality, not just price. Our reviews are real, our warranty is real, and our IKO Preferred Contractor designation is audited annually.

Whether you are in a mature neighbourhood in <a href="/services/stony-plain">Stony Plain</a>, a newer development in <a href="/services/spruce-grove">Spruce Grove</a>, or on an acreage anywhere in Parkland County, you deserve a roofer who knows your street, your weather, and your home's era of construction.`,
      },
      {
        type: 'content',
        title: 'Get an Accurate Quote Before You Budget',
        content: `Here is the problem with online roofing calculators: they do not know your roof. They do not know that you have a steep 10/12 pitch on the back section, that your valley flashing is the original 1998 install, or that there is a second layer of shingles underneath that needs to come off before anything new can go on.

An accurate budget number requires eyes on your roof. That is why we offer free on-site inspections with no obligation — not as a sales tactic, but because a quote that is not based on real information is useless to both of us.

**What we check during every free inspection:**

- **Decking condition** — We check for soft spots, rot, and delamination, both by walking the roof and inspecting from the attic. Deck replacement needs are the most common "unknown" cost in a roofing project — we find them before the job starts.
- **Flashing and sealing** — Every penetration, valley, and wall junction is assessed. We note what can be reused and what needs replacement.
- **Ventilation** — Attic ventilation directly affects how long your new roof will last. Inadequate ventilation can cut shingle lifespan by 30-40% and voids manufacturer warranties. We measure your intake and exhaust ventilation against Alberta Building Code requirements.
- **Gutters and soffits** — We look at your eavestroughing system as part of the inspection. Damaged gutters or blocked soffits affect how water moves off your roof and whether ice dams form in winter.
- **Layer count** — We confirm how many shingle layers are currently on the roof. This directly affects tear-off cost.

After the inspection, you get a written quote that breaks out every line item. No surprises during the project. No "we found extra work" conversations when you are already mid-job.

Call us at <a href="tel:7809840221">(780) 984-0221</a> to schedule your inspection or book online through the form below. We typically have availability within 3-5 business days throughout Stony Plain, Spruce Grove, and Parkland County.

**A note on timing:** Spring is our booking season. If you are thinking about a roof replacement this summer, the best time to get your inspection done is now — not when you see a water stain in June.`,
      },
      {
        type: 'content',
        title: 'Frequently Asked Questions About Roof Replacement Cost',
        content: `**How much does a new roof cost in Stony Plain and Spruce Grove?**
A typical asphalt shingle roof replacement in Stony Plain or Spruce Grove costs $12,000 to $20,000 for an average home. Architectural IKO shingles run $7 to $11 per sq ft installed. Metal roofing ranges from $10 to $20 per sq ft. Exact cost depends on your roof size, pitch, material choice, and tear-off layers.

**What is included in a Kayan Contracting roof replacement quote?**
Every written quote includes tear-off and disposal, ice and water shield, new drip edge and flashing, underlayment, shingles, ventilation assessment, cleanup, and both our 15-year workmanship warranty and the IKO manufacturer warranty. No surprise add-ons mid-project.

**How long does a roof replacement take in Alberta?**
Most residential roofs in Stony Plain and Spruce Grove are completed in one to two days. Larger homes, steep pitches, or projects requiring deck replacement may take two to three days. We always give you a timeline estimate in your written quote.

**Does a new roof increase home value?**
Yes. A new roof typically adds to your home's appraised value and is a major selling point. Home inspectors flag aging or damaged roofs, which can complicate sales or reduce offers. A documented warranty-backed replacement resolves that concern entirely.

**When is the best time to replace a roof in Alberta?**
The ideal window is May through October when temperatures are consistently above 10°C — shingle adhesive strips require warmth to seal properly. We begin bookings in March and April for the spring-summer season. Booking early secures your spot before the rush.

**Do I need a permit to replace my roof in Stony Plain or Spruce Grove?**
In most cases, replacing existing shingles in kind does not require a permit in Parkland County. However, structural work, changes to ventilation systems, or full deck replacement may require a permit depending on scope. We advise you on permit requirements as part of your free inspection.
`,
      },
            {
        type: 'cta',
        title: 'Get Your Free Roof Inspection & Written Quote',
        content: 'No pressure, no obligation. We come to you, inspect everything, and give you a written quote you can actually budget with. Serving Stony Plain, Spruce Grove, and all of Parkland County.',
        buttonText: 'Book Your Free Inspection',
        buttonLink: '/#quote',
      },
    ],
  },
  {
    id: 'thermal-imaging-saves-money',
    title: 'How Thermal Imaging Saves Parkland County Homeowners Thousands',
    subtitle: 'See What Your Eyes Can\'t — The Technology Behind Our Inspections',
    publishDate: '2026-03-08',
    readTime: '7 min read',
    category: 'Technology',
    coverImage: '/images/gallery/real/project-09.jpg',
    excerpt: 'FLIR thermal cameras reveal hidden moisture, insulation gaps, and heat loss that are invisible to the naked eye. Here\'s how this technology helps Stony Plain homeowners make smarter decisions.',
    tags: ['Thermal Imaging', 'FLIR', 'Energy Efficiency', 'Stony Plain', 'Parkland County'],
    relatedService: 'roof-repair',
    featured: true,
    sections: [
      {
        type: 'intro',
        content: `Imagine being able to see through your walls and roof — to spot a leak before it causes damage, find where your heating dollars are escaping, or detect moisture that's silently rotting your home's structure.

That's exactly what FLIR thermal imaging does. And at Kayan Contracting, it's a standard part of every inspection we perform across Stony Plain, Spruce Grove, and Parkland County.`,
      },
      {
        type: 'content',
        title: 'What Is Thermal Imaging?',
        content: `Professional FLIR cameras detect infrared radiation — essentially, they create a heat map of any surface. Different colours represent different temperatures:

- **Red/Orange/Yellow** = Warm areas (well-insulated, properly sealed)
- **Blue/Purple** = Cold areas (heat loss, moisture, air infiltration)
- **Green** = Moderate temperature (transition zones)

When we scan your home, these colour patterns tell us exactly where problems are hiding. A cold blue spot on an interior wall during winter? That's heat escaping through a gap in your insulation. A warm spot on your roof during a cold day? That's where moisture is trapped and preventing proper cooling.`,
      },
      {
        type: 'thermal-comparison',
        title: 'See the Difference: Normal vs. Thermal',
        description: 'Swipe between the normal photo and FLIR thermal image to see what\'s invisible to the naked eye.',
        normalImage: '/images/gallery/real/project-30.jpg',
        thermalImage: '/images/gallery/real/project-36.jpg',
      },
      {
        type: 'savings-chart',
        title: 'Average Savings from Thermal-Guided Repairs',
        description: 'Homeowners who use thermal imaging to target repairs save significantly vs. guesswork.',
        data: [
          { category: 'Heating Costs (Annual)', before: 3200, after: 2400, unit: '$' },
          { category: 'Cooling Costs (Annual)', before: 1800, after: 1350, unit: '$' },
          { category: 'Avoided Water Damage', before: 8000, after: 0, unit: '$' },
          { category: 'Insurance Premium', before: 2400, after: 2100, unit: '$' },
        ],
      },
      {
        type: 'content',
        title: '5 Things We Find with Thermal Imaging',
        content: `Over 22 years and thousands of thermal scans, these are the five most common issues we discover:

**1. Missing or Settled Insulation**
Insulation settles over time, creating gaps that hemorrhage heat. Thermal imaging shows exactly where these gaps are — no guessing, no tearing open walls.

**2. Hidden Moisture Intrusion**
Water inside walls or ceilings shows up as a distinct thermal pattern long before it causes visible stains. Early detection can save $5,000-$15,000 in remediation costs.

**3. Air Leaks Around Windows & Doors**
Even "good" windows can have failed seals or poor installation. Thermal imaging reveals drafts that account for 25-30% of heating loss in most homes.

**4. Electrical Hot Spots**
Overloaded circuits and failing connections generate excess heat. We've caught potential fire hazards during routine roof inspections.

**5. HVAC Duct Leaks**
Ductwork running through attics and crawlspaces often develops leaks. You're paying to heat your attic instead of your living space.`,
        image: '/images/gallery/real/project-25.jpg',
      },
      {
        type: 'content',
        title: 'Real Case Study: Spruce Grove Home',
        content: `Last winter, a Spruce Grove homeowner called us about rising heating bills. Their furnace was running constantly, but the upstairs bedrooms were always cold.

**What they expected:** A roof problem.

**What thermal imaging revealed:** The knee walls in their 1.5-storey home had almost no insulation — the heat was escaping directly into the attic space behind the walls. The roof was actually fine.

**The fix:** Insulation retrofit in the knee wall cavities — a $2,500 repair instead of a $15,000 roof replacement.

**The result:** 25% reduction in monthly heating costs and comfortable bedrooms for the first time in years.

This is why we inspect with thermal imaging. The problem is rarely where you think it is.`,
        image: '/images/gallery/real/project-18.jpg',
      },
      {
        type: 'content',
        title: 'When Should You Get a Thermal Inspection?',
        content: `Thermal imaging is most effective during Alberta's heating season (October-March) when the temperature difference between inside and outside is greatest. The bigger the temperature gap, the more clearly problems show up.

**Best times to scan:**
- During cold snaps (-15°C or colder)
- After a rain or snowfall (moisture shows up clearly)
- Early morning before the sun warms exterior surfaces

**Every Kayan Contracting inspection includes thermal imaging at no extra cost.** It's not an upsell — it's how we do business. Because guessing costs money, and seeing saves it.`,
      },
      {
        type: 'cta',
        title: 'Want to See What\'s Hiding in Your Home?',
        content: 'Book a free inspection with FLIR thermal imaging. We\'ll show you exactly where your home is losing energy and money — with photos you can keep.',
        buttonText: 'Book Thermal Inspection',
        buttonLink: '/#quote',
      },
    ],
  },
]
