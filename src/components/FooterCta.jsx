'use client'

import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

function FooterCta() {
  const { t } = useLanguage()

  return (
    <section className="pt-0 pb-[var(--section-spacing)]">
      <div className="mx-auto flex w-11/12 max-w-6xl flex-col items-center gap-5 text-center text-slate-100">
        <p className="text-base md:text-lg">{t('footer.ctaText')}</p>
        <a
          className="group relative inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg transition-all hover:pr-12"
          href="https://app.eviacore.com"
          target="_blank"
          rel="noreferrer"
        >
          {t('nav.cta')}
          <ArrowRight
            className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
            size={16}
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  )
}

export default FooterCta
