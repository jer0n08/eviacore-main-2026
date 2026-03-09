'use client'

import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import setupIcon from '../assets/evia-service-step-setup.png'
import settingsIcon from '../assets/evia-service-step-settings.png'
import trackIcon from '../assets/evia-service-step-tracking.png'
import deliveryIcon from '../assets/evia-service-step-delivery.png'

function Services() {
  const { language, t } = useLanguage()
  const steps = t('services.steps.items')
  const timelineSteps = t('services.timelineOnline.items')
  const timelineStepsFabrication = t('services.timelineFabrication.items')
  const timelineTitle = t('services.timelineOnline.title')
  const fabricationTitle = t('services.timelineFabrication.title')
  const assemblyCapabilities = t('services.assemblyCapabilities')
  const timelinePairs = timelineSteps.reduce((rows, step, index) => {
    if (index % 2 === 0) {
      rows.push([step])
    } else {
      rows[rows.length - 1].push(step)
    }
    return rows
  }, [])
  const timelinePairsFabrication = timelineStepsFabrication.reduce((rows, step, index) => {
    if (index % 2 === 0) {
      rows.push([step])
    } else {
      rows[rows.length - 1].push(step)
    }
    return rows
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

      const revealSections = gsap.utils.toArray('.services-section')
      const pairedSections = gsap.utils.toArray(
        '.timeline-section.is-paired'
      )
      const timelineRows = gsap.utils.toArray(
        '.timeline-section.is-paired .process-row'
      )
      const simpleSteps = gsap.utils.toArray(
        '.timeline-section:not(.is-paired) .process-steps'
      )
      if (!timelineRows.length && !simpleSteps.length) {
        return
      }

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      ctx = gsap.context(() => {
        if (prefersReducedMotion) {
          if (revealSections.length) {
            gsap.set(revealSections, { opacity: 1, y: 0 })
          }
          const pairedItems = gsap.utils.toArray(
            '.timeline-section.is-paired .process-steps'
          )
          gsap.set(pairedItems, { opacity: 1, y: 0, x: 0 })
          gsap.set(timelineRows, { '--line-scale': 1, '--line-opacity': 1 })
          gsap.set(simpleSteps, { opacity: 1, y: 0 })
          return
        }


        if (revealSections.length) {
          gsap.set(revealSections, { opacity: 0, y: 28 })
          ScrollTrigger.batch(revealSections, {
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
        }

        if (pairedSections.length) {
          pairedSections.forEach((section) => {
            const rows = gsap.utils.toArray(
              section.querySelectorAll('.process-row')
            )
            if (!rows.length) {
              return
            }

            const items = []
            rows.forEach((row) => {
              const left = row.querySelector('.process-steps.left')
              const right = row.querySelector('.process-steps.right')
              if (left) items.push(left)
              if (right) items.push(right)
            })

            gsap.set(items, {
              opacity: 0,
              y: 0,
              x: (index, element) =>
                element.classList.contains('left') ? -60 : 60,
            })
            gsap.set(rows, { '--line-scale': 0, '--line-opacity': 0 })

            ScrollTrigger.batch(rows, {
              start: 'top 85%',
              onEnter: (batch) => {
                batch.forEach((row) => {
                  const left = row.querySelector('.process-steps.left')
                  const right = row.querySelector('.process-steps.right')
                  gsap.to(row, {
                    '--line-scale': 1,
                    '--line-opacity': 1,
                    duration: 0.35,
                    ease: 'power2.out',
                  })
                  if (left) {
                    gsap.to(left, {
                      opacity: 1,
                      x: 0,
                      duration: 0.5,
                      ease: 'power2.out',
                    })
                  }
                  if (right) {
                    gsap.to(right, {
                      opacity: 1,
                      x: 0,
                      duration: 0.5,
                      ease: 'power2.out',
                    })
                  }
                })
              },
              onLeaveBack: (batch) => {
                batch.forEach((row) => {
                  const left = row.querySelector('.process-steps.left')
                  const right = row.querySelector('.process-steps.right')
                  gsap.to(row, {
                    '--line-scale': 0,
                    '--line-opacity': 0,
                    duration: 0.25,
                    ease: 'power2.in',
                  })
                  if (left) {
                    gsap.to(left, {
                      opacity: 0,
                      x: -60,
                      duration: 0.35,
                      ease: 'power2.in',
                    })
                  }
                  if (right) {
                    gsap.to(right, {
                      opacity: 0,
                      x: 60,
                      duration: 0.35,
                      ease: 'power2.in',
                    })
                  }
                })
              },
            })
          })
        }

         if (simpleSteps.length) {
          gsap.set(simpleSteps, { opacity: 0, y: 18 })

          ScrollTrigger.batch(simpleSteps, {
            start: 'top 80%',
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
                y: 18,
                duration: 0.4,
                ease: 'power2.in',
                stagger: 0.08,
              })
            },
          })
        }
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
  }, [language])



  return (
    <section className="relative" id="services" key={language}>
      <div className="mx-auto w-11/12 max-w-6xl services-section py-[var(--section-spacing)]">
        <div className="mb-10 max-w-4xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            {t('services.steps.eyebrow')}
          </p>
          <h2 className="mb-4 text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
            {t('services.steps.title')}
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className={`rounded-none px-7 py-12 transition-transform duration-300 ease-out hover:-translate-y-2 ${
                index % 2 === 0
                  ? 'border-[#F6C94A] bg-[#F6C94A] text-neutral-900'
                  : 'border-white/10 bg-neutral-950 text-white'
              }`}
            >
              <div className="mb-4 flex w-full items-center justify-center" aria-hidden="true">
                {index === 0 && (
                  <img
                    src={setupIcon.src}
                    alt=""
                    className="h-18 w-18"
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                )}
                {index === 1 && (
                  <img
                    src={settingsIcon.src}
                    alt=""
                    className="h-18 w-18"
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                )}
                {index === 2 && (
                  <img
                    src={trackIcon.src}
                    alt=""
                    className="h-18 w-18"
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                )}
                {index === 3 && (
                  <img
                    src={deliveryIcon.src}
                    alt=""
                    className="h-18 w-18"
                    aria-hidden="true"
                    loading="lazy"
                    draggable="false"
                  />
                )}
              </div>
              <h3
                className={`text-lg font-semibold mb-5 ${
                  index % 2 === 0 ? 'text-neutral-900' : 'text-[#F6C94A]'
                }`}
              >
                {step.title}
              </h3>
              <p className={index % 2 === 0 ? 'text-neutral-800' : 'text-slate-300'}>
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
        <section className="timeline-section widget_1744292857459 is-paired services-section">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {timelineTitle}
              </h2>
            </div>
            <div className="main-content">
              {timelinePairs.map((pair, rowIndex) => (
                <div key={`pair-${rowIndex}`} className="process-row">
                  <div className="process-steps left">
                    {pair[0] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[0].title}
                          </h3>
                          <div className="description">
                            <p>{pair[0].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 1).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="process-steps right">
                    {pair[1] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[1].title}
                          </h3>
                          <div className="description">
                            <p>{pair[1].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 2).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
            </div>
          ))}
        </div>
          </div>
        </section>
        <section className="timeline-section widget_1744292857459 is-paired services-section">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {fabricationTitle}
              </h2>
            </div>
            <div className="main-content">
              {timelinePairsFabrication.map((pair, rowIndex) => (
                <div key={`fabrication-pair-${rowIndex}`} className="process-row">
                  <div className="process-steps left">
                    {pair[0] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[0].title}
                          </h3>
                          <div className="description">
                            <p>{pair[0].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 1).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                  <div className="process-steps right">
                    {pair[1] && (
                      <>
                        <div className="text">
                          <h3>
                            <span className="step-count" /> {pair[1].title}
                          </h3>
                          <div className="description">
                            <p>{pair[1].text}</p>
                          </div>
                        </div>
                        <span className="timeline-step-dot">
                          {String(rowIndex * 2 + 2).padStart(2, '0')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="services-section w-full text-white py-12 px-6" aria-labelledby="assembly-capabilities-title">
          <div className="mx-auto w-11/12 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 id="assembly-capabilities-title" className="text-4xl md:text-4xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
                {assemblyCapabilities.title}
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                {assemblyCapabilities.lead}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {assemblyCapabilities.sections.map((section) => (
                <div
                  key={section.title}
                  className="min-h-[260px] rounded-[24px] border border-[rgba(255,255,255,0.06)] bg-[#1c1c1c] px-[26px] py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-[#F6C94A]/40"
                >
                  <h3 className="text-lg font-semibold mb-2 text-[#F6C94A]">
                    {section.title}
                  </h3>
                  {section.description ? (
                    <p className="mb-4 text-sm text-white/70">
                      {section.description}
                    </p>
                  ) : null}
                  <ul className="space-y-3 text-sm text-white/80">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-[#F6C94A]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 text-center">
              {assemblyCapabilities.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-semibold text-[#F6C94A]">
                    {stat.value}
                  </div>
                  <p className="text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </section>
  )
}

export default Services
