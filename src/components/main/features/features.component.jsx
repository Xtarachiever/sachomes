import React from 'react';
import './features.style.css';
import { Title } from '../../Title';
import { Slide } from './slide.component';
import feature1 from '../../../images/iphone-12--black.png';
import feature2 from '../../../images/feature-2-iphone-12.png';
import feature3 from '../../../images/feature-3-iphone-12.png';

export const Features = () => {
  return (
    <div
      className='flex items-center justify-center features-section'
      id='features-section'>
      <div className='features '>
        <div className='mt-10 mb-10 text-center'>
          <Title>App Features</Title>
        </div>
        <div className='overflow-y-scroll scroll-smooth slide-container'>
          <Slide
            number='01'
            image={feature1}
            title='Access to many apartments'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
          />
          <Slide
            number='02'
            image={feature2}
            title='Detailed descriptions and reviews'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
          />

          <Slide
            number='03'
            image={feature3}
            title='Get updated always'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
          />
        </div>
      </div>
    </div>
  );
};
