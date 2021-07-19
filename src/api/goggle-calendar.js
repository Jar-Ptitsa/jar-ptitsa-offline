import request from 'superagent';
import { API_KEY } from '../config';

const CALENDAR_ID = 'sc3ec17dmrb689vp57jb27sq34@group.calendar.google.com';
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request.get(url).end((err, resp) => {
    if (!err) {
      const events = [];
      JSON.parse(resp.text).items.map((event) => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        });
        return null;
      });
      callback(events);
    }
  });
}
