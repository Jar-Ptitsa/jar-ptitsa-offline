import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ru';

// tutorial https://jquense.github.io/react-big-calendar/examples/index.html
// https://blog.daftcode.pl/react-calendar-with-google-calendar-as-cms-tutorial-5f5d81e425a9
import { getEvents } from '../api/goggle-calendar';

const localizer = momentLocalizer(moment);
const translatedCalendarToRus = {
  date: 'Дата',
  time: 'Время',
  event: 'Мероприятие',
  allDay: 'Весь день',
  week: 'Неделя',
  work_week: 'Рабочая неделя',
  day: 'День',
  month: 'Месяц',
  previous: '<<',
  next: '>>',
  yesterday: 'Вчера',
  tomorrow: 'Завтра',
  today: 'Сегодня',
  agenda: 'Агенда',

  noEventsInRange: 'Для указанного периода нет мероприятий.',

  showMore: (total) => `+${total} еще`,
};

const GoogleCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents((events) => setEvents(events));
  }, []);

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          Школьный календарь
        </h2>
        <div className='calendar pt-2'>
          <Calendar
            localizer={localizer}
            // culture='ru-Ru'
            events={events}
            views={['month']}
            defaultView='month'
            style={{ height: '670px' }}
            popup={true}
            messages={translatedCalendarToRus}
          />
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendar;
