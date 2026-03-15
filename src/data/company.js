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
    { name: "IKO Preferred Contractor", icon: "award" },
    { name: "BBB A+ Rated", icon: "shield-check" },
    { name: "Licensed & Insured", icon: "file-check" },
    { name: "WCB Covered", icon: "hard-hat" },
  ],
}

export const services = [
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    shortDesc: "Complete tear-off and installation with premium materials built for Alberta weather.",
    description: "When repairs aren't enough, we provide full roof replacements using industry-leading products. Every installation includes a thorough deck inspection, new underlayment, proper ventilation assessment, and our 10-year workmanship warranty.",
    icon: "home",
    features: [
      "Full tear-off and disposal",
      "Deck inspection and repair",
      "IKO Cambridge or Dynasty shingles",
      "New underlayment and ice shield",
      "Ridge vent installation",
      "10-year workmanship warranty",
    ],
  },
  {
    id: "metal-products",
    title: "Residential & Commercial Metal Products",
    shortDesc: "Durable metal roofing, siding, and cladding that performs in every Alberta season.",
    description: "Metal roofs last 40-70 years and handle Alberta's extreme weather — from heavy snow loads to hail and chinook winds. We install standing seam roofing, metal shingle systems, and steel siding with manufacturer-backed warranties.",
    icon: "shield",
    features: [
      "Standing seam and metal shingle roofing",
      "Steel siding installation",
      "Commercial metal cladding",
      "40-70 year lifespan",
      "Superior hail and wind resistance",
      "Manufacturer warranty included",
    ],
  },
  {
    id: "steel-siding",
    title: "Steel Siding",
    shortDesc: "Premium steel siding that protects your home and looks incredible for decades.",
    description: "Steel siding delivers unmatched durability and curb appeal. It resists dents, fading, and Alberta's harshest weather while requiring virtually zero maintenance. We install residential and commercial steel siding in a wide range of profiles and colours.",
    icon: "building",
    features: [
      "Residential and commercial installation",
      "Dent and fade resistant",
      "Wide selection of colours and profiles",
      "Withstands extreme weather",
      "Virtually maintenance-free",
      "Enhances curb appeal and home value",
    ],
  },
  {
    id: "roof-repair",
    title: "Roof Repair",
    shortDesc: "Fast, reliable repairs for leaks, storm damage, and wear.",
    description: "Not every roof needs replacing. Our experienced crews diagnose and fix leaks, replace damaged shingles, repair flashing, and address storm damage — often in a single visit. We'll always tell you honestly: repair or replace.",
    icon: "wrench",
    features: [
      "Leak detection and repair",
      "Shingle replacement",
      "Flashing repair",
      "Storm damage repair",
      "Emergency tarping available",
      "Honest repair-vs-replace assessment",
    ],
  },
  {
    id: "gutters",
    title: "Seamless Eavestroughing",
    shortDesc: "Custom 5\" and 6\" seamless eavestroughing for a perfect, leak-free fit.",
    description: "We fabricate seamless eavestroughs on-site in 5-inch and 6-inch sizes for a custom fit to your home — no joints, no leaks. Proper eavestroughing protects your foundation, siding, and landscaping from water damage.",
    icon: "droplets",
    features: [
      "5-inch and 6-inch seamless options",
      "Built on-site for exact fit",
      "Seamless aluminum construction",
      "Multiple colour options",
      "Downspout installation",
      "Gutter guard options available",
    ],
  },
  {
    id: "soffits-fascia",
    title: "Soffits & Fascia",
    shortDesc: "Complete your exterior with quality soffits and fascia.",
    description: "Soffits and fascia aren't just cosmetic — they protect your roof's edge from moisture, pests, and rot while providing critical attic ventilation. We install aluminum and vinyl options in a range of colours.",
    icon: "layers",
    features: [
      "Aluminum and vinyl options",
      "Ventilated soffits for airflow",
      "Protects against moisture and pests",
      "Wide colour selection",
      "Completes the exterior system",
      "Low maintenance materials",
    ],
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
  { value: 1500, suffix: "+", label: "Homeowners Served" },
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
    title: "Free On-Site Inspection",
    description: "Our team inspects your property thoroughly and documents everything with photos.",
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
    description: "Certified crews, premium materials, and meticulous attention to detail. Every job is thoroughly inspected.",
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
    q: "What construction services do you offer?",
    a: "We provide a full range of construction services including roof replacement, residential and commercial metal products, steel siding, seamless eavestroughing (5\" and 6\"), soffits & fascia, and roof repairs. We handle both residential and commercial projects across Parkland County.",
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
    a: "Our 10-year workmanship warranty covers any installation-related issues — leaks, lifting shingles, or any defect caused by our work. This is in addition to the manufacturer's material warranty. We use the highest quality products that hold up to Canada's harshest weather conditions.",
  },
  {
    q: "What makes Kayan Contracting different?",
    a: "With 22 years and over 1,500 homeowners served, we bring unmatched experience to every project. We're an IKO Preferred Contractor, BBB A+ rated, and we use only the highest quality products — not just IKO. Every job is thoroughly inspected and installed to the highest standards. We use products that hold up to Canada's harshest weather conditions.",
  },
  {
    q: "How do I know if I need a repair or full replacement?",
    a: "That's exactly why we offer free inspections. We'll tell you honestly whether a repair will solve the problem or if replacement makes more financial sense. If your roof is under 15 years old with localized damage, repair is often the right call.",
  },
  {
    q: "What brands and products do you use?",
    a: "We're an IKO Preferred Contractor and use IKO Cambridge and Dynasty architectural shingles — Canadian-made products engineered for our climate. But we use the highest quality products across all our services, not just IKO. For metal roofing and steel siding, we work with leading Canadian manufacturers for standing seam systems, metal shingles, and premium steel siding.",
  },
  {
    q: "Do you offer financing?",
    a: "We understand a new roof or exterior project is a significant investment. Contact us to discuss payment options that work for your budget. We're happy to help you find a solution.",
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
