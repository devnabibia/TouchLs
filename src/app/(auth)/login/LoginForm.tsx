'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import ToggleShowPassword from '@/components/ToggleShowPassword';

import { cn } from '@/utils/cn';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    try {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (res?.ok) {
        router.replace('/dashboard');
        router.refresh();
        toast.success('Login successful');
      }
      if (res?.error) {
        toast.error(res.error);
        setLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className='max-w-[40rem] md:mx-auto m-8 my-14 bg-secondary_color rounded-[15px] md:p-8 p-4 '>
      <h2 className='mb-4'>Login now</h2>

      <form className='flex flex-col gap-3 ' onSubmit={handleSubmit(onSubmit)}>
        {/* email */}

        <div className='flex flex-col gap-2'>
          <label htmlFor='firstName'>Email address</label>
          <input
            {...register('email', { required: 'This field is required' })}
            type='text'
            id='email'
            placeholder='john@dev.com'
            className={cn(
              'border border-[#797979] outline-none  focus:border-slate-600 px-2 py-2 rounded-[6px] w-full',
              { 'border-rose-400': errors['email'] }
            )}
          />
        </div>

        {/* password */}

        <div className='flex flex-col gap-2 relative'>
          <label htmlFor='password'>Password</label>
          <div className='relative'>
            <input
              {...register('password', { required: 'This field is required' })}
              type={showPassword ? 'text' : 'password'}
              id='password'
              placeholder='Your password'
              className={cn(
                'border border-[#797979] outline-none  focus:border-slate-600 px-2 py-2 rounded-[6px] w-full',
                { 'border-rose-400': errors['password'] }
              )}
            />
            <ToggleShowPassword
              isShowPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </div>
        </div>

        {/* submit button */}

        <button
          type='submit'
          className={cn(
            ' mt-3 bg-blue-500 hover:bg-blue-700 hover:text-white',

            { 'cursor-not-allowed': isLoading }
          )}
          disabled={isLoading}
        >
          Login
        </button>
      </form>
    </div>
  );
}
