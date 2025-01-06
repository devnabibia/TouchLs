'use client';

import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';
import { cn } from '@/utils/cn';

import { GithubIcon, TelegramIcon, WhatsAppIcon } from './Icons';
import LanguageDropdown from './LanguageDropdown';

export default function TopNav() {
  const t = useTranslations('topNav');

  const navigation = [{ name: t('link'), href: '/volunteer', current: false }];

  return (
    <Disclosure
      as='nav'
      className={cn('hidden lg:block z-[60] fixed top-0 w-full bg-gray-800')}
    >
      {({ open }) => (
        <>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-10'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text
                -gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block size-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block size-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-between'>
                <div className='flex items-center flex-shrink-0 gap-x-12 gap-y-2'>
                  <p className='flex items-center text-xs text-gray-100 dir-ltr gap-x-1'>
                    <PhoneIcon className='size-4 rtl:-rotate-90 ltr:rotate-0' />
                    <Link
                      href='tel:0742692485'
                      className='font-medium tabular-nums'
                    >
                      {t('phone')}
                    </Link>
                  </p>
                  <p className='flex items-center text-xs text-gray-100 dir-ltr gap-x-1'>
                    <EnvelopeIcon className='size-4' />
                    <Link
                      href='mailto:nangendodennis@gmail.com'
                      className='font-sans font-medium'
                    >
                      {t('email')}
                    </Link>
                  </p>
                </div>
                <div className='flex justify-between'>
                  <div className='hidden sm:ml-36 rtl:sm:ml-0 rtl:sm:mr-36 sm:block'>
                    <div className='flex items-center gap-x-2'>
                      <LanguageDropdown />
                    </div>
                  </div>
                  <div className='flex items-center pr-2 gap-x-4 sm:ml-6 sm:pr-0 rtl:sm:mr-6 rtl:sm:ml-0'>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://github.com/devnabibia'
                      aria-label='Visit us on Facebook'
                    >
                      <GithubIcon className='w-4 h-4 text-gray-100 hover:text-white' />
                    </a>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://wa.me/00989961'
                      aria-label='Visit us on Instagram'
                    >
                      <WhatsAppIcon className='w-4 h-4 text-gray-100 hover:text-white' />
                    </a>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://t.me/devnabibia'
                      aria-label='Visit us on Telegram'
                    >
                      <TelegramIcon className='w-4 h-4 text-gray-100 hover:text-white' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={cn(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
