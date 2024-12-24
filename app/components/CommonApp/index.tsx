import React from 'react';
import CommonMenu from './CommonMenu';
import CommonAppList from './CommonAppList';
import CommonDownload from './CommonDownload';

function CommonApp() {
  return (
    <div className='border border-gray-200 rounded-md p-4 bg-white'>
      <CommonMenu />
      <div className='flex mt-5 gap-4 flex-col md:flex-row'>
        <CommonAppList />
        <CommonDownload />
      </div>
    </div>
  );
}

export default CommonApp;
