import { motion } from 'framer-motion'
import { Phone, Search, FileText, Hammer, CheckCircle } from 'lucide-react'
import { processSteps } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap = {
  phone: Phone,
  search: Search,
  'file-text': FileText,
  hammer: Hammer,
  'check-circle': CheckCircle,
}

export default function ProcessTimeline() {
  return (
    <section id="process" className="py-(--spacing-section) bg-surface">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <SectionHeading
          label="HOW IT WORKS"
          heading="From Call to Completion"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] sm:-translate-x-px" />

          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Phone
            const num = String(step.step).padStart(2, '0')
            const isEven = i % 2 === 0

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 sm:gap-0 mb-12 last:mb-0 ${
                  isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Number dot on the line */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-xs font-display font-bold copper-glow z-10 shrink-0">
                  {num}
                </div>

                {/* Spacer for mobile (left side) */}
                <div className="w-10 shrink-0 sm:hidden" />

                {/* Card — alternates left/right on desktop */}
                <div className={`flex-1 sm:w-[calc(50%-2rem)] ${
                  isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'
                }`}>
                  <div className="glass-card rounded-xl p-5 sm:p-6 hover:border-accent/30 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}>
                      <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-display font-bold text-white normal-case">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
