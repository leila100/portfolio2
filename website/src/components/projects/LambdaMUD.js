import React from "react";

import mud from "../../assets/images/maze_avatar.png";

const LambdaMUD = () => {
  return (
    <>
      <header id='home'>
        <div class='header_container'>
          <div class='header-frame'>
            <div class='header-content'>
              <img src={mud} alt='Lambda MUD' id='logo' />
              <div class='intro' id='appIntro'>
                <div class='name'>Lambda MUD</div>
                <div class='job'>Find your way!</div>
                <div class='links'>
                  <div class='link'>
                    <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      LINK
                    </a>
                  </div>
                  <div class='link'>
                    <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LambdaMUD;
