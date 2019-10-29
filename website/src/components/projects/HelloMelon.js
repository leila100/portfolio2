import React from "react";

import helloMelon from "../../assets/images/helloMelon.png";
import HMdashboard1 from "../../assets/images/helloMelon_Dashboard.png";
import HMdashboard2 from "../../assets/images/helloMelon_Dashboard2.png";
import HMreport1 from "../../assets/images/helloMelon_reports.png";
import HMreport2 from "../../assets/images/helloMelon_reports2.png";
import HMcoach1 from "../../assets/images/helloMelon_coach.png";
import HMcoach2 from "../../assets/images/helloMelon_coach2.png";

const HelloMelon = () => {
  return (
    <>
      <header id='home'>
        <div class='header_container'>
          <div class='header-frame'>
            <div class='header-content'>
              <img src={helloMelon} alt='Icons for Javascript - React - Node' id='HMimg' />
              <div class='intro' id='HMintro'>
                <div class='name'>HELLO MELON</div>
                <div class='job'>Take control of your health</div>
                <div class='links'>
                  <div class='link'>
                    <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                      LINK
                    </a>
                  </div>
                  <div class='link'>
                    <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
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
            <span>||</span> React<span>||</span> GraphQL<span>||</span>
          </div>
          <div>
            sqlite3<span>||</span> Strip<span>||</span> chat.js<span>||</span> Full Calendar
          </div>
          <div>
            <span>||</span> Styled Components<span>||</span> MaterialUI<span>||</span>
          </div>
        </h2>
        <div class='descriptions'>
          <div class='desc'>
            <h3>Overview</h3>
            <p>
              Hello Melon is a nutrition tracking application that provides a visualization of eating patterns and
              nutritional data to empower people to take control of their health.
            </p>
          </div>
          <div class='desc'>
            <h3>Team</h3>
            <p>Built by a remote team of 5, managed and guided by a Team Lead for about 10 weeks.</p>
            <p>
              Focused on making a simple, user friendly application with an intuitive user experience, that people would
              want to use everyday.
            </p>
          </div>
        </div>
      </section>
      <section class='features'>
        <h2>FEATURES</h2>
        <div class='feature'>
          <h3>Keep track of daily food intake and exercises (workouts)</h3>
          <p>
            Save your food choices using the search of an integrated food database (connected to a food database API) or
            create your own entry. You can even choose foods from popular brands and restaurants. Enter also your daily
            workout.
          </p>
          <div class='imgs'>
            <a href={HMdashboard1} target='_blank' rel='noopener noreferrer'>
              <img src={HMdashboard1} alt='Hello Melon Dashboard' />
            </a>
            <a href={HMdashboard2} target='_blank' rel='noopener noreferrer'>
              <img src={HMdashboard2} alt='Hello Melon Dashboard' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Access custom reports</h3>
          <p>
            See your progress with our customer reports. Whether your goal is to keep track of your nutrients or just a
            calory count, we have it all for you. You can also download a pdf report to share.
          </p>
          <div class='imgs'>
            <a href={HMreport1} target='_blank' rel='noopener noreferrer'>
              <img src={HMreport1} alt='Hello Melon Reports' />
            </a>
            <a href={HMreport2} target='_blank' rel='noopener noreferrer'>
              <img src={HMreport2} alt='Hello Melon Reports' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Get a coach to follow you</h3>
          <p>
            Whether you want a friend or your personal trainer to see your progress or keep you accountable, our coach
            feature allows you to communicate your progress easily.
          </p>
          <div class='imgs'>
            <a href={HMcoach1} target='_blank' rel='noopener noreferrer'>
              <img src={HMcoach1} alt='Hello Melon Coach' />
            </a>
            <a href={HMcoach2} target='_blank' rel='noopener noreferrer'>
              <img src={HMcoach2} alt='Hello Melon Coach' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelloMelon;
