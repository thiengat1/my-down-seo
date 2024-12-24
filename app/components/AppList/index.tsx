import React from 'react';
import appListData from '../../data/app-list.json';

function AppList() {
  return (
    <div className='grid grid-cols-3 xs:grid-cols-4 md:grid-cols-8 sm:grid-cols-6 xl:grid-cols-10 px-12 py-8 border border-gray-200 mt-6 bg-white rounded-md '>
      {appListData.map((app) => {
        return (
          <div
            key={app.id}
            className='flex flex-col items-center gap-2 mb-2 cursor-pointer relative'
          >
            <img
              src={`/images/appList/item${app.id}.jpg`}
              className='w-[55%] transition-all duration-500 hover:transition-all hover:duration-500 hover:scale-110'
            />
            <span className='hover:text-blueColor'>{app.name}</span>
            {app.label && (
              <span
                className='text-white bg-redColor 
              px-1 py-1 absolute italic text-[0.8rem] -top-3 right-4 rounded-md after:w-4 
              after:h-4 after:absolute 
              after:border-8 after:border-t-redColor after:border-b-transparent
              after:border-l-transparent after:border-r-transparent after:left-1 after:-bottom-3'
              >
                {app.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default AppList;
