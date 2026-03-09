export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Contact Us - EVIACORE'
    : 'Contactez-Nous - EVIACORE'
  const description = locale === 'en'
    ? 'Contact EVIACORE for PCBA projects, quotations, and technical support.'
    : 'Contactez EVIACORE pour vos projets PCBA, demandes de devis et support technique.'

  return { title, description }
}

export default function ContactLayout({ children }) {
  return children
}
