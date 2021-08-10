import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const DirectorSpeech = ({ principal, getAsset = '' }) => {
  const { image, description, signature } = principal;

  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <div className='row m-0 p-0 align-items-center'>
          <div className='col-sm-4'>
            <Image
              image={image}
              getAsset={getAsset}
              className='img-fluid rounded col-8 col-sm-10 mx-auto d-block'
            />
          </div>
          <div className='col mt-3 mt-sm-0'>
            <figure>
              <blockquote className='blockquote'>
                <ReactMarkdown className='' children={description} />
              </blockquote>
              <figcaption className='blockquote-footer text-end'>
                <cite title={signature}>{signature}</cite>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectorSpeech;
