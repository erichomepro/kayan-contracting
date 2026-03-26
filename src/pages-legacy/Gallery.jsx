import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import * as Dialog from '@radix-ui/react-dialog'
import {
  X, ChevronLeft, ChevronRight, MapPin, ArrowRight,
  Camera, Grid3X3, Phone, Expand,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'
import { company } from '@/data/company'
import { projects, categories, galleryStats } from '@/data/galleryProjects'

// ─── Animated Counter ───
function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

// ─── 3D Tilt Card ───
function TiltCard({ children, className = '', onClick }) {
  const cardRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / centerY * -8
    const rotateY = (x - centerX) / centerX * 8

    gsap.to(card, {
      rotateX,
      rotateY,
      scale: 1.02,
      boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 40px rgba(217,92,38,0.15)',
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [])

  return (
    <div
      ref={cardRef}
      className={`will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

// ─── Image Carousel inside modal ───
function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const navigate = (dir) => {
    setDirection(dir)
    setCurrent((prev) => {
      const next = prev + dir
      if (next < 0) return images.length - 1
      if (next >= images.length) return 0
      return next
    })
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') navigate(-1)
      if (e.key === 'ArrowRight') navigate(1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  })

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xl bg-black/30">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt={`${title} - Photo ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => navigate(-1)}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-accent/80 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-accent/80 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2 scrollbar-hide">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                i === current
                  ? 'border-accent copper-glow opacity-100'
                  : 'border-white/10 opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-3 right-3 glass-card text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
        {current + 1} / {images.length}
      </div>
    </div>
  )
}

// ─── Project Detail Modal ───
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <Dialog.Root open={!!project} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-start justify-center p-4 sm:p-8 pt-20 sm:pt-12">
              <div className="relative w-full max-w-5xl bg-surface-alt rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                {/* Close */}
                <Dialog.Close asChild>
                  <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-accent transition-all cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>

                {/* Image Carousel */}
                <div className="p-4 sm:p-6">
                  <ImageCarousel images={project.images} title={project.title} />
                </div>

                {/* Project Info */}
                <div className="px-6 sm:px-8 pb-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-white font-display font-bold text-2xl sm:text-3xl normal-case mb-2">
                    {project.title}
                  </h2>

                  <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                    <MapPin className="w-4 h-4 text-accent" />
                    {project.location}
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed max-w-3xl mb-6">
                    {project.description}
                  </p>

                  {/* CTA */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`tel:${company.phoneRaw}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      Get a Similar Quote
                    </a>
                    <Link
                      to="/#quote"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-accent text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all"
                    >
                      Free Estimate
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// ─── Main Gallery Page ───
export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const heroRef = useRef(null)
  const statsRef = useRef(null)

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  // Hero GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.gallery-hero-label', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' })
      .from('.gallery-hero-title', { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .from('.gallery-hero-subtitle', { y: 30, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
      .from('.gallery-hero-count', { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3')
  }, { scope: heroRef })

  // Stats GSAP animation
  useGSAP(() => {
    gsap.from('.stat-item', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
      },
    })
  }, { scope: statsRef })

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-surface overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 hero-dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="gallery-hero-label flex items-center gap-4 justify-center mb-4">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-bold tracking-widest text-[10px] uppercase italic">
              Our Portfolio
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>

          <h1 className="gallery-hero-title text-white font-display tracking-tight leading-none mb-6">
            Project <span className="font-serif italic text-accent">Showcase</span>
          </h1>

          <p className="gallery-hero-subtitle text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            22 years of quality craftsmanship across Parkland County. Every photo is from a real Kayan Contracting job — no stock images, no filters. Just honest work.
          </p>

          <div className="gallery-hero-count inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-full">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-bold">{projects.length} Projects</span>
            <span className="text-white/30">|</span>
            <Grid3X3 className="w-4 h-4 text-accent" />
            <span className="text-white text-sm font-bold">123+ Photos</span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-[72px] z-30 bg-surface-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-accent text-white copper-glow'
                    : 'glass-card text-white/60 hover:text-white hover:border-accent/30'
                }`}
              >
                {cat.label}
                {activeCategory === cat.id && (
                  <span className="ml-2 text-white/80">
                    ({activeCategory === 'all' ? projects.length : filtered.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-12 sm:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <TiltCard
                    className="group relative rounded-xl overflow-hidden cursor-pointer bg-surface-alt border border-white/5 hover:border-accent/20 transition-colors duration-300"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Cover Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                      {/* Photo count badge */}
                      <div className="absolute top-3 right-3 glass-card text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                        <Camera className="w-3 h-3" />
                        {project.images.length}
                      </div>

                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-3 left-3 bg-accent text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                          Featured
                        </div>
                      )}

                      {/* Expand icon on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-14 h-14 rounded-full bg-accent/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                          <Expand className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5" style={{ transform: 'translateZ(30px)' }}>
                      {/* Category + Location */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-widest">
                          {categories.find((c) => c.id === project.category)?.label || project.category}
                        </span>
                        <span className="flex items-center gap-1 text-text-light text-[10px]">
                          <MapPin className="w-3 h-3" />
                          {project.location.split(',')[0]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-white font-display font-bold text-base normal-case mb-2 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description preview */}
                      <p className="text-text-muted text-xs leading-relaxed line-clamp-2 mb-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-sm">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 sm:py-20 bg-surface-dark border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryStats.map((stat) => (
              <div key={stat.label} className="stat-item text-center">
                <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-text-muted text-[10px] font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <SectionHeading
            label="Ready to Start?"
            heading="Your Project Could Be Next"
            subtitle="Every project in this gallery started with a phone call. Get your free, no-obligation estimate today and join 1,500+ satisfied Parkland County homeowners."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${company.phoneRaw}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all copper-glow"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
            <Link
              to="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-accent text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all"
            >
              Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
