import React from 'react';
import topMenuData from '../../data/top-menu.json';

function TopMenu() {
  return (
    <div className='py-2 border-b border-gray-200 hidden xl:block'>
      <div className='max-w-[1200px] m-auto flex justify-end'>
        <div className='mr-10'>
          <a className='cursor-pointer text-redColor'>
            暴雪游戏重新带回国服，玩家们，久等了！
          </a>
          <a className='cursor-pointer text-yellow-500 border border-redColor text-[0.7rem] p-0.5 rounded-md relative -top-1 italic'>
            HOT
          </a>
        </div>
        <ul className='flex gap-10'>
          {topMenuData.map((menu) => {
            return (
              <li className='cursor-pointer hover:text-blue-700' key={menu.id}>
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
