import React from 'react';
import ReactMarkdown from 'react-markdown';

import AlignContent from './AlignContent';
import Image from './Image';

const Electives = ({
  title,
  image,
  description,
  alignImage = 'right',
  getAsset = '',
}) => {
  const renderImage = (
    <Image
      image={image}
      getAsset={getAsset}
      className='img-fluid rounded col-sm-10 mx-auto d-block'
    />
  );

  const content = (
    <React.Fragment>
      {/* <h3 className='fw-normal'>{title}</h3> */}
      <ReactMarkdown className='' children={description} />
    </React.Fragment>
  );
  // set content alignment
  const leftContent = alignImage === 'left' ? renderImage : content;
  const rightContent = alignImage === 'right' ? renderImage : content;

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase mb-3'>
          {title}
        </h2>
        <div>
          <AlignContent
            align={alignImage}
            leftContent={leftContent}
            rightContent={rightContent}
          />
        </div>
      </div>
    </section>
  );
};

export default Electives;
