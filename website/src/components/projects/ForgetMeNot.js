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
      <section class='about'>
        <h2>
          <div>
            <span>||</span> React<span>||</span> React Hooks<span>||</span>
          </div>
          <div>
            Redux<span>||</span> Node<span>||</span>
          </div>
          <div>
            sqlite3<span>||</span> Sendgrid<span>||</span> Full Calendar
          </div>
          <div>
            <span>||</span> Styled Components<span>||</span> MaterialUI<span>||</span>
          </div>
        </h2>
        <div class='descriptions'>
          <div class='desc'>
            <h3>Overview</h3>
            <p>
              Forget Me Not is an application that sends thoughtful messages, on your behalf, to people you know on
              their special day.
            </p>
            <p>Added some technology (Redux for example), and refactored the code to create Forget Me Not.</p>
          </div>
          <div class='desc'>
            <h3>Team</h3>
            <p>
              Built initially by a remote team of 5 for about 2 weeks. Was called BETTER FRIENDS REMINDERS (
              <a href='https://friends-reminder.netlify.com/' target='_blank' rel='noopener noreferrer'>
                Link to old app page
              </a>
              )
            </p>
            <p>Was responsible for the back end portion. Was also the team lead. </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetMeNot;
