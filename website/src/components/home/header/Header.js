import React from "react";
import { Link } from "react-scroll";

import leila from "../../../assets/images/Leila.jpg";
import header_image from "../../../assets/images/headerImg.jpg";
import resume from "../../../assets/images/Resume - Leila berrouayel.pdf";

const Header = () => {
  return (
    <header id='home'>
      <div className='header'>
        <img src={header_image} alt='desk' className='header_img' />
        <div className='job_title' data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
          Web/Software Developer
        </div>
        <div className='header_body' data-aos='fade-zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='3000'>
          <div className='name'>
            <img src={leila} alt='Leila Berrouayel' className='leila_img' /> <div>Leila Berrouayel</div>
          </div>
          <div className='qualities'>Reliable . Committed . Dependable</div>
          <div className='links'>
            <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
              <a href={resume} target='_blank' rel='noopener noreferrer'>
                RESUME
              </a>
            </div>
            <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
              <Link activeClass='activeProj' to='proj' spy={true} smooth={true} offset={-70} duration={500}>
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
