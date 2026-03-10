import { useState } from 'react'

export default function Navbar() {
  const [language, setLanguage] = useState('EN')
  const languageFlag = language === 'FR' ? '/landing/fr-contry-flag.png' : '/landing/country-flag.png'

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[76px] w-full max-w-[1120px] items-center justify-between px-5">
        <a href="#" className="shrink-0">
          <img src="/landing/izipaylogo.png" alt="IzichangePay" className="h-[42px] w-auto" />
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

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden h-11 items-center rounded-xl border border-slate-300 bg-white px-7 text-[17px] font-semibold leading-none text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 md:inline-flex"
          >
            Connexion
          </a>
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-xl bg-[#008080] px-7 text-[17px] font-semibold leading-none text-white transition hover:bg-[#007373]"
          >
            Inscription
          </a>

          <div className="ml-1 inline-flex items-center gap-2">
            <img src={languageFlag} alt={`Drapeau ${language}`} className="h-[18px] w-[26px] rounded-[2px] object-cover" />
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="appearance-none bg-transparent pr-4 text-[17px] font-semibold leading-none text-slate-900 outline-none"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
            </select>
            <span className="pointer-events-none -ml-3 text-[12px] text-slate-600">▾</span>
          </div>
        </div>
      </div>
    </header>
  )
}
