import { useI18n } from '../../i18n/useI18n'
import { socials } from '../products/data'

const DOCS_URL = 'https://cryptogateway-project.github.io/cryptogateway-project/'

export default function FooterSection() {
  const { t } = useI18n()

  return (
    <footer className="bg-white pt-6 pb-8 lg:pt-8">
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-5 px-[0.8rem] text-[14px] text-slate-500 sm:flex-row sm:items-center sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <a href="/" className="shrink-0">
          <img src="/landing/logos%20/logo-izichangePay-green.svg" alt="IzichangePay" className="h-[30px] w-auto" />
        </a>

        <div className="flex flex-wrap items-center gap-6 text-[14px] font-medium text-slate-500 sm:gap-8">
          <a href={DOCS_URL} target="_blank" rel="noreferrer" className="transition hover:text-[#008080]">{t.footer.documentation}</a>
          <a href="#" className="transition hover:text-[#008080]">{t.footer.products}</a>
          <a href="#" className="transition hover:text-[#008080]">{t.footer.privacy}</a>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
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
