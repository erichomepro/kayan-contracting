import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import Home from '@/pages/Home'
import Gallery from '@/pages/Gallery'
import ServicePage from '@/pages/ServicePage'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <SmoothScroll>
      <SchemaMarkup />
      <a href="#main-content" className="skip-nav">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
    </SmoothScroll>
  )
}
