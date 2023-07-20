import './App.scss';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App grid grid-cols-12 h-screen p-2">
      <div className='col-span-2 rounded-md shadow-2xl shadow-myBlack-500/50'>
        <Navbar />
      </div>
      <div className='col-span-6'>
        <MainSection />
      </div>
      <div className="col-span-4">
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
