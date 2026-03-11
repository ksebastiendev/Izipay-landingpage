import { useI18n } from '../../i18n/useI18n'

export default function HeroSection() {
  const { t } = useI18n()
  const titleLines = t.hero.titleLines ?? [t.hero.title]

  return (
    <section className="bg-[#f6f7fb]">
      <div className="mx-auto grid w-full max-w-[1120px] items-end gap-8 px-5 pt-20 pb-[10px] md:pt-24 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-5 lg:pt-24 xl:pt-28">
        <div className="max-w-[540px] pb-3 lg:pb-8">
          <h1 className="max-w-[520px] text-[44px] font-bold leading-[1.02] tracking-[-0.035em] text-slate-900 sm:text-[50px] lg:text-[58px]">
            {titleLines.map((line, lineIndex) => {
              const words = line.split(' ')
              const previousWordsCount = titleLines
                .slice(0, lineIndex)
                .reduce((total, currentLine) => total + currentLine.split(' ').length, 0)

              return (
                <span key={`${line}-${lineIndex}`} className="hero-title-line">
                  {words.map((word, wordIndex) => (
                    <span
                      key={`${word}-${wordIndex}`}
                      className="hero-title-word"
                      style={{ '--word-delay': `${(previousWordsCount + wordIndex) * 65}ms` }}
                    >
                      {word}
                    </span>
                  ))}
                  {' '}
                </span>
              )
            })}
          </h1>
          <p className="mt-6 max-w-[510px] text-[17px] leading-[1.55] text-slate-600">
            {t.hero.description}
          </p>
          <div className="mt-9 flex max-w-[392px] items-center gap-3">
            <input
              placeholder={t.hero.emailPlaceholder}
              className="h-11 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-[13px] outline-none placeholder:text-slate-400"
            />
            <a
              href="#"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-[#008080] px-6 text-[16px] font-semibold leading-none text-white transition hover:bg-[#007373]"
            >
              {t.hero.cta}
              <img src="/landing/botonflech.svg" alt={t.hero.arrowAlt} className="cta-arrow h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img src="/landing/hero-section.png" alt={t.hero.imageAlt} className="w-full max-w-[510px] lg:max-w-[560px]" />
        </div>
      </div>
    </section>
  )
}
