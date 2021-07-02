import React from 'react';
import RenderContent from './RenderContent';

import Image from './Image';
import AlignContent from './AlignContent';
import VideoDetail from './VideoDetail';

const ListItem = ({ item, listType }) => {
  const align = item.alignImage;
  const isVideo = item.description.includes('youtube');

  const renderVideoItem = ({ title, description }) => {
    if (isVideo) {
      const videoId = description.split(' ')[1];

      return <VideoDetail videoId={videoId} title={title} />;
    }
  };

  const renderListItem = (item, listType) => {
    return (
      <React.Fragment>
        {listType === 'none' ? (
          <RenderContent {...item} />
        ) : (
          <li>
            <RenderContent {...item} />
          </li>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {isVideo && renderVideoItem(item)}
      {!isVideo && (
        <AlignContent
          align={align}
          content={renderListItem(item, listType)}
          image={<Image image={item.image} />}
        />
      )}
    </React.Fragment>
  );
};

export default ListItem;
