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
      <div></div>
      <Profile/>
      <div></div>
      <About/>
      <div></div>
      <Portfolio/>
      <div></div>
      <Contact/>
      <div></div>
      <Footer/>
    </div>
  )
}

export default App