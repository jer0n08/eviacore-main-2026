export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Privacy Policy - EVIACORE'
    : 'Politique de confidentialité - EVIACORE'
  const description = locale === 'en'
    ? 'EVIACORE privacy policy: personal data, purposes, GDPR rights, and contact.'
    : 'Politique de confidentialité EVIACORE : données personnelles, finalités, droits RGPD et contact.'

  return { title, description }
}

export default function DonneesPersonnellesLayout({ children }) {
  return children
}
