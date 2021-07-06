import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';
import VideoDetail from './VideoDetail';

// render teachers photos
const renderList = (list) => {
  return list.map((image) => {
    return (
      <div className='col-6 col-sm-4' key={image.image}>
        <Image image={image.image} className='img-fluid w-75 mx-auto d-block' />
      </div>
    );
  });
};

const Treasure = ({ title, teachers, dance }) => {
  return (
    <section>
      <h2 className='fw-normal'>{title}</h2>
      <ReactMarkdown className='' children={teachers.description} />
      <div className='row mb-3'>{renderList(teachers.list)}</div>
      <div className='row'>
        <div className='col-md-4 pt-3 order-2 order-md-1'>
          <VideoDetail videoId={dance.video} />
        </div>
        <div className='col order-md-2'>
          <ReactMarkdown className='' children={dance.description} />
        </div>
      </div>
    </section>
  );
};

export default Treasure;
