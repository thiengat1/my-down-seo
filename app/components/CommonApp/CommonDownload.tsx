'use client';
import React, { useState } from 'react';
import commonDownload from '../../data/common-app/common-download.json';
import StarVote from '../StarVote';

function CommonDownload() {
  const [downLoadSelect, setDownloadSelect] = useState(1);

  return (
    <div className='w-[28%]'>
      <div className='flex items-center gap-8 justify-center'>
        <img src='/images/download.png' />
        <h1 className='text-[18px] font-bold'>常用软件排行榜</h1>
      </div>
      <div className='mt-4 flex flex-col gap-2'>
        {commonDownload.map((item) => {
          return (
            <div
              key={item.id}
              className='flex items-start gap-4'
              onMouseEnter={() => setDownloadSelect(item.id)}
            >
              {item.sort ? (
                <img src={`/images/sort${item.sort}.png`} />
              ) : (
                <div className='w-[32px] text-center font-bold text-gray-600'>
                  {item.id}
                </div>
              )}

              <div className='flex flex-col gap-2'>
                <div className='hover:text-blueColor cursor-pointer'>
                  {item.name}
                </div>
                <div
                  className={`flex gap-3 ${
                    item.id === downLoadSelect ? '' : 'hidden'
                  }`}
                >
                  <div className='p-2 border border-gray-200 rounded-md cursor-pointer'>
                    <img
                      src={`/images/commonApp/download${item.id}.jpg`}
                      className='w-[30px]'
                    />
                  </div>
                  <div className={`flex flex-col gap-2`}>
                    <div className='flex items-center h-full gap-4'>
                      <span>{item.category}</span>
                      <div className='h-[50%] w-[2px] bg-gray-200' />
                      <StarVote voteNumber={item.star} />
                    </div>
                    <div className='text-[0.9rem] border border-red-500 w-max px-4 rounded-md hover:bg-red-500 cursor-pointer'>
                      下载
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommonDownload;
