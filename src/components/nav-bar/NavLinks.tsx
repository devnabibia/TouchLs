'use client';

import { Popover } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';

import { Link, usePathname } from '@/navigation';
import { cn } from '@/utils/cn';

export function NavLinks() {
  const t = useTranslations('nav');
  const pathname = usePathname();

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const timeoutRef = useRef(0);
  const links = [
    [t('home'), '/'],
    [t('about'), '/about'],
  ];

  return (
    <>
      {links.map(([label, href], index) => (
        <Link
          key={label}
          href={href}
          className={cn(
            'relative px-3 py-2 -mx-3 -my-2 text-sm font-semibold text-white transition-colors delay-150 rounded-lg hover:text-gray-900 hover:delay-0',
            pathname === href && 'bg-gray-100 text-gray-900'
          )}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              window.clearTimeout(timeoutRef.current);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            setHoveredIndex(index);
          }}
          onMouseLeave={() => {
            timeoutRef.current = window.setTimeout(() => {
              setHoveredIndex(null);
            }, 200);
          }}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className='absolute inset-0 bg-gray-100 rounded-lg'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
              />
            )}
          </AnimatePresence>
          <span className='relative z-10'>{label}</span>
        </Link>
      ))}
    </>
  );
}

export function MobileNavLinks() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const links = [
    [t('home'), '/'],
    [t('about'), '/about'],
  ];

  return (
    <div className='space-y-4'>
      {links.map(([label, href], index) => (
        <Popover.Button
          key={index}
          as={Link}
          href={href}
          className={cn(
            'block text-base leading-7 -mx-2 tracking-tight text-white hover:text-gray-900 ',
            href === pathname && 'font-medium'
          )}
        >
          {label}
        </Popover.Button>
      ))}
    </div>
  );
}
