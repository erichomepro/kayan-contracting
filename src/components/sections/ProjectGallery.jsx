import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, MapPin, Calendar } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = ['All', 'Residential', 'Commercial', 'Metal Roofing', 'Repairs & Extras']

const projects = [
  {
    id: 1,
    src: '/images/gallery/home-complete-front.png',
    title: 'Complete Roof & Exterior',
    category: 'Residential',
    location: 'Parkland County, AB',
    year: '2025',
    desc: 'Full roof replacement with IKO Dynasty architectural shingles, stone accents, and complete soffit & fascia — a true showpiece.',
  },
  {
    id: 2,
    src: '/images/gallery/metal-roof-acreage.png',
    title: 'Standing Seam Metal Roof',
    category: 'Metal Roofing',
    location: 'Parkland County, AB',
    year: '2025',
    desc: 'Standing seam metal roof on acreage property. Built to handle Alberta winters for 50+ years with zero maintenance.',
  },
  {
    id: 3,
    src: '/images/gallery/pyramid-roof-complex.png',
    title: 'Complex Pyramid Roofline',
    category: 'Residential',
    location: 'Lac Ste. Anne, AB',
    year: '2025',
    desc: 'Challenging steep pyramid roof requiring precision shingling and custom flashing. This is where experience matters.',
  },
  {
    id: 4,
    src: '/images/gallery/mcdonalds-color.png',
    title: "McDonald's — Commercial Build",
    category: 'Commercial',
    location: 'Stony Plain, AB',
    year: '2024',
    desc: 'Full commercial roofing and exterior cladding for a new McDonald\'s location. Architectural render brought to life.',
  },
  {
    id: 5,
    src: '/images/gallery/skylight-shingle.png',
    title: 'Skylight Integration',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    year: '2025',
    desc: 'Precision skylight flashing on a new shingle roof. Proper integration prevents the #1 source of roof leaks.',
  },
  {
    id: 6,
    src: '/images/gallery/crew-skylight-install.png',
    title: 'Skylight Frame Install',
    category: 'Repairs & Extras',
    location: 'Parkland County, AB',
    year: '2025',
    desc: 'Our crew framing a skylight opening on fresh roof deck. Every cut is measured twice and sealed with precision.',
  },
  {
    id: 7,
    src: '/images/gallery/soffit-after.png',
    title: 'Seamless Soffit & Fascia',
    category: 'Repairs & Extras',
    location: 'Stony Plain, AB',
    year: '2025',
    desc: 'Fresh white aluminum soffits with venting installed. Clean lines, proper ventilation, and zero maintenance.',
  },
  {
    id: 8,
    src: '/images/gallery/shingle-closeup.png',
    title: 'IKO Dynasty Shingles',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    year: '2024',
    desc: 'Close-up of IKO Dynasty architectural shingles — Canadian-made for Canadian weather. Up to 50-year warranty.',
  },
  {
    id: 9,
    src: '/images/gallery/roof-aerial-view.png',
    title: 'Aerial Roof Inspection',
    category: 'Residential',
    location: 'Stony Plain, AB',
    year: '2025',
    desc: 'Completed residential roof from above. Every ridge, valley, and flashing detail visible — quality you can verify.',
  },
  {
    id: 10,
    src: '/images/gallery/commercial-soffit.png',
    title: "McDonald's — Soffit Detail",
    category: 'Commercial',
    location: 'Stony Plain, AB',
    year: '2024',
    desc: 'Commercial soffit and exterior paneling detail on the McDonald\'s project. Precision meets commercial-grade durability.',
  },
  {
    id: 11,
    src: '/images/gallery/ice-shield-deck.png',
    title: 'Ice & Water Shield Install',
    category: 'Residential',
    location: 'Parkland County, AB',
    year: '2025',
    desc: 'Ice and water shield membrane on fresh decking before shingles. This hidden layer is your roof\'s first line of defense.',
  },
  {
    id: 12,
    src: '/images/gallery/skylight-metal-roof.png',
    title: 'Metal Roof Skylight',
    category: 'Metal Roofing',
    location: 'Spruce Grove, AB',
    year: '2025',
    desc: 'Skylight installed on a standing seam metal roof. Proper curb-mount flashing ensures a watertight seal for decades.',
  },
]

export default function ProjectGallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active)

  const lightboxIndex = lightbox !== null
    ? filtered.findIndex((p) => p.id === lightbox)
    : -1

  const navigateLightbox = (dir) => {
    if (lightboxIndex < 0) return
    const next = lightboxIndex + dir
    if (next >= 0 && next < filtered.length) {
      setLightbox(filtered[next].id)
    }
  }

  return (
    <section id="gallery" className="py-(--spacing-section) bg-surface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <SectionHeading
          label="OUR WORK"
          heading="Project Gallery"
          subtitle="22 years of quality craftsmanship across Parkland County — residential, commercial, and everything in between."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`
                px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer
                ${active === cat
                  ? 'bg-accent text-white copper-glow'
                  : 'glass-card text-white/60 hover:text-white hover:border-accent/30'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staggered image grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer ${
                  i % 3 === 1 ? 'lg:translate-y-12' : ''
                }`}
                onClick={() => setLightbox(project.id)}
              >
                {/* Image */}
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-white font-display font-bold text-base mb-1 normal-case">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3 text-white/50 text-xs">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.year}
                    </span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 glass-card text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Dialog.Root open={lightbox !== null} onOpenChange={(open) => !open && setLightbox(null)}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/90 z-50 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
              {lightboxIndex >= 0 && (
                <div className="relative max-w-5xl w-full">
                  <Dialog.Close className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors">
                    <X className="w-8 h-8" />
                  </Dialog.Close>

                  {lightboxIndex > 0 && (
                    <button
                      onClick={() => navigateLightbox(-1)}
                      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-14 text-white/50 hover:text-white transition-colors z-10"
                    >
                      <ArrowLeft className="w-8 h-8" />
                    </button>
                  )}
                  {lightboxIndex < filtered.length - 1 && (
                    <button
                      onClick={() => navigateLightbox(1)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-14 text-white/50 hover:text-white transition-colors z-10"
                    >
                      <ArrowRight className="w-8 h-8" />
                    </button>
                  )}

                  <img
                    src={filtered[lightboxIndex].src}
                    alt={filtered[lightboxIndex].title}
                    className="w-full max-h-[70vh] object-contain rounded-xl"
                  />

                  <div className="mt-4 text-center">
                    <h3 className="text-white font-display font-bold text-lg normal-case">
                      {filtered[lightboxIndex].title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 max-w-2xl mx-auto">
                      {filtered[lightboxIndex].desc}
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-2 text-white/40 text-xs">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {filtered[lightboxIndex].location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {filtered[lightboxIndex].year}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  )
}
