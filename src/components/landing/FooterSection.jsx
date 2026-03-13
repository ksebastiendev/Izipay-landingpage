import { useI18n } from '../../i18n/useI18n'

const socialLinks = [
  { name: 'Facebook', icon: '/landing/icone%20/facebook.svg' },
  { name: 'Twitter', icon: '/landing/icone%20/tweeter.svg' },
  { name: 'Instagram', icon: '/landing/icone%20/instagramme.svg' },
  { name: 'Telegram', icon: '/landing/icone%20/telegramme.svg' },
  { name: 'Youtube', icon: '/landing/icone%20/youtube.svg' },
]

export default function FooterSection() {
  const { t } = useI18n()

  return (
    <footer className="bg-white pt-6 pb-8 lg:pt-8">
      <div className="mx-auto flex w-full flex-col items-start justify-between gap-5 px-[0.8rem] text-[14px] text-slate-500 sm:flex-row sm:items-center sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px]">
        <div className="flex items-center text-teal-700">
          <span className="text-[30px] font-extrabold">{t.footer.brand}</span>
        </div>

        <div className="flex items-center gap-8 text-[14px] font-medium text-slate-500">
          <a href="#" className="transition hover:text-[#008080]">{t.footer.documentation}</a>
          <a href="#" className="transition hover:text-[#008080]">{t.footer.products}</a>
          <a href="#" className="transition hover:text-[#008080]">{t.footer.privacy}</a>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
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
