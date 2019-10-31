import React from "react";

import fmn from "../../assets/images/fmn.png";

const ForgetMeNot = () => {
  return (
    <>
      <header id='home'>
        <div class='header_container'>
          <div class='header-frame'>
            <div class='header-content'>
              <img src={fmn} alt='Logo for Forget Me Not' id='logo' />
              <div class='intro' id='appIntro'>
                <div class='name'>FORGET ME NOT</div>
                <div class='job'>Never forget a special day!</div>
                <div class='links'>
                  <div class='link'>
                    <a href='https://forgetmenot.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      LINK
                    </a>
                  </div>
                  <div class='link'>
                    <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
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

export default ForgetMeNot;
