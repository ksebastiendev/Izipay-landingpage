import { useI18n } from '../../i18n/useI18n'

export default function BusinessTypesSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full gap-12 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14 xl:gap-16">
        <div>
          <h3 className="max-w-[460px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900 lg:text-[48px]">{t.businessTypes.title}</h3>
          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[0].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600 lg:text-[17px]">{t.businessTypes.items[0].text}</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[1].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600 lg:text-[17px]">{t.businessTypes.items[1].text}</p>
            </div>
            <div>
              <h4 className="text-[24px] font-bold text-slate-900">{t.businessTypes.items[2].title}</h4>
              <p className="mt-2 text-[15px] text-slate-600 lg:text-[17px]">{t.businessTypes.items[2].text}</p>
            </div>
          </div>
        </div>

        <img src="/landing/section-build-for.png" alt={t.businessTypes.imageAlt} className="w-full" />
      </div>
    </section>
  )
}
