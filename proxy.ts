import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Run on all routes except api, _next, studio, and static files
    '/((?!api|_next|studio|.*\\..*).*)',
  ],
};
