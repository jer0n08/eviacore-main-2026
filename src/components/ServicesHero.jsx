'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import servicesHeroImage from '../assets/evia-services-hero.png'

function ServicesHero() {
  const { language, t } = useLanguage()
  const tags = t('servicesHero.tags')

  return (
    <>
      <section className="w-full bg-black" id="services-hero" key={language}>
        <div className="mx-auto flex min-h-[240px] w-11/12 max-w-6xl items-center justify-center">
          <img
            src={servicesHeroImage.src}
            alt={t('servicesHero.imageAlt')}
            loading="lazy"
            draggable="false"
            className="h-auto w-[420px] rounded-[40px] object-contain filter saturate-[0.85] contrast-[1.05] brightness-[0.8]"
          />
        </div>
      </section>
      <section className="relative overflow-hidden pb-24 pt-12 text-center">
        <div className="relative z-10 mx-auto w-11/12 max-w-6xl px-6 md:px-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            {t('servicesHero.eyebrow')}
          </p>
          <h1 className="mb-5 text-[clamp(1.75rem,5vw,6rem)] leading-[0.95] tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
            {t('servicesHero.title')}
          </h1>
          <p className="text-lg text-slate-300">
            {t('servicesHero.lead')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#F6C94A]/30 bg-[#0a0b0d]/60 px-3.5 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="group relative inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg transition-all hover:pr-12"
            href="https://app.eviacore.com"
            target="_blank"
            rel="noreferrer"
          >
            {t('servicesHero.primaryCta')}
            <ArrowRight
              className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
              size={16}
              aria-hidden="true"
            />
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesHero
