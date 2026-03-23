import { useEffect, useState } from 'react'
import LandingPage from './components/landing/LandingPage'
import ProductsPage from './components/products/ProductsPage'
import SupportedCoinsPage from './components/products/SupportedCoinsPage'
import PaymentFlowsPage from './pages/PaymentFlowsPage'
import { I18nProvider } from './i18n/I18nProvider'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/supported-coins" element={<SupportedCoinsPage />} />
          <Route path="/payments" element={<Navigate to="/products" replace />} />
          <Route path="/payments/:flow" element={<PaymentFlowsPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
