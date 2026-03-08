'use client'

import { useEffect } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'

export default function MentionsLegalesPage() {
  const { language, t } = useLanguage()
  const data = t('legalPage')

  useEffect(() => {
    document.body.classList.add('home-theme')
    return () => {
      document.body.classList.remove('home-theme')
    }
  }, [])

  return (
    <section className="relative" id="mentions-legales" key={language}>
      <div className="mx-auto w-11/12 max-w-6xl py-[var(--section-spacing)]">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
            {data.eyebrow}
          </p>
          <h1 className="mb-4 text-4xl md:text-5xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
            {data.title}
          </h1>
          {data.lead ? <p className="text-slate-300">{data.lead}</p> : null}
        </div>

        <div className="max-w-4xl space-y-8 text-slate-300">
          {data.sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 text-2xl md:text-3xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace] text-[#F6C94A]">
                {section.title}
              </h2>
              <p>
                {section.lines.map((line, index) => (
                  <span key={`${section.title}-${index}`}>
                    {line}
                    {index < section.lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
