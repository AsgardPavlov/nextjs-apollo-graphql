import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '@/i18n.config'
import Header from '@/app/[lang]/_components/Header'

import { Playfair_Display_SC, Montserrat } from 'next/font/google'
import Providers from './providers'
import Footer from '@/app/[lang]/_components/Footer'
import { Toaster } from 'react-hot-toast'
import WhatsappIcon from '@/components/icons/WhatsappIcon'
import WidgetContainer from '@/app/[lang]/_components/Widget/WidgetContainer'

const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-playfair-display-sc'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Tuimaada Real Estate',
  description: 'International Real Estate Agency'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className='light' style={{ colorScheme: 'light' }}>
      <body className={`${playfairDisplaySC.variable} ${montserrat.variable}`}>
        <Providers>
          <Header lang={params.lang} />
          <main>
            <Toaster
              position='top-center'
              toastOptions={{
                duration: 6000
              }}
              containerClassName='font-mono'
              reverseOrder={false}
            />
            {children}
            <WidgetContainer lang={params.lang} />
          </main>
          <Footer lang={params.lang} />
        </Providers>
      </body>
    </html>
  )
}
