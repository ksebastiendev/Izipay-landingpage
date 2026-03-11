import { useI18n } from '../../i18n/useI18n'

export default function TrustBanner() {
  const { t } = useI18n()

  return (
    <section className="bg-[#008080]">
      <div className="mx-auto w-full max-w-[1120px] min-h-[58px] px-4 py-2 sm:h-[58px] sm:py-0 md:px-5 flex items-center justify-center">
        <div className="relative overflow-hidden">
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
