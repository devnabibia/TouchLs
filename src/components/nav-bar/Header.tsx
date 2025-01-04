'use client';

import { Popover } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { Container } from '@/components/ui/Container';

import { Link } from '@/navigation';
import { cn } from '@/utils/cn';

import { MobileNavLinks, NavLinks } from './NavLinks';
import TopNav from './TopNav';
import TopNavMobile from './TopNavMobile';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MenuIcon(props: any) {
  return (
    <svg viewBox='0 0 24 24' fill='white' aria-hidden='true' {...props}>
      <path
        d='M5 6h14M5 18h14M5 12h14'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function ChevronUpIcon(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) {
  return (
    <svg viewBox='0 0 24 24' fill='white' aria-hidden='true' {...props}>
      <path
        d='M17 14l-5-5-5 5'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('nav');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='z-50 mb-20'>
      <TopNav />
      <TopNavMobile />

      <nav className='fixed z-50 w-full bg-gray-900 top-10'>
        <div
          className={cn(
            'w-full transition-all duration-300 bg-gray-900',
            isScrolled ? 'py-4 shadow-md' : 'py-4 border-b'
          )}
        >
          <Container className='flex justify-between w-full'>
            <div className='relative z-10 flex items-center justify-between w-full gap-16'>
              <Link href='/' aria-label='Home'>
                <Image
                  src='/images/targetline-logo.png'
                  alt='ُTargetline logo'
                  width={720}
                  height={431}
                  className={cn(
                    'w-auto transition-all duration-300',
                    isScrolled ? 'h-10' : 'h-12'
                  )}
                />
              </Link>
              <div className='hidden lg:flex lg:gap-10'>
                <NavLinks />
              </div>
              <Link
                href='/membership'
                color='teal'
                className='hidden lg:flex lg:items-center lg:gap-x-1 rounded-full bg-[#005b8e] hover:bg-[#005b8e]/90 duration-100 px-4 py-1 text-white'
              >
                {t('membership')}
              </Link>
            </div>
            <div className='flex items-center gap-4'>
              <Popover className='lg:hidden'>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className='relative z-10 inline-flex items-center p-2 -m-2 rounded-lg stroke-gray-50 hover:bg-gray-200/50 hover:stroke-gray-100 active:stroke-gray-50 ui-not-focus-visible:outline-none'
                      aria-label='Toggle site navigation'
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className='w-6 h-6 text-white' />
                        ) : (
                          <MenuIcon className='w-6 h-6 text-white' />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 z-0 bg-gray-800/60 backdrop-blur'
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className='absolute inset-x-0 z-0 px-6 pt-40 pb-6 origin-top shadow-2xl -top-9 rounded-b-2xl bg-gray-900 shadow-gray-900/50'
                          >
                            <MobileNavLinks />

                            <div className='flex flex-col gap-4 mt-8'>
                              <Link
                                href='/membership'
                                color='teal'
                                className='flex items-center justify-center gap-x-1 rounded-full bg-[#005a8e57] hover:bg-[#005b8e]/90 duration-100 px-4 py-1 text-white'
                              >
                                {t('membership')}
                              </Link>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
}
