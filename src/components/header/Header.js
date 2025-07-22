import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {

    // Here is toggle state
    const [toggle, setToggle] = useState(false);


  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Aman
        </a>

        <div className={toggle? "nav_menu show__menu" : 'nav_menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#service" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Service
              </a>
            </li> */}

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" onClick={()=>{setToggle(!toggle)}}></i>
        </div>
        <div className="nav__toggle" onClick={()=>{setToggle(!toggle)}}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
