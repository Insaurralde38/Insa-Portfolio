import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { About, Contact, Footer, NavBar, Portfolio, Profile } from './components/index';

function App() {

  useEffect(() => {
    AOS.init({
    });
  }, []);

  return (
    <div>
      <NavBar/>
      <Profile/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App