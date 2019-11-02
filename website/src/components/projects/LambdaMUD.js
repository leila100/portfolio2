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
      <section class='about'>
        <h2>
          <div>
            <span>||</span> React<span>||</span> Django<span>||</span>
          </div>
          <div>
            sqlite3<span>||</span> Pusher
          </div>
          <div>
            <span>||</span> StyledComponents<span>||</span> SASS<span>||</span>
          </div>
        </h2>
        <div class='descriptions'>
          <div class='desc'>
            <h3>Overview</h3>
            <p>
              Lambda MUD is a multiplayer real-time world combining maze traversing, and online chat. Players select
              their avatar, and then find their way to the door. Players can also interact with each other by using a
              chatroom.
            </p>
            <p>
              We designed, coded, and delivered a production level web application for people wanting to have fun
              solving a maze.
            </p>
            <p>We focused on making a simple, user friendly application with an intuitive, and fun user experience.</p>
          </div>
          <div class='desc'>
            <h3>Team</h3>
            <p>Built from scratch in less than two weeks along with four other developers in an Agile environment.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LambdaMUD;
