import { useI18n } from '../../i18n/useI18n'

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb]">
      <div className="mx-auto grid w-full max-w-[1120px] items-end gap-8 px-5 pt-16 pb-[20px] lg:grid-cols-[1fr_1.05fr] lg:pt-20">
        <div>
          <h1 className="max-w-[530px] text-[42px] font-bold leading-[1.08] tracking-[-0.02em] text-slate-900">{t.hero.title}</h1>
          <p className="mt-5 max-w-[500px] text-[15px] leading-7 text-slate-600">
            {t.hero.description}
          </p>
          <div className="mt-8 flex max-w-[360px] items-center gap-3">
            <input
              placeholder={t.hero.emailPlaceholder}
              className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-[12px] outline-none placeholder:text-slate-400"
            />
            <a
              href="#"
              className="group inline-flex h-10 items-center gap-2 rounded-xl bg-[#008080] px-5 text-[17px] font-semibold leading-none text-white transition hover:bg-[#007373]"
            >
              {t.hero.cta}
              <img src="/landing/botonflech.svg" alt={t.hero.arrowAlt} className="cta-arrow h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="relative">
          <img src="/landing/hero-section.png" alt={t.hero.imageAlt} className="w-full" />
        </div>
      </div>
    </section>
  )
}
