export async function generateMetadata({ params }) {
  const { locale } = await params
  const description = locale === 'en'
    ? 'EVIACORE platform for instant PCB/PCBA quotes, component sourcing, and industrial assembly in France with expert technical follow-up.'
    : 'Plateforme EVIACORE pour chiffrage instantané, approvisionnement PCB/composants et assemblage PCBA en France avec suivi technique.'

  return { description }
}

export default function LocaleLayout({ children }) {
  return children
}
