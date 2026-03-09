export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Production steps - EVIACORE'
    : 'Les étapes de la production - EVIACORE'
  const description = locale === 'en'
    ? 'Discover EVIACORE’s PCBA production steps, technical capabilities, quality control, and traceability.'
    : 'Découvrez les étapes de fabrication PCBA, les capacités techniques, le contrôle qualité et la traçabilité EVIACORE.'

  return { title, description }
}

export default function ServicesLayout({ children }) {
  return children
}
