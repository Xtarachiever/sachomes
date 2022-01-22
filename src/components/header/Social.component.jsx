import React from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../images/icon/twitter.svg';
import facebook from '../../images/icon/facebook.svg';
import instagram from '../../images/icon/instagram.svg';

const Social = () => {
  return (
    <div className='absolute z-50 mt-3'>
      <div className='z-50 flex flex-col justify-center gap-y-2'>
        <Link to='/' className='block social-icon'>
          <img
            src={facebook}
            alt='Facebook-icon'
            className='h-8 cursor-pointer '
          />
        </Link>
        <Link to='/' className='block social-icon'>
          <img
            src={instagram}
            alt='instagram-icon'
            className='h-8 cursor-pointer'
          />
        </Link>
        <Link to='/' className='block social-icon'>
          <img
            src={twitter}
            alt='twitter-icon'
            className='h-8 cursor-pointer'
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
