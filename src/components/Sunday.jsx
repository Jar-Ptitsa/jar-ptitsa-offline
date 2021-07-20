import React from 'react';
import ReactMarkdown from 'react-markdown';

import VideoDetail from './VideoDetail';

const Sunday = ({ title, sunday }) => {
  const { title: sundayTitle, description, videos } = sunday;

  const renderVideoList = (list) => {
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

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <h3 className='col-12 text-center text-sm-start mb-md-3 p-0'>
          {sundayTitle}
        </h3>
        <ReactMarkdown className='' children={description} />
        <div className='row mb-3'>{renderVideoList(videos)}</div>
      </div>
    </section>
  );
};

export default Sunday;
