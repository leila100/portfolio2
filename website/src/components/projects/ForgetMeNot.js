import React from "react";

import FMN_header from "../../assets/images/FMN_header.jpg";
import fmn_message from "../../assets/images/FMN_message.png";
import fmn_message1 from "../../assets/images/FMN_message1.png";
import fmn_messages from "../../assets/images/FMN_messages.png";
import fmn_messages1 from "../../assets/images/FMN_messages1.png";
import fmn_message2 from "../../assets/images/FMN_message2.png";
import fmn_message3 from "../../assets/images/FMN_message3.png";

const ForgetMeNot = () => {
  return (
    <>
      <header id='home'>
        <div class='header'>
          <img src={FMN_header} alt='image of forgetMeNot' class='header_img' />
          <div class='job_title'>Never forget a special day!</div>
          <div class='header_body'>
            <div>
              <div class='name'>FORGET ME NOT</div>
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
      </header>
      {/* <header id='home'>
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
      </header> */}
      <section class='about'>
        <h2>
          <div>
            <span>||</span> React<span>||</span> ReactHooks<span>||</span>
          </div>
          <div>
            Redux<span>||</span> Node<span>||</span>
          </div>
          <div>
            sqlite3<span>||</span> Sendgrid<span>||</span> FullCalendar
          </div>
          <div>
            <span>||</span> StyledComponents<span>||</span> MaterialUI<span>||</span>
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
      <section class='features'>
        <h2>
          <span>||</span>FEATURES<span>||</span>
        </h2>
        <div class='feature'>
          <h3>Schedule an email to be sent on a specific day and time</h3>
          <p>
            Select a day, and time for your email to be sent. Write a thoughtful message text, select a category for
            your message (family, friend, work, or other), choose the appropriate date and time, and hit the schedule
            button. The message will be automatically sent on that day and time and you will have made someone happy on
            their special day.
          </p>
          <div class='imgs'>
            <a href={fmn_message} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_message} alt='Forget Me Not message page' />
            </a>
            <a href={fmn_message1} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_message1} alt='Forget Me Not message page' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Access all scheduled messages</h3>
          <p>See all your messages. Filter by sent messages, and also by the different categories.</p>
          <div class='imgs'>
            <a href={fmn_messages} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_messages} alt='Forget Me Not message page' />
            </a>
            <a href={fmn_messages1} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_messages1} alt='Forget Me Not message page' />
            </a>
          </div>
        </div>
        <div class='feature'>
          <h3>Update/Delete a scheduled message</h3>
          <p>
            Selecting an existing (not yet sent) message, you can edit it. You can also delete it by selecting the
            trashcan icon.
          </p>
          <div class='imgs'>
            <a href={fmn_message2} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_message2} alt='Forget Me Not message page' />
            </a>
            <a href={fmn_message3} target='_blank' rel='noopener noreferrer'>
              <img src={fmn_message3} alt='Forget Me Not message page' />
            </a>
          </div>
        </div>
      </section>
      <section class='about'>
        <h2>
          <span>||</span>CHALLENGES<span>||</span>
        </h2>
        <div class='descriptions'>
          <div class='desc'>
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
          <div class='desc'>
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
          <div class='desc'>
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
