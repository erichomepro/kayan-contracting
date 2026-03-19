import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronRight,
  Check,
  Phone,
  Search,
  FileText,
  Hammer,
  CheckCircle,
  Star,
  MapPin,
  Shield,
  Award,
  Clock,
  Quote,
} from 'lucide-react'
import { services, company, processSteps } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import ServiceQuoteForm from '@/components/services/ServiceQuoteForm'
import ServiceFAQ from '@/components/services/ServiceFAQ'
import ServiceSchema from '@/components/services/ServiceSchema'

// Import all service page data
const pageModules = import.meta.glob('../data/service-pages/*.js', { eager: true })
const servicePages = {}
for (const path in pageModules) {
  const filename = path.split('/').pop()
  const id = filename.replace('.js', '')
  servicePages[id] = pageModules[path].default
}

const stepIcons = {
  phone: Phone,
  search: Search,
  'file-text': FileText,
  hammer: Hammer,
  'check-circle': CheckCircle,
}

export default function ServicePage() {
  const { serviceId } = useParams()
  const service = services.find((s) => s.id === serviceId)
  const pageData = servicePages[serviceId] || null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

  useEffect(() => {
    if (pageData) {
      document.title = pageData.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) metaDesc.setAttribute('content', pageData.metaDescription)
    }
  }, [pageData])

  if (!service || !pageData) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center pt-28">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-white/50 mb-8">The service you're looking for doesn't exist.</p>
          <Button href="/">Back to Home</Button>
        </div>
      </div>
    )
  }

  const steps = pageData.processSteps || processSteps

  return (
    <>
      <ServiceSchema service={service} pageData={pageData} />

      {/* Breadcrumb */}
      <div className="bg-surface-dark pt-28 pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs text-white/40">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/#services" className="hover:text-accent transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-surface-dark pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pb-28 overflow-hidden">
        {/* Logo watermark background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'url(/images/brand/logo-sketch.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right -5% bottom -10%',
            backgroundSize: '55%',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="h-px w-10 bg-accent" />
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase italic">
                {pageData.heroBadge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-4 normal-case"
            >
              {pageData.heroHeading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/60 text-base sm:text-lg leading-relaxed mb-6 max-w-lg"
            >
              {pageData.heroSubheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button href="#service-quote" size="lg">
                Get a Free Quote
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
              className="flex flex-wrap gap-4 text-xs text-white/50"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 max-w-sm"
            >
              <img
                src="/images/iko-certificate.jpg"
                alt="IKO RoofPro Preferred Contractor Certificate — Kayan Contracting Ltd."
                className="rounded-lg border border-white/10 shadow-lg"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {pageData.galleryPhotos[0] && (
              <div className="relative h-[480px] rounded-2xl overflow-hidden">
                <img
                  src={pageData.galleryPhotos[0].src}
                  alt={pageData.galleryPhotos[0].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm">
                    Trusted by 1,500+ homeowners across Parkland County
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-(--spacing-section) bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="WHY THIS MATTERS"
            heading={pageData.problemHeading}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pageData.problemPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-white font-display font-bold text-base mb-2 normal-case">{point.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Benefits */}
      <section className="py-(--spacing-section) bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="WHAT YOU GET"
            heading={`Why Choose Kayan for ${service.title}`}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {pageData.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4 p-5 glass-card rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Check className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-base mb-1 normal-case">{benefit.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {pageData.galleryPhotos.length > 1 && (
        <section className="py-(--spacing-section) bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <SectionHeading
              label="OUR WORK"
              heading={`${service.title} Projects`}
              subtitle="Real photos from real jobs across Parkland County — no stock images."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pageData.galleryPhotos.slice(1).map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How It Works */}
      <section className="py-(--spacing-section) bg-surface-dark">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            label="HOW IT WORKS"
            heading="Our Process"
            subtitle={`From first call to final walkthrough — here's how your ${service.title.toLowerCase()} project works.`}
          />
          <div className="space-y-6">
            {steps.map((s, i) => {
              const Icon = stepIcons[s.icon] || CheckCircle
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 items-start glass-card rounded-xl p-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">
                      Step {s.step}
                    </div>
                    <h3 className="text-white font-display font-bold text-lg mb-1 normal-case">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {pageData.testimonial && (
        <section className="py-(--spacing-section) bg-surface">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl text-white/80 font-serif italic leading-relaxed mb-6"
            >
              &ldquo;{pageData.testimonial.quote}&rdquo;
            </motion.blockquote>
            <div className="text-accent font-bold text-[10px] uppercase tracking-[0.2em]">
              &mdash; {pageData.testimonial.author}
            </div>
            <div className="flex items-center justify-center gap-2 mt-2 text-white/40 text-xs">
              <MapPin className="w-3 h-3" />
              {pageData.testimonial.project} &bull; {pageData.testimonial.location}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-(--spacing-section) bg-surface-dark">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            label="QUESTIONS?"
            heading={`${service.title} FAQ`}
          />
          <ServiceFAQ faqs={pageData.faqs} />
        </div>
      </section>

      {/* Quote Form */}
      <section id="service-quote" className="py-(--spacing-section) bg-surface">
        <div className="max-w-2xl mx-auto px-6">
          <SectionHeading
            label="GET STARTED"
            heading={pageData.ctaHeading}
            subtitle={pageData.ctaSubheading}
          />
          <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 copper-glow">
            <ServiceQuoteForm serviceId={service.id} serviceTitle={service.title} />
          </div>
        </div>
      </section>
    </>
  )
}
