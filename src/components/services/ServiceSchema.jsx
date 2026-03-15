import { company } from '@/data/company'

export default function ServiceSchema({ service, pageData }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: pageData.metaDescription,
    provider: {
      '@type': 'GeneralContractor',
      name: company.name,
      telephone: company.phoneRaw,
      email: company.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.province,
        postalCode: company.address.postalCode,
        addressCountry: company.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: company.geo.lat,
        longitude: company.geo.lng,
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Stony Plain' },
      { '@type': 'City', name: 'Spruce Grove' },
      { '@type': 'AdministrativeArea', name: 'Parkland County' },
      { '@type': 'City', name: 'Edmonton' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.features.map((feature) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: feature,
        },
      })),
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kayancontracting.ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://kayancontracting.ca/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `https://kayancontracting.ca/services/${service.id}`,
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
