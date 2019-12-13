import React from "react";

import Hello from "../../assets/images/helloMelon_home.png";
import FMN_home from "../../assets/images/FMN_home.png";
import mud from "../../assets/images/lambdamud.png";

const Projects = () => {
  return (
    <section class='projects'>
      <div id='proj'>{"  "}</div>
      <h2>
        <span>||</span>PROJECTS<span>||</span>
      </h2>
      {/* <h2>
        <div>
          <span>||</span><a href="#helloMelon">Hello Melon</a><span>||</span>
        </div>
        <div><a href="#fmn">Forget Me Not</a></div>
        <div>
          <span>||</span><a href="#mud">Lambda MUD</a><span>||</span>
        </div>
      </h2> */}
      <div class='links projs'>
        <div class='link'>
          <a href='#helloMelon'>Hello Melon</a>
        </div>
        <div class='link'>
          <a href='#fmn'>Forget Me Not</a>
        </div>
        <div class='link'>
          <a href='#mud'>Lambda MUD</a>
        </div>
      </div>
      <div class='proj-list'>
        <div id='helloMelon'>{"  "}</div>
        <div class='proj'>
          <h3 class='title'>Hello Melon</h3>
          <div class='description'>
            <p>
              A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
              empower people to take control of their health.
            </p>
          </div>
          <div class='details'>
            <div class='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>GraphQL<span>||</span>Sqlite3<span>||</span>Strip<span>||</span>
              </div>
            </div>
            <img src={Hello} alt='Hello Melon App' />
            <div class='links'>
              <div class='link'>
                <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div class='link'>
                <a
                  href='https://www.youtube.com/watch?v=yAJ2viGBuEo&feature=youtu.be'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  VIDEO
                </a>
              </div>
              <div class='link'>
                <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div class='link'>
                <a href='/hello-melon'>DETAILS</a>
              </div>
            </div>
          </div>
        </div>
        <div id='fmn'>{"  "}</div>
        <div class='proj'>
          <h3 class='title'>Forget Me Not</h3>
          <div class='description'>
            <p>
              Forget ME Not is an application that sends thoughtful messages, on your behalf, to people you know on
              their special day.
            </p>
          </div>
          <div class='details'>
            <div class='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>Redux<span>||</span>Node<span>||</span>Sqlite3<span>||</span>Sendgrid
                <span>||</span>
              </div>
            </div>
            <img src={FMN_home} alt='Forget Me Not App' />
            <div class='links'>
              <div class='link'>
                <a href='https://forgetmenot.netlify.com' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div class='link'>
                <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div class='link'>
                <a href='/fmn'>DETAILS</a>
              </div>
            </div>
          </div>
        </div>
        <div id='mud'>{"  "}</div>
        <div class='proj'>
          <h3 class='title'>Lambda MUD</h3>
          <div class='description'>
            <p>
              A multiplayer real-time world combining maze traversing, and online chat. Players select their avatar, and
              then find their way to the door. Players can also interact with each other by using a chatroom.
            </p>
          </div>
          <div class='details'>
            <div class='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>Django<span>||</span>Sqlite3<span>||</span>Pusher<span>||</span>
              </div>
            </div>
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
                <a href='/mud'>DETAILS</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
