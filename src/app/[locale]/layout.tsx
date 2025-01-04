import { Metadata } from 'next';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/nav-bar/Header';
import LocaleWrapper from '@/components/providers/LocaleWrapper';
import AnimatedSocialMenu from '@/components/social';

import { siteConfig } from '@/constant/config';
import { farsi, montserrat } from '@/fonts/fonts';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={locale}
      dir={locale === 'en' ? 'ltr' : 'rtl'}
      className={`${montserrat.variable} rtl:${farsi}`}
    >
      <body className='scroll-smooth relative'>
        <Toaster
          toastOptions={{
            style: {
              background: 'rgb(51, 65, 85) ',
              color: '#fff',
            },
          }}
        />
        <LocaleWrapper locale={locale}>
          <Header />
          {children}
          <div className='fixed bottom-2 right-2 z-50 h-fit w-fit' dir='ltr'>
            <AnimatedSocialMenu />
          </div>
          <Footer />
        </LocaleWrapper>
      </body>
    </html>
  );
}
