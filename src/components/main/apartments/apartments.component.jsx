import React from 'react';
// import Rotate from 'react-reveal/Rotate';
import './apartments.style.css';
import { Title } from '../../Title';
import project1 from '../../../images/Project Cover 1.svg';
import project2 from '../../../images/Project Cover 2.svg';
import project3 from '../../../images/Project Cover 3.svg';
import project4 from '../../../images/Project Cover 4.svg';
import project5 from '../../../images/Project Cover 5.svg';
import project6 from '../../../images/Project Cover 6.svg';

const Apartments = () => {
  return (
    <div className='flex flex-row items-center justify-center mb-20 apartments lg:px-10'>
      <div>
        <div className='my-12 text-center'>
          <Title>Some of our Apartments...</Title>
        </div>
        <div className='grid grid-cols-2 gap-4 p-5 sm:grid-cols-3'>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='200'
            data-aos-duration='1000'>
            <img src={project1} alt='appartment' />
          </div>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='250'
            data-aos-duration='1000'>
            <img src={project2} alt='appartment' />
          </div>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='300'
            data-aos-duration='1000'>
            <img src={project3} alt='appartment' />
          </div>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='350'
            data-aos-duration='1000'>
            <img src={project4} alt='appartment' />
          </div>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='400'
            data-aos-duration='1000'>
            <img src={project5} alt='appartment' />
          </div>
          <div
            className='overflow-hidden'
            data-aos='zoom-in-right'
            data-aos-delay='450'
            data-aos-duration='1000'>
            <img src={project6} alt='appartment' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
