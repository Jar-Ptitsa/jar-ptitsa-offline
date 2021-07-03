import React from 'react';

import AlignContent from './AlignContent';
import Image from './Image';
import List from './List';
import RenderContent from './RenderContent';
import VideoList from './VideoList';
import CardList from './CardList';

const Section = ({
  title,
  description,
  image,
  alignImage,
  list,
  listType,
  listContentType = 'content',
}) => {
  const content = { title, description };
  const align = alignImage || 'center';

  const isContent = list && listContentType === 'content';
  const isVideo = list && listContentType === 'video';
  const isCard = list && listContentType === 'card';

  return (
    <section className='pt-6'>
      <AlignContent
        align={align}
        content={
          <RenderContent
            {...content}
            titleClass='title is-4 has-text-weight-semibold'
            descriptionClass='block m-1'
          />
        }
        image={<Image image={image} />}
      />
      {isContent && <List list={list} listType={listType} />}
      {isVideo && <VideoList list={list} />}
      {isCard && <CardList list={list} />}
    </section>
  );
};

export default Section;
