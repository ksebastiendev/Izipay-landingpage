const faqs = [
  'How do i sign up for the project?',
  'What thing that i should prepare before starting?',
  'Does my company need help for marketing advices?',
]

export default function FaqNewsletterSection() {
  return (
    <section className="bg-white pb-16 pt-10">
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
            <button className="h-10 rounded-full bg-teal-600 px-5 text-[12px] font-semibold text-white">Let's Connect</button>
          </div>
        </div>

        <div className="divide-y divide-slate-200 border-t border-slate-200">
          {faqs.map((faq) => (
            <button
              key={faq}
              className="flex w-full items-center justify-between py-5 text-left text-[16px] font-semibold text-slate-700"
            >
              {faq}
              <span className="text-teal-600">●</span>
            </button>
          ))}
          <a href="#" className="group inline-flex items-center gap-2 pt-5 text-[14px] font-semibold text-[#008080]">
            More FAQ
            <img src="/landing/botonflech.svg" alt="Arrow" className="cta-arrow h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
