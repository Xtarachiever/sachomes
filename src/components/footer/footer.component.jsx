import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.css';
import sachomesWhiteLogo from '../../images/logo/sachomes-white-logo.svg';
import googlePlay from '../../images/icon/footer-google-play.svg';
import AppleStore from '../../images/icon/footer-apple-store.svg';

const Footer = () => {
  return (
    <div className='bg-sachomesblue footer-wrapper'>
      <footer className='flex items-center px-5 py-5 footer lg:px-10'>
        <div className='container flex flex-row justify-between w-full mx-auto lg:items-center'>
          <div className='flex flex-col h-full gap-y-4'>
            <div className='mb-5'>
              <img
                src={sachomesWhiteLogo}
                alt='sachomes-logo'
                className='h-20'
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-x-5'>
              <Link to='/'>About</Link>
              <a href='#features-section'>Features</a>
              <Link to='/'>Help</Link>
              <Link to='/'>Privacy Policy</Link>
            </div>
            <p className='-mt-3 md:-mt-0'>RC - 1872574</p>
            <p className='hidden lg:block'>
              © 2021 SAChomes. All rights reserved
            </p>
          </div>

          <div className='flex flex-col gap-y-4'>
            <div className='footer-right'>Get the App</div>
            <Link to='/'>
              <img src={googlePlay} alt='google Play' className='h-15' />
            </Link>
            <Link to='/'>
              <img src={AppleStore} alt='AppleStore' className=' h-15' />
            </Link>
          </div>
        </div>
      </footer>
      <p className='container block mx-auto mt-2 text-center text-white lg:hidden'>
        © 2021 SAChomes. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
