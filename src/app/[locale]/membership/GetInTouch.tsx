import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';

import { PhoneIcon, WhatsAppIcon } from '@/components/icons';

import { Link } from '@/navigation';

export default function GetInTouch() {
  const t = useTranslations('contact.getInTouch');
  const tt = useTranslations('contact');
  const tl = useTranslations('contact.location');

  return (
    <>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900'>
        {t('heading')}
      </h2>
      <p className='mt-4 text-lg leading-8 text-gray-600'>{tt('lead')}</p>
      <dl className='mt-10 space-y-4 text-base leading-7 text-gray-600'>
        <div className='flex items-start gap-x-4'>
          <dt className='flex-none'>
            <span className='sr-only'>Address</span>
            <BuildingOffice2Icon
              className='text-gray-600 size-6'
              aria-hidden='true'
            />
          </dt>
          <dd className='flex flex-col'>
            <span>{tl('address.1stLine')}</span>
            <span>{tl('address.2ndLine')}</span>
          </dd>
        </div>
        <div className='flex items-center gap-x-4'>
          <dt className='flex-none'>
            <span className='sr-only'>Telephone</span>
            <PhoneIcon
              className='text-gray-600 size-6 rtl:-rotate-90'
              aria-hidden='true'
            />
          </dt>
          <dd className='dir-ltr rtl:text-right tabular-nums'>
            <Link
              className='font-sans hover:text-gray-900'
              href='tel:0796584747'
            >
              +254742692485
            </Link>
          </dd>
        </div>
        <div className='flex items-center gap-x-4'>
          <dt className='flex-none'>
            <span className='sr-only'>Telephone</span>
            <WhatsAppIcon className='text-gray-600 size-6' aria-hidden='true' />
          </dt>
          <dd className='dir-ltr rtl:text-right tabular-nums'>
            <Link
              className='block font-sans hover:text-gray-900'
              href='tel:0789714747'
            >
              +254742692485
            </Link>
          </dd>
        </div>
        <div className='flex items-start font-sans gap-x-4'>
          <dt className='flex-none'>
            <span className='sr-only'>Email</span>
            <EnvelopeIcon
              className='w-6 text-gray-600 h-7'
              aria-hidden='true'
            />
          </dt>
          <dd>
            <Link
              className='block hover:text-gray-900'
              href='mailto:info@rahafoundation.af'
            >
              nangendodennis@gmail.com
            </Link>
          </dd>
        </div>
      </dl>
    </>
  );
}
