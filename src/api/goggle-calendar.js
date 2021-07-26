import axios from 'axios';
import { API_KEY } from '../config';

const CALENDAR_ID = 'sc3ec17dmrb689vp57jb27sq34@group.calendar.google.com';
const maxResults = 2000;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=${maxResults}&timeZone=GMT&key=${API_KEY}`;

export function getEvents(callback) {
  axios
    .get(url)
    .then((resp) => {
      const events = [];

      resp.data.items.map((event) => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
        });
        return null;
      });
      callback(events);
    })
    .catch((err) => {
      console.log(err);
    });
}
