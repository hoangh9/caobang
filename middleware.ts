import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './src/i18n'; // Corrected import path

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Don't prefix the URL for the default locale (optional, but common)
  localePrefix: 'as-needed' // or 'always' or 'never'
});
 
export const config = {
  // Match only internationalized pathnames
  // This regex ensures the middleware runs only for paths that don't look like
  // static files or API routes. Adjust if necessary.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images/).*)']
};
