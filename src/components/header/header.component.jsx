import React, { useState } from 'react';
import 'animate.css';
import './header.style.css';
import Logo from '../../images/logo.svg';
import Follow from '../Follow';
import AppleStore from '../../images/get-on-apple.png';
import googlePlay from '../../images/get-on-google.png';
import phonePack from '../../images/phone-pack.svg';
import smile from '../../images/emoji/smile-emoji.svg';
import star from '../../images/emoji/star-emoji.svg';

import Social from './Social.component';

const Header = () => {
  const [visibilty, changeVisibility] = useState(true);
  const handleLogoClick = () => {
    changeVisibility(!visibilty);
  };
  return (
    <div className='pt-3 bg-no-repeat bg-cover header-section bg-hero-pattern'>
      <div className='container px-5 mx-auto lg:px-10'>
        <nav className='flex items-center justify-between w-full'>
          <div className=''>
            <img src={Logo} alt='logo' className='sm:h-full h-4/6' />
          </div>
          <div className='flex items-center gap-x-5'>
            <div className='relative' onClick={() => handleLogoClick()}>
              <Follow />
              {visibilty && <Social />}
            </div>
            <p>Follow</p>
          </div>
        </nav>
        <div className='relative'>
          <img
            src={smile}
            alt='smile-emoji'
            className='absolute h-8 mt-5 sm:h-12 left-5 animate-pulse '
          />
          <img
            src={star}
            alt='star'
            className='absolute h-8 mt-5 top-20 sm:-top-20 right-5 sm:right-72 sm:h-12 animate-spin'
          />
        </div>

        <header className='flex grid grid-cols-1 sm:grid-cols-2 items-center mt-20 sm:mt-5 lg:-mt-12'>
          <div className=''>
            <div className='flex items-center flex-col'>
              <div
                className=''
                data-aos='fade-up'
                data-aos-delay='50'
                data-aos-duration='1000'>
                <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl word-space'>
                  We offer <span className='text-sacblue'>Safe</span>,
                  <span className='text-sacblue'> Affordable</span> and
                  <span className='text-sacblue'> Convenient</span> homes for
                  <span className='text-sacbrown'> rent</span> to our users.
                </h1>
              </div>
              <div
                className='flex sm:px-5 lg:px-0 mt-14 space-x-7 lg:space-x-11'
                data-aos='fade-up'
                data-aos-delay='300'
                data-aos-duration='800'>
                <button className='px-5 bg-black py-2overflow-hidden sm:w-40 lg:w-60 rounded-xl'>
                  <img
                    className='object-cover'
                    src={googlePlay}
                    alt='get on playstore'
                  />
                </button>
                <button className='px-5 py-3 overflow-hidden bg-black sm:w-40 lg:w-60 rounded-xl'>
                  <img
                    className='object-cover '
                    src={AppleStore}
                    alt='get on playstore'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className=''>
            <img
              src={phonePack}
              alt='AppleStore'
              className='w-full :mt-0 '
              data-aos='zoom-in'
              data-aos-delay='50'
              data-aos-duration='1000'
            />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
