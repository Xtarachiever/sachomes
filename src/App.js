import React, { lazy, Suspense } from 'react';
import 'animate.css';
import './App.css';
import { Header } from './components/header/header.component';
import { Features } from './components/main/features/features.component';
import { Benefits } from './components/main/benefits/benefits.components';
import { Footer } from './components/footer/footer.component';
import { Apartments } from './components/main/apartments/apartments.component';
// const Header = lazy(() => import('./components/header/header.component'));

// import star from "./images/emoji/star-emoji.svg";
// import moon from "./images/emoji/moon-emoji.svg";
// import smile from "./images/emoji/smile-emoji.svg";

const App = () => {
  return (
    <div>
      <Header />
      <Apartments />
      <Features />
      <Benefits />
      <Footer />
    </div>
  );
};

export default App;
