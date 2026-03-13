import { useI18n } from '../../i18n/useI18n'

export default function TrustBanner() {
  const { t } = useI18n()

  return (
    <section className="overflow-hidden bg-[#008080]">
      <div className="mx-auto flex w-full min-h-[58px] items-center justify-center px-[0.8rem] py-2 sm:h-[58px] sm:px-[0.9rem] sm:py-0 md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="relative w-full min-w-0 overflow-hidden">
          <div className="trust-marquee-track">
            <p className="trust-marquee-item text-[14px] font-bold leading-tight text-white sm:text-[20px] sm:leading-none lg:text-[24px] xl:text-[28px] whitespace-nowrap">
              {t.trustBanner.text}
            </p>
            <p aria-hidden className="trust-marquee-item text-[14px] font-bold leading-tight text-white sm:text-[20px] sm:leading-none lg:text-[24px] xl:text-[28px] whitespace-nowrap">
              {t.trustBanner.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
