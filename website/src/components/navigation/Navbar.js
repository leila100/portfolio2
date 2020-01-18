import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import resume from "../../assets/images/Resume - Leila berrouayel.pdf";

const Navbar = () => {
  let iconsRef = useRef(null);
  let emailRef = useRef(null);
  let linkedInRef = useRef(null);
  let githubRef = useRef(null);
  let navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef, { duration: 1.5, ease: "power2.out", y: -100 });
    gsap.from(iconsRef, { duration: 2, ease: "power2.out", x: 300 });
  }, []);

  const mouseEnterAnimation = ref => gsap.to(ref, { duration: 1, scale: 1.5, ease: "power2.out" });
  const mouseLeaveAnimation = ref => gsap.to(ref, { duration: 1, scale: 1, ease: "power2.out" });

  return (
    <div className='fixed' ref={element => (navRef = element)}>
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
          <div className='icons' ref={element => (iconsRef = element)}>
            <a href='mailto:nb.leila10@gmail.com' target='_blank' rel='noopener noreferrer' aria-label='Email'>
              <i
                className='far fa-envelope'
                ref={element => (emailRef = element)}
                onMouseEnter={() => mouseEnterAnimation(emailRef)}
                onMouseLeave={() => mouseLeaveAnimation(emailRef)}
              />
            </a>
            <a
              href='https://www.linkedin.com/in/leila-berrouayel/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
              ref={element => (linkedInRef = element)}
              onMouseEnter={() => mouseEnterAnimation(linkedInRef)}
              onMouseLeave={() => mouseLeaveAnimation(linkedInRef)}
            >
              <i className='fab fa-linkedin' />
            </a>
            <a href='https://github.com/leila100' target='_blank' rel='noopener noreferrer' aria-label='Github'>
              <i
                className='fab fa-github'
                ref={element => (githubRef = element)}
                onMouseEnter={() => mouseEnterAnimation(githubRef)}
                onMouseLeave={() => mouseLeaveAnimation(githubRef)}
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
