'use client';

import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { useTranslations } from 'next-intl';

export function BackToTop() {
  const t = useTranslations('footer');

  return (
    <button
      type='button'
      className='rounded-lg flex bg-gray-900 px-2.5 py-1.5 text-sm text-gray-300 shadow-sm border items-center border-white/10 hover:border-white/30 hover:text-gray-100 gap-x-1'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      {t('backToTop')}
      <ChevronUpIcon className='w-4 h-4' />
    </button>
  );
}
