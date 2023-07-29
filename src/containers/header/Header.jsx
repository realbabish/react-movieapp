import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let's leverage the power of computer vision and machine learning to develop innovative solutions.</h1>
      <p>I am a Full Stack Developer with 4 years of experience in Java, Python, C#, and Full Stack Web and Mobile Application Development. I specialize in React, MongoDB, MySQL, and Spring Boot, and am passionate about creating clean, user-centric solutions to complex problems. I am dedicated to ongoing learning and collaboration, and look forward to working with you!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
