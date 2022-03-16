import React, { useEffect } from 'react';
import 'animate.css';
import './App.css';
import Header from './components/header/header.component';
import Features from './components/main/features/features.component';
import Benefits from './components/main/benefits/benefits.components';
import Footer from './components/footer/footer.component';
import Apartments from './components/main/apartments/apartments.component';
import 'aos/dist/aos.css';

const App = () => {
  let AOS;
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      once: false,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });
  return (
    <>
      <Header />
      <Apartments />
      <Features />
      <Benefits />
      <Footer />
    </>
  );
};

export default App;
