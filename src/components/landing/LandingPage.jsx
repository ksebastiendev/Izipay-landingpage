import Navbar from './Navbar'
import HeroSection from './HeroSection'
import TrustBanner from './TrustBanner'
import WhyChooseSection from './WhyChooseSection'
import ReceiveAnywhereSection from './ReceiveAnywhereSection'
import SimpleWaySection from './SimpleWaySection'
import BusinessTypesSection from './BusinessTypesSection'
import DashboardSection from './DashboardSection'
import TestimonialsSection from './TestimonialsSection'
import FaqNewsletterSection from './FaqNewsletterSection'
import FooterSection from './FooterSection'

export default function LandingPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <HeroSection />
      <TrustBanner />
      <WhyChooseSection />
      <ReceiveAnywhereSection />
      <SimpleWaySection />
      <BusinessTypesSection />
      <DashboardSection />
      <TestimonialsSection />
      <FaqNewsletterSection />
      <FooterSection />
    </main>
  )
}
