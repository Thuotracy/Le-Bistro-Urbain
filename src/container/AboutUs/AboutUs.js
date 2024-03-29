import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt='g letter'/> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon_img" />
        <p className="P__opensans">
        At Le Bistro Urbain, the world feels like a bubbling Mexican Restaurant, with an infinite strand of pasta connecting everything and everyone.
        The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.G} alt="chef" style={{border:"1px solid #DCCA87", borderRadius:"1rem", height:"450px", width:"380px"}} />
    </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon_img' />
        <p className='P__opensans'>
         Le Bistro Urbain was founded in 1996, born out of love and respect for these Mexican deli creations by two brothers 'José.' and 'Santiago', who had a desire to bring quality ingredients to the table.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      
    </div>
  </div>
);

export default AboutUs;
