import { useEffect } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import WhyChooseSection from './WhyChooseSection'
import SimpleWaySection from './SimpleWaySection'
import BusinessTypesSection from './BusinessTypesSection'
import DashboardSection from './DashboardSection'
import TestimonialsSection from './TestimonialsSection'
import FaqNewsletterSection from './FaqNewsletterSection'
import FooterSection from './FooterSection'

export default function LandingPage() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="bg-white text-slate-900">
      <Navbar isProductsPage={false} />
      <div data-reveal>
        <HeroSection />
        {/* <TrustBanner /> */}
      </div>
      <div data-reveal style={{ '--reveal-delay': '80ms' }}>
        <WhyChooseSection />
      </div>
      {/* <div data-reveal style={{ '--reveal-delay': '80ms' }}>
        <ReceiveAnywhereSection />
      </div> */}
      <div data-reveal style={{ '--reveal-delay': '90ms' }}>
        <SimpleWaySection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '90ms' }}>
        <BusinessTypesSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '100ms' }}>
        <DashboardSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '100ms' }}>
        <TestimonialsSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '110ms' }}>
        <FaqNewsletterSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '120ms' }}>
        <FooterSection />
      </div>
    </main>
  )
}
