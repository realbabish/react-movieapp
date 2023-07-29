import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='footer' id="footer">
       <div className='footer__footer-text'><h1>Let's Connect!</h1></div>
       <div className='footer__footer-text-s'><h1>Let's Connect!</h1></div>
      <div className='footer__social-icons'>
      <a href="https://www.facebook.com/realbabish/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://github.com/realbabish" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/babishman/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      
      </div>
      <div className='footer__social-icons-s'>
     
      <a href="https://www.facebook.com/realbabish/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://github.com/realbabish" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/babishman/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      </div>
  )
}

export default Footer