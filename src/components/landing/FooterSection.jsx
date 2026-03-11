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
    <footer className="bg-white py-8">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-start justify-between gap-5 border-t border-slate-200 px-4 pt-8 text-[14px] text-slate-500 sm:flex-row sm:items-center md:px-5">
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
