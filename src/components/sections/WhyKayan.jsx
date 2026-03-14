import { motion } from 'framer-motion'
import { Clock, ShieldCheck, Award, BadgeCheck, MapPin, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const differentiators = [
  {
    icon: Clock,
    title: '22 Years of Experience',
    description:
      "Two decades of Alberta roofs. We've seen every problem and solved it.",
  },
  {
    icon: ShieldCheck,
    title: 'BBB A+ Rating',
    description:
      'Earned through consistent quality and customer satisfaction, year after year.',
  },
  {
    icon: Award,
    title: '10-Year Warranty',
    description:
      'Our workmanship warranty means we stand behind every nail, every shingle.',
  },
  {
    icon: BadgeCheck,
    title: 'IKO Certified',
    description:
      'Factory-trained installers using Canadian-made products built for our climate.',
  },
  {
    icon: MapPin,
    title: 'Locally Owned',
    description:
      'We live here. We work here. Your neighbours are our neighbours.',
  },
  {
    icon: Sparkles,
    title: 'Clean Jobsite',
    description:
      'Magnetic nail sweeps, daily cleanup, and a final walkthrough. Your yard stays pristine.',
  },
]

function Card({ item, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative"
    >
      <div className="glass-card rounded-xl p-6 lg:p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
        {/* Background number */}
        <span className="absolute -top-2 -right-1 font-display font-bold text-[5rem] leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-300">
          {num}
        </span>

        {/* Icon circle */}
        <div className="relative z-10 w-12 h-12 rounded-full mb-5 bg-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <item.icon className="w-6 h-6 text-accent" />
        </div>

        {/* Title */}
        <h3 className="relative z-10 text-lg font-display font-bold text-white mb-2 normal-case">
          {item.title}
        </h3>

        {/* Description */}
        <p className="relative z-10 text-white/60 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhyKayan() {
  return (
    <section id="why-us" className="bg-surface py-(--spacing-section) overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="WHY CHOOSE US"
          heading="Why 500+ Homeowners Trust Kayan"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
