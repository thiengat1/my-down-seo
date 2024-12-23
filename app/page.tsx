import Header from './components/Header';
import AppList from './components/AppList';
import Banner from './components/Banner';
import Slider from './components/Slider';
import HotApp from './components/ HotApp';
import CommonApp from './components/CommonApp';
import Category from './components/Category';
import computerAppMenu from './data/category/computer-app-menu.json';
import computerAppList from './data/category/computer-app-list.json';

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
        />
        <Category
          title='电脑软件'
          sort={1}
          menus={computerAppMenu}
          appList={computerAppList}
        />
        <Banner image='/images/banner/banner4.jpg' />
      </main>
    </div>
  );
}
