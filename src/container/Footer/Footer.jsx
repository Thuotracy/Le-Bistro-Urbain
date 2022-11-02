import React from 'react';

import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className='ap__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
