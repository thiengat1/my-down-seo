import React from 'react';

function RightMenu() {
  return (
    <div className='fixed right-8 top-[50%] -translate-y-[50%] bg-white border border-gray-200 flex flex-col items-center justify-center gap-2'>
      <div className='border-b border-b-gray-200 p-2 cursor-pointer hover:text-blueColor'>
        <img src='/images/right-icon1.png' />
        <span>软件收录</span>
      </div>
      <div className='border-b border-b-gray-200 p-2 cursor-pointer hover:text-blueColor'>
        <img src='/images/right-icon2.png' />
        <span>商务合作</span>
      </div>
      <div className='border-b border-b-gray-200 p-2 cursor-pointer hover:text-blueColor'>
        <img src='/images/right-icon3.png' />
        <span>用户反馈</span>
      </div>
      <div className='p-2 cursor-pointer hover:text-blueColor'>
        <img src='/images/right-icon4.png' />
      </div>
    </div>
  );
}

export default RightMenu;
