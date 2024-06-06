import React, { useState } from 'react';
import "./header.scss";

import logo from "../../assets/images/Logo.svg";
import download from "../../assets/images/download.svg";
import instagram from "../../assets/images/instagram 1.svg";
import facebook from "../../assets/images/facebook 1.svg";
import email from "../../assets/images/email.svg";
import linkedin from "../../assets/images/linkdin.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id='navbar' className='navbar header'>
      <nav className="container nav">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
          <li className="nav__item"><a href="#" className="nav__link">About Me</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Skills</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Project</a></li>
          <li className="nav__item"><a href="#" className="nav__link">Contact me</a></li>
        </ul>
        <div className="btns">
          <div className="download">
            <a href="">Resume</a>
            <img src={download} alt="Download" />
          </div>
        </div>
        <div id="navbar-responsive" className={isOpen ? 'open' : ''}>
          <ul className="res__nav__list">
            <a className="nav__logo__link" href="#">
              <img src={logo} alt="Logo" />
            </a>
            <li className="res__nav__item"><a href="#building" className="res__nav__link">Home</a></li>
            <li className="res__nav__item"><a href="#services" className="res__nav__link">About Me</a></li>
            <li className="res__nav__item"><a href="#Услуги" className="res__nav__link">Skills</a></li>
            <li className="res__nav__item"><a href="#software" className="res__nav__link">Project</a></li>
            <li className="res__nav__item"><a href="#carusel" className="res__nav__link">Contact me</a></li>
            <div className="res-download">
              <a href="https://www.canva.com/design/DAGDikASBa4/aRTZiSWHzXZZpFJ0SZwiNg/edit">Resume</a>
              <img src={download} alt="Download" />
            </div>
            <div className="res-header-icons">
              <a href="https://www.instagram.com/ibrohim_shukurullayev/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/ibrokhimjonshukurullayev" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/ibrokhimshukurullayev/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="Email" />
              </a>
            </div>
          </ul>
          <button id="navbar-close" onClick={toggleNavbar}>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/></svg>
          </button>
        </div>
        <button id="navbar-open" onClick={toggleNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="24" width="24" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </button>
      </nav>
    </header>
  );
}

export default Header;
