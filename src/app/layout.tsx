import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Footer from '@/modules/Footer'
import Header from '@/modules/Header'
import favicon from '@/public/favicon.ico'
import Providers from '@/shared/components/layout/Providers'
import '@/styles/main.scss'

export const metadata: Metadata = {
  title: 'Next scss starter kit',
  description: 'Generated by create next app',
  icons: {
    icon: favicon.src,
  },
}

const myriadPro = localFont({
  src: [
    {
      path: '../public/fonts/MyriadProBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyriadProRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MyriadProLight.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-family-base',
  weight: '700',
})

const DMSans = localFont({
  src: [
    {
      path: '../public/fonts/DMSansRegular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-family-accent',
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="page">
      <body className={`${myriadPro.variable} ${DMSans.variable} page__body`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
