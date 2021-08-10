import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const DirectorSpeech = ({ principal, getAsset = '' }) => {
  const { image, description, title } = principal;

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {title}
        </h2>
        <div className='row m-0 p-0 align-items-center'>
          <div className='col-sm-4'>
            <Image
              image={image}
              getAsset={getAsset}
              className='img-fluid rounded col-8 col-sm-10 mx-auto d-block'
            />
          </div>
          <div className='col mt-3 mt-sm-0'>
            <ReactMarkdown className='' children={description} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSpeech;
