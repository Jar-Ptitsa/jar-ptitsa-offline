import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';

import AlignContent from './AlignContent';
import Image from './Image';

const Children = ({
  mainDescription,
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
      <ReactMarkdown className='' children={description} />
    </React.Fragment>
  );
  // set content alignment
  const leftContent = alignImage === 'left' ? renderImage : content;
  const rightContent = alignImage === 'right' ? renderImage : content;

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <div className='mb-3'>{mainDescription}</div>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
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
      <div className='d-flex justify-content-center pb-3'>
        <Link to='/sunday-club' className='btn btn-md btn-outline-secondary'>
          Воскресный клуб
        </Link>
      </div>
    </section>
  );
};

export default Children;
