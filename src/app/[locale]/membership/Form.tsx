// 'use client';

// import { useCallback } from 'react';
// import { useTranslations } from 'next-intl';
// import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
// import { useForm } from 'react-hook-form';
// import { toast } from 'sonner';

// import { SpinnerIcon } from '@/components/icons';
// import { Button } from '@/components/Button';

// // import { saveContactUsRequest } from '@/services/contact';
// import { APP_ENV } from '@/utilities/url';
// import GetInTouch from './GetInTouch';

// function GradientPattern() {
//   return (
//     <div
//       className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'
//       aria-hidden='true'
//     >
//       <div
//         className='relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-100 to-teal-500 opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]'
//         style={{
//           clipPath:
//             'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//         }}
//       />
//     </div>
//   );
// }

// export default function ContactForm() {
//   const t = useTranslations('contact');

//   const { executeRecaptcha } = useGoogleReCaptcha();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     reset,
//   } = useForm();

//   const { mutate, isLoading } = useMutation(saveContactUsRequest, {
//     onSuccess: (response) => {
//       if (response?.error) {
//         toast.error(response.message);

//         return;
//       }

//       toast.success('Data successfully submitted');

//       // reset form
//       reset();
//     },
//     onError: () => {
//       toast.error('Something went wrong');
//     },
//   });

//   const handleFormSubmit = useCallback(
//     async (formData) => {
//       if (APP_ENV !== 'production') {
//         mutate(formData);

//         return;
//       }

//       // (1) check if the captcha is available
//       if (!executeRecaptcha) {
//         toast.error('Execute recaptcha not yet available');
//         return;
//       }

//       // (2) execute the recaptcha and generate the token
//       const token = await executeRecaptcha('inquirySubmit');

//       // (3) mutate form values with recaptcha token
//       mutate({ ...formData, 'g-recaptcha': token });
//     },
//     [mutate, executeRecaptcha]
//   );

//   return (
//     <div className='relative px-6 py-16 mx-auto bg-white max-w-7xl isolate sm:py-24 lg:py-32 lg:px-8'>
//       <GradientPattern />
//       <div className='max-w-xl mx-auto lg:max-w-7xl'>
//         <div className='flex flex-col mt-16 gap-y-20 gap-x-0 sm:gap-x-20 lg:gap-x-24 xl:gap-x-48 sm:gap-y-20 lg:flex-row'>
//           <div className='lg:mt-6 lg:w-96 lg:flex-none'>
//             <GetInTouch />
//           </div>

//           <form
//             onSubmit={handleSubmit(handleFormSubmit)}
//             className='lg:flex-auto'
//           >
//             <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
//               <div>
//                 <label
//                   htmlFor='first-name'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.firstName.label')}{' '}
//                   <span className='text-red-700'>*</span>
//                 </label>
//                 <div className='mt-2.5'>
//                   <input
//                     type='text'
//                     id='first-name'
//                     autoComplete='given-name'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     {...register('first_name', {
//                       required: t('form.firstName.error'),
//                     })}
//                   />
//                   {errors.first_name && (
//                     <span className='text-xs text-red-600'>
//                       {errors.first_name?.message}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='last-name'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.lastName.label')}{' '}
//                   <span className='text-red-700'>*</span>
//                 </label>
//                 <div className='mt-2.5'>
//                   <input
//                     type='text'
//                     id='last-name'
//                     autoComplete='family-name'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     {...register('last_name', {
//                       required: t('form.lastName.error'),
//                     })}
//                   />
//                   {errors.last_name && (
//                     <span className='text-xs text-red-600'>
//                       {errors.last_name?.message}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='organization'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.organization.label')}
//                 </label>
//                 <div className='mt-2.5'>
//                   <input
//                     id='organization'
//                     type='text'
//                     autoComplete='organization'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     {...register('organization')}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='email'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.email.label')}{' '}
//                   <span className='text-red-700'>*</span>
//                 </label>
//                 <div className='mt-2.5'>
//                   <input
//                     type='email'
//                     id='email'
//                     autoComplete='email'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     {...register('email', {
//                       required: t('form.email.error'),
//                       pattern: {
//                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                         message: t('form.email.patternError'),
//                       },
//                     })}
//                   />
//                   {errors.email && (
//                     <span className='text-xs text-red-600'>
//                       {errors.email?.message}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor='phone-number'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.phone.label')}{' '}
//                   <span className='text-red-700'>*</span>
//                 </label>
//                 <div className='mt-2.5'>
//                   <input
//                     type='text'
//                     id='phone-number'
//                     autoComplete='phone-number'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     {...register('phone_number', {
//                       required: t('form.phone.error'),
//                       pattern: {
//                         value: /^\+?[0-9()-\s]{10,}$/,
//                         message: t('form.phone.patternError'),
//                       },
//                     })}
//                   />
//                   {errors.phone_number && (
//                     <span className='text-xs text-red-600'>
//                       {errors.phone_number?.message}
//                     </span>
//                   )}
//                 </div>
//               </div>
//               <div className='sm:col-span-2'>
//                 <label
//                   htmlFor='message'
//                   className='block text-sm font-semibold leading-6 text-gray-900'
//                 >
//                   {t('form.message.label')}{' '}
//                   <span className='text-red-700'>*</span>
//                 </label>
//                 <div className='mt-2.5'>
//                   <textarea
//                     id='message'
//                     name='message'
//                     className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6'
//                     rows={6}
//                     defaultValue={''}
//                     {...register('message', {
//                       required: t('form.message.error'),
//                     })}
//                   />
//                   {errors.message && (
//                     <span className='text-xs text-red-600'>
//                       {errors.message?.message}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className='mt-10'>
//               <Button
//                 color='teal'
//                 className='w-full rounded-md'
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <span className='flex flex-row items-center justify-center'>
//                     <SpinnerIcon className='w-5 h-5 mr-3 -ml-1 text-white rtl:ml-3 animate-spin' />
//                     {t('form.submit.processing')}
//                   </span>
//                 ) : (
//                   t('form.submit.label')
//                 )}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
