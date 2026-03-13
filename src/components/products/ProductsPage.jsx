import { useEffect } from 'react'
import Navbar from '../landing/Navbar'
import ProductsHeroSection from './ProductsHeroSection'
import ProductsSolutionsSection from './ProductsSolutionsSection'
import ProductsPricingSection from './ProductsPricingSection'
import ProductsMarketSection from './ProductsMarketSection'
import ProductsFooterSection from './ProductsFooterSection'

export default function ProductsPage() {
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
      <Navbar />
      <div data-reveal>
        <ProductsHeroSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '80ms' }}>
        <ProductsSolutionsSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '90ms' }}>
        <ProductsPricingSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '100ms' }}>
        <ProductsMarketSection />
      </div>
      <div data-reveal style={{ '--reveal-delay': '110ms' }}>
        <ProductsFooterSection />
      </div>
    </main>
  )
}
