import {Metadata} from "next";
import "./globals.css";
import React from "react";
import { getDictionary } from "./dictionaries";
import {locales, siteName, siteUrl} from "../../utils/projectSettings";

export async function generateMetadata({params}: TParams): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);

  const ogAltLocales = locales.filter(item => {
    return item !== locale
  });
  const canonicalAltLocales = ogAltLocales.reduce(
    (object, locale) => ({ ...object, [locale]: `${siteUrl}/${locale}`}), {}
  )

  return {
    title: dict.SEO.title,
    description: dict.SEO.description,
    keywords: dict.SEO.keywords,
    manifest: "/favicon/site.webmanifest",
    themeColor: "#000000",
    icons: {
      icon: [
        {
          url: "/favicon/favicon.ico",
          sizes: "any"
        },
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16"
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32"
        },
      ],
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
    },
    openGraph: {
      title: dict.SEO.title,
      description: dict.SEO.description,
      url: siteUrl,
      siteName: siteName,
      // TODO: Add SEO image
      // images: [
      //   {
      //     url: '',
      //     width: 1800,
      //     height: 1600,
      //     alt: '',
      //   },
      // ],
      locale: locale,
      alternateLocale: ogAltLocales,
      type: 'website',
    },
    twitter: {
      card: "summary",
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
  }
}

export async function generateStaticParams() {
  const localesList: object[] = [];
  (locales || []).forEach(locale => {
    localesList.push({
      locale: locale
    });
  });
  return localesList;
}

export const dynamicParams = false
export default function RootLayout({ children, params }: IProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}

interface IProps extends TParams {
  children: React.ReactNode
}

export type TParams = {
  params: { locale: string, }
}
