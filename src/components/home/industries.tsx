import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { industries } from '../../lib/data';

export default function Industries() {
  return (
    <>
      <div className='py-24 bg-white sm:py-32'>
        <div className='px-6 mx-auto max-w-7xl lg:px-8'>
          <div className='max-w-2xl'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Some of the Industries We Currently Serve
            </h2>
            <p className='mt-2 text-lg leading-8 text-gray-600'>
              we provide currently that thousand of users use them.
            </p>
          </div>
          <ul
            role='list'
            className='grid grid-cols-1 gap-6 mt-16 sm:grid-cols-2 lg:grid-cols-5'
          >
            {industries.map((industry, index) => (
              <li
                className='relative bg-white divide-y divide-gray-200 group rounded-3xl'
                key={index}
              >
                <div className='flex flex-col items-start justify-start w-full p-8'>
                  <Image
                    className='w-12 h-12'
                    src={industry.image}
                    alt={industry.title}
                    width={100}
                    height={100}
                  />
                  <h2 className='flex items-center gap-x-1.5 mt-8'>
                    <Link
                      className='text-base font-semibold text-gray-900 group-hover:text-ourBlue'
                      href={industry.href}
                    >
                      <span className='absolute inset-0 border rounded-3xl hover:border-gray-300'></span>
                      {industry.title}
                    </Link>
                  </h2>
                  <p className='mt-4 text-sm text-gray-600 break'>
                    {industry.description}
                  </p>
                  <Link
                    className='flex flex-row mt-2 text-sm text-ourBlue transition-all gap-x-1 group-hover:gap-x-2'
                    href={industry.href}
                  >
                    Read more{' '}
                    <span aria-hidden='true' className='rtl:rotate-180'>
                      →
                    </span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
