import React from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import Image from './Image';

const renderList = (list) => {
  return list.map(({ description }) => {
    return (
      <li className='my-3' key={uuid()}>
        <ReactMarkdown className='' children={description} />
      </li>
    );
  });
};

const Advantages = ({ title, image, list, getAsset = null }) => {
  const renderedImage = (
    <Image
      image={image}
      getAsset={getAsset}
      className='img-fluid rounded mb-3'
    />
  );

  return (
    <section style={{ backgroundColor: '#000', color: '#fff' }}>
      <div className='container pb-3' style={{ maxWidth: '960px' }}>
        {renderedImage}
        <h2 className='fw-normal'>{title}</h2>
        <ul>{renderList(list)}</ul>
      </div>
    </section>
  );
};

export default Advantages;
