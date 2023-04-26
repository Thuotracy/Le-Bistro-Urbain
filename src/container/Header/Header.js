import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div className='app__wrapper_info'>
      <SubHeading title="" />
      <h1 className='app__header-h1'>Le Bistro Urbain</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
      Hola! We’re so excited you are a part of (brand name). We love all our customers, and that includes you too!
      </p>
      <button type='button' className='custom__button'>View Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img' style={{borderRadius:"2rem", height:"450px"}} />
    </div>
  </div>
);

export default Header;
