import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './hero.scss';

import image1 from '../../images/image-1.jpg';
import image2 from '../../images/image-2.jpg';
import image3 from '../../images/image-3.jpg';
import { useState } from 'react';

const sliderData = [
  {
    image: image1,
  },
  {
    image: image2,
  },
  {
    image: image3,
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === sliderData.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? sliderData.length - 1 : current - 1);
  };

  return (
    <div className='hero'>
      <div className='inner-hero'>
        <div className='hero-heading'>
          <span className='util-small-heading'>Spring - Summer '21</span>
          <h1 className='util-large-heading'>
            JS Streetwear <br /> Collection
          </h1>
          <button className='util-button-light'>Shop Now</button>
        </div>
      </div>
      <div className='inner-hero'>
        {sliderData.map((slide, index) => {
          return (
            <div
              style={{
                background:
                  index === current &&
                  `url(${slide.image}) no-repeat center center/cover`,
              }}
              key={index}
              className={index === current ? 'slide active' : 'slide'}
            ></div>
          );
        })}
      </div>
      <div className='button-container' onClick={prevSlide}>
        <button className='slider-button'>
          <FontAwesomeIcon icon={faArrowLeft} size='2x' />
        </button>
        <button className='slider-button' onClick={nextSlide}>
          <FontAwesomeIcon icon={faArrowRight} size='2x' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
