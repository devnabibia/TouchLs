'use client';

import Image from 'next/image';
import { useState } from 'react';
import PhoneInput, { type Value } from 'react-phone-number-input';
import { toast, ToastContainer } from 'react-toastify';
import { z } from 'zod';

import 'react-phone-number-input/style.css';
import 'react-toastify/dist/ReactToastify.css';

import { CallButton } from '@/components/buttons/moving-border';

// Zod schema for form validation
const contactSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(1, 'Company name is required'),
  phone: z.string().min(1, 'Phone number is required') || undefined,
  message: z.string().min(1, 'Message is required'),
  budget: z.string().min(1, 'Budget is required'),
});

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '' as Value | undefined,
    message: '',
    budget: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value?: Value | undefined) => {
    setFormData({ ...formData, phone: value });
  };

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, budget: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data using Zod schema
    const validationResult = contactSchema.safeParse(formData);

    if (!validationResult.success) {
      const newErrors = validationResult.error.errors.reduce((acc, curr) => {
        acc[curr.path[0] as string] = curr.message;
        return acc;
      }, {} as Record<string, string>);
      setErrors(newErrors);
      return;
    }

    // Clear errors if validation passed
    setErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully');
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  return (
    <div className='container bg-gray-100 rounded-3xl p-8 flex flex-col lg:flex-row gap-16 font-medium'>
      <div className='w-full lg:w-1/2'>
        <Image
          src='/images/estimate.svg'
          width={600}
          height={400}
          alt='estimate'
          className='w-full h-full'
        />
      </div>
      <div className='w-full lg:w-1/2 flex flex-col items-center'>
        <ToastContainer />
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col items-center'
        >
          <h2 className='py-2 text-xl'>Project Budget (USD)*</h2>
          <ul className='flex flex-wrap justify-center items-center gap-7 w-full p-0'>
            {[
              '$20 - 30k',
              '$30 - 40k',
              '$40 - 50k',
              '$50 - 60k',
              '$60 - 80k',
              '$80 - 90k',
            ].map((budget, index) => (
              <li
                key={index}
                className={`duration-300 rounded-full border-2 px-2 flex justify-center items-center border-ourLightBlue ${
                  formData.budget === budget
                    ? 'bg-ourLightBlue text-white'
                    : 'hover:bg-ourLightBlue'
                }`}
              >
                <input
                  type='radio'
                  name='budget'
                  id={`budget-${index}`}
                  value={budget}
                  checked={formData.budget === budget}
                  onChange={handleBudgetChange}
                  className='hidden'
                />
                <label
                  htmlFor={`budget-${index}`}
                  className='cursor-pointer w-full h-full flex justify-center items-center rounded-full text-md font-medium'
                >
                  {budget}
                </label>
              </li>
            ))}
          </ul>
          {errors.budget && (
            <p className='text-red-400 text-left w-full mt-2 px-2 text-sm'>
              {errors.budget}
            </p>
          )}
          <input
            className='w-[95%] h-12 rounded-2xl border-none p-4 text-md mt-8 bg-white outline-none'
            type='text'
            name='fullName'
            placeholder='Full Name'
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className='text-red-400 text-left w-full mt-2 px-2 text-sm'>
              {errors.fullName}
            </p>
          )}
          <input
            className='w-[95%] h-12 rounded-2xl border-none p-4 text-md mt-8 bg-white outline-none'
            type='text'
            name='email'
            placeholder='E-mail'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className='text-red-400 text-left w-full mt-2 px-2 text-sm'>
              {errors.email}
            </p>
          )}
          <div className='w-[95%] flex flex-col md:flex-row justify-center items-center gap-4 mt-8'>
            <input
              className='w-full h-12 rounded-2xl border-none p-4 text-md bg-white outline-none'
              type='text'
              name='company'
              placeholder='Company'
              value={formData.company}
              onChange={handleChange}
            />

            <PhoneInput
              className='w-full h-12 rounded-2xl border-none p-4 text-md bg-white outline-none'
              value={formData.phone}
              onChange={handlePhoneChange}
              defaultCountry='US'
            />
          </div>
          {(errors.company || errors.phone) && (
            <div className='w-[95%] flex flex-col items-center mt-2'>
              {errors.company && (
                <p className='text-red-400 text-left w-full px-2 text-sm'>
                  {errors.company}
                </p>
              )}
              {errors.phone && (
                <p className='text-red-400 text-left w-full px-2 text-sm'>
                  {errors.phone}
                </p>
              )}
            </div>
          )}
          <textarea
            className='w-[95%] h-40 rounded-2xl border-none p-4 text-md mt-8 bg-white outline-none mb-4'
            name='message'
            placeholder='Tell us about your plan'
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className='text-red-400 text-left w-full mt-2 px-2 text-sm'>
              {errors.message}
            </p>
          )}
          <CallButton>
            <input
              className='text-xl cursor-pointer px-5'
              type='submit'
              name='submit'
              value='Submit'
            />
          </CallButton>
        </form>
      </div>
    </div>
  );
}

export default Contact;
