import React from 'react';
import './section3.css';

export default function Section3() {
  return (
    <div id="section3" className="section section3-container">
        <div className='skill-title'>
          <h2>02</h2>
          <h4>SKILL</h4>
        </div>
        <div className='skill-img-container'>
          <div className='skill-img01'>
            <div className='skill-img-title'>
              <p>Front End</p>
            </div>
            <div className='skill-img01-img'>
              <img src='./image/html.png' alt='hmtl' />
              <img src='./image/sass.png' alt='sass' />
              <img src='./image/react.png' alt='react' />
              <img src='./image/redux.png' alt='redux' />
              <img src='./image/ts.png' alt='ts' />
              <img src='./image/vue.png' alt='vue' />
            </div>
          </div>
          <div className='skill-img02_img03-container'>
            <div className='skill-img02'>
              <div className='skill-img-title'>
                <p>Back End</p>
              </div>
              <div className='skill-img02-img'>
                <img src='./image/node.png' alt='node' />
                <img src='./image/firebase.png' alt='firebase' />
                <img src='./image/java.png' alt='java' />
              </div>
            </div>
            <div className='skill-img03'>
              <div className='skill-img-title'>
                <p>Version Control</p>
              </div>
              <div className='skill-img03-img'>
                <img src='./image/git.png' alt='git' />
                <img src='./image/github.png' alt='github' />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
