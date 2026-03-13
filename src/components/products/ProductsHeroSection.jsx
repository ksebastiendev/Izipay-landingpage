import { productHero } from './data'

export default function ProductsHeroSection() {
  return (
    <section className="bg-[#f6f7fb] pt-12 pb-14 md:pt-16 md:pb-20">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-8 px-4 md:px-5 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="max-w-[520px] text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-slate-900 sm:text-[44px] lg:text-[56px]">
            {productHero.title}
          </h1>
          <p className="mt-5 max-w-[510px] text-[16px] leading-[1.6] text-slate-600 lg:text-[18px]">{productHero.description}</p>
          <a
            href="#"
            className="mt-7 inline-flex h-11 items-center rounded-xl bg-[#008080] px-6 text-[15px] font-semibold text-white transition hover:bg-[#007373]"
          >
            {productHero.cta}
          </a>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img src={productHero.image} alt={productHero.imageAlt} className="w-full max-w-[520px]" />
        </div>
      </div>
    </section>
  )
}
