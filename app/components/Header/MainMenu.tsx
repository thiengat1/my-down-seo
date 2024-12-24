import React from 'react';
import mainMenuData from '../../data/main-menu.json';

function MainMenu() {
  return (
    <div className='bg-blueColor text-white font-bold hidden md:block'>
      <div className='max-w-[1200px] m-auto'>
        <ul className='flex justify-between text-[18px]'>
          {mainMenuData.map((menu) => {
            return (
              <li
                className='hover:cursor-pointer hover:bg-[#066eb4] p-2'
                key={menu.id}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MainMenu;
