import { useI18n } from '../../i18n/useI18n'
import { base } from '../../../helpers'

const DOCS_URL = 'https://cryptogateway-project.github.io/cryptogateway-project/'

export default function SimpleWaySection() {
  const { t } = useI18n()

  return (
    <section className="bg-[#274586] py-20 lg:py-24">
      <div className="mx-auto grid w-full items-center gap-10 px-[0.8rem] sm:px-[0.9rem] md:px-[1.2rem] max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-16">
        <img src={base('/assets/images/productsPage/wayto-section.png')} alt={t.simpleWay.imageAlt} className="w-full max-w-[620px] lg:max-w-[700px]" />
        <div>
          <h3 className="max-w-[470px] text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white lg:text-[48px]">{t.simpleWay.title}</h3>
          <p className="mt-4 max-w-[480px] text-[16px] leading-7 text-white/65 lg:text-[18px]">
            {t.simpleWay.description}
          </p>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noreferrer"
            className="group mt-7 inline-flex h-10 items-center gap-2 rounded-xl bg-white px-6 text-[14px] font-semibold text-[#274586] transition hover:bg-[#f4f7ff]"
          >
            {t.simpleWay.cta}
            <img src={base('/assets/images/landing/icone%20/Right%203.svg')} alt={t.simpleWay.arrowAlt} className="cta-arrow h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  )
}
