import React from "react";

import leila from "../../../assets/images/Leila.png";
import header_image from "../../../assets/images/headerImg.jpg";

const Header = () => {
  return (
    <header id='home'>
      <div className='header'>
        <div className='headerContainer'>
          <img src={leila} alt='desk' className='leila' />
          <div className='job_title'>Web/Software Developer</div>
          <div className='skills'>
            <div>Web Developer</div>
            <div>JavaScript, React, Node, GraphQL</div>
            <div>Agile Enthusiast</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
