import { useI18n } from '../../i18n/useI18n'

const getInitials = (fullName) =>
  fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('')

const testimonialAvatars = {
  'Sophie B': '/landing/avatar-sophieB.jpeg',
  'Emma R': '/landing/avatarEmma.jpeg',
  'Maxime L': '/landing/avatarMaxiemM.jpeg',
}

export default function TestimonialsSection() {
  const { t } = useI18n()

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <h3 className="max-w-[720px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#23253D] lg:text-[46px]">{t.testimonials.title}</h3>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {t.testimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex min-h-[240px] flex-col justify-between rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] transition-transform duration-300 hover:-translate-y-1 lg:min-h-[255px] lg:p-6"
            >
              <p className="max-w-[30ch] text-[14px] leading-[1.75] text-slate-600 lg:text-[15px]">
                {item.text}
              </p>
              <div className="mt-7 flex items-center gap-3">
                {testimonialAvatars[item.name] ? (
                  <img
                    src={testimonialAvatars[item.name]}
                    alt={item.name}
                    className="h-10 w-10 shrink-0 rounded-full object-cover lg:h-11 lg:w-11"
                  />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#008080] text-[14px] font-bold text-white lg:h-11 lg:w-11">
                    {getInitials(item.name)}
                  </div>
                )}
                <div className="leading-tight">
                  <p className="text-[15px] font-bold text-slate-900">{item.name}</p>
                  <p className="mt-1 text-[13px] text-slate-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
