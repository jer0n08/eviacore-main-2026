'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname() || '/'
  const segment = pathname.split('/')[1]
  const locale = segment === 'en' || segment === 'fr' ? segment : 'fr'
  return (
    <section className="relative" id="not-found">
      <div className="mx-auto w-11/12 max-w-6xl py-[var(--section-spacing)]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">Erreur 404</p>
          <h1 className="mb-4 text-4xl md:text-5xl font-semibold tracking-tight font-['Space_Mono',_IBM_Plex_Mono,_monospace]">
            Page introuvable
          </h1>
          <p className="mb-6 text-slate-300">
            La page que vous cherchez n'existe pas ou a ete deplacee.
          </p>
          <Link
            className="inline-flex h-12 items-center justify-center bg-[#F6C94A] px-6 text-sm font-semibold uppercase tracking-widest text-black shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            href={`/${locale}`}
          >
            Retour a l'accueil
          </Link>
        </div>
      </div>
    </section>
  )
}
