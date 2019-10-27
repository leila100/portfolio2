import React from "react";

const Navbar = () => {
  return (
    <nav class='navbar'>
      <div class='name'>Leila Berrouayel</div>
      <div class='links'>
        <div class='item'>Projects</div>
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
  );
};

export default Navbar;
