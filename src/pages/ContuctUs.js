import React from 'react';
import '../assets/css/ContactUs.css';
import contactImage from './../assets/images/contact-us-image.jpg';

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus-form">
        <h2>Contact Us</h2>
        <hr style={{ width: '15%', marginLeft: '0', border: 'none', borderTop: '2px solid #343a40' }}/>
        <p>Submit general questions, suggestions, and board game recommendations below!</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contactus-image">
        <img src={contactImage} alt="Contact Us" />
      </div>
    </div>
  );
};

export default ContactUs;
