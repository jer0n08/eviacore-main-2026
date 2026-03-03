'use client'

import {
  ConsentManagerProvider,
  ConsentManagerDialog,
  CookieBanner,
  useConsentManager,
} from '@c15t/nextjs'
import { useEffect } from 'react'

const GA_MEASUREMENT_ID = 'G-2JW9WRHVF7'

function getConsentOptions() {
  const backendURL = process.env.NEXT_PUBLIC_C15T_BACKEND_URL
  const baseOptions = {
    consentCategories: [
      'necessary',
      'functionality',
      'experience',
      'measurement',
      'marketing',
    ],
    react: {
      colorScheme: 'dark',
      theme: {
        'banner.card': {
          '--banner-background-color': '#0b0b0b',
          '--banner-background-color-dark': '#0b0b0b',
          '--banner-border-color': 'rgba(246, 201, 74, 0.35)',
          '--banner-border-color-dark': 'rgba(246, 201, 74, 0.35)',
          '--banner-border-radius': '0px',
        },
        'banner.header.root': {
          '--banner-text-color': 'var(--accent)',
          '--banner-text-color-dark': 'var(--accent)',
        },
        'banner.header.title': {
          '--banner-title-color': 'var(--accent)',
          '--banner-title-color-dark': 'var(--accent)',
        },
        'banner.header.description': {
          '--banner-description-color': 'var(--accent)',
          '--banner-description-color-dark': 'var(--accent)',
        },
        'banner.footer': {
          '--banner-footer-background-color': '#0b0b0b',
          '--banner-footer-background-color-dark': '#0b0b0b',
        },
        'banner.footer.accept-button': {
          '--button-text': '#0b0b0b',
          '--button-text-dark': '#0b0b0b',
          '--button-background-color': 'var(--accent)',
          '--button-background-color-dark': 'var(--accent)',
          '--button-background-color-hover': '#e5b840',
          '--button-background-color-hover-dark': '#e5b840',
          '--button-border-color': 'var(--accent)',
          '--button-border-radius': '0px',
        },
        'banner.footer.reject-button': {
          '--button-text': 'var(--accent)',
          '--button-text-dark': 'var(--accent)',
          '--button-background-color': 'transparent',
          '--button-background-color-dark': 'transparent',
          '--button-background-color-hover': 'rgba(246, 201, 74, 0.15)',
          '--button-background-color-hover-dark': 'rgba(246, 201, 74, 0.15)',
          '--button-border-color': 'var(--accent)',
          '--button-border-radius': '0px',
        },
        'banner.footer.customize-button': {
          '--button-text': 'var(--accent)',
          '--button-text-dark': 'var(--accent)',
          '--button-background-color': 'transparent',
          '--button-background-color-dark': 'transparent',
          '--button-background-color-hover': 'rgba(246, 201, 74, 0.15)',
          '--button-background-color-hover-dark': 'rgba(246, 201, 74, 0.15)',
          '--button-border-color': 'var(--accent)',
          '--button-border-radius': '0px',
        },
      },
    },
    legalLinks: {
      privacyPolicy: '/fr/privacy-policy',
      termsOfService: '/fr/mentions-legales',
    },
    translations: {
      translations: {
        fr: {
          cookieBanner: {
            description:
              'Ce site utilise des cookies pour, analyser le trafic du site.',
          },
        },
      },
      defaultLanguage: 'fr',
    },
    scripts: [
      {
        id: 'ga4',
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
        category: 'measurement',
        async: true,
      },
      {
        id: 'ga4-init',
        category: 'measurement',
        textContent: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_MEASUREMENT_ID}');`,
      },
    ],
  }

  if (!backendURL) {
    return {
      ...baseOptions,
      mode: 'offline',
    }
  }

  return {
    ...baseOptions,
    backendURL,
  }
}

function DenyByDefaultGuard() {
  const { consentInfo, consents, resetConsents, setShowPopup } =
    useConsentManager()

  useEffect(() => {
    if (!consentInfo && consents) {
      const hasNonNecessaryConsent = Object.entries(consents).some(
        ([name, value]) => name !== 'necessary' && value,
      )

      if (hasNonNecessaryConsent) {
        resetConsents()
        setShowPopup(true, true)
      }
    }
  }, [consentInfo, consents, resetConsents, setShowPopup])

  return null
}

export default function ConsentManager({ children }) {
  const options = getConsentOptions()

  return (
    <ConsentManagerProvider options={options}>
      {children}
      <DenyByDefaultGuard />
      <CookieBanner />
      <ConsentManagerDialog />
    </ConsentManagerProvider>
  )
}
