import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('contact.FAQ');

  const questions = [
    {
      id: 1,
      question: t('1stQuestion'),
      answer: t('1stAnswer'),
    },
    {
      id: 2,
      question: t('2ndQuestion'),
      answer: t('2ndAnswer'),
    },
    {
      id: 3,
      question: t('3rdQuestion'),
      answer: t('3rdAnswer'),
    },
    {
      id: 4,
      question: t('4thQuestion'),
      answer: t('4thAnswer'),
    },
    {
      id: 5,
      question: t('5thQuestion'),
      answer: t('5thAnswer'),
    },
    {
      id: 6,
      question: t('6thQuestion'),
      answer: t('6thAnswer'),
    },
  ];

  return (
    <div className='bg-gray-50'>
      <div className='px-6 py-16 mx-auto sm:py-24 max-w-7xl lg:py-32 lg:px-8'>
        <h2 className='text-3xl font-bold leading-10 tracking-tight text-gray-900'>
          {t('heading')}
        </h2>
        <p className='max-w-2xl mt-4 text-base leading-7 text-gray-600'>
          {t('lead')}
        </p>

        <div className='mt-20'>
          <dl className='space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10'>
            {questions.map(({ id, question, answer }) => (
              <div key={id}>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  {question}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
