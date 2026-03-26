'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Clock, Tag, ArrowRight, BookOpen, MessageCircle, Calendar } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { blogPosts } from '@/data/blogPosts'

gsap.registerPlugin(ScrollTrigger)

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function CategoryBadge({ category }) {
  return (
    <span className="text-[9px] font-bold uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
      {category}
    </span>
  )
}

function FeaturedCard({ post, index }) {
  const isReversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.id}`}
        className={`group relative flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 bg-surface-alt`}
      >
        <div className="relative lg:w-[55%] aspect-[16/9] lg:aspect-auto overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="eager"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-surface-alt" />
          <div className="absolute top-4 left-4 bg-accent text-white text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest copper-glow">
            Featured
          </div>
        </div>

        <div className="relative flex flex-col justify-center lg:w-[45%] p-7 sm:p-10">
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent/30 to-transparent hidden lg:block" />

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <CategoryBadge category={post.category} />
            <span className="flex items-center gap-1.5 text-text-muted text-[10px]">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-text-muted text-[10px]">
              <Calendar className="w-3 h-3" />
              {formatDate(post.publishDate)}
            </span>
          </div>

          <h2 className="text-white font-display font-bold text-xl sm:text-2xl normal-case leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
            {post.title}
          </h2>

          <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-white/40 bg-white/5 px-2.5 py-1 rounded-full"
              >
                <Tag className="w-2.5 h-2.5" />
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all duration-300">
            Read Article
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

function PostCard({ post, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/blog/${post.id}`}
        className="group flex flex-col h-full glass-card rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-400 bg-surface-alt"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <CategoryBadge category={post.category} />
          </div>
          <div className="absolute top-3 right-3 glass-card text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-accent" />
            {post.readTime}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-1.5 text-text-muted text-[10px] mb-3">
            <Calendar className="w-3 h-3" />
            {formatDate(post.publishDate)}
          </div>

          <h3 className="text-white font-display font-bold text-base normal-case leading-snug mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
            {post.title}
          </h3>

          <p className="text-text-muted text-xs leading-relaxed line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase tracking-widest text-white/35 bg-white/5 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-1.5 text-accent text-[10px] font-bold uppercase tracking-widest group-hover:gap-2.5 transition-all duration-300 mt-auto">
            Read More
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function BlogClient() {
  const heroRef = useRef(null)

  const featuredPosts = blogPosts.filter((p) => p.featured)
  const allPosts = blogPosts

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('.blog-hero-label', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    })
      .from(
        '.blog-hero-title',
        { y: 55, opacity: 0, duration: 0.85, ease: 'power3.out' },
        '-=0.3',
      )
      .from(
        '.blog-hero-subtitle',
        { y: 30, opacity: 0, duration: 0.65, ease: 'power3.out' },
        '-=0.45',
      )
      .from(
        '.blog-hero-meta',
        { y: 20, opacity: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.3',
      )
  }, { scope: heroRef })

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-surface overflow-hidden"
      >
        <div className="absolute inset-0 hero-dot-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="blog-hero-label flex items-center gap-4 justify-center mb-5">
            <span className="h-px w-12 bg-accent" />
            <span className="text-accent font-bold tracking-widest text-[10px] uppercase italic">
              From the Field
            </span>
            <span className="h-px w-12 bg-accent" />
          </div>

          <h1 className="blog-hero-title text-white font-display tracking-tight leading-none mb-6">
            Roofing{' '}
            <em className="font-serif not-italic italic text-accent">Insights</em>
          </h1>

          <p className="blog-hero-subtitle text-text-muted text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Honest advice, how-to guides, and lessons from 22 years of roofing across
            Stony Plain, Spruce Grove, and Parkland County.
          </p>

          <div className="blog-hero-meta flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4 text-accent" />
              <span className="text-white text-xs font-bold">{allPosts.length} Articles</span>
            </div>
            <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2 rounded-full">
              <Tag className="w-4 h-4 text-accent" />
              <span className="text-white text-xs font-bold">
                {[...new Set(allPosts.map((p) => p.category))].length} Topics
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-surface-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <SectionHeading
              label="Featured Articles"
              heading={
                <>
                  Must-Read{' '}
                  <em className="font-serif not-italic italic text-accent">Guides</em>
                </>
              }
              subtitle="In-depth articles written from two decades on the job — everything you need to make confident decisions about your roof."
            />

            <div className="flex flex-col gap-8">
              {featuredPosts.map((post, i) => (
                <FeaturedCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeading
            label="All Articles"
            heading={
              <>
                Browse{' '}
                <em className="font-serif not-italic italic text-accent">Everything</em>
              </>
            }
            subtitle="Tips, guides, and real-world case studies for Alberta homeowners."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {allPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted text-sm">No articles yet — check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-surface-dark border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <SectionHeading
            label="We're Here to Help"
            heading={
              <>
                Have a Roofing{' '}
                <em className="font-serif not-italic italic text-accent">Question?</em>
              </>
            }
            subtitle="Can't find the answer you're looking for? We're happy to give you honest, no-obligation advice — no sales pitch, just straight talk from experienced roofers."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300 copper-glow"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Us Anything
            </Link>
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-accent text-white text-sm font-bold uppercase tracking-widest rounded-lg transition-all duration-300"
            >
              Free Roof Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
