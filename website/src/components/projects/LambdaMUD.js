import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import mud_header from "../../assets/images/MUD_header.jpg";
import mud from "../../assets/images/maze_avatar.png";
import maze from "../../assets/images/maze.png";
import directions from "../../assets/images/directions.png";
import avatars from "../../assets/images/avatars.png";
import chat1 from "../../assets/images/chat1.png";
import chat2 from "../../assets/images/chat2.png";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const LambdaMUD = () => {
  return (
    <>
      <header id='home'>
        <div className='header'>
          <img src={mud_header} alt='Maze' className='header_img' />
          <div className='message' data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Find your way!
          </div>
          <div
            className='header_body'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='3000'
          >
            <div>
              <div className='name'>LAMBDA MUD</div>
              <div className='links'>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
                    LINK
                  </a>
                </div>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
                    CODE
                  </a>
                </div>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <Link activeClass='activeProj' to='features' spy={true} smooth={true} offset={-100} duration={500}>
                    Features
                  </Link>
                </div>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <Link activeClass='activeProj' to='challenges' spy={true} smooth={true} offset={-70} duration={500}>
                    Challenges
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className='about'>
        <h2>
          <div data-aos='flip-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span> React<span>||</span> Django<span>||</span>
          </div>
          <div data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3<span>||</span> Pusher
          </div>
          <div data-aos='flip-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span> StyledComponents<span>||</span> SASS<span>||</span>
          </div>
        </h2>
        <div className='descriptions'>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
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
          <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Team</h3>
            <p>Built from scratch in less than two weeks along with four other developers in an Agile environment.</p>
          </div>
        </div>
      </section>
      <section className='features' id='features'>
        <div className='title'>
          <h2 data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span>FEATURES<span>||</span>
          </h2>
          <button
            className='top'
            onClick={scrollToTop}
            data-aos='zoom-in'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1500'
          >
            Top
          </button>
        </div>
        <div className='feature'>
          <h3>Maze</h3>
          <p>
            A maze is created allowing the user to have fun solving it by choosing a route to the exit door. To move,
            the user can either use the arrows provided or use the W A S D keys on the keyboard.
          </p>
          <div className='imgs'>
            <a href={maze} target='_blank' rel='noopener noreferrer'>
              <img
                src={maze}
                alt='Maze'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={directions} target='_blank' rel='noopener noreferrer'>
              <img
                src={directions}
                alt='directions to control avatar'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Choose your avatar</h3>
          <p>A collection of user characters are available. Select the one you prefer or try them all.</p>
          <div className='imgs'>
            <a href={avatars} target='_blank' rel='noopener noreferrer'>
              <img
                src={avatars}
                alt='Avatars'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={mud} target='_blank' rel='noopener noreferrer'>
              <img
                src={mud}
                alt='maze'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Chat with other players</h3>
          <p>Have a conversation with other players using the chatroom provided.</p>
          <div className='imgs'>
            <a href={chat1} target='_blank' rel='noopener noreferrer'>
              <img
                src={chat1}
                alt='Chat room'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={chat2} target='_blank' rel='noopener noreferrer'>
              <img
                src={chat2}
                alt='Chat room'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
      </section>
      <section className='about' id='challenges'>
        <div className='title'>
          <h2 data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span>CHALLENGES<span>||</span>
          </h2>
          <button
            className='top'
            onClick={scrollToTop}
            data-aos='zoom-in'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='1500'
          >
            Top
          </button>{" "}
        </div>
        <div className='descriptions'>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Communication</h3>
            <p>
              Effective communication is the most important part of teamwork and involves consistently updating each
              person and never assuming that everyone has the same information.{" "}
            </p>
            <p>
              The team had communication problems that got resolved after feedback from team leads in Lambda School.
            </p>
          </div>
          <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Learning new Technology</h3>
            <p>
              Learning a new technology in a limited time is challenging, but we were required to use Django and Pusher.
            </p>
            <p>- Learned Django in about two days and built the BE required functionality from scratch. </p>
            <p>
              - Implemented Pusher, on the last day of the project, to add chatting capabilities to the application.
            </p>
          </div>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Division of work</h3>
            <p>Used a Trello board to divide and communicate the feature currently being built.</p>
            <p>Was responsible for coding the whole backend server.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LambdaMUD;
