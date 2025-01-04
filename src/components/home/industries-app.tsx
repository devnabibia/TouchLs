'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { app_data_en, app_data_fa } from '@/lib/industries-work';

export default function Industries() {
  const [appData, setAppData] = useState(app_data_en); // Default to English data

  useEffect(() => {
    // Check the direction of the document
    const dir = document.documentElement.dir;
    if (dir === 'rtl') {
      setAppData(app_data_fa);
    } else {
      setAppData(app_data_en);
    }
  }, []);

  const logos = [
    '/industries/digi-logo.svg',
    '/industries/fly.svg',
    '/industries/handy-logo.png',
    '/industries/ddr-logo.jpg',
    '/industries/Shad_logo.png',
  ];

  const pagination = {
    clickable: true,
    el: '.custom-swiper-pagination',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    renderBullet: function (index, className) {
      return `<img src="${logos[index]}" alt="${
        appData[index]?.title || ''
      }" class="swiper-pagination-bullet ${className}" />`;
    },
  };

  const autoplay = {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <div className='max-w-full bg-gray-900'>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='relative overflow-hidden isolate'>
          <svg
            viewBox='0 0 1024 1024'
            className='absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 translate-y-0 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
            aria-hidden='true'
          >
            <circle
              cx='512'
              cy='512'
              r='512'
              fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
              fillOpacity='0.7'
            ></circle>
            <defs>
              <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
                <stop stopColor='#14b8a6'></stop>
                <stop offset='1' stopColor='#0e7490'></stop>
              </radialGradient>
            </defs>
          </svg>
          <div className='w-full px-6 py-32 mx-auto text-center sm:py-36 lg:flex-auto lg:py-40 lg:px-8'>
            <Swiper
              pagination={pagination}
              modules={[Pagination, Autoplay]}
              autoplay={autoplay}
              allowTouchMove={true}
              loop
              slidesPerView={1}
              className='w-full h-full'
            >
              {appData.map((app, index) => (
                <SwiperSlide key={index}>
                  <div className='grid lg:grid-cols-2 gap-x-8 items-center h-full max-w-5xl px-6 mx-auto lg:max-w-7xl sm:px-8'>
                    <div className='max-w-lg text-left lg:order-1'>
                      <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                        <br />
                        {app.title}
                      </h2>
                      <p className='mt-6 mb-2 text-lg leading-8 text-gray-200'>
                        {app.content}
                      </p>
                      <div className='flex items-center justify-start mb-4 sm:mb-0 mt-3 sm:mt-10 gap-x-6 lg:justify-start'>
                        {(app.google_play_link ||
                          app.app_store_link ||
                          app.bazar_link) && (
                          <div className='flex flex-wrap justify-center gap-4 items-center'>
                            {app.google_play_link && (
                              <Link href={app.google_play_link}>
                                <Image
                                  src='/svg/google-play.svg'
                                  width={150}
                                  height={70}
                                  alt='google-play'
                                  className='sm:w-[150px] sm:h-[100px] w-[70px] h-[60px]'
                                />
                              </Link>
                            )}
                            {app.app_store_link && (
                              <Link href={app.app_store_link}>
                                <Image
                                  src='/svg/app-store.svg'
                                  width={150}
                                  height={40}
                                  alt='app-store'
                                  className='sm:w-[150px] sm:h-[70px] w-[70px] h-[60px]'
                                />
                              </Link>
                            )}
                            {app.bazar_link && (
                              <Link href={app.bazar_link}>
                                <Image
                                  src='/industries/cafe-logo.svg'
                                  width={150}
                                  height={40}
                                  alt='app-store'
                                  className='sm:w-[120px] sm:h-[50px] w-[70px] h-[60px]'
                                />
                              </Link>
                            )}
                            {app.link && (
                              <Link href={app.link}>
                                <Image
                                  src='/industries/google.png'
                                  width={130}
                                  height={60}
                                  alt='app-store'
                                  className='sm:w-[100px] sm:h-[70px] w-[70px] h-[60px]'
                                />
                              </Link>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className='lg:order-2 mx-auto lg:justify-center lg:flex lg:items-center'>
                      <Image
                        src={app.ImageSrc}
                        alt={app.title}
                        width={500}
                        height={500}
                        className='w-[200px] h-[400px] lg:w-[225px] lg:h-[450px] rounded-md'
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='custom-swiper-pagination'></div>{' '}
            {/* Add this element */}
          </div>
        </div>
      </div>
    </div>
  );
}
