import { motion } from 'framer-motion'
import { Star, Quote, ShieldCheck, Facebook } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { testimonials, aggregateRating } from '@/data/testimonials'

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial, index }) {
  const formattedDate = new Date(testimonial.date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
    >
      {/* Header: stars + quote */}
      <div className="flex items-center justify-between mb-3">
        <Stars count={testimonial.rating} />
        <Quote className="w-7 h-7 text-accent/20" />
      </div>

      {/* Review text */}
      <blockquote className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-5">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
        <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
          <span className="text-accent font-display font-bold text-sm">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-display font-semibold text-sm text-white truncate">{testimonial.name}</p>
          <p className="text-white/40 text-xs truncate">
            {testimonial.project} &middot; {testimonial.location}
          </p>
        </div>
        <time className="ml-auto text-xs text-white/30 shrink-0" dateTime={testimonial.date}>
          {formattedDate}
        </time>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-(--spacing-section) bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          label="WHAT HOMEOWNERS SAY"
          heading="Trusted by Your Neighbours"
        />

        {/* Aggregate rating */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="text-5xl font-display font-extrabold text-white leading-none">{aggregateRating.score}</span>
            <div>
              <Stars count={5} />
              <p className="text-white/40 text-xs mt-0.5">
                Based on {aggregateRating.totalProjects} projects
              </p>
            </div>
          </div>
          <div className="hidden sm:block w-[1px] h-10 bg-white/[0.06]" />
          <div className="text-center sm:text-left">
            <p className="font-display font-bold text-lg text-white normal-case">Across {aggregateRating.region}</p>
            <p className="text-white/40 text-xs">Stony Plain &middot; Spruce Grove &middot; Edmonton</p>
          </div>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} index={i} />
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-12 space-y-6">
          {/* Warning about low-cost roofers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-5 rounded-xl text-center"
          >
            <p className="text-white/60 text-sm">
              <span className="text-accent font-semibold">Be aware of inexperienced low-cost roofing businesses.</span>{' '}
              It&rsquo;s so important to have an experienced, trusted contractor doing your wind repairs.
              Book with expertise and integrity.
            </p>
          </motion.div>

          {/* Reviewed on platforms */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
              Reviewed On
            </span>
            {[
              { name: 'Google Reviews', Icon: Star },
              { name: 'BBB A+', Icon: ShieldCheck },
              { name: 'Facebook', Icon: Facebook },
            ].map(({ name, Icon }) => (
              <div key={name} className="flex items-center gap-2 text-white/50">
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
