import { useI18n } from '../../i18n/useI18n'

export default function ReceiveAnywhereSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#3257A8]/10 bg-white">
          <img
            src="/landing/section-cryptopayement.png"
            alt={t.receiveAnywhere.imageAlt}
            className="min-h-[280px] w-full object-cover object-[72%_center] sm:min-h-[220px] sm:object-cover sm:object-center"
          />
          <div className="absolute inset-x-3 bottom-3 px-4 py-4 sm:inset-x-auto sm:bottom-auto sm:left-[7%] sm:top-1/2 sm:w-[min(58%,26rem)] sm:-translate-y-1/2 sm:px-5 sm:py-5 md:left-[8%] md:w-[min(52%,32rem)] md:px-7 md:py-7">
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
