import Navbar from '../landing/Navbar'
import ProductsHeroSection from './ProductsHeroSection'
import ProductsSolutionsSection from './ProductsSolutionsSection'
import ProductsPricingSection from './ProductsPricingSection'
import ProductsMarketSection from './ProductsMarketSection'
import ProductsFooterSection from './ProductsFooterSection'

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-900">
      <Navbar />
      <ProductsHeroSection />
      <ProductsSolutionsSection />
      <ProductsPricingSection />
      <ProductsMarketSection />
      <ProductsFooterSection />
    </main>
  )
}
