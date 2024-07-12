import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css';
import logo from '../assets/images/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="My Logo" style={{ filter: 'brightness(1.5)' }} />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" style={{ fontSize: '1.5rem' }}>Home</Link>
        </li>
        <li>
          <Link to="/Events" style={{ fontSize: '1.5rem' }}>Events</Link>
        </li>
        <li>
          <Link to="/Menu" style={{ fontSize: '1.5rem' }}>Menu</Link>
        </li>
        <li>
          <Link to="/ContactUs" style={{ fontSize: '1.5rem' }}>Feedback</Link>
        </li>
        <li className="button-link">
          <a href="https://www.exploretock.com/sipnplay/" style={{ fontSize: '1.5rem' }} target="_blank" rel="noopener noreferrer">Reserve Now!</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
