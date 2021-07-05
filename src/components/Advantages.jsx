import React from 'react';
import ReactMarkdown from 'react-markdown';
import { v4 as uuid } from 'uuid';

import Image from './Image';

const Advantages = ({ title, image, list }) => {
  const renderedImage = (
    <Image image={image} className='img-fluid rounded mb-3' />
  );

  const renderList = (list) => {
    return list.map(({ description }) => {
      return (
        <li className='my-3' key={uuid()}>
          <ReactMarkdown className='' children={description} />
        </li>
      );
    });
  };

  return (
    <section>
      {renderedImage}
      <h2 className='fw-normal'>{title}</h2>
      <ul>{renderList(list)}</ul>
    </section>
  );
};

export default Advantages;
