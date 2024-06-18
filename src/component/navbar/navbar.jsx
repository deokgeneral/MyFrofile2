import React from 'react';
import './navbar.css';
import { GoPeople } from "react-icons/go";
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-title'>
        <p><GoPeople /> <span>W</span>ho is <span>D</span>eok's</p>
      </div>
      <ul className='navbar-menu'>
        <li>
          <Link to="section1" smooth={true} duration={500}>Section1</Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={500}>Section2</Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500}>Section3</Link>
        </li>
      </ul>
    </div>
  );
}
