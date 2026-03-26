# Kayan Contracting Ltd. — SEO & Content Strategy Report

**Prepared for:** Eric (Kayan Agency) & Bryan Dewey (Owner)
**Date:** March 25, 2026
**Subject:** Comprehensive SEO, content, and growth strategy for kayancontracting.ca

---

## Table of Contents

1. [Current Site Audit](#1-current-site-audit)
2. [Technical SEO — Critical Fixes](#2-technical-seo--critical-fixes)
3. [Target Keywords](#3-target-keywords)
4. [Blog Content Strategy — 25 Article Ideas](#4-blog-content-strategy--25-article-ideas)
5. [Social Media Strategy](#5-social-media-strategy)
6. [Local SEO Strategy](#6-local-seo-strategy)
7. [Lead Magnet Ideas (Hormozi Frameworks)](#7-lead-magnet-ideas-hormozi-frameworks)
8. [Hormozi Framework Applications](#8-hormozi-framework-applications)
9. [Content Calendar](#9-content-calendar)
10. [Positioning Strategy — Becoming THE Roofer](#10-positioning-strategy--becoming-the-roofer)
11. [Implementation Priority Roadmap](#11-implementation-priority-roadmap)

---

## 1. Current Site Audit

### What the Site Does Well

**Strong foundation of trust signals.** The site has excellent trust-building elements baked into every page: 22 years in business, 1,500+ homeowners served, IKO Preferred Contractor status, BBB A+ rating, 10-year workmanship warranty, and WCB coverage. These are displayed prominently in the hero, stats bar, Why Kayan section, and footer.

**Comprehensive service pages.** Seven dedicated service pages (roof replacement, shingling, metal products, steel siding, roof repair, gutters, soffits & fascia) each with unique meta titles, meta descriptions, problem/solution framing, benefits, gallery photos, testimonials, FAQs, and quote forms. This is far better than 90% of roofing contractor websites.

**Real photography, not stock.** The gallery has 100+ real project photos across residential, commercial, metal, steel siding, thermal imaging, exteriors, and repairs. This is a massive competitive advantage — most roofers use stock photos.

**FLIR thermal imaging as a differentiator.** The ThermalImaging section and dedicated blog post position Kayan as technologically advanced. Most competitors do not offer or market this service. It is a unique selling point.

**Schema markup implemented.** LocalBusiness and FAQPage schema are already on the site, which is ahead of most competitors.

**Interactive roof calculator / quote form.** Multi-step quote form with service selection, property type, timeline, and contact info. Good conversion mechanism.

**Blog with rich content.** Three detailed blog posts with comparison charts, cost calculators, severity charts, thermal comparisons, and strong CTAs. The content quality is high — not thin filler articles.

**Testimonials that address objections.** Eight detailed testimonials that specifically address buyer concerns: insurance claims, honesty (told them they did NOT need a new roof), speed of emergency response, transparent pricing, cleanup quality, warranty service, and comfort for single homeowners. These are not generic "great job!" reviews.

### What is Missing or Needs Improvement

**CRITICAL: The site is a Vite React SPA (Single Page Application).** This is the single biggest SEO problem. Here is why:

- Googlebot must execute JavaScript to see ANY content. While Google can render JS, it is slower, uses more crawl budget, and is less reliable than static HTML.
- Social media link previews (Facebook, LinkedIn, Twitter/X) will show blank or incorrect content because they do not execute JavaScript. The OG tags are in index.html but the dynamic page content is not in the initial HTML.
- Blog posts, service pages, and the gallery all render client-side. Search engines may not index this content properly or at all.
- There is only ONE actual HTML page (index.html). Everything else is a JS-rendered route.
- The vercel.json rewrites all paths to index.html, confirming pure SPA behavior.
- No sitemap.xml exists (or at least none is generated).
- No robots.txt is configured.

**No dedicated service area pages.** The footer lists Stony Plain, Spruce Grove, Parkland County, Edmonton, and Lac Ste. Anne County as service areas, but there are no dedicated landing pages for each city. These are essential for local SEO — "roof replacement Spruce Grove" needs its own page to rank.

**Only 3 blog posts.** The content is high quality but there is not enough volume. Competitors publishing monthly will outrank Kayan for informational keywords. Need at least 15-20 articles to establish topical authority.

**No Google Business Profile integration on the site.** No embedded Google reviews, no link to GBP, no review schema from actual Google reviews.

**Missing pages:**
- No About/Team page (Bryan's story, crew photos, company history)
- No dedicated Insurance Claims page (huge keyword opportunity)
- No Financing page
- No dedicated Contact page (form is only inline on home and service pages)
- No service area pages with location-specific content
- No sitemap.xml
- No robots.txt

**No canonical URLs set.** With SPA routing, duplicate content issues can arise.

**No image alt text optimization.** Gallery images use generic alt text or none. Each project photo should have descriptive, keyword-rich alt text.

**No internal linking strategy.** Blog posts link to services via CTA buttons, but there is no systematic cross-linking between related services, blog posts, and service areas.

**Single social presence.** Only Facebook is linked. No Instagram, Google Business Profile, or YouTube links.

**No review/testimonial schema for individual reviews.** The testimonials in the data file are not outputting AggregateRating or individual Review schema.

---

## 2. Technical SEO — Critical Fixes

### Priority 1: Convert SPA to SSG (Static Site Generation)

This is the most impactful single change. The current Vite React SPA means Google is relying on JavaScript rendering to see any page content. Options in order of recommendation:

**Option A: Migrate to Astro (Recommended)**
- Astro outputs static HTML by default with optional React islands for interactive components (calculator, gallery lightbox, animations)
- Perfect for a content-heavy site that needs SEO
- Keeps all existing React components — they just become "islands"
- Generates a sitemap automatically
- Build output is static HTML — deploys to Vercel with zero config
- Estimated effort: 2-3 days to migrate

**Option B: Add vite-plugin-ssr or vite-ssg**
- Prerenders all routes at build time to static HTML
- Less migration work but more fragile than Astro
- Still outputs to Vercel

**Option C: Add react-snap or prerender.io**
- Quick fix: prerenders routes to HTML after build
- Least effort but also least reliable
- Can break with complex animations (framer-motion)

### Priority 2: Generate sitemap.xml and robots.txt

```
# robots.txt
User-agent: *
Allow: /
Sitemap: https://kayancontracting.ca/sitemap.xml
```

Sitemap should include:
- Homepage
- All 7 service pages
- All blog posts
- Gallery page
- Future: all service area pages, about page, contact page

### Priority 3: Add Review Schema

Add AggregateRating schema using actual Google review data:

```json
{
  "@type": "AggregateRating",
  "ratingValue": "4.9",
  "reviewCount": "87",
  "bestRating": "5"
}
```

Add individual Review schema for each testimonial on the site.

### Priority 4: Add Canonical URLs

Every page needs a `<link rel="canonical" href="https://kayancontracting.ca/services/roof-replacement" />` tag to prevent duplicate content.

### Priority 5: Image Optimization

- Add descriptive alt text to all gallery images: "Standing seam metal roof installation on acreage property in Parkland County Alberta" not "project-104.jpg"
- Implement lazy loading (already partially done)
- Convert images to WebP format with AVIF fallback
- Add width/height attributes to prevent layout shift (CLS)

### Priority 6: Core Web Vitals

- The hero video (hero-video.mp4) is likely causing poor LCP (Largest Contentful Paint). Consider:
  - Serving a compressed poster image immediately
  - Lazy-loading the video after page load
  - Using a CDN for video delivery
- Framer Motion animations may block interactivity (INP). Consider reducing animation complexity on mobile.
- Google Fonts loaded from external CDN — consider self-hosting Inter and Playfair Display.

---

## 3. Target Keywords

### Primary Money Keywords (High Intent — These Drive Calls)

| Keyword | Monthly Search Volume (Est.) | Difficulty | Priority |
|---------|------------------------------|-----------|----------|
| roofing contractor Stony Plain | 50-100 | Low | 1 |
| roof replacement Stony Plain | 30-70 | Low | 1 |
| roofer Spruce Grove | 50-100 | Low-Med | 1 |
| roof repair Spruce Grove | 30-50 | Low | 1 |
| roofing Parkland County | 20-40 | Low | 1 |
| metal roofing Stony Plain | 20-30 | Low | 1 |
| steel siding Stony Plain | 10-20 | Low | 2 |
| eavestroughing Spruce Grove | 10-20 | Low | 2 |
| roof replacement Spruce Grove | 30-50 | Low-Med | 1 |
| roofing companies near me (local) | 500+ | High | 1 |
| roofer near me (local) | 1000+ | High | 1 |

### Secondary Service Keywords

| Keyword | Priority |
|---------|----------|
| shingling contractor Stony Plain AB | 2 |
| seamless eavestroughing Parkland County | 2 |
| soffits and fascia repair Spruce Grove | 2 |
| commercial roofing Stony Plain | 2 |
| standing seam metal roof Alberta | 2 |
| IKO preferred contractor Alberta | 2 |
| roof inspection Stony Plain | 1 |
| emergency roof repair Spruce Grove | 1 |
| hail damage roof repair Parkland County | 1 |
| roof insurance claim Stony Plain | 1 |

### Long-Tail Blog/Content Keywords

| Keyword | Intent | Target Content |
|---------|--------|----------------|
| how much does a roof replacement cost in Alberta | Informational | Blog post |
| best roofing materials for Alberta weather | Informational | Blog post (EXISTS) |
| signs you need a new roof | Informational | Blog post (EXISTS) |
| metal roof vs shingles Alberta | Informational | Blog post (EXISTS) |
| how long does a roof last in Alberta | Informational | Blog post |
| hail damage roof insurance claim Alberta | Informational | Blog post |
| standing seam metal roof cost Alberta | Informational | Blog post |
| how to choose a roofing contractor Alberta | Informational | Blog post |
| steel siding vs vinyl siding Alberta | Informational | Blog post |
| when to replace eavestroughing | Informational | Blog post |
| roof ventilation problems ice dams Alberta | Informational | Blog post |
| thermal imaging home inspection Alberta | Informational | Blog post (EXISTS) |
| BBB A+ roofing contractor Stony Plain | Navigational | Homepage/About |
| IKO Dynasty shingles review Alberta | Informational | Blog post |
| roof repair vs roof replacement when to choose | Informational | Blog post |

### Voice Search / AI Search Keywords (2026 Critical)

These are conversational queries that appear in Google AI Overviews, ChatGPT, and Perplexity:

- "Who is the best roofing contractor in Stony Plain?"
- "Which roofer in Spruce Grove handles insurance claims?"
- "How much does it cost to replace a roof in Parkland County?"
- "What is the best roofing material for Alberta hail?"
- "Can I get a metal roof in Stony Plain?"
- "Who does emergency roof repair in Spruce Grove?"

To rank for these, you need comprehensive FAQ content with direct answers in the first paragraph of each page.

---

## 4. Blog Content Strategy — 25 Article Ideas

Each title is optimized for a target keyword cluster. Articles should be 1,200-2,500 words with local references to Stony Plain, Spruce Grove, and Parkland County.

### Cost & Pricing (Highest Search Volume)

1. **"How Much Does a Roof Replacement Cost in Stony Plain? (2026 Pricing Guide)"**
   Target: roof replacement cost Stony Plain, how much new roof Alberta
   Format: Price ranges by material, square footage calculator, factors that affect cost

2. **"Standing Seam Metal Roof Cost in Alberta: Is It Worth the Investment?"**
   Target: metal roof cost Alberta, standing seam metal roof price
   Format: Cost comparison, ROI calculation, real Kayan project examples

3. **"Steel Siding Cost vs. Vinyl Siding: What Parkland County Homeowners Need to Know"**
   Target: steel siding cost, vinyl vs steel siding Alberta
   Format: Head-to-head comparison with Alberta-specific climate considerations

4. **"How to Finance a New Roof in Alberta: Payment Options for Homeowners"**
   Target: roof financing Alberta, how to pay for new roof
   Format: Insurance, financing, payment plans, government programs

### Insurance & Storm Damage (High Intent — People Need Help NOW)

5. **"Hail Damage Roof Insurance Claims in Alberta: A Step-by-Step Guide"**
   Target: hail damage roof insurance claim Alberta, roof insurance claim process
   Format: Complete walkthrough with photos of hail damage, adjuster tips

6. **"What to Do After a Hailstorm Hits Your Stony Plain Home"**
   Target: hailstorm roof damage Stony Plain, what to do after hail
   Format: Emergency checklist, when to call a roofer, insurance timeline

7. **"Does Home Insurance Cover Roof Replacement in Alberta? What You Need to Know"**
   Target: does insurance cover roof replacement Alberta
   Format: What is covered, what is not, how to document damage

### Material & Product Guides

8. **"IKO Dynasty Shingles Review: Why Alberta Roofers Recommend Them"**
   Target: IKO Dynasty shingles review, best shingles for Alberta
   Format: Product deep-dive, Class 4 impact rating explanation, Kayan installation photos

9. **"Board and Batten Steel Siding: The Modern Look That Lasts a Lifetime"**
   Target: board and batten steel siding, steel siding styles
   Format: Style guide with Kayan project photos, color options, maintenance

10. **"5-Inch vs. 6-Inch Eavestroughing: Which Size Does Your Home Need?"**
    Target: 5 inch vs 6 inch eavestroughing, gutter size guide
    Format: Technical comparison, drainage capacity, when to upsize

11. **"Architectural Shingles vs. 3-Tab Shingles: Why We Only Install Architectural"**
    Target: architectural vs 3-tab shingles, best shingles
    Format: Side-by-side comparison, lifespan, warranty differences

### Seasonal & Maintenance

12. **"Spring Roof Maintenance Checklist for Parkland County Homeowners"**
    Target: spring roof maintenance, roof inspection checklist Alberta
    Format: Printable checklist, what to look for, when to call a pro

13. **"Preparing Your Roof for Alberta Winter: A Homeowner's Guide"**
    Target: winter roof preparation Alberta, ice dam prevention
    Format: Fall prep steps, ventilation check, gutter cleaning timeline

14. **"Ice Dams in Alberta: What Causes Them and How to Prevent Them"**
    Target: ice dams Alberta, how to prevent ice dams
    Format: Cause/effect explanation, ventilation solutions, thermal imaging photos

15. **"How Long Does a Roof Last in Alberta? Lifespan by Material"**
    Target: how long does roof last Alberta, roof lifespan
    Format: Material-by-material breakdown with Alberta-specific climate impact

### Decision-Making / Buyer's Journey

16. **"How to Choose a Roofing Contractor in Stony Plain: 10 Questions to Ask"**
    Target: how to choose roofer, questions to ask roofing contractor
    Format: Checklist format — positions Kayan as the answer to every question

17. **"Roof Repair vs. Roof Replacement: How to Know Which You Need"**
    Target: roof repair vs replacement, when to replace roof
    Format: Decision tree, cost comparison, Kayan's honest assessment philosophy

18. **"Why the Cheapest Roofing Quote Will Cost You More in the Long Run"**
    Target: cheap roofing quote, roofing contractor red flags
    Format: Real examples of cut corners, what transparent pricing looks like

19. **"What Does a 10-Year Workmanship Warranty Actually Cover?"**
    Target: roofing workmanship warranty, what does roof warranty cover
    Format: Kayan's warranty explained, what it covers vs. manufacturer warranty

### Technical / Educational

20. **"Roof Ventilation 101: Why Your Attic Needs to Breathe"**
    Target: roof ventilation, attic ventilation Alberta, ridge vent
    Format: How ventilation works, signs of poor ventilation, Kayan solutions

21. **"What Is FLIR Thermal Imaging and Why Do We Use It on Every Inspection?"**
    Target: thermal imaging roof inspection, FLIR inspection
    Format: Technology explainer with real thermal images from Kayan inspections

22. **"Soffit and Fascia: The Overlooked Components Protecting Your Roof's Edge"**
    Target: soffits and fascia, what do soffits do, fascia repair
    Format: Educational piece, warning signs, material options

### Location-Specific (These are critical for local SEO)

23. **"Roofing in Spruce Grove: What Local Homeowners Need to Know"**
    Target: roofing Spruce Grove, roofer Spruce Grove AB
    Format: Area-specific page with local references, projects, weather patterns

24. **"Acreage Roofing in Parkland County: Metal vs. Shingles for Rural Properties"**
    Target: acreage roofing Parkland County, rural property roofing Alberta
    Format: Specific to rural/acreage homes, larger roof considerations, metal advantages

25. **"Commercial Roofing in Stony Plain: From McDonald's to Heritage Churches"**
    Target: commercial roofing Stony Plain, commercial roofer Parkland County
    Format: Showcase commercial portfolio, different requirements from residential

---

## 5. Social Media Strategy

### Platform Priorities

1. **Facebook** (Already active) — Primary platform for Parkland County demographics (35-65 age range, homeowners)
2. **Instagram** — Before/after project photos, Stories of active jobs, Reels of time-lapses
3. **Google Business Profile Posts** — Weekly posts boost local SEO rankings
4. **YouTube** — Long-form project walkthroughs, educational content, thermal imaging videos
5. **TikTok/YouTube Shorts** — Short-form job site content for younger homeowners

### Content Pillars

**Pillar 1: Proof (40% of content)**
The single most important content category, per Hormozi's Proof Checklist. This is what converts.

- Before/after project photos (carousel format)
- Customer video testimonials (raw iPhone-style, NOT polished)
- Screenshot reviews from Google with commentary
- Time-lapse videos of full roof replacements
- "Job complete" walk-around videos with Bryan narrating
- Insurance claim success stories (with permission)
- Thermal imaging reveals — "Look what we found" posts

**Pillar 2: Education (25% of content)**
Positions Kayan as the authority and drives organic search traffic.

- "Did You Know?" quick tips about roofing
- Warning sign identification (photo + explanation)
- Material comparison posts
- Seasonal maintenance reminders
- "Ask Bryan" Q&A posts answering common questions
- Myth-busting posts ("You DON'T need to replace your whole roof for a few missing shingles")

**Pillar 3: Behind the Scenes (20% of content)**
Builds connection and trust. Shows the humans behind the brand.

- Crew at work — action shots, not posed
- Bryan on a job site explaining something
- New material deliveries ("Just got a load of IKO Dynasty in Driftwood — this color is sharp")
- Tool and equipment posts
- Truck/trailer shots
- Morning crew huddle or end-of-day cleanup
- "A day in the life of a Kayan roofer"

**Pillar 4: Community & Personality (15% of content)**
Makes Kayan a local brand, not just a contractor.

- Stony Plain / Spruce Grove community events
- Weather-related posts ("After last night's storm, if you see any of these signs, call us")
- Seasonal humor and relatable homeowner content
- Milestone celebrations (1,500th homeowner, 22 years, etc.)
- Referral shoutouts
- Supporting local businesses and events

### Post Ideas (Specific Examples)

1. Carousel: "This Spruce Grove roof had 4 layers of shingles. Yes, FOUR. Here's what we found underneath." (Proof — shocking reveal)
2. Reel: 30-second time-lapse of a full tear-off and re-shingle. Music overlay. (Proof)
3. Photo: FLIR thermal image side-by-side. "The left image looks fine. The right image shows $8,000 in hidden water damage." (Education + Proof)
4. Story: "Bryan's truck at 6am heading to a Parkland County acreage. Big metal roof going on this week." (Behind the scenes)
5. Post: Screenshot of a Google 5-star review with the text highlighted. "This is why we do what we do." (Proof)
6. Video: Bryan walking on a roof pointing out granule loss, curling shingles. "See these? This is what 20-year-old shingles look like in Alberta." (Education)
7. Carousel: Before/after of a steel siding project. First slide = old vinyl. Last slide = new board and batten steel. (Proof)
8. Post: "Spring is here. Three things you should check on your roof this weekend:" (Education + seasonal)
9. Video: Customer reaction when they see their new roof for the first time. Raw iPhone footage. (Proof — Hormozi's "Upon Delivery" ads)
10. Post: "We told this homeowner she did NOT need a new roof. Her shingles had 5-7 years left. Honesty matters." (Trust / objection handling)

---

## 6. Local SEO Strategy

### Google Business Profile Optimization

**Primary Category:** Roofing Contractor
**Secondary Categories:** Roof Repair Service, Metal Roofing Contractor, Gutter Cleaning Service, Siding Contractor

**Action Items:**
- Verify all NAP (Name, Address, Phone) data matches exactly across website, GBP, BBB, Facebook, and all directories
- Add ALL services as GBP services with descriptions
- Add service areas in GBP: Stony Plain, Spruce Grove, Parkland County, Edmonton, Lac Ste. Anne County
- Upload 50+ real project photos to GBP (categorized: exterior, interior, team, before/after)
- Post to GBP weekly (promotes, offers, updates, photos)
- Add products: "Complete Roof Replacement," "Metal Roofing Installation," "Emergency Roof Repair," etc.
- Enable messaging
- Add business description with keywords

**GBP Description (suggested):**
"Kayan Contracting Ltd. has been protecting Parkland County homes for over 22 years. As an IKO Preferred Contractor with a BBB A+ rating, we specialize in roof replacement, shingling, metal roofing, steel siding, seamless eavestroughing, soffits & fascia, and roof repair across Stony Plain, Spruce Grove, Parkland County, Edmonton, and Lac Ste. Anne County. Every inspection includes free FLIR thermal imaging. 10-year workmanship warranty on all installations. 1,500+ homeowners served. Call (780) 984-0221 for a free estimate."

### Review Strategy

**Current state:** Testimonials on website are excellent but not sourced from Google Reviews.

**Target:** 2-3 new Google reviews per month, consistently.

**Tactics:**
1. After every completed job, Bryan or the crew lead sends a text with a direct Google review link: "Hey [Name], we just finished your [project type]. If you're happy with the work, would you mind leaving us a quick Google review? It really helps other Parkland County homeowners find us. [LINK]"
2. Add a QR code to the final invoice/walkthrough sheet that links directly to the Google review page
3. Follow up 3 days after completion with a friendly text: "Hope your new [roof/siding/gutters] is treating you well! If you have a minute, we'd really appreciate a Google review: [LINK]"
4. Respond to EVERY review (positive and negative) within 24 hours. Keep responses personal, not templated.
5. Never offer incentives for reviews (violates Google policy). Simply ask.

**Review volume goals:**
- Current: Unknown (need to audit GBP)
- 6 months: 40+ total reviews
- 12 months: 70+ total reviews
- Jayson Global (competitor) claims 200+ 5-star reviews — that is the target to beat

### Citation Building

Ensure Kayan Contracting is listed with consistent NAP on:
- Google Business Profile
- BBB (already A+ rated)
- Yelp Canada
- Yellow Pages Canada
- TrustedPros
- HomeStars
- Facebook Business
- Apple Maps
- Bing Places
- 411.ca
- Canada411
- Houzz
- Best of Stony Plain (local directories)
- Spruce Grove Chamber of Commerce (if applicable)
- Parkland County business directory

### Service Area Pages (Create These)

Create dedicated pages for each service area, each with unique content:

1. **/areas/stony-plain** — "Roofing Contractor in Stony Plain, AB"
2. **/areas/spruce-grove** — "Roofing Services in Spruce Grove, AB"
3. **/areas/parkland-county** — "Roofing & Exterior Contracting in Parkland County"
4. **/areas/edmonton** — "Edmonton Roofing Services | Kayan Contracting"
5. **/areas/lac-ste-anne-county** — "Roofing in Lac Ste. Anne County | Kayan Contracting"

Each page should include:
- H1 with city name + service
- 300-500 words of location-specific content (mention local landmarks, neighborhoods, weather patterns)
- Embedded Google Map centered on the area
- Testimonials from customers in that area
- Gallery photos from projects in that area
- Service list with links to full service pages
- Quote form

---

## 7. Lead Magnet Ideas (Hormozi Frameworks)

Based on Hormozi's $100M Offers and Lead Magnet frameworks, here are lead magnets specifically designed for a roofing/contracting business:

### Lead Magnet 1: "The Parkland County Roof Report Card" (FREE PDF)

**What it is:** A downloadable checklist homeowners can use to self-assess their roof's condition. 15-20 checkpoints with photos showing what each problem looks like.

**Why it works:** Provides genuine value. Most people who score poorly on the checklist will call for a professional inspection. It pre-qualifies leads — anyone who downloads this is already thinking about their roof.

**Capture mechanism:** Landing page with email/phone capture. Deliver via email. Follow up with a "How did your roof score?" call 3 days later.

**Hormozi framework:** This is a "free assessment" lead magnet that demonstrates expertise before asking for anything. The checklist itself IS the proof that Kayan knows what to look for.

### Lead Magnet 2: "Alberta Roof Replacement Cost Calculator" (Interactive Tool)

**What it is:** An online calculator (already partially built as RoofCalculator.jsx) that gives a rough cost estimate based on roof size, pitch, material choice, and location.

**Why it works:** Cost is the #1 search query for roofing. This tool answers the question while capturing contact info. "Enter your email to get your personalized estimate sent to you."

**Hormozi framework:** Gives the prospect what they want (a price range) while capturing their info and pre-qualifying them for a real quote.

### Lead Magnet 3: "Before You Sign: 7 Things Your Roofing Contractor Won't Tell You" (Video Series or PDF)

**What it is:** Short video series or PDF guide exposing industry shortcuts, red flags, and what to demand in a roofing quote.

**Why it works:** Positions Kayan as the honest contractor in a sea of shady operators. Each "thing they won't tell you" maps directly to something Kayan does right (deck inspection, proper ventilation, 10-year warranty, etc.).

**Hormozi framework:** This is the "education-based" lead magnet. Educate the customer so thoroughly that the only logical conclusion is to hire the company that taught them.

### Lead Magnet 4: "Your Free FLIR Thermal Roof Scan" (Service-Based Lead Magnet)

**What it is:** Free FLIR thermal imaging inspection for any homeowner in the service area. Not a free roof replacement estimate — a free TECHNOLOGY DEMONSTRATION.

**Why it works:** This is Hormozi's most powerful framework in action: "Get the result before they buy." The thermal scan shows the homeowner EXACTLY what is happening with their roof — moisture, heat loss, insulation gaps. After seeing those images, selling becomes unnecessary. The proof sells itself.

**Capture mechanism:** Dedicated landing page. Book online or call. "See What Your Eyes Can't — Free FLIR Thermal Scan for Parkland County Homeowners."

**Hormozi framework:** The live demonstration. In-person. Show > Tell. The prospect gets the result before they pay. This is the nuclear weapon of proof.

### Lead Magnet 5: "Hail Season Prep Kit" (Seasonal Campaign — Spring/Summer)

**What it is:** A one-page PDF + email sequence about protecting your home before Alberta's hail season. Includes what to check, what insurance covers, and how to document pre-existing conditions.

**Why it works:** Seasonal urgency. Every Alberta homeowner worries about hail. Positions Kayan as proactive, not reactive.

**Hormozi framework:** Urgency + education. Send this before storm season. The leads you capture now become the customers you serve when hail hits.

---

## 8. Hormozi Framework Applications

### The Proof Machine (from $100M Proof Checklist)

Hormozi's #1 finding: 80% of winning ads were about PROOF, not offers or education. "Your promise is not a differentiator. Your proof is."

**Application to Kayan:**

Kayan has 22 years and 1,500+ projects of proof that is NOT being captured or deployed. This is a goldmine sitting on the ground.

**Immediate Actions:**

1. **Capture "Upon Delivery" reactions.** After every completed project, the crew lead pulls out a phone and records the homeowner's reaction when they first see their new roof/siding/gutters. Raw iPhone video. No editing. These become the most compelling ads and social posts possible. (Hormozi: "Raw > Processed" and "Show > Tell")

2. **Build a proof wall on the website.** Create a /reviews or /results page with:
   - Every Google review (screenshot format)
   - Video testimonials
   - Before/after photo pairs
   - Insurance claim success stories with dollar amounts
   - A counter: "1,537 homeowners served and counting"
   - CTA every 3-5 testimonials

3. **Use the 6-point testimonial script for every video:** (Directly from Hormozi's Marketing Machine)
   - What was your situation before? (Internal struggle)
   - What were the objective conditions? (External struggle: leaking, old roof, high bills)
   - What were your concerns about hiring a roofer? (Skepticism)
   - What made you choose Kayan? (Overcome)
   - What are the measurable results? (External victory: new roof, insurance covered, energy savings)
   - What is the best thing about the experience? (Internal victory: peace of mind, pride in home)

4. **Match proof to demographics.** (Hormozi: "Identical to Them > Opposite of Them")
   - Capture testimonials from: young families, retirees, acreage owners, single homeowners, commercial property owners
   - Each ad/post should feature someone who LOOKS like the target audience

5. **Numbers, numbers, numbers.** (Hormozi: "Proof With Numbers > Proof Without Numbers")
   - "$0 out of pocket — insurance covered 100%"
   - "Completed in 2 days"
   - "25% reduction in heating costs after our ventilation fix"
   - "50+ year lifespan on standing seam metal"
   - Track and publish: average project completion time, % of insurance claims fully approved, customer satisfaction score

### Pricing Strategy (from $100M Pricing Playbook)

Hormozi proved that doubling price (with commensurate value) 6x's profit, while doubling customers only 3.5x's profit. "If you're wondering where to focus first, focus on pricing."

**Application to Kayan:**

Kayan is already NOT the cheapest (testimonial: "wasn't the cheapest, but most transparent"). This is correct positioning. Double down on it.

1. **Never compete on price. Compete on transparency and value.** The quote should be the most detailed, line-by-line breakdown the homeowner has ever seen. This is what testimonial #5 (Tom & Linda Baxter) already says — use this exact positioning.

2. **Create a Premium Tier.** (This feeds into Fast Cash Plays)
   - "Priority Service" — guaranteed start date within 2 weeks
   - Includes FLIR post-installation verification scan
   - Extended 15-year workmanship warranty
   - Priority emergency response
   - Price: 20-30% above standard

3. **Bundle services for higher ticket.** Roof + gutters + soffits & fascia = "Complete Exterior Package" at a package price that is 10% less than individual services but a higher total ticket.

4. **Annual "Roof Health Plan"** — $199/year for annual inspection with FLIR thermal scan, gutter cleaning, minor repair credit, and priority scheduling. This creates recurring revenue and a customer list for upsells.

### Fast Cash Plays (from $100M Fast Cash Playbook)

Run once per quarter to existing and past customers. These are high-margin, limited-availability offers.

**Fast Cash Play 1: "Pre-Season Priority Booking" (Run in February)**
- Offer: Book your spring/summer roof replacement before April 1 and lock in 2025 pricing + free gutter inspection + priority scheduling
- Price: Standard pricing but prepaid deposit locks the deal
- Cap: First 10 homeowners
- Why it works: Fills the spring pipeline before competitors. Scarcity + urgency.

**Fast Cash Play 2: "Complete Exterior Package" (Run in May)**
- Offer: Roof + siding + gutters + soffits & fascia done in one project
- Premium pricing with convenience and "one crew, one project, one warranty"
- Bonus 1: Free FLIR thermal verification post-installation
- Bonus 2: Extended 15-year warranty
- Bonus 3: Bryan's personal cell for direct access during the project
- Cap: 5 packages
- Price: $35,000-$50,000+

**Fast Cash Play 3: "Hail Season Shield" (Run Post-Storm — Reactive)**
- Offer: Priority storm damage assessment within 24 hours + full insurance claim documentation + emergency tarping included
- Not a discount — a SPEED and SERVICE offer
- Text to past customers: "If your home was affected, you're first in line. Reply YES."

**Fast Cash Play 4: "Annual Roof Health Plan" (Run in September)**
- Offer: $199/year subscription for annual inspection, thermal scan, gutter check, minor repair credit
- Sell to ALL past customers via email/text sequence (Hormozi's 7-day sequence)
- Target: 10% of past customer list = 150 customers x $199 = $29,850/year recurring revenue

### Lead Nurture (from $100M Lead Nurture Playbook)

Hormozi's four pillars: Availability, Speed to Contact, Personalization, Volume.

**Application to Kayan:**

1. **Speed to contact:** When a quote form is submitted, Bryan (or whoever manages leads) must respond within 15 minutes during business hours. Not 2 hours. Not next day. 15 minutes. "The first roofer to call back gets the job" is the literal reality in this industry.

2. **Availability:** Add Saturday morning availability for inspections (already listed 9am-3pm — good). Consider adding evening phone consultations for people who work during the day.

3. **Follow-up sequence for quotes given but not signed:**
   - Day 1: Quote delivered (in person or email)
   - Day 2: Text: "Hey [Name], just wanted to make sure you got our quote. Any questions at all?"
   - Day 5: Email with a relevant blog post: "While you're deciding, here's our guide to [their specific service]"
   - Day 10: Call: "Hey [Name], Bryan from Kayan. Just checking in — no pressure, just want to make sure you have everything you need."
   - Day 20: Text: "Hey [Name], we're filling up our [month] schedule. If you'd like to lock in a start date, let me know."
   - Day 30: Final email: "Your quote is still valid. We'd love to work with you. Let us know if anything has changed."

4. **Volume:** Most contractors give up after one follow-up. Kayan should follow up 5+ times across text, email, and phone. This alone will close 20-40% more quotes.

### Hooks (from $100M Hooks Playbook)

Adapted for roofing, using Hormozi's format categories:

**Questions:**
- "Would you rather fix your roof NOW for $12,000 or LATER for $25,000?"
- "How much is your roof costing you in heating bills right now?"
- "Can your roof survive another Alberta hailstorm?"

**Conditions:**
- "If you own a home in Parkland County, you need to see this."
- "If your roof is over 15 years old, stop scrolling."
- "If you got a roofing quote that seemed too good to be true, read this."

**Statements:**
- "We told this homeowner she did NOT need a new roof. Here's why."
- "This is what we found under 4 layers of shingles."
- "FLIR thermal cameras don't lie. Here's what your roof is hiding."

**Lists:**
- "7 warning signs your Stony Plain roof needs replacement (most people miss #4)"
- "3 things your roofing contractor won't tell you"
- "5 reasons metal roofing is taking over Parkland County"

**Narratives:**
- "A Spruce Grove homeowner called us about rising heating bills. What our thermal camera found shocked us both."
- "After the July hailstorm, this family had 3 roofers give them quotes. Here's why they chose us."

---

## 9. Content Calendar

### Weekly Cadence

| Day | Platform | Content Type |
|-----|----------|-------------|
| Monday | Facebook + Instagram | Project spotlight (before/after or completed job) |
| Tuesday | GBP Post | Service highlight or tip of the week |
| Wednesday | Facebook | Educational post or blog article share |
| Thursday | Instagram Stories/Reels | Behind the scenes or job-in-progress |
| Friday | Facebook + Instagram | Testimonial or review spotlight |

### Monthly Cadence

| Week | Blog | Social Focus |
|------|------|-------------|
| Week 1 | Publish new blog article | Promote blog article across all channels |
| Week 2 | — | Project showcase week (3-4 recent completions) |
| Week 3 | — | Educational content week (tips, guides, myth-busting) |
| Week 4 | — | Community + testimonial week |

### Quarterly Cadence

| Quarter | Focus | Fast Cash Play | Blog Articles |
|---------|-------|---------------|--------------|
| Q1 (Jan-Mar) | Pre-season pipeline | Pre-Season Priority Booking | 3 articles: cost guides, material guides |
| Q2 (Apr-Jun) | Peak season | Complete Exterior Package | 3 articles: seasonal, insurance, decision-making |
| Q3 (Jul-Sep) | Storm season + metal push | Hail Season Shield (reactive) | 3 articles: storm damage, metal roofing, ventilation |
| Q4 (Oct-Dec) | Maintenance + recurring | Annual Roof Health Plan | 3 articles: winter prep, thermal imaging, maintenance |

### Annual Content Goals

- 12 new blog articles (minimum) — aiming for 1 per month
- 200+ social media posts across all platforms
- 24+ Google reviews (2+ per month)
- 4 Fast Cash Plays
- 48+ GBP posts (weekly)
- 10+ video testimonials captured
- 20+ "upon delivery" reaction videos captured

---

## 10. Positioning Strategy — Becoming THE Roofer

### Current Competitive Landscape

**Jayson Global Roofing** — 35 years in business, 200+ 5-star reviews, aggressive SEO with dedicated city pages (Stony Plain, Spruce Grove). They are currently the strongest digital competitor.

**Hiebert Roofing** — Owner-operated, serves same area, focuses on residential. Less digital presence.

**Renoteck Roofing** — Strong in metal roofing, Spruce Grove presence.

**Roberts Roofing** — Hail damage specialist.

### Kayan's Unfair Advantages (Leverage These)

1. **FLIR Thermal Imaging** — No competitor markets this. This is Kayan's "blue ocean" differentiator. Every ad, every post, every page should mention it. Make it synonymous with the brand.

2. **Commercial + Residential portfolio** — McDonald's, No Frills, heritage churches + residential acreages. This breadth of capability is rare for a local contractor.

3. **22 years + 1,500 homeowners** — This is massive social proof. But it needs to be backed by Google reviews at volume.

4. **IKO Preferred Contractor** — This is a certification competitors may not have. Lean into it for warranty differentiation.

5. **Bryan as the face** — Owner-operated businesses beat faceless corporations in local markets. Bryan should be in content — on roofs, in thermal images, explaining things.

### The Positioning Statement

**For homeowners in Stony Plain, Spruce Grove, and Parkland County, Kayan Contracting is the only roofing contractor that includes FLIR thermal imaging on every inspection, has served 1,500+ homeowners over 22 years, and backs every job with a 10-year written workmanship warranty — because we believe you shouldn't have to choose between honesty and quality.**

### How to Make This Stick

1. **Own the "see what others miss" angle.** Every piece of marketing should reinforce that Kayan finds problems other roofers overlook — because they have the technology and 22 years of experience to do so.

2. **Be the honest roofer.** The Janet Olson testimonial (told her she did NOT need a new roof) is the single most powerful positioning story. Use it everywhere. Honesty is Kayan's brand.

3. **Outproduce competitors on proof.** Per Hormozi: "Anyone can copy an advertising claim, but no one can produce the exact same results to prove it." Jayson Global has 200+ reviews. Kayan needs to match and exceed this while also producing video testimonials, before/after galleries, and thermal imaging proof that competitors simply cannot replicate.

4. **Own every keyword with city + service.** Create service area pages, blog posts, and GBP posts that combine every permutation of: [service] + [city]. "Roof replacement Spruce Grove" should lead to Kayan.

5. **Build the "Marketing Machine."** (From Hormozi's Marketing Machine) Install these systems:
   - Every completed job → text customer for Google review
   - Every completed job → take before/after photos
   - Every completed job → attempt to capture video testimonial
   - Every week → screenshot best Google reviews for social media
   - Every quarter → Fast Cash Play to customer list
   - Every month → new blog article
   - Every week → GBP post

---

## 11. Implementation Priority Roadmap

### Phase 1: Technical Foundation (Weeks 1-4)

- [ ] Migrate from Vite SPA to Astro SSG (or add prerendering)
- [ ] Generate sitemap.xml and robots.txt
- [ ] Add canonical URLs to all pages
- [ ] Optimize image alt text across all gallery photos
- [ ] Add Review schema with AggregateRating
- [ ] Self-host Google Fonts
- [ ] Optimize hero video loading

### Phase 2: Content Expansion (Weeks 2-8)

- [ ] Create 5 service area pages (Stony Plain, Spruce Grove, Parkland County, Edmonton, Lac Ste. Anne)
- [ ] Create About/Team page with Bryan's story
- [ ] Create dedicated Insurance Claims page
- [ ] Create Contact page
- [ ] Write and publish 4 new blog articles (start with the cost/pricing articles — highest search volume)
- [ ] Build a /reviews proof wall page

### Phase 3: Local SEO (Weeks 1-6, Ongoing)

- [ ] Fully optimize Google Business Profile (categories, services, photos, description)
- [ ] Build citations on 15+ directories
- [ ] Implement review request system (text after every job)
- [ ] Begin weekly GBP posts
- [ ] Verify NAP consistency across all listings

### Phase 4: Proof Machine (Ongoing)

- [ ] Start capturing "upon delivery" reaction videos
- [ ] Begin using 6-point testimonial script
- [ ] Screenshot every Google review for social media use
- [ ] Build before/after photo pairs for every project
- [ ] Track numerical results (project times, insurance approval rates, energy savings)

### Phase 5: Social Media Launch (Weeks 4-8, Ongoing)

- [ ] Set up Instagram business account
- [ ] Create YouTube channel
- [ ] Begin weekly posting cadence (5x/week across platforms)
- [ ] Develop first 20 social media posts using content pillars above

### Phase 6: Lead Magnets & Fast Cash (Months 2-3)

- [ ] Build "Parkland County Roof Report Card" PDF
- [ ] Enhance the online roof calculator with email capture
- [ ] Plan and execute first Fast Cash Play
- [ ] Set up lead nurture follow-up sequence for unconverted quotes

---

## Summary

The Kayan Contracting website is already well-built with excellent content, real photography, and strong trust signals. The three biggest opportunities, in order of impact:

1. **Fix the SPA problem.** Convert to SSG so Google can actually index the site. This alone could double organic traffic within 6 months.

2. **Build the proof machine.** Kayan has 22 years and 1,500+ projects of untapped proof. Systematically capture testimonials, reviews, before/after photos, and thermal imaging reveals. Per Hormozi: "Everyone can make the same promise, but no one can have the same proof."

3. **Own local SEO.** Service area pages, Google Business Profile optimization, consistent reviews, and citation building will put Kayan in the Map Pack for every "[service] + [city]" search in Parkland County.

The competitors are beatable. Jayson Global has more reviews but less unique differentiation. No competitor has FLIR thermal imaging as a marketing weapon. No competitor has the commercial portfolio Kayan has. The foundation is strong — now it is about volume, consistency, and systematic proof capture.

---

*This report was prepared using analysis of the kayancontracting.ca codebase, competitive research, roofing SEO keyword data, and frameworks from Alex Hormozi's $100M Playbooks (Proof Checklist, Marketing Machine, Pricing Playbook, Fast Cash Playbook, Hooks Playbook, Lead Nurture Playbook, and Goated Ads Playbook).*
