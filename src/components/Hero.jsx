'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import heroSlideFive from '../assets/a2903c71thumbnail.jpeg'
import heroSlideSix from '../assets/mydata.jpg'
import heroSlideSeven from '../assets/hero-placeholder-1.png'
import heroSlideEight from '../assets/hero-placeholder-2.png'

function Hero() {
  const { language, t } = useLanguage()
  const titleText = t('hero.title')
  const heroSlides = [
    heroSlideFive,
    heroSlideSix,
    heroSlideSeven,
    heroSlideEight,
  ].map((slide) => slide.src ?? slide)
  const [currentSlide, setCurrentSlide] = useState(0)
  const dragStartX = useRef(0)
  const isDragging = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

    return () => clearInterval(timer)
  }, [heroSlides.length])

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const handlePointerDown = (event) => {
    if (event.button !== 0 || event.target.closest('a, button')) {
      return
    }
    isDragging.current = true
    dragStartX.current = event.clientX
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const handlePointerUp = (event) => {
    if (!isDragging.current) {
      return
    }

    const deltaX = event.clientX - dragStartX.current
    const threshold = 50

    if (deltaX > threshold) {
      goToPrevious()
    } else if (deltaX < -threshold) {
      goToNext()
    }

    isDragging.current = false
    dragStartX.current = 0
  }

  const handlePointerCancel = () => {
    isDragging.current = false
    dragStartX.current = 0
  }

  const handleDragStart = (event) => {
    event.preventDefault()
  }

  return (
    <section
      className="relative overflow-hidden bg-[#0a0f14] py-48 select-none"
      id="accueil"
      key={language}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onDragStart={handleDragStart}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden cursor-grab touch-pan-y"
        aria-hidden="true"
      >
        <div
          className="flex h-full w-full transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {heroSlides.map((slide, index) => (
            <div
              key={`hero-slide-${index}`}
              className="h-full w-full flex-[0_0_100%] bg-cover bg-center bg-no-repeat filter saturate-[0.85] contrast-[1.1] brightness-[0.6]"
              style={{ backgroundImage: `url(${slide})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.6),transparent_45%),linear-gradient(180deg,rgba(4,7,10,0.85),rgba(4,7,10,0.6))]" />
      </div>
      <div
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5"
        role="tablist"
        aria-label="Statut du carrousel"
      >
        {heroSlides.map((_, index) => (
          <button
            key={`hero-pin-${index}`}
            type="button"
            className={`h-2.5 w-2.5 rounded-full border transition ${
              index === currentSlide
                ? 'scale-110 border-[#F6C94A] bg-[#F6C94A]'
                : 'border-[#F6C94A]/50 bg-[rgba(246,201,74,0.4)]'
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Aller a l'image ${index + 1}`}
            aria-selected={index === currentSlide}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center md:px-10">
        <div className="max-w-6xl">
          <h1
            className="mb-5 select-none text-[clamp(1.75rem,5vw,6rem)] leading-[0.95] tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]"
            aria-label={titleText}
          >
            {titleText}
          </h1>
          <p className="mb-6 text-lg text-slate-300">
            {t('hero.lead')}
          </p>
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              className="group relative inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg transition-all hover:pr-12"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
            >
              {t('hero.primaryCta')}
              <ArrowRight
                className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                size={16}
                aria-hidden="true"
              />
            </a>
            <a
              className="group relative inline-flex h-12 items-center justify-center border border-white/10 bg-transparent px-6 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:pr-12"
              href={`/${language}/services`}
            >
              {t('hero.secondaryCta')}
              <ArrowRight
                className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
