export async function generateMetadata({ params }) {
  const { locale } = await params
  const title = locale === 'en'
    ? 'Terms of Sale - EVIACORE'
    : 'Conditions générales de vente - EVIACORE'
  const description = locale === 'en'
    ? 'EVIACORE terms of sale: orders, pricing, lead times, liability, and jurisdiction.'
    : 'Conditions générales de vente EVIACORE : commandes, prix, délais, responsabilités et juridiction.'

  return { title, description }
}

export default function CgvLayout({ children }) {
  return children
}
