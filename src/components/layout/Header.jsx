import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { company } from '@/data/company'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Get a Quote', href: '#quote' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const mobileMenuVariants = {
  closed: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.05, duration: 0.3 } }),
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() { setIsScrolled(window.scrollY > 50) }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-surface-dark/80 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-4">
          <img
            src="/images/kayan-logo.png"
            alt="Kayan Contracting"
            className="h-10 w-auto brightness-0 invert"
          />
          <div>
            <div className="font-bold uppercase tracking-[0.2em] text-sm text-white">Kayan Contracting</div>
            <div className="text-[9px] uppercase tracking-[0.1em] text-accent font-bold">Stony Plain, AB</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={`tel:${company.phoneRaw}`}
          className="hidden md:flex px-6 py-3 border border-accent/40 hover:bg-accent hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest rounded-lg backdrop-blur-md text-white"
        >
          {company.phone}
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 top-18 bg-surface z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6 -mt-18">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-white hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${company.phoneRaw}`}
                custom={navLinks.length}
                variants={linkVariants}
                initial="closed"
                animate="open"
                className="mt-4 flex items-center gap-2 text-lg font-bold text-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                {company.phone}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
