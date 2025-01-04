'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { IoLogoGithub } from 'react-icons/io5';
import { PiTelegramLogo } from 'react-icons/pi';

import { cn } from '@/utils/cn';

const socialIcons = [
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/9961740933',
    colorCode: '#25D366',
  },
  {
    icon: PiTelegramLogo,
    href: 'https://t.me/devnabibia',
    colorCode: '#24A1DE',
  },
  {
    icon: IoLogoGithub,
    href: 'https://github.com/devnabibia',
    colorCode:
      'linear-gradient(45deg, #8a3ab9, #4c68d7, #cd486b, #fbad50, #fccc63, #bc2a8d, #e95950)',
  },
];

export default function AnimatedSocialMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex justify-end p-2'>
      <div className='relative w-max'>
        <div
          className={cn(
            'bg-ternary_color rounded-full p-2 flex justify-center items-center w-max transition-all duration-200',
            isOpen && 'bg-white text-black shadow-md'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose
              className={cn(
                'text-4xl  cursor-pointer text-white',
                isOpen && 'text-black'
              )}
            />
          ) : (
            <BsChatDots
              className={cn(
                'text-4xl  cursor-pointer text-white',
                isOpen && 'text-black'
              )}
            />
          )}
        </div>
        <div className='absolute -top-56 left-0 w-full z-10'>
          {isOpen && (
            <ul className='flex flex-col gap-2'>
              {socialIcons.map((icon, index) => {
                return (
                  <li
                    key={index}
                    className='flex items-center justify-center text-primary_color'
                  >
                    <Link
                      href={icon.href}
                      target='_blank'
                      rel='noreferrer'
                      className={`${
                        index === 0
                          ? 'bg-[#25D366]'
                          : index === 1
                          ? 'bg-[#24A1DE]'
                          : 'bg-gradient-to-r from-[#8a3ab9]   to-[#e95950]'
                      } rounded-full p-4 flex justify-center items-center w-max transition-all duration-400 text-3xl text-white shadow-xl`}
                    >
                      <icon.icon />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
