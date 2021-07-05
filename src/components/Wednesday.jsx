import React from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import VideoDetail from './VideoDetail';

const Wednesday = ({ title, description, list }) => {
  const renderList = (list) => {
    let colClass = 'col-md-8 offset-md-2'; // for 1 item
    if (list.length === 2) colClass = 'col-sm-6';
    if (list.length === 3) colClass = 'col-md-4';

    return list.map(({ title, video }) => {
      return (
        <div className={colClass} key={uuid()}>
          <VideoDetail videoId={video} title={title} />
        </div>
      );
    });
  };

  return (
    <section>
      <h2 className='fw-normal'>{title}</h2>
      <ReactMarkdown className='' children={description} />
      <div className='row mb-3'>{renderList(list)}</div>
    </section>
  );
};

export default Wednesday;
