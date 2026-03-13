import { useRef } from 'react'
import { useI18n } from '../../i18n/useI18n'

const cardIcons = ['/landing/card-step1.png', '/landing/cardstep2.svg.png', '/landing/cardstep3.svg.png', '/landing/card-step1.png']

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
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-slate-900">{t.whyChoose.title}</h2>
          <div className="flex items-center gap-2">
            <button type="button" aria-label={t.whyChoose.previous} className="shrink-0" onClick={() => scrollCards(-1)}>
              <img src="/landing/Button.svg" alt={t.whyChoose.previous} className="h-11 w-11" />
            </button>
            <button type="button" aria-label={t.whyChoose.next} className="shrink-0" onClick={() => scrollCards(1)}>
              <img src="/landing/Button-1.svg" alt={t.whyChoose.next} className="h-11 w-11" />
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
                className="min-w-[280px] flex-1 rounded-xl bg-[#f7f8fb] p-7 transition-transform duration-300 hover:-translate-y-1 md:min-w-[calc((100%-2rem)/3)]"
              >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008080]">
                <img src={card.icon} alt="icon" className="h-7 w-7 object-contain" />
              </div>
              <h3 className="mt-6 text-[24px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-[14px] leading-6 text-slate-600 lg:text-[16px]">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
