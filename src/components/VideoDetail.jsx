import React from 'react';

const VideoDetail = ({ videoId, title }) => {
  return (
    <div className='card shadow mb-3'>
      <div className='ratio ratio-16x9'>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='video iframe'
          frameBorder='0'
          allowFullScreen
        />
      </div>
      {title && (
        <React.Fragment>
          <div className='card-body'>
            <h5 className='card-title text-center m-0'>{title}</h5>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default VideoDetail;
