import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

import VideoDetail from './VideoDetail';

const renderList = (list) => {
  let colClass = 'col-md-8 offset-md-2'; // for 1 item
  if (list.length === 2) colClass = 'col-sm-6';
  if (list.length === 3) colClass = 'col-md-4';

  return list.map(({ title, video }) => {
    return (
      <div className={colClass} key={video}>
        <VideoDetail videoId={video} title={title} />
      </div>
    );
  });
};

const Wednesday = ({ title, description, list }) => {
  return (
    <section>
      <div className='container mt-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start'>{title}</h2>
        <ReactMarkdown className='' children={description} />
        <div className='row mb-3'>{renderList(list)}</div>
      </div>
      <div className='d-flex justify-content-center mb-3'>
        <Link
          to='/classes-schedule'
          className='btn btn-md btn-outline-secondary'>
          В Учительскую
        </Link>
      </div>
    </section>
  );
};

export default Wednesday;
