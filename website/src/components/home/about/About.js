import React from "react";

const About = () => {
  return (
    <section className='about'>
      <div className='descriptions'>
        <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
          <h3>Web Developer</h3>
          <p>
            Joined Lambda School, an 18+ months Computer Science & Software Engineering online Academy that provides an
            immersive hands-on curriculum with a focus on computer science, software engineering, and web development.
          </p>
        </div>
        <div className='desc' data-aos='fade-left' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
          <h3>Skills</h3>
          <p>
            Wrote production-ready code using ReactJS, Redux, and CSS on the front-end and NodeJS and Express, or Python
            on the back-end to build single page applications.
          </p>
        </div>
        <div className='desc' data-aos='fade-right' data-aos-easing='ease-out-cubic' data-aos-duration='1500'>
          <h3>Agile Methodology</h3>
          <p>
            Lambda School courses utilize the Agile methodology. They are all divided into sprints, with stand-ups
            meetings and a sprint challenge at the end of each sprint.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
