import { useI18n } from '../../i18n/useI18n'

export default function ReceiveAnywhereSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#3257A8]/10 bg-gradient-to-br from-[#F4FFFA] via-white to-[#E8EFFF]/80 shadow-[0_24px_60px_-30px_rgba(35,37,61,0.35)]">
          <div className="pointer-events-none absolute -left-16 top-8 h-40 w-40 rounded-full bg-[#008080]/14 blur-3xl sm:h-56 sm:w-56" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-full bg-[#3257A8]/12 blur-3xl sm:h-60 sm:w-60" />
          <img
            src="/landing/section-cryptopayement.png"
            alt={t.receiveAnywhere.imageAlt}
            className="min-h-[280px] w-full object-cover object-[72%_center] sm:min-h-[220px] sm:object-cover sm:object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,37,61,0.18)_0%,rgba(35,37,61,0.12)_22%,rgba(35,37,61,0.48)_68%,rgba(35,37,61,0.72)_100%)] sm:bg-[linear-gradient(90deg,rgba(35,37,61,0.66)_0%,rgba(35,37,61,0.36)_30%,rgba(35,37,61,0.08)_58%,rgba(35,37,61,0.02)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[52%] bg-[radial-gradient(circle_at_bottom_left,rgba(0,128,128,0.2),transparent_62%)] sm:inset-y-0 sm:left-0 sm:h-auto sm:w-[62%] sm:bg-[radial-gradient(circle_at_left,rgba(0,128,128,0.18),transparent_62%)]" />
          <div className="absolute inset-x-3 bottom-3 rounded-[1.5rem] border border-white/12 bg-white/8 px-4 py-4 backdrop-blur-[6px] sm:inset-x-auto sm:bottom-auto sm:left-[7%] sm:top-1/2 sm:w-[min(58%,26rem)] sm:-translate-y-1/2 sm:rounded-[1.75rem] sm:px-5 sm:py-5 md:left-[8%] md:w-[min(52%,32rem)] md:px-7 md:py-7">
            <div className="mb-2 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#DEF4F4] sm:mb-3 sm:text-[11px]">
              Receive Crypto Payments
            </div>
            <h3 className="max-w-[14ch] text-[18px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:max-w-none sm:text-[32px] sm:leading-[1.02] sm:tracking-[-0.03em] md:text-[44px] md:leading-[1.02] lg:text-[52px]">
              {t.receiveAnywhere.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
