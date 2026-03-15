import { Routes, Route } from 'react-router-dom'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import Home from '@/pages/Home'
import ServicePage from '@/pages/ServicePage'
import SchemaMarkup from '@/components/seo/SchemaMarkup'

export default function App() {
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
          <Route path="/services/:serviceId" element={<ServicePage />} />
        </Routes>
      </main>
      <Footer />
      <MobileBottomBar />
    </SmoothScroll>
  )
}
