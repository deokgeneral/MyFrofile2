import React from 'react';
import './section1.css';
import { FaLongArrowAltDown } from "react-icons/fa";
import { Link } from 'react-scroll';

export default function Section1() {
  return (
    <div id='section1' className='section section1-container'>
      <div className='section1-title'>
        <p>주니어 프론트엔드 개발자</p>
        <p><span>민덕기</span>입니다.</p>
        <div className='section1-info'>
          <p>유저의 니즈를 파악하며</p>
          <p>지치지않고 성장하는 개발자가 되겠습니다</p>
        </div>
      </div>
      <Link to="section2" smooth={true} duration={500} className='section1-button'>
        <p>알아보기</p>
      </Link>
    </div>
  );
}
