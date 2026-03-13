import { useI18n } from '../../i18n/useI18n'

export default function SimpleWaySection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full items-center gap-10 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-16">
        <img src="/landing/A-simplewayto.png" alt={t.simpleWay.imageAlt} className="w-full max-w-[480px]" />
        <div>
          <h3 className="max-w-[470px] text-[56px] font-extrabold leading-[1.03] tracking-[-0.03em] text-slate-900">{t.simpleWay.title}</h3>
          <p className="mt-4 max-w-[480px] text-[16px] leading-7 text-slate-600 lg:text-[18px]">
            {t.simpleWay.description}
          </p>
          <a
            href="#"
            className="group mt-7 inline-flex h-10 items-center gap-2 rounded-xl bg-[#008080] px-6 text-[14px] font-semibold text-white transition hover:bg-[#007373]"
          >
            {t.simpleWay.cta}
            <img src="/landing/botonflech.svg" alt={t.simpleWay.arrowAlt} className="cta-arrow h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
