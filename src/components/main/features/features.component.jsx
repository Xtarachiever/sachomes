import React from 'react';
import './features.style.css';
import { Title } from '../../Title';
import { SlideContent } from './slide.component';
import feature1 from '../../../images/iphone-12--black.png';
import feature2 from '../../../images/feature-2-iphone-12.png';
import feature3 from '../../../images/feature-3-iphone-12.png';

import 'pure-react-carousel/dist/react-carousel.es.css';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

const Features = () => {
  return (
    <>
      <div className='py-10 features-section' id='features-section'>
        <div className='px-5 features lg:px-10'>
          <div className='mb-5 text-center'>
            <Title>App Features</Title>
          </div>
          <div className='slide-container'>
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              isPlaying={true}
              infinite={true}
              interval={2000}
              totalSlides={3}>
              <Slider>
                <Slide index={0}>
                  <SlideContent
                    number='01'
                    image={feature1}
                    title='Access to many apartments'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
                  />
                </Slide>
                <Slide index={1}>
                  <SlideContent
                    number='02'
                    image={feature2}
                    title='Detailed descriptions and reviews'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
                  />
                </Slide>
                <Slide index={2}>
                  <SlideContent
                    number='03'
                    image={feature3}
                    title='Get updated always'
                    content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus, metus orci, et at. Scelerisque turpis tortor, nullam sed. Semper in nunc odio semper.'
                  />
                </Slide>
              </Slider>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
