'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  Check,
  MapPin,
  Shield,
  Award,
  Clock,
  Star,
  ChevronRight,
  Home,
  Hammer,
  HelpCircle,
  Map,
  BookOpen,
} from 'lucide-react'
import { company, services } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { useState } from 'react'

function FaqAccordionItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="text-white font-display font-bold text-sm leading-snug">{q}</span>
        <ChevronRight
          className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-90' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1">
          <p className="text-white/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </motion.div>
  )
}

export default function LocationPageClient({
  location,
  locationSlug,
  description,
  highlights,
  neighborhoodsContent,
  localExpertise,
  projectShowcase,
  localFaqs,
  nearbyAreas,
  blogLinks,
}) {
  const locationSchema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name: `${company.name} — ${location}`,
    description: `Roofing and exterior contractor serving ${location}, Alberta. 22 years of experience, BBB A+ rated, IKO Preferred Contractor.`,
    telephone: company.phoneRaw,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location,
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': location === 'Parkland County' || location === 'Lac Ste. Anne County' ? 'AdministrativeArea' : 'City',
      name: location,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
    },
  }

  const faqSchema =
    localFaqs && localFaqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: localFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.a,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-surface-dark pt-24 sm:pt-28 pb-0"
      >
        <div className="max-w-7xl mx-auto px-6">
          <ol className="flex items-center gap-2 text-xs text-white/40">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li>
              <Link href="/services/stony-plain" className="hover:text-accent transition-colors">
                Service Areas
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3 h-3" />
            </li>
            <li className="text-accent font-semibold">{location}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-surface-dark pt-8 pb-16 sm:pt-12 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 justify-center mb-4"
          >
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-bold tracking-widest text-[10px] uppercase italic flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Serving {location}
            </span>
            <span className="h-px w-12 bg-accent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-white font-display tracking-tight leading-none mb-6"
          >
            Roofing & Exteriors in{' '}
            <span className="font-serif italic text-accent">{location}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
          >
            <Button href="#location-services" size="lg">
              View Services
            </Button>
            <Button href={`tel:${company.phoneRaw}`} variant="secondary" size="lg">
              <Phone className="w-4 h-4" />
              {company.phone}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center text-xs text-white/50"
          >
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-accent" />
              IKO Preferred Contractor
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-accent" />
              BBB A+ Rated
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-accent" />
              22+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-accent" />
              1,500+ Homeowners Served
            </span>
          </motion.div>
        </div>
      </section>

      {/* Why Us in This Area */}
      <section className="py-(--spacing-section) bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading
            label={`Why ${location} Homeowners Choose Us`}
            heading={`Your Local Roofing Experts in ${location}`}
          />
          <div className="space-y-4 max-w-2xl mx-auto">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 glass-card rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed self-center">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhoods / Areas Served */}
      {neighborhoodsContent && (
        <section className="py-(--spacing-section) bg-surface-dark">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading
              label="Areas We Serve"
              heading={`Neighbourhoods & Areas in ${location}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert prose-sm max-w-none text-white/70 leading-relaxed [&>p]:mb-4 [&>h3]:text-white [&>h3]:font-display [&>h3]:text-lg [&>h3]:mt-8 [&>h3]:mb-3 [&>ul]:space-y-2 [&>ul]:list-none [&>ul]:pl-0 [&>ul>li]:flex [&>ul>li]:gap-2 [&>ul>li]:items-start"
              dangerouslySetInnerHTML={{ __html: neighborhoodsContent }}
            />
          </div>
        </section>
      )}

      {/* Local Expertise */}
      {localExpertise && (
        <section className="py-(--spacing-section) bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeading
              label="Local Knowledge"
              heading={`Roofing Expertise for ${location}`}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert prose-sm max-w-none text-white/70 leading-relaxed [&>p]:mb-4 [&>h3]:text-white [&>h3]:font-display [&>h3]:text-lg [&>h3]:mt-8 [&>h3]:mb-3"
              dangerouslySetInnerHTML={{ __html: localExpertise }}
            />
          </div>
        </section>
      )}

      {/* Project Showcase */}
      {projectShowcase && projectShowcase.length > 0 && (
        <section className="py-(--spacing-section) bg-surface-dark">
          <div className="max-w-5xl mx-auto px-6">
            <SectionHeading
              label="Recent Projects"
              heading={`Our Work in ${location}`}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {projectShowcase.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                      <Hammer className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-white font-display font-bold text-base mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Available */}
      <section id="location-services" className="py-(--spacing-section) bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Services"
            heading={`What We Offer in ${location}`}
            subtitle={`Full-service roofing and exterior solutions for ${location} homeowners and businesses.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group block glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300 h-full"
                >
                  <h3 className="text-white font-display font-bold text-base mb-2 normal-case group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-[10px] font-bold uppercase tracking-widest group-hover:gap-2.5 transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      {localFaqs && localFaqs.length > 0 && (
        <section className="py-(--spacing-section) bg-surface">
          <div className="max-w-3xl mx-auto px-6">
            <SectionHeading
              label="Common Questions"
              heading={`Roofing FAQ for ${location}`}
            />
            <div className="space-y-3">
              {localFaqs.map((faq, i) => (
                <FaqAccordionItem key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Nearby Areas & Blog Links */}
      {(nearbyAreas?.length > 0 || blogLinks?.length > 0) && (
        <section className="py-(--spacing-section) bg-surface-dark">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {nearbyAreas && nearbyAreas.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Map className="w-5 h-5 text-accent" />
                    <h3 className="text-white font-display font-bold text-lg">
                      Nearby Service Areas
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {nearbyAreas.map((area, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          href={`/services/${area.slug}`}
                          className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-accent/30 transition-all group"
                        >
                          <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-white/70 text-sm group-hover:text-accent transition-colors">
                            Roofing in {area.name}
                          </span>
                          <ArrowRight className="w-3 h-3 text-accent/50 ml-auto group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {blogLinks && blogLinks.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <h3 className="text-white font-display font-bold text-lg">
                      Helpful Resources
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {blogLinks.map((post, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Link
                          href={post.href}
                          className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-accent/30 transition-all group"
                        >
                          <BookOpen className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-white/70 text-sm group-hover:text-accent transition-colors">
                            {post.title}
                          </span>
                          <ArrowRight className="w-3 h-3 text-accent/50 ml-auto group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-(--spacing-section) bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            label="Ready to Get Started?"
            heading={`Free Roof Inspection in ${location}`}
            subtitle={`Join 1,500+ Parkland County homeowners who trust Kayan Contracting. Free inspection, honest assessment, no obligation.`}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all copper-glow"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-accent text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all"
            >
              Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
