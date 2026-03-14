// ===== KAYAN CONTRACTING — COMPANY DATA =====
// Single source of truth for all company information

export const company = {
  name: "Kayan Contracting Ltd.",
  shortName: "Kayan Contracting",
  tagline: "Protecting Parkland County Homes for 22 Years",
  phone: "(780) 984-0221",
  phoneRaw: "+17809840221",
  email: "kayancontracting@gmail.com",
  address: {
    street: "Box 2905",
    city: "Stony Plain",
    province: "AB",
    postalCode: "T7Z 1Y4",
    country: "CA",
  },
  geo: { lat: 53.5344, lng: -114.0067 },
  foundedYear: 2003,
  yearsInBusiness: 22,
  bbbRating: "A+",
  workmanshipWarranty: "10-Year",
  hoursOfOperation: {
    weekday: "Mon-Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 3:00 PM",
    sunday: "Sun: Closed",
  },
  social: {
    facebook: "https://www.facebook.com/p/Kayan-Contracting-Ltd-100057278927686/",
  },
  certifications: [
    { name: "IKO Certified Installer", icon: "award" },
    { name: "BBB A+ Rated", icon: "shield-check" },
    { name: "Licensed & Insured", icon: "file-check" },
    { name: "WCB Covered", icon: "hard-hat" },
  ],
}

export const services = [
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    shortDesc: "Complete tear-off and installation with premium IKO shingles.",
    description: "When repairs aren't enough, we provide full roof replacements using industry-leading IKO architectural shingles. Every installation includes a thorough deck inspection, new underlayment, proper ventilation assessment, and our 10-year workmanship warranty.",
    icon: "home",
    features: [
      "Full tear-off and disposal",
      "Deck inspection and repair",
      "IKO Cambridge or Dynasty shingles",
      "New underlayment and ice shield",
      "Ridge vent installation",
      "10-year workmanship warranty",
    ],
    priceRange: "$8,000 - $18,000",
  },
  {
    id: "metal-roofing",
    title: "Metal Roofing",
    shortDesc: "Durable metal roofing that performs in every Alberta season.",
    description: "Metal roofs last 40-70 years and handle Alberta's extreme weather - from heavy snow loads to hail and chinook winds. We install standing seam and metal shingle systems with manufacturer-backed warranties.",
    icon: "shield",
    features: [
      "Standing seam and metal shingle options",
      "40-70 year lifespan",
      "Superior hail and wind resistance",
      "Energy efficient - reflects heat",
      "Low maintenance",
      "Manufacturer warranty included",
    ],
    priceRange: "$12,000 - $30,000",
  },
  {
    id: "roof-repair",
    title: "Roof Repair",
    shortDesc: "Fast, reliable repairs for leaks, storm damage, and wear.",
    description: "Not every roof needs replacing. Our experienced crews diagnose and fix leaks, replace damaged shingles, repair flashing, and address storm damage - often in a single visit. We'll always tell you honestly: repair or replace.",
    icon: "wrench",
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repair",
      "Storm damage repair",
      "Emergency tarping available",
      "Honest repair-vs-replace assessment",
    ],
    priceRange: "$300 - $3,000",
  },
  {
    id: "gutters",
    title: "Seamless Gutters",
    shortDesc: "Custom-built seamless eavestroughing for a perfect fit.",
    description: "We fabricate seamless gutters on-site for a custom fit to your home - no joints, no leaks. Proper eavestroughing protects your foundation, siding, and landscaping from water damage.",
    icon: "droplets",
    features: [
      "Seamless aluminum construction",
      "Built on-site for exact fit",
      "Multiple colour options",
      "Downspout installation",
      "Gutter guard options available",
      "Protects foundation and landscaping",
    ],
    priceRange: "$1,500 - $4,000",
  },
  {
    id: "soffits-fascia",
    title: "Soffits & Fascia",
    shortDesc: "Complete your roof system with quality soffits and fascia.",
    description: "Soffits and fascia aren't just cosmetic - they protect your roof's edge from moisture, pests, and rot while providing critical attic ventilation. We install aluminum and vinyl options in a range of colours.",
    icon: "layers",
    features: [
      "Aluminum and vinyl options",
      "Ventilated soffits for airflow",
      "Protects against moisture and pests",
      "Wide colour selection",
      "Completes the roof system",
      "Low maintenance materials",
    ],
    priceRange: "$2,000 - $6,000",
  },
]

export const serviceAreas = [
  { name: "Stony Plain", slug: "stony-plain", primary: true },
  { name: "Spruce Grove", slug: "spruce-grove", primary: true },
  { name: "Parkland County", slug: "parkland-county", primary: true },
  { name: "Edmonton", slug: "edmonton", primary: false },
  { name: "Lac Ste. Anne County", slug: "lac-ste-anne", primary: false },
]

export const stats = [
  { value: 22, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Roofs Completed" },
  { value: 10, suffix: "-Year", label: "Workmanship Warranty" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
]

export const processSteps = [
  {
    step: 1,
    title: "Call or Request Online",
    description: "Reach out by phone, form, or chat. We respond the same day.",
    icon: "phone",
  },
  {
    step: 2,
    title: "Free Roof Inspection",
    description: "Our team inspects your roof thoroughly and documents everything with photos.",
    icon: "search",
  },
  {
    step: 3,
    title: "Clear, Written Quote",
    description: "No surprises, no hidden fees. You'll know exactly what you're paying for.",
    icon: "file-text",
  },
  {
    step: 4,
    title: "Expert Installation",
    description: "Certified crews, premium IKO materials, and meticulous attention to detail.",
    icon: "hammer",
  },
  {
    step: 5,
    title: "Final Walkthrough",
    description: "We're not done until you're satisfied. Full cleanup and quality inspection included.",
    icon: "check-circle",
  },
]

export const faqs = [
  {
    q: "How much does a new roof cost in Parkland County?",
    a: "The average roof replacement in the Stony Plain / Spruce Grove area ranges from $8,000 to $18,000 for asphalt shingles, and $12,000 to $30,000 for metal roofing. The final cost depends on your roof's size, pitch, complexity, and material choice. We provide free, no-obligation estimates with transparent pricing.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most residential roof replacements are completed in 1-3 days, weather permitting. We'll give you a specific timeline during your estimate and keep you informed throughout the process.",
  },
  {
    q: "Do you handle insurance claims?",
    a: "Yes. If your roof was damaged by hail, wind, or another insured event, we'll work directly with your insurance adjuster to ensure your claim is properly documented and you receive fair coverage. We guide you through the entire process.",
  },
  {
    q: "What does your 10-year warranty cover?",
    a: "Our 10-year workmanship warranty covers any installation-related issues - leaks, lifting shingles, or any defect caused by our work. This is in addition to the manufacturer's material warranty (typically 25-50 years for IKO shingles).",
  },
  {
    q: "What if I find a lower quote?",
    a: "We encourage you to compare quotes - but compare apples to apples. Check that quotes include the same materials, full tear-off (not overlay), proper underlayment, and warranty terms. Our pricing reflects quality materials, certified installation, and a warranty that actually means something.",
  },
  {
    q: "How do I know if I need a repair or full replacement?",
    a: "That's exactly why we offer free inspections. We'll tell you honestly whether a repair will solve the problem or if replacement makes more financial sense. If your roof is under 15 years old with localized damage, repair is often the right call.",
  },
  {
    q: "What brands do you use?",
    a: "We're an IKO certified installer and primarily use IKO Cambridge and Dynasty architectural shingles - Canadian-made products engineered for our climate. For metal roofing, we work with leading Canadian manufacturers for standing seam and metal shingle systems.",
  },
  {
    q: "Do you offer financing?",
    a: "We understand a new roof is a significant investment. Contact us to discuss payment options that work for your budget. We're happy to help you find a solution.",
  },
]

export const warningSignsData = [
  {
    title: "Missing or Curling Shingles",
    description: "Wind damage or age causing shingles to lift, curl, or blow off entirely.",
    icon: "wind",
  },
  {
    title: "Granules in Your Gutters",
    description: "Black grit collecting in gutters means your shingles are breaking down.",
    icon: "droplets",
  },
  {
    title: "Water Stains on Ceilings",
    description: "Brown spots or peeling paint inside often means a roof leak above.",
    icon: "cloud-rain",
  },
  {
    title: "Roof is 15+ Years Old",
    description: "Most asphalt roofs last 20-25 years. If yours is aging, it's time to inspect.",
    icon: "clock",
  },
]
