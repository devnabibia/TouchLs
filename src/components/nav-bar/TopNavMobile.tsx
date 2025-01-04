import { Disclosure } from '@headlessui/react';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

import LanguageDropdown from '@/components/nav-bar/LanguageDropdown';

export default function TopNavMobile() {
  const t = useTranslations('topNav');
  return (
    <Disclosure
      as='nav'
      className='fixed inset-x-0 top-0 w-full bg-gray-800 lg:hidden z-[60]'
    >
      <div className='flex items-center justify-between px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-full lg:max-w-none'>
          <div className='relative w-full flex items-center h-10 justify-between sm:gap-x-2'>
            <p className='text-xs font-medium text-gray-100 flex gap-2'>
              <MapPinIcon className='size-4' />
              <span className='font-medium'>{t('address')}</span>
            </p>
          </div>
        </div>
        <LanguageDropdown />
      </div>
    </Disclosure>
  );
}
