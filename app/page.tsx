import Header from './components/Header';
import AppList from './components/AppList';
import Banner from './components/Banner';
import Slider from './components/Slider';
import HotApp from './components/ HotApp';
import CommonApp from './components/CommonApp';
import Category from './components/Category';
import computerAppMenu from './data/category/computer-app-menu.json';
import computerAppList from './data/category/computer-app-list.json';
import computerGameMenu from './data/category/computer-game-menu.json';
import computerGameList from './data/category/computer-game-list.json';
import AppStore from './components/AppStore';
import macAppMenu from './data/category/mac-app-menu.json';
import macAppList from './data/category/mac-app-list.json';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='max-w-[1200px] m-auto mb-8'>
        <AppList />
        <Banner image='/images/banner/banner1.jpg' />
        <Slider />
        <HotApp />
        <Banner image='/images/banner/banner2.jpg' />
        <CommonApp />
        <Banner image='/images/banner/banner3.jpg' />
        <Category
          title='电脑软件'
          sort={1}
          menus={computerAppMenu}
          appList={computerAppList}
          imageCategory='computer-app'
        />
        <Category
          title='电脑游戏'
          sort={2}
          menus={computerGameMenu}
          appList={computerGameList}
          imageCategory='computer-game'
        />
        <Banner image='/images/banner/banner4.jpg' />
        <AppStore />
        <Banner image='/images/banner/banner5.jpg' />
        <Category
          title='Mac软件'
          sort={4}
          menus={macAppMenu}
          appList={macAppList}
          imageCategory='mac-app'
        />
      </main>
      <Footer />
    </div>
  );
}
