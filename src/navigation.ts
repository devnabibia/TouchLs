import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'da'];
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
