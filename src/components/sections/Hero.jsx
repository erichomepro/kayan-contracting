import { motion } from 'framer-motion'
import { company } from '@/data/company'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* ── Video area ── */}
      <div className="relative h-screen min-h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-accent rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Content below video ── */}
      <div className="relative bg-surface py-8 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-6"
            >
              <span className="h-px w-8 sm:w-12 bg-accent" />
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase italic">
                Est. {company.foundedYear} | Parkland County
              </span>
            </motion.div>

            <div className="mb-3 sm:mb-4">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] sm:leading-[0.85] tracking-tight sm:tracking-tighter uppercase"
              >
                The{' '}
                <span className="inline italic text-accent font-serif lowercase">
                  Signature
                </span>
                <span className="block text-white font-bold">Construction Standard.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md text-text-muted text-xs sm:text-base font-serif italic leading-relaxed mb-5 sm:mb-8"
            >
              &ldquo;Every job is thoroughly inspected and installed under our IKO Preferred
              Contractor program. We use the highest quality products that hold up to
              Canada&rsquo;s harshest weather.&rdquo;
              <span className="block mt-2 sm:mt-3 not-italic font-sans font-bold text-[10px] text-accent uppercase tracking-[0.2em]">
                &mdash; Bryan Dewey, Owner
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button href="#quote" size="lg">
                Request a Quote
              </Button>
              <Button href="#services" variant="secondary" size="lg">
                Our Services
              </Button>
            </motion.div>
          </div>

          {/* Right — Glass card (hidden on mobile/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5"
          >
            <div className="relative h-[420px]">
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden border border-white/5">
                <img
                  src="/images/gallery/home-complete-front.png"
                  alt="Premium construction work by Kayan Contracting in Stony Plain, Alberta"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="text-accent font-bold text-[10px] uppercase tracking-[0.4em] mb-2">
                    IKO Preferred Contractor
                  </div>
                  <div className="text-2xl font-light uppercase tracking-tight text-white leading-tight">
                    {company.yearsInBusiness} Years.<br />1,500+ Homeowners.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
