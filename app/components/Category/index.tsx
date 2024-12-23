import React from 'react';
import StarVote from '../StarVote';

function Category({ title, sort, menus, appList, imageCategory }: any) {
  return (
    <div className='border border-gray-200 rounded-md p-4 mb-6 bg-white'>
      <div className='border-b border-b-gray-200 pb-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-12'>
            <div className='flex gap-2 items-center'>
              <img src={`/images/category${sort}.png`} />
              <div className='text-xl font-bold'>{title}</div>
            </div>
            <div className='flex gap-4 text-gray-600'>
              {menus.map((menu: any) => {
                return (
                  <div
                    key={menu.id}
                    className='px-4 hover:bg-blue-300 cursor-pointer rounded-xl hover:text-blueColor'
                  >
                    {menu.name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className='flex gap-4 font-bold text-gray-600 text-[16px]'>
            <span className='cursor-pointer hover:text-blueColor'>
              最新软件
            </span>
            <span className='cursor-pointer hover:text-blueColor'>
              人气软件
            </span>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-4 p-4'>
        {appList.map((app: any) => {
          return (
            <div
              key={app.id}
              className='flex items-center gap-2 border-b border-b-gray-200 pb-8'
            >
              <img
                src={`/images/${imageCategory}/app${app.id}.jpg`}
                className=' rounded-xl w-[50px] cursor-pointer'
              />
              <div className='flex flex-col gap-1'>
                <div className='cursor-pointer hover:text-blueColor'>
                  {app.name}
                </div>
                <StarVote voteNumber={app.star} />
                <div className='text-[0.8rem] text-gray-400'>
                  {app.category}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
