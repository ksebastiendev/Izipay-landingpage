import { useEffect, useState } from 'react'
import LandingPage from './components/landing/LandingPage'
import ProductsPage from './components/products/ProductsPage'
import SupportedCoinsPage from './components/products/SupportedCoinsPage'
import { I18nProvider } from './i18n/I18nProvider'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('locationchange', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('locationchange', handleLocationChange)
    }
  }, [])

  const isProductsPage = pathname === '/products'
  const isSupportedCoinsPage = pathname === '/supported-coins'

  return (
    <I18nProvider>
      {isProductsPage ? <ProductsPage /> : isSupportedCoinsPage ? <SupportedCoinsPage /> : <LandingPage />}
    </I18nProvider>
  )
}

export default App
