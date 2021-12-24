import React from 'react';
import { Link } from 'react-router-dom';
import googlePlay from '../../../images/icon/transparent-google-play-download-icon.svg';
import AppleStore from '../../../images/icon/transparent-apple-store-download-icon.svg';

export const Slide = ({ number, title, content, image }) => {
  return (
    <div className='container flex items-center justify-center w-full mx-auto text-left feature-slides'>
      <div className='flex flex-1'>
        <div>
          <span className='p-2 mr-8 text-white rounded-full slide-number'>
            {number}
          </span>
        </div>

        <div className='flex flex-col gap-y-10'>
          <h3 className='slide-header'>{title}</h3>
          <p className=' slide-text'>{content}</p>
          <div className='flex mt-10 space-x-10 slide-download-icon'>
            <Link to='/' className='px-10 py-6 download-icon'>
              <img src={googlePlay} alt='google Play' className='h-15' />
            </Link>
            <Link to='/' className='px-10 py-6 download-icon'>
              <img src={AppleStore} alt='AppleStore' className=' h-15' />
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <img src={image} alt='iphone-12--black' className='' />
      </div>
    </div>
  );
};
