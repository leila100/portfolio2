import React from "react";

import leila from "../../../assets/images/Leila.jpg";
import header_image from "../../../assets/images/headerImg.jpg";
import resume from "../../../assets/images/Resume - Leila berrouayel.pdf";

const Header = () => {
  return (
    <header id='home'>
      <div class='header'>
        <img src={header_image} alt='image of desk' class='header_img' />
        <div class='job_title'>Web/Software Developer</div>
        <div class='header_body'>
          <img src={leila} class='leila_img' />
          <div>
            <div class='name'>Leila Berrouayel</div>
            <div class='qualities'>Reliable . Committed . Dependable</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
