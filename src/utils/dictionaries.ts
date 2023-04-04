import type { TLocale } from '@/projectSettings';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  ru: () => import('../dictionaries/ru.json').then((module) => module.default),
};

const getDictionary = async (locale: TLocale) => dictionaries[locale]();

export default getDictionary;
