import { useI18n } from '../../i18n/useI18n'

export default function TrustBanner() {
  const { t } = useI18n()

  return (
    <section className="bg-[#008080]">
      <div className="mx-auto grid min-h-[58px] w-full max-w-[1120px] grid-cols-[92px_1fr] items-center gap-2 px-5 py-2 sm:h-[58px] sm:grid-cols-[180px_1fr] sm:gap-0 sm:py-0">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <p className="text-[28px] font-black italic leading-none text-white sm:text-[40px]">it's7</p>
          <span className="text-[14px] text-white/60 sm:text-[18px]">·</span>
        </div>

        <div className="relative overflow-hidden">
          <div className="trust-marquee-track">
            <p className="trust-marquee-item text-[12px] font-bold leading-tight text-white sm:text-[18px] sm:leading-none lg:text-[22px] xl:text-[26px] whitespace-nowrap">
              {t.trustBanner.text}
            </p>
            <p aria-hidden className="trust-marquee-item text-[12px] font-bold leading-tight text-white sm:text-[18px] sm:leading-none lg:text-[22px] xl:text-[26px] whitespace-nowrap">
              {t.trustBanner.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
