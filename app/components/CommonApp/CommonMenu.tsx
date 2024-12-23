import React from 'react';
import commonMenuData from '../../data/common-app/common-menu.json';

function CommonMenu() {
  return (
    <div className='flex justify-between border-b border-b-gray-200 pb-4'>
      <div className='flex items-center gap-1'>
        <img src='/images/common.png' />
        <h1 className='text-2xl font-bold'>常用软件</h1>
      </div>
      <div>
        <ul className='flex gap-8 text-[16px] text-gray-500 font-bold'>
          {commonMenuData.map((item) => {
            return (
              <li className='hover:text-blueColor cursor-pointer' key={item.id}>
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommonMenu;
