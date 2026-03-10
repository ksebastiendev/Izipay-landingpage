import { useI18n } from '../../i18n/useI18n'

export default function DashboardSection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#eff1f8] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5 text-center">
        <h3 className="text-[56px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900">{t.dashboard.title}</h3>
        <img src="/landing/apowerful-section.png.png" alt={t.dashboard.imageAlt} className="mx-auto mt-10 w-full" />
      </div>
    </section>
  )
}
