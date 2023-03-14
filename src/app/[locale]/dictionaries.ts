'use server-only';

const dictionaries: Record<string, any> = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ru: () => import('./dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();
