import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

const faqs = [
  {
    question: 'How do i sign up for the project?',
    answer: 'Click on the inscription button, create your account, and follow the onboarding steps to activate your merchant profile.',
  },
  {
    question: 'What thing that i should prepare before starting?',
    answer: 'Prepare your business information, an email address, and your preferred payout currency to complete setup quickly.',
  },
  {
    question: 'Does my company need help for marketing advices?',
    answer: 'Yes, our team can guide you with launch recommendations and best practices to present crypto checkout to your customers.',
  },
  {
    question: 'Can I accept multiple cryptocurrencies?',
    answer: 'You can enable multiple supported coins and manage them from your dashboard based on your business preferences.',
  },
  {
    question: 'How fast are settlements processed?',
    answer: 'Settlement speed depends on network confirmation and your payout settings, usually processed shortly after validation.',
  },
  {
    question: 'Is there a dashboard to track transactions?',
    answer: 'Yes, you can monitor transaction status, amounts, and customer payments in real time from your merchant dashboard.',
  },
]

export default function FaqNewsletterSection() {
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
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1120px] gap-12 px-5 lg:grid-cols-2">
        <div>
          <h3 className="text-[52px] font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900">How we can help you?</h3>
          <p className="mt-2 max-w-[460px] text-[15px] text-slate-600">
            Follow our newsletter. We will regulary update our latest project and availability.
          </p>
          <div className="mt-7 flex max-w-[420px] items-center gap-3">
            <input
              placeholder="Email Address"
              className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-[12px] outline-none placeholder:text-slate-400"
            />
            <button className="h-10 rounded-xl bg-[#008080] px-6 text-[14px] font-semibold text-white transition hover:bg-[#007373]">Let's Connect</button>
          </div>
        </div>

        <div className="divide-y divide-slate-200 border-t border-slate-200">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={faq.question} className="py-2">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between py-3 text-left text-[16px] font-semibold text-slate-700"
                >
                  <span>{faq.question}</span>
                  <span className="ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#008080] text-[#008080]">
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>
                {isOpen && <p className="pb-3 pr-8 text-[14px] leading-6 text-slate-600">{faq.answer}</p>}
              </div>
            )
          })}
          <button
            type="button"
            onClick={toggleMoreFaqs}
            className="group mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-[#008080]"
          >
            {isMoreOpen ? 'Less FAQ' : 'More FAQ'}
            {isMoreOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}
