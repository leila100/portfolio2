import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import FMN_header from "../../assets/images/FMN_header.jpg";
import fmn_message from "../../assets/images/FMN_message.png";
import fmn_message1 from "../../assets/images/FMN_message1.png";
import fmn_messages from "../../assets/images/FMN_messages.png";
import fmn_messages1 from "../../assets/images/FMN_messages1.png";
import fmn_message2 from "../../assets/images/FMN_message2.png";
import fmn_message3 from "../../assets/images/FMN_message3.png";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const ForgetMeNot = () => {
  return (
    <>
      <header id='home'>
        <div className='header'>
          <img src={FMN_header} alt='forgetMeNot flower' className='header_img' />
          <div className='job_title' data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Never forget a special day!
          </div>
          <div
            className='header_body'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='3000'
          >
            <div>
              <div className='name'>FORGET ME NOT</div>
              <div className='links'>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <a href='https://forgetmenot.netlify.com/' target='_blank' rel='noopener noreferrer'>
                    LINK
                  </a>
                </div>
                <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                  <a href='https://github.com/leila100/forgetMeNot' target='_blank' rel='noopener noreferrer'>
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
            <span>||</span> React<span>||</span> ReactHooks<span>||</span>
          </div>
          <div data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Redux<span>||</span> Node<span>||</span>
          </div>
          <div data-aos='flip-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3<span>||</span> Sendgrid<span>||</span> FullCalendar
          </div>
          <div data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span> StyledComponents<span>||</span> MaterialUI<span>||</span>
          </div>
        </h2>
        <div className='descriptions'>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Overview</h3>
            <p>
              Forget Me Not is an application that sends thoughtful messages, on your behalf, to people you know on
              their special day.
            </p>
            <p>Added some technology (Redux for example), and refactored the code to create Forget Me Not.</p>
          </div>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
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
          <h3>Schedule an email to be sent on a specific day and time</h3>
          <p>
            Select a day, and time for your email to be sent. Write a thoughtful message text, select a category for
            your message (family, friend, work, or other), choose the appropriate date and time, and hit the schedule
            button. The message will be automatically sent on that day and time and you will have made someone happy on
            their special day.
          </p>
          <div className='imgs'>
            <a href={fmn_message} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_message}
                alt='Forget Me Not message page'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={fmn_message1} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_message1}
                alt='Forget Me Not message page'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Access all scheduled messages</h3>
          <p>See all your messages. Filter by sent messages, and also by the different categories.</p>
          <div className='imgs'>
            <a href={fmn_messages} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_messages}
                alt='Forget Me Not message page'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={fmn_messages1} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_messages1}
                alt='Forget Me Not message page'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Update/Delete a scheduled message</h3>
          <p>
            Selecting an existing (not yet sent) message, you can edit it. You can also delete it by selecting the
            trashcan icon.
          </p>
          <div className='imgs'>
            <a href={fmn_message2} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_message2}
                alt='Forget Me Not message page'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={fmn_message3} target='_blank' rel='noopener noreferrer'>
              <img
                src={fmn_message3}
                alt='Forget Me Not message page'
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
              Being the team lead for this project, I had a hard time keeping the communication going between the two
              front-end developers. They had difficulties finding time for each other, to divide work, and talk about
              the many functionalities the application needed to have.
            </p>
          </div>
          <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Division of work</h3>
            <p>
              Being the only back-end developer, my work was well defined from the beginning, this is why I chose to act
              as the team lead.
            </p>
            <p>
              The team had two UI developers, responsible for creating the landing page. The team had also two front-end
              developers, responsible for the user facing part of the application.
            </p>
          </div>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Taking new responsibilities</h3>
            <p>
              Being the only back-end developer meant that I was responsible for all the data formating and
              availability. It was a lot of stress but also a good challenge.
            </p>
            <p>
              Since I was the team lead, I had to keep the team talking and schedule multiple meetings to guide the
              team, and gather all that was still needed to be done, making sure to finish the project on time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgetMeNot;
