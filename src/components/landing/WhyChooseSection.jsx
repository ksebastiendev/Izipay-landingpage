import { useRef } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { base } from '../../../helpers'

const cardIcons = [base('/assets/images/landing/card-step1.png'), base('/assets/images/landing/cardstep2.svg.png'), base('/assets/images/landing/cardstep3.svg.png'), base('/assets/images/landing/card-step1.png')]

const iconBadgeStyles = [
  'border-[#006666] bg-[#008080] shadow-[0_10px_24px_-14px_rgba(0,128,128,0.5)] group-hover:shadow-[0_16px_28px_-16px_rgba(0,128,128,0.6)]',
  'border-[#274d8a] bg-[#3257A8] shadow-[0_10px_24px_-14px_rgba(50,87,168,0.5)] group-hover:shadow-[0_16px_28px_-16px_rgba(50,87,168,0.6)]',
  'border-[#b8303c] bg-[#DC3F4D] shadow-[0_10px_24px_-14px_rgba(220,63,77,0.45)] group-hover:shadow-[0_16px_28px_-16px_rgba(220,63,77,0.55)]',
  'border-[#1a1c2e] bg-[#23253D] shadow-[0_10px_24px_-14px_rgba(35,37,61,0.4)] group-hover:shadow-[0_16px_28px_-16px_rgba(35,37,61,0.5)]',
]

export default function WhyChooseSection() {
  const carouselRef = useRef(null)
  const { t } = useI18n()

  const cards = t.whyChoose.cards.map((card, index) => ({
    ...card,
    icon: cardIcons[index],
  }))

  const scrollCards = (direction) => {
    const container = carouselRef.current
    if (!container) return

    const firstCard = container.querySelector('[data-card]')
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : container.clientWidth / 3
    container.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' })
  }

  return (
    <section className="bg-[#F4FFFA] py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[40px] font-extrabold tracking-[-0.02em] text-[#23253D] lg:text-[44px]">{t.whyChoose.title}</h2>
          <div className="flex items-center gap-2">
            <button type="button" aria-label={t.whyChoose.previous} className="shrink-0" onClick={() => scrollCards(-1)}>
              <img src={base('/assets/images/landing/Button.svg')} alt={t.whyChoose.previous} className="h-11 w-11" />
            </button>
            <button type="button" aria-label={t.whyChoose.next} className="shrink-0" onClick={() => scrollCards(1)}>
              <img src={base('/assets/images/landing/Button-1.svg')} alt={t.whyChoose.next} className="h-11 w-11" />
            </button>
          </div>
        </div>
        <div className="mt-9 overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((card, index) => (
              <article
                key={`${card.title}-${index}`}
                data-card
                className="group relative min-w-[280px] flex-1 overflow-hidden rounded-3xl border border-[#3257A8]/12 bg-gradient-to-br from-[#F4FFFA] via-white to-[#E8EFFF]/50 p-7 shadow-[0_14px_30px_-18px_rgba(35,37,61,0.28)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#008080]/28 hover:shadow-xl md:min-w-[calc((100%-2rem)/3)]"
              >
                <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${iconBadgeStyles[index % iconBadgeStyles.length]}`}>
                  <img src={card.icon} alt="icon" className="h-7 w-7 object-contain" />
                </div>
                <h3 className="mt-6 text-[24px] font-bold leading-tight text-[#23253D]">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-6 text-[#23253D]/72 lg:text-[16px]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
