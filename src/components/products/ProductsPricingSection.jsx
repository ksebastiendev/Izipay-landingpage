import { plans } from './data'

export default function ProductsPricingSection() {
  return (
    <section className="bg-[#008080] py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1120px] px-4 md:px-5">

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-white md:text-[38px]">
            Flexible Pricing for Every Business
          </h3>
          <a
            href="#"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[14px] font-semibold text-[#008080] transition hover:bg-slate-100"
          >
            See More <span className="text-[12px]">↗</span>
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.label}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm"
            >
              <img src={plan.icon} alt={plan.alt} className="mb-5 h-16 w-16 object-contain" />

              <p className="text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#008080]">
                {plan.value}
              </p>
              <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {plan.label}
              </p>

              <p className="mt-4 flex-1 text-[14px] leading-[1.6] text-slate-500">{plan.description}</p>
              <p className="mt-1 text-[12px] text-slate-400">({plan.fee})</p>

              <a
                href="#"
                className="mt-6 inline-flex h-10 w-full items-center justify-center rounded-xl bg-[#008080] text-[14px] font-semibold text-white transition hover:bg-[#007373]"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
