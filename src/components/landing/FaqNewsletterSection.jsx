import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useI18n } from '../../i18n/useI18n'

export default function FaqNewsletterSection() {
  const { t } = useI18n()
  const faqs = t.faqNewsletter.faqs

  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const defaultFaqCount = 3
  const visibleFaqCount = isMoreOpen ? faqs.length : defaultFaqCount

  const visibleFaqs = faqs.slice(0, visibleFaqCount)

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index))
  }

  const toggleMoreFaqs = () => {
    setIsMoreOpen((prev) => {
      const nextIsOpen = !prev

      if (!nextIsOpen && openFaqIndex !== null && openFaqIndex >= defaultFaqCount) {
        setOpenFaqIndex(null)
      }

      return nextIsOpen
    })
  }

  return (
    <section className="bg-[#F4FFFA] pt-16 pb-16 lg:pt-20 lg:pb-20">
      <div className="mx-auto grid w-full gap-10 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12 xl:gap-14">
        <div>
          <h3 className="max-w-[560px] text-[42px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#23253D] lg:text-[46px]">{t.faqNewsletter.title}</h3>
          <p className="mt-2 max-w-[460px] text-[16px] text-[#23253D]/65 lg:text-[18px]">
            {t.faqNewsletter.description}
          </p>
          <div className="mt-7 flex max-w-[420px] items-center gap-3">
            <input
              placeholder={t.faqNewsletter.emailPlaceholder}
              className="h-10 flex-1 rounded-xl border border-[#3257A8]/20 bg-white px-4 text-[12px] text-[#23253D] outline-none placeholder:text-[#23253D]/40"
            />
            <button className="h-10 rounded-xl bg-[#008080] px-6 text-[14px] font-semibold text-white transition hover:bg-[#007373]">{t.faqNewsletter.cta}</button>
          </div>
        </div>

        <div className="divide-y divide-[#23253D]/12 border-t border-[#23253D]/12 pt-1">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between py-3 text-left text-[16px] font-semibold text-[#23253D]"
                >
                  <span>{faq.question}</span>
                  <span className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#008080] text-[#008080]">
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>
                {isOpen && <p className="pb-3 pr-8 text-[15px] leading-6 text-[#23253D]/65 lg:text-[17px]">{faq.answer}</p>}
              </div>
            )
          })}
          <button
            type="button"
            onClick={toggleMoreFaqs}
            className="group mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#008080]"
          >
            {isMoreOpen ? t.faqNewsletter.lessFaq : t.faqNewsletter.moreFaq}
            {isMoreOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}
