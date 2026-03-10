import { useI18n } from '../../i18n/useI18n'

export default function TrustBanner() {
  const { t } = useI18n()

  return (
    <section className="bg-[#008080]">
      <div className="mx-auto grid min-h-[58px] w-full max-w-[1214px] grid-cols-[92px_1fr] items-center gap-2 px-3 py-2 sm:h-[58px] sm:grid-cols-[180px_1fr] sm:gap-0 sm:px-5 sm:py-0">
        <div className="flex items-center gap-1.5 sm:gap-3">
          <p className="text-[28px] font-black italic leading-none text-white sm:text-[40px]">it's7</p>
          <span className="text-[14px] text-white/60 sm:text-[18px]">·</span>
        </div>

        <div className="flex items-center justify-center">
          <p className="text-center text-[12px] font-bold leading-tight text-white sm:text-[20px] sm:leading-none lg:text-[44px]">
            {t.trustBanner.text}
          </p>
        </div>
      </div>
    </section>
  )
}
