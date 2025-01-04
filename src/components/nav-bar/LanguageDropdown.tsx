'use client';

import { Menu, Transition } from '@headlessui/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

import { Link, usePathname } from '@/navigation';
import { cn } from '@/utils/cn';

import { ChevronDownMiniIcon } from './Icons';

export default function LanguageDropdown() {
  const t = useTranslations('topNav.languages');

  const pathname = usePathname();

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='px-2 py-0.5 border border-white/15 text-xs font-medium text-gray-100 rounded-full transition-colors hover:bg-white gap-x-1 hover:text-gray-900 flex items-center'>
          <GlobeAltIcon
            className='block w-4 h-4 text-gray-400 sm:hidden'
            aria-hidden='true'
          />
          {t('label')}
          <ChevronDownMiniIcon
            className='w-4 h-4 text-gray-400'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute ltr:right-0 rtl:left-0 z-[60] w-32 mt-1 origin-top-right bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={pathname}
                  locale='en'
                  className={cn(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-xs'
                  )}
                >
                  {t('en')}
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={pathname}
                  locale='da'
                  className={cn(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-xs'
                  )}
                >
                  {t('da')}
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
