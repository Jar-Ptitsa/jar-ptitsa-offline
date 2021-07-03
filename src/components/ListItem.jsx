import React from 'react';
import RenderContent from './RenderContent';

import Image from './Image';
import AlignContent from './AlignContent';

const ListItem = ({ item, listType }) => {
  const align = item.alignImage;
  const isNone = listType === 'none';

  const renderListItem = (item, listType) => {
    return (
      <React.Fragment>
        {isNone ? (
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
    <AlignContent
      align={align}
      content={renderListItem(item, listType)}
      image={<Image image={item.image} />}
    />
  );
};

export default ListItem;
