import React from "react";

import mud from "../../assets/images/maze_avatar.png";
import maze from "../../assets/images/maze.png";
import directions from "../../assets/images/directions.png";
import avatars from "../../assets/images/avatars.png";
import chat1 from "../../assets/images/chat1.png";
import chat2 from "../../assets/images/chat2.png";

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
      <section class='features'>
        <h2>
          <span>||</span>FEATURES<span>||</span>
        </h2>
        <div class='feature'>
          <h3>Maze</h3>
          <p>
            A maze is created allowing the user to have fun solving it by choosing a route to the exit door. To move,
            the user can either use the arrows provided or use the W A S D keys on the keyboard.
          </p>
          <div class='imgs'>
            <a href={maze} target='_blank' rel='noopener noreferrer'>
              <img src={maze} alt='Maze' />
            </a>
            <a href={directions} target='_blank' rel='noopener noreferrer'>
              <img src={directions} alt='directions to control avatar' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Choose your avatar</h3>
          <p>A collection of user characters are available. Select the one you prefer or try them all.</p>
          <div class='imgs'>
            <a href={avatars} target='_blank' rel='noopener noreferrer'>
              <img src={avatars} alt='Avatars' />
            </a>
            <a href={mud} target='_blank' rel='noopener noreferrer'>
              <img src={mud} alt='maze' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Chat with other players</h3>
          <p>Have a conversation with other players using the chatroom provided.</p>
          <div class='imgs'>
            <a href={chat1} target='_blank' rel='noopener noreferrer'>
              <img src={chat1} alt='Chat room' />
            </a>
            <a href={chat2} target='_blank' rel='noopener noreferrer'>
              <img src={chat2} alt='Chat room' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LambdaMUD;