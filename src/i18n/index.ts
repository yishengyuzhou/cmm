import { ref } from 'vue';
import { localeOptions, messages, type LocaleCode } from './messages';

type MessageTree = typeof messages.en;

const isLocaleCode = (value: string | null): value is LocaleCode =>
  value === 'en' || value === 'id' || value === 'ms' || value === 'th' || value === 'vi';

const browserLocale =
  typeof window !== 'undefined' ? window.localStorage.getItem('herbal-east-locale') : null;

export const currentLocale = ref<LocaleCode>(isLocaleCode(browserLocale) ? browserLocale : 'en');

const readPath = (tree: MessageTree, path: string): unknown =>
  path.split('.').reduce<unknown>((current, segment) => {
    if (current && typeof current === 'object' && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, tree);

const formatText = (text: string, params?: Record<string, string | number>) => {
  if (!params) return text;

  return Object.entries(params).reduce(
    (result, [key, value]) => result.split(`{${key}}`).join(String(value)),
    text,
  );
};

export const setLocale = (locale: LocaleCode) => {
  currentLocale.value = locale;
  document.documentElement.lang = locale;
  window.localStorage.setItem('herbal-east-locale', locale);
};

export const useI18n = () => {
  const t = (path: string, params?: Record<string, string | number>) => {
    const localized = readPath(messages[currentLocale.value] as MessageTree, path);
    const fallback = readPath(messages.en, path);
    const value = typeof localized === 'string' ? localized : fallback;

    return typeof value === 'string' ? formatText(value, params) : path;
  };

  const tm = <T>(path: string): T => {
    const localized = readPath(messages[currentLocale.value] as MessageTree, path);
    const fallback = readPath(messages.en, path);

    return (localized ?? fallback) as T;
  };

  return {
    locale: currentLocale,
    locales: localeOptions,
    setLocale,
    t,
    tm,
  };
};
