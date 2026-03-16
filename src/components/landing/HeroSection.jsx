import { useI18n } from '../../i18n/useI18n'

export default function HeroSection() {
  const { t } = useI18n()
  const titleLines = t.hero.titleLines ?? [t.hero.title]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F4FFFA] via-[#DEF4F4] to-[#E8EFFF]">
      <div className="mx-auto grid w-full items-center gap-8 px-[0.8rem] pt-20 pb-[10px] sm:px-[0.9rem] md:px-[1.2rem] md:pt-24 max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16 lg:pt-24 xl:pt-28">
        <div className="max-w-[620px] pb-3 lg:pb-6 xl:pb-8">
          <h1 className="max-w-[620px] text-[40px] font-bold leading-[1.03] tracking-[-0.03em] text-[#23253D] sm:text-[46px] lg:text-[52px] xl:text-[54px]">
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
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-[#23253D]/75 lg:text-[19px]">
            {t.hero.description}
          </p>
          <div className="mt-9 flex max-w-[392px] items-center gap-3">
            <input
              placeholder={t.hero.emailPlaceholder}
              className="h-11 flex-1 rounded-xl border border-[#3257A8]/15 bg-white/95 px-4 text-[13px] text-[#23253D] outline-none placeholder:text-[#23253D]/40"
            />
            <a
              href="#"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-[#008080] px-6 text-[16px] font-semibold leading-none text-white shadow-[0_12px_28px_-12px_rgba(0,128,128,0.6)] transition hover:bg-[#007373]"
            >
              {t.hero.cta}
              <img src="/landing/botonflech.svg" alt={t.hero.arrowAlt} className="cta-arrow h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:-mt-8 lg:justify-end xl:-mt-12">
          <div className="pointer-events-none absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#008080]/20 blur-3xl lg:h-52 lg:w-52" />
          <div className="pointer-events-none absolute right-3 bottom-8 h-36 w-36 rounded-full bg-[#008080]/15 blur-3xl lg:h-48 lg:w-48" />

          <img
            src="/landing/image-header.png"
            alt={t.hero.imageAlt}
            className="animate-float relative z-10 w-full max-w-[560px] lg:max-w-none lg:w-full xl:w-full"
          />

          <div className="animate-float absolute -right-1 bottom-3 z-20 w-[164px] rounded-2xl border border-white/60 bg-white/90 p-3 shadow-[0_18px_40px_-22px_rgba(35,37,61,0.45)] backdrop-blur-md sm:right-3 lg:-right-10 lg:bottom-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#23253D]/60">Terminal</p>
            <p className="mt-1 text-[13px] font-semibold text-[#23253D]">POS Connected</p>
            <div className="mt-3 rounded-lg border border-[#3257A8]/20 bg-[#E8EFFF] px-2 py-1.5 text-[11px] font-medium text-[#3257A8]">
              Contactless Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
