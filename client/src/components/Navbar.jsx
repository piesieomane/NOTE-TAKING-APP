import React from 'react';
import { NavLink } from 'react-router-dom';
import LINKS from './NavbarData';
import './NavbarStyles.css';

const Navbar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="logo">
        Note <i className="fa fa-sticky-note"></i>
      </h1>
      <ul className="nav-menu">
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
