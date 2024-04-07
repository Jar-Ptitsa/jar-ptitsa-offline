import axios from 'axios';

const maxResults = 2000;
let url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.GATSBY_GOOGLE_CALENDAR_ID}/events?maxResults=${maxResults}&timeZone=GMT&key=${process.env.GATSBY_GOOGLE_API_KEY}`;

export function getEvents (callback) {
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
