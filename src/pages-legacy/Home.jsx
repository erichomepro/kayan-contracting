import Hero from '@/components/sections/Hero'
import Marquee from '@/components/sections/Marquee'
import ServicesOverview from '@/components/sections/ServicesOverview'
import ThermalImaging from '@/components/sections/ThermalImaging'
import ProjectGallery from '@/components/sections/ProjectGallery'
import WhyKayan from '@/components/sections/WhyKayan'
import Testimonials from '@/components/sections/Testimonials'
import RoofCalculator from '@/components/calculator/RoofCalculator'
import WarningSigns from '@/components/sections/WarningSigns'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesOverview />
      <ThermalImaging />
      <ProjectGallery />
      <WhyKayan />
      <Testimonials />
      <RoofCalculator />
      <WarningSigns />
      <ProcessTimeline />
      <FAQ />
      <FinalCTA />
    </>
  )
}
