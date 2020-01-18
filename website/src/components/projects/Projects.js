import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Hello from "../../assets/images/helloMelon_home.png";
import FMN_home from "../../assets/images/FMN_home.png";
import mud from "../../assets/images/lambdamud.png";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const Projects = () => {
  return (
    <section className='projects'>
      <div id='proj'>{"  "}</div>
      <h2>
        <span>||</span>PROJECTS<span>||</span>
      </h2>
      <div className='links projs'>
        <div className='link'>
          <Link activeClass='activeProj' to='helloMelon' spy={true} smooth={true} offset={-70} duration={500}>
            Hello Melon
          </Link>
        </div>
        <div className='link'>
          <Link activeClass='activeProj' to='fmn' spy={true} smooth={true} offset={-70} duration={500}>
            Forget Me Not
          </Link>
        </div>
        <div className='link'>
          <Link activeClass='activeProj' to='mud' spy={true} smooth={true} offset={500} duration={500}>
            Lambda MUD
          </Link>
        </div>
      </div>
      <div className='proj-list'>
        <div id='helloMelon'>{"  "}</div>
        <div className='proj'>
          <div className='title'>
            <h2>Hello Melon</h2>
            <button className='top' onClick={scrollToTop}>
              Top
            </button>
          </div>
          <div className='description'>
            <p>
              A nutrition tracking application that provides a visualization of eating patterns and nutritional data to
              empower people to take control of their health.
            </p>
          </div>
          <div className='details'>
            <div className='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>GraphQL<span>||</span>Sqlite3<span>||</span>Strip<span>||</span>
              </div>
            </div>
            <img src={Hello} alt='Hello Melon App' />
            <div className='links'>
              <div className='link'>
                <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div className='link'>
                <a
                  href='https://www.youtube.com/watch?v=yAJ2viGBuEo&feature=youtu.be'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  VIDEO
                </a>
              </div>
              <div className='link'>
                <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div className='link'>
                <a href='/hello-melon'>DETAILS</a>
              </div>
            </div>
          </div>
        </div>
        <div id='fmn'>{"  "}</div>
        <div className='proj'>
          <div className='title'>
            <h2>Forget Me Not</h2>
            <button className='top' onClick={scrollToTop}>
              Top
            </button>
          </div>
          <div className='description'>
            <p>
              Forget ME Not is an application that sends thoughtful messages, on your behalf, to people you know on
              their special day.
            </p>
          </div>
          <div className='details'>
            <div className='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>Redux<span>||</span>Node<span>||</span>Sqlite3<span>||</span>Sendgrid
                <span>||</span>
              </div>
            </div>
            <img src={FMN_home} alt='Forget Me Not App' />
            <div className='links'>
              <div className='link'>
                <a href='https://forgetmenot.netlify.com' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div className='link'>
                <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div className='link'>
                <a href='/fmn'>DETAILS</a>
              </div>
            </div>
          </div>
        </div>
        <div id='mud'>{"  "}</div>
        <div className='proj'>
          <div className='title'>
            <h2>Lambda MUD</h2>
            <button className='top' onClick={scrollToTop}>
              Top
            </button>
          </div>
          <div className='description'>
            <p>
              A multiplayer real-time world combining maze traversing, and online chat. Players select their avatar, and
              then find their way to the door. Players can also interact with each other by using a chatroom.
            </p>
          </div>
          <div className='details'>
            <div className='skills'>
              <h4>Tech</h4>
              <div>
                <span>||</span>React<span>||</span>Django<span>||</span>Sqlite3<span>||</span>Pusher<span>||</span>
              </div>
            </div>
            <img src={mud} alt='Lambda MUD App' />
            <div className='links'>
              <div className='link'>
                <a href='https://lambda-mud7.netlify.com/' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div className='link'>
                <a href='https://github.com/LambdaMUD' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div className='link'>
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
