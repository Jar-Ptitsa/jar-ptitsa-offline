import React from 'react';

const VideoDetail = ({ videoId, title }) => {
  return (
    <div className='card m-2'>
      <div className='card-image'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='video iframe'
          frameBorder='0'
        />
      </div>
      <p className='card-header-title'>{title}</p>
    </div>
  );
};

export default VideoDetail;
