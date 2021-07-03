import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import VideoListItem from './VideoListItem';

const VideoList = ({ list }) => {
  const renderedList = (list) => {
    return list.map((item) => <VideoListItem item={item} key={uuidv4()} />);
  };

  const result = () => {
    return (
      <div className='is-flex is-justify-content-center is-flex-wrap-wrap'>
        {renderedList(list)}
      </div>
    );
  };

  return result();
};

export default VideoList;
