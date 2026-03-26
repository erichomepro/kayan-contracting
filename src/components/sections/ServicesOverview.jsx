'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Shield, Wrench, Droplets, Layers, Building2, ArrowRight } from 'lucide-react'
import { services } from '@/data/company'
import SectionHeading from '@/components/ui/SectionHeading'

const iconMap = {
  home: Home,
  shield: Shield,
  wrench: Wrench,
  droplets: Droplets,
  layers: Layers,
  building: Building2,
}

export default function ServicesOverview() {
  return (
    <section id="services" className="relative py-(--spacing-section) bg-surface overflow-hidden">
      {/* Logo character watermark */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'url(/images/brand/logo-sketch.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right -2% center',
          backgroundSize: 'auto 80%',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          label="WHAT WE DO"
          heading="Our Construction Services"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Home
            const num = String(i + 1).padStart(2, '0')
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link
                  href={`/services/${service.id}`}
                  className="group relative glass-card rounded-xl p-6 hover:border-accent/30 transition-all duration-300 block h-full"
                >
                  {/* Background number */}
                  <span className="absolute -top-2 -right-1 font-display font-bold text-[5rem] leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors duration-300">
                    {num}
                  </span>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="text-lg font-display font-bold text-white mb-2 normal-case">{service.title}</h3>

                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
