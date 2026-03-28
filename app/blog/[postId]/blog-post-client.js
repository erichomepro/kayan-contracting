'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import Link from 'next/link'
import { motion, useInView, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  ChevronDown,
  Phone,
  AlertTriangle,
  AlertCircle,
  Flame,
  TrendingDown,
  Share2,
  Facebook,
  Printer,
  CheckCircle2,
  Shield,
  Award,
  MapPin,
  List,
} from 'lucide-react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { blogPosts } from '@/data/blogPosts'
import { company } from '@/data/company'

// ===== Helpers =====

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

/** Extract content section titles for table of contents */
function extractTocEntries(sections) {
  return sections
    .filter((s) => s.title && s.type !== 'cta')
    .map((s, i) => ({
      id: `section-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`,
      title: s.title,
      index: i,
    }))
}

// ===== Rich Content Renderer =====

function RichContent({ content }) {
  const paragraphs = content.split(/\n+/).filter(Boolean)
  return (
    <div className="space-y-5">
      {paragraphs.map((para, i) => {
        // Bullet list
        if (para.startsWith('- ')) {
          return (
            <ul key={i} className="space-y-2.5 ml-1">
              {para.split('\n').filter(Boolean).map((line, j) => (
                <li key={j} className="flex items-start gap-3 text-white/70 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                  <span>{renderBoldText(line.replace(/^- /, ''))}</span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="text-white/70 leading-[1.85] text-[0.95rem] sm:text-base">
            {renderBoldText(para)}
          </p>
        )
      })}
    </div>
  )
}

// ===== Table of Contents =====

function TableOfContents({ entries }) {
  const [isOpen, setIsOpen] = useState(false)

  if (entries.length < 3) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="my-10 glass-card rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <List className="w-4 h-4 text-accent" />
          <span className="text-white font-bold text-sm uppercase tracking-widest">
            Table of Contents
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-4 h-4 text-white/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <nav className="px-6 pb-5 border-t border-white/5 pt-4">
              <ol className="space-y-2">
                {entries.map((entry, i) => (
                  <li key={entry.id}>
                    <a
                      href={`#${entry.id}`}
                      className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors group text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-accent/50 group-hover:text-accent font-bold text-xs w-5 text-right">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{entry.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ===== Section Renderers =====

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
      className="my-10 relative"
    >
      <div className="border-l-4 border-accent pl-6 sm:pl-8">
        {paragraphs.map((para, i) => (
          <p
            key={i}
            className={`font-serif italic text-white/80 text-lg sm:text-xl leading-relaxed mb-4 last:mb-0 ${
              i === 0 ? 'first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:not-italic first-letter:font-display' : ''
            }`}
          >
            {renderBoldText(para)}
          </p>
        ))}
      </div>
    </motion.div>
  )
}

function SectionHeading({ title, id }) {
  return (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-display font-bold text-white mb-5 normal-case tracking-tight flex items-center gap-4 scroll-mt-24"
    >
      <span className="w-1 h-8 bg-accent rounded-full flex-shrink-0" />
      {title}
    </h2>
  )
}

function ContentSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="my-10"
    >
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
      <RichContent content={section.content} />
      {section.image && (
        <div className="mt-8 group overflow-hidden rounded-xl ring-1 ring-white/10">
          <img
            src={section.image}
            alt={section.title || 'Article image'}
            loading="lazy"
            className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
    </motion.div>
  )
}

function ComparisonChartSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  return (
    <div ref={ref} className="my-12">
      {section.title && <SectionHeading title={section.title} id={sectionId} />}

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl glass-card ring-1 ring-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="text-left px-5 py-4 text-accent font-bold text-xs uppercase tracking-widest">Material</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest">Lifespan</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest">Cost/Sq Ft</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest">Hail</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest">Wind</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest">Maintenance</th>
              <th className="text-left px-5 py-4 text-white/50 font-bold text-xs uppercase tracking-widest w-36">Score</th>
            </tr>
          </thead>
          <tbody>
            {section.data.map((row, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="border-b border-white/5 hover:bg-white/[0.07] transition-colors"
              >
                <td className="px-5 py-4 text-white font-medium">{row.material}</td>
                <td className="px-5 py-4 text-white/60">{row.lifespan}</td>
                <td className="px-5 py-4 text-white/60">{row.costPerSqFt}</td>
                <td className="px-5 py-4 text-white/60">{row.hailResistance}</td>
                <td className="px-5 py-4 text-white/60">{row.windRating}</td>
                <td className="px-5 py-4 text-white/60">{row.maintenance}</td>
                <td className="px-5 py-4">
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

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {section.data.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-xl p-4 ring-1 ring-white/10"
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
            <div className="grid grid-cols-2 gap-1.5 text-xs text-white/50">
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
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  const minAnnual = Math.min(...section.data.map((d) => d.annual))
  const maxAnnual = Math.max(...section.data.map((d) => d.annual))
  const maxUpfront = Math.max(...section.data.map((d) => d.upfront))

  return (
    <div ref={ref} className="my-12">
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
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

      <div className="glass-card rounded-xl p-5 sm:p-6 space-y-5 ring-1 ring-white/10">
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
              className={`rounded-lg p-4 transition-colors ${isLowest ? 'ring-1 ring-accent/40 bg-accent/5' : 'bg-white/5 hover:bg-white/[0.07]'}`}
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
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  return (
    <div ref={ref} className="my-12">
      {section.title && <SectionHeading title={section.title} id={sectionId} />}

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
              className="glass-card rounded-xl p-5 flex gap-4 ring-1 ring-white/10 hover:ring-accent/20 transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-full bg-accent/15 flex items-center justify-center">
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
                <div className="flex items-start gap-2 text-sm bg-accent/5 rounded-lg p-3 ring-1 ring-accent/15">
                  <span className="text-accent font-bold text-xs uppercase tracking-widest flex-shrink-0 mt-0.5">
                    Action:
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
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

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
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
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
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="my-12"
    >
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
      {section.description && (
        <p className="text-white/60 text-sm mb-5">{section.description}</p>
      )}

      <div className="rounded-2xl overflow-hidden glass-card ring-1 ring-white/10">
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
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  const maxVal = Math.max(...section.data.flatMap((d) => [d.before, d.after]))

  return (
    <div ref={ref} className="my-12">
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
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

      <div className="glass-card rounded-xl p-5 space-y-6 ring-1 ring-white/10">
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

// ===== FAQ Accordion =====

function FaqAccordion({ questions }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-3">
      {questions.map((item, i) => (
        <div key={i} className="glass-card rounded-xl ring-1 ring-white/10 overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-medium text-sm pr-4">{item.q}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-4 h-4 text-accent" />
            </motion.div>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-4 border-t border-white/5 pt-3">
                  <p className="text-white/60 text-sm leading-relaxed">{item.a}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

/** Detect FAQ section and render as accordion instead of plain text */
function FaqContentSection({ section }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const sectionId = section.title
    ? `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
    : undefined

  // Parse **Question**\nAnswer pairs
  const questions = useMemo(() => {
    const pairs = []
    const lines = section.content.split('\n').filter(Boolean)
    for (let i = 0; i < lines.length; i++) {
      const match = lines[i].match(/^\*\*(.+?)\*\*$/)
      if (match && i + 1 < lines.length) {
        pairs.push({ q: match[1], a: lines[i + 1] })
        i++ // skip the answer line
      }
    }
    return pairs
  }, [section.content])

  if (questions.length === 0) {
    return <ContentSection section={section} />
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="my-12"
    >
      {section.title && <SectionHeading title={section.title} id={sectionId} />}
      <FaqAccordion questions={questions} />
    </motion.div>
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
      className="my-14 relative overflow-hidden rounded-2xl"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-surface-alt to-accent/10" />
      <div className="absolute inset-0 glass-card" />

      <div className="relative p-8 sm:p-10 text-center copper-glow rounded-2xl">
        {section.title && (
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-3 normal-case tracking-tight">
            {section.title}
          </h2>
        )}
        {section.content && (
          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            {section.content}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href={section.buttonLink || '/#quote'}
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
          >
            {section.buttonText || 'Get Started'}
            <ChevronRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${company.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-bold text-sm px-8 py-3.5 rounded-lg transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-accent" />
            {company.phone}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

// ===== Section Dispatcher =====

function ArticleSection({ section }) {
  // Detect FAQ sections and render as accordion
  const isFaq = section.type === 'content' && section.title &&
    section.title.toLowerCase().includes('frequently asked')

  if (isFaq) return <FaqContentSection section={section} />

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

// ===== Reading Progress Bar =====

function ReadingProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-accent z-[100]"
    />
  )
}

// ===== Share Bar =====

function ShareBar({ post }) {
  const [copied, setCopied] = useState(false)

  function handleShare() {
    const url = `https://www.kayancontracting.ca/blog/${post.id}`
    if (navigator.share) {
      navigator.share({ title: post.title, url }).catch(() => {})
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }).catch(() => {})
    }
  }

  function handleFacebook() {
    const url = encodeURIComponent(`https://www.kayancontracting.ca/blog/${post.id}`)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
  }

  function handlePrint() {
    window.print()
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-white/40 text-xs uppercase tracking-widest font-bold mr-1">Share</span>
      <button
        onClick={handleFacebook}
        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook className="w-4 h-4 text-white/50" />
      </button>
      <button
        onClick={handleShare}
        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors relative"
        aria-label="Copy link"
      >
        <Share2 className="w-4 h-4 text-white/50" />
        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -top-8 left-1/2 -translate-x-1/2 text-accent text-[10px] font-bold whitespace-nowrap bg-surface-dark px-2 py-1 rounded"
            >
              Copied!
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <button
        onClick={handlePrint}
        className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
        aria-label="Print article"
      >
        <Printer className="w-4 h-4 text-white/50" />
      </button>
    </div>
  )
}

// ===== Author / Company Card =====

function AuthorCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-6 sm:p-8 ring-1 ring-white/10"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Logo / Avatar */}
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 ring-2 ring-accent/30">
          <span className="text-accent font-display font-bold text-2xl">K</span>
        </div>

        <div className="flex-1">
          <h3 className="text-white font-bold text-lg normal-case mb-1">{company.name}</h3>
          <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
            {company.tagline}
          </p>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Kayan Contracting has been protecting Parkland County homes since {company.foundedYear}. As an IKO Preferred Contractor with a BBB A+ rating, we bring 22 years of experience to every project. FLIR thermal imaging included with every inspection -- no charge, no obligation.
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            {company.certifications.map((cert) => (
              <span
                key={cert.name}
                className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50 bg-white/5 px-3 py-1.5 rounded-full ring-1 ring-white/10"
              >
                {cert.name === 'IKO Preferred Contractor' && <Award className="w-3 h-3 text-accent" />}
                {cert.name === 'BBB A+ Rated' && <Shield className="w-3 h-3 text-accent" />}
                {cert.name === 'Licensed & Insured' && <CheckCircle2 className="w-3 h-3 text-accent" />}
                {cert.name === 'WCB Covered' && <Shield className="w-3 h-3 text-accent" />}
                {cert.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent" />
              {company.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {company.address.city}, {company.address.province}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ===== Related Post Card =====

function RelatedPostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group glass-card rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-accent/30 transition-all duration-300 hover:translate-y-[-2px]"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
        <h3 className="text-white font-bold text-sm mt-1.5 mb-2.5 normal-case leading-snug group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>
        <div className="flex items-center gap-3 text-white/40 text-xs">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {formatDate(post.publishDate)}
          </span>
        </div>
      </div>
    </Link>
  )
}

// ===== Main Blog Post Page =====

export default function BlogPostClient({ postId }) {
  const post = blogPosts.find((p) => p.id === postId)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [postId])

  const tocEntries = useMemo(() => (post ? extractTocEntries(post.sections) : []), [post])

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

      {/* === Hero === */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/40 to-transparent" />
          <div className="absolute inset-0 hero-dot-grid opacity-20" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pb-14 sm:pb-20 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-accent text-xs font-medium transition-colors mb-8 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5">
              <span className="inline-flex items-center gap-1.5 bg-accent/20 text-accent text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full ring-1 ring-accent/30">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-white leading-[1.1] mb-5 normal-case tracking-tight">
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-7 max-w-2xl font-serif italic">
                {post.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-5 text-white/50 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-accent" />
                {formatDate(post.publishDate)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-accent" />
                {post.readTime}
              </span>
              <span className="w-px h-3.5 bg-white/20 hidden sm:block" />
              <span className="text-white/40 hidden sm:inline">
                By {company.shortName}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Article Body === */}
      <section className="py-12 sm:py-16 bg-surface">
        <article className="max-w-3xl mx-auto px-6">
          {/* Table of Contents */}
          <TableOfContents entries={tocEntries} />

          {/* Sections */}
          {post.sections.map((section, i) => (
            <ArticleSection key={i} section={section} />
          ))}
        </article>
      </section>

      {/* === Tags + Share === */}
      <section className="bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-3 py-1.5 rounded-full ring-1 ring-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ShareBar post={post} />
          </div>
        </div>
      </section>

      {/* === Author Card === */}
      <section className="bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <AuthorCard />
        </div>
      </section>

      {/* === Related Posts === */}
      {suggestedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface-dark border-t border-white/5">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 normal-case tracking-tight">
                Continue Reading
              </h2>
              <p className="text-white/40 text-sm">More expert advice from the Kayan team</p>
            </div>
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
