import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

import LogoScroller from '@/components/home/LogoScroller';

export default function Logos() {
  const t = useTranslations('partners');
  return (
    <div className='max-w-full  bg-gray-900 '>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='relative overflow-hidden isolate'>
          <div className='max-w-2xl px-6 py-32 mx-auto text-center sm:py-36 lg:flex-auto lg:py-40 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              {t('title')}
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              {t('description')}
            </p>
            <LogoScroller />
            <p className='mt-6 text-lg leading-8 text-gray-300'>
              <Link href='/en/more' className='text-white mt-2 hover:underline'>
                {t('seeAll')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
