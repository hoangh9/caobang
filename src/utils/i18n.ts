// Define supported locales
export const locales = ['vi', 'en', 'zh'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'vi';

// Simple translation function
export async function getTranslations(locale: Locale) {
  try {
    return (await import(`../app/messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Could not load translations for locale ${locale}`, error);
    // Fallback to default locale
    return (await import(`../app/messages/${defaultLocale}.json`)).default;
  }
}

// Helper to get translations for a specific component
export function getComponentTranslations(translations: any, component: string) {
  return translations[component] || {};
}

// Check if locale is valid
export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// Get locale from pathname
export function getLocaleFromPathname(pathname: string): Locale {
  const segments = pathname.split('/');
  const firstSegment = segments[1];
  
  if (isValidLocale(firstSegment)) {
    return firstSegment;
  }
  
  return defaultLocale;
}