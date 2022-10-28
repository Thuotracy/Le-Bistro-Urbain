import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { images, data } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'> 
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits your pallete "/>
      <h1 className='headtext__cornorant'>Drinks's Menu</h1>
    </div>

    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu_menu_heading'>Wine and Beer</p>
        <div className='app__specialMenu_menu_items'>
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} alt="menu img" />
      </div>

      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu_menu_heading'>Cocktails</p>
        <div className='app__specialMenu_menu_items'>
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>
      
    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button'></button>
    </div>
  </div>
);

export default SpecialMenu;
