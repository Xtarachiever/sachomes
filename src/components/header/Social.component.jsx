import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../images/icon/twitter.svg';
import facebook from '../../images/icon/facebook.svg';
import instagram from '../../images/icon/instagram.svg';

const Social = () => {
  return (
    <div
      className='absolute z-50 mt-4 ml-2'
      data-aos='fade'
      data-aos-delay='50'
      data-aos-duration='1000'>
      <div className='z-50 flex flex-col justify-center gap-y-4'>
        <Link to='/' className='block social-icon'>
          <img
            src={facebook}
            alt='Facebook-icon'
            className='cursor-pointer h-9 '
          />
        </Link>
        <Link to='/' className='block social-icon'>
          <img
            src={instagram}
            alt='instagram-icon'
            className='cursor-pointer h-9'
          />
        </Link>
        <Link to='/' className='block social-icon'>
          <img
            src={twitter}
            alt='twitter-icon'
            className='cursor-pointer h-9'
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
