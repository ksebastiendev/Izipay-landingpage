import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../../i18n/useI18n'

export default function BusinessTypesSection() {
  const { t } = useI18n()
  const sectionRef = useRef(null)
  const [activeStep, setActiveStep] = useState(0)

  const steps = useMemo(
    () => [
      {
        id: '01',
        title: t.businessTypes.items[0].title,
        text: t.businessTypes.items[0].text,
        image: '/assets/images/landing/business-section/E-commercant-image.png',
      },
      {
        id: '02',
        title: t.businessTypes.items[1].title,
        text: t.businessTypes.items[1].text,
        image: '/assets/images/landing/business-section/Saas-Plateforme.png',
      },
      {
        id: '03',
        title: t.businessTypes.items[2].title,
        text: t.businessTypes.items[2].text,
        image: '/assets/images/landing/business-section/Freelancer.png',
      },
    ],
    [t.businessTypes.items],
  )

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || window.innerWidth < 1024) {
        return
      }

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const start = window.scrollY + rect.top
      const end = start + section.offsetHeight - window.innerHeight
      const total = end - start

      if (total <= 0) {
        setActiveStep(0)
        return
      }

      const progress = Math.min(Math.max((window.scrollY - start) / total, 0), 1)
      const nextStep = Math.min(steps.length - 1, Math.floor(progress * steps.length))
      setActiveStep((prev) => (prev === nextStep ? prev : nextStep))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [steps.length])

  return (
    <section ref={sectionRef} className="bg-[#E8EFFF]/40 py-16 lg:py-20">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <h3 className="mx-auto max-w-[900px] text-center text-[38px] font-extrabold leading-[1.04] tracking-[-0.035em] text-[#23253D] sm:text-[44px] lg:text-[52px]">
          {t.businessTypes.title}
        </h3>
      </div>

      <div className="mx-auto mt-10 w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:hidden">
        <div className="space-y-8">
          {steps.map((step) => (
            <article key={step.id} className="rounded-3xl border border-[#3257A8]/14 bg-white/80 p-4">
              <img src={step.image} alt={t.businessTypes.imageAlt} className="h-56 w-full rounded-2xl object-cover" />
              <p className="mt-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#008080]">{step.id}</p>
              <h4 className="mt-2 text-[30px] font-bold leading-[1.05] tracking-[-0.03em] text-[#23253D]">{step.title}</h4>
              <p className="mt-3 text-[16px] leading-7 text-[#23253D]/68">{step.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="hidden lg:mt-14 lg:block lg:h-[300vh]">
        <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-6rem)] lg:items-start">
          <div className="mx-auto grid w-full items-center gap-16 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-24">
            <div>
              <div className="mt-4 flex items-start gap-9">
                <div className="mt-1 flex flex-col gap-3">
                  {steps.map((step, index) => (
                    <span
                      key={`dot-${step.id}`}
                      className={`w-[6px] rounded-[10px] transition-all duration-300 ${
                        activeStep === index ? 'h-8 bg-[#008080]' : 'h-[6px] bg-[#c9d4e5]'
                      }`}
                    />
                  ))}
                </div>

                <div className="relative h-[275px] w-full">
                  {steps.map((step, index) => (
                    <article
                      key={`text-${step.id}`}
                      className={`absolute inset-0 transition-all duration-500 ${
                        activeStep === index ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-8 opacity-0'
                      }`}
                    >
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#008080]">
                        {step.id} / {step.title}
                      </p>
                      <h4 className="mt-4 text-[56px] font-bold leading-[0.96] tracking-[-0.04em] text-[#23253D]">{step.title}</h4>
                      <p className="mt-6 max-w-[560px] text-[24px] leading-[1.48] text-[#23253D]/66">{step.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative h-[62vh] overflow-hidden rounded-[2.5rem] bg-white/60 shadow-[0_40px_100px_-20px_rgba(35,37,61,0.16)]">
              {steps.map((step, index) => (
                <img
                  key={`image-${step.id}`}
                  src={step.image}
                  alt={t.businessTypes.imageAlt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                    activeStep === index ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
