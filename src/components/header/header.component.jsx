import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';
import './header.style.css';
import Logo from '../../images/logo.svg';
import followIcon from '../../images/icon/follow-icon.svg';
import AppleStore from '../../images/apple-store.svg';
import googlePlay from '../../images/google-store.svg';
import phonePack from '../../images/phone-pack.svg';

export const Header = () => {
  return (
    <div className='h-full pt-5 bg-no-repeat bg-cover header-section bg-hero-pattern'>
      <nav className='container flex items-center justify-between w-full mx-auto'>
        <div>
          <img src={Logo} alt='logo' className='h-20' />
        </div>
        <div className='flex items-center gap-x-5'>
          <img src={followIcon} alt='logo' className='h-8 cursor-pointer' />
          <p>Follow</p>
        </div>
      </nav>
      <header className='container flex mx-auto '>
        <div className='flex flex-col flex-1 mt-20 gap-y-8'>
          <div className='w-12/12'>
            <h1 className='text-5xl'>
              We offer <span className='text-sacblue'>Safe</span>,
              <span className='text-sachomeblue'> Affordable</span> and
              <span className='text-sacblue'> Convenient</span> homes for
              <span className='text-sacbrown'> rent</span> to our users.
            </h1>
          </div>
          <div className='flex flex-row space-x-12 '>
            <Link to='/' className='header-download-icon'>
              <img src={googlePlay} alt='google Play' className='h-15' />
            </Link>
            <Link to='/' className='header-download-icon'>
              <img src={AppleStore} alt='AppleStore' className='h-15' />
            </Link>
          </div>
        </div>
        <div className='flex-1 '>
          <img
            src={phonePack}
            alt='AppleStore'
            className='h-15 animate__animated animate__bounceInUp animate__delay-2s animate__slow 2s '
          />
        </div>
      </header>
    </div>
  );
};
