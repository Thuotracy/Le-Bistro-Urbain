import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour" />
      <h1 className='app__header-h1'>The Key to FINE DINING</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
        Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.
      </p>
      <button type='button' className='custom__button'>View Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
