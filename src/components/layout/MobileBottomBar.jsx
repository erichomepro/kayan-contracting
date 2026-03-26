'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, FileText } from 'lucide-react'
import { company } from '@/data/company'

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY

      // Show on scroll up, hide on scroll down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex bg-surface shadow-[0_-4px_12px_oklch(0_0_0/0.1)]">
        {/* Call Now */}
        <a
          href={`tel:${company.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-success text-white font-semibold text-sm transition-opacity hover:opacity-90"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>

        {/* Free Estimate */}
        <a
          href={pathname === '/' ? '#quote' : '#service-quote'}
          onClick={(e) => {
            const hash = pathname === '/' ? '#quote' : '#service-quote'
            const el = document.querySelector(hash)
            if (el) {
              e.preventDefault()
              el.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-accent text-text-on-accent font-semibold text-sm transition-opacity hover:opacity-90"
        >
          <FileText className="w-4 h-4" />
          Free Estimate
        </a>
      </div>

      {/* Safe area spacing for devices with home indicator */}
      <div className="bg-surface h-[env(safe-area-inset-bottom)]" />
    </div>
  )
}
