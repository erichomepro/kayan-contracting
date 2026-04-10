import { company, services, serviceAreas } from '@/data/company'

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": company.name,
    "url": "https://kayancontracting.ca",
    "telephone": company.phoneRaw,
    "email": company.email,
    "description": "Expert construction services in Parkland County, Alberta. 22 years of experience. BBB A+ rated. IKO Preferred Contractor. Roofing, metal products, steel siding, seamless eavestroughing, soffits & fascia.",
    "foundingDate": String(company.foundedYear),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": company.address.street,
      "addressLocality": company.address.city,
      "addressRegion": company.address.province,
      "postalCode": company.address.postalCode,
      "addressCountry": company.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": company.geo.lat,
      "longitude": company.geo.lng,
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": area.name,
    })),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00",
      },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDesc,
        },
      })),
    },
    "sameAs": [company.social.facebook],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
