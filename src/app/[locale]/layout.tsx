import { Metadata } from 'next';
import '@/src/styles/globals.css';
import React from 'react';
import getDictionary from 'utils/dictionaries';
import { TLocale, i18n, siteName, siteUrl } from '@/projectSettings';
import localFont from 'next/font/local';

const font = localFont({
  display: 'swap',
  src: [
    // regular
    {
      path: '../../../public/fonts/fritz-quadrata-cyrillic.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
});

export type TParams = {
  params: { locale: TLocale };
};

interface IProps extends TParams {
  children: React.ReactNode;
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);

  const ogAltLocales = i18n.locales.filter((item) => item !== locale);
  const canonicalAltLocales = ogAltLocales.reduce(
    (object, altLocale) => ({
      ...object,
      [altLocale]: `${siteUrl}/${altLocale}`,
    }),
    {},
  );

  return {
    title: dict.SEO.title,
    description: dict.SEO.description,
    keywords: dict.SEO.keywords,
    manifest: '/favicon/site.webmanifest',
    themeColor: '#000000',
    icons: {
      icon: [
        {
          url: '/favicon/favicon.ico',
          sizes: 'any',
        },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
        },
      ],
      apple: [
        {
          url: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
        },
      ],
    },
    openGraph: {
      title: dict.SEO.title,
      description: dict.SEO.description,
      url: siteUrl,
      siteName,
      // TODO: Add SEO image
      // images: [
      //   {
      //     url: '',
      //     width: 1800,
      //     height: 1600,
      //     alt: '',
      //   },
      // ],
      locale,
      alternateLocale: ogAltLocales,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: dict.SEO.title,
      description: dict.SEO.description,
      // TODO: add SEO Image
      // images: {
      //   url: "",
      //   alt: "",
      // },
    },
    alternates: {
      canonical: siteUrl,
      languages: canonicalAltLocales,
    },
    other: {
      url: siteUrl,
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;
export default function RootLayout({ children, params }: IProps) {
  return (
    <html lang={params.locale}>
      <body className={font.className}>{children}</body>
    </html>
  );
}
