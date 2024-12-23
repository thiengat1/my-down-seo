import React from 'react';

function Banner({ image }: any) {
  return (
    <div className='my-6 cursor-pointer rounded-md'>
      <img src={image} className='rounded-md' />
    </div>
  );
}

export default Banner;
