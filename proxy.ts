import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'fr'] as const;
const defaultLocale = 'en';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale prefix
  const matchedLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (matchedLocale) {
    // Forward locale as a header so next-intl server functions can detect it
    const headers = new Headers(request.headers);
    headers.set('x-next-intl-locale', matchedLocale);
    return NextResponse.next({ request: { headers } });
  }

  // Redirect to the default locale
  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    // Run on all routes except api, _next, studio, and static files
    '/((?!api|_next|studio|.*\\..*).*)',
  ],
};
