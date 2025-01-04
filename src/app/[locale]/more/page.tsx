import Image from 'next/image';
import React from 'react';

export default function MoreLogos() {
  const images = Array.from({ length: 75 }, (_, i) => `/logos/${i + 1}.png`);

  return (
    <div className='container bg-gray-900 pt-40'>
      <div className='max-w-5xl mx-auto lg:max-w-7xl'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center'>
          {images.map((src, index) => (
            <div key={index} className='flex justify-center'>
              <div className='w-[150px] h-[100px] relative mt-3'>
                <Image
                  src={src}
                  alt={`Logo ${index + 1}`}
                  layout='fill'
                  objectFit='contain'
                  className='object-center'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
