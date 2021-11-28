import React from "react";
import { Link } from "react-router-dom";
import iphone12a from "./images/iphone-12-full.svg";
import iphone12b from "./images/iphone-12-half.svg";
import followIcon from "./images/icon/follow-icon.svg";
import appleStore from "./images/apple-store.svg";
import googleStore from "./images/google-store.svg";
// import star from "./images/emoji/star-emoji.svg";
// import moon from "./images/emoji/moon-emoji.svg";
// import smile from "./images/emoji/smile-emoji.svg";

const App = () => {
  return (
    <div className='max-h-screen mx-auto overflow-x-hidden bg-no-repeat 2xl:container'>
      <div className='flex flex-col px-10 bg-cover md:px-15 bg-hero-pattern'>
        <header className='flex-1'>
          <nav className='flex items-center justify-between py-5 flex-column'>
            <h1>SAChomes Logo</h1>
            <div className='flex flex-row items-center'>
              <Link to='/'>
                <img src={followIcon} alt='follow-icon' className='mr-5 w-7' />
              </Link>
              <h2 className='text-xl text-sacblack font-brfirma'>Follow</h2>
            </div>
          </nav>
          <div className='flex flex-row'>
            <div className='flex-auto mt-40 mast-left'>
              <h2 className='max-w-2xl space-x-2 space-y-1 text-3xl font-bold xl:text-5xl lg:text-4xl sm:text-3xl font-brfirma'>
                We offer <span className='text-sacgreen'>Safe</span>,
                <span className='text-sacgreen'> Affordable</span> and
                <span className='text-sacgreen'> Convenient</span> homes for
                rent to our users.
              </h2>
              <div className='flex mt-10'>
                <Link to='/' className='mr-5'>
                  <img
                    src={googleStore}
                    alt='google-store'
                    className='object-contain w-full h-12'
                  />
                </Link>
                <Link to='/'>
                  <img
                    src={appleStore}
                    alt='apple-store'
                    className='object-contain w-full h-12'
                  />
                </Link>
              </div>
            </div>
            <div className='flex flex-row mt-10 mast-right'>
              <img
                src={iphone12a}
                alt='sachome app mockup'
                className='sm:object-scale-down h-4/6'
              />
              <img
                src={iphone12b}
                alt='sachome app mockup'
                className='mt-64 -ml-24 sm:object-scale-down h-4/6'
              />
            </div>
          </div>
        </header>
        <footer className='flex-grow-0'>
          <p className='py-2 text-center'>&copy; Copyright 2021 SAChomes</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
