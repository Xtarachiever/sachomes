import React from 'react';
import './features.style.css';
import { Title } from '../../Title';
// import { SlideContent } from './slide.component';
// import feature1 from '../../../images/iphone-12--black.png';
// import feature2 from '../../../images/feature-2-iphone-12.png';
// import feature3 from '../../../images/feature-3-iphone-12.png';

import 'pure-react-carousel/dist/react-carousel.es.css';

// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from 'pure-react-carousel';

const Features = () => {
  return (
    <>
      <div className='py-10 features-section bg-hero-pattern' id='features-section'>
        <div className='px-5 features lg:px-10'>
          <div className='mb-10 text-center'>
            <Title>App Features</Title>
          </div>
          <div className="flex flex-col justify-center sm:flex-row sm:justify-between px-10">
            <div className="mb-10 sm:mr-10">
              <span className="p-2 text-white rounded-full slide-number">
                01
              </span>
              <h3 className="mt-5">Access to many apartments</h3>
              <h5 className="mt-3">You will have access to many featured apartments from different locations thereby making the need for a physical inspection reduced and money saved.</h5>
            </div>
            <div className="mb-10 sm:mr-10">
              <span className='p-2 text-white rounded-full slide-number'>
                02
              </span>
              <h3 className="mt-5">Detailed descriptions and reviews</h3>
              <h5 className="mt-3">The app has detailed descriptions and reviews about each apartment from different past users in order to enlighten our current users.</h5>
            </div>
            <div className="">
              <span className='p-2 text-white rounded-full slide-number'>
                03
              </span>
              <h3 className="mt-5">Get updated always</h3>
              <h5 className="mt-3">You will be the first to know as soon as we have uploaded new apartments to explore. We put our customers first always!</h5>
            </div>
          </div>
          {/* <div className='slide-container'>
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
              <button className='flex justify-between w-full'>
               <ButtonBack>Back</ButtonBack>
               <ButtonNext>Next</ButtonNext>
              </button>
            </CarouselProvider>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Features;
