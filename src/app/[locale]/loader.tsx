'use client';

import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className='grid items-center justify-center h-screen'>
      <ThreeDots
        visible={true}
        height='80'
        width='80'
        color='#005b8c'
        radius='9'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    </div>
  );
}
