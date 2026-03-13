import { useI18n } from '../../i18n/useI18n'

export default function HeroSection() {
  const { t } = useI18n()
  const titleLines = t.hero.titleLines ?? [t.hero.title]

  return (
    <section className="bg-[#00808014]">
      <div className="mx-auto grid w-full items-center gap-8 px-[0.8rem] pt-20 pb-[10px] sm:px-[0.9rem] md:px-[1.2rem] md:pt-24 max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16 lg:pt-24 xl:pt-28">
        <div className="max-w-[620px] pb-3 lg:pb-6 xl:pb-8">
          <h1 className="max-w-[620px] text-[44px] font-bold leading-[1.02] tracking-[-0.03em] text-slate-900 sm:text-[50px] lg:text-[56px] xl:text-[58px]">
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
          <p className="mt-6 max-w-[560px] text-[18px] leading-[1.55] text-slate-600 lg:text-[21px]">
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

        <div className="relative flex justify-center lg:-mt-8 lg:justify-end xl:-mt-12">
          <img src="/landing/image-header.png" alt={t.hero.imageAlt} className="w-full max-w-[560px] lg:max-w-none lg:w-full xl:w-full" />
        </div>
      </div>
    </section>
  )
}
