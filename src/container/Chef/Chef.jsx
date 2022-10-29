import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title=''/>
      <h1 className='headtext__cornorant'>Our Belief</h1>
    </div>
  </div>
);

export default Chef;
