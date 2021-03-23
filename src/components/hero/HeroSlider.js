import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import wrap from './wrap';

import image1 from '../../images/image-1.jpeg';
import image2 from '../../images/image-2.jpeg';
import image3 from '../../images/image-3.jpeg';

import './heroSlider.scss';

const sliderData = [
  {
    title: 'JS Streetwear Collection',
    image: image1,
    linkUrl: 'jsstreetwear',
  },
  {
    title: 'DevActive Collection',
    image: image2,
    linkUrl: 'devactive',
  },
  {
    title: 'X Collection',
    image: image3,
    linkUrl: 'xcollection',
  },
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const HeroSlider = ({ history, match }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, sliderData.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className='slider-wrapper util-border-bottom'
        >
          <motion.div variants={variants} className='inner-slider'>
            <div className='hero-heading'>
              <span className='util-small-heading'>Spring - Summer '21</span>
              <h1 className='util-large-heading'>
                {sliderData[imageIndex].title}
              </h1>
              <button
                className='util-button-light'
                onClick={() =>
                  history.push(
                    `shop${match.url}${sliderData[imageIndex].linkUrl}`
                  )
                }
              >
                Shop Now
              </button>
            </div>
          </motion.div>
          <div
            className='inner-slider'
            style={{
              background: `url(${sliderData[imageIndex].image}) no-repeat center center/cover`,
            }}
          ></div>
        </motion.div>
      </AnimatePresence>
      <div className='button-container'>
        <button className='slider-button' onClick={() => paginate(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} size='2x' />
        </button>
        <button className='slider-button' onClick={() => paginate(1)}>
          <FontAwesomeIcon icon={faArrowRight} size='2x' />
        </button>
      </div>
    </>
  );
};

export default withRouter(HeroSlider);
