import React from 'react';
import { BsArrowLeftShort, BsRightArrowShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <SubHeading title="" />
      <h1 className='headtext__cornorant'>Gallery</h1>
      <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>
      Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation. Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as "pain itself."
      </p>
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}></div>

      <div className='app__gallery-images_arrow'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
  );
}

export default Gallery;
