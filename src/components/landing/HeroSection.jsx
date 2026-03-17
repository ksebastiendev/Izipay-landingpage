import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { useI18n } from '../../i18n/useI18n'

const LOGIN_PATH = '/login'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function HeroSection() {
  const { t, language } = useI18n()
  const titleLines = t.hero.titleLines ?? [t.hero.title]
  const displayedTitleLines = titleLines.slice(0, 2)
  const [heroAnimationData, setHeroAnimationData] = useState(null)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const heroLottieRef = useRef(null)
  const heroLottieSpeed = 0.8
  const orbitIcons = [
    '/landing/crypto/Doge.svg',
    '/landing/crypto/Doge-1.svg',
    '/landing/crypto/Trx.svg',
    '/landing/crypto/Group%201000002658.svg',
  ]

  useEffect(() => {
    let isMounted = true

    fetch('/landing/crypto/3D%20Bitcoin%20Animation.json')
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setHeroAnimationData(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setHeroAnimationData(null)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (heroLottieRef.current) {
      heroLottieRef.current.setSpeed(heroLottieSpeed)
    }
  }, [heroAnimationData, heroLottieSpeed])

  const handleEmailSubmit = (event) => {
    event.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setEmailError(language === 'FR' ? 'Veuillez entrer une adresse email valide.' : 'Please enter a valid email address.')
      return
    }

    setEmailError('')
    localStorage.setItem('izichange_hero_email', normalizedEmail)
    window.location.assign(`${LOGIN_PATH}?email=${encodeURIComponent(normalizedEmail)}`)
  }

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-[#274586]">
      <div className="mx-auto grid w-full items-center gap-8 px-[0.8rem] py-14 sm:px-[0.9rem] md:px-[1.2rem] md:py-16 max-w-[600px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1400px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-10 xl:gap-16">
        <div className="max-w-[620px]">
          <h1 className="max-w-[620px] text-[40px] font-bold leading-[1.03] tracking-[-0.03em] text-white sm:text-[46px] lg:text-[52px] xl:text-[54px]">
            {displayedTitleLines.map((line, lineIndex) => {
              const words = line.split(' ')
              const previousWordsCount = displayedTitleLines
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
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.55] text-white/82 lg:text-[19px]">
            {t.hero.description}
          </p>
          <form onSubmit={handleEmailSubmit} className="mt-9 max-w-[392px]">
            <div className="flex items-center gap-3">
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (emailError) {
                    setEmailError('')
                  }
                }}
                placeholder={t.hero.emailPlaceholder}
                className="h-11 flex-1 rounded-xl border border-white/70 bg-transparent px-4 text-[13px] text-white outline-none placeholder:text-white/60"
              />
              <button
                type="submit"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-[16px] font-semibold leading-none text-[#274586] shadow-[0_12px_28px_-12px_rgba(15,23,42,0.45)] transition hover:bg-[#E8EFFF]"
              >
                {t.hero.cta}
                <img src="/landing/icone%20/Right%203.svg" alt={t.hero.arrowAlt} className="cta-arrow h-3 w-3" />
              </button>
            </div>
            {emailError ? <p className="mt-2 text-[12px] text-[#ffd6d6]">{emailError}</p> : null}
          </form>
        </div>

        <div className="relative flex justify-center lg:-mt-8 lg:justify-end xl:-mt-12">
          <div className="pointer-events-none absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#008080]/20 blur-3xl lg:h-52 lg:w-52" />
          <div className="pointer-events-none absolute right-3 bottom-8 h-36 w-36 rounded-full bg-[#008080]/15 blur-3xl lg:h-48 lg:w-48" />

          {heroAnimationData ? (
            <div
              role="img"
              aria-label={t.hero.imageAlt}
              className="relative z-10 mx-auto aspect-square w-full max-w-[560px] lg:mx-0 lg:max-w-[540px]"
            >
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[72%] w-[72%] rounded-full border border-white/20" />
                <div className="absolute h-[88%] w-[88%] rounded-full border border-[#008080]/20" />
              </div>

              <div className="hero-orbit-system pointer-events-none absolute inset-0">
                {orbitIcons.map((icon, index) => (
                  <div
                    key={icon}
                    className="hero-orbit-node"
                    style={{
                      '--orbit-angle': `${index * (360 / orbitIcons.length)}deg`,
                      '--orbit-radius': 'clamp(116px, 14.5vw, 175px)',
                    }}
                  >
                    <span className="hero-orbit-badge shadow-md">
                      <img src={icon} alt="Crypto token" className="h-7 w-7 sm:h-8 sm:w-8" />
                    </span>
                  </div>
                ))}
              </div>

              <div className="hero-center-float absolute inset-0 flex items-center justify-center">
                <div className="pointer-events-none absolute h-[40%] w-[40%] rounded-full bg-[#008080]/18 blur-3xl" />
                <div className="relative z-10 w-[56%] max-w-[290px]">
                  <Lottie
                    lottieRef={heroLottieRef}
                    animationData={heroAnimationData}
                    loop
                    autoplay
                  />
                </div>
              </div>
            </div>
          ) : (
            <img
              src="/landing/image-header.png"
              alt={t.hero.imageAlt}
              className="animate-float relative z-10 w-full max-w-[560px] lg:max-w-none lg:w-full xl:w-full"
            />
          )}


        </div>
      </div>
    </section>
  )
}
