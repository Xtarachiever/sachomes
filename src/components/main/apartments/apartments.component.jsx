import React from 'react';
import './apartments.style.css';
import { Title } from '../../Title';
import project1 from '../../../images/Project Cover 1.svg';
import project2 from '../../../images/Project Cover 2.svg';
import project3 from '../../../images/Project Cover 3.svg';
import project4 from '../../../images/Project Cover 4.svg';
import project5 from '../../../images/Project Cover 5.svg';
import project6 from '../../../images/Project Cover 6.svg';

export const Apartments = () => {
  return (
    <div className='flex flex-row items-center justify-center mb-20 apartments'>
      <div>
        <div className='my-12 text-center'>
          <Title>Some of our Apartments...</Title>
        </div>
        <div className='grid grid-cols-3 gap-4 gird'>
          <div className='overflow-hidden'>
            <img src={project1} alt='appartment' />
          </div>
          <div className='overflow-hidden'>
            <img src={project2} alt='appartment' />
          </div>
          <div className='overflow-hidden'>
            <img src={project3} alt='appartment' />
          </div>
          <div className='overflow-hidden'>
            <img src={project4} alt='appartment' />
          </div>
          <div className='overflow-hidden'>
            <img src={project5} alt='appartment' />
          </div>
          <div className='overflow-hidden'>
            <img src={project6} alt='appartment' />
          </div>
        </div>
      </div>
    </div>
  );
};
