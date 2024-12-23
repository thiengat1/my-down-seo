'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar, Autoplay, Pagination } from 'swiper/modules';

function Slider() {
  return (
    <div>
      <Swiper
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar, Autoplay, Pagination]}
        className='mySwiper rounded-md cursor-pointer'
        spaceBetween={50}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src='/images/slider/slide1.gif' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/slider/slide2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/slider/slide3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/slider/slide4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/slider/slide5.gif' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/slider/slide6.jpg' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
