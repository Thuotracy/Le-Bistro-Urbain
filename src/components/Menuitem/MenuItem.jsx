import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>
    <div className='app__menuitem-head'>
      <div className='app_menuitem-name'>
        <p className='p__cornorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>

      <div className='app__menuitem-dash'/>

      <div className='app_menuitem-price'>
        <p className='p__cornorant'>{price}</p>
      </div>
    </div>

    <div className='app__menuitems-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>
    </div> 
     
  </div>
);

export default MenuItem;
