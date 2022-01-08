import React from 'react';
import { Link } from 'react-router-dom';
import googlePlay from '../../../images/icon/transparent-google-play-download-icon.svg';
import AppleStore from '../../../images/icon/transparent-apple-store-download-icon.svg';

export const Slide = ({ number, title, content, image }) => {
  return (
    <div className='container flex flex-col justify-center w-full px-5 mx-auto text-left lg:justify-between lg:items-center lg:flex-row lg:px-0 feature-slides'>
      <div className='flex flex-1'>
        <div>
          <span className='p-2 mr-8 text-white rounded-full slide-number'>
            {number}
          </span>
        </div>

        <div className='flex flex-col gap-y-10'>
          <h3 className='slide-header'>{title}</h3>
          <p className=' slide-text lg:w-8/12'>{content}</p>
          <div className='flex hidden mt-10 space-x-10 slide-download-icon lg:block'>
            <Link to='/' className='px-10 py-6 download-icon'>
              <img src={googlePlay} alt='google Play' className='h-15' />
            </Link>
            <Link to='/' className='px-10 py-6 download-icon'>
              <img src={AppleStore} alt='AppleStore' className=' h-15' />
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={image} alt='iphone-12--black' className='block mr-0 h-15' />
      </div>
    </div>
  );
};
