'use client';

import { cn } from '@/utils/cn';

interface BannerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Banner({ className, children }: BannerProps) {
  return (
    <section className='bg-common bg-no-repeat bg-center bg-cover h-[60vh]  flex justify-center items-center relative'>
      <div className='absolute inset-0 bg-gradient-to-br from-[#333] via-[rgba(1,65,129,0.63)] to-[rgba(1,65,129,0.86)]' />
      <h1
        className={cn(
          'text-white font-bold relative z-10 text-2xl lg:text-7xl md:text-6xl flex flex-col gap-2 md:gap-4 justify-center items-center',
          className
        )}
      >
        {children}
      </h1>
    </section>
  );
}
