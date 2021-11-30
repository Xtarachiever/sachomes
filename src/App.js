import React from "react";
import { Link } from "react-router-dom";
// import iphone12a from "./images/iphone-12-full.svg";
// import iphone12b from "./images/iphone-12-half.svg";
import phonepack from "./images/phone-pack.svg";
import followIcon from "./images/icon/follow-icon.svg";
import appleStore from "./images/apple-store.svg";
import googleStore from "./images/google-store.svg";
import "animate.css";
// import star from "./images/emoji/star-emoji.svg";
// import moon from "./images/emoji/moon-emoji.svg";
// import smile from "./images/emoji/smile-emoji.svg";

const App = () => {
  return (
    <div className='bg-no-repeat bg-cover bg-hero-pattern'>
      <div className='min-h-screen mx-auto overflow-x-hidden 2xl:container'>
        <div className='flex flex-col px-10 sm:bg-cover md:px-15'>
          <header className='flex-1'>
            <nav className='flex items-center justify-between py-5 flex-column'>
              <h1>SAChomes Logo</h1>
              <div className='flex flex-row items-center'>
                <Link to='/'>
                  <img
                    src={followIcon}
                    alt='follow-icon'
                    className='mr-5 w-7'
                  />
                </Link>
                <h2 className='text-xl text-sacblack font-brfirma'>Follow</h2>
              </div>
            </nav>
            <div className='flex flex-col lg:flex-row'>
              <div className='flex flex-col items-center flex-1 lg:items-start py-28 mast-left'>
                <h2 className='max-w-2xl py-2 space-x-2 space-y-1 text-2xl font-bold sm:text-3xl md:text-5xl font-brfirma animate__animated animate__fadeIn animate__slow 2s'>
                  We offer <span className='text-sacgreen '>Safe</span>,
                  <span className='text-sacgreen'> Affordable</span> and
                  <span className='text-sacgreen'> Convenient</span> homes for
                  rent to our users.
                </h2>
                <div className='flex mt-10 animate__animated animate__fadeIn animate__slow 2s animate__delay-1s'>
                  <Link to='/' className='mr-5'>
                    <img src={googleStore} alt='google-store' className='' />
                  </Link>
                  <Link to='/'>
                    <img src={appleStore} alt='apple-store' className='' />
                  </Link>
                </div>
              </div>
              <div className='flex items-center justify-center flex-1 mast-right'>
                <img
                  src={phonepack}
                  alt='sachome app mockup'
                  className='-mt-20 sm:mt-0 sm:object-scale-down h-6/6 animate__animated animate__bounceInUp animate__delay-2s animate__slow 2s '
                />
              </div>
            </div>
          </header>
        </div>
      </div>
      <footer className='flex-grow-0'>
        <p className='py-3 mt-10 text-center md:mt-0'>
          &copy; Copyright 2021 SAChomes
        </p>
      </footer>
    </div>
  );
};

export default App;
