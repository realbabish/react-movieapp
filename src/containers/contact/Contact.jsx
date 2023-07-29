import React from 'react'
import './contact.css';
import { FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';

function Contact() {
  const phoneNumber = '647-549-4528';
  const email = 'realbabish@gmail.com';
  const website = 'www.bdogg.xyz';

  return (
    <div className="contact__container">
        <div className="contact__container-text" >
          Contact me:
        </div>
        <div className="contact__container_links" id="contact_me"> 
        <FaPhone />
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <FaEnvelope />
        <a href={`mailto:${email}`}>{email}</a>
        <FaGlobe />
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
      </div>
      <div className="contact__container_links-m">
      <div className="contact__container-text-m">
          Contact me:
        </div>
      <FaPhone />
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        <FaEnvelope />
        <a href={`mailto:${email}`}>{email}</a>
        <FaGlobe />
        <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a>
      </div>
    </div>
  );
}

export default Contact