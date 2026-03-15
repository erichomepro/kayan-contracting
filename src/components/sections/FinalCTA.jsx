import { motion } from 'framer-motion'
import { Phone, ShieldCheck, FileCheck, Award } from 'lucide-react'
import { company } from '@/data/company'
import Button from '@/components/ui/Button'

const trustItems = [
  { icon: ShieldCheck, text: `BBB ${company.bbbRating}` },
  { icon: FileCheck, text: 'Licensed & Insured' },
  { icon: Award, text: `${company.workmanshipWarranty} Warranty` },
]

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative bg-surface py-(--spacing-section) overflow-hidden"
    >
      {/* Copper glow background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="block text-[10px] font-bold uppercase tracking-widest text-accent mb-6 font-display"
        >
          GET STARTED
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-display mb-4"
        >
          Ready to Protect{' '}
          <span className="font-serif italic text-accent lowercase">Your Home</span>?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/55 text-lg md:text-xl mb-8"
        >
          Get your free, no-obligation project assessment today.
        </motion.p>

        {/* Phone number */}
        <motion.a
          href={`tel:${company.phoneRaw}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-3 text-white text-3xl md:text-4xl font-display font-bold mb-8 hover:text-accent transition-colors"
        >
          <Phone className="w-8 h-8" />
          {company.phone}
        </motion.a>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4"
        >
          <Button
            as="a"
            href={`tel:${company.phoneRaw}`}
            size="lg"
            className="copper-glow"
          >
            Get My Free Estimate
          </Button>
        </motion.div>

        {/* Response time */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white/30 text-sm mb-10"
        >
          We respond within 2 hours
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/40">
              <item.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
