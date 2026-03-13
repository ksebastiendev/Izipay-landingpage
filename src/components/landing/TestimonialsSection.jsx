import { useI18n } from '../../i18n/useI18n'

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

export default function TestimonialsSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <h3 className="text-[52px] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-900">{t.testimonials.title}</h3>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {t.testimonials.items.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[15px] leading-7 text-slate-600">{item.text}</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#008080] text-[14px] font-bold text-white">
                  {getInitials(item.name)}
                </div>
                <div>
                  <p className="text-[15px] font-bold text-slate-900">{item.name}</p>
                  <p className="text-[13px] text-slate-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
