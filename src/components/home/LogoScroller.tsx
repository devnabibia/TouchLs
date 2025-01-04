'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const LogoScroller: React.FC = () => {
  const logosRef = useRef<HTMLUListElement | null>(null);
  const logos = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
  ];

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      const clonedUl = ul.cloneNode(true) as HTMLUListElement;
      clonedUl.setAttribute('aria-hidden', 'true');
      ul.parentNode?.insertBefore(clonedUl, ul.nextSibling);
    }
  }, []);

  return (
    <div
      className='w-full pt-10 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] '
      dir='ltr'
    >
      <ul
        ref={logosRef}
        className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${index + 1}`}
              width={100}
              height={80}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoScroller;
