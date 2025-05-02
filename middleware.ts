import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './src/utils/i18n';

// This middleware handles URL redirection to localized routes
export function middleware(request: NextRequest) {
  // Get pathname from request URL
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Redirect if there is no locale
  const locale = defaultLocale;
  return NextResponse.redirect(
    new URL(`/${locale}${pathname.startsWith('/') ? pathname : `/${pathname}`}`, request.url)
  );
}

// Configure matcher for middleware
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|images|favicon.ico).*)',
  ],
};