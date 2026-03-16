import { useI18n } from '../../i18n/useI18n'

export default function ReceiveAnywhereSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="relative overflow-hidden rounded-2xl">
          <img src="/landing/section-cryptopayement.png" alt={t.receiveAnywhere.imageAlt} className="min-h-[220px] w-full object-cover" />
          <div className="absolute left-4 top-1/2 max-w-[165px] -translate-y-1/2 sm:left-[7%] sm:max-w-[240px] md:left-[9%] md:max-w-[360px]">
            <h3 className="text-[18px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[34px] sm:leading-[1.04] sm:tracking-[-0.03em] md:text-[50px] md:leading-[1.05] lg:text-[54px]">
              {t.receiveAnywhere.title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
