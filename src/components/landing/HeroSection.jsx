import { useEffect, useRef, useState } from 'react'
import Lottie from 'lottie-react'
import { useI18n } from '../../i18n/useI18n'
import { base } from '../../../helpers'
import Bitcoin3D from "../../assets/3D_Bitcoin_Animation.json"

const LOGIN_PATH = '/login'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function HeroSection() {
  console.log("here")
  console.log(Bitcoin3D)
  const { t, language } = useI18n()
  const titleLines = t.hero.titleLines ?? [t.hero.title]
  const displayedTitleLines = titleLines.slice(0, 2)
  const [isBitcoinVisualVisible, setIsBitcoinVisualVisible] = useState(true)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const heroLottieRef = useRef(null)
  const heroLottieSpeed = 0.8
  const primaryOrbitIcons = [
    base('/assets/images/landing/crypto/btc.svg'),
    base('/assets/images/landing/crypto/Group%201000002658.svg'),
    base('/assets/images/landing/crypto/Trx.svg'),
    base('/assets/images/landing/crypto/usdt.svg'),
  ]
  const secondaryOrbitIcons = [
    base('/assets/images/landing/crypto/bnb.svg'),
    base('/assets/images/landing/crypto/ADA.svg'),
    base('/assets/images/landing/crypto/Usdc.svg'),
    base('/assets/images/landing/crypto/xrp.svg'),
    base('/assets/images/landing/crypto/Doge%20copy.svg'),
    base('/assets/images/landing/crypto/XML.svg'),
  ]
  const humanHeroOrbitCards = [
    {
      src: base('/assets/images/landing/image-hero-2/curencie.svg'),
      alt: 'Currencies card',
      angle: '0deg',
      radius: 'clamp(120px, 15vw, 190px)',
      sizeClass: 'w-[50%] max-w-[245px]',
    },
    {
      src: base('/assets/images/landing/image-hero-2/customer.svg'),
      alt: 'Customer review card',
      angle: '90deg',
      radius: 'clamp(120px, 15vw, 190px)',
      sizeClass: 'w-[50%] max-w-[245px]',
    },
    {
      src: base('/assets/images/landing/image-hero-2/curencie.svg'),
      alt: 'Currencies card',
      angle: '180deg',
      radius: 'clamp(120px, 15vw, 190px)',
      sizeClass: 'w-[50%] max-w-[245px]',
    },
    {
      src: base('/assets/images/landing/image-hero-2/customer.svg'),
      alt: 'Customer review card',
      angle: '270deg',
      radius: 'clamp(120px, 15vw, 190px)',
      sizeClass: 'w-[50%] max-w-[245px]',
    },
  ]

  

  useEffect(() => {
    if (heroLottieRef.current) {
      heroLottieRef.current.setSpeed(heroLottieSpeed)
    }
  }, [heroLottieRef.current])

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setIsBitcoinVisualVisible((previous) => !previous)
    }, isBitcoinVisualVisible ? 10000 : 5000)

    return () => clearTimeout(timeoutId)
  }, [ isBitcoinVisualVisible])

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
                <img src={base('/assets/images/landing/icone%20/Right%203.svg')} alt={t.hero.arrowAlt} className="cta-arrow h-3 w-3" />
              </button>
            </div>
            {emailError ? <p className="mt-2 text-[12px] text-[#ffd6d6]">{emailError}</p> : null}
          </form>
        </div>

        <div className="relative flex justify-center lg:-mt-8 lg:justify-end xl:-mt-12">
          <div className="pointer-events-none absolute -left-8 top-8 h-40 w-40 rounded-full bg-[#008080]/20 blur-3xl lg:h-52 lg:w-52" />
          <div className="pointer-events-none absolute right-3 bottom-8 h-36 w-36 rounded-full bg-[#008080]/15 blur-3xl lg:h-48 lg:w-48" />

          <div className="relative z-10 mx-auto aspect-square w-full max-w-[560px] lg:mx-0 lg:max-w-[540px]" role="img" aria-label={t.hero.imageAlt}>
              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isBitcoinVisualVisible ? 'opacity-0' : 'opacity-100'}`}
              >
                <div className="hero-human-visual relative h-full w-full">
                  <div className="pointer-events-none absolute left-[66%] top-[27%] z-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-[300px] w-[300px] rounded-full border border-white/28" />
                    <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/22" />
                    <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/16" />
                  </div>

                  <div className="hero-human-orbit absolute inset-0 z-10">
                    {humanHeroOrbitCards.map((card, index) => (
                      <div
                        key={`hero-orbit-card-fallback-${index}`}
                        className="hero-human-orbit-node"
                        style={{ '--hero-card-angle': card.angle, '--hero-card-radius': card.radius }}
                      >
                        <img
                          src={card.src}
                          alt={card.alt}
                          className={`hero-human-orbit-card ${card.sizeClass}`}
                        />
                      </div>
                    ))}
                  </div>

                  <img
                    src="/assets/images/landing/image-hero-2/imag-bonne-dame.svg"
                    alt={t.hero.imageAlt}
                    className="relative z-20 ml-auto h-full w-auto max-w-[68%] object-contain"
                  />
                </div>
              </div>

              <div
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isBitcoinVisualVisible ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="h-[64%] w-[64%] rounded-full border border-white/24" />
                  <div className="absolute h-[78%] w-[78%] rounded-full border border-[#2ed7d7]/18" />
                  <div className="absolute h-[92%] w-[92%] rounded-full border border-dashed border-[#8cc6ff]/18" />
                </div>

                <div className="hero-orbit-system pointer-events-none absolute inset-0">
                  {primaryOrbitIcons.map((icon, index) => (
                    <div
                      key={`primary-${icon}`}
                      className="hero-orbit-node"
                      style={{
                        '--orbit-angle': `${index * (360 / primaryOrbitIcons.length)}deg`,
                        '--orbit-radius': 'clamp(116px, 14.5vw, 175px)',
                      }}
                    >
                      <span className="hero-orbit-badge shadow-md">
                        <img src={icon} alt="Crypto token" className="h-7 w-7 sm:h-8 sm:w-8" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hero-orbit-system hero-orbit-system-secondary pointer-events-none absolute inset-0">
                  {secondaryOrbitIcons.map((icon, index) => (
                    <div
                      key={`secondary-${icon}`}
                      className="hero-orbit-node"
                      style={{
                        '--orbit-angle': `${index * (360 / secondaryOrbitIcons.length)}deg`,
                        '--orbit-radius': 'clamp(148px, 19vw, 228px)',
                      }}
                    >
                      <span className="hero-orbit-badge hero-orbit-badge-secondary shadow-md">
                        <img src={icon} alt="Crypto token" className="h-6 w-6 sm:h-7 sm:w-7" />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="hero-center-float absolute inset-0 flex items-center justify-center">
                  <div className="pointer-events-none absolute h-[40%] w-[40%] rounded-full bg-[#008080]/18 blur-3xl" />
                  <div className="relative z-10 w-[56%] max-w-[290px]">
                    <Lottie
                      animationData={Bitcoin3D}
                      lottieRef={heroLottieRef}
                      loop
                      autoplay
                    />
                  </div>
                </div>
              </div>
            </div>


        </div>
      </div>
    </section>
  )
}
