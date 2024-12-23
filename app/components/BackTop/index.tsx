'use client';
import { useState, useEffect } from 'react';

export interface IBackTopProps {}

export default function BackTop(props: IBackTopProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleDisplayBackTop = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleDisplayBackTop);
    return () => {
      window.removeEventListener('scroll', handleDisplayBackTop);
    };
  }, []);
  if (isVisible)
    return (
      <div
        className='fixed bottom-12 right-12 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-slate-400  border-solid hover:opacity-70 cursor-pointer'
        onClick={scrollToTop}
      >
        <img
          src='/images/back_to_top.png'
          alt='back-to-top'
          className='object-contain w-full h-full'
        />
      </div>
    );
  return null;
}
