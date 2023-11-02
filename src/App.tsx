import Footer from './pages/Footer';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Retreats from './pages/Retreats';
import Package from './pages/Package';
import Gallary from './pages/Gallary';
import './app.css'
import Navbar from './pages/navbar';
import { SelectedPage } from './shared/types';
import { useEffect, useState } from 'react';
import AsSeenPage from './pages/AsSeenPage';




function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);

      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  return (
    <>

      <div className="heroEffects">

        <div className='bg'>

        </div>

      </div>

      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Treatments setSelectedPage={setSelectedPage}/>
      <Package setSelectedPage={setSelectedPage}/>
      <Retreats setSelectedPage={setSelectedPage}/>
      <Gallary setSelectedPage={setSelectedPage}/>
      <AsSeenPage setSelectedPage={setSelectedPage}/>
      <Footer />


    </>
  )
}

export default App
