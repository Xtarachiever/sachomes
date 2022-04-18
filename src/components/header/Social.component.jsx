import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import twitter from '../../images/icon/twitter.svg';
// import follow from '../../images/icon/Follow+Icon.png'
import facebook from '../../images/icon/facebook.svg';
import instagram from '../../images/icon/instagram.svg';

const Social = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 320) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }
  window.addEventListener('resize', handleResize)
  useEffect(()=>{
     handleResize()
  },[isMobile])
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
        {/* {
          isMobile &&         
          <Link to='/' className='block social-icon rounded-full bg-white'>
          <img
            src={follow}
            alt='twitter-icon'
            className='cursor-pointer h-9'
          />
        </Link>
        } */}
      </div>
    </div>
  );
};

export default Social;
