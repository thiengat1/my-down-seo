import Header from './components/Header';
import AppList from './components/AppList';

export default function Home() {
  return (
    <div>
      <Header />
      <main className='max-w-[1200px] m-auto'>
        <AppList />
      </main>
    </div>
  );
}
