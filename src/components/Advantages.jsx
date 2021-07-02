import React from 'react';

import AlignContent from './AlignContent';
import Image from './Image';
import List from './List';
import RenderContent from './RenderContent';

const Advantages = ({
  title,
  description,
  image,
  alignImage,
  list,
  listType,
}) => {
  const content = { title, description };
  const align = (alignImage && alignImage[0]) || 'center';

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
      {list && <List list={list} listType={listType} />}
    </section>
  );
};

export default Advantages;
