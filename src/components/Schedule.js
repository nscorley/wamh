import React from 'react';
import { Grid } from 'react-bootstrap';

// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import { schedule } from '../utils/constants';


export default class Schedule extends React.Component {
  constructor(props) {
    super(props);
    // load events from schedule
    const eventsByDay = {
      0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [],
    };

    // loop through days
    Object.keys(schedule).forEach((day) => {
      // loop through hours
      Object.keys(schedule[day]).forEach((hour) => {
        const e = schedule[day][hour];

        // if no events for day, or new event
        if (!eventsByDay[day].length || eventsByDay[day][eventsByDay[day].length - 1].title !== e) {
          const newEvent = {
            title: e,
            dow: [day],
            start: `${hour}:00`,
            end: `${parseInt(hour, 10) + 1}:00`,
          };
          eventsByDay[day].push(newEvent);
        } else {
          eventsByDay[day][eventsByDay[day].length - 1].end = `${parseInt(hour, 10) + 1}:00`;
        }
      });
    });

    // collect all the events
    const events = [].concat(...Object.values(eventsByDay));

    // add NEPR
    events.push({
      title: 'NEPR',
      dow: [0, 1, 2, 3, 4, 5, 6, 7],
      start: '03:00:00',
      end: '15:00:00',
    });

    // set events to the state
    this.state = {
      events,
    };
  }

  render() {
    // TODO: schedule look better on mobile
    return (
      <div id="schedule">
        <Grid>
          <h1>
            Schedule
          </h1>
          <p>
            When WAMH is not performing its regular programming, we switch over to streaming our local public radio station, <a href="http://nepr.net/#stream/0">NEPR</a>. Then, the live internet audiocast is turned off - you&rsquo;ll need to tune into 89.3 FM.
          </p>
          <hr />
          <FullCalendar
            id="wamh-calendar"
            header={{
              left: 'prev, next',
              center: 'title',
              right: 'today',
            }}
            allDaySlot={false}
            defaultView="agendaWeek"
            defaultDate={new Date()}
            nowIndicator
            events={this.state.events}
            themeSystem="bootstrap3"
            scrollTime="00:00:00"
          />
        </Grid>
      </div>
    );
  }
}
