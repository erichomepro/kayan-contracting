'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useSpring } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  Phone,
  AlertTriangle,
  AlertCircle,
  Flame,
  TrendingDown,
} from 'lucide-react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { blogPosts } from '@/data/blogPosts'
import { company } from '@/data/company'

// Helpers

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })
}

function renderBoldText(text) {
  const parts = text.split('**')
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-white font-semibold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  )
}

function RichContent({ content }) {
  const paragraphs = content.split(/\n+/).filter(Boolean)
  return (
    <div className="space-y-4">
      {paragraphs.map((para, i) => {
        if (para.startsWith('- ')) {
          return (
            <ul key={i} className="space-y-2 ml-4">
              {para.split('\n').map((line, j) => (
                <li key={j} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {renderBoldText(line.replace(/^- /, ''))}
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="text-white/70 leading-relaxed text-sm sm:text-base">
            {renderBoldText(para)}
          </p>
        )
      })}
    </div>
  )
}

// Section Renderers

function IntroSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const paragraphs = section.content.split(/\n+/).filter(Boolean)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="my-10 border-l-4 border-accent pl-6"
    >
      {paragraphs.map((para, i) => (
        <p
          key={i}
          className="font-serif italic text-white/80 text-lg sm:text-xl leading-relaxed mb-4 last:mb-0"
        >
          {renderBoldText(para)}
        </p>
      ))}
    </motion.div>
  )
}

function ContentSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="my-10"
    >
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 normal-case tracking-tight">
          {section.title}
        </h2>
      )}
      <RichContent content={section.content} />
      {section.image && (
        <div className="mt-6 group overflow-hidden rounded-xl">
          <img
            src={section.image}
            alt={section.title || 'Article image'}
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
    </motion.div>
  )
}

function ComparisonChartSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="my-12">
      {section.title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-display font-bold text-white mb-6 normal-case tracking-tight"
        >
          {section.title}
        </motion.h2>
      )}

      <div className="hidden md:block overflow-x-auto rounded-xl glass-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-4 py-3 text-accent font-bold text-xs uppercase tracking-widest">Material</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest">Lifespan</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest">Cost/Sq Ft</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest">Hail</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest">Wind</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest">Maintenance</th>
              <th className="text-left px-4 py-3 text-white/50 font-bold text-xs uppercase tracking-widest w-36">Score</th>
            </tr>
          </thead>
          <tbody>
            {section.data.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-4 py-3 text-white font-medium">{row.material}</td>
                <td className="px-4 py-3 text-white/60">{row.lifespan}</td>
                <td className="px-4 py-3 text-white/60">{row.costPerSqFt}</td>
                <td className="px-4 py-3 text-white/60">{row.hailResistance}</td>
                <td className="px-4 py-3 text-white/60">{row.windRating}</td>
                <td className="px-4 py-3 text-white/60">{row.maintenance}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${row.score}%` } : {}}
                        transition={{ duration: 0.8, delay: i * 0.08 + 0.3, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: row.color }}
                      />
                    </div>
                    <span className="text-white/70 text-xs font-bold w-8 text-right">{row.score}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {section.data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-xl p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium text-sm">{row.material}</span>
              <span className="text-white/60 text-xs font-bold">{row.score}/100</span>
            </div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${row.score}%` } : {}}
                transition={{ duration: 0.9, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{ backgroundColor: row.color }}
              />
            </div>
            <div className="grid grid-cols-2 gap-1 text-xs text-white/50">
              <span>Lifespan: <span className="text-white/70">{row.lifespan}</span></span>
              <span>Cost: <span className="text-white/70">{row.costPerSqFt}</span></span>
              <span>Hail: <span className="text-white/70">{row.hailResistance}</span></span>
              <span>Maint: <span className="text-white/70">{row.maintenance}</span></span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function CostCalculatorSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const minAnnual = Math.min(...section.data.map((d) => d.annual))
  const maxAnnual = Math.max(...section.data.map((d) => d.annual))
  const maxUpfront = Math.max(...section.data.map((d) => d.upfront))

  return (
    <div ref={ref} className="my-12">
      {section.title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-display font-bold text-white mb-2 normal-case tracking-tight"
        >
          {section.title}
        </motion.h2>
      )}
      {section.description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-sm mb-6"
        >
          {section.description}
        </motion.p>
      )}

      <div className="glass-card rounded-xl p-5 sm:p-6 space-y-5">
        <div className="flex gap-4 text-xs text-white/50 mb-1">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-white/20 inline-block" /> Upfront Cost
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm bg-accent inline-block" /> Annual Cost
          </span>
        </div>

        {section.data.map((row, i) => {
          const isLowest = row.annual === minAnnual
          const annualPct = (row.annual / maxAnnual) * 100
          const upfrontPct = (row.upfront / maxUpfront) * 100

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-lg p-4 ${isLowest ? 'ring-1 ring-accent/40 bg-accent/5' : 'bg-white/5'}`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium text-sm">{row.material}</span>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-white/50">${row.upfront.toLocaleString()} upfront</span>
                  <span className={`font-bold ${isLowest ? 'text-accent' : 'text-white/70'}`}>
                    ${row.annual}/yr
                    {isLowest && (
                      <span className="ml-1 text-accent text-[10px] uppercase tracking-widest"> Best</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="mb-1.5">
                <div className="text-[10px] text-white/40 mb-1">Upfront Cost</div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${upfrontPct}%` } : {}}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-white/30"
                  />
                </div>
              </div>

              <div>
                <div className="text-[10px] text-white/40 mb-1">Annual Cost</div>
                <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${annualPct}%` } : {}}
                    transition={{ duration: 0.9, delay: i * 0.1 + 0.35, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: isLowest ? 'var(--color-accent)' : 'rgba(255,255,255,0.25)' }}
                  />
                </div>
              </div>

              <div className="mt-2 text-[10px] text-white/40">
                {row.lifespan}-year lifespan &middot; ${(row.upfront / row.lifespan).toFixed(0)}/yr effective
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

const severityConfig = {
  moderate: {
    label: 'Moderate',
    bg: 'bg-yellow-500/15',
    text: 'text-yellow-400',
    ring: 'ring-yellow-500/30',
    Icon: AlertTriangle,
  },
  high: {
    label: 'High',
    bg: 'bg-orange-500/15',
    text: 'text-orange-400',
    ring: 'ring-orange-500/30',
    Icon: AlertCircle,
  },
  critical: {
    label: 'Critical',
    bg: 'bg-red-500/15',
    text: 'text-red-400',
    ring: 'ring-red-500/30',
    Icon: Flame,
  },
}

function WarningSignsSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className="my-12">
      {section.title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-display font-bold text-white mb-6 normal-case tracking-tight"
        >
          {section.title}
        </motion.h2>
      )}

      <div className="space-y-4">
        {section.signs.map((sign, i) => {
          const cfg = severityConfig[sign.severity] || severityConfig.moderate
          const { Icon } = cfg

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -28 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-xl p-5 flex gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <span className="text-accent font-bold text-sm">{sign.number}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-white font-bold text-base normal-case">{sign.title}</h3>
                  <span
                    className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ring-1 ${cfg.bg} ${cfg.text} ${cfg.ring}`}
                  >
                    <Icon className="w-3 h-3" />
                    {cfg.label}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">{sign.description}</p>
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest flex-shrink-0 mt-0.5">
                    What to do:
                  </span>
                  <span className="text-white/70">{sign.action}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function SeverityChartSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const tiers = [
    {
      label: 'Monitor',
      color: 'bg-green-500',
      ring: 'ring-green-500/30',
      text: 'text-green-400',
      description: 'Age-related wear, minor granule loss, small blistering. Schedule inspection within 6 months.',
    },
    {
      label: 'Act Soon',
      color: 'bg-accent',
      ring: 'ring-accent/30',
      text: 'text-accent',
      description: 'Curling shingles, flashing issues, ice dams, rising energy bills. Book inspection within weeks.',
    },
    {
      label: 'Emergency',
      color: 'bg-red-500',
      ring: 'ring-red-500/30',
      text: 'text-red-400',
      description: 'Active leaks, daylight through attic, sagging roof deck, structural damage. Call today.',
    },
  ]

  return (
    <div ref={ref} className="my-12">
      {section.title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-display font-bold text-white mb-2 normal-case tracking-tight"
        >
          {section.title}
        </motion.h2>
      )}
      {section.description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-sm mb-6"
        >
          {section.description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
        className="h-3 rounded-full overflow-hidden flex mb-6"
      >
        <div className="flex-1 bg-green-500" />
        <div className="flex-1 bg-accent" />
        <div className="flex-1 bg-red-500" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {tiers.map((tier, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
            className={`glass-card rounded-xl p-5 ring-1 ${tier.ring}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full ${tier.color}`} />
              <span className={`font-bold text-sm uppercase tracking-widest ${tier.text}`}>{tier.label}</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">{tier.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ThermalComparisonSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="my-12"
    >
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 normal-case tracking-tight">
          {section.title}
        </h2>
      )}
      {section.description && (
        <p className="text-white/60 text-sm mb-5">{section.description}</p>
      )}

      <div className="rounded-2xl overflow-hidden glass-card">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={section.normalImage}
              alt="Normal photo"
              style={{ objectFit: 'cover' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={section.thermalImage}
              alt="Thermal / FLIR image"
              style={{ objectFit: 'cover', filter: 'hue-rotate(0deg)' }}
            />
          }
          style={{ height: '420px', width: '100%' }}
        />
        <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 text-xs text-white/50">
          <span>Normal Photo</span>
          <span>Drag to compare</span>
          <span>FLIR Thermal</span>
        </div>
      </div>
    </motion.div>
  )
}

function SavingsChartSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const maxVal = Math.max(...section.data.flatMap((d) => [d.before, d.after]))

  return (
    <div ref={ref} className="my-12">
      {section.title && (
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-display font-bold text-white mb-2 normal-case tracking-tight"
        >
          {section.title}
        </motion.h2>
      )}
      {section.description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-sm mb-6"
        >
          {section.description}
        </motion.p>
      )}

      <div className="flex gap-4 text-xs text-white/50 mb-4">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-red-500/60 inline-block" /> Before
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-green-500/80 inline-block" /> After
        </span>
      </div>

      <div className="glass-card rounded-xl p-5 space-y-6">
        {section.data.map((row, i) => {
          const savings = row.before - row.after
          const savingsPct = Math.round((savings / row.before) * 100)
          const beforePct = (row.before / maxVal) * 100
          const afterPct = (row.after / maxVal) * 100

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/80 text-sm font-medium">{row.category}</span>
                <span className="text-green-400 text-xs font-bold flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  Save {row.unit}{savings.toLocaleString()} ({savingsPct}%)
                </span>
              </div>

              <div className="mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40 w-10 text-right">Before</span>
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${beforePct}%` } : {}}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.2, ease: 'easeOut' }}
                      className="h-full rounded-full bg-red-500/60"
                    />
                  </div>
                  <span className="text-[10px] text-white/50 w-16 text-right">
                    {row.unit}{row.before.toLocaleString()}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40 w-10 text-right">After</span>
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${afterPct}%` } : {}}
                      transition={{ duration: 0.9, delay: i * 0.1 + 0.35, ease: 'easeOut' }}
                      className="h-full rounded-full bg-green-500/80"
                    />
                  </div>
                  <span className="text-[10px] text-white/50 w-16 text-right">
                    {row.unit}{row.after.toLocaleString()}
                  </span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

function CtaSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="my-12 glass-card copper-glow rounded-2xl p-8 sm:p-10 text-center"
    >
      {section.title && (
        <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 normal-case tracking-tight">
          {section.title}
        </h2>
      )}
      {section.content && (
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto">
          {section.content}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href={section.buttonLink || '/#quote'}
          className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
        >
          {section.buttonText || 'Get Started'}
          <ChevronRight className="w-4 h-4" />
        </Link>
        <a
          href={`tel:${company.phoneRaw}`}
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors duration-200"
        >
          <Phone className="w-4 h-4 text-accent" />
          {company.phone}
        </a>
      </div>
    </motion.div>
  )
}

// Section dispatcher

function ArticleSection({ section }) {
  switch (section.type) {
    case 'intro':
      return <IntroSection section={section} />
    case 'content':
      return <ContentSection section={section} />
    case 'comparison-chart':
      return <ComparisonChartSection section={section} />
    case 'cost-calculator':
      return <CostCalculatorSection section={section} />
    case 'warning-signs':
      return <WarningSignsSection section={section} />
    case 'severity-chart':
      return <SeverityChartSection section={section} />
    case 'thermal-comparison':
      return <ThermalComparisonSection section={section} />
    case 'savings-chart':
      return <SavingsChartSection section={section} />
    case 'cta':
      return <CtaSection section={section} />
    default:
      return null
  }
}

// Reading Progress Bar

function ReadingProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[100]"
    />
  )
}

// Related Post Card

function RelatedPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group glass-card rounded-xl overflow-hidden hover:ring-1 hover:ring-accent/30 transition-all duration-200"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
        <h3 className="text-white font-bold text-sm mt-1 mb-2 normal-case leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-white/40 text-xs">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </div>
      </div>
    </Link>
  )
}

// Main Blog Post Page

export default function BlogPostClient({ postId }) {
  const post = blogPosts.find((p) => p.id === postId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [postId])

  if (!post) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center pt-28">
        <div className="text-center px-6">
          <h1 className="text-4xl font-display font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-white/50 mb-8">
            The article you&apos;re looking for doesn&apos;t exist or may have moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.category === post.category || p.relatedService === post.relatedService)
    .slice(0, 2)

  const otherPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3 - relatedPosts.length)
  const suggestedPosts = [...relatedPosts, ...otherPosts].slice(0, 3)

  return (
    <>
      <ReadingProgressBar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/20" />
          <div className="absolute inset-0 hero-dot-grid opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-12 sm:pb-16 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-accent text-xs font-medium transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full ring-1 ring-accent/30">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4 normal-case tracking-tight">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                {post.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-white/50 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 sm:py-16 bg-surface">
        <article className="max-w-3xl mx-auto px-6">
          {post.sections.map((section, i) => (
            <ArticleSection key={i} section={section} />
          ))}
        </article>
      </section>

      {/* Tags + Share */}
      <section className="bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {suggestedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface-dark border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-xl font-display font-bold text-white mb-8 normal-case tracking-tight text-center">
              More Articles You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedPosts.map((p) => (
                <RelatedPostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
