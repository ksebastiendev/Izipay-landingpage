import LandingPage from './components/landing/LandingPage'
import { I18nProvider } from './i18n/I18nProvider'

function App() {
  return (
    <I18nProvider>
      <LandingPage />
    </I18nProvider>
  )
}

export default App
