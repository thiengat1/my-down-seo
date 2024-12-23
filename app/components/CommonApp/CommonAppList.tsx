import React from 'react';
import commonAppList from '../../data/common-app/common-app-list.json';

function CommonAppList() {
  return (
    <div className='grid grid-cols-4 gap-4 w-[72%]'>
      {commonAppList.map((item) => {
        return (
          <div
            key={item.id}
            className='flex flex-col border border-gray-200 rounded-md'
          >
            <div
              key={item.id}
              className='rounded-md text-center overflow-hidden'
            >
              <div
                className={`${
                  item.id % 2 ? 'bg-bgApp2' : 'bg-bgApp1'
                } bg-no-repeat py-2`}
              >
                {item.name}
              </div>
            </div>
            <div className=''>
              {item.children.map((child) => {
                return (
                  <div
                    key={child.id}
                    className='flex items-center gap-4 p-2 cursor-pointer'
                  >
                    <img
                      src={`/images/commonApp/children${child.id}.jpg`}
                      className='w-[30px]'
                    />
                    <span className='hover:text-blueColor'>{child.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommonAppList;