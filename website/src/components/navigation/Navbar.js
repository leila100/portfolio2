import React from "react";

const Navbar = () => {
  return (
    <div class='fixed'>
      <nav class='navbar'>
        <div class='name'>
          <a href='#home'>Leila Berrouayel</a>
        </div>
        <div class='links'>
          <div class='item'>
            <a href='#proj'>Projects</a>
          </div>
          <div class='item'>Resume</div>
          <div class='icons'>
            <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer'>
              <i className='far fa-envelope' />
            </a>
            <a href='https://www.linkedin.com/in/leila-berrouayel/' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-linkedin' />
            </a>
            <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-github' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
