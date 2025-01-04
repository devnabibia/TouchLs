'use client';

import React from 'react';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className='bg-slate-800 no-underline group cursor-pointer relative shadow-2xl rounded-md p-px text-md font-bold leading-6   inline-block'>
      <span className='absolute inset-0 overflow-hidden rounded-md'>
        <span className='absolute inset-0 rounded-md bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </span>
      <div className='relative flex space-x-2 items-center z-10 rounded-md bg-white py-1 px-2 ring-1 ring-blue/10 '>
        {children}
      </div>
      <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
    </button>
  );
}

export function CallButton({ children }: { children: React.ReactNode }) {
  return (
    <button className=' hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] md:px-2 px-1  py-1.5 bg-[#005c8c] hover:bg-[#005b8cd5] text-white rounded-md  transition duration-400 ease-linear ml-2'>
      {children}
    </button>
  );
}
