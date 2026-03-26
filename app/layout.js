import '@/index.css'
import { company, services, serviceAreas, faqs } from '@/data/company'
import ClientLayout from './client-layout'

// UPDATE THIS when the domain is confirmed
const BASE_URL = 'https://www.kayancontracting.ca'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Kayan Contracting | Roofing & Exteriors | Stony Plain & Spruce Grove, AB',
    template: '%s | Kayan Contracting',
  },
  description:
    'Kayan Contracting Ltd — Stony Plain\'s trusted contractor since 2003. Roofing, metal products, steel siding & seamless eavestroughing. IKO Preferred Contractor. A+ BBB rated. 1,500+ homeowners served. Call (780) 984-0221.',
  keywords: [
    'roofing Stony Plain',
    'roof replacement Spruce Grove',
    'metal roofing Parkland County',
    'steel siding Alberta',
    'seamless eavestroughing',
    'soffits fascia',
    'IKO Preferred Contractor',
    'Kayan Contracting',
  ],
  authors: [{ name: 'Kayan Contracting Ltd.' }],
  creator: 'Kayan Contracting Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: BASE_URL,
    siteName: 'Kayan Contracting Ltd.',
    title: 'Kayan Contracting Ltd. | Expert Construction in Stony Plain & Spruce Grove',
    description:
      'Protecting Parkland County homes for 22 years. IKO Preferred Contractor. BBB A+ rated. 15-year workmanship warranty. Free inspections.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kayan Contracting | Roofing & Exteriors | Stony Plain & Spruce Grove, AB',
    description:
      'Protecting Parkland County homes for 22 years. IKO Preferred Contractor. BBB A+ rated. 15-year workmanship warranty. Free inspections.',
  },
  verification: {
    google: '6_VarR6PUa03LVveIueP2vTf5l9ErIKMvTV0HGLbeD8',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/favicon.svg',
  },
}

// LocalBusiness + FAQ schema for root layout
function RootSchemaMarkup() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: company.name,
    url: BASE_URL,
    telephone: company.phoneRaw,
    email: company.email,
    description:
      'Expert construction services in Parkland County, Alberta. 22 years of experience. BBB A+ rated. IKO Preferred Contractor. Roofing, metal products, steel siding, seamless eavestroughing, soffits & fascia.',
    foundingDate: String(company.foundedYear),
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
    areaServed: serviceAreas.map((area) => ({
      '@type': 'City',
      name: area.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction Services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.shortDesc,
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
    },
    sameAs: [company.social.facebook],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Fonts: Inter + Playfair Display */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <RootSchemaMarkup />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
