import React from 'react';
import { Link } from 'react-router-dom';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import { Title } from '../../Title';
import benefitImages from '../../../images/benefits-image.svg';
import './benefits.style.css';

const Benefits = () => {
  return (
    <div className='flex items-center benefits'>
      <div className='container w-full mx-auto'>
        <div className='flex flex-col-reverse gap-0 py-20 lg:py-0 lg:flex-row lg:items-center lg:justify-between lg:flex'>
          <Rotate top left>
            <div className=''>
              <img
                src={benefitImages}
                alt='benefitImages'
                className='block p-5 mx-auto'
              />
            </div>
          </Rotate>
          <div className='flex-1 px-10 mb-10 text-center lg:mb-0 gap-y-5 lg:text-left'>
            <Fade bottom>
              <Title>Benefits</Title>
              <div className='mb-5 text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
                eget varius quis adipiscing. Vitae sem sit est enim, proin.
                Habitasse varius convallis mauris ornare egestas adipiscing
                felis. Habitant porta sagittis facilisis ut lacus condimentum
                fermentum. Sed pellentesque volutpat elit et sagittis ultrices
                ut.
              </div>
              <ul className='mb-10 ml-10 text-left list-disc list'>
                <li>Few clicks away from renting your dream apartment</li>
                <li>We provide affordable apartments within your budget</li>
                <li>Worry no more about fraudulent agents and extra charges</li>
              </ul>
              <div className='inline px-3 py-4 benfits-download-button'>
                <Link to='http://'>
                  <button className='text-white'>Download App</button>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
