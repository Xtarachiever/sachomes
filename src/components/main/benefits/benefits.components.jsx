import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../Title';
import benefitImages from '../../../images/benefits-image.svg';
import './benefits.style.css';

const Benefits = () => {
  return (
    <div className='px-5 flex items-center benefits'>
      <div className='container w-full mx-auto'>
        <div className='flex flex-col-reverse gap-0 py-20 lg:py-0 lg:flex-row lg:items-center lg:justify-between lg:flex lg:px-10'>
          <div className=''>
            <img
              src={benefitImages}
              alt='benefitImages'
              className='block p-5 mx-auto'
              data-aos='zoom-in'
              data-aos-delay='300'
              data-aos-duration='1000'
            />
          </div>
          <div className='flex-1 items-start px-10  mb-10 lg:mb-0 gap-y-5 lg:text-left'>
            <Title>Benefits</Title>
            <div
              className='mb-5 text-base'
              data-aos='fade-up'
              data-aos-delay='300'
              data-aos-duration='1000'>
                We love to think about our users first and how to make it easy when searching for an apartment. 
                At SAChomes, we make sure our users get exactly their dream houses, and below are some of the benefits 
                you get to enjoy as a user:
            </div>
            <ul className='mb-10 ml-2 text-left list-disc list'>
              <li
                data-aos='fade-up'
                data-aos-delay='350'
                data-aos-duration='1000'>
                Few clicks away from renting your dream apartment
              </li>
              <li
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='1000'>
                We provide affordable apartments within your budget
              </li>
              <li
                data-aos='fade-up'
                data-aos-delay='400'
                data-aos-duration='1000'>
                Worry no more about fraudulent agents and extra charges
              </li>
            </ul>
            <div
              className='inline px-3 py-4 benfits-download-button'
              data-aos='fade'
              data-aos-delay='800'
              data-aos-duration='1000'>
              <Link to='http://'>
                <button className='text-white'>Download App</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
