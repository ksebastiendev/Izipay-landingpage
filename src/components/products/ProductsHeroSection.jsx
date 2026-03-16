import { useI18n } from '../../i18n/useI18n'

const HERO_IMAGE = '/productsPage/image-hero-product.png'

export default function ProductsHeroSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#00808014] pt-12 pb-16 md:pt-16 md:pb-24 lg:pb-[100px]">
      <div className="mx-auto grid w-full items-stretch gap-8 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
        <div className="self-center">
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

        <div className="flex min-h-[420px] justify-center lg:min-h-full lg:justify-end">
          <img src={HERO_IMAGE} alt={t.products.hero.imageAlt} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}
