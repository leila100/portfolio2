import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import HMHeader from "../../assets/images/HMHeader.jpg";
import HMdashboard1 from "../../assets/images/helloMelon_Dashboard.png";
import HMdashboard2 from "../../assets/images/helloMelon_Dashboard2.png";
import HMreport1 from "../../assets/images/helloMelon_reports.png";
import HMreport2 from "../../assets/images/helloMelon_reports2.png";
import HMcoach1 from "../../assets/images/helloMelon_coach.png";
import HMcoach2 from "../../assets/images/helloMelon_coach2.png";

const scrollToTop = () => {
  scroll.scrollToTop();
};

const HelloMelon = () => {
  return (
    <>
      <header id='home'>
        <div className='header'>
          <img src={HMHeader} alt='food' className='header_img' />
          <div className='message' data-aos='fade-down' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            Take control of your health
          </div>
          <div
            className='header_body'
            data-aos='fade-zoom-in'
            data-aos-easing='ease-out-cubic'
            data-aos-duration='3000'
          >
            <div className='name'>HELLO MELON</div>
            <div className='links'>
              <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                <a href='https://hello-melon-lambda.netlify.com/' target='_blank' rel='noopener noreferrer'>
                  LINK
                </a>
              </div>
              <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                <a href='https://github.com/labspt3-nutrition-tracker' target='_blank' rel='noopener noreferrer'>
                  CODE
                </a>
              </div>
              <div className='link' data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
                <a
                  href='https://www.youtube.com/watch?v=yAJ2viGBuEo&feature=youtu.be'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  VIDEO
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
      </header>
      <section className='about'>
        <h2>
          <div data-aos='flip-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span> React<span>||</span> GraphQL<span>||</span>
          </div>
          <div data-aos='flip-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            sqlite3<span>||</span> Strip<span>||</span> chart.js<span>||</span> FullCalendar
          </div>
          <div data-aos='flip-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <span>||</span> StyledComponents<span>||</span> MaterialUI<span>||</span>
          </div>
        </h2>
        <div className='descriptions'>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Overview</h3>
            <p>
              Hello Melon is a nutrition tracking application that provides a visualization of eating patterns and
              nutritional data to empower people to take control of their health.
            </p>
          </div>
          <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Team</h3>
            <p>Built by a remote team of 5, managed and guided by a Team Lead for about 10 weeks.</p>
            <p>
              Focused on making a simple, user friendly application with an intuitive user experience, that people would
              want to use everyday.
            </p>
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
          <h3>Keep track of daily food intake and exercises (workouts)</h3>
          <p>
            Save your food choices using the search of an integrated food database (connected to a food database API) or
            create your own entry. You can even choose foods from popular brands and restaurants. Enter also your daily
            workout.
          </p>
          <div className='imgs'>
            <a href={HMdashboard1} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMdashboard1}
                alt='Hello Melon Dashboard'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={HMdashboard2} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMdashboard2}
                alt='Hello Melon Dashboard'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Access custom reports</h3>
          <p>
            See your progress with our customer reports. Whether your goal is to keep track of your nutrients or just a
            calory count, we have it all for you. You can also download a pdf report to share.
          </p>
          <div className='imgs'>
            <a href={HMreport1} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMreport1}
                alt='Hello Melon Reports'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={HMreport2} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMreport2}
                alt='Hello Melon Reports'
                data-aos='flip-left'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
          </div>
        </div>
        <div className='feature'>
          <h3>Get a coach to follow you</h3>
          <p>
            Whether you want a friend or your personal trainer to see your progress or keep you accountable, our coach
            feature allows you to communicate your progress easily.
          </p>
          <div className='imgs'>
            <a href={HMcoach1} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMcoach1}
                alt='Hello Melon Coach'
                data-aos='flip-right'
                data-aos-easing='ease-out-cubic'
                data-aos-duration='1500'
              />
            </a>
            <a href={HMcoach2} target='_blank' rel='noopener noreferrer'>
              <img
                src={HMcoach2}
                alt='Hello Melon Coach'
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
              This team communicated very well and were able to overcome obstacles, like loosing team members and
              learning new technology.
            </p>
          </div>
          <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Division of work</h3>
            <p>
              Teams that work well together understand the strengths and weaknesses of each team member. Because we have
              never worked together before, it was hard to divide the work. We used a Trello board, and We relied on
              volunteering.
            </p>
            <p>Thankfully, all team members were eager to take on the work even if the tasks were challenging.</p>
          </div>
          <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
            <h3>Learning new Technology</h3>
            <p>
              Learning a new technology in a limited time is challenging, but we knew we wanted to use a technology none
              of us ever used before.
            </p>
            <p>
              Once we've chosen the technology (Graphql), we made sure that everybody felt comfortable learning it,
              using it, and can handle any difficulties implementing it. We did that by communicating, pair codding, and
              fixing problems together.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelloMelon;
