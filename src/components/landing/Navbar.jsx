import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'

const DOCS_URL = 'https://cryptogateway-project.github.io/cryptogateway-project/'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()
  const languageFlag = language === 'FR' ? '/landing/fr-contry-flag.png' : '/landing/country-flag.png'

  return (
    <header className="sticky top-0 z-50 bg-[#f6f7fb]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#f6f7fb]/80">
      <div className="mx-auto flex min-h-[58px] w-full items-center justify-between gap-2 px-[0.8rem] py-2 sm:h-[64px] sm:px-[0.9rem] sm:py-0 md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <a href="/" className="shrink-0">
          <img src="/landing/izipaylogo.png" alt="IzichangePay" className="h-[28px] w-auto max-w-[132px] object-contain sm:h-[34px] sm:max-w-none" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="/products" className="text-[15px] font-semibold leading-none text-slate-500 transition hover:text-[#008080]">
            {t.nav.products}
          </a>
          <a href={DOCS_URL} target="_blank" rel="noreferrer" className="text-[15px] font-semibold leading-none text-slate-500 transition hover:text-[#008080]">
            {t.nav.docs}
          </a>
          <a href="#" className="text-[15px] font-semibold leading-none text-slate-500 transition hover:text-[#008080]">
            {t.nav.faq}
          </a>
        </nav>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label={t.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-300 text-slate-700 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-current transition ${isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span className={`absolute left-0 top-[7px] h-[2px] w-5 rounded bg-current transition ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span
                className={`absolute left-0 top-[14px] h-[2px] w-5 rounded bg-current transition ${isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </span>
          </button>
          <a
            href="#"
            className="hidden h-9 items-center rounded-xl border border-slate-300 bg-white px-5 text-[14px] font-semibold leading-none text-slate-900 transition hover:border-[#008080]/40 hover:bg-slate-50 lg:inline-flex"
          >
            {t.nav.login}
          </a>
          <a
            href="#"
            className="hidden h-9 items-center whitespace-nowrap rounded-xl bg-[#008080] px-4 text-[14px] font-semibold leading-none text-white transition hover:bg-[#007373] lg:inline-flex lg:px-5"
          >
            {t.nav.signup}
          </a>

          <div className="ml-0 hidden items-center gap-1.5 sm:ml-1 sm:inline-flex sm:gap-1.5">
            <img src={languageFlag} alt={`Drapeau ${language}`} className="h-[14px] w-5 rounded-[2px] object-cover sm:h-4 sm:w-6" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label={t.nav.language}
              className="w-10 appearance-none bg-transparent pr-3 text-[13px] font-semibold leading-none text-slate-900 outline-none sm:w-auto sm:pr-3 sm:text-[14px]"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
            <span className="pointer-events-none -ml-2 text-[10px] text-slate-600 sm:-ml-2">▾</span>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full flex-col px-[0.8rem] py-3 sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
            <a href="/products" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              {t.nav.products}
            </a>
            <a href={DOCS_URL} target="_blank" rel="noreferrer" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              {t.nav.docs}
            </a>
            <a href="#" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              {t.nav.faq}
            </a>
            <a href="#" className="mt-2 inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-[15px] font-semibold text-slate-900">
              {t.nav.login}
            </a>
            <div className="mt-3 inline-flex items-center gap-2 px-2">
              <img src={languageFlag} alt={`Drapeau ${language}`} className="h-4 w-6 rounded-[2px] object-cover" />
              <select
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                aria-label={t.nav.language}
                className="appearance-none bg-transparent pr-2 text-[14px] font-semibold text-slate-900 outline-none"
              >
                <option value="FR">FR</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
