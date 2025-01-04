'use client';
import Image from 'next/image';

export default function ImageHero() {
  return (
    <div className='mt-16 sm:mt-14 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
      <div className='relative mx-auto w-[32.875rem] max-w-full drop-shadow-xl overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-[#150a239e]  to-[#1e152b41]'></div>
        <Image
          src='/hero/hero.png'
          alt='hero'
          layout='responsive'
          width={600}
          height={800}
        />
      </div>
    </div>
  );
}
