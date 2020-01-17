import React from "react";

const About = () => {
  return (
    <section className='about'>
      <h2>
        <div>
          <span>||</span>Web Developer<span>||</span>
        </div>
        <div>React, Node, JavaScript, Python, CSS</div>
        <div>
          <span>||</span>Agile Enthusiast<span>||</span>
        </div>
      </h2>
      <div className='descriptions'>
        <div className='desc'>
          <h3>Web Developer</h3>
          <p>
            Joined Lambda School, an 18+ months Computer Science & Software Engineering online Academy that provides an
            immersive hands-on curriculum with a focus on computer science, software engineering, and web development.
          </p>
        </div>
        <div className='desc'>
          <h3>Skills</h3>
          <p>
            Wrote production-ready code using ReactJS, Redux, and CSS on the front-end and NodeJS and Express, or Python
            on the back-end to build single page applications.
          </p>
        </div>
        <div className='desc'>
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
