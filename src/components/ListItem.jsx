import React from 'react';
import RenderContent from './RenderContent';

import Image from './Image';
import AlignContent from './AlignContent';
import { v4 as uuidv4 } from 'uuid';

const ListItem = ({ item, listType }) => {
  const align = item.alignImage;
  const image = item.image && item.image;

  const content = (item, listType) => {
    console.log({ ...item });
    return (
      <React.Fragment key={uuidv4}>
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

  console.log(content(item, listType));

  return (
    <AlignContent
      align={align}
      content={content(item, listType)}
      image={<Image image={image} />}
    />
  );
};

export default ListItem;
