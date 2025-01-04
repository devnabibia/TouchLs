'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function VideoPlayer() {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleCanPlay = () => setLoading(false);
      const handleBuffer = () => setLoading(true);

      videoElement.addEventListener('canplay', handleCanPlay);
      videoElement.addEventListener('waiting', handleBuffer);

      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay);
        videoElement.removeEventListener('waiting', handleBuffer);
      };
    }
  }, []);

  return (
    <div className='absolute top-0 right-0 w-[63vw] -z-10'>
      <Image
        src='/images/hero-background.png'
        alt='Banner'
        width={600}
        height={700}
        className='w-full h-full block lg:hidden'
      />

      {loading && (
        <Image
          src='/images/Image-loader.png'
          alt='Loading'
          layout='fill'
          objectFit='cover'
          className='-z-10 w-full h-full'
        />
      )}
      <video
        ref={videoRef}
        loop
        autoPlay
        muted
        className={`hidden lg:block w-full h-full ${
          loading ? 'hidden' : 'block'
        }`}
        onCanPlay={() => setLoading(false)}
      >
        <source src='/video/introduction.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
