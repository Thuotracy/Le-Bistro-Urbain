import React from 'react';

import { images } from "../../constants"
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter'/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cornorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon_img' />
        <p className='P__opensans'>Lorem Ipsum, In Graphical And Textual Context,
         Refers To Filler Text That Is Placed In A Document Or Visual Presentation. Refers To Filler Text That Is Placed In A Document Or Visual Presentation.
        </p>
        <button type='button' className='custom__button'>More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'></div>
    </div>
  </div>
);

export default AboutUs;