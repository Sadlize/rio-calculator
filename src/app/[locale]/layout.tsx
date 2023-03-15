import { Metadata } from "next";
import "styles/globals.css";
import React from "react";
import { getDictionary } from "utils/dictionaries";
import { Locale, i18n, siteName, siteUrl } from "@/projectSettings";

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  const { locale } = params;
  const dict = await getDictionary(locale);

  const ogAltLocales = i18n.locales.filter(item => {
    return item !== locale;
  });
  const canonicalAltLocales = ogAltLocales.reduce(
    (object, locale) => ({ ...object, [locale]: `${siteUrl}/${locale}` }),
    {}
  );

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
          sizes: "any",
        },
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
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
      type: "website",
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
  };
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ locale: locale }));
}

export const dynamicParams = false;
export default function RootLayout({ children, params }: IProps) {
  return (
    <html lang={params.locale}>
      <body>{children}</body>
    </html>
  );
}

interface IProps extends TParams {
  children: React.ReactNode;
}

export type TParams = {
  params: { locale: Locale };
};
