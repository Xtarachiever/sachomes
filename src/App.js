import React, { Suspense, lazy } from 'react';
import 'animate.css';
import './App.css';
import Logo from './images/logo/sachomes-white-logo.svg';
const Header = lazy(() => import('./components/header/header.component'));
const Apartments = lazy(() =>
  import('./components/main/apartments/apartments.component')
);
const Features = lazy(() =>
  import('./components/main/features/features.component')
);
const Benefits = lazy(() =>
  import('./components/main/benefits/benefits.components')
);
const Footer = lazy(() => import('./components/footer/footer.component'));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center w-full h-full'>
          <img src={Logo} alt='logo' />
        </div>
      }>
      <Header />
      <Apartments />
      <Features />
      <Benefits />
      <Footer />
    </Suspense>
  );
};

export default App;
