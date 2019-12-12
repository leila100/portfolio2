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
    // <header id='home'>
    //   <div class='header_container'>
    //     <div class='header-frame'>
    //       <div class='header-content'>
    //         <img src={leila} alt='Icons for Javascript - React - Node' />
    //         <div class='intro'>
    //           <div class='name'>LEILA BERROUAYEL</div>
    //           <div class='job'>WEB/SOFTWARE DEVELOPER</div>
    //           <div class='desc'>Reliable . Committed . Dependable</div>
    //           <div class='links'>
    //             <div class='link'>
    //               <a href='#proj'>PROJECTS</a>
    //             </div>
    //             <div class='link'>
    //               <a href={resume} target='_blank' rel='noopener noreferrer'>
    //                 RESUME
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Header;
