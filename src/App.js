import './App.scss';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App grid grid-cols-12 h-screen p-2">
      <div className='lg:col-span-2 2xl:col-span-2 xl:col-span-2 md:col-span-12 col-span-12 rounded-md shadow-2xl shadow-myBlack-500/50'>
        <Navbar />
      </div>
      <div className='lg:col-span-7 2xl:col-span-7 xl:col-span-7 md:col-span-12 col-span-12'>
        <MainSection />
      </div>
      <div className="lg:col-span-3 2xl:col-span-3 xl:col-span-3 md:col-span-12 col-span-12">
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
