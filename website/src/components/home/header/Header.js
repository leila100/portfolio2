import React from "react";
import { Link } from "react-scroll";

import leila from "../../../assets/images/Leila.jpg";
import header_image from "../../../assets/images/headerImg.jpg";
import resume from "../../../assets/images/Resume - Leila berrouayel.pdf";

const Header = () => {
  return (
    <header id='home'>
      <div class='header'>
        <img src={header_image} alt='desk' class='header_img' />
        <div class='job_title'>Web/Software Developer</div>
        <div class='header_body'>
          <img src={leila} alt='Leila Berrouayel' class='leila_img' />
          <div>
            <div class='name'>Leila Berrouayel</div>
            <div class='qualities'>Reliable . Committed . Dependable</div>
            <div class='links'>
              <div class='link'>
                <a href={resume} target='_blank' rel='noopener noreferrer'>
                  RESUME
                </a>
              </div>
              <div class='link'>
                <Link activeClass='activeProj' to='proj' spy={true} smooth={true} offset={-70} duration={500}>
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
