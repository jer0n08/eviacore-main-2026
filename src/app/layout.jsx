import { headers } from 'next/headers'
import Script from 'next/script'
import '../index.css'
import AppShell from './AppShell'

const fontStylesheetHref =
  'https://fonts.googleapis.com/css2?family=Geist:wght@400&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
const frDescription =
  'Lancez vos projets électroniques en ligne, recevez un chiffrage immédiat et profitez d’un assemblage industriel en France, réalisé sur lignes automatisées avec machines pick-and-place et fours de refusion de précision.'
const enDescription =
  'Launch your electronics projects online, get instant pricing, and benefit from industrial assembly in France on automated lines with pick-and-place machines and precision reflow ovens.'

export const metadata = {
  title: 'Fabriquer votre carte électronique - EVIACORE',
  metadataBase: new URL('https://eviacore.com'),
  alternates: {
    languages: {
      fr: '/fr',
      en: '/en',
    },
  },
}

export default async function RootLayout({ children }) {
  const requestHeaders = await headers()
  const acceptLanguage = requestHeaders.get('accept-language') || ''
  const isFrance = /(^|,|;)\s*fr-FR\b/i.test(acceptLanguage)
  const description = isFrance ? frDescription : enDescription

  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={fontStylesheetHref} />
        <link rel="stylesheet" href={fontStylesheetHref} />
        <meta name="description" content={description} />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="ecf1da71-1804-4387-9e96-5c5556b44d67"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2JW9WRHVF7"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          data-cookieconsent="statistics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-2JW9WRHVF7');`,
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
