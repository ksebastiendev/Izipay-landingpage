import { useI18n } from '../../i18n/useI18n'
import { pricingPlansMeta } from './data'

export default function ProductsPricingSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#008080] py-16 md:py-20 lg:py-[100px]">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-[26px] font-bold leading-tight tracking-[-0.02em] text-white md:text-[34px]">
            {t.products.pricing.title}
          </h3>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {pricingPlansMeta.map((planMeta, index) => {
            const translatedPlan = t.products.pricing.plans[index]

            return (
            <article
              key={translatedPlan.label}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF0F6]">
                <img src={planMeta.icon} alt={translatedPlan.alt} className="h-9 w-9 object-contain" />
              </div>

              <p className="text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#008080]">
                {planMeta.value}
              </p>
              <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {translatedPlan.label}
              </p>

              <p className="mt-4 flex-1 text-[14px] leading-[1.6] text-slate-500">{translatedPlan.description}</p>
              <p className="mt-1 text-[12px] text-slate-400">({translatedPlan.fee})</p>

              <a
                href="#"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#008080] text-[14px] font-semibold text-white transition hover:bg-[#007373]"
              >
                {translatedPlan.cta}
              </a>
            </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
