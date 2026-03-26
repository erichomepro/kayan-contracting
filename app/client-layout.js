'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  // Handle hash scrolling on navigation
  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const el = document.querySelector(window.location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [pathname])

  return (
    <SmoothScroll>
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileBottomBar />
    </SmoothScroll>
  )
}
