import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function WhatWEDo() {
  const t = useTranslations(); // Use the translations

  // Define the accordion items using the translation keys
  const accordionItems = [
    {
      key: 'blockchain',
      icon: '/svg/buy-crypto.svg',
    },
    {
      key: 'web',
      icon: '/svg/monitor.svg',
    },
    {
      key: 'mobile',
      icon: '/svg/mobile.svg',
    },
    {
      key: 'ai',
      icon: '/svg/cpu.svg',
    },
    {
      key: 'dataScience',
      icon: '/svg/driver.svg',
    },
    {
      key: 'uiUx',
      icon: '/svg/figma.svg',
    },
  ];

  return (
    <div className='bg-gray-900 py-6 sm:py-10'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl'>
          <h2 className='text-base font-semibold leading-7 text-ourBlue'>
            {t('whatWeDo.whatWeDo')}
          </h2>
          <p className='mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl'>
            {t('whatWeDo.weMakeEverything')}
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-400'>
            {t('whatWeDo.specializeIn')}
          </p>
        </div>
        <div className='max-w-4xl mx-auto mt-16 sm:mt-16 lg:mt-16 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 sm:max-w-none gap-x-8 gap-y-8 lg:max-w-none sm:grid-cols-2 lg:grid-cols-3'>
            {accordionItems.map((item) => (
              <div
                key={item.key}
                className='relative flex flex-col p-8 bg-[#2e3648b3] group rounded-3xl'
              >
                <dt className='flex items-center text-base font-semibold leading-7 text-gray-900 gap-x-3 w-full'>
                  <h3 className='font-semibold transition-colors text-ourBlue'>
                    <Image
                      src={item.icon}
                      alt={t(`whatWeDo.accordion.${item.key}.title`)}
                      width={25}
                      height={25}
                      className='mr-2'
                    />
                    <Link
                      href=''
                      className='absolute inset-0 border pl-16 rtl:pl-0 rtl:pr-20 pt-7 rounded-3xl group-hover:border-ourBlue duration-100'
                    >
                      <span className='absolute inset-0 rounded-3xl'></span>
                      {t(`whatWeDo.accordion.${item.key}.title`)}
                    </Link>
                  </h3>
                </dt>
                <dd className='flex flex-col flex-auto mt-4 text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>
                    {t(`whatWeDo.accordion.${item.key}.description`)}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
