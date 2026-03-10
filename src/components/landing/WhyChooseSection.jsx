import { useRef } from 'react'

const cards = [
  {
    icon: '/landing/card-step1.png',
    title: 'Instant Crypto Payments',
    text: 'Accept payments in Bitcoin, Ethereum and other cryptocurrencies directly from your customers worldwide.',
  },
  {
    icon: '/landing/cardstep2.svg.png',
    title: 'Global Customers',
    text: 'Allow customers from anywhere in the world to pay you easily using cryptocurrency without traditional banking limitations.',
  },
  {
    icon: '/landing/cardstep3.svg.png',
    title: 'Secure Transactions',
    text: 'Every transaction is secured by blockchain technology and visible in real time through your merchant dashboard.',
  },
  {
    icon: '/landing/card-step1.png',
    title: 'Instant Crypto Payments',
    text: 'Accept payments in Bitcoin, Ethereum and other cryptocurrencies directly from your customers worldwide.',
  },
]

export default function WhyChooseSection() {
  const carouselRef = useRef(null)

  const scrollCards = (direction) => {
    const container = carouselRef.current
    if (!container) return

    const firstCard = container.querySelector('[data-card]')
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : container.clientWidth / 3
    container.scrollBy({ left: direction * (cardWidth + 16), behavior: 'smooth' })
  }

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-slate-900">Why Chose IzichangePay ?</h2>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Previous" className="shrink-0" onClick={() => scrollCards(-1)}>
              <img src="/landing/Button.svg" alt="Previous" className="h-11 w-11" />
            </button>
            <button type="button" aria-label="Next" className="shrink-0" onClick={() => scrollCards(1)}>
              <img src="/landing/Button-1.svg" alt="Next" className="h-11 w-11" />
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
                className="min-w-[280px] flex-1 rounded-xl bg-[#f7f8fb] p-7 md:min-w-[calc((100%-2rem)/3)]"
              >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#008080]">
                <img src={card.icon} alt="icon" className="h-7 w-7 object-contain" />
              </div>
              <h3 className="mt-6 text-[22px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
