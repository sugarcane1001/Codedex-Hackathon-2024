
import React from 'react';
import './../assets/css/Footer.css';

import instagramLogo from './../assets/images/instagram-logo.png';
import tiktokLogo from './../assets/images/tiktok-logo.png';
import facebookLogo from './../assets/images/facebook-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <div className="hours">
            <p><b>Hours</b></p>
            <p>Sunday: 10am-11pm</p>
            <p>Mon-Thurs: 11am-11pm</p>
            <p>Fri: 11am-midnight</p>
            <p>Sat: 10am-midnight</p>
            <p style={{ fontSize: "small" }}><b>Our Kitchen closes 2.5-3 hours before we close!</b></p>
          </div>
        </div>
        <div className="footer-center">
          <div className="address">
            <p>471 5th Ave, Brooklyn, NY 11215, USA</p>
          </div>
          <div className="email">
            <p>sipnplaynyc@gmail.com</p>
          </div>
          <div className="copyright">
            <p>&copy; 2020 by Sip & Play</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-media-icons">
            <a href="https://www.instagram.com/sipnplaynyc/?hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={instagramLogo} alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/@sipnplaynycofficial" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={tiktokLogo} alt="Tiktok" />
            </a>
            <a href="https://www.facebook.com/sipnplaynyc/" className="social-icon" target="_blank" rel="noopener noreferrer">
              <img src={facebookLogo} alt="Facebook" />
            </a>
            <div className="reserve-button">
                <button className="reserve-btn" style={{ fontSize: "large" }}>Reserve Now!</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
