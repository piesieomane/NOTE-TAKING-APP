import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LINKS from '../util/NavbarData';
import '../css/NavbarStyles.css';

const Navbar = () => {
  const [isActive, setActive] = useState('false');
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className="NavbarItems">
      <Link to="/notes" className="home-link">
        <h1 className="logo">
          Note <i className="fa fa-sticky-note"></i>
        </h1>
      </Link>
      <div className="menu-icons">
        <i
          className={isActive ? 'fas fa-times' : 'fas fa-bars'}
          onClick={toggleClass}
        ></i>
      </div>
      <ul
        className={isActive ? 'nav-menu active' : 'nav-menu'}
        onClick={toggleClass}
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
