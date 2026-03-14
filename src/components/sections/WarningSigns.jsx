import { motion } from 'framer-motion'
import { Wind, Droplets, CloudRain, Clock } from 'lucide-react'
import { warningSignsData } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const iconMap = {
  wind: Wind,
  droplets: Droplets,
  'cloud-rain': CloudRain,
  clock: Clock,
}

export default function WarningSigns() {
  return (
    <section id="warning-signs" className="bg-surface py-(--spacing-section)">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="IS YOUR ROOF TELLING YOU SOMETHING?"
          heading="Common Warning Signs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {warningSignsData.map((sign, i) => {
            const Icon = iconMap[sign.icon] || Wind
            return (
              <motion.div
                key={sign.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card rounded-xl p-6 text-center hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/15 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2 normal-case">{sign.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{sign.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/60 text-lg mb-4 font-display normal-case">
            Not sure? We'll inspect it for free.
          </p>
          <Button href="#quote">Get a Free Inspection</Button>
        </motion.div>
      </div>
    </section>
  )
}
