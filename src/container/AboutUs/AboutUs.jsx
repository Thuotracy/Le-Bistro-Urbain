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
          Lorem Ipsum, In Graphical And Textual Context Refers To Filler Text
          That Is Placed In A Document Or Visual Presentation. Refers To Filler
          Text That Is Placed In A Document Or Visual Presentation.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className='app__wrapper_img app__wrapper_img_reverse'>
      <img src={images.chef} alt="chef" style={{borderRadius:"2rem", height:"450px"}} />
    </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon' className='spoon_img' />
        <p className='P__opensans'>Lorem Ipsum, In Graphical And Textual Context,
         Refers To Filler Text That Is Placed In A Document Or Visual Presentation. Refers To Filler Text That Is Placed In A Document Or Visual Presentation.
        </p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      
    </div>
  </div>
);

export default AboutUs;
