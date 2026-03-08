'use client'

import { forwardRef } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Footer = forwardRef(function Footer(_props, ref) {
  const { language, t } = useLanguage()
  const localePrefix = `/${language}`

  const tagline = t('footer.tagline')
  const address = t('footer.address')
  const rights = t('footer.rights')
  const rightsLines = rights.split('\n')
  const mapQuery = '8 Allée Isaac Newton 33650 Martillac'
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`

  return (
    <footer className="py-10 pb-16" key={language} ref={ref}>
      <div className="mx-auto flex w-11/12 max-w-6xl flex-wrap justify-between gap-5 text-[0.85rem] text-slate-400">
        {tagline || address ? (
          <div className="flex flex-col gap-1.5">
            {tagline ? <p>{tagline}</p> : null}
            {address ? (
              <a
                className="text-slate-300 underline decoration-[#F6C94A]/60 underline-offset-4 transition-colors hover:text-[#F6C94A]"
                href={mapHref}
                target="_blank"
                rel="noreferrer"
              >
                {address}
              </a>
            ) : null}
          </div>
        ) : null}
        <p className="text-slate-300">
          {rightsLines.map((line, index) => (
            <span key={`${line}-${index}`}>
              {line.includes('Allée Isaac Newton') ? (
                <a
                  className="transition-colors hover:text-[#F6C94A]"
                  style={{
                    textDecoration: 'underline',
                    textDecorationColor: 'rgba(246, 201, 74, 0.6)',
                    textUnderlineOffset: '4px',
                  }}
                  href={mapHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {line}
                </a>
              ) : (
                line
              )}
              {index < rightsLines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
        <div className="ml-auto flex flex-wrap gap-4 text-[0.75rem] uppercase tracking-[0.12em] text-white">
          <a className="transition-colors hover:text-[#F6C94A]" href={`${localePrefix}/cgv`}>
            {t('footer.cgv')}
          </a>
          <a className="transition-colors hover:text-[#F6C94A]" href={`${localePrefix}/mentions-legales`}>
            {t('footer.legal')}
          </a>
          <a className="transition-colors hover:text-[#F6C94A]" href={`${localePrefix}/donnees-personnelles`}>
            {t('footer.privacy')}
          </a>
        </div>
      </div>
      <button
        className="fixed bottom-7 right-7 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#F6C94A]/45 bg-[#0a0b0d]/85 text-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#F6C94A]/70 hover:shadow-[0_10px_20px_rgba(246,201,74,0.15)]"
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Remonter en haut de la page"
      >
        <ArrowUp aria-hidden="true" size={16} />
      </button>
    </footer>
  )
})

export default Footer
