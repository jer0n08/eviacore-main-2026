export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Legal Notice - EVIACORE'
    : 'Mentions légales - EVIACORE'
  const description = locale === 'en'
    ? 'EVIACORE legal notice: publisher, hosting, intellectual property, and liability.'
    : 'Mentions légales EVIACORE : éditeur, hébergement, propriété intellectuelle et responsabilités.'

  return { title, description }
}

export default function MentionsLegalesLayout({ children }) {
  return children
}
