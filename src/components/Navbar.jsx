'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import logo from '../assets/evia-logo-primary.png'
import { useLanguage } from '../contexts/LanguageContext'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef(null)
  const pathname = usePathname()
  const localePrefix = `/${language}`

  const navItems = [
    { label: t('nav.home'), href: localePrefix },
    { label: t('nav.services'), href: `${localePrefix}/services` },
    { label: t('nav.contact'), href: `${localePrefix}/contact` },
  ]

  const handleToggle = () => {
    setMenuOpen((open) => !open)
  }

  const handleNavigate = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const current =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      setIsScrolled(current > 8)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    const updateNavbarHeight = () => {
      const height = headerRef.current?.offsetHeight
      if (height) {
        document.documentElement.style.setProperty('--navbar-height', `${height}px`)
      }
    }

    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)
    return () => window.removeEventListener('resize', updateNavbarHeight)
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => setMenuOpen(false))
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-colors ${
          isScrolled || menuOpen ? 'bg-[#0a0b0d]/90' : 'bg-[#0a0b0d]/80'
        }`}
      >
        <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between gap-6 py-4">
          <Link className="flex items-center gap-3" href={localePrefix} onClick={handleNavigate}>
            <Image src={logo} alt="Logo EVIACORE" width={200} height={46} priority sizes="200px" />
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className={`transition-colors ${
                  pathname === item.href ? 'text-white' : 'hover:text-white'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2" role="group" aria-label={t('nav.lang')}>
              <button
                type="button"
                className={`border px-2.5 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition ${
                  language === 'fr'
                    ? 'border-[#F6C94A]/50 bg-[#F6C94A]/15 text-white'
                    : 'border-white/10 text-slate-400 hover:text-white'
                }`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={`border px-2.5 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition ${
                  language === 'en'
                    ? 'border-[#F6C94A]/50 bg-[#F6C94A]/15 text-white'
                    : 'border-white/10 text-slate-400 hover:text-white'
                }`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <a
              className="group relative inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg transition-all hover:pr-12"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavigate}
            >
              {t('nav.cta')}
              <ArrowRight
                className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center p-2 text-white lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={handleToggle}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div
          className={`absolute left-0 right-0 top-full overflow-hidden border-t border-white/10 bg-[#0a0b0d]/95 backdrop-blur-lg transition-all lg:hidden ${
            menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-6 px-6 py-6 text-sm uppercase tracking-widest text-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavigate}
                className={`transition-colors ${
                  pathname === item.href ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2" role="group" aria-label={t('nav.lang')}>
              <button
                type="button"
                className={`border px-2.5 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition ${
                  language === 'fr'
                    ? 'border-[#F6C94A]/50 bg-[#F6C94A]/15 text-white'
                    : 'border-white/10 text-slate-400 hover:text-white'
                }`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <button
                type="button"
                className={`border px-2.5 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] transition ${
                  language === 'en'
                    ? 'border-[#F6C94A]/50 bg-[#F6C94A]/15 text-white'
                    : 'border-white/10 text-slate-400 hover:text-white'
                }`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>
            <a
              className="group relative inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-neutral-900 shadow-lg transition-all hover:pr-12"
              href="https://app.eviacore.com"
              target="_blank"
              rel="noreferrer"
              onClick={handleNavigate}
            >
              {t('nav.cta')}
              <ArrowRight
                className="absolute right-4 top-1/2 -translate-y-1/2 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                size={16}
                aria-hidden="true"
              />
            </a>
          </nav>
        </div>
      </header>
      <div className="h-[var(--navbar-height)]" aria-hidden="true" />
    </>
  )
}

export default Navbar
