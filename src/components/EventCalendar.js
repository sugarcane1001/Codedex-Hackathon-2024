
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './../assets/css/EventCalendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Dungeons and Dragons',
      start: new Date(2024, 6, 12, 19, 0),
      end: new Date(2024, 6, 12, 23, 0),
    },
    {
      title: 'Chess Tournament',
      start: new Date(2024, 6, 15, 12, 0),
      end: new Date(2024, 6, 15, 18, 0),
    },
    {
        title: 'Windmill Valley',
        start: new Date(2024, 6, 25, 10, 0),
        end: new Date(2024, 6, 25, 16, 0),
    },
    {
        title: 'Rogue Seas',
        start: new Date(2024, 6, 30, 1, 0),
        end: new Date(2024, 6, 30, 19, 0),
    },
  ]);

  return (
    <div className="calendar-container">
      <h2>Event Calendar</h2>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%', fontFamily: 'Saira' }}
        />
      </div>
    </div>
  );
};

export default EventCalendar;
