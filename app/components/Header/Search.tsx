'use client';
import React, { useEffect, useState } from 'react';

function Search() {
  const [searchPlaceholder, setSearchPlaceholder] = useState('搜索');
  const placeholderArr = [
    '边锋游戏大厅掼蛋',
    '抖音',
    '百度网盘',
    '腾讯视频',
    '迅游加速器',
  ];

  useEffect(() => {
    const randomTime = setInterval(() => {
      setSearchPlaceholder(
        placeholderArr[Math.floor(Math.random() * placeholderArr.length)]
      );
    }, 2000);
    return () => {
      clearInterval(randomTime);
    };
  }, []);

  return (
    <div className='max-w-[1200px] m-auto py-2 md:py-6 flex items-center justify-between gap-4 flex-col md:flex-row'>
      <img
        className='cursor-pointer hover:opacity-90'
        src='/images/mainLogo.png'
        alt='main logo'
      />
      <div className='flex w-full md:w-auto '>
        <div className='flex border border-gray-300 rounded-tl-md rounded-bl-md w-full md:w-auto'>
          <img src='/images/searchBox.png' />
          <input
            className='px-2 flex-1 outline-none w-full md:w-[290px]'
            placeholder={searchPlaceholder}
          />
        </div>
        <button className='cursor-pointer w-[100px] bg-blueColor px-8 text-white font-bold rounded-tr-md rounded-br-md'>
          搜索
        </button>
      </div>
      <ul className='gap-4 hidden xl:flex'>
        <li className='cursor-pointer hover:text-blueColor'>360浏览器</li>
        <li className='cursor-pointer hover:text-blueColor'>爱奇艺</li>
        <li className='cursor-pointer hover:text-blueColor text-redColor'>
          360安全卫士官方版
        </li>
        <li className='cursor-pointer hover:text-blueColor'>掼蛋</li>
        <li className='cursor-pointer hover:text-blueColor text-redColor'>
          夸克浏览器
        </li>
      </ul>
    </div>
  );
}

export default Search;
