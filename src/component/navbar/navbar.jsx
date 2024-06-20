import React, { useEffect, useState } from 'react';
import './navbar.css';
import { GoPeople } from "react-icons/go";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 320) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-title'>
        <p><GoPeople /> <span>W</span>ho is <span>D</span>eok's</p>
      </div>
      <ul className='navbar-menu'>
        <li>
          <Link to="section1" smooth={true} duration={500}>MAIN</Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500}>ABOUT ME</Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>SKILL</Link>
        </li>
      </ul>
    </div>
  );
}
