import React from 'react';
import ReactMarkdown from 'react-markdown';

import Image from './Image';

const JarPtenchiki = ({ jar_ptenchiki, getAsset }) => {
  const { title, description, photos } = jar_ptenchiki;

  // render photos
  const renderList = (list, getAsset) => {
    return list.map((image, index) => {
      const style = { height: '200px', objectFit: 'cover' };

      return (
        <div
          className='col-6 col-sm-4 p-2 d-flex justify-content-center align-items-center'
          key={index}>
          <Image
            image={image.image}
            getAsset={getAsset}
            className='img-fluid w-100 rounded'
            style={style}
          />
        </div>
      );
    });
  };

  return (
    <section>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h3 className='col-12 text-center text-sm-start mb-md-3 p-0'>
          {title}
        </h3>
        <ReactMarkdown className='' children={description} />
        <div className='row m-0 mb-3'>
          {photos && renderList(photos, getAsset)}
        </div>
      </div>
    </section>
  );
};

export default JarPtenchiki;
