import { useI18n } from '../../i18n/useI18n'

const HERO_IMAGE = '/productsPage/herosection-image.png'

export default function ProductsHeroSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#f6f7fb] pt-12 pb-14 md:pt-16 md:pb-20">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-8 px-4 md:px-5 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="max-w-[520px] text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-[56px]">
            {t.products.hero.title}
          </h1>
          <p className="mt-5 max-w-[510px] text-[16px] leading-[1.6] text-slate-600 lg:text-[18px]">{t.products.hero.description}</p>
          <a
            href="#"
            className="mt-7 inline-flex h-11 items-center rounded-xl bg-[#008080] px-6 text-[15px] font-semibold text-white transition hover:bg-[#007373]"
          >
            {t.products.hero.cta}
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src={HERO_IMAGE} alt={t.products.hero.imageAlt} className="w-full max-w-[520px]" />
        </div>
      </div>
    </section>
  )
}
