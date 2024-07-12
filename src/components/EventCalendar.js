
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './../assets/css/EventCalendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Catan',
      start: new Date(2024, 6, 13, 10, 0),
      end: new Date(2024, 6, 13, 16, 0),
    },
    {
      title: 'Ticket To Ride',
      start: new Date(2024, 6, 15, 12, 0),
      end: new Date(2024, 6, 15, 18, 0),
    },
    {
        title: 'Pandemic Legacy',
        start: new Date(2024, 6, 25, 11, 0),
        end: new Date(2024, 6, 25, 17, 0),
    },
    {
        title: 'Fallout',
        start: new Date(2024, 6, 31, 14, 0),
        end: new Date(2024, 6, 31, 20, 0),
    },
    {
      title: 'Star Wars: Rebellion',
      start: new Date(2024, 7, 3, 12, 0),
      end: new Date(2024, 7, 3, 18, 0),
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
