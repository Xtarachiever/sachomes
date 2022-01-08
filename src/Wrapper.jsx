import React from 'react';
import { Header } from './components/header/header.component';
import { Features } from './components/main/features/features.component.jsx';
import { Benefits } from './components/main/benefits/benefits.components';
import { Footer } from './components/footer/footer.component';
import { Apartments } from './components/main/apartments/apartments.component';

export const Wrapper = () => {
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
