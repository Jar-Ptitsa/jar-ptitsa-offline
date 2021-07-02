import React from 'react';

const VideoDetail = ({ video: videoId, title }) => {
  return (
    <div className='card'>
      <div className='card-image'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='video iframe'
          frameBorder='0'
        />
      </div>
      <div className='card-content'>
        <div className='card-header'>
          <p className='card-header-title'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
