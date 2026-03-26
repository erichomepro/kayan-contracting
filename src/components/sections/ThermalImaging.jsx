'use client'

import { motion } from 'framer-motion'
import { Eye, Thermometer, Zap, Wind, Droplets, ShieldCheck, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const detections = [
  {
    icon: Droplets,
    title: 'Roof & Wall Leaks',
    desc: 'Pinpoint exact moisture entry points without destructive testing — even behind walls and under membranes.',
  },
  {
    icon: Thermometer,
    title: 'Insulation Deficiencies',
    desc: 'See exactly where insulation has degraded, shifted, or is missing entirely — the #1 cause of heat loss.',
  },
  {
    icon: Zap,
    title: 'Electrical Hot Spots',
    desc: 'Detect overloaded circuits, faulty connections, and fire risks before they become emergencies.',
  },
  {
    icon: Wind,
    title: 'Air Circulation Issues',
    desc: 'Identify poor ventilation, drafts, and air leakage that drives up energy bills and causes condensation.',
  },
  {
    icon: Droplets,
    title: 'Foundation Moisture',
    desc: 'Reveal water intrusion paths at the foundation level before they cause structural damage or mold.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Verify installations are done right. We scan after every job to ensure zero moisture issues remain.',
  },
]

export default function ThermalImaging() {
  return (
    <section id="thermal" className="relative py-(--spacing-section) bg-surface overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 hero-dot-grid opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-accent text-[10px] font-bold tracking-widest uppercase mb-6">
              <Eye className="w-3.5 h-3.5" />
              Exclusive Technology
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-display mb-4"
          >
            We See What Others{' '}
            <span className="font-serif italic text-accent lowercase">Miss</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            Certified in infrared thermography with{' '}
            <span className="text-accent font-semibold">22 years of construction expertise</span>,
            we combine cutting-edge thermal imaging with decades of hands-on experience on thousands of
            construction sites. We find the problems others can&rsquo;t see — and fix them right.
          </motion.p>
        </div>

        {/* Thermal demo visual + explanation */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">

          {/* Left: Thermal visualization */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden aspect-[4/3] glass-card">
              <div className="absolute inset-0 thermal-gradient opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="glass-card rounded-lg px-3 py-1.5">
                    <span className="text-white text-xs font-mono">FLIR Thermal</span>
                  </div>
                  <div className="glass-card rounded-lg px-3 py-1.5">
                    <span className="text-white text-xs font-mono">-20°C to 150°C</span>
                  </div>
                </div>

                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
                  <span className="text-white text-[10px] font-mono">HOT</span>
                  <div className="w-3 h-32 rounded-full" style={{
                    background: 'linear-gradient(to bottom, #fff, #ffd600, #ff6f00, #e53935, #c2185b, #6b1fa2, #1b0e6b)'
                  }} />
                  <span className="text-white text-[10px] font-mono">COLD</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-red-500/30">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-white text-xs font-semibold">Heat Loss Detected</span>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/30">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-white text-xs font-semibold">Moisture Present</span>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-accent text-white rounded-xl px-4 py-3 copper-glow"
            >
              <p className="text-xs font-semibold">Infrared Certified</p>
              <p className="text-[10px] opacity-80">Level II Thermographer</p>
            </motion.div>
          </motion.div>

          {/* Right: Key message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-white font-display font-bold text-xl sm:text-2xl mb-4 normal-case">
              Thermal imaging reveals hidden problems before they become expensive disasters
            </h3>

            <p className="text-white/55 leading-relaxed mb-6">
              Our expertise on thousands of construction sites has given us the wisdom and knowledge
              to find problematic areas and bring them to light. A standard visual inspection only
              catches what&rsquo;s visible on the surface — our infrared cameras detect temperature
              differentials that reveal moisture, heat loss, and structural issues hidden inside your
              walls, roof, and foundation.
            </p>

            <p className="text-white/55 leading-relaxed mb-8">
              We want to make sure your project is going to be one you&rsquo;re most proud of for
              years to come. That&rsquo;s why every inspection includes a full thermal scan — so you
              know exactly what&rsquo;s happening with your home, not just what you can see.
            </p>

            <Button href="#quote" className="copper-glow">
              Book a Thermal Inspection
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>

        {/* Detection grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {detections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card rounded-xl p-5 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-3 group-hover:bg-accent/25 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h4 className="text-white font-display font-semibold text-sm mb-1.5 normal-case">{item.title}</h4>
              <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}