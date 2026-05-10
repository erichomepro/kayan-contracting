# Kayan Contracting — Complete SEO Audit Report

**Site:** kayancontracting.ca
**Business:** Kayan Contracting Ltd — Roofing & Exteriors
**Location:** Stony Plain, AB (serving Spruce Grove, Parkland County, St. Albert, Lac Ste. Anne, Edmonton)
**Audit Date:** 2026-03-29
**Prepared by:** AI Precision Marketing

---

## EXECUTIVE SUMMARY

Kayan Contracting has a solid foundation — 18 pages, good service page content (~2,300 words each), proper schema markup, and smart AI crawler permissions. But the site is **nearly invisible in Google** with only 2 of 18 pages indexed. The core problems are:

1. **Location pages are dangerously thin** (450-850 words vs 2,300+ on service pages)
2. **Only 4 blog posts** vs competitors with 20-50+
3. **Template bug duplicates brand name** in every title tag
4. **Zero cross-linking** between service pages and location pages
5. **Image optimization disabled** — 276 images served unoptimized

The good news: Kayan has unique competitive advantages **no competitor offers** — FLIR thermal imaging, interactive roof calculator, IKO Preferred status, and the strongest workmanship warranty in the market (15 years). These just need to be leveraged with proper SEO architecture.

**Goal:** Rank #1 for "roofing contractor stony plain" and "roofing contractor spruce grove"

---

## SITE ARCHITECTURE (18 Pages)

| Type | Pages | Status |
|------|-------|--------|
| Homepage | 1 | Good |
| Service pages | 7 (roof replacement, shingling, metal, steel siding, repair, gutters, soffits/fascia) | Good content, needs cross-linking |
| Location pages | 4 (Stony Plain, Spruce Grove, Parkland County, Edmonton) | CRITICAL — thin content |
| Blog index | 1 | Good layout |
| Blog posts | 4 (materials guide, signs of replacement, spring checklist, thermal imaging) | Thin — 3 of 4 under 800 words |
| Gallery | 1 | Good |
| **MISSING** | Lac Ste. Anne location page | Need to create |
| **MISSING** | St. Albert location page | Need to create |
| **MISSING** | Hail damage / insurance claims page | Need to create |
| **MISSING** | Roof inspection service page | Need to create |

---

## CRITICAL ISSUES (Fix Immediately)

### 1. DUPLICATE BRAND NAME IN EVERY TITLE TAG
**Severity: CRITICAL — Affects ALL 18 pages**

Every title ends with "| Kayan Contracting | Kayan Contracting" — the brand is appended twice. This wastes 22 characters and looks unprofessional in Google results.

**Example (current):**
`Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting | Free Estimates | Kayan Contracting` (88 chars)

**Fix:** Remove duplicate in the title template. Should be:
`Roof Replacement Stony Plain & Spruce Grove | Kayan Contracting` (63 chars)

**Impact:** Immediate improvement in how every page appears in search results.

---

### 2. LOCATION PAGES ARE DANGEROUSLY THIN

| Location Page | Word Count | Grade | Competitor Average |
|---------------|-----------|-------|--------------------|
| /services/stony-plain | ~450 words | F | 1,500-2,000 |
| /services/parkland-county | ~450 words | F | 1,500-2,000 |
| /services/edmonton | ~550 words | F | 1,500-2,000 |
| /services/spruce-grove | ~850 words | D | 1,500-2,000 |

These are the MOST IMPORTANT pages for ranking in local search, and they're the weakest on the entire site. Google may classify them as doorway pages (thin pages with city names swapped).

**Additional problems on location pages:**
- Edmonton has **3 H1 tags** (must be exactly 1)
- Stony Plain has **2 H1 tags**
- All 4 have **zero body images** (service pages have 4-7 each)
- All 4 are **missing breadcrumbs** (service pages have them)
- All 4 are **missing FAQ schema** (service pages have it)
- None link to **sibling location pages**

**Fix:** Each location page needs 1,500-2,000 words of unique content:
- Specific neighborhoods/areas within that city
- Local building codes and permit info
- Climate challenges specific to the area
- Project photos from that location with geo-specific alt text
- Customer testimonials from that area
- Location-specific FAQ section with schema
- Links to sibling location pages ("Also serving...")
- Breadcrumb navigation matching service pages

---

### 3. ONLY 2 OF 18 PAGES INDEXED BY GOOGLE

A `site:kayancontracting.ca` search returns only 2 results (roof-repair and roof-replacement). 16 pages are invisible to Google.

**Likely causes:**
- Thin location pages may be filtered
- New pages may not have been discovered yet
- Internal linking is weak (location pages get minimal link equity)

**Fix:**
- Submit sitemap to Google Search Console
- Submit each URL individually via URL Inspection tool
- Use IndexNow API for instant discovery
- Strengthen internal linking so Google follows paths to all pages
- Expand thin pages so Google considers them worth indexing

---

### 4. IMAGE OPTIMIZATION DISABLED

In `next.config.mjs`, `images: { unoptimized: true }` turns off Next.js automatic image optimization. With 276 images in the public directory, this means:
- No WebP/AVIF conversion (25-50% larger files)
- No responsive srcsets
- No automatic lazy loading
- Significantly worse Core Web Vitals (LCP, CLS)

**Fix:** Remove `unoptimized: true` and migrate `<img>` tags to `next/image` component.

---

## HIGH PRIORITY ISSUES (Fix This Week)

### 5. ZERO CROSS-LINKING BETWEEN SERVICE AND LOCATION PAGES

Service pages don't link to location pages. Location pages link to services but not to each other. This means location pages receive minimal PageRank from the rest of the site.

**Fix:**
- Add "Service Areas" section to every service page linking to all location pages
- Add "Nearby Areas We Serve" section to every location page linking to siblings
- Add contextual in-body links (e.g., "We provide roof replacement across [Stony Plain](/services/stony-plain), [Spruce Grove](/services/spruce-grove)...")

### 6. SCHEMA TYPE IS GeneralContractor — SHOULD BE RoofingContractor

Competitors A2Z, Jayson Global, and PJ Roofing all use `RoofingContractor` schema. Google favors specificity.

**Fix:** Change `@type: "GeneralContractor"` to `@type: "RoofingContractor"` in the schema.

### 7. HOMEPAGE H1 IS NOT KEYWORD-OPTIMIZED

Current: "The Signature Roofing Standard."
Problem: Stylish but contains zero keywords that people actually search for.

**Fix:** Change to something like "Stony Plain & Spruce Grove Roofing Contractor" while keeping the visual design. The H1 can be visually styled differently than its text content.

### 8. NO OG:IMAGE OR TWITTER:IMAGE

Social shares appear without a preview image, killing click-through rates.

**Fix:** Create a 1200x630px branded image and add `og:image` and `twitter:image` meta tags.

### 9. BLOG POSTS TOO THIN (3 of 4)

| Post | Current Words | Target |
|------|--------------|--------|
| Roofing Materials Guide | ~700 | 1,500+ |
| Signs Roof Needs Replacement | ~750 | 1,500+ |
| Thermal Imaging Saves Money | ~700 | 1,500+ |
| Spring Maintenance Checklist | ~1,800 | Good as-is |

### 10. META DESCRIPTIONS OVER 155 CHARS ON 8 PAGES

Google truncates these. The CTA and phone number (the most important parts) get cut off.

**Pages over limit:** metal-products (178), roof-repair (175), gutters (185), soffits-fascia (180), spruce-grove (195), blog index (duplicate brand), all 4 blog posts.

### 11. ARTICLE SCHEMA MISSING dateModified

All 4 blog posts have `datePublished` but no `dateModified`. Google uses this as a freshness signal.

### 12. AUTHOR IS ORGANIZATION, NOT PERSON

Google E-E-A-T guidelines prefer a named human author. Change from Organization to Person (Bryan Dewey, Owner) and add an author bio to each post.

---

## MEDIUM PRIORITY ISSUES (Fix This Month)

| # | Issue | Fix |
|---|-------|-----|
| 13 | Google Fonts loaded externally (render-blocking) | Switch to `next/font/google` |
| 14 | Hero video `preload="auto"` downloads entire video | Change to `preload="metadata"` |
| 15 | 3 animation libraries loaded (Framer Motion + GSAP + Lenis) | Reduce to 1 or use CSS animations |
| 16 | No custom 404 page | Create `app/not-found.js` with navigation |
| 17 | /services/roof-repair has 12 H2 tags (decorative ones) | Change decorative labels to styled divs |
| 18 | No BreadcrumbList schema on blog posts | Add matching service page pattern |
| 19 | No Blog/CollectionPage schema on blog index | Add for structured data |
| 20 | Blog author photos are generic project photos | Use unique, topic-specific images |
| 21 | No visible publish dates on blog posts | Display dates for trust/freshness |
| 22 | No blog categories or tags | Add for navigation as content scales |
| 23 | Footer service area links use #hash anchors | Link to actual location pages |
| 24 | Missing `twitter:card` meta tags | Add alongside existing OG tags |
| 25 | No RSS feed for blog | Add for content distribution |

---

## COMPETITIVE LANDSCAPE

### Who Ranks Today (and Why Kayan Doesn't)

| Competitor | Google Reviews | City Pages | Blog Posts | Key Advantage |
|-----------|---------------|------------|------------|---------------|
| **PJ Roofing** | BBB A+ | **50+** | 15+ | Massive programmatic city page footprint |
| **Jayson Global** | **200+** | 10+ | **50+** | Best review + content combo in market |
| **A2Z Roofing** | **267** | 6 | 0 | Highest review count, per-location schema |
| **Kirkland Roofing** | Low | 6 | 20+ | Active blog, Parkland-based (local) |
| **Hiebert Roofing** | 20 | 0 | 0 | Genuine local roots, Chamber member |
| **Kayan** | ~150 | 4 (thin) | 4 (thin) | Thermal imaging, IKO, 15yr warranty, calculator |

### Why Kayan Is Invisible

1. **Page count:** PJ has 50+ city pages. Kayan has 4 thin ones.
2. **Content depth:** Jayson has 50+ blog posts. Kayan has 4.
3. **Reviews:** A2Z has 267 Google reviews. Kayan's review generation needs work.
4. **Schema:** Competitors use `RoofingContractor`. Kayan uses `GeneralContractor`.
5. **Indexing:** Only 2 pages in Google vs full sites for competitors.

### Kayan's Unfair Advantages (Not Leveraged Yet)

| Advantage | Competitors Who Have It |
|-----------|------------------------|
| FLIR Level II Thermal Imaging | **Nobody** |
| Interactive Roof Calculator | **Nobody** |
| IKO Preferred Contractor | Very few |
| 15-year workmanship warranty | Nobody (PJ: 10yr, Hiebert: 2yr) |
| 22 years + 1,500 homeowners | Competitive with top firms |
| A+ BBB rating | Matches competitors |

---

## KEYWORD STRATEGY (75 Keywords Identified)

### Tier 1 — Money Keywords (Need Dedicated Pages)

| Keyword | Intent | Competition | Current Page |
|---------|--------|-------------|-------------|
| roofing contractor stony plain | Transactional | HIGH | Homepage (weak) |
| roofing contractor spruce grove | Transactional | HIGH | Location page (thin) |
| roof replacement stony plain | Transactional | MEDIUM | Service page (good) |
| roof replacement spruce grove | Transactional | MEDIUM | Service page (good) |
| roof repair stony plain | Transactional | MEDIUM | Service page (good) |
| best roofer stony plain | Commercial | MEDIUM | No page |
| best roofer spruce grove | Commercial | MEDIUM | No page |

### Tier 2 — Service Keywords (Low Competition Goldmines)

| Keyword | Competition | Opportunity |
|---------|-------------|-------------|
| metal roofing stony plain | LOW | Major differentiator — expand metal page |
| seamless gutters stony plain | LOW | Few competitors target this |
| hail damage roof repair stony plain | LOW | **No dedicated page — seasonal goldmine** |
| IKO shingles installer stony plain | VERY LOW | Almost zero competition |
| seamless eavestrough stony plain | LOW | Canadian spelling variant — target both |
| soffit and fascia stony plain | LOW | Few competitors target this |

### Tier 3 — Blog Keywords (Informational Traffic)

Top 10 blog posts to write (in priority order):

| # | Title | Target Keyword |
|---|-------|----------------|
| 1 | How Much Does a New Roof Cost in Stony Plain? (2026) | roof cost stony plain |
| 2 | Metal Roof vs Shingles in Alberta: Honest Comparison | metal vs shingles alberta |
| 3 | Hail Damage Signs Every Alberta Homeowner Should Know | hail damage roof signs alberta |
| 4 | How to File a Roof Insurance Claim in Alberta | roof insurance claim alberta |
| 5 | Best Roofing Materials for Alberta Winters (2026) | best roofing material alberta |
| 6 | How to Choose a Roofing Contractor in Stony Plain | choosing roofer stony plain |
| 7 | Why IKO Shingles? A Preferred Contractor's Honest Review | IKO shingles review canada |
| 8 | Seamless Gutters vs Sectional: What Homeowners Need to Know | seamless gutters vs sectional |
| 9 | Ice Dam Prevention: Protecting Your Alberta Roof | ice dam prevention alberta |
| 10 | Cost of Seamless Gutters in Alberta (2026 Guide) | seamless gutters cost alberta |

### Tier 4 — Location Long-Tails

| Keyword | Competition | Page Needed |
|---------|-------------|-------------|
| roofing contractor parkland county | VERY LOW | Existing (expand) |
| roofer lac ste anne county | VERY LOW | **New page needed** |
| roofing company st albert ab | MEDIUM | **New page needed** |
| metal roofing parkland county | VERY LOW | Location page section |
| seamless gutters parkland county | VERY LOW | Location page section |

---

## PILLAR CONTENT STRATEGY

### Architecture: 4 Pillars, 34 Content Pieces

```
PILLAR 1: Complete Guide to Roofing in Stony Plain & Spruce Grove
├── Blog: How Much Does a New Roof Cost? (2026)
├── Blog: 7 Warning Signs Your Roof Needs Replacement [EXPAND EXISTING]
├── Blog: Roof Repair vs Full Replacement Decision Guide
├── Blog: How to Choose a Roofing Contractor
├── Blog: Roofing Warranties Explained
├── Blog: Spring Roof Maintenance Checklist [EXISTING — PILLAR ANCHOR]
├── Blog: Fall Roof Prep for Alberta Winters
├── Blog: Complete Guide to Seamless Gutters
├── Blog: Soffits & Fascia: The Hidden Shield
└── Blog: Roof Ventilation & Thermal Imaging [EXPAND EXISTING]

PILLAR 2: Metal Roofing in Alberta
├── Blog: Metal Roof Cost in Alberta (2026)
├── Blog: Metal vs Shingles: Honest Comparison
├── Blog: IKO Dynasty Shingles Review
├── Blog: Best Hail-Resistant Roofing Options
├── Blog: Roofing for Acreages & Rural Properties
├── Blog: Metal Roofing Myths Debunked
├── Blog: Steel Siding vs Vinyl: Alberta Guide
└── Blog: Commercial Roofing Options

PILLAR 3: Hail Damage & Roof Insurance Claims
├── Blog: How to Spot Hail Damage on Your Roof
├── Blog: Filing a Roof Insurance Claim (Step-by-Step)
├── Blog: What Does Home Insurance Cover for Roofs?
├── Blog: Working with Insurance Adjusters
├── Blog: Emergency Roof Repair Guide
├── Blog: Preparing for Alberta Hail Season
└── Blog: How to Avoid Storm Chaser Roofing Scams

PILLAR 4: Location Pages (Cross-Link Hub)
├── /services/stony-plain [EXPAND]
├── /services/spruce-grove [EXPAND]
├── /services/parkland-county [EXPAND]
├── /services/edmonton [EXPAND]
├── /services/st-albert [CREATE NEW]
└── /services/lac-ste-anne [CREATE NEW]
```

### Internal Linking Architecture

Every cluster post links back to its pillar page. Pillar pages link to all their clusters. Location pages link to all 3 pillars + relevant clusters. Service pages link to relevant clusters + location pages.

### Publishing Calendar (16 Weeks)

| Week | Content | Priority |
|------|---------|----------|
| 1-2 | Fix all critical technical issues (titles, schema, images) | CRITICAL |
| 3 | Expand Stony Plain + Spruce Grove location pages | CRITICAL |
| 4 | Expand Parkland County + Edmonton location pages | CRITICAL |
| 5 | Create St. Albert + Lac Ste. Anne location pages | HIGH |
| 6 | Blog: How Much Does a New Roof Cost? (2026) | HIGH |
| 7 | Blog: Hail Damage Signs + Insurance Claims | HIGH (before hail season) |
| 8 | Blog: Metal vs Shingles Comparison | HIGH |
| 9 | Pillar 1: Complete Roofing Guide | HIGH |
| 10 | Blog: How to Choose a Contractor + IKO Review | MEDIUM |
| 11 | Blog: Emergency Repair + Storm Chaser Scams | MEDIUM |
| 12 | Pillar 3: Hail Damage & Insurance Hub | MEDIUM |
| 13 | Blog: Seamless Gutters Guide + Costs | MEDIUM |
| 14 | Blog: Acreage Roofing + Commercial Options | MEDIUM |
| 15 | Pillar 2: Metal Roofing in Alberta Hub | MEDIUM |
| 16 | Blog: Fall Prep + Ice Dam Prevention | MEDIUM |

---

## COMPLETE PRIORITY FIX LIST

### WEEK 1-2: Critical Technical Fixes

- [ ] Fix duplicate brand name in title template (affects ALL 18 pages)
- [ ] Change schema from `GeneralContractor` to `RoofingContractor`
- [ ] Fix multiple H1 tags on Edmonton page (3 H1s) and Stony Plain page (2 H1s)
- [ ] Enable Next.js image optimization (remove `unoptimized: true`)
- [ ] Add `og:image` and `twitter:image` to site metadata
- [ ] Shorten all meta descriptions to under 155 characters
- [ ] Submit all 18 URLs to Google Search Console for indexing
- [ ] Optimize homepage H1 with target keywords
- [ ] Change hero video from `preload="auto"` to `preload="metadata"`
- [ ] Update footer service area links from #hash to actual location page URLs

### WEEK 3-4: Location Page Overhaul

- [ ] Expand Stony Plain page to 1,500+ words with unique local content
- [ ] Expand Spruce Grove page to 1,500+ words with unique local content
- [ ] Expand Parkland County page to 1,500+ words with unique local content
- [ ] Expand Edmonton page to 1,500+ words (fix 3 H1 tags first)
- [ ] Add 4-6 project photos with geo-specific alt text to each location page
- [ ] Add breadcrumb navigation to all location pages
- [ ] Add FAQ schema to all location pages (5-6 location-specific Q&As)
- [ ] Add "Nearby Areas We Serve" cross-links between all location pages
- [ ] Add "Service Areas" section to all 7 service pages linking to location pages

### WEEK 5: New Pages

- [ ] Create St. Albert location page (1,500+ words)
- [ ] Create Lac Ste. Anne County location page (1,500+ words)
- [ ] Create Hail Damage / Insurance Claims service page
- [ ] Create Roof Inspection service page

### WEEK 6-16: Content Engine

- [ ] Expand 3 thin blog posts to 1,500+ words each
- [ ] Add `dateModified` to all Article schemas
- [ ] Change blog author from Organization to Person (Bryan Dewey)
- [ ] Add BreadcrumbList schema to all blog posts
- [ ] Add contextual in-body links from blog posts to service/location pages
- [ ] Publish 2 new blog posts per week following the pillar-cluster calendar
- [ ] Add FAQ schema to blog posts that don't have it
- [ ] Switch Google Fonts to `next/font/google` for performance

### ONGOING

- [ ] Review generation campaign (target: 250+ Google reviews to match A2Z)
- [ ] Monitor Google Search Console for indexing progress
- [ ] Update content with seasonal relevance (hail season, winter prep)
- [ ] Build local backlinks (Chamber of Commerce, supplier partnerships)
- [ ] Resubmit updated pages via IndexNow after each round of changes

---

## EXPECTED OUTCOMES

| Timeframe | Expected Result |
|-----------|----------------|
| Week 2 | All 18 pages indexed. Title tags fixed in SERPs. |
| Week 4 | Location pages ranking for long-tail city queries |
| Week 8 | Blog posts ranking for informational queries, driving top-of-funnel traffic |
| Week 12 | Pillar pages establishing topical authority |
| Week 16 | Competing for page 1 on "roofing contractor stony plain" and "roofing spruce grove" |
| Month 6 | Top 3 positions for primary money keywords |

---

## REFERENCE DOCUMENTS

- [PILLAR-CLUSTER-CONTENT-STRATEGY.md](PILLAR-CLUSTER-CONTENT-STRATEGY.md) — Full content strategy with every blog post outlined
- [SEO-CONTENT-STRATEGY.md](SEO-CONTENT-STRATEGY.md) — Content strategy overview

---

*Report compiled from 6 parallel research agents analyzing technical SEO, keyword landscape, competitive intelligence, on-page optimization, blog content quality, and pillar content architecture.*
