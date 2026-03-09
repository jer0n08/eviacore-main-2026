'use client'

import { useEffect } from 'react'
import {
  ChartCandlestick,
  CircuitBoard,
  ClipboardList,
  FileChartColumn,
  FolderCheck,
  Upload,
} from 'lucide-react'
import Hero from '../../components/Hero'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion'
import { useLanguage } from '../../contexts/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()
  const overview = t('home.overview')
  const support = t('home.support')
  const platform = t('home.platform')
  const faq = t('home.faq')
  const combinedCards = [
    {
      title: support.cards[0].title,
      text: support.cards[0].text,
      icon: FileChartColumn,
    },
    {
      title: support.cards[1].title,
      text: support.cards[1].text,
      icon: CircuitBoard,
    },
    {
      icon: ClipboardList,
      title: support.cards[2].title,
      text: support.cards[2].text,
    },
    {
      icon: Upload,
      title: overview.cards[0].title,
      text: overview.cards[0].text,
    },
    {
      icon: FolderCheck,
      title: overview.cards[1].title,
      text: overview.cards[1].text,
    },
    {
      icon: 'loader',
      title: overview.cards[2].title,
      text: overview.cards[2].text,
    },
  ]

  useEffect(() => {
    document.body.classList.add('home-theme')
    return () => {
      document.body.classList.remove('home-theme')
    }
  }, [])

  useEffect(() => {
    let ctx
    let ScrollTrigger
    let gsap
    let active = true

    const run = async () => {
      const gsapModule = await import('gsap')
      const scrollModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.default ?? gsapModule.gsap ?? gsapModule
      ScrollTrigger = scrollModule.ScrollTrigger ?? scrollModule.default ?? scrollModule
      gsap.registerPlugin(ScrollTrigger)

      if (!active) {
        return
      }

      const sections = gsap.utils.toArray('.home-section')
      if (!sections.length) {
        return
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          gsap.set(sections, { opacity: 1, y: 0 })
          return
        }

        gsap.set(sections, { opacity: 0, y: 28 })
        ScrollTrigger.batch(sections, {
          start: 'top 85%',
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              stagger: 0.12,
            })
          },
          onLeaveBack: (batch) => {
            gsap.to(batch, {
              opacity: 0,
              y: 28,
              duration: 0.4,
              ease: 'power2.in',
              stagger: 0.08,
            })
          },
        })
      })
    }

    run()

    return () => {
      active = false
      if (ctx) {
        ctx.revert()
      }
      if (ScrollTrigger) {
        ScrollTrigger.refresh()
      }
    }
  }, [])

    return (
      <>
        <Hero />
        <section className="home-section py-[var(--section-spacing)]">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {support.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {support.title}
              </h2>
              <p className="mb-6 text-lg text-slate-300">{support.lead}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {combinedCards.slice(0, 3).map((card) => (
                <article
                  key={card.title}
                  className="min-h-[260px] rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[#1c1c1c] px-[26px] py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#F6C94A]/40"
                >
                  {card.icon === 'loader' ? (
                    <div className="relative mb-4 flex h-3.5 w-3.5 items-center justify-center" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#F6C94A] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-full w-full rounded-full bg-[#F6C94A]" />
                    </div>
                  ) : (
                    <card.icon className="mb-4 h-6 w-6 text-amber-300" aria-hidden="true" />
                  )}
                  <h3 className="text-lg font-semibold mb-5 text-[#F6C94A]">
                    {card.title}
                  </h3>
                  <p className="text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="home-section py-[var(--section-spacing)]">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {platform.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {platform.title}
              </h2>
              <p className="text-slate-300">{platform.lead}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {combinedCards.slice(3).map((card) => (
                <article
                  key={card.title}
                  className="min-h-[260px] rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[#1c1c1c] px-[26px] py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#F6C94A]/40"
                >
                  {card.icon === 'loader' ? (
                    <div className="relative mb-4 flex h-3.5 w-3.5 items-center justify-center" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#F6C94A] opacity-75 animate-ping" />
                      <span className="relative inline-flex h-full w-full rounded-full bg-[#F6C94A]" />
                    </div>
                  ) : (
                    <card.icon className="mb-4 h-6 w-6 text-amber-300" aria-hidden="true" />
                  )}
                  <h3 className="text-lg font-semibold mb-5 text-[#F6C94A]">
                    {card.title}
                  </h3>
                  <p className="text-slate-300">{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="home-section py-[var(--section-spacing)]">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="mb-10 max-w-4xl">
              <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                {faq.eyebrow}
              </p>
              <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {faq.title}
              </h2>
              <p className="text-lg text-slate-300">{faq.lead}</p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </>
    )
}
