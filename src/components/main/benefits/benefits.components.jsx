import React from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../../Title';
import benefitImages from '../../../images/benefits-image.svg';
import './benefits.style.css';

export const Benefits = () => {
  return (
    <div className='flex items-center benefits'>
      <div className='container w-full mx-auto'>
        <div className='flex flex-row justify-between'>
          <div className='flex-1'>
            <img src={benefitImages} alt='benefitImages' />
          </div>
          <div className='flex-1 gap-y-5'>
            <Title>Benefits</Title>
            <div className='mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
              eget varius quis adipiscing. Vitae sem sit est enim, proin.
              Habitasse varius convallis mauris ornare egestas adipiscing felis.
              Habitant porta sagittis facilisis ut lacus condimentum fermentum.
              Sed pellentesque volutpat elit et sagittis ultrices ut.
            </div>
            <ul className='mb-10 ml-10 list-disc list'>
              <li>Few clicks away from renting your dream apartment</li>
              <li>We provide affordable apartments within your budget</li>
              <li>Worry no more about fraudulent agents and extra charges</li>
            </ul>
            <div className='inline px-3 py-4 benfits-download-button'>
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
