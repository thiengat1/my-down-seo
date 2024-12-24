import React from 'react';

function Footer() {
  return (
    <div className='bg-black text-white flex justify-center p-6 items-center flex-col gap-3 mt-12'>
      <div className='hidden md:flex'>
        <ul className='flex items-center gap-4'>
          <li className='cursor-pointer'>免责声明</li>
          <span>|</span>
          <li className='cursor-pointer'>投诉处理</li>
          <span>|</span>
          <li className='cursor-pointer'>关于我们</li>
          <span>|</span>
          <li className='cursor-pointer'>网站地图</li>
          <span>|</span>
          <li className='cursor-pointer'>最新更新</li>
          <span>|</span>
          <li className='cursor-pointer'>软件库</li>
          <span>|</span>
          <li className='cursor-pointer'>软件教程 </li>
        </ul>
      </div>
      <div className='flex items-center gap-2'>
        <p>公司名称：重庆天极魅客科技有限公司</p>
        <img className='cursor-pointer' src='images/footer1.png' />
      </div>
      <p className='hidden md:flex'>
        网站地址：重庆市渝北区财富大道15号财富二号A栋6楼9号 电话：4000615585
      </p>
      <p>极速下载 渝ICP备18009216号-11 ©2024 mydown.com</p>
      <div className='items-center gap-2 hidden md:flex'>
        <p>总公司名称：重庆天极网络有限公司</p>
        <img className='cursor-pointer' src='images/footer2.png' />
        <p className='cursor-pointer'>渝公网安备 50019002500384号</p>
      </div>
    </div>
  );
}

export default Footer;
