import { Montserrat } from 'next/font/google';
import localFont from 'next/font/local';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  variable: '--font-montserrat',
});

export const farsi = localFont({
  src: '../../public/IRANSansWeb.ttf',
  display: 'swap',
});
