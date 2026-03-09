import '../index.css'
import AppShell from './AppShell'
import ConsentManager from './ConsentManager'

const fontStylesheetHref =
  'https://fonts.googleapis.com/css2?family=Geist:wght@400&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap'
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

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href={fontStylesheetHref} />
        <link rel="stylesheet" href={fontStylesheetHref} />
      </head>
      <body>
        <ConsentManager>
          <AppShell>{children}</AppShell>
        </ConsentManager>
      </body>
    </html>
  )
}
