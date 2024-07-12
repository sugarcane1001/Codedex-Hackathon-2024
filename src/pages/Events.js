import React from 'react';
import EventCalendar from '../components/EventCalendar';
import '../assets/css/Events.css'; 

const Events = () => {
  return (
    <div className="events-container">
      <EventCalendar />

      <div className="events-content">
        <div className="content-text">
          <h2>Welcome to Our Events!</h2>
          <p>Discover a world of exciting events at Sip & Play. From Dungeons and Dragons to Chess Tournaments and more, there's something for everyone.</p>
        </div>

        <div className="event-buttons">
          <a href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0" className="button-link" target="_blank" rel="noopener noreferrer">Explore Our Board Game Collections</a>
          <a href="https://discord.com/invite/bdURvWC" className="button-link" target="_blank" rel="noopener noreferrer">Join our Discord Community</a>
        </div>
      </div>
    </div>
  );
};

export default Events;
