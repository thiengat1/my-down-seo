'use client';
import React, { useState } from 'react';
import recommendApp from '../../data/recommend-app.json';
import favoriteApp from '../../data/favorite-app.json';

function HotApp() {
  const [favoriteAppStatus, setFavoriteAppStatus] = useState(1);
  function setFavoriteApp(value: any) {
    setFavoriteAppStatus(value);
  }
  return (
    <div className='mt-6 flex gap-4 flex-col md:flex-row'>
      <div className='flex basis-1/2 flex-col gap-4 border border-gray-200 p-4 rounded-md bg-white'>
        <div className='flex items-center justify-center gap-4'>
          <img src='/images/like.png' />
          <h2 className='text-[22px] font-bold'>每周佳软推荐</h2>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 cursor-pointer'>
          {recommendApp.map((item) => {
            return (
              <div
                key={item.id}
                className='flex items-center gap-2 recommend-app'
              >
                <img
                  src={`/images/hotApp/recommend${item.id}.jpg`}
                  className='w-[30%]'
                />
                <div className='flex flex-col gap-1'>
                  <div className='hover:text-blueColor font-bold'>
                    {item.name}
                  </div>
                  <div className=' text-[#999999] text-[0.8rem] capacity'>
                    {item.capacity}
                  </div>
                  <div className='text-[0.7rem] border border-red-500 w-max px-4 rounded-md btn-download hover:bg-red-500'>
                    下载
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='basis-1/2 border border-gray-200 rounded-md bg-white p-4'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-center gap-4'>
            <img src='/images/star.png' />
            <h2 className='text-[22px] font-bold'>热门软件库</h2>
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div className=' cursor-pointer overflow-hidden rounded-md'>
              <img
                src={`/images/hotApp/favorite${favoriteAppStatus}.jpg`}
                className='rounded-md hover:scale-110 transition-all duration-500 hover:transition-all hover:duration-500'
              />
            </div>
            <div className='grid grid-cols-2 gap-4'>
              {favoriteApp.map((item) => {
                return (
                  <div
                    onMouseEnter={() => setFavoriteApp(item.id)}
                    key={item.id}
                    className={`flex items-center gap-2 recommend-app border
                         border-blueColor  justify-center py-1 rounded-md 
                         cursor-pointer ${
                           favoriteAppStatus === item.id
                             ? 'bg-blueColor text-white'
                             : 'text-blueColor'
                         }`}
                  >
                    <span className='font-bold'>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotApp;
