export const siteName = "RIO Calculator";
export const siteUrl = "localhost:3000";

export const i18n = {
  defaultLocale: "en",
  locales: ["en", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
