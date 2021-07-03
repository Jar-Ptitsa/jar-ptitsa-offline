import React from 'react';

import VideoDetail from './VideoDetail';

const VideoListItem = ({ item }) => {
  const isVideo = item.description.includes('youtube');

  const renderVideoItem = ({ title, description }) => {
    if (isVideo) {
      const videoId = description.split(' ')[1];

      return <VideoDetail videoId={videoId} title={title} />;
    }
  };

  return <React.Fragment>{renderVideoItem(item)}</React.Fragment>;
};

export default VideoListItem;
