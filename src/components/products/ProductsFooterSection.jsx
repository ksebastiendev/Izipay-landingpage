import { footerLinks, socials } from './data'

export default function ProductsFooterSection() {
  return (
    <footer className="bg-white py-8">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-between gap-5 border-t border-slate-200 px-4 pt-8 text-[14px] text-slate-500 sm:flex-row sm:items-center md:px-5">
        <a href="/" className="shrink-0">
          <img src="/landing/izipaylogo.png" alt="IzichangePay" className="h-[30px] w-auto" />
        </a>

        <div className="flex flex-wrap items-center gap-6 text-[14px] font-medium text-slate-500 sm:gap-8">
          {footerLinks.map((item) => (
            <a key={item} href="#" className="transition hover:text-[#008080]">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a
              key={item.name}
              href="#"
              aria-label={item.name}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#008080] transition hover:bg-[#007373]"
            >
              <img src={item.icon} alt={item.name} className="h-3.5 w-3.5 object-contain" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
