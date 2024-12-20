import React from 'react';
import TopMenu from './TopMenu';
import Search from './Search';
import MainMenu from './MainMenu';

function Header() {
  return (
    <header>
      <TopMenu />
      <Search />
      <MainMenu />
    </header>
  );
}

export default Header;
