import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LINKS from './NavbarData';
import './NavbarStyles.css';

const Navbar = () => {
  const [isActive, setActive] = useState('false');
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        Note <i className="fa fa-sticky-note"></i>
      </h1>
      <div className="menu-icons">
        <i
          className={isActive ? 'fas fa-times' : 'fas fa-bars'}
          onClick={toggleClass}
        ></i>
      </div>
      <ul
        className={isActive ? 'nav-menu active' : 'nav-menu'}
        onclick={toggleClass}
      >
        {LINKS.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} className={link.cName}>
              <i className={link.icon}></i>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
