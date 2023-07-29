import React, {useState } from 'react';
import './aboutme.css';
import Typewriter from "typewriter-effect";
import babishPhoto from '../../assets/me-img.png'

const Aboutme = () => {
  const [state] = useState({
    title: "Hey I am",
    titleTwo: "Babish Man Shrestha",
  });
  return (
    <div className="Aboutme_main" id="about_me">
    <div className="Aboutme__Content section__padding">
      <div className="Aboutme__TextContent">
      <p1>
        <div className="title">{state.title}</div>
        <div className="titleTwo">{state.titleTwo}</div>
      </p1>
     <div className="Aboutme__Animated-content">
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 60,
        strings:[
          "a software develope.",
          "a Guitarist!",
          "a relentless learner.",
          "!!!! THE ONE YOU'RE LOOKING FOR !!!!"
        ]
      }
      } />
      </div>
      </div>
      <div className="Aboutme__img">
        <img src={babishPhoto} alt="Babish.png"/>
      </div>
     </div >
     <div className='Aboutme__aboutme'>
     My interests lie in the fields of AI, full stack development, and application development, as I find myself captivated by the endless possibilities that technology has to offer. I have honed my skills in programming languages, software design principles, and data structures, and I am eager to apply my knowledge to tackle complex challenges and develop innovative solutions. I am constantly seeking to learn and grow, and I am committed to staying up-to-date with emerging trends in the industry. With my determination, creativity, and problem-solving skills, I am confident that I can make a positive impact in the field of technology and contribute to the development of cutting-edge solutions that will shape the future.
      </div>
     </div>
  
  )
}

export default Aboutme