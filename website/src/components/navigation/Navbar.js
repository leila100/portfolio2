import React from "react";

import resume from "../../assets/images/Resume - Leila berrouayel.pdf";

const Navbar = () => {
  return (
    <div className='fixed'>
      <nav className='navbar'>
        <div className='name'>
          <a href='/#home'>Leila Berrouayel</a>
        </div>
        <div className='links'>
          <div className='item'>
            <a href='/#proj'>Projects</a>
          </div>
          <div className='item'>
            <a href={resume} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </div>
          <div className='icons'>
            <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer' aria-label='Email'>
              <i className='far fa-envelope' />
            </a>
            <a
              href='https://www.linkedin.com/in/leila-berrouayel/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer' aria-label='Github'>
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
