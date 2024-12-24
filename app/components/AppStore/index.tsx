'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import appStore from '../../data/app-store.json';

function AppStore() {
  const swiperRef: any = useRef(null);

  const handleNext = () => {
    swiperRef.current.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.slidePrev();
  };
  return (
    <div className='py-4 px-8 border border-gray-200 rounded-md bg-white relative'>
      <div className='flex items-center justify-between border-b border-b-gray-200 pb-4 mb-6'>
        <div className='flex items-center gap-2'>
          <img src='/images/category3.png' />
          <h1 className='text-xl font-bold'>软件库</h1>
        </div>
        <div className='flex gap-4 font-bold text-gray-600 text-[16px]'>
          <span className='cursor-pointer hover:text-blueColor'>最新软件</span>
          <span className='cursor-pointer hover:text-blueColor'>人气软件</span>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Save Swiper instance
        }}
        loop={true}
        modules={[Navigation]}
        className='custom-swiper'
      >
        {appStore.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {slide.children.map((child) => {
                  return (
                    <div key={child.id} className='flex flex-col gap-1 '>
                      <div className='overflow-hidden cursor-pointer rounded-md'>
                        <img
                          className='rounded-md transition-all duration-700 hover:scale-110 hover:transition-all hover:duration-700'
                          src={`/images/app-store/app${child.id}.jpg`}
                        />
                      </div>

                      <div className='flex justify-between items-center'>
                        <div className='text-[1rem] text-gray-700 cursor-pointer hover:text-blueColor'>
                          {child.name}
                        </div>
                        <div className='text-[0.8rem] text-gray-500'>
                          创建时间：{child.createdAt}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className='absolute top-[50%] -left-6 h-[40px] w-[40px] bg-white rounded-[100%] flex items-center justify-center'
        onClick={handlePrev}
      >
        <img src='/images/prev.png' />
      </button>
      <button
        className='absolute top-[50%] -right-6 h-[40px] w-[40px] bg-white rounded-[100%] flex items-center justify-center'
        onClick={handleNext}
      >
        <img src='/images/next.png' />
      </button>
    </div>
  );
}

export default AppStore;
