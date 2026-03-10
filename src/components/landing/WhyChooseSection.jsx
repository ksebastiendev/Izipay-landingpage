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
]

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1120px] px-5">
        <h2 className="text-[48px] font-extrabold tracking-[-0.02em] text-slate-900">Why Chose IzichangePay ?</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-xl bg-[#f7f8fb] p-7">
              <img src={card.icon} alt="icon" className="h-11 w-11" />
              <h3 className="mt-6 text-[22px] font-bold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
