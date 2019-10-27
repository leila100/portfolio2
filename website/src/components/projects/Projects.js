import React from "react";

import Hello from "../../assets/images/helloMelon_home.png";
import FMN_home from "../../assets/images/FMN_home.png";
import mud from "../../assets/images/lambdamud.png";

const Projects = () => {
  return (
    <section class='projects' id='proj'>
      <h2>
        <span>||</span>PROJECTS<span>||</span>
      </h2>
      <div class='proj-list'>
        <div class='proj'>
          <h3 class='title'>Hello Melon</h3>
          <div class='description'>
            <p>
              A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
              empower people to take control of their health.
            </p>
          </div>
          <div class='details'>
            <img src={Hello} alt='Hello Melon App' />
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
              <div class='link'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  DETAILS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='proj'>
          <h3 class='title'>Forget Me Not</h3>
          <div class='description'>
            <p>
              Forget ME Not is an application that sends thoughtful messages, on your behalf, to people you know on
              their special day.
            </p>
          </div>
          <div class='details'>
            <img src={FMN_home} alt='Forget Me Not App' />
            <div class='links'>
              <div class='link'>
                <a href='https://forgetmenot.netlify.com/login' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div class='link'>
                <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div class='link'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  DETAILS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class='proj'>
          <h3 class='title'>Lambda MUD</h3>
          <div class='description'>
            <p>
              A multiplayer real-time world combining maze traversing, and online chat. Players select their avatar, and
              then find their way to the door. Players can also interact with each other by using a chatroom.
            </p>
          </div>
          <div class='details'>
            <img src={mud} alt='Lambda MUD App' />
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
              <div class='link'>
                <a href='#' target='_blank' rel='noopener noreferrer'>
                  DETAILS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
