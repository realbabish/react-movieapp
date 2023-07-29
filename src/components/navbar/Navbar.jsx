import React, { useState } from 'react';
import {Link} from 'react-scroll';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';


const Menu = () => (
  <>
    <p><a href="/">Home</a></p>
    <p><Link activeClass="active" to="about_me" spy={true} smooth={true} offset={50} duration={500}>About me</Link></p>
    <p><a href="/Temp">Projects</a></p>
    <p><Link activeClass="active" to="contact_me" spy={true} smooth={true} offset={-400} duration={500}>Contact</Link></p>
  </>
)



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1>Babish Man Shrestha</h1>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p> <Link activeClass="active" to="footer" spy={true} smooth={true} offset={50} duration={500} >Let's connect!</Link></p>
        <button type="button"><a href="https://resume.com">Hire me</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu />
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button"><a>Hire me.</a></button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
