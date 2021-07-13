import React from 'react';
import ReactMarkdown from 'react-markdown';

import AlignContent from './AlignContent';
import Image from './Image';

// list
const renderList = (list) => {
  return list.map(({ title, description, image, alignImage }) => {
    // prepare content
    const renderImage = (
      <Image image={image} className='img-fluid rounded col-sm-10 mx-auto d-block' />
    );

    const content = (
      <React.Fragment>
        <h3 className='fw-normal'>{title}</h3>
        <ReactMarkdown className='' children={description} />
      </React.Fragment>
    );
    // set content alignment
    const leftContent = alignImage === 'left' ? renderImage : content;
    const rightContent = alignImage === 'right' ? renderImage : content;

    return (
      <li className='my-3' key={title}>
        <AlignContent
          align={alignImage}
          leftContent={leftContent}
          rightContent={rightContent}
        />
      </li>
    );
  });
};

const Reasons = ({ title, list }) => {
  return (
    <section>
      <h2 className='fw-normal'>{title}</h2>
      <ul className='list-unstyled'>{renderList(list)}</ul>
    </section>
  );
};

export default Reasons;
