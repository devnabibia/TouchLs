/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

import AudioPlayer from '@/components/about/audio';

export default function About() {
  const t = useTranslations('about');
  const team = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
  ];
  return (
    <div className='isolate bg-gray-900'>
      {/* Hero section */}
      <div className='relative isolate -z-10'>
        <svg
          aria-hidden='true'
          className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-800 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
        >
          <defs>
            <pattern
              x='50%'
              y={-1}
              id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
              width={200}
              height={200}
              patternUnits='userSpaceOnUse'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <svg x='50%' y={-1} className='overflow-visible fill-gray-800'>
            <path
              d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
              strokeWidth={0}
            />
          </svg>
          <rect
            fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
            width='100%'
            height='100%'
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden='true'
          className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
        >
          <div
            style={{
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            }}
            className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#1e1427] to-[#464376] opacity-30'
          />
        </div>
        <div className='overflow-hidden'>
          <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
            <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
              <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl '>
                <h1 className='text-4xl font-bold tracking-tight text-white sm:text-4xl'>
                  {t('boss')}
                </h1>
                <p className='relative mt-6 text-md leading-8 text-gray-300 sm:max-w-md lg:max-w-none text-justify'>
                  {t('speech')}
                </p>
                <AudioPlayer />
              </div>
              <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                  <div className='relative'>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                  <div className='relative'>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
                <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                  <div className='relative'>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div className='relative'>
                    <img
                      alt=''
                      src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                    />
                    <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className='mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 py-14'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            {t('title')}
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>{t('lead')}</p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4'
        >
          {team.map((src) => (
            <li key={src} className='flex flex-col bg-transparent'>
              <Image
                width={192}
                height={192}
                alt=''
                src={`/images/${src}`}
                className='object-cover h-full w-full rounded-xl'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
