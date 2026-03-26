'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, ArrowLeft, MapPin } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'
import SectionHeading from '@/components/ui/SectionHeading'

const categories = ['All', 'Residential', 'Commercial', 'Metal Products', 'Exteriors & More']

const projects = [
  {
    id: 1,
    src: '/images/gallery/real/project-98.jpg',
    title: 'Complex Pyramid Roofline',
    category: 'Residential',
    location: 'Lac Ste. Anne, AB',
    desc: 'Steep pyramid roof with precision shingling and a custom weather vane. This is where 22 years of experience matters — every cut, every angle, done right.',
  },
  {
    id: 19,
    src: '/images/gallery/real/project-125.jpg',
    title: 'Shingle Roof — Pipe Boot Detail',
    category: 'Residential',
    location: 'Stony Plain, AB',
    desc: 'Clean architectural shingle installation with precision pipe boot flashing. The details that matter — proper sealing around every penetration.',
  },
  {
    id: 20,
    src: '/images/gallery/real/project-126.jpg',
    title: 'Commercial Storefront Build',
    category: 'Commercial',
    location: 'Stony Plain, AB',
    desc: 'Commercial storefront exterior with metal cladding, glass facades, and precision finishing. Large-scale projects handled with the same attention to detail.',
  },
  {
    id: 2,
    src: '/images/gallery/real/project-65.jpg',
    title: 'Completed Roof — Lakeside',
    category: 'Residential',
    location: 'Parkland County, AB',
    desc: 'Full roof replacement with architectural shingles, proper venting, and clean ridge lines. Beautiful lakeside neighborhood.',
  },
  {
    id: 3,
    src: '/images/gallery/real/project-104.jpg',
    title: 'Standing Seam Metal Roof',
    category: 'Metal Products',
    location: 'Parkland County, AB',
    desc: 'Dark standing seam metal roof on an acreage property. Built to handle Alberta winters for 50+ years with zero maintenance.',
  },
  {
    id: 4,
    src: '/images/gallery/real/project-102.jpg',
    title: 'Church Roof Replacement',
    category: 'Commercial',
    location: 'Stony Plain, AB',
    desc: 'Complete roof replacement on a heritage stone church. Precision craftsmanship on a high-profile community building.',
  },
  {
    id: 5,
    src: '/images/gallery/real/project-85.jpg',
    title: 'Skylight Integration',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    desc: 'Skylight installed on new architectural shingles. Proper curb-mount flashing ensures a watertight seal for decades.',
  },
  {
    id: 6,
    src: '/images/gallery/real/project-66.jpg',
    title: 'Skylight Frame Install',
    category: 'Residential',
    location: 'Parkland County, AB',
    desc: 'Our crew framing a skylight opening on fresh roof deck. Every cut is measured twice and sealed with precision.',
  },
  {
    id: 7,
    src: '/images/gallery/real/project-112.jpg',
    title: 'Metal Roof — Acreage',
    category: 'Metal Products',
    location: 'Parkland County, AB',
    desc: 'Metal roofing panels installed on an acreage property surrounded by Alberta birch forest. Built for Canadian weather.',
  },
  {
    id: 8,
    src: '/images/gallery/real/project-57.jpg',
    title: 'Soffit & Fascia Install',
    category: 'Exteriors & More',
    location: 'Stony Plain, AB',
    desc: 'Commercial soffit panel installation with recessed lighting, clean aluminum lines, and precision finishing.',
  },
  {
    id: 9,
    src: '/images/gallery/real/project-94.jpg',
    title: 'Completed Residential Roof',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    desc: 'Completed roof from above — every ridge, valley, and flashing detail visible. Quality you can see from the ground.',
  },
  {
    id: 10,
    src: '/images/gallery/real/project-110.jpg',
    title: "McDonald's — Commercial Build",
    category: 'Commercial',
    location: 'Stony Plain, AB',
    desc: "Full commercial roofing and exterior cladding for a new McDonald's location. From architectural renders to reality.",
  },
  {
    id: 11,
    src: '/images/gallery/real/project-68.jpg',
    title: 'Roof Deck & Insulation',
    category: 'Residential',
    location: 'Parkland County, AB',
    desc: 'Tearing off old decking and insulation on an acreage property. Every job starts with a solid foundation.',
  },
  {
    id: 12,
    src: '/images/gallery/real/project-106.jpg',
    title: 'Standing Seam Close-Up',
    category: 'Metal Products',
    location: 'Spruce Grove, AB',
    desc: 'Standing seam metal roof detail with vinyl siding below. Premium metal products that hold up to Canada\'s harshest weather.',
  },
  {
    id: 13,
    src: '/images/gallery/real/project-91.jpg',
    title: 'Metal Soffit & Timber Frame',
    category: 'Exteriors & More',
    location: 'Parkland County, AB',
    desc: 'Custom metal soffit ceiling with recessed lighting on a timber frame structure. Precision meets craftsmanship.',
  },
  {
    id: 14,
    src: '/images/gallery/real/project-100.jpg',
    title: 'Complex Valley Detail',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    desc: 'Complex roof valley and intersection with ladder access. Precision flashing work where experience matters most.',
  },
  {
    id: 15,
    src: '/images/gallery/real/project-73.jpg',
    title: 'Custom Barrel Sauna Build',
    category: 'Exteriors & More',
    location: 'Parkland County, AB',
    desc: 'Custom barrel sauna on a cedar deck. Quality craftsmanship extends beyond roofing — we build it all.',
  },
  {
    id: 16,
    src: '/images/gallery/real/project-87.jpg',
    title: 'Outdoor Kitchen & Steel Panel',
    category: 'Metal Products',
    location: 'Parkland County, AB',
    desc: 'Outdoor cooking area with dark steel paneling, timber beams, and custom finishing. Steel siding at its best.',
  },
  {
    id: 17,
    src: '/images/gallery/real/project-62.jpg',
    title: 'Commercial Exterior Cladding',
    category: 'Commercial',
    location: 'Stony Plain, AB',
    desc: 'Commercial building exterior with new cladding and glass facades. Large-scale projects handled with precision.',
  },
  {
    id: 18,
    src: '/images/gallery/real/project-83.jpg',
    title: 'Roof Vent Installation',
    category: 'Residential',
    location: 'Spruce Grove, AB',
    desc: 'Solar-powered roof vents installed on new architectural shingles. Proper ventilation extends your roof\'s lifespan.',
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
          subtitle="22 years of quality craftsmanship across Parkland County — real photos from real jobs, no stock images."
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
