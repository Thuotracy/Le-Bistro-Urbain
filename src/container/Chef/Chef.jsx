import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title=''/>
      <h1 className='headtext__cormorant'>Choose the New Flavor</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</p>
        </div>
        <p className='p__opensans'>A great restaurant doesn't distinguish itself by how few mistakes it makes but by how well they handle those mistakes.</p>
      </div>
    </div>

    <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" style={{borderRadius:"2rem", height:"450px"}} />
    </div>
  </div>
);

export default Chef;
