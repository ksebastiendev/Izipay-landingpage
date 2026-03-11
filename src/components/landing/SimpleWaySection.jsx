import { useI18n } from '../../i18n/useI18n'

export default function SimpleWaySection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1120px] items-center gap-10 px-4 md:px-5 lg:grid-cols-[1fr_1fr]">
        <img src="/landing/A-simplewayto.png" alt={t.simpleWay.imageAlt} className="w-full max-w-[480px]" />
        <div>
          <h3 className="max-w-[470px] text-[56px] font-extrabold leading-[1.03] tracking-[-0.03em] text-slate-900">{t.simpleWay.title}</h3>
          <p className="mt-4 max-w-[480px] text-[16px] leading-7 text-slate-600">
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
