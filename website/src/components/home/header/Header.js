import React from "react";

import homeIcons from "../../../assets/images/icons.png";

const Header = () => {
  return (
    <header id='home'>
      <div class='header_container'>
        <div class='header-frame'>
          <div class='header-content'>
            <img src={homeIcons} alt='Icons for Javascript - React - Node' />
            <div class='intro'>
              <div class='name'>LEILA BERROUAYEL</div>
              <div class='job'>WEB/SOFTWARE DEVELOPER</div>
              <div class='desc'>Reliable . Committed . Dependable</div>
              <div class='links'>
                <div class='link'>
                  <a href='#proj'>PROJECTS</a>
                </div>
                <div class='link'>
                  <a href='#' target='_blank' rel='noopener noreferrer'>
                    RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
