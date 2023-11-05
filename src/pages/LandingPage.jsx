import Navbar from '../components/Navbar'
import Carousell from '../components/Carousell'
import About from '../components/About'
import CardBarang from '../components/CardBarang'
import Footer from '../components/Footer'
import { useEffect } from 'react';

function LandingPage() {
  useEffect(() => {
  document.title = 'Landing Page';
}, []);
  return (
        <>
        <Navbar/>
        <Carousell/>
        <About/>
        <CardBarang/>
        <Footer/>
        </>
  )
}

export default LandingPage