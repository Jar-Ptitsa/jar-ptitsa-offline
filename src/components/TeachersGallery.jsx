import React from 'react';

import Image from './Image';

const TeachersGallery = ({ teachers, className, getAsset = '' }) => {
  // render teachers photos
  const renderList = (list, getAsset) => {
    return list.map((image, index) => {
      return (
        <div className={className} key={index}>
          <Image
            image={image.image}
            getAsset={getAsset}
            className='img-fluid w-75 mx-auto d-block'
          />
        </div>
      );
    });
  };
  return (
    <section style={{ backgroundColor: '#f0f0f0' }}>
      <div className='container py-3' style={{ maxWidth: '960px' }}>
        <h2 className='fw-normal text-center text-sm-start text-uppercase'>
          {teachers.title}
        </h2>
        <div className='row mb-3'>{renderList(teachers.list, getAsset)}</div>
      </div>
    </section>
  );
};

export default TeachersGallery;
