import React, { useEffect, useRef } from 'react';
import './section2.css';

// 아이콘 임포트
import { FaUser } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdCake } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function Section2() {
  const infoListRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const infoList = infoListRef.current;
      if (infoList) {
        const rect = infoList.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          infoList.classList.add('slide-in');
        } else {
          infoList.classList.remove('slide-in');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="section2" className="section section2-container">
      <div className='about-me-title'>
        <h2>01</h2>
        <h4>ABOUT ME</h4>
      </div>
      <div className='about-me-content'>
        <div className='about-me_info'>
          <div ref={infoListRef} className='about-me_list'>
            <ul className='info-list'>
              <li>
                <FaUser />
                <div className='info-detail'>
                  <p>이름</p>
                  <p>민덕기</p>
                </div>
              </li>
              <li>
                <MdCake />
                <div className='info-detail'>
                  <p>나이</p>
                  <p>1997.09.23</p>
                </div>
              </li>
              <li>
                <IoCall />
                <div className='info-detail'>
                  <p>연락처</p>
                  <p>010-8948-9709</p>
                </div>
              </li>
            </ul>
            <ul className='info-list'>
              <li>
                <FaSchoolFlag />
                <div className='info-detail'>
                  <p>최종학력</p>
                  <p>한신대학교 (컴퓨터공학부)</p>
                </div>
              </li>
              <li>
                <IoMdMail />
                <div className='info-detail'>
                  <p>E-MAIL</p>
                  <p>alsejrrl9723@naver.com</p>
                </div>
              </li>
              <li>
                <FaGithub />
                <div className='info-detail'>
                  <p>깃 허브</p>
                  <a href='https://github.com/deokgeneral' target='blank'>https://github.com/deokgeneral</a>
                </div>
              </li>
            </ul>
          </div>
          <div className='about-me_info2'>
            <p><FaStar />어렸을적부터 건설현장에서 아르바이트를하며 자라온 저는</p>
            <p>힘들어도 <span>포기하지않는 근성</span> 으로 끝까지 발전하는 인재가 되겠습니다.</p>
          </div>
        </div>
        <div className='about-me_img'>
          <img src='./image/my.jpg' alt='나의이미지' />
        </div>
      </div>
    </div>
  );
}
