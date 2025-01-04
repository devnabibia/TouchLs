'use client';
import React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

interface ToggleShowPasswordProps {
  isShowPassword: boolean;
  toggleShowPassword: () => void;
}

export default function ToggleShowPassword({
  isShowPassword,
  toggleShowPassword,
}: ToggleShowPasswordProps) {
  return (
    <>
      {isShowPassword ? (
        <FaEye
          className='absolute top-3 right-3 cursor-pointer hover:text-slate-600 transition'
          onClick={toggleShowPassword}
        />
      ) : (
        <FaEyeSlash
          className='absolute top-3 right-3 cursor-pointer hover:text-slate-600 transition'
          onClick={toggleShowPassword}
        />
      )}
    </>
  );
}
