import createMiddleware from 'next-intl/middleware';

import { defaultLocale, locales } from './config/locales';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|da)/:path*'],
};
