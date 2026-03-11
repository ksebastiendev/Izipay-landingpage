import { useI18n } from '../../i18n/useI18n'

export default function BusinessTypesSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-4 md:px-5 lg:grid-cols-[0.9fr_1fr] lg:items-center">
        <div>
          <h3 className="max-w-[460px] text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900">{t.businessTypes.title}</h3>
          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[0].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600">{t.businessTypes.items[0].text}</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[1].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600">{t.businessTypes.items[1].text}</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[2].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600">{t.businessTypes.items[2].text}</p>
            </div>
          </div>
        </div>

        <img src="/landing/section-build-for.png" alt={t.businessTypes.imageAlt} className="w-full" />
      </div>
    </section>
  )
}
