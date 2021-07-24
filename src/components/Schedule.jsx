import React from 'react';
import { ArrowRightShort } from 'react-bootstrap-icons';

const renderClassesList = (list) => {
  return list.map((item, index) => {
    return (
      <div className='d-flex align-items-baseline' key={index}>
        <ArrowRightShort size={15} className='me-2 flex-shrink-0' />
        <div className='text-break flex-shrink-1'>{item.class}</div>
      </div>
    );
  });
};

const renderTimeBlocksList = (list) => {
  return list.map((item, index) => {
    return (
      <div className='d-flex border-top' key={index}>
        <div className='col-3 d-flex align-items-center justify-content-center'>
          <div className='fs-4 fw-bold'>{item.time}</div>
        </div>
        <div className='col'>{renderClassesList(item.classes)}</div>
      </div>
    );
  });
};

const renderDaysList = (list) => {
  return list.map((item, index) => {
    const colClass =
      item.day === 'Воскресенье'
        ? 'col-12 col-sm-9 col-md-8 mx-auto px-3'
        : 'col-12 col-sm-9 col-md-6 mx-auto px-3';

    return (
      <div className={`${colClass} mt-2`} key={index}>
        <div
          className='d-flex flex-column rounded p-1'
          style={{ border: '4px solid #E5EAE1' }}>
          <div
            className='d-flex align-items-center justify-content-center p-0 rounded'
            style={{ backgroundColor: '#E5EAE1', height: '40px' }}>
            <h4 className='fw-bold'>{item.day}</h4>
          </div>
          {renderTimeBlocksList(item.time_blocks)}
        </div>
      </div>
    );
  });
};

const Schedule = ({ schedule }) => {
  const { title, days } = schedule;

  return (
    <section style={{ backgroundColor: '#F0F0F0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row mb-3'>{renderDaysList(days)}</div>
      </div>
    </section>
  );
};

export default Schedule;
