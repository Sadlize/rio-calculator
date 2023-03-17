export const siteName = "RIO Index";
export const siteUrl = "localhost:3000";

export const localeFullName = {
  en: "English",
  ru: "Русский",
};
export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
