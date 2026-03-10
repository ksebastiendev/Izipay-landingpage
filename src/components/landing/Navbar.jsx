import { useState } from 'react'

export default function Navbar() {
  const [language, setLanguage] = useState('EN')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const languageFlag = language === 'FR' ? '/landing/fr-contry-flag.png' : '/landing/country-flag.png'

  return (
    <header className="sticky top-0 z-50 bg-[#f6f7fb]/90 backdrop-blur-md supports-[backdrop-filter]:bg-[#f6f7fb]/80">
      <div className="mx-auto flex min-h-[64px] w-full max-w-[1120px] items-center justify-between gap-2 px-4 py-2 sm:h-[76px] sm:px-5 sm:py-0">
        <a href="#" className="shrink-0">
          <img src="/landing/izipaylogo.png" alt="IzichangePay" className="h-[34px] w-auto max-w-[150px] object-contain sm:h-[42px] sm:max-w-none" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          <a href="#" className="text-[19px] font-semibold leading-none text-slate-500 transition hover:text-slate-700">
            Nos produits
          </a>
          <a href="#" className="text-[19px] font-semibold leading-none text-slate-500 transition hover:text-slate-700">
            Documentations
          </a>
          <a href="#" className="text-[19px] font-semibold leading-none text-slate-500 transition hover:text-slate-700">
            FAQ
          </a>
        </nav>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 lg:hidden"
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
            className="hidden h-11 items-center rounded-xl border border-slate-300 bg-white px-7 text-[17px] font-semibold leading-none text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 md:inline-flex"
          >
            Connexion
          </a>
          <a
            href="#"
            className="hidden h-10 items-center whitespace-nowrap rounded-xl bg-[#008080] px-4 text-[15px] font-semibold leading-none text-white transition hover:bg-[#007373] sm:inline-flex sm:h-11 sm:px-7 sm:text-[17px]"
          >
            Inscription
          </a>

          <div className="ml-0 hidden items-center gap-1.5 sm:ml-1 sm:inline-flex sm:gap-2">
            <img src={languageFlag} alt={`Drapeau ${language}`} className="h-4 w-6 rounded-[2px] object-cover sm:h-[18px] sm:w-[26px]" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="w-11 appearance-none bg-transparent pr-3 text-[14px] font-semibold leading-none text-slate-900 outline-none sm:w-auto sm:pr-4 sm:text-[17px]"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
            <span className="pointer-events-none -ml-2 text-[11px] text-slate-600 sm:-ml-3 sm:text-[12px]">▾</span>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1120px] flex-col px-4 py-3">
            <a href="#" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              Nos produits
            </a>
            <a href="#" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              Documentations
            </a>
            <a href="#" className="rounded-lg px-2 py-2 text-[16px] font-semibold text-slate-700 hover:bg-slate-50">
              FAQ
            </a>
            <a href="#" className="mt-2 inline-flex h-10 items-center rounded-xl border border-slate-300 px-4 text-[15px] font-semibold text-slate-900">
              Connexion
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
